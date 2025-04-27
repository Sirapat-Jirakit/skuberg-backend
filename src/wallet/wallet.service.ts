import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  create(createWalletDto: CreateWalletDto) {
    return this.prisma.wallet.create({ data: createWalletDto });
  }

  findAll() {
    return this.prisma.wallet.findMany();
  }

  findOne(id: number) {
    return this.prisma.wallet.findUnique({ where: { id } });
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return this.prisma.wallet.update({
      where: { id },
      data: updateWalletDto,
    });
  }

  remove(id: number) {
    return this.prisma.wallet.delete({ where: { id } });
  }
}
