import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing'
import { IntercepterHttp } from './services/http.interceptor'
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

// Import routing module

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AppAsideModule,
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        LoginComponent,
        RegisterComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: IntercepterHttp,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
