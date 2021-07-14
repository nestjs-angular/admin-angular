import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: Role [] = []
  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.roleService.all().subscribe(roles => this.roles = roles);
  }

  delete(id: number) {
    if (confirm('¿Está seguro de que desea eliminar este registro?')) {
      this.roleService.delete(id).subscribe(
        () => {
          this.roles = this.roles.filter(r => r.id !== id);
        }
      )
    }
  }



}
