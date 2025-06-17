import { ProLayoutProps } from '@ant-design/pro-components'; // 菜单栏显示
export type DefaultSetting = ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
};
const Settings: DefaultSetting = {
  navTheme: 'light',
  colorPrimary: '#296DF3',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  // fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  // 不展示顶栏
  headerRender: false,
  // 不展示页脚
  footerRender: false,
  // 不展示菜单
  menuRender: false,
  // 不展示菜单顶栏
  menuHeaderRender: false,
  // iconfontUrl: '//at.alicdn.com/t/c/font_4120566_x5c4www9bqm.js',
  // splitMenus: true,
  // menu: {
  //   autoClose: false,
  //   ignoreFlatMenu: true,
  // },
};
export const publicPath = '/supersonic-webapp/';
export const basePath = '/supersonic-webapp/';

export default Settings;
