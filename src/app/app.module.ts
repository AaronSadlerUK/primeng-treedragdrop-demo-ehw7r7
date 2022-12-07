import { NgModule, Injector }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { AppComponent }   from './app.component';
import { NodeService } from './nodeservice';

import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NodeService],
  entryComponents: [
    AppComponent
  ]
})

export class AppModule {
  constructor(private injector: Injector) { }
 
  ngDoBootstrap(): void {
    const { injector } = this;
    // create custom elements from angular components
    const ngCustomElement = createCustomElement(AppComponent, { injector });
 
    // define in browser registry
    customElements.define('blog-angular', ngCustomElement);
  }
}
