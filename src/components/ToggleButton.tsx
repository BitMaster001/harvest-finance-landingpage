import React from 'react';
import * as s from './ToggleButton.Components'

type IToggleButton = {
  isOpened: boolean,
  setIsOpened: any
}

function ToggleButton({ isOpened, setIsOpened }: IToggleButton) {
  return (
    <s.ToggleButton onClick={() => setIsOpened(!isOpened)}>
      <s.HamburgerLine $id={1} $isOpen={isOpened} />
      <s.HamburgerLine $id={2} $isOpen={isOpened} />
      <s.HamburgerLine $id={3} $isOpen={isOpened} />
    </s.ToggleButton>
  )
}

export default ToggleButton;
