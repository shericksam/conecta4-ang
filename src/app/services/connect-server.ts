import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class ConnectServer {
  constructor(private http: Http, private httpClient: HttpClientModule) {}
  host:String = "https://192.168.1.1/";
  
  singIn(username, password){
    var data = {
      username: username,
      password: password
    }
    return this.http.post(this.host + "singIn", data);
  }
  singUp(username, password){
    var data = {
      username: username,
      password: password
    }
    return this.http.post(this.host + "singUp", data);
  }
}
