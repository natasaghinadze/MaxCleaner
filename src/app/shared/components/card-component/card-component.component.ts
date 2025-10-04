import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-card-component',
    templateUrl: './card-component.component.html',
    styleUrls: ['./card-component.component.css'],
    imports: [RouterModule],
    standalone: true
})
export class CardComponentComponent  {
  @Input() images = ''
  constructor(private route: ActivatedRoute) { }

}
