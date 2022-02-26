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
import { E6000Component } from './pages/e6000/e6000.component';
import { CableDownStreamComponent } from './pages/e6000/cable-down-stream/cable-down-stream.component';
import { CableUpStreamComponent } from './pages/e6000/cable-up-stream/cable-up-stream.component';
import { FiberNodeComponent } from './pages/e6000/fiber-node/fiber-node.component';
import { BondingGroupE6000Component } from './pages/e6000/bonding-group-e6000/bonding-group-e6000.component';
import { C100GComponent } from './pages/c100-g/c100-g.component';
import { UpstreamC100GComponent } from './pages/c100-g/upstream-c100-g/upstream-c100-g.component';
import { InterfaceUpstreamComponent } from './pages/c100-g/interface-upstream/interface-upstream.component';
import { DownstreamC100GComponent } from './pages/c100-g/downstream-c100-g/downstream-c100-g.component';
import { InterfaceDownstreamComponent } from './pages/c100-g/interface-downstream/interface-downstream.component';
import { ServiceGroupComponent } from './pages/c100-g/service-group/service-group.component';

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
    E6000Component,
    CableDownStreamComponent,
    CableUpStreamComponent,
    FiberNodeComponent,
    BondingGroupE6000Component,
    C100GComponent,
    UpstreamC100GComponent,
    InterfaceUpstreamComponent,
    DownstreamC100GComponent,
    InterfaceDownstreamComponent,
    ServiceGroupComponent,
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
