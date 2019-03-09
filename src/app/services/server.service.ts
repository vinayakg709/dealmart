import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User, loginuser } from "./user.model";

@Injectable({ providedIn: 'root' })
export class ServerService{
    u_id: number;
    login: boolean;
    produ: any;
    readonly rootUrl = 'http://cc6bd45d.ngrok.io';
    constructor(private http: HttpClient) { }

    registerUser(user: User){
        const body: User = {
            username: user.username,
            email: user.email,
            password: user.password,
            confirm_password: user.confirm_password
        
        }
        console.log(body);
        

    return this.http.post(this.rootUrl + '/api/signup/', body);    
    }

    activateUser ( otp: number ) {
    console.log(typeof(this.u_id));
    return this.http.post(this.rootUrl + '/api/activate/'+ this.u_id + '/', otp );
  }

  loginUser(loginUser: loginuser){
    const bod: loginuser = {
        uname_or_em: loginUser.uname_or_em,
        password: loginUser.password,
    
    }
    console.log(bod);
    

return this.http.post(this.rootUrl + '/api/login/', bod);    
}

tokenUser(username: string, password: string){
    const bod = {
        username: username,
        password: password,
    }
    console.log(bod);

return this.http.post(this.rootUrl + '/api-token-auth/', bod);    
}
    
  setAdmintoken(token: string) {
    localStorage.setItem('admin', token);
  }

  getAdminToken() {
    return localStorage.getItem('admin');
  }
  removeToken() {
    localStorage.removeItem('admin');
  }

  getcategories(){
      return this.http.get(this.rootUrl + '/api/category/')
  }
    
  loggedIn(){
    if(this.getAdminToken())
        return true
    else 
        return false
  }
  
  getproducts(pro: any){
    return this.http.get(this.rootUrl + '/api/product/', {
      params: {
        search : pro
      }
    })
}
  
  

}