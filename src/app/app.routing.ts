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
                loadChildren: './components/users/adduser/adduser.module#AdduserModule',
                data: {
                    title: 'Add Users'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'edit-job/:id',
                loadChildren: './components/edit-job/edit-job.module#EditJobModule',
                data: {
                    title: 'Edit Jobs'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'users',
                loadChildren: './components/users/userlist/userlist.module#UserlistModule',
                data: {
                    title: 'Users'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'user-details/:id',
                loadChildren: './components/users/view-user/view-user.module#ViewUserModule',
                data: {
                    title: 'User Details'
                },
                canActivate: [AuthGuardService]
            }, {
                path: 'admin',
                loadChildren: './components/admin/admin.module#AdminModule',
                data: {
                    title: 'Admin'
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
                path: 'jobs/:jobid',
                loadChildren: './components/view-job/view-job.module#ViewJobModule',
                data: {
                    title: 'Jobs Description'
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
