import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { DashboardAction } from './dashboard.actions';
import {CardStatsModel, GrapheModel} from '../../models/dashboard.model';
import {ChartType} from 'chart.js';

export interface DashboardStateModel {
  cards: CardStatsModel[],
  grapheEvolutionTests: GrapheModel,
  grapheTestPerEquipement: GrapheModel,
}

export const DashboardStateDefault = {
  cards: [
    {icon: 'activity', stat: '29', label: 'Tests effectués'},
    {icon: 'graph', stat: '5', label: 'Tests en attente'},
    {icon: 'scan', stat: '6', label: 'Equipements'},
    {icon: 'activity', stat: '29', label: 'Tests effectués'},
  ],
  grapheEvolutionTests: {
    type: 'bar' as ChartType,
    labels: ['janv', 'feb', 'mar', 'avril', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov'],
    data: [12, 15, 20, 8, 16, 20, 22, 14, 30, 26, 11]
  },
  grapheTestPerEquipement: {
    type: 'pie' as ChartType,
    labels: ['Spectrophotomètre', 'PCR', 'Microscope', 'Centrifugeuse', 'Analyseur hématologique'],
    data: [120, 150, 200, 80, 160]
  }
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: DashboardStateDefault
})
@Injectable()
export class DashboardState {

  @Selector()
  static getState(state: DashboardStateModel) {
    return state;
  }

  @Selector()
  static getGrapheEvolutionTest(state: DashboardStateModel): GrapheModel {
    return state.grapheEvolutionTests;
  }

  @Selector()
  static getGrapheTestPerEquipement(state: DashboardStateModel): GrapheModel {
    return state.grapheTestPerEquipement;
  }

  @Selector()
  static getCards(state: DashboardStateModel): CardStatsModel[] {
    return state.cards
  }


}
