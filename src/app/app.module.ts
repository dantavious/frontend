import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SocketIoModule,SocketIoConfig} from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config:SocketIoConfig = {url:"http://10.128.0.4:4700"};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
