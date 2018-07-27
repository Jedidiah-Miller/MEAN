import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient, private _router: Router) { }

    getAll() {
      console.log('getAll from service route')
      return this._http.get('/main')
    }
    getOne(id) {
      console.log('getOne route '+ id)
      return this._http.get('/main/' +id)
    }
    newObj(obj){
      console.log('newObject from service route --- '+ obj.name)
      return this._http.post('/main', obj)
    }
    // newComment(obj, id) {
    //   return this._http.put('/main/'+ obj, id)
    // }
    // adding to an existing
    addReview(id, obj) {
      console.log('edit from service route --- ' +id)
      return this._http.put('/main/' + id, obj)
    }
    addChildObj(id, obj) {
      console.log('edit from service route --- ' +id)
      return this._http.put('/main/c/' + id, obj)
    }

// editing
    editOne(id, obj) {
      console.log('edit from service route --- ' +id, obj)
      return this._http.patch('/main/e/' + id, obj)
    }

    destroy(id) {
      console.log('delete from service route --- ' +id)
      return this._http.delete('/main/' + id)
    }
    deleteComment(id, Id) {
      console.log('delete comment from service route --- ' +id, Id)
      return this._http.post('/main/com/' + id, Id)
    }

    deleteChildObj2(id, Id) {
      console.log('delete comment from service route --- ' +id, Id)
      return this._http.post('/main/obj/' + id, Id)
    }

// switching router outlets
    getInfo(id) {
      console.log('get info from service route --- ' )
      this._router.navigate(['restaurants', id])
    }

    fillFormInfo(id) {
      console.log('fill form from service route --- ', id )
      this._router.navigate(['update', id])
    }

    fillEditFormInfo(id) {
      console.log('fill form from service route --- ', id )
      this._router.navigate(['', id])
    }

  }       // last closing brace ----------
