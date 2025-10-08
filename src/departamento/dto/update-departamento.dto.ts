import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamentoDto } from './create-departamente.dto';

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {}
