import { Injectable } from '@angular/core';
import {IProduct} from "../models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products :IProduct[] =[]

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    this.http.get<IProduct[]>('https://fakestoreapi.com/products').subscribe(
      el=>this.products = el
    )
  }

}
