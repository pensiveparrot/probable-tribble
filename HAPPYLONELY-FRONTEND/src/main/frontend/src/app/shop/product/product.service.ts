import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../objects/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>("http://" + window.location.hostname + ":8080/" + "api/products/getProductById/" + id);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://" + window.location.hostname + ":8080/" + "api/products/getAllProducts");
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>("http://" + window.location.hostname + ":8080/" + "api/products/updateProduct", product, { observe: 'response', withCredentials: true });
  }
  getProductByName(productname: string): Observable<any> {
    return this.http.get<Product>("http://" + window.location.hostname + ":8080/" + "api/products/getProductByName/" + productname, { observe: 'response', withCredentials: true });
  }
  addProduct(product: Product): Observable<any> {
    return this.http.post<Product>("http://" + window.location.hostname + ":8080/" + "api/products/addProduct", product, { observe: 'response', withCredentials: true });
  }


}
