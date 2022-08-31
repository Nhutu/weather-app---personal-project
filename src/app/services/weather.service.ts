import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiURLGeo = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=';
  appID = '646ab12c5c24fff16279146d56953d49'

  constructor(private httpClient: HttpClient) { }

  getLocationOfLondon(): Observable<{ lon: number; lat: number; }[]> {
    return Observable.create((observer: Subscriber<{ lon: number; lat: number; }[]>) => {
      this.httpClient.get<{ lon: number; lat: number; }[]>(this.apiURLGeo + this.appID)
        .subscribe((response: { lon: number; lat: number; }[]) => observer.next(response));
    });
  }

  getWeatherOfLondon(): Observable<Weather> {
    return Observable.create((observer: Subscriber<Weather>) => {
      this.httpClient.get<Weather>('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=' + this.appID + '&units=metric')
        .subscribe((response: Weather) => observer.next(response));
    });
  }
}
