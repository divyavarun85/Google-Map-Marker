import { commerce } from "faker";

export interface mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;

  color: string;
}
export class customMap {
  private googlemap: google.maps.Map;
  constructor(divId: string) {
    this.googlemap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: mappable): void {
    const Marker = new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    Marker.addListener("click", () => {
      var infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googlemap, Marker);
    });
  }
}
