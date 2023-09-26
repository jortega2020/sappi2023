import Head from 'next/head';
import DemoChart from '@iso/containers/Charts/GoogleChart/DemoChart';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Demo</title>
    </Head>
    <DashboardLayout>
      <DemoChart />
    </DashboardLayout>
  </>
));
