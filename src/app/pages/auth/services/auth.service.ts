import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {routes} from '../../../consts';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly AUTH_ENDPOINT = '/api/authenticate';
    public routers: typeof routes = routes;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    // tslint:disable-next-line:only-arrow-functions
    private readonly HTTP_OPTIONS = function(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            })
        };
    };

    public getCurrentUserInfo(): Observable<any> {
        return this.http.get('/gateway/timetable-service/token/current', this.HTTP_OPTIONS());
    }

    public login(authCred): void {
        this.http.post(this.AUTH_ENDPOINT, authCred, {observe: 'response'}).subscribe(res => {
            console.log(res.status);
            console.log(res.headers.get('Authorization'));
            if (res.status === 200) {
                localStorage.setItem('token', res.headers.get('Authorization'));
                this.getCurrentUserInfo().subscribe(curUser => {
                    localStorage.setItem('user', JSON.stringify(curUser));
                    this.router.navigate([this.routers.DASHBOARD]).then();
                });
            }
        });

    }

    public signOut(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }


    /**
     * Get Token For Login
     */
    getTokenByUser(login: string, password: string): Observable<any> {
        const authData = new FormData();
        authData.append('username', login);
        authData.append('password', password);
        console.log(authData);
        return this.http.post('/gateway/api/authenticate', authData, {observe: 'response', responseType: 'text'});
    }

}
