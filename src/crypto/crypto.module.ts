import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CryptoController],
  providers: [CryptoService],
  imports: [PrismaModule],
})
export class CryptoModule {}
