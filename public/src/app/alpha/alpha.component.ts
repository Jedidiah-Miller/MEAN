import { Component, OnInit, Input } from '@angular/core'
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HomeComponent } from '../home/home.component'

@Component ({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  title:any

  objData:any
  likeBtn:any
  skills:any
properties:any

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    // private _home: HomeComponent
  ) {
    this._route.params
      .subscribe((params : Params) => {
        this._httpService.getOne(params['id'])
        .subscribe(data => {
          if (!data) {
            this.goHome()
            console.log("the data is null -- ", this.objData)
          } else {
            this.objData = data
            // let thisArr = [data]
            // thisArr.sort()
            // console.log("thisArr ",thisArr)
            console.log("got this data ", this.objData)
            this.title = ('info for '+ this.objData.name)

            this.properties = [
              this.objData.review
            ]
            console.log("this object ", this.properties[0])
          }
        })
      })

    }

  ngOnInit() {
    this.likeBtn = true
  }

  goHome() {
    // this.objData = null
    this._router.navigate(['restaurants'])
  }

  goToForm(id) {
    this._httpService.fillFormInfo(id)
  }

  deleteFromService(obj) {
    this._httpService.destroy(obj)
    .subscribe((data) => {
      this.objData = data
    })
    this.goHome()
  }

  deleteCommentFromService(id) {
    let obj = {_id: id}
    this._httpService.deleteComment(this.objData._id, obj)
    .subscribe((data) => {
      this.objData = data
    })

    // this.
    console.log("3. deleted")
  }

    newlikeToService(id) {
    console.log("new like to service -- ")
    this.objData.likes ++
    this._httpService.editOne(this.objData._id, id)
    .subscribe((data) => {
    })
    this.likeBtn = false
  }

}
