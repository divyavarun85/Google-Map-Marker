import faker from "faker";

export class Company {
  Name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.Name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
    Company name is ${this.Name} and catch Phrase is ${this.phrase}
    `;
  }
}
