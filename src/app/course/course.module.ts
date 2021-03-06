import { CoursesListComponent } from './component/course-list/course-list.component';
import { CourseEffects } from '../store/course.effect';
import { CourseService } from './services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { courseReducer } from '../store/course.reducer';

import { CreateCourseComponent } from './component/create-course/create-course.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  providers: [CourseService],
  bootstrap: [],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule { }
