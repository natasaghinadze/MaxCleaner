import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardComponentComponent } from './shared/components/card-component/card-component.component';
import { RepairComponent } from './components/company-service/repair/repair.component';
import { WindowsComponent } from './components/company-service/windows/windows.component';
import { TidyingOfficesComponent } from './components/company-service/tidying-offices/tidying-offices.component';
import { PrivateHousesComponent } from './components/company-service/private-houses/private-houses.component';
import { BuildingsEntrancesComponent } from './components/company-service/buildings-entrances/buildings-entrances.component';
import { GeneralArrangementComponent } from './components/company-service/general-arrangement/general-arrangement.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'card', component: CardComponentComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'windows', component: WindowsComponent},
  { path: 'tidying-offices', component: TidyingOfficesComponent},
  { path: 'private-houses', component: PrivateHousesComponent},
  { path: 'buildings-entrances', component: BuildingsEntrancesComponent},
  { path: 'general-arrangement', component: GeneralArrangementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
