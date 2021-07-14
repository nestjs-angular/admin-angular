import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../classes/auths';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public infoForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
  })

  public passwordForm = this.fb.group({
    password: [''],
    password_confirm: [''],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(user => this.infoForm.patchValue(user));
    // Auth.userEmitter.subscribe(
    //   user => {
    //     this.infoForm.patchValue(user);
    //   }
    // )
  }

  infoSubmit() {
    this.authService.updateInfo(this.infoForm.value).subscribe(user => Auth.userEmitter.emit(user));
  }

  passwordSubmit() {
    this.authService.updatePassword(this.passwordForm.value).subscribe(res => {
      console.log(res)
    })
  }


}
