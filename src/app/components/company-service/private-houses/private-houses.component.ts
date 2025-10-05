import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shared/components/card-content-component/card-content.component';

@Component({
    selector: 'app-private-houses',
    templateUrl: './private-houses.component.html',
    styleUrls: ['./private-houses.component.css'],
    standalone: true,
    imports: [CardContentComponent]
})
export class PrivateHousesComponent {
 img = 'assets/images/private houses and country houses.jpg'
}
