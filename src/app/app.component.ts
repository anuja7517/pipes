import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `LonLorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sequi nihil nemo molestiae rerum quam, eius voluptatem doloribus asperiores! Possimus tempora rerum doloribus cupiditate repellendus delectus unde hic deleniti. Adipisci,
          rem`;

  course = {
    title : "MEAN Stack",
    students :1533687,
    rating : 4.5,
    price : 199.99,
    releaseDate : new Date (2024, 1, 26)
  }

  filesArray = [
    {
      fileName : 'form 16',
      type   : 'pdf',
      size : 1236544587
    },
    {
      fileName : 'Salary Slip',
      type   : 'doc',
      size : 8529631470
    },
    {
      fileName : 'Exp Letter',
      type   : 'excel',
      size : 123698454
    },

]
}
