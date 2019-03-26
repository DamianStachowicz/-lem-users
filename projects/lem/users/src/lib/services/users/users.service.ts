import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsersConfig } from './users.config';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    username: string;
    password: string;
    permissions: string[];
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        private _config: UsersConfig,
        private _httpClient: HttpClient
    ) { }

    /**
     * Get users
     */
    public getUsers(username: string, permissions: string): Observable<any> {
        const params = new HttpParams()
            .set('username', username)
            .set('permissions', permissions);

        return this._httpClient.get(`${this._config.apiUrls.msUsers}/users`, { params });
    }

    /**
     * Get user
     */
    public getUser(id: number): Observable<User> {
        return this._httpClient.get<User>(`${this._config.apiUrls.msUsers}/users/${id}`);
    }

    /**
     * Create user
     */
    public createUser(user: User): Observable<any> {
        return this._httpClient.post(`${this._config.apiUrls.msUsers}/users`, user);
    }

    /**
     * Delete user
     */
    public deleteUser(id: number): Observable<any> {
        return this._httpClient.delete(`${this._config.apiUrls.msUsers}/users/${id}`);
    }

    /**
     * Update user
     */
    public updateUser(user: User): Observable<any> {
        return this._httpClient.put(`${this._config.apiUrls.msUsers}/users`, user);
    }
}
