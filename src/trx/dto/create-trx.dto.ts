import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';

export class CreateTrxDto {
  @ApiProperty()
  accountId: number;

  @ApiProperty()
  cryptoId: number;

  @ApiProperty()
  transactionType: TransactionType;

  @ApiProperty()
  published?: boolean = false;
  @ApiProperty()
  amount: number;

  @ApiProperty()
  priceAtTransaction: number;
}
