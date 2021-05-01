import { courseActionTypes } from './../../../store/course.action';
import { getAllCourses } from './../../../store/course.selector';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from './../../model/course.model';
import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<Course[]> | any;

  courseToBeUpdated: Course | any;

  isUpdateActivated = false;

  constructor(private courseService: CourseService, private store: Store<AppState>) { }

  ngOnInit() {
    this.courses$ = this.store.select(getAllCourses);
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(courseActionTypes.deleteCourse({courseId}));
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = {...course};
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm: any) {
    const update: Update<Course> | any = {
      id: this.courseToBeUpdated.id,
      changes: {
        ...this.courseToBeUpdated,
        ...updateForm.value
      }
    };
    console.log(update);


    this.store.dispatch(courseActionTypes.updateCourse(update.changes));

    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
