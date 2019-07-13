import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { M7Component } from "./modules/m7/m7.component";
import { C12Component } from "./components/c12/c12.component";
import { C15Component } from "./components/c15/c15.component";
import { C5Component } from "./components/c5/c5.component";

import { AComponent } from "./elements/a/a.component";
import { ImgComponent } from "./elements/img/img.component";
import { HeaderComponent } from "./components/header/header.component";
import { ReadMoreComponent } from "./components/read-more/read-more.component";
import { ContentComponent } from "./components/content/content.component";
import { SpanComponent } from "./elements/span/span.component";

@NgModule({
  declarations: [
    AppComponent,
    M7Component,
    C12Component,
    C15Component,
    C5Component,
    AComponent,
    ImgComponent,
    HeaderComponent,
    ReadMoreComponent,
    ContentComponent,
    SpanComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
