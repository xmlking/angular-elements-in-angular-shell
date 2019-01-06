import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { PushPipe } from './pipes/push.pipe';

@NgModule({
  declarations: [PushPipe, ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const elements: any[] = [[ButtonComponent, 'wc-button']];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector });
      customElements.define(name, el);
    }
  }

  ngDoBootstrap() {}
}
