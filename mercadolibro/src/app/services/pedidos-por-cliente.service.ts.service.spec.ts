import { TestBed } from '@angular/core/testing';

import { PedidosPorClienteServiceTsService } from './pedidos-por-cliente.service.ts.service';

describe('PedidosPorClienteServiceTsService', () => {
  let service: PedidosPorClienteServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosPorClienteServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
