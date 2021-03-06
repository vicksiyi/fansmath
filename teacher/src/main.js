// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
import http from 'axios';

Vue.config.productionTip = false
import {
  Button, Row, Container, Main, Footer, Header,
  Dropdown, DropdownMenu, DropdownItem, Avatar, Form,
  FormItem, Input, Col, Menu, Submenu, MenuItem,
  MenuItemGroup, Aside, Card, Table,
  TableColumn, Breadcrumb, BreadcrumbItem, Tag, Popconfirm,
  MessageBox, Select, Message, Option, Drawer, Radio, RadioGroup,
  Upload, Alert, Pagination, DatePicker, TimePicker, Carousel,
  CarouselItem, Dialog, Descriptions, DescriptionsItem, Image,
  Steps, Step, Tooltip, Loading, Progress, empty,Tabs,TabPane
} from 'element-ui';
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(empty);
Vue.use(Button);
Vue.use(Row);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Aside);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Popconfirm);
Vue.use(Select);
Vue.use(Option);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Upload);
Vue.use(Alert);
Vue.use(Pagination);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Image);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tooltip);
Vue.use(Loading.directive);
Vue.use(Progress);
Vue.prototype.$http = http;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
