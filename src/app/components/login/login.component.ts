import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorLogin: boolean = false;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const user = this.loginForm.value.user
    const password = this.loginForm.value.password;
    console.log('usuario: ', user);
    console.log('password: ', password);
    if (user === 'admin' && password === 'admin') {
      this.fakeLoading();
    } else {
      this.setErrorLoading()
    }
  }
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['products'])
    }, 1500)
  }
  setErrorLoading() {
    this.errorLogin = true;
    setTimeout(() => this.errorLogin = false, 5000);
  }
}
