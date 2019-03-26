import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users/users.service';

@Component({
    selector: 'lem-users-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

    /**
     * Users list
     */
    users: User[];

    constructor(
        private _usersService: UsersService
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(username = '', permissions = '') {
        this._usersService.getUsers(username, permissions).subscribe(
            data => this.users = data
        );
    }
}
