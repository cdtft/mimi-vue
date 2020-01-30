import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Aside, Main, Header } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)

// 引入消息通知组件,并挂载为一个属性
Vue.prototype.$message = Message
