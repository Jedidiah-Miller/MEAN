import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { AlphaComponent } from './alpha/alpha.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    FormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // )
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// ng s --port 4200 --host 0.0.0.0
// ng g s http
