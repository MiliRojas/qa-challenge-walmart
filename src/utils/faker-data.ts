import { faker } from '@faker-js/faker'
import { User } from '../types/User'


export function createUser(): User {
  return {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  telephone: faker.phone.number(),
  password: 'Test1234!',
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  postcode: faker.location.zipCode()
}
}