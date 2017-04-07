import { UncamelizePipe } from './uncamelize.pipe';

describe('UncamelizePipe', () => {
  it('create an instance', () => {
    const pipe = new UncamelizePipe();
    expect(pipe).toBeTruthy();
  });
});
