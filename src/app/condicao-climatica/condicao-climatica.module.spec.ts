import { CondicaoClimaticaModule } from './condicao-climatica.module';

describe('CondicaoClimaticaModule', () => {
  let condicaoClimaticaModule: CondicaoClimaticaModule;

  beforeEach(() => {
    condicaoClimaticaModule = new CondicaoClimaticaModule();
  });

  it('should create an instance', () => {
    expect(condicaoClimaticaModule).toBeTruthy();
  });
});
