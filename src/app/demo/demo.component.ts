import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
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

  constructor() {
  }

  ngOnInit() {
  }

}
