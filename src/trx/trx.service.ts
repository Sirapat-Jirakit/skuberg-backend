import { Injectable } from '@nestjs/common';
import { CreateTrxDto } from './dto/create-trx.dto';
import { UpdateTrxDto } from './dto/update-trx.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrxService {
  constructor(private prisma: PrismaService) {}

  create(createTrxDto: CreateTrxDto) {
    return this.prisma.trx.create({ data: createTrxDto });
  }

  findAll() {
    return this.prisma.trx.findMany();
  }

  findOne(id: number) {
    return this.prisma.trx.findUnique({ where: { id } });
  }

  update(id: number, updateTrxDto: UpdateTrxDto) {
    return this.prisma.trx.update({
      where: { id },
      data: updateTrxDto,
    });
  }

  remove(id: number) {
    return this.prisma.trx.delete({ where: { id } });
  }
}
