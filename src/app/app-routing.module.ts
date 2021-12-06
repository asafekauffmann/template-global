import { AberturaComponent } from './view/abertura/abertura.component';
import { LoginComponent } from './view/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '', component: AppComponent
   },
   {
      path: 'login', component: LoginComponent
   },
   {
      path: 'abertura', component: AberturaComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
