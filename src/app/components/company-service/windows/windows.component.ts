import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shared/components/card-content-component/card-content.component';

@Component({
    selector: 'app-windows',
    templateUrl: './windows.component.html',
    styleUrls: ['./windows.component.css'],
    standalone: true,
    imports: [CardContentComponent]
})
export class WindowsComponent {
  img = 'assets/images/windows.png'
}
