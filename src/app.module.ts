import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './Usuario/controllers/usuario.controller';
import { UsuarioService } from './Usuario/services/usuario.service';
import { FeriasController } from './ferias/controllers/ferias.controller';
import { FeriasService } from './ferias/services/ferias.service';
import { FuncionarioController } from './funcionario/controllers/funcionario.controller';
import { FuncionarioService } from './funcionario/services/funcionario.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '1234',
      database: 'db_peopleHub',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [UsuarioController, FeriasController, FuncionarioController],
  providers: [UsuarioService, FeriasService, FuncionarioService],
})
export class AppModule {}
