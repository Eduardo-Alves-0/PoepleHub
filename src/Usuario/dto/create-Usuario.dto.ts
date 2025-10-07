import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PapelUsuario } from '../entities/usuario.entity';

export class CreateUsuarioDto {
  /**
   * Nome do usuário
   * - Deve ser uma string
   * - Mínimo de 3 caracteres
   * - Máximo de 255 caracteres
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  @MaxLength(255, { message: 'O nome não pode ter mais de 255 caracteres' })
  nome: string;

  /**
   * Email do usuário
   * - Deve ser uma string válida
   * - Máximo de 255 caracteres
   * - Regex opcional para reforçar formato de email
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @IsEmail()
  @IsString({ message: 'O email deve ser uma string' })
  @MaxLength(255, { message: 'O email não pode ter mais de 255 caracteres' })
  @Matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'O email deve ser válido',
  })
  email: string;

  /**
   * Senha do usuário
   * - Deve ser forte
   * - Mínimo de 8 caracteres
   * - Pelo menos 1 letra maiúscula
   * - Pelo menos 1 letra minúscula
   * - Pelo menos 1 número
   * - Pelo menos 1 símbolo especial
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'A senha deve ter no mínimo 8 caracteres, incluindo pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo especial.',
    },
  )
  senha: string;

  /**
   * Papel do usuário
   * - Define o tipo/permissão do usuário no sistema
   * - Valores possíveis: ADMIN, RH, FUNCIONARIO
   * - Validação via enum para garantir que o valor enviado seja válido
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @IsEnum(PapelUsuario, {
    message: 'O papel deve ser ADMIN, RH ou FUNCIONARIO',
  })
  papel?: PapelUsuario;

  /**
   * Campo ativo
   * - Indica se o usuário está ativo ou inativo
   * - Recebe um boolean (true ou false)
   * - Usa @Type(() => Boolean) para transformar valores recebidos via JSON
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Type(() => Boolean)
  @IsBoolean({ message: 'O campo ativo deve ser verdadeiro ou falso' })
  ativo: boolean;

  /**
   * Data de admissão do usuário
   * - Deve ser uma data válida
   * - Recebe um objeto Date
   * - Usa @Type(() => Date) para transformar strings em Date
   * - Formato esperado: yyyy/mm/dd
   */
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Type(() => Date)
  @IsDate({ message: 'Data inválida, padrão: yyyy/mm/dd' })
  dataAdimicao: Date;
}
