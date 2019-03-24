import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptor } from './seguranca/jwt-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,

    CoreModule,    
    SegurancaModule,
    AppRoutingModule,    
    IonicModule.forRoot(), 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
