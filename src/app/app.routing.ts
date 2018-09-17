import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    }, {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register Page'
        }
    }, {
        path: 'admin',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'addusers',
                loadChildren: './components/adduser/adduser.module#AdduserModule',
                data: {
                    title: 'Add Users'
                },
                canActivate: [AuthGuardService]
            },
            {
                path: 'users',
                loadChildren: './components/userlist/userlist.module#UserlistModule',
                data: {
                    title: 'Users'
                }
            }, {
                path: 'dashboard',
                loadChildren: './components/dashboard/dashboard.module#DashboardModule',
                data: {
                    title: 'Dashboard'
                },
                canActivate: [AuthGuardService]
            }
        ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
