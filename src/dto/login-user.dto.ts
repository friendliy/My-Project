import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, IsNotEmpty, Length } from "class-validator";

export class LoginUserDTO {
  @ApiProperty({
    description: 'Username pengguna untuk login',
    type: String,
    example: 'Alizha',
  })
  @IsString()
  username: string;

  

  @ApiProperty({
    description: 'Password pengguna untuk login',
    type: String,
    example: 'aliz240405',
  })
  @IsString()
  password: string;
}