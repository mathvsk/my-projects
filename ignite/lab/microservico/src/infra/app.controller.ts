import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from "node:crypto";
import { CreateNotifiactionBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notfication.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotifiactionBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notfication.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
