import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NgForOfContext } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  usernameFail = "El username es necesario";
  passFail = "La contraseña es necesaria";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) {
    // console.log(data.value.username);
    // this.form.value.username = data.value.username;
   }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    this.usernameFail = "El username es necesario";
    this.passFail = "La contraseña es necesaria";
    const username = form.value.username;
    const password = form.value.pass;
    this.authService.signUpUser(username, password, (respuesta) => {
      if(!respuesta){
        form.resetForm();
        this.usernameFail = "Verifique campo";
        this.passFail = "Verifique campo";
      }
    });
  }
}
