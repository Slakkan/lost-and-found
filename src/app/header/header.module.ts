import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
