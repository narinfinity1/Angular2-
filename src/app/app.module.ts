import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_CONFIG, useValue as AppConfigUseValue } from './app.config';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from './services/data.service';
import { myServiceProvider } from './services/my.service.provider';

/* Feature Module */
import { ContactModule } from './contact/contact.module';
/* Routing Module */
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  id: module.id,
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    ContactModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: DataService, useExisting: DataService},
    // { provide: DataService, useValue: someValue},
    { provide: DataService, useClass: DataService },
    // myServiceProvider,
    { provide: APP_CONFIG, useValue: AppConfigUseValue }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
