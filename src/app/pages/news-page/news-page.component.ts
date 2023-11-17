import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit{
  loading = false
  constructor(public productService: ProductService) {
  }
  ngOnInit(): void {
    this.loading = true
    this.productService.getAll()
    this.loading = false
  }

}
