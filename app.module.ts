import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AuthComponent } from './auth/auth.component';
import { PersonalComponent } from './personal/personal.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ValidateFormService} from "./validate-form.service";
import  { FlashMessagesModule} from "angular2-flash-messages";

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: SingUpComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'personal', component: PersonalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingUpComponent,
    AuthComponent,
    PersonalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
