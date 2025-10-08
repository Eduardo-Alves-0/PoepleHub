import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum StatusFuncionario {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  FERIAS = 'FERIAS',
  AFASTADO = 'AFASTADO',
}

@Entity({ name: 'tb_funcionario' })
export class funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: false })
  dataNascimento: Date;

  @Column({ nullable: false })
  dataAdmissao;

  @Column({ nullable: false })
  telefone: string;

  @Column({ nullable: false })
  endereco: string;

  @Column({ nullable: false })
  cidade: string;

  @Column({ nullable: false })
  estado: string;

  @Column({ nullable: false })
  cep: number;

  @Column({ nullable: false })
  salarioBase: number;

  @Column({
    type: 'enum',
    enum: StatusFuncionario,
    default: StatusFuncionario.ATIVO,
    nullable: false,
  })
  status: StatusFuncionario;

  estaAtivo(): boolean {
    return this.status === StatusFuncionario.ATIVO;
  }

  estaInativo(): boolean {
    return this.status === StatusFuncionario.INATIVO;
  }

  estaDeFerias(): boolean {
    return this.status === StatusFuncionario.FERIAS;
  }

  estaAfastado(): boolean {
    return this.status === StatusFuncionario.AFASTADO;
  }
}
