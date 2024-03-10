export interface UserType {
    map(arg0: (user: unknown) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }
  
  export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export interface Geo {
    lat: string
    lng: string
  }
  
  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }
  