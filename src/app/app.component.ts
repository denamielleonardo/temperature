import { Component } from '@angular/core';
import { ERROR_MESSAGE, TEMPERATURE, Util } from 'src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  celsius: number = 0;
  fahrenheit: number = 0;
  errorMessage: string = '';

  constructor() {  }
  
  onCelsiusChanged() {
    this.handleError();
    this.fahrenheit = Util.convertFarenheit(this.celsius);
  }

  onFahrenheitChanged() {
    this.handleError();
    this.celsius = Util.convertCelsius(this.fahrenheit);
  }
  
  handleError() {
    if (this.celsius < -30 || this.celsius > 200) {
      this.errorMessage = ERROR_MESSAGE.INVALID_TEMPERATURE;
      return;
    }
    this.errorMessage = '';
  }

  getTemperatureClass(): string {
    if (this.celsius < 30) return TEMPERATURE.COLD;
    if (this.celsius >= 30 && this.celsius <= 80) return TEMPERATURE.WARM;
    return TEMPERATURE.HOT;
  }
}
