import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherMyGroupListService {
    private readonly ROLES_CONTROL = '/api/private/v1/mygrouplist/teacher';

    constructor(private http: HttpClient) {
    }

    getMyGroupListData(teacherId): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all/teacherId/${teacherId}`);
    }


}
