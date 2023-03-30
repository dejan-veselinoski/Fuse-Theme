import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'forms',
    loadChildren: () => import('./components/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'contacts',
    loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
