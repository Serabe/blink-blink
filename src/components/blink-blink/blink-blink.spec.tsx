import { TestWindow } from '@stencil/core/testing';
import { BlinkBlink } from './blink-blink';

describe('blink-blink', () => {
  it('builds', () => {
    expect(new BlinkBlink()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow;
    beforeEach(async () => {
      testWindow = await new TestWindow();
      await testWindow.load({
        components: [BlinkBlink],
        html: 'Schrodinger\'s cat is <blink-blink>not</blink-blink>'
      });
    });

    it('works with the slot', () => {
      let content = testWindow.document.querySelector('blink-blink').textContent.trim();
      expect(content).toEqual('not');
    });
  });
});
