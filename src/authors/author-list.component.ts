import { Component, Input } from '@angular/core';
import { Author, authors } from '../author.model';

@Component({
  selector: 'author-list',
  template: `
  <author-details *ngFor='let author of authors'
  [author]= 'author'
  (selected)="onSelected($event)"
  (delete)="onDeleted($event)"
  >
  </author-details>
      <div>
    current selected Author: {{currentAuthor?.firstName}} {{currentAuthor.lastName}}
    </div>
  `
})
export class AuthorListoComponent  {
  authors = authors;
  currentAuthor = authors[0]

  onSelected(selectedAuthor: Author) { 
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number) { 
    this.authors = this.authors.filter(author => { 
      return author.id !== id
    })

   if (this.currentAuthor.id === id) { 
    this.currentAuthor = this.authors[0]
  }
  }
}