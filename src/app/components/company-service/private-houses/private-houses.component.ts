import { Component } from '@angular/core';
import { CardComponentComponent } from '../../../shared/components/card-component/card-component.component';

@Component({
    selector: 'app-private-houses',
    templateUrl: './private-houses.component.html',
    styleUrls: ['./private-houses.component.css'],
    standalone: true,
    imports: [CardComponentComponent]
})
export class PrivateHousesComponent {
 img = '../../../assets/images/private houses and country houses.jpg'
}
