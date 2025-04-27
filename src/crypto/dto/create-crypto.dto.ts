import { ApiProperty } from '@nestjs/swagger';

export class CreateCryptoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  currentPrice: number;
}
