import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CountryPipe } from './country.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    UsersListComponent,
    HomeComponent,
    NavComponent,
    ThankyouComponent,
    CountryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
