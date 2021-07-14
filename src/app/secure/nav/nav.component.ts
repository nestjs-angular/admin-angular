import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../classes/auths';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: any = {};
  constructor(
    private authSrevice: AuthService
  ) { }

  ngOnInit(): void {
    Auth.userEmitter.subscribe(user => this.user = user);
  }

  logout() {
    this.authSrevice.logout().subscribe(() => console.log('exitoso'));
  }
}
