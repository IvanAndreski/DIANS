import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { MapItem }     from '../domain/map-item';
import { MapLocation } from '../domain/map-location';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getPlacesForType(type: string) {
    return this.http.get<MapItem[]>(`/api/place/all/${type}`);
  }

  getPlacesForTypeWithLocation(type: string, location: MapLocation) {
    return this.http.get<MapItem[]>(`/api/place/${type}?myLon=${location.lon}&myLat=${location.lat}&limit=${20}`);
  }

  getPlacesInRadius(type: string, location: MapLocation) {
    return this.http.get<MapItem[]>(`/api/place/radius/${type}?myLon=${location.lon}&myLat=${location.lat}&radius=10`);
  }

  getPlacesFromSearch(search: string) {
    return this.http.get<MapItem[]>(`/api/place/search?param=${search}`);
  }
}
