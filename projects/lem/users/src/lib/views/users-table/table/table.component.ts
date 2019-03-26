import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../services/users/users.service';

@Component({
    selector: 'lem-users-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() users: User[];

    constructor() { }

    ngOnInit() {
    }

}
