import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
  pid:any;
  data:any;
  arraydata=[];
  rooturl:any = this.server.rootUrl;
  constructor(private route:ActivatedRoute,private server:ServerService) { }

  ngOnInit() {
        this.server.viewcart(this.server.getAdminToken()).subscribe(
          res => {
            console.log(res);
            this.data=res;
            for( let i=0;i < this.data.length; i++){
              this.arraydata.push(this.data[i]);
            }
            console.log(this.arraydata);

          }
        )
      }

}
