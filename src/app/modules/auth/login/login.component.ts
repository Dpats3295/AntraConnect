import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Function to handle login
  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      // Login successful, navigate to the News Feed page
      this.router.navigate(['/news-feed']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

  // Function to navigate to the Register page
  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
