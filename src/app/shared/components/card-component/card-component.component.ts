import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-card-component',
    templateUrl: './card-component.component.html',
    styleUrls: ['./card-component.component.css'],
    standalone: true
})
export class CardComponentComponent  {
  @Input() images = ''
  constructor(private route: ActivatedRoute) { }

}
