import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Course } from './../model/course.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  http!: HttpClient;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-type": "application/json"}),
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable <Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('http://localhost:3000/courses', course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>('http://localhost:3000/courses', course, this.httpOptions);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete('http://localhost:3000/courses/' + courseId);
  }
}
