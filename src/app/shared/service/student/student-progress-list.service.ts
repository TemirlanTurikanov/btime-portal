import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})
export class StudentProgressListService{
    private readonly STUDENT_PROGRESS_LIST_CONTROLLER = '/api/private/v1/student/progressList';

    constructor(private http: HttpClient) {
    }

    getMyCources(studentId): Observable<any> {
        return this.http.get(`${this.STUDENT_PROGRESS_LIST_CONTROLLER}/studentId/${studentId}`);
    }
}
