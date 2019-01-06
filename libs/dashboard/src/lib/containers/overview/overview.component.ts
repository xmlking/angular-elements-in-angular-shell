import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import '@ngx-starter-kit/chat-app';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @ViewChild('but') button: ElementRef;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.button.nativeElement.label = 'Second Label';
    }, 2000);
  }

  onClick(event) {
    console.log(`Action Created: ${event.detail}`);
  }

}

