import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services';
import {routes} from '../../../../consts';

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
                private router: Router) {
    }

    public sendLoginForm(): void {
        console.log(this.authCred);
        this.service.login(this.authCred);
        //
        //
    }

    public sendSignForm(): void {

        this.service.sign();

        this.router.navigate([this.routers.DASHBOARD]).then();
    }

    submitLoginForToken(): void {
        this.service.getTokenByUser(this.authCred.login, this.authCred.password).subscribe( res => {
            console.log(res);
        });
    }
}
