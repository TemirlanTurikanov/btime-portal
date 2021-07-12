import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})

export class BpmService {
    private readonly BPM_WS_CONTROLLER = 'gateway/bpm-service/api/private/v1/task';
    // private readonly STUDENT_WS_CONTROLLER = '/api/private/v1/teacher/journal/lesson';

    constructor(private http: HttpClient) {
    }
    getAllBpm(): Observable<any> {
        return this.http.get(`${this.BPM_WS_CONTROLLER}/all`);
    }

    getClaim(): Observable<any> {
        return this.http.get(`${this.BPM_WS_CONTROLLER}/claim`);
    }

    getStart(): Observable<any> {
        return this.http.get(`${this.BPM_WS_CONTROLLER}/start`);
    }

}
