import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  activeStep = 3;

  orders = [1, 1, 1];
  steps = [
    { id: 0, title: 'PLACED', isCompleted: true },
    { id: 1, title: 'CONFIRMED', isCompleted: true },
    { id: 2, title: 'SHIPPED', isCompleted: true},
    { id: 3, title: 'Delivered', isCompleted: true },
  ];

  constructor() {
    // this.store.pipe(select((state) => state.order)).subscribe((order) => {
    //   this.order = order.order;
    //   console.log('order from state ', this.order);
    // });
  }

  ngOnInit() {
    // this.orderService.getOrderById({orderId:this.activatedRoute.paramMap.ge})
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const orderId = params.get('orderId');
    //   console.log('order id params ', orderId);
    //   if (orderId) this.orderService.getOrderById(orderId);
    // });

    // this.store.pipe(select((state) => state.order)).subscribe((order) => {
    //   this.order = order.order;
    //   if(order.order.orderStatus=="PLACED"){
    //     this.activeStep=1
    //   }
    //   else if(order.order.orderStatus=="CONFIRMED"){
    //     this.activeStep=2
    //   }
    //   else if(order.order.orderStatus=="SHIPPED"){
    //     this.activeStep=3
    //   }
    //   else if(order.order.orderStatus=="DELIVERED"){
    //     this.activeStep=4
    //   }
    //   console.log('order from state ', this.activeStep);
    //   this.steps=[
    //     {id:0, title: 'PLACED', isCompleted: this.activeStep >= 1 },
    //     {id:1, title: 'CONFIRMED', isCompleted: this.activeStep >= 2 },
    //     {id:2, title: 'SHIPPED', isCompleted: this.activeStep >= 3 },
    //     {id:3, title: 'Delivered', isCompleted: this.activeStep >= 4 },
    //   ];
    // });
  }
  // orderStatus
  // "PLACED"

}
