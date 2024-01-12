import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders=[[1,1],[1,1]]
  orderFilter = [
    { value: 'on_the_way', label: 'On The Way' },
    { value: 'deliverd', label: 'Deliverd' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'returned', label: 'Returned' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.orderService.getOrderHistory()

    // this.store.pipe(select((store: AppState) => store.order)).subscribe(order => {
    //   this.orders = order.orders
    //   console.log("state ------------ ", this.orders)
    // })


  }

  navigateToOrderDetails = (id: Number) => {
    this.router.navigate([`order/${id}`])
  }
}
