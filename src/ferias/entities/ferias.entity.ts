import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

export enum StatusFerias {
  SOLICITADO = 'SOLICITADO',
  APROVADO = 'APROVADO',
  RECUSADO = 'RECUSADO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  CONCLUIDO = 'CONCLUIDO',
}

@Entity({ name: 'tb_ferias' })
export class Ferias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: false })
  dataInicio: Date;

  @Column({ type: 'date', nullable: false })
  dataFim: Date;

  @Column({ nullable: false })
  diasCorridos: number;

  @Column({ nullable: false })
  periodoAquisitivo: string;

  @Column({
    type: 'enum',
    enum: StatusFerias,
    default: StatusFerias.SOLICITADO,
    nullable: false,
  })
  status: StatusFerias;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @Column({ type: 'text', nullable: true })
  motivoRecusa: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataSolicitacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  dataAprovacao: Date;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.ferias)
  funcionario: Funcionario;
}
