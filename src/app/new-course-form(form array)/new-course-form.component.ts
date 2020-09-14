import { Component } from '@angular/core';
import { FormGroup , FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    console.log(topic);
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}

// Also check form builder example, might be very smooth to use and code will be pleasing to eye.


