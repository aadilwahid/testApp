import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Print at Home'},
    {id: 3, name: 'at doors'},
  ];
  submit(f) {  console.warn(f); }
}
