import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor(private server:ServerService,private router:Router) { }

  ngOnInit() {
  }
  product(pro: any,cat:any){
    console.log(cat);
    this.server.cate = cat;
    this.router.navigate([pro,cat]);
  }
}
