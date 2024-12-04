import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import {SetAppReady} from './labo-root.actions';

export interface LaboRootStateModel {
  appReady: boolean;
}

@State<LaboRootStateModel>({
  name: 'laboRoot',
  defaults: {
    appReady: true
  }
})
@Injectable()
export class LaboRootState {

  @Selector()
  static appReady(state: LaboRootStateModel): boolean {
    return state.appReady;
  }

  @Action(SetAppReady)
  setAppReady({patchState}: StateContext<LaboRootStateModel>, {appReady}: SetAppReady) {
    patchState({appReady: appReady});
  }

}
