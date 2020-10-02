import { Component, EventEmitter,  Input, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'author-details',
  template: `
  <div>
    {{author.firstName}} {{author.lastName}}
    <button style="margin-left: 1rem" (click)="selected.emit(author)">Select</button>
    <button style="margin-left: 1rem" (click)="delete.emit(author.id)" >Delete</button>
    </div>
  `,
})
export class AuthorDetailsComponent  {
  @Input() author: Author;
  @Output() selected = new EventEmitter<Author>()
  @Output() delete = new EventEmitter<number>()
}
