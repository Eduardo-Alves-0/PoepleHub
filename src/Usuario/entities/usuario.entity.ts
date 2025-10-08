import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Este enum define os papéis possíveis de um usuário
export enum PapelUsuario {
  ADMIN = 'ADMIN',
  RH = 'RH',
  FUNCIONARIO = 'FUNCIONARIO',
}

@Entity({ name: 'tb_usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  senha: string;

  /**
   * Papel do usuário no sistema
   * Por padrão é FUNCIONARIO
   */
  @Column({
    type: 'enum',
    enum: PapelUsuario,
    default: PapelUsuario.FUNCIONARIO,
    nullable: false,
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
