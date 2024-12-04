import { Routes } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {UserComponent} from './component/user/user.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserComponent}
];
