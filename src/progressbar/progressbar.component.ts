import { Component, Input } from '@angular/core';

@Component({
  selector: 'progressbar',
  template: `
    <div class="progressbar-container" 
      [style.backgroundColor]='backgroundColor'>
      <div class="progressbar" 
        [style]="{ 
          backgroundColor: progressColor,
          width: progress + '%'
        }"> </div>
    </div>
  `,
  styles: [
    `
    .progressbar-container,
    .progressbar { 
      height: 20px;
    },
    .progressbar-container {
      width: 100%;
    }
    `
  ]
})
export class ProgressBarComponent  {
  @Input() progress = 50;
  @Input() backgroundColor = "red";
  @Input() progressColor = "white";
}
