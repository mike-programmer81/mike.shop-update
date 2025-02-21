import { Component, inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.layout.html',
  imports:[ButtonModule,RouterOutlet,DialogModule]

})
export class NavbarComponent { 
  router = inject(Router)

  
  onclickHome(){

    this.router.navigate(['/home'])

  }
  onClickTodo(){
    this.router.navigate(['/toDoList'])
  }

  onClickLogIn(){
    this.router.navigate(['/toDoList'])
  }
}