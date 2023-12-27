import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componants/home/home.component';
import { HomeProductCardComponent } from './componants/home/home-product-card/home-product-card.component';
import { MainCarouselComponent } from './componants/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './componants/home/product-slider/product-slider.component';
import { FetureComponent } from './feture.component';
import { ProductsComponent } from './componants/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './componants/cart/cart.component';
import { ProductDetailsComponent } from './componants/product-details/product-details.component';
import { CheckoutComponent } from './componants/checkout/checkout.component';
import { PaymentComponent } from './componants/payment/payment.component';
import { PaymentSuccessComponent } from './componants/payment-success/payment-success.component';
import { OrdersComponent } from './componants/orders/orders.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductReviewCardComponent } from './componants/product-details/product-review-card/product-review-card.component';
@NgModule({
  declarations: [
    HomeComponent,
    HomeProductCardComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    FetureComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ProductReviewCardComponent,
  
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    SharedModule,
    MatProgressBarModule,
  ],
  exports:[
    HomeComponent,
    FetureComponent,
    ProductsComponent
  ]
})
export class FetureModule { }
