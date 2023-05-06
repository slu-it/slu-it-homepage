import {NgModule} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FooterComponent} from './components/footer/footer.component';
import {FooterLinkElementComponent} from './components/footer-link-element/footer-link-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterLinkElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
