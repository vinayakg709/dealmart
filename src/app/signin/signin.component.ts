import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  data: any;
  u: any;
  constructor(private server:ServerService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    // console.log(form.value);
    this.server.loginUser(form.value)
    .subscribe(
      res => {
        this.data = res;
        console.log(this.data);
        this.u =  this.data.username;

        
        this.server.tokenUser(this.u,form.value.password).subscribe(
          resp => {
            this.data = resp;
            console.log(this.data);
          },
          err =>  console.log(err)
        );
      
         
      },
      err =>  console.log(err)
    );

    
  }

}
