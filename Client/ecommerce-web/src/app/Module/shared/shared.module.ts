import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { FooterComponent } from './componants/footer/footer.component';
import { NavContentComponent } from './componants/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './componants/product-card/product-card.component';
import { StarRatingComponent } from './componants/star-rating/star-rating.component';
import { CartItemComponent } from './componants/cart-item/cart-item.component';
import { AddressCardComponent } from './componants/address-card/address-card.component';
import { OrderTrackerComponent } from './componants/order-tracker/order-tracker.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,

  ]
})
export class SharedModule { }
