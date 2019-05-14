import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div [ngClass]="greetClasses">
      Hi {{user.toUpperCase() + '!'}} at {{getSiteUrl()}}
    </div>
    <p>
      <input [id]="bindID" class="is-guest" bind-disabled="isDisabledProperty"
             type="text" value="username">
      <input (click)="getUA($event)" id="{{bindID}}" class="bold-admin" [class]="userType"
             [disabled]="!isDisabledProperty"
             type="button" value="Ok">
    </p>
    <p [class.bold-admin]="!hasAdminRights">
      'demo' as sub-component (with inline template) works!
    </p>
    <div [ngStyle]="featuresBox">
      <p [style.color]="'orange'">
        Implemented : [Modules, Components, Interpolation, Property binding, Class binding, Style binding] till now.
      </p>
      <p [style.color]="currentFeature ? currentFeatureColor : 'orange'">
        Knowing : [Event binding] currently.
      </p>
    </div>
    <div>
      <input type="text" placeholder="Email for our newsletter">
      <button (click)="user = 'Editor'; hasAdminRights = true;">Subscribe</button>
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

  public user = 'Admin';  // {{Interpolation}} - (embedding expressions) : binds 'string' data from the class to the template

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

  // -- [Data Binding] : Data flow is from component class to component template. Any update to class property makes view updated as well --
  // -- (Event Binding) : to respond to/capture user(dom) events, we need data flow in other direction as well (from template/view to component-class) --  //2 ways to use : assign Event handler | add Template statement inline

  constructor() {
  }

  ngOnInit() {
  }

  getSiteUrl() {    // {{Interpolation}}
    return window.location.href;
  }

  getUA(event) {   // (Event Binding) - event handler to listen to click event of button 'Ok'
    // setting properties on dom event -  mouse click!
    this.user = 'Guest User';
    this.hasAdminRights = false;

    console.log('Event is - ', event);    //$event - (optional event handler parameter) - special variable for angular - gives all info about dom event that was raised.
    alert('This User Agent : ' + navigator.userAgent);
  }

}
