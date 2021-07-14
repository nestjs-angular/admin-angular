import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from '../../../services/permission.service';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {

  permissions: Permission[] = [];

  public form = this.fb.group({
    name: '',
    permissions: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.permissionService.all().subscribe(permissions => {
      this.permissions = permissions;
      this.permissions.forEach(p => {
        this.permissionArray.push(
          this.fb.group({
            value: false,
            id: p.id
          })
        )
      })
    });
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit() {
    const formData = this.form.value;
    const data = {
      name: formData.name,
      permissions: formData.permissions.filter((p:any) => p.value === true).map((p: any) => p.id)
    }

    this.roleService.create(data).subscribe(() => this.router.navigateByUrl('/roles'));
  }
}
