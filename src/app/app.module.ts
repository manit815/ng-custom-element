import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const button = createCustomElement(ButtonComponent, {injector})
    customElements.define('custom-button', button);
  }

  ngDoBootstrap() {
    
  }
}
