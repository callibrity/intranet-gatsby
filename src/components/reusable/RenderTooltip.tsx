import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayInjectedProps } from 'react-bootstrap/Overlay';

const RenderTooltip = (props: OverlayInjectedProps, updatedAt: string) => (
  <Tooltip id="tooltip" {...props}>
    {updatedAt}
  </Tooltip>
);

export default RenderTooltip