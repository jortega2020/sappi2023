import {
	SidebarNotesIcon,
	SidebarChartsIcon,
	SidebarHomeIcon,
	SettingIcon,
	ProjectsIcon
} from '@iso/config/icon.config';

export default [
	{
		key: '',
		label: 'sidebar.inicio',
		leftIcon: <SidebarHomeIcon size={19} />,
	},
	{
		key: 'proyectos',
		label: 'sidebar.project',
		leftIcon: <ProjectsIcon size={19} />,
		children: [
			{
				key: '',
				label: 'sidebar.dashboardProject',
			},
			{
				key: '',
				label: 'sidebar.addProject',
			},
			{
				key: '',
				label: 'sidebar.aproveProject',
			},
		],
	},
	{
		key: 'Reportes',
		label: 'sidebar.reports',
		leftIcon: <SidebarNotesIcon size={19} />,
		children: [
			{
				key: '',
				label: 'sidebar.analisisDeDatos',
			},
			{
				key: '',
				label: 'sidebar.reporteVisual',
			},
		],
	},
	{
		key: 'charts',
		label: 'sidebar.charts',
		leftIcon: <SidebarChartsIcon size={19} />,
		children: [
			{
				key: 'demo',
				label: 'sidebar.demoCharts0',
			},
			{
				key: 'googleChart',
				label: 'sidebar.demoCharts1',
			},
			{
				key: 'reecharts',
				label: 'sidebar.demoCharts2',
			},
			{
				key: 'reactChart2',
				label: 'sidebar.demoCharts3',
			}
		],
	},
	{
		key: 'settings',
		label: 'sidebar.settings',
		leftIcon: <SettingIcon size={19} />,
		children: [
			{
				key: '',
				label: 'sidebar.userSettings',
				withoutDashboard: true,
			},
			{
				key: '',
				label: 'sidebar.projectSettings',
				withoutDashboard: true,
			},
			{
				key: '',
				label: 'sidebar.mainSettings',
				withoutDashboard: true,
			},
		],
	},
];
