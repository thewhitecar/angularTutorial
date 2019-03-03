import { Component } from '@angular/core';

// MetaData and Template
//Component Decorator, which is a function that passes in an object.
@Component({
  selector: 'pm-root',
  template: `<div>
              <h1>{{pageTitle}}</h1>
                <pm-products></pm-products>
              </div>
              `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = "Acme Product Management"
}
