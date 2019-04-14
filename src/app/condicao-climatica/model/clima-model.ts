export class ClimaModel {
        dt;
        weather: Array<Weather>;
        main: Main;
        wind: Wind;
        clouds: Clouds;
}
export class Weather {
    id;
    main;
    description;
    icon;
}
export class Main {
    temp;
    pressure;
    humidity;
    temp_min;
    temp_max;
}
export class Wind {
    speed;
    deg;
}
export class Clouds {
    all;
}
