import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UploadComponent } from './components/upload/upload.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent,
    ProfileComponent,
    DashboardComponent,
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    PaginatorComponent,
    UploadComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SecureComponent
  ]
})
export class SecureModule { }
