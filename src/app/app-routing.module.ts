import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CBR8Component } from './pages/cbr8/cbr8.component';
import { E6000V1Component } from './pages/e6000-v1/e6000-v1.component';
import { E6000V2Component } from './pages/e6000-v2/e6000-v2.component';
import { StartComponent } from './pages/start/start.component';
import { UBR10000Component } from './pages/ubr10000/ubr10000.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'cbr8', component: CBR8Component},
  { path: 'ubr10000', component: UBR10000Component},
  { path: 'e6000-v1', component: E6000V1Component},
  { path: 'e6000-v2', component: E6000V2Component},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
