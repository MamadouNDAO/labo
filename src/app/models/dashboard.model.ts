import {ChartType, ChartTypeRegistry} from 'chart.js';

export interface CardStatsModel {
  icon: string,
  stat: string,
  label: string,
}

export interface GrapheModel {
  type: ChartType,
  labels: string[],
  data: any[]
}
