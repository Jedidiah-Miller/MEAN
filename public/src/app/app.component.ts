import { Component, OnInit, Input } from '@angular/core'
import { HttpService } from './http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lets eat'
  route:any
  routes = [
    {route: 'restaurants', name: 'home page'},
    {route: 'new', name: 'add new'},
  ]

  allObjects: any
  selected: any
  newObj: any
  oneObj: any
  // editFromServiceObj: any
  editObj:any
  editFormObj:any
  editFormBtn:any
  displayForm:any

  addBtn:any

  @Input() newEdit:any

  errors: any
  constructor(private _httpService: HttpService,_route: ActivatedRoute,) {}

  ngOnInit() {
    console.log('being inted')
  }

}

// ng s --port 4200 --host 0.0.0.0
// ng g s http
