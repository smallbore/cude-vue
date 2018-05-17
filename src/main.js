import 'amfe-flexible'
import Vue from 'vue'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  Style,
  Button,
  CheckboxGroup,
  Radio,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Form,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  SegmentPicker,
  TimePicker,
  Dialog,
  ActionSheet,
  Drawer,
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Upload,
  createAPI
} from 'cube-ui'
import App from './App'
import SubscribeDialog from './components/subscribe-dialog/subscribe-dialog'
createAPI(Vue, SubscribeDialog, [], true)

Vue.use(Button)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Form)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(SegmentPicker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Upload)
Vue.use(Popup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
