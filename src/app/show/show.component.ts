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
  scat:string;
  id=[];
  cate: any;
  cat: any;
  
  @Input() public prod: HeaderComponent;
  constructor(private route: ActivatedRoute,private server: ServerService,private router: Router) { }

  ngOnInit() {
    
    this.scat= this.route.snapshot.params['h'];
    this.cat= this.route.snapshot.params['cat'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.scat = params['h'];
        this.cat = params['cat'];
        this.server.getproducts(this.scat,this.cat).subscribe(
          res => {
           this.produ = res;
           this.id =[];
           for( let i=0;i < this.produ.length; i++)
            {
              this.id.push(this.produ[i]);
            }
            console.log(this.id);
            this.router.navigate([this.scat]);
            }
        )

      }
    )
    
    
  }

  showpro(pid:any){
    console.log(pid);
    this.server.pid = pid;
    this.router.navigate(['/', 'product',pid] );

  }


}
