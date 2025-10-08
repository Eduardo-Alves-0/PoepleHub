import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDepartamentoDto {
  @IsNotEmpty({ message: 'Esse campo não pode ser vazio' })
  @IsString({ message: 'Esse campo deve ser uma string' })
  @MinLength(3, { message: 'Esse campo deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'Esse campo não pode passar de 255 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'Esse campo não pode ser facil' })
  @IsString({ message: 'Esse campo deve ser uma string' })
  @MinLength(25, { message: 'Esse campo deve ter pelo menos 3 caracteres' })
  @MaxLength(2500, { message: 'Esse campo não pode passar de 255 caracteres' })
  descricao: string;

  @IsNotEmpty({ message: 'Data de criação é obrigatória' })
  dataCriacao: Date;
}
