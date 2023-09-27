import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import * as configs from './config';
import GoogleChart from 'react-google-charts';
import ButtonExportToPDF from '../../ExportToPDF/ExportToPDF';

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
              <div id='test-char2'>
                <GoogleChart {...configs.ProgramaAcademicoDonutChart} />
              </div>
                <ButtonExportToPDF
                  container='test-char2'
                  fileName={configs.NivelAcademicoBarChart.title}
                >
                </ButtonExportToPDF>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
    );
  }
}
export { GoogleChart };
