import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important-information',
  templateUrl: './important-information.component.html',
  styleUrls: ['./important-information.component.css']
})
export class ImportantInformationComponent implements OnInit {
pdfSrc = "https://firebasestorage.googleapis.com/v0/b/faith-family-homeschool-co-op.appspot.com/o/FFHC%20Handbook.pdf?alt=media&token=c2ce22a7-0b29-49d4-a189-a815f4f56d2e"

  constructor() { }

  ngOnInit(): void {
  }

}
