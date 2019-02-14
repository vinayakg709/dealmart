import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../services/user.model';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  data: any;
  error: any;
  id: number;
  constructor(private server: ServerService,private router: Router) { }

  ngOnInit() {
  }

  reserform(form? : NgForm){
    if (form != null)
    form.reset();
    this.user = {
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    }
  }

  onSignup(form: NgForm){
    console.log(form.value);
    this.server.registerUser(form.value)
    .subscribe(
      res => {
        this.data = res;
        this.server.u_id = this.data.user_id;
        console.log(this.server.u_id);
        this.router.navigate(['/', 'activate']);
      },
      err =>  console.log(err)
    );


  }

}
