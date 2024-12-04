import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CardStatsModel} from '../../../models/dashboard.model';

@Component({
  selector: 'app-stat-card-item',
  standalone: true,
  imports: [],
  templateUrl: './stat-card-item.component.html',
  styleUrl: './stat-card-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardItemComponent {
  @Input()
  card: CardStatsModel;
}
