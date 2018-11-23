import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { EvaluateComponent } from './evaluate/evaluate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthFormComponent,
    QuestionComponent,
    RegisterComponent,
    LoginComponent,
    EstimatesComponent,
    EvaluateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
