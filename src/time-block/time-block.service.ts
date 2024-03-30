import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TimeBlockDto } from './dto/time-block.dto'

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

  async create(dto: TimeBlockDto, userId: string) {
    return this.prisma.timeblock.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

  async update(
    dto: Partial<TimeBlockDto>,
    timeBlockId: string,
    userId: string
  ) {
    return this.prisma.timeblock.update({
      where: {
        userId,
        id: timeBlockId
      },
      data: dto
    })
  }

  async delete(timeBlockId: string, userId: string) {
    return this.prisma.timeblock.delete({
      where: {
        id: timeBlockId,
        userId
      }
    })
  }
}
