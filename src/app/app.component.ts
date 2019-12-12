import { Component } from '@angular/core';
import { LogEngineService } from './services/log-engine/log-engine.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 8 logger service';
  logStatement = "no logging";

  constructor(private logService: LogEngineService) { 
  }

  debugClicked (message) {
    this.logStatement = this.logService.debug(message);
  }

  warnClicked (message) {
    this.logStatement = this.logService.warn(message);
  }

  errorClicked (message) {
    this.logStatement = this.logService.error(message);
  }

  infoClicked (message) {
    this.logStatement = this.logService.info(message);
  }

  ngOnInit() {
    this.logStatement = "logger initialized";
    this.logService.info(this.logStatement);
  }
}
