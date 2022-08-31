import { Component } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  weather: Weather;

  constructor(private weatherService: WeatherService) {
    // weatherService.getLocationOfLondon().subscribe(gps => console.log(gps[0].lon + " - " + gps[0] . lat),
    //                                               error => console.log(error),
    //                                               () => console.log("finished"));
    this.weather = new Weather();
    weatherService.getWeatherOfLondon().subscribe(response => {
                                                    this.weather = response;
                                                    // console.log(this.weather.rain['1h']);
                                                    this.weather.date = new Date();
                                                  },
                                                  error => console.log(error),
                                                  () => console.log("finished"));
  }
}
