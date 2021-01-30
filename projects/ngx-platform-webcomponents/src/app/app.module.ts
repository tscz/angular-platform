import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPlatformComponent, NgxPlatformModule } from 'ngx-platform';

@NgModule({
  imports: [
    BrowserModule, NgxPlatformModule
  ],
  providers: [],
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(NgxPlatformComponent, { injector: this.injector })
    customElements.define("platform-demo", element);
  }

}
