import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { AppareilService } from "./services/appareil.service";

@NgModule({
  declarations: [AppComponent, AppareilComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
