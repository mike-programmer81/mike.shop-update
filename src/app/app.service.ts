import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {

    http= inject(HttpClient)
    
    
    getPosts(){
        return this.http.get('https://fakestoreapi.in/api/products')
        // return this.http.get('https://api.escuelajs.co/api/v1/products')
       

     }
    
}
