import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full'
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
