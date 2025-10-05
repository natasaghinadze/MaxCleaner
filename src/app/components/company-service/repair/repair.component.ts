import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shared/components/card-content-component/card-content.component';

@Component({
    selector: 'app-repair',
    templateUrl: './repair.component.html',
    styleUrls: ['./repair.component.css'],
    standalone: true,
    imports: [CardContentComponent]
})
export class RepairComponent {
  firstImg = '../../../assets/images/remontis-shemdgomi-dalageba.webp'
}
