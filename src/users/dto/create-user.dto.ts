import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:"user@gmail.com", description: "email"})
  readonly email: string;
  @ApiProperty({example:"t4354hed45m", description: "password"})
  readonly password: string
}
