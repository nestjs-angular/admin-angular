import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  roles: Role [] = [];

  public form = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    role_id: [''],
  })

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.roleService.all().subscribe(roles => this.roles = roles);
  }

  submit() {
    this.userService.create(this.form.value).subscribe(() => this.router.navigateByUrl('/users'));
  }

}
