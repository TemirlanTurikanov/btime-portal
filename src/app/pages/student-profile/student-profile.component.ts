import { Component, OnInit } from '@angular/core';
import {StudentProfileService} from '../../shared/service/student/student-profile.service';
import {StudentModel} from '../../shared/model/student.module';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  dataSource = [];
  studentModel: StudentModel;
  public name: string;
  public jobPosition: string;
  public birthdate: string;

  constructor(private studentProfileService: StudentProfileService) {
    this.studentModel = new StudentModel();
  }

  ngOnInit(): void {
    this.getStudentById(1);
  }

  getStudentById(id: number): void {
    this.studentProfileService.getStudentById(1).subscribe(res => {
      this.studentModel = res;
      this.name = this.studentModel.firstName;
      this.birthdate = this.studentModel.birthdate;
    });
  }
}
