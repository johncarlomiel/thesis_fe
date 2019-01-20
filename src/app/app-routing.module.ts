import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGraphComponent } from './admin-graph/admin-graph.component';
import { AuthGuard } from './auth.guard';
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


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'questions',
    component: QuestionComponent,
    canActivate: [AuthGuard, SdsSessionGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'self-estimates',
    component: EstimatesComponent,
    canActivate: [AuthGuard, SdsSessionGuard]
  },
  {
    path: 'evaluate',
    component: EvaluateComponent,
    canActivate: [AuthGuard, SdsSessionGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/graph/specific',
    component: AdminGraphComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/graph/general',
    component: AdminGraphGeneralComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/auth',
    component: AdminAuthComponent
  },
  {
    path: "admin/print",
    component: NewResultsComponent
  },
  {
    path: "admin/archive",
    component: ArchiveComponent
  },
  {
    path: "admin/settings",
    component: AdminSettingsComponent
  },
  {
    path: "admin/new-print",
    component: PrintNewComponent
  },
  {
    path: "admin/new-archive",
    component: ArchiveNewComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  { path: '**', redirectTo: '404' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
