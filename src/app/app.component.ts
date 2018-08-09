import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <router-outlet name="login"></router-outlet>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
