import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RenderTooltip from './RenderTooltip';
import { OverlayTrigger } from 'react-bootstrap';

const mockUpdatedAt = 'test';
const searchForText = 'Find text';

describe('RenderTooltip component', () => {
  it('should not render by default', () => {
    render(<OverlayTrigger overlay={(props) => RenderTooltip(props, mockUpdatedAt)}><div>{searchForText}</div></OverlayTrigger>);

    expect(screen.queryByText(mockUpdatedAt)).toBeNull();
  });

  it('should render when hovered over', async() => {
    render(<OverlayTrigger overlay={(props) => RenderTooltip(props, mockUpdatedAt)}><div>{searchForText}</div></OverlayTrigger>);
    fireEvent.mouseOver(screen.getByText("Find text"));

    waitFor(() => expect(screen.getByText(mockUpdatedAt)).toBeInstanceOf(HTMLElement));
  });
});