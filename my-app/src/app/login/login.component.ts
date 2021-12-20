import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../_services/auth.service';
//import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
