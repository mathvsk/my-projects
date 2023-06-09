import { CheckIn } from '@prisma/client'
import { CheckInRepository } from '@/repositories/check-in-repository'

interface FetchUsersCheckInsHistoryServiceRequest {
  userID: string
  page: number
}

interface FetchUsersCheckInsHistoryServiceResponse {
  checkIns: CheckIn[]
}

export class FetchUsersCheckInsHistoryService {
  constructor(private checkInsRepository: CheckInRepository) {}

  async execute({
    userID,
    page,
  }: FetchUsersCheckInsHistoryServiceRequest): Promise<FetchUsersCheckInsHistoryServiceResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserID(
      userID,
      page,
    )

    return {
      checkIns,
    }
  }
}
