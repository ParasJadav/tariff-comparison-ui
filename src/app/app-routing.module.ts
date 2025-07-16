import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TariffDetailComponent } from './tariff-detail/tariff-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tariff/:tariffName/:tariffType', component: TariffDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
