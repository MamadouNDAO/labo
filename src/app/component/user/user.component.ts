import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

}
