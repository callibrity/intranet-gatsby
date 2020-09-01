import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MetricsCard from './MetricsCard';
import { mockMetricsCardProps } from '@globals/testConstants';

describe('MetricsCard component', () => {
  it('should display the title', () => {
    render(<MetricsCard {...mockMetricsCardProps} />);

    const expectedTitle = mockMetricsCardProps.title;

    expect(screen.queryByText(expectedTitle)).toBeInstanceOf(HTMLElement);
  });

  it('should display each of the metrics', () => {
    render(<MetricsCard {...mockMetricsCardProps} />);

    const metricsList = mockMetricsCardProps.metrics.map(({ label }) => screen.queryByText(`${label}:`));

    metricsList.forEach(metric => expect(metric).toBeInstanceOf(HTMLElement));
  })

  it('should not display the tooltip by default', () => {
    render(<MetricsCard {...mockMetricsCardProps} />);

    expect(screen.queryByText(mockMetricsCardProps.updatedAt)).toBeNull();
  })

  it('should display the tooltip on mouse over, then hide on mouse out', async () => {
    render(<MetricsCard {...mockMetricsCardProps} />);

    const card = screen.queryByText(mockMetricsCardProps.title);
    fireEvent.mouseEnter(card);

    await waitFor(() => {
      expect(screen.getByText(mockMetricsCardProps.updatedAt)).toBeInstanceOf(HTMLElement);
    })

    fireEvent.mouseLeave(card);

    await waitFor(() => {
      expect(screen.queryByText(mockMetricsCardProps.updatedAt)).toBeNull();
    })
  })
});
