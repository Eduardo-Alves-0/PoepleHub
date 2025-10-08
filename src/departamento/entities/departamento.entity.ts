import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_departamento' })
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  @Column({
    type: 'int',
    unique: true,
    generated: 'increment',
    nullable: false,
  })
  codigo: number;

  @Column({ nullable: false })
  dataCriacao: Date;
}
