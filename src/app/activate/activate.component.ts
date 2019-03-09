import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit() {
  }

  onActivate(form: NgForm){
    this.server.activateUser(form.value).subscribe(
      res => {console.log(res)
        this.router.navigate(['/', 'signin']);
      },
      err => console.log(err)
    );
  }

}
