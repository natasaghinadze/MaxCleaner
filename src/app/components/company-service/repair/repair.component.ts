import { Component } from '@angular/core';
import { CardComponentComponent } from '../../../shared/components/card-component/card-component.component';

@Component({
    selector: 'app-repair',
    templateUrl: './repair.component.html',
    styleUrls: ['./repair.component.css'],
    standalone: true,
    imports: [CardComponentComponent]
})
export class RepairComponent {
  firstImg = '../../../assets/images/remontis-shemdgomi-dalageba.webp'
}
