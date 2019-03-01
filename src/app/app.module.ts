import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { SuiModule } from 'ng2-semantic-ui';
import { DateFnsModule } from 'ngx-date-fns';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InfoComponent } from './modal/info/info.component';
import { ProblemsComponent } from './modal/problems/problems.component';
import { MoreInfoComponent } from './modal/more-info/more-info.component';
import { AdminGraphComponent } from './admin-graph/admin-graph.component';
import { AuthGuard } from './auth.guard';



// Load themes

import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import { AdminGraphGeneralComponent } from './admin-graph-general/admin-graph-general.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminGuard } from './admin.guard';
import { Page404Component } from './page404/page404.component';
import { SdsSessionGuard } from './sds-session.guard';
import { NewResultsComponent } from './new-results/new-results.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { PrintNewComponent } from './print-new/print-new.component';
import { ArchiveNewComponent } from './archive-new/archive-new.component';
import { PrintOldComponent } from './print-old/print-old.component';
import { ArchiveOldComponent } from './archive-old/archive-old.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';


FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, Candy);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    RegisterComponent,
    LoginComponent,
    EstimatesComponent,
    EvaluateComponent,
    ProfileComponent,
    AuthenticationComponent,
    HeaderComponent,
    AdminHomeComponent,
    InfoComponent,
    ProblemsComponent,
    MoreInfoComponent,
    AdminGraphComponent,
    AdminGraphGeneralComponent,
    AdminAuthComponent,
    Page404Component,
    NewResultsComponent,
    ArchiveComponent,
    AdminSettingsComponent,
    PrintNewComponent,
    ArchiveNewComponent,
    PrintOldComponent,
    ArchiveOldComponent,
    AdminMessagesComponent,
    AdminEventsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SuiModule,
    NgxPaginationModule,
    FusionChartsModule,
    InfiniteScrollModule,
    DateFnsModule.forRoot()


  ],
  providers: [AuthGuard, AdminGuard, SdsSessionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
