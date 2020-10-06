import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import LineItem from './LineItem';
import RenderTooltip from '../reusable/RenderTooltip';

interface PropTypes {
  metrics: { label: string, value: string | number }[],
  updatedAt: string,
  title: string
}

const MetricsCard = ({ metrics, updatedAt, title }: PropTypes) => {
  const metricsElements = metrics.map(({ label, value }) => <LineItem label={label} value={value} key={label + value} />);
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
              <h3 style={{ marginLeft: '8px', marginTop: '16px' }}>{title}</h3>
            </Col>
          </Row>
          <Row xs={1} sm={1} md={1} lg={1} xl={1} className="justify-content-md-center mt-2">
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
