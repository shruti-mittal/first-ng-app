import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      Hi {{user.toUpperCase() + '!'}} at {{getSiteUrl()}}
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

  public user = 'Default User';

  constructor() {
  }

  ngOnInit() {
  }

  getSiteUrl() {
    return window.location.href;
  }

}
