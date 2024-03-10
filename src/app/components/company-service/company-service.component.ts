import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.css']
})
export class CompanyServiceComponent {
  contentId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.contentId = this.route.snapshot.paramMap.has('contentId')
      ? +this.route.snapshot.paramMap.get('contentId')!
      : null;
  }
}
