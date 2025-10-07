# Sistema de RH - Estrutura e Documentação

## 1️⃣ Estrutura de Pastas

```
src/
├── auth/
│   ├── guards/
│   ├── strategies/
│   ├── dto/
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.spec.ts
│
├── usuario/
│   ├── entities/usuario.entity.ts
│   ├── dto/
│   ├── usuario.service.ts
│   ├── usuario.controller.ts
│   ├── usuario.module.ts
│   └── usuario.service.spec.ts
│
├── funcionario/
│   ├── entities/funcionario.entity.ts
│   ├── dto/
│   ├── funcionario.service.ts
│   ├── funcionario.controller.ts
│   ├── funcionario.module.ts
│   └── funcionario.service.spec.ts
│
├── departamento/
│   ├── entities/departamento.entity.ts
│   ├── dto/
│   ├── departamento.service.ts
│   ├── departamento.controller.ts
│   ├── departamento.module.ts
│   └── departamento.service.spec.ts
│
├── cargo/
│   ├── entities/cargo.entity.ts
│   ├── dto/
│   ├── cargo.service.ts
│   ├── cargo.controller.ts
│   ├── cargo.module.ts
│   └── cargo.service.spec.ts
│
├── folha-pagamento/
│   ├── entities/folha-pagamento.entity.ts
│   ├── dto/
│   ├── folha-pagamento.service.ts
│   ├── folha-pagamento.controller.ts
│   ├── folha-pagamento.module.ts
│   └── folha-pagamento.service.spec.ts
│
├── ferias/
│   ├── entities/ferias.entity.ts
│   ├── dto/
│   ├── ferias.service.ts
│   ├── ferias.controller.ts
│   ├── ferias.module.ts
│   └── ferias.service.spec.ts
│
├── common/
│   ├── decorators/
│   ├── pipes/
│   ├── filters/
│   └── enums/
│
├── config/
│   ├── database.config.ts
│   └── jwt.config.ts
│
├── app.module.ts
└── main.ts
```

---

## 2️⃣ Entidades e Relacionamentos

### Usuário

**Campos:**

- id
- email (único)
- senha (hash)
- papel (ADMIN, RH, FUNCIONARIO)
- ativo
- dataCriacao
- dataAtualizacao

**Relacionamento:**

- 1:1 com Funcionario

---

### Funcionário

**Campos:**

- id
- nome
- cpf (único)
- dataNascimento
- dataAdmissao
- dataDemissao (nullable)
- telefone
- endereco
- cidade
- estado
- cep
- salarioBase
- status (ATIVO, INATIVO, FERIAS, AFASTADO)

**Relacionamentos:**

- departamento (ManyToOne)
- cargo (ManyToOne)
- usuario (OneToOne)
- folhasPagamento (OneToMany)
- ferias (OneToMany)

---

### Departamento

**Campos:**

- id
- nome
- descricao
- codigo (único)
- dataCriacao

**Relacionamento:**

- funcionarios (OneToMany)

---

### Cargo

**Campos:**

- id
- titulo
- descricao
- nivel (JUNIOR, PLENO, SENIOR, COORDENADOR, GERENTE, DIRETOR)
- salarioMinimo
- salarioMaximo
- dataCriacao

**Relacionamento:**

- funcionarios (OneToMany)

---

### Folha de Pagamento

**Campos:**

- id
- mesReferencia
- anoReferencia
- salarioBruto
- descontos
- beneficios
- salarioLiquido
- dataProcessamento
- dataPagamento
- status (PENDENTE, PROCESSADO, PAGO)

**Relacionamento:**

- funcionario (ManyToOne)

---

### Férias

**Campos:**

- id
- dataInicio
- dataFim
- diasCorridos
- periodoAquisitivo
- status (SOLICITADO, APROVADO, RECUSADO, EM_ANDAMENTO, CONCLUIDO)
- observacoes
- motivoRecusa (nullable)
- dataSolicitacao
- dataAprovacao

**Relacionamento:**

- funcionario (ManyToOne)

---

## 3️⃣ Services e Métodos

### AuthService

- `login(dto)`
- `register(dto)`
- `validateUser(email, senha)`
- `generateJwtToken(usuario)`
- `hashPassword(senha)`
- `comparePasswords(senhaPlana, senhaHash)`

---

### UsuarioService

**CRUD:**

- `create(dto)`
- `findAll()`
- `findOne(id)`
- `findByEmail(email)`
- `update(id, dto)`
- `remove(id)`

**Senha:**

- `changePassword(id, senhaAtual, novaSenha)`

**Desativação:**

- `deactivateUser(id)`

---

### FuncionarioService

**CRUD:**

- `create(dto)`
- `findAll(filtros)`
- `findOne(id)`
- `findByCpf(cpf)`
- `update(id, dto)`
- `remove(id)`

**Outros:**

- `demitir(id, dataDemissao)`
- `calcularTempoEmpresa(id)`
- `listarAtivos()`
- `listarPorDepartamento(departamentoId)`

---

### DepartamentoService

**CRUD:**

- `create(dto)`
- `findAll()`
- `findOne(id)`
- `findByCodigo(codigo)`
- `update(id, dto)`
- `remove(id)`

**Relacionados:**

- `countFuncionarios(id)`
- `listarFuncionarios(id)`

---

### CargoService

**CRUD:**

- `create(dto)`
- `findAll()`
- `findOne(id)`
- `findByTitulo(titulo)`
- `update(id, dto)`
- `remove(id)`

**Relacionados:**

- `listarPorNivel(nivel)`
- `countFuncionarios(id)`

---

### FolhaPagamentoService

**CRUD:**

