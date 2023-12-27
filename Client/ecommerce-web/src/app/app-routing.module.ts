import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feture/componants/home/home.component';
import { ProductsComponent } from './Module/feture/componants/products/products.component';
import { CartComponent } from './Module/feture/componants/cart/cart.component';
import { ProductDetailsComponent } from './Module/feture/componants/product-details/product-details.component';
import { CheckoutComponent } from './Module/feture/componants/checkout/checkout.component';
import { PaymentComponent } from './Module/feture/componants/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feture/componants/payment-success/payment-success.component';
import { OrdersComponent } from './Module/feture/componants/orders/orders.component';
import { OrderDetailsComponent } from './Module/feture/componants/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';

const routes: Routes = [
  { path: "admin", loadChildren: () => import("./Module/admin/admin-routing.module").then(m => AdminRoutingModule) },
  { path: "", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "checkout/payment/:id", component: PaymentComponent },
  { path: ':levelOne/:levelTwo/:levelThree', component: ProductsComponent },
  { path: "payment-success", component: PaymentSuccessComponent },
  { path: "account/orders", component: OrdersComponent },
  { path: "order/:id", component: OrderDetailsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
