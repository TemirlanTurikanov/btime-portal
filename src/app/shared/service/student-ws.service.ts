import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})
export class StudentWsService {
    private readonly STUDENT_WS_CONTROLLER = '/api/private/v1/student/ws';

    constructor(private http: HttpClient) {
    }

    getHotData(studentId): Observable<any> {
        return this.http.get(`${this.STUDENT_WS_CONTROLLER}/hot/studentId/${studentId}`);
    }

    getMyCources(studentId): Observable<any> {
        return this.http.get(`${this.STUDENT_WS_CONTROLLER}/myCources/studentId/${studentId}`);
    }
}
