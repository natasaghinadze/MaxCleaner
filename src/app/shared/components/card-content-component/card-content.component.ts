import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-card-content',
    templateUrl: './card-content.component.html',
    styleUrls: ['./card-content.component.css'],
    imports: [RouterModule],
    standalone: true
})
export class CardContentComponent  {
  @Input() images = ''
  constructor(private route: ActivatedRoute) { }

}
