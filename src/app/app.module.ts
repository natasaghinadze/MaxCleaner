import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './shared/layout/layout.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { CompanyServiceComponent } from './components/company-service/company-service.component';
import { RepairComponent } from './components/company-service/repair/repair.component';
import { WindowsComponent } from './components/company-service/windows/windows.component';
import { PrivateHousesComponent } from './components/company-service/private-houses/private-houses.component';
import { BuildingsEntrancesComponent } from './components/company-service/buildings-entrances/buildings-entrances.component';
import { GeneralArrangementComponent } from './components/company-service/general-arrangement/general-arrangement.component';
import { TidyingOfficesComponent } from './components/company-service/tidying-offices/tidying-offices.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutUsComponent,
    CompanyServiceComponent,
    RepairComponent,
    WindowsComponent,
    PrivateHousesComponent,
    BuildingsEntrancesComponent,
    GeneralArrangementComponent,
    TidyingOfficesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
