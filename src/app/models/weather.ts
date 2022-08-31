export class Weather {
  name!: string;

  weather!: {
    main: string;
    description: string;
    icon: string;
  }[];

  main!: {
    temp: number;
    pressure: number;
    humidity: number;
  };

  wind!: {
    speed: number;
  }

  rain!: {
      '1h': number;
  }

  clouds!: {
      all: number;
  }

  date!: Date;
}
