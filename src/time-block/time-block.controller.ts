import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { TimeBlockService } from './time-block.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TimeBlockDto } from './dto/time-block.dto'

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.timeBlockService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: string) {
    return this.timeBlockService.create(dto, userId)
  }
}
