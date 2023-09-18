import { Component, OnInit } from '@angular/core';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-hellos',
  templateUrl: './hellos.component.html',
  styleUrls: ['./hellos.component.css']
})
export class HellosComponent implements OnInit {

  hellos: any[] = [];
  helloname!: string;

  constructor(private helloService: HelloService) { }

  ngOnInit() {
   this.getHellos();
  }

  getHellos() {
    this.helloService.getHellos().subscribe((hellos: any) => {
        console.log(hellos);
         this.hellos = hellos.data;
    });
  }

  addNewHello() {
    if( this.helloname == '' || typeof(this.helloname) == 'undefined' ) {
        alert('Please add hello first');
        return;
    }

    this.helloService.addHello({
      name: this.helloname
    }).subscribe(() => {
      this.helloname = '';
      this.getHellos();
    }, (error) => {
        alert(error.error.message);
    });
  }

  deleteHello(id: any) {
    this.helloService.deleteHello(id).subscribe(() => {
        this.hellos = this.hellos.filter(hello => hello.id !== id);
      });;
  }

  updateHello(hello: any) {
    this.helloService.updateHello(hello).subscribe((hello: any) => {
        hello = hello
    });
  }

}
