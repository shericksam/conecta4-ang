import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConnectServer } from './connect-server';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router, private connectServer: ConnectServer) {
    
  }

  signinUser(username: string, password: string, callback) {
    // localStorage.setItem("token",  this.token = "this.token = response.json().token");
    // this.router.navigateByUrl('/tablero');

    this.connectServer.singIn(username,
      password)
      .subscribe(
        data => {
          console.log(data);
          callback({ respuesta: true });
          localStorage.setItem("token", this.token = data.tokenObj.token);
          // this.getToken();
          this.router.navigateByUrl('/tablero');
        },err => {
          callback({ respuesta: false });
          console.log(err);
        }
      );
  }

  signUpUser(username: string, password: string, callback){
    this.connectServer.singUp(username,
      password).subscribe(
        data => {
          console.log(data);
          callback({ respuesta: true });
          localStorage.setItem("token", this.token = data.tokenObj.token);
          // this.getToken();
          this.router.navigateByUrl('/tablero');
        },err => {
          callback({ respuesta: false });
          console.log(err);
        }
      );
  }

  singOut(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  public getToken() {
    this.token = localStorage.getItem("token");
    return this.token;
  }

  isAuthenticated() {
    // return true;
    console.log(this.token);
    return this.getToken() != null;
  }
}
