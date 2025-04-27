import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { CryptoModule } from './crypto/crypto.module';
import { TrxModule } from './trx/trx.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [PrismaModule, AccountModule, CryptoModule, TrxModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
