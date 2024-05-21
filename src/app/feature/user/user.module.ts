import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'deatils',
    component: UserDetailsComponent
  }
];

@NgModule({
  declarations: [
    UserViewComponent,
    UserCreateComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
