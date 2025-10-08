import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

export enum NivelCargo {
  JUNIOR = 'JUNIOR',
  PLENO = 'PLENO',
  SENIOR = 'SENIOR',
  COORDENADOR = 'COORDENADOR',
  GERENTE = 'GERENTE',
  DIRETOR = 'DIRETOR',
}

@Entity({ name: 'tb_cargo' })
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  titulo: string;

  @Column({ nullable: false })
  descricao: string;

  @Column({
    type: 'enum',
    enum: NivelCargo,
    default: NivelCargo.JUNIOR,
    nullable: false,
  })
  nivel: NivelCargo;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salarioMinimo: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salarioMaximo: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  dataCriacao: Date;

  // Métodos de verificação de nível
  ehJunior(): boolean {
    return this.nivel === NivelCargo.JUNIOR;
  }

  ehPleno(): boolean {
    return this.nivel === NivelCargo.PLENO;
  }

  ehSenior(): boolean {
    return this.nivel === NivelCargo.SENIOR;
  }

  ehCoordenador(): boolean {
    return this.nivel === NivelCargo.COORDENADOR;
  }

  ehGerente(): boolean {
    return this.nivel === NivelCargo.GERENTE;
  }

  ehDiretor(): boolean {
    return this.nivel === NivelCargo.DIRETOR;
  }

  @OneToMany(() => Funcionario, (funcionario) => funcionario.cargo)
  funcionario: Funcionario;
}
