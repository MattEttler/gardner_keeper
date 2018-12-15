import { PepNoPepModule } from './pep-no-pep.module';

describe('PepNoPepModule', () => {
  let pepNoPepModule: PepNoPepModule;

  beforeEach(() => {
    pepNoPepModule = new PepNoPepModule();
  });

  it('should create an instance', () => {
    expect(pepNoPepModule).toBeTruthy();
  });
});
