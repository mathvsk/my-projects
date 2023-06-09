import { CheckIn } from '@prisma/client'
import { CheckInRepository } from '@/repositories/check-in-repository'
import { ResourceNotFoundError } from './error/resource-not-found-error'
import dayjs from 'dayjs'
import { LateCheckInValidationError } from './error/late-check-in-validation-erros'

interface ValidateCheckInServiceRequest {
  checkInID: string
}

interface ValidateCheckInServiceResponse {
  checkIn: CheckIn
}

export class ValidateCheckInService {
  constructor(private checkInRepository: CheckInRepository) {}

  async execute({
    checkInID,
  }: ValidateCheckInServiceRequest): Promise<ValidateCheckInServiceResponse> {
    const checkIn = await this.checkInRepository.findByID(checkInID)

    if (!checkIn) {
      throw new ResourceNotFoundError()
    }

    const distanceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.created_at,
      'minutes',
    )

    if (distanceInMinutesFromCheckInCreation > 20) {
      throw new LateCheckInValidationError()
    }

    checkIn.validated_at = new Date()

    await this.checkInRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}
