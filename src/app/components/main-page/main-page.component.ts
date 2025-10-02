import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class MainPageComponent {

  constructor(private router: Router) { }

}
