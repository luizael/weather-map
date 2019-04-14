export class Polygon {
    id;
    name;
    user_id;
    area;
    center: Array<any>;
    geo_json: GeoJson;
}
export class GeoJson {
    geometry: Coodinates;
}
export class Coodinates {
    coordinates: Array<any>;
}
