import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FormComponent } from './form/form.component'
import { AlphaComponent } from './alpha/alpha.component';

import { AppComponent } from './app.component'

// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes : Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  // {path: ':route', component: AppComponent },
  {path: 'restaurants', component: HomeComponent,
  },

{path: 'update/:id', component: FormComponent },
{path: 'new', component: FormComponent },
  {path: 'restaurants/:id', component: AlphaComponent },

  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

