import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
// import { TimeBlockDto } from './dto/time-block.dto'

@Injectable()
export class TimeBlockService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string) {
    return this.prisma.timeblock.findMany({
      where: {
        userId
      },
      orderBy: {
        order: 'asc'
      }
    })
  }
}
