import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // admin login
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    // normal user login
    else if (username && password) {
      localStorage.setItem('role', 'user');
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    // Return false if login failed
    return false;
  }
}
