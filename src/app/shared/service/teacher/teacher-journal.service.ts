import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})

export class TeacherJournalService {
    private readonly STUDENT_WS_CONTROLLER = '/api/private/teacher/journal';

    constructor(private http: HttpClient) {
    }

    getLessonJournal(): Observable<any> {
        return this.http.get(`${this.STUDENT_WS_CONTROLLER}`);
    }
}
