import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApproverComponent } from './approver/approver.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HouselistingComponent } from './volunteer/houselisting/houselisting.component';
import { PopulationComponent } from './volunteer/population/population.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { ApprovedComponent } from './approver/approved/approved.component';
import { PendingComponent } from './approver/pending/pending.component';
import { Route, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserserviceService } from './userservice.service';
import { HouseService } from './house.service';
import { PopulationService } from './population.service';
import { ApproverService } from './approver.service';
import { AdminAuthGuardService } from './adminauthguard.service';
import { VolunteerauthguardService } from './volunteerauthguard.service';
import { UniqueEmailDirective } from './unique-email.directive';
import { UniqueAdhaarDirective } from './unique-adhaar.directive';
import { ChartsModule } from 'ng2-charts';
import { StatebargraphComponent } from './statebargraph/statebargraph.component';


@NgModule({
      declarations: [
        AppComponent,
        ApproverComponent,
        RegisterpageComponent,
        VolunteerComponent,
        HouselistingComponent,
        PopulationComponent,
        DeclinedComponent,
        ApprovedComponent,
        PendingComponent,
        LoginComponent,
        UniqueEmailDirective,
        UniqueAdhaarDirective,
        StatebargraphComponent
      ],
      imports: [
        ChartsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [  UserserviceService, HouseService, PopulationService, ApproverService ,AdminAuthGuardService,VolunteerauthguardService],
      bootstrap: [AppComponent]
    })
export class AppModule { }
