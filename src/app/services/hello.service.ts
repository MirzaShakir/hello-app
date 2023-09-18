import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  url: string

  constructor(private http: HttpClient) { 
    this.url = 'http://worldemp.laravel-hello.lcl/api/';
  }

   httpOptions = {

    headers: new HttpHeaders({

     'Content-Type':  'application/json',

     'Authorization':  'Bearer MY_API_TOKEN'

    })};

  getHellos() {
    return this.http.get(this.url + 'hellos', this.httpOptions);
  }

  addHello(hello: any) {
    return this.http.post(this.url + 'hello/create', hello, this.httpOptions)
  }

  updateHello(hello: any) {
    return this.http.post(this.url + 'hello/update', hello, this.httpOptions);
  }

  deleteHello(id: number) {
    return this.http.get(this.url + 'hello/delete?id='+id, this.httpOptions);
  }
}