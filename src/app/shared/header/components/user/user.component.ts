import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {routes} from '../../../../consts';
import {User} from '../../../../pages/auth/models';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
    public routes: typeof routes = routes;
    public flatlogicEmail = 'https://www.bcc.kz/';
    public curLogin: string;

    public signOutEmit(): void {
        this.signOut.emit();
    }

    ngOnInit(): void {
        this.curLogin = JSON.parse(localStorage.getItem('user')).principal;
    }
}
