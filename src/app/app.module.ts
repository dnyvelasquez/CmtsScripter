import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialMudule } from './Material.mudule';
import { HeaderComponent } from './shared/components/header/header.component';
import { CBR8Component } from './pages/cbr8/cbr8.component';
import { DownStreamComponent } from './pages/cbr8/down-stream/down-stream.component';
import { UpStreamComponent } from './pages/cbr8/up-stream/up-stream.component';
import { BondingGroupComponent } from './pages/cbr8/bonding-group/bonding-group.component';
import { BGUpstreamComponent } from './pages/cbr8/bgupstream/bgupstream.component';
import { WideBandComponent } from './pages/cbr8/wide-band/wide-band.component';
import { RfChanComponent } from './pages/cbr8/rf-chan/rf-chan.component';
import { StartComponent } from './pages/start/start.component';
import { IntegratedCableComponent } from './pages/cbr8/integrated-cable/integrated-cable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CBR8Component,
    DownStreamComponent,
    UpStreamComponent,
    BondingGroupComponent,
    BGUpstreamComponent,
    WideBandComponent,
    RfChanComponent,
    StartComponent,
    IntegratedCableComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialMudule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
