import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  public pro:any;
  produ: any;
  cat:any;
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
  // onsearch(){
  //   console.log(form.value.search);
  //     this.searchproducts(form.value.search,'');
  // }
  searchproducts(form: NgForm, cat: any = ''){
    this.router.navigate([form.value.search,cat]);


    // this.server.getproducts(form.value.search,catu).subscribe(
    //   res => {
    //    this.server.cate = '';
    //    console.log(res);
    //    this.server.p = res;
    //    this.router.navigate([form.value.search]);
    //   }
    // )
  }

  product(pro: any,cat:any){
    console.log(cat);
    this.server.cate = cat;
    this.router.navigate([pro,cat]);
  }




}
