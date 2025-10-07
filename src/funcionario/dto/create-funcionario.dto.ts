import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { StatusFuncionario } from '../entities/funcionario.entity';

export class CreateFuncionarioDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'O nome não pode ter mais de 255 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsString()
  @Length(11, 14, {
    message:
      'CPF deve ter entre 11 e 14 caracteres (pode conter pontos e traço)',
  })
  cpf: string;

  @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data inválida. Use o formato yyyy-mm-dd' })
  dataNascimento: Date;

  @IsNotEmpty({ message: 'Data de admissão é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data inválida. Use o formato yyyy-mm-dd' })
  dataAdmissao: Date;

  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  @IsPhoneNumber('BR', { message: 'Número de telefone inválido' })
  telefone: string;

  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  @IsString()
  @MinLength(5, { message: 'Endereço muito curto' })
  endereco: string;

  @IsNotEmpty({ message: 'Cidade é obrigatória' })
  @IsString()
  @MinLength(2)
  cidade: string;

  @IsNotEmpty({ message: 'Estado é obrigatório' })
  @IsString()
  @Length(2, 2, { message: 'Informe a sigla do estado (ex: PE, SP, RJ)' })
  estado: string;

  @IsNotEmpty({ message: 'CEP é obrigatório' })
  @Matches(/^\d{5}-?\d{3}$/, {
    message: 'CEP inválido. Use o formato 00000-000',
  })
  cep: string;

  @IsNotEmpty({ message: 'Salário base é obrigatório' })
  @Type(() => Number)
  @IsNumber({}, { message: 'O salário deve ser um número' })
  salarioBase: number;

  @IsEnum(StatusFuncionario, { message: 'Status inválido' })
  status?: StatusFuncionario;
}
