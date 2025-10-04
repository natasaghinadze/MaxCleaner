import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'MaxCleaner';
}
