import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any;
  id=[];
  sscat=[];
  men_subsub = [];
  women_subsub = [];
  kids_sub =[];
  electronics_sub =[];
  grocery_sub = [];
  sports_sub =[];
  books_sub = [];
  isAdminLoggedIn: boolean;
  constructor(private server: ServerService, private router: Router) { }

  ngOnInit() {
    this.isAdminLoggedIn = this.server.loggedIn();

    this.server.getcategories().subscribe(
      res => {
        console.log(res);
        this.data = res;
      }
    );
  }


  onmen(cat:string){
    this.id=[];
    this.sscat=[];
    for( let i=0;i < this.data.length; i++)
    {
      if(this.data[i]['category']==cat)
      {
      for( let j=0;j < this.data[i]['subcategory'].length; j++){
      this.id.push(this.data[i].subcategory[j]);
      }
      }
      
    }
    
    console.log(this.id);
  }
  

  logout(){
    this.server.removeToken();
    window.location.reload();
    this.router.navigate(['/']);

  }
}
