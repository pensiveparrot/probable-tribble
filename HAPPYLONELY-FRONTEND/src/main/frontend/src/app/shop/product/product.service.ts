import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../objects/product';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {   }
  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>("http://"+window.location.hostname+":8080/" +"api/products/getProductById/"+id);
  }
  
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://"+window.location.hostname+":8080/" +"api/products/getAllProducts");
  }
 
   

}
