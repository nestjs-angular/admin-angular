import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission } from '../../../interfaces/permission';
import { PermissionService } from '../../../services/permission.service';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../interfaces/role';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  permissions: Permission[] = [];
  id!: number;

  public form = this.fb.group({
    name: '',
    permissions: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
   }

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

    this.roleService.get(this.id).subscribe((role: Role) => {
      const values = this.permissions.map(p => {
        return {
          value: role.permissions?.some(r => r.id === p.id),
          id: p.id
        }
      });
      this.form.patchValue({
        name: role.name,
        permissions: values
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

    this.roleService.update(this.id, data).subscribe(() => this.router.navigateByUrl('/roles'));
  }

}
