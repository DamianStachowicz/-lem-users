import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from 'projects/lem/users/src/lib/views/users-table/users-table.component';

const routes: Routes = [
    { path: 'users', component: UsersTableComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
