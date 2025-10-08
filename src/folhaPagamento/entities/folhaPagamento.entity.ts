import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

export enum StatusFolha {
  PENDENTE = 'PENDENTE',
  PROCESSADO = 'PROCESSADO',
  PAGO = 'PAGO',
}

@Entity({ name: 'tb_folha_pagamento' })
export class FolhaPagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  mesReferencia: number;

  @Column({ nullable: false })
  anoReferencia: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salarioBruto: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  descontos: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  beneficios: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salarioLiquido: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  dataProcessamento: Date;

  @Column({ type: 'timestamp', nullable: true })
  dataPagamento: Date;

  @Column({
    type: 'enum',
    enum: StatusFolha,
    default: StatusFolha.PENDENTE,
    nullable: false,
  })
  status: StatusFolha;
  @ManyToOne(() => Funcionario, (funcionario) => funcionario.folhaPagamento)
  funcionario: Funcionario;
}
