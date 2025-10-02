import { Component } from '@angular/core';
import { CardComponentComponent } from '../../../shared/components/card-component/card-component.component';

@Component({
    selector: 'app-tidying-offices',
    templateUrl: './tidying-offices.component.html',
    styleUrls: ['./tidying-offices.component.css'],
    standalone: true,
    imports: [CardComponentComponent]
})
export class TidyingOfficesComponent {
  img = '../../../assets/images/ofice-cleaning.jpg'
}
