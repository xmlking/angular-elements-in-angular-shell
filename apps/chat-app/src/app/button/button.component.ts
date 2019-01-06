import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { StateService } from '@ngx-starter-kit/core';

@Component({
  selector: 'wc-button',
  template: `
    <button (click)="handleClick($event)">{{ label }}</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnChanges {

  @Input() label = '';
  @Output() action = new EventEmitter<number>();

  private numberOfClicks = 0;

  constructor(private stateService: StateService) {
    stateService.ctx.name = 'ButtonComponent sumo'
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  handleClick(event) {
    this.numberOfClicks++;
    this.stateService.ctx.age = this.stateService.ctx.age + 2;
    console.log('in ButtonComponent WC', this.stateService.ctx);
    this.action.emit(this.numberOfClicks);
  }
}
