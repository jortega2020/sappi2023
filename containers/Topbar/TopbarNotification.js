import React from 'react';
import { Popover } from 'antd';
import { useSelector } from 'react-redux';
import TopbarDropdownWrapper from './TopbarDropdown.styles';
import { TopbarNotifyIcon } from '@iso/config/icon.config';

const demoNotifications = [
  {
    id: 1,
    name: 'Proyecto Investigacion 1',
    notification:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
  },
  {
    id: 2,
    name: 'Revision pendiente',
    notification:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
  },
  {
    id: 3,
    name: 'Aprobar presupuesto',
    notification:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
  }
];

export default function TopbarNotification() {
  const customizedTheme = useSelector(
    (state) => state.ThemeSwitcher.topbarTheme
  );
  const [visible, setVisibility] = React.useState(false);

  function handleVisibleChange() {
    setVisibility((visible) => !visible);
  }
  const content = (
    <TopbarDropdownWrapper className="topbarNotification">
      <div className="isoDropdownHeader">
        <h3>Notificaciones</h3>
      </div>
      <div className="isoDropdownBody">
        {demoNotifications.map((notification) => (
          <a className="isoDropdownListItem" key={notification.id}>
            <h5>{notification.name}</h5>
            <p>{notification.notification}</p>
          </a>
        ))}
      </div>
      <a className="isoViewAllBtn">Ver todo</a>
    </TopbarDropdownWrapper>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      open={visible}
      onOpenChange={handleVisibleChange}
      placement="bottomLeft"
    >
      <div className="isoIconWrapper">
        <TopbarNotifyIcon size={24} color={customizedTheme.textColor} />
        <span>{demoNotifications.length}</span>
      </div>
    </Popover>
  );
}
