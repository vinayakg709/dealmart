import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User, loginuser } from "./user.model";

@Injectable({ providedIn: 'root' })
export class ServerService{
    u_id: number;
    login: boolean;
    cate: any;
    p:any;    
    pid:any;
    readonly rootUrl = 'http://e6894715.ngrok.io';
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     });
    const bod: loginuser = {
        uname_or_em: loginUser.uname_or_em,
        password: loginUser.password,
    
    }
    console.log(bod);
    

return this.http.post(this.rootUrl + '/api/login/', bod, {headers: headers});    
}

tokenUser(username: string, password: string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
   });
    const bod = {
        username: username,
        password: password,
    }
    console.log(bod);

return this.http.post(this.rootUrl + '/api-token-auth/', bod,{headers: headers});    
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     });
      return this.http.get(this.rootUrl + '/api/category/',{headers: headers})
  }
    
  loggedIn(){
    if(this.getAdminToken())
        return true
    else 
        return false
  }
  
  getproducts(pro: any,cat: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
     });
    return this.http.get(this.rootUrl + '/api/product/', {
      params: {
        search: pro, 
        category__category: cat
      },headers: headers
      
    });
}

product(pid:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
   });
  return this.http.get(this.rootUrl + '/api/product/' + pid + '/',{headers: headers})
}

addtocart(pid:any,token:string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' +  token
   });
  return this.http.get(this.rootUrl + '/api/cart/' + pid + '/',{headers: headers})
}

viewcart(token:string){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'JWT ' +  token
   });
  return this.http.get(this.rootUrl + '/api/cart/',{headers: headers})
}
  
  

}