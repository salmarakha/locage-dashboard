import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ProductAdminService } from '../../../Services/product-admin.service';

@Component({
  selector: 'ngx-today-deals',
  templateUrl: './today-deals.component.html',
  styleUrls: ['./today-deals.component.scss']
})
export class TodayDealsComponent implements OnInit {
  products: Product[];
  constructor(private productAdminService: ProductAdminService) {}

  ngOnInit(): void {
    this.productAdminService.getTodayDeals().subscribe((result: any) => {      
      this.products = result.result.docs;
    });
  }

}
