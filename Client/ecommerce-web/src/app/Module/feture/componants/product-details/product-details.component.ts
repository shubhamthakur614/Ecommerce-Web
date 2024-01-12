import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedSize!: string;
  relatedProducts: any;
  reviews = [1, 1, 1];
  productDetails$!: Observable<any>;
  productId!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    this.relatedProducts=lehngacholiPage2

  }

  handleAddToCart = () => {
    this.router.navigate(['/cart'])

  };

}
