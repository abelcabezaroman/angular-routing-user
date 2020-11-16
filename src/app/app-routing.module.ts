import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // {path: '',component: UserListComponent },
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-list/:userId', component: UserDetailComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
