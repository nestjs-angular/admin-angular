import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  lastPage!: number;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(page:number = 1): void {
    this.orderService.all(page).subscribe(res => {
      console.log(res)
      this.orders = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  export():void {
    this.orderService.export().subscribe(
      res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(res);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
      }
    );
  }

}
