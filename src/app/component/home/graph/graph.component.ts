import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GrapheModel} from '../../../models/dashboard.model';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent implements OnInit {
  @Input()
  graphData: GrapheModel

  ngOnInit(): void {
    this.loadChart()
  }

  loadChart(): void {
    const mychart = new Chart('chartbar', {
      type: this.graphData.type,
      data: {
        labels: this.graphData.labels,
        datasets: [
          {
            data: this.graphData.data,
            borderColor: '#0062b0',
            backgroundColor: '#0062b0'
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },

      }
    })
  }


}
