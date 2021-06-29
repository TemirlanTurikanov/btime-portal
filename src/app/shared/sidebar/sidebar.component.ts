import {Component, OnInit} from '@angular/core';
import {routes} from '../../consts/routes';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public routes: typeof routes = routes;
    public isOpenUiElements = false;
    public roles = '';

    public openUiElements() {
        this.isOpenUiElements = !this.isOpenUiElements;

    }

    ngOnInit(): void {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < JSON.parse(localStorage.getItem('user')).authorities.length; i++) {
            console.log(JSON.parse(localStorage.getItem('user')).authorities[i].role);
            this.roles = JSON.parse(localStorage.getItem('user')).authorities[i].role + ' , ' + this.roles;
        }
    }
}
