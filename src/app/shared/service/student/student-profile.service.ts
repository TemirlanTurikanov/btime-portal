import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from '../../model/student.module';

@Injectable({
    providedIn: 'root'
})
export class StudentProfileService {
    private readonly USER_CONTROL = '/api/private/v1/student';

    constructor(private http: HttpClient) {
    }

    getAllStudent(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }

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
    }
}
