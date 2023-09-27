import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import DemoChart from '@iso/containers/Charts/GoogleChart/DemoChart';
//import DemoReChart2 from '@iso/containers/Charts/Recharts/DemoReChart';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
import basicStyle from '@iso/assets/styles/constants';
import ButtonExportToPDF from '../../containers/ExportToPDF/ExportToPDF';


const Bar = dynamic(() =>
  import('@iso/containers/Charts/ReactChart2/Components/Bar/BarProject')
);

const { rowStyle, gutter } = basicStyle;

export default withAuthSync(() => (
  <>
    <Head>
      <title>Demo</title>
    </Head>
    <DashboardLayout>
    <LayoutWrapper className="isoMapPage">
        <PageHeader>Demo Graficos 1</PageHeader>
        <DemoChart />
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Box title="Becas por adscripcion del proyecto">
              <ContentHolder>
                <div id="grafica-1">
                  <Bar />
                </div>
                
                <ButtonExportToPDF
                  container='grafica-1'
                  position='l'
                  paperSize='a2'
                  fileName='Becas por adscripcion del proyecto'
                >
                </ButtonExportToPDF>
              </ContentHolder>
          </Box>
        </Row>
      </LayoutWrapper>
    </DashboardLayout>
  </>
));
