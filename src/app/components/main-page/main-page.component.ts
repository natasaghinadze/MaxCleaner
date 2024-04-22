import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private router: Router) { }

  // goToContent(index: number) {
  //   switch (index) {
  //     case 1:
  //       this.router.navigate(['/company-service', 1]);
  //       break;
  //     case 2:
  //       this.router.navigate(['/company-service', 2]);
  //       break;
  //     case 3:
  //       this.router.navigate(['/company-service', 3]);
  //       break;
  //     case 4:
  //       this.router.navigate(['/company-service', 4]);
  //       break;
  //     case 5:
  //       this.router.navigate(['/company-service', 5]);
  //       break;
  //     case 6:
  //       this.router.navigate(['/company-service', 6]);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  goToContent(id: number): void {
    this.router.navigate(['/company-service', id]);
  }
  
}
