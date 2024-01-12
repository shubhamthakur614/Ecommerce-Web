import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  adresses= [1,1,1];
  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private store: Store<AppState>,
    // private orderService:OrderService
  ) {
    // this.store.pipe(select((state) => state)).subscribe((store) => {
    //   console.log('address ', store);
    //   this.adresses = store.user.userProfile.addresses;
    // });
  }

  // ngOnInit() {

  // }

  handleCreateOrder = (reqData: any) => {
    // this.orderService.createOrder(reqData)
    // this.router.navigate(['/checkout/payment']);
    console.log('handle submit - : ', reqData);
  }

  handleSubmit = () => {
    const formValue = this.myForm.value;
    console.log(formValue);
    const reqData = formValue;
    this.handleCreateOrder(reqData)
    // this.store.dispatch(createOrderRequest({ reqData }));

  };
}
