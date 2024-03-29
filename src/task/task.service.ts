import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
// import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
}
