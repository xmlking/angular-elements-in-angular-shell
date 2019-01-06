import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './containers/overview/overview.component';
import '@ngx-starter-kit/chat-app';

function loadScript(path: string) {
  const script = document.createElement('script');
  script.src = path;
  script.onerror = () => console.error(`error loading ${path}`);
  document.body.appendChild(script);
}

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: OverviewComponent }
    ])
  ],
  declarations: [OverviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {
  constructor() {
    // loadScript('assets/chat-app/main.js');
  }
}
