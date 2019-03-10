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
  produ: any;
  cat:string;
  id=[];
  cate: any;
  
  @Input() public prod: HeaderComponent;
  constructor(private route: ActivatedRoute,private server: ServerService,private router: Router) { }

  ngOnInit() {
    
    this.cat= this.route.snapshot.params['h'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.cat = params['h'];
        this.cate =  this.server.cate;
        

        console.log(this.server.p);
        
        this.server.getproducts(params['h'],this.cate).subscribe(
          res => {
           this.produ = res;
           this.id =[];
           for( let i=0;i < this.produ.length; i++)
            {
              this.id.push(this.produ[i]);
            }
            console.log(this.id);
            this.router.navigate([params['h']]);
            
            }
        )

      }
    )
    
    
  }




}
