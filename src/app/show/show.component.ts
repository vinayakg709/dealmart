import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  cat:string;
  @Input() public prod: HeaderComponent;
  constructor(private route: ActivatedRoute,private server: ServerService,private router: Router) { }

  ngOnInit() {

    this.cat= this.route.snapshot.params['h'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.cat = params['h'];
        this.server.getproducts(params['h']).subscribe(
          res => {
           console.log(res);
           this.server.produ = res;
           this.router.navigate([params['h']]);
          }
        ) 
      }
      
    )

    
  }


  show(){
    
  }



}
