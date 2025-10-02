import { Component } from '@angular/core';
import { CardComponentComponent } from '../../../shared/components/card-component/card-component.component';

@Component({
    selector: 'app-general-arrangement',
    templateUrl: './general-arrangement.component.html',
    styleUrls: ['./general-arrangement.component.css'],
    standalone: true,
    imports: [CardComponentComponent]
})
export class GeneralArrangementComponent {
  img = '../../../assets/images/general arrangement.webp'
}
