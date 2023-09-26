import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import * as configs from './config';
import GoogleChart from 'react-google-charts';
import ButtonExportToPDF from '../../ExportToPDF/ExportToPDF';
import DemoReChart from '../../ReCharts/DemoReChart';


export default class ReCharts extends Component {
  render() {
    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {},
      },
    ];
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>Demo Graficos 1</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.NivelAcademicoBarChart.title}>
              <ContentHolder>
                <div id='test-char'>
                  <GoogleChart  {...configs.NivelAcademicoBarChart} chartEvents={chartEvents} />
                </div>
                <ButtonExportToPDF
                  container='test-char'
                  fileName={configs.NivelAcademicoBarChart.title}
                >
                </ButtonExportToPDF>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.ProgramaAcademicoDonutChart.title}>
              <ContentHolder>
                <GoogleChart {...configs.ProgramaAcademicoDonutChart} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <DemoReChart />
        </Row>
      </LayoutWrapper>
    );
  }
}
export { GoogleChart };
