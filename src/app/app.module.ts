import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './common/header-menu/header-menu.component';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [AppComponent, HeaderMenuComponent],
  imports: [BrowserModule, AppRoutingModule, NgxsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
