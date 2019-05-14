import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemotwoComponent } from './demotwo/demotwo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemotwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
