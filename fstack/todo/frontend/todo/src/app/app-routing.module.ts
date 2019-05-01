import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

//welcome 
const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'login', component: LoginComponent },
    { path:'logout', component: LogoutComponent,  canActivate: [RouteGuardService] }, // router guard to protect from unauthorized access
    { path:'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, // router guard
    { path:'todos', component: ListTodosComponent, canActivate: [RouteGuardService] }, // router guard to protect from unauthorized access


    // every other path is defined, lead to the error component if client hits an unknown route
    { path:'**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }