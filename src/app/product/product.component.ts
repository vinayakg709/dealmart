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
  cart:any;
  isAdminLoggedIn:any =  this.server.loggedIn();
  
  constructor(private server:ServerService,private route:ActivatedRoute) { }

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
    console.log(this.server.getAdminToken());
    this.server.addtocart(pid,this.server.getAdminToken()).subscribe(
      res => {
        console.log(res);
        this.cart=res;
        if(this.cart.message == 'This item is added to cart'){
          document.getElementById('cart').innerHTML = 'Remove from cart'
        }
        else if(this.cart.message == 'This item is removed from cart'){
          document.getElementById('cart').innerHTML = 'Add to Cart'
        }
      }
    )
  }

}
