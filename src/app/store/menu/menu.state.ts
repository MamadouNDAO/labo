import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { MenuAction } from './menu.actions';
import {MenuModel} from '../../models/menu.model';

export interface MenuStateModel {
  menus: MenuModel[];
}

export const MenuStateDefault = {
  menus: [
    {name: 'Tableau de bord', icon: 'home', route: '/home'},
    {name: "Test d'analyse", icon: 'scan', route: '/home'},
    {name: 'Laboratoire', icon: 'document', route: '/home'},
    {name: 'Utilisateurs', icon: 'profile', route: '/users'},
    {name: 'Messagerie', icon: 'chat', route: '/home'},
    {name: 'Mon compte', icon: 'profile', route: '/home'},
    {name: 'Paramétres', icon: 'setting', route: '/home'},
  ]
}

@State<MenuStateModel>({
  name: 'menu',
  defaults: MenuStateDefault
})
@Injectable()
export class MenuState {

  @Selector()
  static getState(state: MenuStateModel) {
    return state;
  }

  @Selector()
  static getMenu(state: MenuStateModel): MenuModel[]{
    return state.menus
  }
}
