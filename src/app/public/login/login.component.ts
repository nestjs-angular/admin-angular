import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['merling@gmail.com', Validators.required],
    password: ['ramirez', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.getRawValue());
    this.authService.login(this.loginForm.getRawValue()).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/');
    })
  }

}
