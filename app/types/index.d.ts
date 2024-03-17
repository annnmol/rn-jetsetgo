
interface IData {
  [key: string]: any;
}

interface IFlight {
  id: number | string;
  gate?: string;
  price: number;
  origin: string;
  airline?: string;
  aircraft?: string;
  duration?: string;
  arrivalTime?: string;
  destination: string;
  flightNumber?: string;
  departureTime?: string;
  seatsAvailable?: number;
}

interface IAirportCity {
  id: number;
  city: string;
  airportCode?: string;
  image?: string;
}