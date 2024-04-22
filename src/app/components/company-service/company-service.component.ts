import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.css']
})
export class CompanyServiceComponent {
  constructor( ) { }

  scrollToElement(id: string) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
  }
