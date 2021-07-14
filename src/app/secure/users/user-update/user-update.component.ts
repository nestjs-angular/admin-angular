import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  
  roles: Role[] = [];
  id!: number;
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
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.roleService.all().subscribe(roles => this.roles = roles);
    this.userService.get(this.id).subscribe(user => this.form.patchValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role_id: user.role.id
    }));
  }

  submit(): void {
    this.userService.update(this.id,this.form.value).subscribe(() => this.router.navigateByUrl('/users'));
  }
}
