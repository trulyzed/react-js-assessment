import React, { Component } from 'react';
import { addClass } from '~/utils/app';

export class CTAButton extends Component {
  render () {
    const { text, ctaDark, outline, onClick, disabled } = this.props;

    return (
      <div className={addClass(['cta-button', outline && 'cta-button--outline', disabled && 'cta-button--disabled'])} onClick={onClick}>
        <span className={addClass(['cta-button__text', ctaDark && 'cta-button__text--dark'])}>{text}</span>
      </div>
    )
  }
}