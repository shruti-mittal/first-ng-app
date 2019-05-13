import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div [ngClass]="greetClasses">
      Hi {{user.toUpperCase() + '!'}} at {{getSiteUrl()}}
    </div>
    <p>
      <input [id]="bindID" class="is-guest" bind-disabled="!isDisabledProperty" type="text" value="username">
      <input id="{{bindID}}" class="bold-admin" [class]="userType" [disabled]="isDisabledProperty" type="button" value="Ok">
    </p>
    <p [class.bold-admin]="!hasAdminRights">
      'demo' as sub-component (with inline template) works!
    </p>
    <div [ngStyle]="featuresBox">
      <p [style.color]="'orange'">
        Implemented : [Modules, Components, Interpolation, Property binding, Class binding] till now.
      </p>
      <p [style.color]="currentFeature ? currentFeatureColor : 'orange'">
        Knowing : [Style binding] currently.
      </p>
    </div>
  `,
  styles: [`
    p {
      color: aquamarine;
    }
    .is-admin {
    color: green;
    }
    .is-guest {
    color: blue;
    }
    .bold-admin {
    font-weight: bolder;
    background-color: lightgrey;
    }
  `]
})
export class DemoComponent implements OnInit {

  public user = 'Default User';  // {{Interpolation}} - (embedding expressions) : binds 'string' data from the class to the template

  public bindID = 'demoID';   // {{Interpolation}}, [Property Binding] - for string values
  public isDisabledProperty = true;   // [Property Binding] - (for non-string data values) : binding to the 'id' property of DOM element (dom property), not to html attribute

  public userType = 'is-admin';    // [Class Binding] : dynamically binds (add/remove) class(es) to html elements
  public hasAdminRights = true;   // property to conditionally apply single class based on expression that evaluates to be either true or false.
  public greetClasses = {
    "is-admin": this.hasAdminRights,
    "is-guest": !this.hasAdminRights,
    "bold-admin": this.hasAdminRights
  };   // object to conditionally apply Multiple Classes, Use : ngClass Directive

  public currentFeature = true;   // [Style Binding] : apply inline styles to html elements   // conditionally assign value to css property
  public currentFeatureColor = 'indigo';    // bound this property to 'color' property style. now we can change this component class property to be any color based on user interactions or state of the application.
  public featuresBox = {
    fontFamily: "cursive",
    fontStyle: "normal"
  };    // object to apply Multiple Styles, Use : ngStyle Directive

  constructor() {
  }

  ngOnInit() {
  }

  getSiteUrl() {
    return window.location.href;
  }

}
