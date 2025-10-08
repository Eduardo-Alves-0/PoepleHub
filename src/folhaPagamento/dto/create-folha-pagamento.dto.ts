import { IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { StatusFolha } from './../entities/folhaPagamento.entity';

export class CreateFolhaPagamentoDto {
  @IsNotEmpty({ message: 'Mês de referência é obrigatório' })
  @Min(1)
  @Max(12)
  mesReferencia: number;

  @IsNotEmpty({ message: 'Ano de referência é obrigatório' })
  anoReferencia: number;

  @IsNotEmpty({ message: 'Salário bruto é obrigatório' })
  @IsNumber({}, { message: 'Salário bruto deve ser um número' })
  salarioBruto: number;

  @IsNotEmpty({ message: 'Descontos são obrigatórios' })
  @IsNumber({}, { message: 'Descontos devem ser um número' })
  descontos: number;

  @IsNotEmpty({ message: 'Benefícios são obrigatórios' })
  @IsNumber({}, { message: 'Benefícios devem ser um número' })
  beneficios: number;

  @IsNotEmpty({ message: 'Salário líquido é obrigatório' })
  @IsNumber({}, { message: 'Salário líquido deve ser um número' })
  salarioLiquido: number;

  @IsEnum(StatusFolha, { message: 'Status inválido' })
  status?: StatusFolha;
}
