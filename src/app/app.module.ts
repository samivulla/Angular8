import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorsService } from './httpinterceptors.service';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustompipePipe } from './custompipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CustomdirectiveDirective,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
