import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from '../../model/student.module';

@Injectable({
    providedIn: 'root'
})
export class StudentTimetableService {
    private readonly ROLES_CONTROL = '/api/private/v1/student/timetable';

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

    getAllLessons(classs, eduYear): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all/classs/${classs}?eduYear=${eduYear}`, this.HTTP_OPTIONS());
    }
/*
    createStudent(studentModel: StudentModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, studentModel);
    }

    deleteStudent(id: number): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/id/` + id);
    }

    getAllStudentPaging(page, size): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/page/${page}/size/${size}`);
    }

    getStudentById(id: number): Observable<any>{
        return this.http.get(`${this.USER_CONTROL}/id/` + id);
    }*/
}
