import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-important-information',
  templateUrl: './important-information.component.html',
  styleUrls: ['./important-information.component.css']
})
export class ImportantInformationComponent implements OnInit {
  pdfSrc = '';

  cleanUrl() {
  const trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  return trustedUrl
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
