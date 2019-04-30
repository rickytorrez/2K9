import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

//welcome 
const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'login', component: LoginComponent },
    { path:'welcome/:name', component: WelcomeComponent },
    { path:'todos', component: ListTodosComponent },


    // Every other path is defined, lead to the error component if client hits an unknown route
    { path:'**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }