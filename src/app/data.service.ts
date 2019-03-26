import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() { }
    createDb() {

        const users = [
            {
                id: 1,
                username: 'Ozymandias',
                password: 'kinf-of-kings',
                permissions: ['USRMODIFY', 'USRDELETE']
            }, {
                id: 2,
                username: 'Słowacki',
                password: 'MickiewiczToMiernota',
                permissions: []
            }, {
                id: 3,
                username: 'ripley',
                password: 'nostromo',
                permissions: []
            }, {
                id: 4,
                username: 'Neo',
                password: 'iCanCtheCode',
                permissions: ['USRMODIFY', 'USRDELETE']
            }, {
                id: 5,
                username: 'thc',
                password: 'nigdy-nie-miałem-lepszego-brzucha!',
                permissions: []
            }, {
                id: 6,
                username: 'julius-cesar',
                password: 'et_tu_Brute?',
                permissions: []
            }
        ];

        return { users };
    }
}
