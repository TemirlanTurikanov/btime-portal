import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherWorkspaceService {
    private readonly ROLES_CONTROL = '/api/private/v1/workspace/teacher';

    constructor(private http: HttpClient) {
    }

    getWorkspaceData(teacherId): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all/teacherId/${teacherId}`);
    }


}
