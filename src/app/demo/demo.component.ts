import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      Hi {{user.toUpperCase() + '!'}} at {{getSiteUrl()}}
    </div>
    <div>
      <input [id]="bindID" type="text" value="username" bind-disabled="!isDisabledProperty">
      <input id="{{bindID}}" type="button" [disabled]="isDisabledProperty" value="Ok">
    </div>
    <p>
      'demo' as sub-component (with inline template) works!
    </p>
  `,
  styles: [`
    p {
      color: aquamarine;
    }
  `]
})
export class DemoComponent implements OnInit {

  public user = 'Default User';  // {{Interpolation}} - (embedding expressions) : binds 'string' data from the class to the template

  public bindID = 'demoID';   // {{Interpolation}}, [Property Binding] - for string values
  public isDisabledProperty = true;   // [Property Binding] - (for non-string data values) : binding to the 'id' property of DOM element (dom property), not to html attribute

  constructor() {
  }

  ngOnInit() {
  }

  getSiteUrl() {
    return window.location.href;
  }

}
