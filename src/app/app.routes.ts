import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar.layout';
import path from 'path';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full', 
        redirectTo:'home', 

    },

{
    path: 'home',
    component:NavbarComponent,
    children:[
       {
        path:'',
        loadChildren: () => import('./home/home.routes').then(r=>r.homeRoutes)
       }
    ]
    
},
{
      path:'toDoList',
      component:NavbarComponent,
      children:[
        {
            path:'',
            loadChildren:() => import('./todolist/toDo.routes').then(r=>r.toDoRoutes)
        }
      ]


},
{
    path:'login',
    component:NavbarComponent,
    children:[
        {
            path:'',
            loadChildren:() => import('./login/login.routes').then(r=>r.logInRoutes)
        }
    ]
}
];
