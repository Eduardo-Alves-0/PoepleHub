import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cargo } from '../../cargo/entities/cargo.entity';
import { Departamento } from '../../departamento/entities/departamento.entity';
import { Ferias } from '../../ferias/entities/ferias.entity';
import { FolhaPagamento } from '../../folhaPagamento/entities/folhaPagamento.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

export enum StatusFuncionario {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO',
  FERIAS = 'FERIAS',
  AFASTADO = 'AFASTADO',
}

@Entity({ name: 'tb_funcionario' })
export class Funcionario {
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

  @OneToOne(() => Usuario, (usuario) => usuario.funcionario)
  usuario: Usuario;

  @OneToMany(() => Departamento, (departamento) => departamento.funcionario)
  departamento: Departamento;

  @ManyToOne(() => Cargo, (cargo) => cargo.funcionario)
  cargo: Cargo;

  @OneToMany(
    () => FolhaPagamento,
    (folhaPagamento) => folhaPagamento.funcionario,
  )
  folhaPagamento: FolhaPagamento;

  @OneToMany(() => Ferias, (ferias) => ferias.funcionario)
  ferias: Ferias;
}
