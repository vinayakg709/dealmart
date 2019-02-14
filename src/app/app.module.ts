import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AppRoutingModule } from './app-routing.module';
import { KidsComponent } from './kids/kids.component';
import { GroceryComponent } from './grocery/grocery.component';
import { SportsComponent } from './sports/sports.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ActivateComponent } from './activate/activate.component';
import { ServerService } from './services/server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    GroceryComponent,
    SportsComponent,
    ElectronicsComponent,
    CosmeticsComponent,
    SignupComponent,
    SigninComponent,
    ActivateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
