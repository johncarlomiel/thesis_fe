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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthFormComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'self-estimates', component: EstimatesComponent },
  { path: 'evaluate', component: EvaluateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
