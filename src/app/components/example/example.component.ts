import { Component, OnInit } from '@angular/core';
import {inspect} from 'util';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {

    firstname;
    lastname;
    display;
    lastn;
    email;
    getemail;
  constructor() {


    //   const btn = document.getElementById('button');
    //
    //   btn.addEventListener('click', ev => this.showMessage(1);
    // }
  }

  ngOnInit() {
      this.firstname = document.getElementById('firstname');
      this.lastname = document.getElementById('lastname');
      this.display = document.getElementById('display');
      this.lastn = document.getElementById('last');
      this.email = document.getElementById('email');
      this.getemail = document.getElementById('getemail');



      function showMessage() {
          this.display = this.firstname;
          this.lastn = this.lastname;
          this.email = this.getemail;

      }
    }
  }

