import { PartialType } from '@nestjs/mapped-types';
import { CreateFeriasDto } from './create-ferias.dto';

export class UpdateFeriasDto extends PartialType(CreateFeriasDto) {}
