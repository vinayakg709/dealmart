import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pid:any;
  data: any;
  constructor(private server:ServerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.pid = this.route.snapshot.params['pid'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.pid = params['pid'];
        console.log(this.pid)
        this.server.product(this.pid).subscribe(
          res => {
            console.log(res);
            this.data=res;
            console.log(this.data.id)
          }
        )
      }
    )
    
  }

  addtocart(pid:any){
    console.log('hello');
    this.server.addtocart(pid).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
