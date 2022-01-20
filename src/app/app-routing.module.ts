import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CBR8Component } from './pages/cbr8/cbr8.component';

const routes: Routes = [
  { path: 'cbr8', component: CBR8Component},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
