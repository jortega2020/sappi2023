import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Row, Col } from 'antd';
import basicStyle from '@iso/assets/styles/constants';

const Doughnut = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Doughnut/Doughnut')
);
const DynamicDoughnut = dynamic(() =>
  import(
    '@iso/containers/Charts/ReactChart2/Components/DynamicDoughnut/DynamicDoughnut'
  )
);
const Pie = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Pie/Pie')
);
const Line = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Line/Line')
);
const Bar = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Bar/Bar')
);
const HorizontalBar = dynamic(() =>
  import(
    '@iso/containers/Charts/ReactChart2/Components/HorizontalBar/HorizontalBar'
  )
);
const Radar = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Radar/Radar')
);
const Polar = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Polar/Polar')
);
const Bubble = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Bubble/Bubble')
);
const MixedData = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Mix/Mix')
);
const RandomizedDataLine = dynamic(() =>
  import(
    '@iso/containers/Charts/ReactChart2/Components/RandomizedLine/RandomizedLine'
  )
);
const PageHeader = dynamic(() => import('@iso/components/utility/pageHeader'));
const Box = dynamic(() => import('@iso/components/utility/box'));
const LayoutWrapper = dynamic(() =>
  import('@iso/components/utility/layoutWrapper')
);
const ContentHolder = dynamic(() =>
  import('@iso/components/utility/contentHolder')
);
// import ReactChart2 from '@iso/containers/Charts/ReactChart2/ReactChart2';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>React Chart2</title>
    </Head>
    <DashboardLayout>
      <ReactChart2 />
    </DashboardLayout>
  </>
));

function ReactChart2() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper className="isoMapPage">
      <PageHeader>Demo Graficas 3</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Doughnut">
            <ContentHolder>
              <Doughnut />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Dynamicly refreshed Doughnut">
            <ContentHolder>
              <DynamicDoughnut />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Pie">
            <ContentHolder>
              <Pie />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Line">
            <ContentHolder>
              <Line />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Bar (custom size)">
            <ContentHolder>
              <Bar />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Horizontal Bar Example">
            <ContentHolder>
              <HorizontalBar />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Radar">
            <ContentHolder>
              <Radar />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Polar">
            <ContentHolder>
              <Polar />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Bubble">
            <ContentHolder>
              <Bubble />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Mixed Data">
            <ContentHolder>
              <MixedData />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title="Random Animated">
            <ContentHolder>
              <RandomizedDataLine />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
