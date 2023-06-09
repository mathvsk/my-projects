import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInRepository {
  findByID(id: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  save(checkIn: CheckIn): Promise<CheckIn>
  findManyByUserID(userID: string, page: number): Promise<CheckIn[]>
  countByUserID(userID: string): Promise<number>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
}
