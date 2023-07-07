import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app-routing.module';

import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
