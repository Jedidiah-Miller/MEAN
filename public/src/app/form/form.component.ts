import { Component, OnInit, Input } from '@angular/core'
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HomeComponent } from '../home/home.component'

@Component ({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:any
  message:any
  formObj: any
  newComment: any
  newEdit:any
  newEdit2:any
  editObj:any
  editFormBtn:any
  addBtn:any
  errors:any
  objData:any

@Input() homeEdit:any

  // this is important
  properties:any

// reusable form for creating and editing
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    // private _home: HomeComponent
  ) {
    this.formObj = {
      name: '', type: '',
        review: [ { type:'', desc: '', skills:'' } ],
      }
    this._route.params
      .subscribe((params : Params) => {
// edit object / add review or comment
// if you want to bind the entire object by the _id to the form, then set this.forObj = data
        if ( 'id' in params  ) {
          // this.formObj = { review: [ { type:'', desc: '', skills: [] } ] }
          console.log("there is an id --- ", params.id )
          this._httpService.getOne(params['id'])
          .subscribe(data => {
            this.newEdit = data
            console.log("got this object -- ", this.formObj  )
            this.editFormBtn = true
            this.homeEdit = null
            // this.addBtn = false
            this.title = ('write a review for '+ this.newEdit.name)
          })
// add
        } else {
          console.log('add form ')
          this.title= 'add restaurant'
          this.properties = [ 'add' ]
          this.addBtn = true
          return false
        }
      })
    }

  ngOnInit() {
    this.editFormBtn = false
    this.addBtn = false
//editing from the home screen, nested compoent stuff

    if (this.homeEdit) {
      console.log("got this home edit ", this.homeEdit)
      this.formObj = this.homeEdit
      console.log("home edit on form ", this.formObj)
      this.title = ("edit "+ this.formObj.name)
    }

  }

  goHome() {
    if(this.homeEdit) {
      this.goToInfo(this.homeEdit._id)

    } else {
          this._router.navigate(['restaurants'])
    }
  }

  goToInfo(id) {
    this._httpService.getInfo(id)
  }

  newObjToService(obj) {
    let thisObj = {name: obj.name, type: obj.type}
    console.log("new obj to service -- " +obj  )
    this._httpService.newObj(thisObj)
    .subscribe((data) => {
      if('errors' in data) {
        this.errors = data['errors']['name']
      } else {
      this.formObj = data
      console.log("part 2 new obj to service -- " +obj.name)
      this.goHome()
      }
    })
    console.log("part 3 new obj to service -- " +obj.name )
    this._httpService.getAll()
    this.homeEdit = null
  }

  newReview() {
    console.log("review from service -- ", this.formObj  )
    // this._httpService.editOne(obj, id)
    this._httpService.addReview(this.newEdit._id, this.formObj )
    .subscribe((data) => {
      console.log("part 2 edit obj to service -- " + data)
      if('errors' in data ) {
        this.errors = data['errors']['type']['desc']['skills']['message']
      } else {
      // this.formObj = data
      console.log("part 2 edit obj to service -- " + this.formObj.name)
      this.goHome()
      }
    })
    this._httpService.getAll()
    this.homeEdit = null
  }

  newChildObj() {
    console.log("review from service -- ", this.formObj  )
    // this._httpService.editOne(obj, id)
    this._httpService.addChildObj(this.newEdit._id, this.formObj )
    .subscribe((data) => {
      console.log("part 2 edit obj to service -- " + data)
      if('errors' in data) {
        this.errors = data['errors']['name']
      } else {
      // this.formObj = data
      console.log("part 2 edit obj to service -- " + this.formObj.name)
      this.goHome()
      }
    })
    this._httpService.getAll()
  }

  editFromService() {
    // let editObj = { review: [ { type:this.formObj.type, desc: this.formObj.desc, skills: this.formObj.skills } ] }
    console.log("edit from service -- ", this.formObj  )
    // this._httpService.editOne(obj, id)
    this._httpService.editOne(this.formObj._id, this.formObj )
    .subscribe((data) => {
      console.log("part 2 edit obj to service -- " + data)
      if('errors' in data) {
        this.errors = data['errors']['name']
      } else {
      // this.formObj = data
      console.log("part 2 edit obj to service -- " + this.formObj.name)
      // this.goHome()
      }
    })
    this.goToInfo(this.formObj._id)
    this.homeEdit = null
  }

// addTwoObj() {
//   this.newReview()
//   this.newChildObj()
// }


  // show() {
  //   this.b
  // }

}
