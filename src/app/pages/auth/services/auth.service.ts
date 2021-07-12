import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {routes} from '../../../consts';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly AUTH_ENDPOINT = '/gateway/api/authenticate';
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

    public login(authCred): void {
        const authData = new FormData();
        authData.append('username', authCred.username);
        authData.append('password', authCred.password);
        this.http.post(this.AUTH_ENDPOINT, authData, {observe: 'response'}).subscribe(res => {
            console.log(res.status);

            console.log(authData);
            console.log(res.headers.get('authorization'));
            if (res.status === 200) {
                localStorage.setItem('token', res.headers.get('authorization'));
                // this.getCurrentUserInfo().subscribe(curUser => {
                //     console.log('User: ', curUser);
                //     localStorage.setItem('user', JSON.stringify(curUser));
                this.router.navigate([this.routers.DASHBOARD]).then();
                // });
            }
        });

    }

    public getCurrentUserInfo(): Observable<any> {
            return this.http.get('/gateway/current', this.HTTP_OPTIONS());
        // return null;
        }

    public signOut(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }


    /**
     * Get Token For Login
     */
    // getTokenByUser(login: string, password: string): Observable<any> {
    //     const authData = new FormData();
    //     authData.append('username', login);
    //     authData.append('password', password);
    //     console.log(authData);
    //     return this.http.post('/gateway/api/authenticate', authData, {observe: 'response', responseType: 'text'});
    // }

}
