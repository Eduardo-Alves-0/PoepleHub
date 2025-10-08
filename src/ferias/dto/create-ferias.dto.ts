import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { StatusFerias } from './../entities/ferias.entity';

export class CreateFeriasDto {
  @IsNotEmpty({ message: 'Data de início é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data de início inválida' })
  dataInicio: Date;

  @IsNotEmpty({ message: 'Data de fim é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data de fim inválida' })
  dataFim: Date;

  @IsNotEmpty({ message: 'Dias corridos são obrigatórios' })
  @Min(1, { message: 'Deve ter pelo menos 1 dia' })
  diasCorridos: number;

  @IsNotEmpty({ message: 'Período aquisitivo é obrigatório' })
  @IsString({ message: 'Período aquisitivo deve ser uma string' })
  periodoAquisitivo: string;

  @IsEnum(StatusFerias, { message: 'Status inválido' })
  @IsOptional()
  status?: StatusFerias;

  @IsOptional()
  @IsString({ message: 'Observações devem ser uma string' })
  observacoes?: string;

  @IsOptional()
  @IsString({ message: 'Motivo da recusa deve ser uma string' })
  motivoRecusa?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Data de solicitação inválida' })
  dataSolicitacao?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'Data de aprovação inválida' })
  dataAprovacao?: Date;
}
