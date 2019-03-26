import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { UsersModule } from 'projects/lem/users/src/public-api';
import { UsersConfig } from 'projects/lem/users/src/lib/services/users/users.config';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(DataService),
        UsersModule,
    ],
    providers: [
        { provide: UsersConfig, useValue: environment }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
