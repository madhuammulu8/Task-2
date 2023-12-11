import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringComponent } from './filtering/filtering.component';

const routes: Routes = [
  {path:'filter',component:FilteringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
