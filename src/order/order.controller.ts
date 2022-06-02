import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um pedido',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os pedidos',
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um pedido pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
