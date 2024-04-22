import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CompanyServiceComponent } from './components/company-service/company-service.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'company-service', component: CompanyServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
