import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services';
import {routes} from '../../../../consts';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
    public todayDate: Date = new Date();
    public routers: typeof routes = routes;
    public authCred = {
        login: 'admin',
        password: 'admin'
    };

    constructor(private service: AuthService,
                private http: HttpClient,
                private router: Router) {
    }

    public sendLoginForm(): void {
        console.log(this.authCred);
        this.service.login(this.authCred);
        //
        //
    }

    public sendSignForm(): void {

        this.router.navigate([this.routers.DASHBOARD]).then();
    }

    submitLoginForToken(): void {
        this.service.getTokenByUser(this.authCred.login, this.authCred.password).subscribe(res => {
            localStorage.setItem('token', res.headers.get('authorization'));
            this.service.getCurrentUserInfo().subscribe(resUser => {
                console.log('User: ', resUser);
            });

            this.router.navigate([this.routers.DASHBOARD]).then();
        });
    }

}
