export interface User {
  email: string
  username: string
  name: {
    first: string
    last: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: number
      long: number
    }
  }
  phone: string
}
