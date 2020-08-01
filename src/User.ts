import faker from "faker";
import { mappable } from "./customMp";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `User name is ${this.name}`;
  }
}
