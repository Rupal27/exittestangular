import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApproverComponent } from './approver/approver.component';
import { PendingComponent } from './approver/pending/pending.component';
import { ApprovedComponent } from './approver/approved/approved.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HouselistingComponent } from './volunteer/houselisting/houselisting.component';
import { PopulationComponent } from './volunteer/population/population.component';
import { LoginComponent } from './login/login.component';
import { VolunteerauthguardService } from './volunteerauthguard.service';
import { AdminAuthGuardService } from './adminauthguard.service';
import { StatebargraphComponent } from './statebargraph/statebargraph.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'statereport',
    component:StatebargraphComponent
  },
  {
    path: 'approver',
    canActivate: [AdminAuthGuardService],
    component: ApproverComponent,
    // pathMatch: 'full',
    children: [{
      path: 'pending',
      component: PendingComponent,
      //  pathMatch: 'full'
    },
    {
      path: 'approved',
      component: ApprovedComponent,
      pathMatch: 'full'
    },
    {
      path: 'declined',
      component: DeclinedComponent,
      //  pathMatch: 'full'
    }
    ]
  },
  {
    path: 'registerpage',
    component: RegisterpageComponent,
    //  pathMatch: 'full'
  },
  {
    path: 'volunteer',
    canActivate: [VolunteerauthguardService],
    component: VolunteerComponent,
    //   pathMatch: 'full',
    children: [{
      path: 'houselisting',
      component: HouselistingComponent,
      // pathMatch: 'full',
    },
    {
      path: 'population',
      component: PopulationComponent,
      //    pathMatch: 'full'
    }]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
