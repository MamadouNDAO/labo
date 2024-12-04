import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsFormPlugin } from '@ngxs/form-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import {LaboRootState} from './store/labo-root/labo-root.state';
import {DashboardState} from './store/dashboard/dashboard.state';
import {MenuState} from './store/menu/menu.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore([
        LaboRootState,
        DashboardState,
        MenuState
      ],
        withNgxsReduxDevtoolsPlugin(),
        withNgxsFormPlugin(),
        withNgxsStoragePlugin({
          keys: [
            LaboRootState
          ]
        })
    )
  ]
};
