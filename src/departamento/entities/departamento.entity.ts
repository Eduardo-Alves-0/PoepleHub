import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

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

  @OneToMany(() => Funcionario, (funcionario) => funcionario.departamento)
  funcionario: Funcionario;
}
