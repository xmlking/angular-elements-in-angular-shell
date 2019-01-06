import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StateService } from '@ngx-starter-kit/core';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @ViewChild('but') button: ElementRef;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    setTimeout(() => {
      this.button.nativeElement.label = this.stateService.ctx.name //'Second Label';
    }, 2000);
  }

  onClick(event) {
    console.log('in OverviewComponent', this.stateService.ctx);
    console.log(`Action Created: ${event.detail}`);
  }

}