- `create(dto)`
- `findAll(filtros)`
- `findOne(id)`
- `update(id, dto)`
- `remove(id)`

**Processamento:**

- `processarFolha(funcionarioId, mes, ano)`
- `calcularSalarioLiquido(salarioBruto, descontos, beneficios)`
- `marcarComoPago(id, dataPagamento)`
- `gerarRelatorioMensal(mes, ano)`
- `buscarPorFuncionario(funcionarioId)`

---

### FeriasService

**CRUD:**

- `create(dto)`
- `findAll(filtros)`
- `findOne(id)`
- `update(id, dto)`
- `remove(id)`

**Controle:**

- `aprovarFerias(id)`
- `recusarFerias(id, motivo)`
- `iniciarFerias(id)`
- `concluirFerias(id)`

**Cálculos:**

- `calcularDiasDisponiveis(funcionarioId)`
- `verificarDisponibilidadePeriodo(funcionarioId, dataInicio, dataFim)`

---

## 4️⃣ Controllers e Endpoints

### AuthController `/auth`

- `POST /login` → público
- `POST /register` → público
- `GET /profile` → autenticado

---

### UsuarioController `/usuarios`

**CRUD e ações:**

- `POST /`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Senha e desativação:**

- `PATCH /:id/change-password`
- `PATCH /:id/deactivate`

---

### FuncionarioController `/funcionarios`

**CRUD e ações:**

- `POST /`
- `GET /`
- `GET /ativos`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Outros:**

- `GET /:id/tempo-empresa`
- `PATCH /:id/demitir`

---

### DepartamentoController `/departamentos`

**CRUD:**

- `POST /`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Listagem:**

- `GET /:id/funcionarios`

---

### CargoController `/cargos`

**CRUD:**

- `POST /`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Listagem por nível:**

- `GET /nivel/:nivel`

---

### FolhaPagamentoController `/folha-pagamento`

**CRUD:**

- `POST /`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Processamento e relatórios:**

- `POST /processar`
- `PATCH /:id/pagar`
- `GET /relatorio/:mes/:ano`
- `GET /funcionario/:funcionarioId`

---

### FeriasController `/ferias`

**CRUD:**

- `POST /`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

**Aprovação/recusa:**

- `PATCH /:id/aprovar`
- `PATCH /:id/recusar`

**Controle de período:**

- `PATCH /:id/iniciar`
- `PATCH /:id/concluir`
- `GET /funcionario/:funcionarioId/dias-disponiveis`

---

## 5️⃣ Módulos e Dependências

### AppModule

Importa TypeOrmModule, ConfigModule e todos os módulos de feature.

### AuthModule

- Providers: AuthService, JwtStrategy
- Controllers: AuthController
- Imports: UsuarioModule, JwtModule, PassportModule
- Exports: AuthService

### UsuarioModule

- Imports: TypeOrmModule.forFeature([Usuario])
- Providers: UsuarioService
- Controllers: UsuarioController
- Exports: UsuarioService

### FuncionarioModule

- Imports: TypeOrmModule.forFeature([Funcionario]), DepartamentoModule, CargoModule
- Providers: FuncionarioService
- Controllers: FuncionarioController
- Exports: FuncionarioService

### DepartamentoModule

- Imports: TypeOrmModule.forFeature([Departamento])
- Providers: DepartamentoService
- Controllers: DepartamentoController
- Exports: DepartamentoService

### CargoModule

- Imports: TypeOrmModule.forFeature([Cargo])
- Providers: CargoService
- Controllers: CargoController
- Exports: CargoService

### FolhaPagamentoModule

- Imports: TypeOrmModule.forFeature([FolhaPagamento]), FuncionarioModule
- Providers: FolhaPagamentoService
- Controllers: FolhaPagamentoController

### FeriasModule

- Imports: TypeOrmModule.forFeature([Ferias]), FuncionarioModule
- Providers: FeriasService
- Controllers: FeriasController

---

## 6️⃣ Testes (Services)

### Estrutura

`describe` → `beforeEach` → `afterEach`

### Testes obrigatórios

- CRUD (create, findAll, findOne, update, remove)
- Métodos específicos de cada service
- Casos de erro (not found, validações)
- Relacionamentos entre entidades

### Exemplos

**AuthService:**

- deve fazer login válido
- deve lançar erro em login inválido
- deve registrar usuário
- deve fazer hash de senha
- deve gerar token JWT

**FuncionarioService:**

- deve criar funcionário
- deve lançar erro em CPF duplicado
- deve calcular tempo de empresa
- deve demitir funcionário
- deve listar apenas ativos

---

## 7️⃣ Segurança

### Autenticação

**Hash de senha:**

- Bcrypt com salt rounds 10

**JWT:**

- Tokens com expiração configurável

**Guardas:**

- JwtAuthGuard para proteger rotas

**Estratégia:**

- Passport com estratégia JWT

---

### Autorização

**Enum Papel:**

- ADMIN
- RH
- FUNCIONARIO

**Guards:**

- RolesGuard para verificar papéis

**Decorators:**

- `@Roles(...papéis)`
- `@CurrentUser()`

---

### Validação

**DTOs:**

- class-validator nos DTOs

**Pipes:**

- ValidationPipe global
- Pipes customizados quando necessário

---

### Tratamento de Erros

**Filter:**

- HttpExceptionFilter global

**Exceptions:**

- NotFoundException
- BadRequestException
- UnauthorizedException

---

### Controle de Acesso

**Público:**

- Login e registro

**ADMIN:**

- Gerencia todos os dados e relatórios

**RH:**

- Gerencia funcionários, folha, férias

**FUNCIONARIO:**

- Ver próprios dados
- Solicitar férias
- Ver folhas
- Atualizar dados básicos
