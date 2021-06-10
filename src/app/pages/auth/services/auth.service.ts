import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {routes} from '../../../consts';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly AUTH_ENDPOINT = '/auth';
    public routers: typeof routes = routes;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    public login(authCred): void {
        this.http.post(this.AUTH_ENDPOINT, authCred, {observe: 'response'}).subscribe(res => {
            console.log(res.status);
            console.log(res.headers.get('Authorization'));
            if (res.status === 200) {
                localStorage.setItem('token', res.headers.get('Authorization'));
                this.router.navigate([this.routers.DASHBOARD]).then();
            }

        });

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
