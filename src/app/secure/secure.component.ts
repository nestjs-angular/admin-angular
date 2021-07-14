import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth } from '../classes/auths';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  constructor(
    private authSrevice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authSrevice.user().subscribe(
      user => Auth.userEmitter.emit(user),
      () => this.router.navigateByUrl('/login')
    );
  }

}
