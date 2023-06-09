import { CheckInRepository } from '@/repositories/check-in-repository'

interface GetUserMetricsServiceRequest {
  userID: string
}

interface GetUserMetricsServiceResponse {
  checkInsCount: number
}

export class GetUserMetricsService {
  constructor(private checkInsRepository: CheckInRepository) {}

  async execute({
    userID,
  }: GetUserMetricsServiceRequest): Promise<GetUserMetricsServiceResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserID(userID)

    return {
      checkInsCount,
    }
  }
}
