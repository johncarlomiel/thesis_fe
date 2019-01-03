import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { SuiModule } from 'ng2-semantic-ui';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
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


FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, Candy);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthFormComponent,
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
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SuiModule,
    NgxPaginationModule,
    FusionChartsModule
  ],
  providers: [AuthGuard, AdminGuard, SdsSessionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
