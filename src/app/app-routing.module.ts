import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C100GComponent } from './pages/c100-g/c100-g.component';
import { CBR8Component } from './pages/cbr8/cbr8.component';
import { E6000Component } from './pages/e6000/e6000.component';
import { StartComponent } from './pages/start/start.component';
import { UBR10000Component } from './pages/ubr10000/ubr10000.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'cbr8', component: CBR8Component},
  { path: 'ubr10000', component: UBR10000Component},
  { path: 'e6000', component: E6000Component},
  { path: 'c100g', component: C100GComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
