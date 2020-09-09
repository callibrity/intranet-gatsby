import React from 'react';
import styled from 'styled-components';
import {
  Col, Row, Card, OverlayTrigger,
} from 'react-bootstrap';
import { shadows } from '@material-ui/system';
import LineItem from './LineItem';
import RenderTooltip from '../reusable/RenderTooltip';

interface PropTypes {
  metrics: { label: string, value: string | number }[],
  updatedAt: string,
  title: string
}

const MetricsCard = ({ metrics, updatedAt, title }: PropTypes) => {
  const metricsElements = metrics.map(({ label, value }) => <LineItem label={label} value={value} />);
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => RenderTooltip(props, updatedAt)}
    >
      <StyledCard className="border-0">
        <span>
          <Row>
            <Col xs={12} gutters={1}>
              <h2 style={{ marginLeft: '24px', marginTop: '16px' }}>{title}</h2>
            </Col>
          </Row>
          <Row sm={1} md={2} lg={1} xl={1} className="justify-content-md-center mt-2">
            {metricsElements}
          </Row>
        </span>

      </StyledCard>
    </OverlayTrigger>
  );
};

export default MetricsCard;

const StyledCard = styled(Card)`
padding-left: 4px;
padding-right: 4px;
height: 100%;
`;
