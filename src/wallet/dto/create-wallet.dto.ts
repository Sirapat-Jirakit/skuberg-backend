import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty()
  accountId: number;

  @ApiProperty()
  cryptoId: number;

  @ApiProperty()
  balance: number;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
