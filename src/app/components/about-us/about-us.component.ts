import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  accordionItems = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' }
  ];
}
