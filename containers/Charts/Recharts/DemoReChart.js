import React, { Component } from 'react';
import { SimpleBarChart } from './Charts';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import * as configs from './config';

export default class ReCharts extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Box title={configs.BecasSimpleBarChart.title}>
          <ContentHolder>
            <SimpleBarChart {...configs.BecasSimpleBarChart} />
          </ContentHolder>
        </Box>
    );
  }
}
