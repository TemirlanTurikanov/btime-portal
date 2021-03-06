import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherSchedulerService {
    private readonly ROLES_CONTROL = '/gateway/timetable-service/teacher/scheduler';

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


    getAllData(eduYear): Observable<any> {
        const login = JSON.parse(localStorage.getItem('user'));

        return this.http.get(`${this.ROLES_CONTROL}/all?login=${login}&eduYear=${eduYear}`, this.HTTP_OPTIONS());
    }

    getAllTimetable(): Observable<any> {
        return this.http.get('/gateway/timetable-service/timetable/all', this.HTTP_OPTIONS());
    }


}
