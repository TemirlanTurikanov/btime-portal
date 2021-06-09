import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {routes} from '../../../consts';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private AUTH_API = '/auth';
    public routers: typeof routes = routes;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    public login(authCred): void {
        this.http.post(this.AUTH_API, authCred, {observe: 'response'}).subscribe(res => {
            console.log(res.status);
            console.log(res.headers);
            console.log(res.headers.get('authorization'));
            if (res.status === 200) {
                localStorage.setItem('token', res.headers.get('authorization'));
                this.router.navigate([this.routers.DASHBOARD]).then();
            }
        });
        // localStorage.setItem('token', 'token');
    }

    public sign(): void {
        localStorage.setItem('token', 'token');
    }

    public signOut(): void {
        localStorage.removeItem('token');
    }

    public getUser(): Observable<User> {
        return of({
            name: 'John',
            lastName: 'Smith'
        });
    }
}
