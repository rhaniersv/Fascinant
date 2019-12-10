import {Pessoa} from './pessoa.model';
import {FormaPagamento} from './pagamento.model';
import {Pedido} from './pedido.model';

export class ItensPedido {
  cliente: Pessoa;
  pedido: Pedido;
  formaPgto: FormaPagamento;
  qtde: number;
  valorUnit: number;
  subTotal: number;
}
