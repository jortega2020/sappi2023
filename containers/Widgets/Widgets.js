import React from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import IsoWidgetsWrapper from './WidgetsWrapper';
import IsoWidgetBox from './WidgetBox';
import CardWidget from './Card/CardWidget';
import SingleProgressWidget from './Progress/ProgressSingle';
import ReportsWidget from './Report/ReportWidget';
import { isServer } from '@iso/lib/helpers/isServer';
import {
  TableViews,
  tableinfos,
  dataList,
} from '../Tables/AntTables/AntTables';
import * as rechartConfigs from '../Charts/Recharts/config';
import StackedAreaChart from '../Charts/Recharts/Charts/StackedAreaChart';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
  CardWidgetNewMsgIcon,
  CardWidgetAchievementIcon,
  CardWidgetProjectApprovedIcon,
} from '@iso/config/icon.config';

const tableDataList = clone(dataList);
tableDataList.size = 4;
const styles = {
  wisgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
};
const SIGNLE_PROGRESS_WIDGET = [
  {
    label: 'widget.singleprogresswidget1.label',
    percent: 40,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget2.label',
    percent: 20,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget3.label',
    percent: 10,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget4.label',
    percent: 30,
    barHeight: 7,
    status: 'active',
    info: true,
  },
];


const CARD_WIDGET = [
  {
    icon: <CardWidgetNewMsgIcon size={36} color="#42A5F5" />,
    number: 'widget.cardwidget1.number',
    text: 'widget.cardwidget1.text',
  },
  {
    icon: <CardWidgetProjectApprovedIcon size={36} color="#F75D81" />,
    number: 'widget.cardwidget2.number',
    text: 'widget.cardwidget2.text',
  },
  {
    icon: <CardWidgetAchievementIcon size={36} color="#FEAC01" />,
    number: 'widget.cardwidget3.number',
    text: 'widget.cardwidget3.text',
  },
];

export default function Widgets() {
  const { rowStyle, colStyle } = basicStyle;

  const chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {},
    },
  ];

  const stackConfig = {
    ...rechartConfigs.StackedAreaChart,
    width: !isServer && window.innerWidth < 450 ? 300 : 500,
  };
  return (
    <LayoutWrapper>
      <div style={styles.wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={8} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Report Widget */}
              <ReportsWidget
                label={<IntlMessages id="widget.reportswidget.label" />}
                details={<IntlMessages id="widget.reportswidget.details" />}
              >
                {SIGNLE_PROGRESS_WIDGET.map((widget, idx) => (
                  <SingleProgressWidget
                    key={idx}
                    label={<IntlMessages id={widget.label} />}
                    percent={widget.percent}
                    barHeight={widget.barHeight}
                    status={widget.status}
                    info={widget.info} // Boolean: true, false
                  />
                ))}
              </ReportsWidget>
            </IsoWidgetsWrapper>
          </Col>

          <Col lg={16} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <h3>Ultimos Projectos</h3>
                {/* TABLE */}
                <TableViews.SimpleView
                  tableInfo={tableinfos[0]}
                  dataList={tableDataList}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
            {CARD_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>

          <Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={420} style={{ overflow: 'hidden' }}>
                <StackedAreaChart {...stackConfig} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
      </div>
    </LayoutWrapper>
  );
}
