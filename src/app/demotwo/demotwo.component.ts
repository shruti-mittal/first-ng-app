import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotwo',
  template: `
    <h3>Structural Directives: </h3>
    <div class="structural-directives">

      <div class="if">
        <div *ngIf="isAdmin; else notAdmin">Can see/edit all profiles</div>
        <div *ngIf="isAdmin; then beingAdmin; else notAdmin">This content will never be rendered.</div>
        
        <ng-template #notAdmin>
          <p>Guest User</p>
          <p>Edit your profile </p>
        </ng-template>
        
        <ng-template #beingAdmin>
          <p>Delete all users</p>
        </ng-template>
      </div>
      
      <div class="switch">
        <div [ngSwitch]="userType">
          <p *ngSwitchCase="'admin'">(Admin rights)</p>
          <p *ngSwitchCase="'guest'">(No rights)</p>
          <p *ngSwitchCase="'editor'">(Editor rights)</p>
          <p *ngSwitchDefault>(Alien!)</p>
        </div>
      </div>
      
      <div class="for" *ngIf="possibleRoles.length">
        <h4>Assignable roles : </h4> 
        <div [class.role-odd]="e" *ngFor="let role of possibleRoles; index as i; even as e; last as l; first as f; odd as o">
          <p [class.role-even]="o">{{i+1}} {{role}}</p>
          <div *ngIf="f">This is main role.!</div>
          <div *ngIf="l">Alien is fallback role.!</div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./demotwo.component.css']
})
export class DemotwoComponent implements OnInit {

  //*structuralDirectives : add or remove html element from the dom

  // *ngIf Directive : conditionally rendering html elements.
  // It can be inline with html block that needs to be conditionally rendered. Alternatively, we can have a directive in separate tag.
  isAdmin = true;    // toggle this property (to be truthy or falsy value) using any logic to render element in dom.
  // ng-template : (container) - angular specific html tag - contains blocks of html elements.
  // #notAdmin : #templateReferenceVariable - used as a reference to else statement.


  // *[ngSwitch] Directive : to compare against multiple values
  userType = this.isAdmin ? 'admin' : 'guest';    // in container 'div' element having all switch cases, [ngSwitch] directive is attached to which we assign an expression 'userType'.

  // *ngFor Directive : helps to render list of elements
  public possibleRoles = ['Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'];    // data source property which is iterated in ngFor loop.


  constructor() {
  }

  ngOnInit() {
  }

}
