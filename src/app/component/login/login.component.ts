import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  isLoading: boolean = false;
  constructor(private chd: ChangeDetectorRef, private router: Router) {
  }

  login(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home'])
      //this.chd.detectChanges()
    }, 3000)

  }
}
