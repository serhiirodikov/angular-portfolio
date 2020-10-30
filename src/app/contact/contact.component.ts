import { Component, OnInit } from '@angular/core';
import { contactInfo } from '../mocks/mock';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  contacts = contactInfo;
  ngOnInit(): void {}
}
