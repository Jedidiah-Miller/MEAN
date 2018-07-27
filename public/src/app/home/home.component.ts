import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allObjects: any
  selected: any
  newObj: any
  objData: any
  newComment: any
  editFromServiceObj: any
  editObj:any
  editFormObj:any

  formObj:any

  now:any
  editFormBtn:any
  displayForm:any

  addBtn:any
  avgStars:any


  showBtn:any

  constructor(
    private _httpService: HttpService,
    private _router: Router,

  ) {}

  ngOnInit() {
    this.getAllFromService()
    this.objData = null
    this.now = new Date().getTime()

  }

  goToForm(obj) {
    console.log("home edit form ", obj)
    this._httpService.getOne(obj._id)
    .subscribe((data) => {
      console.log("home edit data ", data);
      this.editObj = data;
    })
  }

  goToInfo(id) {
    this._httpService.getInfo(id)
  }

  getAllFromService() {
    this._httpService.getAll()
    .subscribe((data) => {
      console.log("getAll data",
      data)
      this.allObjects = data
      this.editFormBtn = false
    })

  }

  deleteFromService(obj) {
    this._httpService.destroy(obj)
    .subscribe((data) => {
      this.allObjects = data
      this.objData = null
    })
    this.getAllFromService()

  }
}
