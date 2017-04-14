import { SexShortPipe } from './sex-short.pipe';

describe('GenderShort', () => {
  it('create an instance', () => {
    const pipe = new SexShortPipe();
    expect(pipe).toBeTruthy();
  });
});
