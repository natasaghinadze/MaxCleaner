import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { IonicModule } from '@ionic/angular';
import { CardComponentComponent } from './components/card-component/card-component.component';


@NgModule({
  declarations: [
    AccordionComponent,
    CardComponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ 
    AccordionComponent,
    CardComponentComponent
  ]
})
export class SharedModule { }
