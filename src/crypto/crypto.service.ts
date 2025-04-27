import { Injectable } from '@nestjs/common';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CryptoService {
  constructor(private prisma: PrismaService) {}

  create(createCryptoDto: CreateCryptoDto) {
    return this.prisma.crypto.create({ data: createCryptoDto });
  }

  findAll() {
    return this.prisma.crypto.findMany();
  }

  findOne(id: number) {
    return this.prisma.crypto.findUnique({ where: { id } });
  }

  update(id: number, updateCryptoDto: UpdateCryptoDto) {
    return this.prisma.crypto.update({
      where: { id },
      data: updateCryptoDto,
    });
  }

  remove(id: number) {
    return this.prisma.crypto.delete({ where: { id } });
  }
}
