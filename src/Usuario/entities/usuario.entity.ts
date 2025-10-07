import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Este enum define os papéis possíveis de um usuário
export enum PapelUsuario {
  ADMIN = 'ADMIN',
  RH = 'RH',
  FUNCIONARIO = 'FUNCIONARIO',
}

@Entity('tb_usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  senha: string;

  /**
   * Papel do usuário no sistema
   * Por padrão é FUNCIONARIO
   */
  @Column({
    type: 'enum',
    enum: PapelUsuario,
    default: PapelUsuario.FUNCIONARIO,
  })
  papel: PapelUsuario;

  //Verifica se o usuário é ADMIN
  ehAdmin(): boolean {
    return this.papel === PapelUsuario.ADMIN;
  }

  // Verifica se o usuário é RH
  ehRh(): boolean {
    return this.papel === PapelUsuario.RH;
  }

  @Column()
  ativo: boolean;

  @Column()
  dataAdimicao: Date;
}
