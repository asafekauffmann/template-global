import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { BootModelComponent } from './boot-model/boot-model.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './view/login/login.component';
import { AberturaComponent } from './view/abertura/abertura.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BootModelComponent,
    ModalComponent,
    LoginComponent,
    AberturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
