import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {CardStatsModel, GrapheModel} from '../../models/dashboard.model';
import {DashboardState} from '../../store/dashboard/dashboard.state';
import {StatCardItemComponent} from './stat-card-item/stat-card-item.component';
import {GraphComponent} from './graph/graph.component';
import {GraphPieComponent} from './graph-pie/graph-pie.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, StatCardItemComponent, GraphComponent, GraphPieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  cards$: Observable<CardStatsModel[]> = inject(Store).select(DashboardState.getCards)
  cards: CardStatsModel[]

  graphEvoTests$: Observable<GrapheModel> = inject(Store).select(DashboardState.getGrapheEvolutionTest)
  graphEvoTests: GrapheModel

  graphTestEquipement$: Observable<GrapheModel> = inject(Store).select(DashboardState.getGrapheTestPerEquipement)
  graphTestPerEquipement: GrapheModel

  subscription: Subscription = new Subscription()

  constructor(private chd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscription.add(this.cards$.subscribe(c => {
      this.cards = c
      this.chd.detectChanges()
    }))

    this.subscription.add(this.graphEvoTests$.subscribe(g => {
      this.graphEvoTests = g
      this.chd.detectChanges()
    }))

    this.subscription.add(this.graphTestEquipement$.subscribe(t => {
      this.graphTestPerEquipement = t
      this.chd.detectChanges()
    }))
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
