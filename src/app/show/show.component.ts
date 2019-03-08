import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  cat:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cat= this.route.snapshot.params['h'];
    this.route.params.subscribe(
      (params: Params)=>{
        this.cat = params['h'];
      }
    )
  }

}
