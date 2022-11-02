import { Role } from "./role"

export class User {
    userId: number
    username: string
    password: string
    firstName: string
    lastName: string
    age: number
    gender: string
    address: string
    phoneNumber: number
    createdAt: Date
    isActive: boolean
    roleId: Role
}
