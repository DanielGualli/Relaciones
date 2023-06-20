import { Controller, Get, Post, Put, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('items')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('product')
  getProducts():string[]{
    return this.appService.getAll();
  }
  
}
