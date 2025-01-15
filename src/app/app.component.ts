import { Component } from '@angular/core';
import { Util } from 'src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  celsius: number = 0;
  fahrenheit: number = 0;
  errorMessage: string = "";

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
      this.errorMessage = 'Invalid celsius value';
      return;
    }
    this.errorMessage = '';
  }

  getTemperatureColor(): string {
    if (this.celsius < 30) return 'lightblue';
    if (this.celsius > 30 && this.celsius <= 80) return 'orange';
    return 'red';
  }
}
