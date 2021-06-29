import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherSchedulerService {
    private readonly ROLES_CONTROL = '/api/private/v1/scheduler/teacher';

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
        return this.http.get(`${this.ROLES_CONTROL}/all?eduYear=${eduYear}`, this.HTTP_OPTIONS());
    }

    getAllTimetable(): Observable<any> {
        return this.http.get('/gateway/timetable-service/timetable/all', this.HTTP_OPTIONS());
    }


}
