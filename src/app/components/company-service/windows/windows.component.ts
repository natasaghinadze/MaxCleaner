import { Component } from '@angular/core';
import { CardComponentComponent } from '../../../shared/components/card-component/card-component.component';

@Component({
    selector: 'app-windows',
    templateUrl: './windows.component.html',
    styleUrls: ['./windows.component.css'],
    standalone: true,
    imports: [CardComponentComponent]
})
export class WindowsComponent {
  img = '../../../assets/images/windows.png'
}
