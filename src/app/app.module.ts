import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogEngineService } from './services/log-engine/log-engine.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
