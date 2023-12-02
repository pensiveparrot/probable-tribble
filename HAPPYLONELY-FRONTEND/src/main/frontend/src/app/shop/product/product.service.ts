import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../objects/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete("https://" + window.location.hostname + ":8443/" + "api/products/deleteProduct/" + id, { observe: 'response', withCredentials: true });
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>("https://" + window.location.hostname + ":8443/" + "api/products/getProductById/" + id);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://" + window.location.hostname + ":8443/" + "api/products/getAllProducts");
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>("https://" + window.location.hostname + ":8443/" + "api/products/updateProduct", product, { observe: 'response', withCredentials: true });
  }
  getProductByName(productname: string): Observable<any> {
    return this.http.get<Product>("https://" + window.location.hostname + ":8443/" + "api/products/getProductByName/" + productname, { observe: 'response', withCredentials: true });
  }
  addProduct(product: Product): Observable<any> {
    return this.http.post<Product>("https://" + window.location.hostname + ":8443/" + "api/products/addProduct", product, { observe: 'response', withCredentials: true });
  }


}
