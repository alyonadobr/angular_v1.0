import { Component, OnInit } from '@angular/core';
import { ValidateFormService} from "../validate-form.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;


  constructor(private checkForm: ValidateFormService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  userRegisterClick(){
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    };

    if(!this.checkForm.checkName(user.name)){
        this.flashMessages.show("Имя пользователя не введено", {
          cssClass: 'alert-danger', timeout: 5000
        });
        return false;
    } else if (!this.checkForm.checkLogin(user.login)){
      this.flashMessages.show("Login пользователя не введен", {
        cssClass: 'alert-danger', timeout: 5000
      });
      return false;
    }  else if (!this.checkForm.checkEmail(user.email)){
      this.flashMessages.show("Email пользователя не введен", {
        cssClass: 'alert-danger', timeout: 5000
      });
      return false;
    } else if (!this.checkForm.checkPassword(user.password)){
      this.flashMessages.show("Пароль пользователя не введен", {
        cssClass: 'alert-danger', timeout: 5000
      });
      return false;
    }





  }

}
