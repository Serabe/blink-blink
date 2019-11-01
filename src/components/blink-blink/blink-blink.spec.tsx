import { newSpecPage } from '@stencil/core/testing';
import { BlinkBlink } from './blink-blink';

describe('blink-blink', () => {
  it('builds', () => {
    expect(new BlinkBlink()).toBeTruthy();
  });

  describe('rendering', () => {
    it('works with the slot', async () => {
      const page = await newSpecPage({
        components: [BlinkBlink],
        html: '<blink-blink>not</blink-blink>'
      });

      let content = page.doc.querySelector('blink-blink').textContent.trim();

      expect(content).toEqual('not');
    });
  });
});
