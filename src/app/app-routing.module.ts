import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthFormComponent
  },
  {
    path: 'questions',
    component: QuestionComponent,
    canActivate: [AuthGuard]
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
    canActivate: [AuthGuard]
  },
  {
    path: 'evaluate',
    component: EvaluateComponent,
    canActivate: [AuthGuard]
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
    component: AdminHomeComponent
  },
  {
    path: 'admin/graph/specific', component: AdminGraphComponent
  },
  {
    path: 'admin/graph/general',
    component: AdminGraphGeneralComponent
  },
  {
    path: 'admin/auth',
    component: AdminAuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
