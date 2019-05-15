import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perform Calcs.';

  public expression: any = '';
  public result;

  evaluate() {
    console.log('exp. is becoming=', this.expression);
    this.result = eval(this.expression);
  }

}
