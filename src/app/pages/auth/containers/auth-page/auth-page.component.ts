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
        username: 'Tima',
        password: 'password'
    };

    constructor(private service: AuthService,
                private http: HttpClient,
                private router: Router) {
    }

    public sendLoginForm(): void {
         // this.service.getTokenByUser(this.authCred.login, this.authCred.password).subscribe(res => {
            // localStorage.setItem('token', res.headers.get('authorization'));

            console.log(this.authCred);
            this.service.login(this.authCred);

            // this.router.navigate([this.routers.DASHBOARD]).then();
        // });
    }

    public sendSignForm(): void {

        this.router.navigate([this.routers.DASHBOARD]).then();
    }


}
