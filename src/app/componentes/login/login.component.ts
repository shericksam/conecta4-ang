import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material';
import { SinginComponent } from '../singin/singin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameFail = "El username es necesario";
  passFail = "La contraseña es necesaria";
  constructor(private authService: AuthService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.usernameFail = "El username es necesario";
    this.passFail = "La contraseña es necesaria";
    const username = form.value.username;
    const password = form.value.pass;
    this.authService.signinUser(username, password, (respuesta) => {
      if(!respuesta){
        form.resetForm();
        this.usernameFail = "Verifique campo";
        this.passFail = "Verifique campo";
      }
    });
  }

  onCreateAccount(form: NgForm){
    this.dialog.open(SinginComponent, {
      data: {
        form : form
      }
    });
  }
}
