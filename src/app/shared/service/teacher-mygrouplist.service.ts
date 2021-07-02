import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherMyGroupListService {
    private readonly ROLES_CONTROL = '/gateway/timetable-service/teacher/mygrouplist/';

    constructor(private http: HttpClient) {
    }
// HTTP_OPTIONS
    // tslint:disable-next-line:only-arrow-functions
    private readonly HTTP_OPTIONS = function(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            })
        };
    };

    getMyGroupListData(): Observable<any> {
        const login = JSON.parse(localStorage.getItem('user'));
        return this.http.get(`${this.ROLES_CONTROL}/all?login=${login}`, this.HTTP_OPTIONS());
    }

}

