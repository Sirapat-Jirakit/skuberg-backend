import { Module } from '@nestjs/common';
import { TrxService } from './trx.service';
import { TrxController } from './trx.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TrxController],
  providers: [TrxService],
  imports: [PrismaModule],
})
export class TrxModule {}
