import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum StatusFuncionario {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  FERIAS = 'FERIAS',
  AFASTADO = 'AFASTADO',
}

@Entity('tb_funcionario')
export class funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  dataNascimento: Date;

  @Column()
  dataAdmissao;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: number;

  @Column()
  salarioBase: number;

  @Column({
    type: 'enum',
    enum: StatusFuncionario,
    default: StatusFuncionario.ATIVO,
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
