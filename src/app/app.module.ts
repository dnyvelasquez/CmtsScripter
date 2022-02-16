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
import { UpStreamComponent } from './pages/cbr8/up-stream/up-stream.component';
import { BondingGroupComponent } from './pages/cbr8/bonding-group/bonding-group.component';
import { WideBandComponent } from './pages/cbr8/wide-band/wide-band.component';
import { RfChanComponent } from './pages/cbr8/rf-chan/rf-chan.component';
import { StartComponent } from './pages/start/start.component';
import { IntegratedCableComponent } from './pages/cbr8/integrated-cable/integrated-cable.component';
import { UpstreamCableComponent } from './pages/cbr8/upstream-cable/upstream-cable.component';
import { UsChannelComponent } from './pages/cbr8/us-channel/us-channel.component';
import { ScriptComponent } from './shared/components/script/script.component';
import { UBR10000Component } from './pages/ubr10000/ubr10000.component';
import { UpstreamModComponent } from './pages/ubr10000/upstream-mod/upstream-mod.component';
import { ControllerModularComponent } from './pages/ubr10000/controller-modular/controller-modular.component';
import { LoadBalanceComponent } from './pages/ubr10000/load-balance/load-balance.component';
import { BondingGroupModComponent } from './pages/ubr10000/bonding-group-mod/bonding-group-mod.component';
import { WideBandModComponent } from './pages/ubr10000/wide-band-mod/wide-band-mod.component';
import { E6000V1Component } from './pages/e6000-v1/e6000-v1.component';
import { CableDownStremV1Component } from './pages/e6000-v1/cable-down-strem-v1/cable-down-strem-v1.component';
import { CableUpStremV1Component } from './pages/e6000-v1/cable-up-strem-v1/cable-up-strem-v1.component';
import { FiberNodeV1Component } from './pages/e6000-v1/fiber-node-v1/fiber-node-v1.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CBR8Component,
    UpStreamComponent,
    BondingGroupComponent,
    WideBandComponent,
    RfChanComponent,
    StartComponent,
    IntegratedCableComponent,
    UpstreamCableComponent,
    UsChannelComponent,
    ScriptComponent,
    UBR10000Component,
    UpstreamModComponent,
    ControllerModularComponent,
    LoadBalanceComponent,
    BondingGroupModComponent,
    WideBandModComponent,
    E6000V1Component,
    CableDownStremV1Component,
    CableUpStremV1Component,
    FiberNodeV1Component
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
