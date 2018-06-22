import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConnectServer {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
  }
  host:String = "http://127.0.0.1:3333/";
  
  singIn(username, password){
    var data = {
      username: username,
      password: password
    }
    return this.http.post<ResponseServer>(this.host + "login", data);
  }
  singUp(username, password){
    // console.log(this.host + "users");
    var data = {
      username: username,
      password: password
    }
    return this.http.post<ResponseServer>(this.host + "users", data);
    // return this.http.post(this.host + "users", data);
  }

  getHeaders(){
    return this.headers
  }

  getInfoUser(id){
    return this.http.post<Usuario>(this.host + "users/"+ id , { headers:this.getHeaders } );
  }
}
