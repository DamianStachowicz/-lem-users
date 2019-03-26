import { Component } from '@angular/core';
import { UsersService } from 'projects/lem/users/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'users';

    constructor() { }
}
