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
    if (this.isValidTemperature(this.celsius)) {
      this.fahrenheit = Util.convertFahrenheit(this.celsius);
      this.errorMessage = '';
    } else {
      this.errorMessage = ERROR_MESSAGE.INVALID_TEMPERATURE;
    }
  }

  onFahrenheitChanged() {
    if (this.isValidTemperature(this.fahrenheit)) {
      this.celsius = Util.convertCelsius(this.fahrenheit);
      this.errorMessage = '';
    } else {
      this.errorMessage = ERROR_MESSAGE.INVALID_TEMPERATURE;
    }
  }
  
  isValidTemperature(value: number): boolean {
    return value >= -30 && value <= 200;
  }

  getTemperatureClass(): string {
    if (this.celsius < 30) return TEMPERATURE.COLD;
    if (this.celsius >= 30 && this.celsius <= 80) return TEMPERATURE.WARM;
    return TEMPERATURE.HOT;
  }
}
