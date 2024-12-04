import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GrapheModel} from '../../../models/dashboard.model';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graph-pie',
  standalone: true,
  imports: [],
  templateUrl: './graph-pie.component.html',
  styleUrl: './graph-pie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphPieComponent implements OnInit{
  @Input()
  graphData: GrapheModel

  ngOnInit(): void {
    this.loadChart()
  }

  loadChart(): void {
    const mychart = new Chart('chartpie', {
      type: this.graphData.type,
      data: {
        labels: this.graphData.labels,
        datasets: [
          {
            data: this.graphData.data,
            backgroundColor: [
              '#0062b0',
              'rgb(38,149,236)',
              '#004c99',
              '#2889d6',
              '#629ddc',
            ]
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true
          }
        },

      }
    })
  }
}
