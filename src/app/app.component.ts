import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perform Calcs.';

  public expression: any = '';
  public result: number;

  evaluate(event) {
    event.target.value = event.target.value.toString().replace(/[^\d\+\-\*\/\%\(\)]/gi,'');
    //console.log(0o2+4);   //to allow octal literal in strict mode!
    this.result = eval(this.expression);
  }

}
