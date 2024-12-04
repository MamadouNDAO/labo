import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Observable, Subscription} from 'rxjs';
import {MenuModel} from '../../../models/menu.model';
import {Store} from '@ngxs/store';
import {MenuState} from '../../../store/menu/menu.state';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  viewMenu: boolean = false;
  menu$: Observable<MenuModel[]> = inject(Store).select(MenuState.getMenu)
  menus: MenuModel[]
  subscription: Subscription = new Subscription();

  constructor(private chd: ChangeDetectorRef) {
  }

  openCloseMenu(): void {
    this.viewMenu = !this.viewMenu;
    this.chd.detectChanges()
  }

  ngOnInit(): void {
    this.subscription.add(this.menu$.subscribe(m => {
      this.menus = m
      this.chd.detectChanges()
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
