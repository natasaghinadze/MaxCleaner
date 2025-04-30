import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MaxCleaner';

  constructor(private facebookService: FacebookService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private initFacebookService(): void { 
    const InitParams: InitParams = {xfbml:true, version:'v22.0'};
    this.facebookService.init(InitParams)
  }
}
