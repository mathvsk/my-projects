import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotifiactionBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  category: string;
}