import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any;
  id=[];
  men_subsub = [];
  women_subsub = [];
  kids_sub =[];
  electronics_sub =[];
  grocery_sub = [];
  sports_sub =[];
  books_sub = [];
  constructor(private server: ServerService) { }

  ngOnInit() {
    
  }
  onload(){
    this.server.getcategories().subscribe(
      res => {
        console.log(res);
        this.data = res;
        // for( let i=0;i < this.data.length  ; i++){
        //   console.log(this.data.subsubcategory.length)
        //   if(this.data[i].category.category == 'men')
        //   this.men_subsub.push(this.data[i].subsubcategory)
        //   else if(this.data[i].category.category == 'women')
        //   this.women_subsub.push(this.data[i].subsubcategory)
        // }
        // console.log(this.men_subsub);
        // this.men_subsub=[];
      }
    );
  }
}
