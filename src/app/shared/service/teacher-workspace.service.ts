import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherWorkspaceService {
    private readonly ROLES_CONTROL = '/gateway/timetable-service/teacher/workspace';

    constructor(private http: HttpClient) {
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
    getWorkspaceData(): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all`, this.HTTP_OPTIONS());
    }


}
