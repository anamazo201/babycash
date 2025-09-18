import { PartialType } from '@nestjs/mapped-types';
import { CreateItemCarritoDto } from './create-item-carrito.dto';

export class UpdateItemCarritoDto extends PartialType(CreateItemCarritoDto) {}
