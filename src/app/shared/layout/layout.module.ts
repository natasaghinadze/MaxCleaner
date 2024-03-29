import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ HeaderComponent, FooterComponent ],
  imports: [SharedModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule { }
