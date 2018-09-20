import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './components/login/login.component';
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
        path: 'admin',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './components/dashboard/dashboard.module#DashboardModule',
                data: {
                    title: 'Dashboard'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'addusers/:id',
                loadChildren: './components/adduser/adduser.module#AdduserModule',
                data: {
                    title: 'Add Users'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'users',
                loadChildren: './components/userlist/userlist.module#UserlistModule',
                data: {
                    title: 'Users'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'completed-jobs',
                loadChildren: './components/completed-jobs/completed-jobs.module#CompletedJobsModule',
                data: {
                    title: 'Completed Jobs'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'jobs',
                loadChildren: './components/jobs/jobs.module#JobsModule',
                data: {
                    title: 'Jobs'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'posts',
                loadChildren: './components/posts/posts.module#PostsModule',
                data: {
                    title: 'Posts'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'contracts',
                loadChildren: './components/contracts/contracts.module#ContractsModule',
                data: {
                    title: 'Contracts'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'companies',
                loadChildren: './components/company/company.module#CompanyModule',
                data: {
                    title: 'Inactive Jobs'
                },
                canActivate: [AuthGuardService]
            },
            {
                path: 'test',
                loadChildren: './components/test/test.module#TestModule',
                data: {
                    title: 'Test'
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
