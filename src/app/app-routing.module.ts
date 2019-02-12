import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BodyComponent } from './body/body.component';
import { KidsComponent } from './kids/kids.component';
import { GroceryComponent } from './grocery/grocery.component';
import { SportsComponent } from './sports/sports.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "men", component: MenComponent},
  {path: "women", component: WomenComponent},
  {path: "kids", component: KidsComponent},
  {path: "grocery", component: GroceryComponent},
  {path: "sports", component: SportsComponent},
  {path: "cosmetics", component: CosmeticsComponent},
  {path: "signup", component: SignupComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
