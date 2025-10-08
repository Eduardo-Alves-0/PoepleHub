import { PartialType } from '@nestjs/mapped-types';
import { CreateFolhaPagamentoDto } from './create-folha-pagamento.dto';

export class UpdateFolhaPagamentoDto extends PartialType(
  CreateFolhaPagamentoDto,
) {}
