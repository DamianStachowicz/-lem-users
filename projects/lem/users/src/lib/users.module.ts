import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersTableComponent } from './views/users-table/users-table.component';
import { FilterComponent } from './views/users-table/filter/filter.component';
import { TableComponent } from './views/users-table/table/table.component';
import { LemFormsModule } from '@lem/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UsersTableComponent,
        FilterComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LemFormsModule
    ],
    exports: [
        UsersTableComponent
    ]
})
export class UsersModule { }
