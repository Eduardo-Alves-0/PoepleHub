import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { NivelCargo } from '../entities/cargo.entity';

export class CreateCargoDto {
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @IsString({ message: 'O título deve ser uma string' })
  @MinLength(3, { message: 'O título deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'O título não pode passar de 255 caracteres' })
  titulo: string;

  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString({ message: 'A descrição deve ser uma string' })
  descricao: string;

  @IsEnum(NivelCargo, { message: 'Nível inválido' })
  nivel: NivelCargo;

  @IsNotEmpty({ message: 'Salário mínimo é obrigatório' })
  @IsNumber({}, { message: 'Salário mínimo deve ser um número' })
  salarioMinimo: number;

  @IsNotEmpty({ message: 'Salário máximo é obrigatório' })
  @IsNumber({}, { message: 'Salário máximo deve ser um número' })
  salarioMaximo: number;
}
