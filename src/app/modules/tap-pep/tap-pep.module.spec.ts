import { TapPepModule } from './tap-pep.module';

describe('TapPepModule', () => {
  let tapPepModule: TapPepModule;

  beforeEach(() => {
    tapPepModule = new TapPepModule();
  });

  it('should create an instance', () => {
    expect(tapPepModule).toBeTruthy();
  });
});
