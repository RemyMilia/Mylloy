import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './feature/contact/contact.component';
import { HomepageComponent } from './feature/homepage/homepage.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
