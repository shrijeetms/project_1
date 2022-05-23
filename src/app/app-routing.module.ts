import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{path:'home', component:HomeComponent},{path:'register', component:RegFormComponent}
,{path:'users', component:UsersListComponent}, {path:'thankyou', component:ThankyouComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

