import { ShortNumberPipe } from './short-number.pipe';

describe('ShortNumberPipe', () => {
  it('should transform 10000 to 10K', () => {
    const pipe = new ShortNumberPipe();
    expect(pipe.transform('10000')).toBe('10K');
  });
  it('should transform 2000000 to 2M', () => {
    const pipe = new ShortNumberPipe();
    expect(pipe.transform('2000000')).toBe('2M');
  });
  it('should transform 30000001234 to 30B', () => {
    const pipe = new ShortNumberPipe();
    expect(pipe.transform('30000001234')).toBe('30B');
  });
});
