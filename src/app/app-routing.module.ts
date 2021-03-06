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
import { SigninComponent } from './signin/signin.component';
import { ActivateComponent } from './activate/activate.component';
import { ShowComponent } from './show/show.component';
import { ProductComponent } from './product/product.component';
import { FootwearComponent } from './footwear/footwear.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "men", component: MenComponent},
  {path: "women", component: WomenComponent},
  {path: "kids", component: KidsComponent},
  {path: "grocery", component: GroceryComponent},
  {path: "sports", component: SportsComponent},
  {path: "cosmetics", component: CosmeticsComponent},
  {path: "footwear", component: FootwearComponent},
  {path: "electronics", component: ElectronicsComponent},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
  {path: "activate", component: ActivateComponent},
  {path: "product/:pid", component: ProductComponent},
  {path: ":h/:cat", component: ShowComponent},
  {path: "cart", component: ViewCartComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
