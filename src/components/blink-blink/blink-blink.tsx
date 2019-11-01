import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'blink-blink',
  shadow: true,
})
export class BlinkBlink {
  @Prop() interval = 1000;
  @State() showing = true;
  timeoutId: number;

  render() {
    return (
      <Host style={this.showing ? { visibility: 'hidden' } : {}}>
        <slot />
      </Host>
    )
  }

  blink() {
    this.timeoutId = window.setTimeout(() => {
      this.showing = !this.showing;
      this.blink();
    }, this.interval);
  }

  componentDidLoad() {
    this.blink();
  }

  componentDidUnload() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
  }
}
