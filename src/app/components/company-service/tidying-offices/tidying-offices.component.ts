import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shared/components/card-content-component/card-content.component';

@Component({
    selector: 'app-tidying-offices',
    templateUrl: './tidying-offices.component.html',
    styleUrls: ['./tidying-offices.component.css'],
    standalone: true,
    imports: [CardContentComponent]
})
export class TidyingOfficesComponent {
  img = 'assets/images/ofice-cleaning.jpg'
}
