import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { SimpleBarChart } from './Charts';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import Box from '@iso/components/utility/box';
import * as configs from './config';

export default class ReCharts extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Box title={configs.BecasSimpleBarChart.title}>
            <ContentHolder>
              <SimpleBarChart {...configs.BecasSimpleBarChart} />
            </ContentHolder>
          </Box>
        </Row>
    );
  }
}
