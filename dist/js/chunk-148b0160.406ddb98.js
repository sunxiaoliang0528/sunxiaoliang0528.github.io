(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-148b0160"],{"7ee8":function(t,s,e){"use strict";var i=e("de40"),o=e.n(i);o.a},dcc9:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"codelogin"},[t._m(0),e("div",{staticClass:"loding_loding"},[e("div",[e("div",{ref:"div1",staticClass:"inp",style:{borderBottom:1==t.active?"1px solid orange":""},on:{click:function(s){t.active=1}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ss,expression:"ss"}],attrs:{placeholder:"请输入手机号"},domProps:{value:t.ss},on:{blur:t.blurFn,input:function(s){s.target.composing||(t.ss=s.target.value)}}})]),e("div",{ref:"div2",staticClass:"inp",style:{borderBottom:2==t.active?"1px solid orange":""},on:{click:function(s){t.active=2}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ss1,expression:"ss1"}],attrs:{placeholder:"请输入密码"},domProps:{value:t.ss1},on:{blur:t.blurFn,input:function(s){s.target.composing||(t.ss1=s.target.value)}}})]),e("div",{staticClass:"loding_loding_Registration"},[e("div",{on:{click:t.password}},[t._v("找回密码")]),e("div",{on:{click:t.reg}},[t._v("注册/验证码登录")])]),e("button",{staticClass:"btn",on:{click:t.dlu}},[t._v("登录")])])])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loding_img"},[e("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"}})])}],n={data:function(){return{ss:"",ss1:"",active:""}},methods:{blurFn:function(){this.active=-1},password:function(){this.$router.push("/qrgPassword")},reg:function(){this.$router.push("/qrgBoarding")},dlu:function(){var t=this;this.$http.post("/api/app/login",{mobile:this.ss,password:this.ss1,type:1}).then((function(s){console.log(s),window.localStorage.setItem("remember_token",s.data.data.remember_token),window.localStorage.setItem("mobile",s.data.data.mobile),200==s.data.code?t.$router.push({path:"/Czp/Czp_E1"}):alert("账号密码不正确")})).catch((function(t){console.log(t+"报错了")}))}}},a=n,r=(e("7ee8"),e("9ca4")),c=Object(r["a"])(a,i,o,!1,null,"63fdfaac",null);s["default"]=c.exports},de40:function(t,s,e){}}]);
//# sourceMappingURL=chunk-148b0160.406ddb98.js.map