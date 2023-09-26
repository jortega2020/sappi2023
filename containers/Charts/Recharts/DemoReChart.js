import React, { Component } from 'react';
import { SimpleBarChart } from './Charts';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import * as configs from './config';

export default class ReCharts extends Component {
  render() {
    return (
        <Box title={configs.BecasSimpleBarChart.title}>
          <ContentHolder>
            <SimpleBarChart {...configs.BecasSimpleBarChart} />
          </ContentHolder>
        </Box>
    );
  }
}
