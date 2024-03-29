import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentSection: any
  isNavbarContentOpen: any;

  constructor(private router:Router){

  }
  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section
  }
  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }
  navigateTo(path: any) {
  this.router.navigate([path])
  }

  
  @HostListener('document:click', [`$event`])
  onDocumentClieck(event: MouseEvent) {
    const modelContainer = document.querySelector(".model-container");
    const openButtons = document.querySelectorAll(".open-button");
    let clickInsideButton = false;

    openButtons.forEach((button: Element)=> {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true
      }
    })
    if(modelContainer&& !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }


}
