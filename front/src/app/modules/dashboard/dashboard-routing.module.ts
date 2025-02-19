import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisteranswerComponent } from '../../components/register/registeranswer/registeranswer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
     { path: 'registeranswer', component: RegisteranswerComponent },
     { path: 'registeranswer/:showRegisterAnswer', component: RegisteranswerComponent },
     { path: 'registeranswer-success', component: RegisteranswerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
