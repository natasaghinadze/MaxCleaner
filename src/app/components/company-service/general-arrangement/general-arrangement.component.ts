import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shared/components/card-content-component/card-content.component';

@Component({
    selector: 'app-general-arrangement',
    templateUrl: './general-arrangement.component.html',
    styleUrls: ['./general-arrangement.component.css'],
    standalone: true,
    imports: [CardContentComponent]
})
export class GeneralArrangementComponent {
  img = '../../../assets/images/general arrangement.webp'
}
