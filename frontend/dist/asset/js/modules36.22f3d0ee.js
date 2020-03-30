(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules36","modules40"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1602:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return u})),a.d(e,"c",(function(){return c})),a.d(e,"g",(function(){return d}));var i=a("751a"),n=a("ed08"),s=function(t,e){var a=Object(n["a"])(t,e);return i["a"].get("/sys/users",{params:a})},o=function(t){return i["a"].post("/sys/users",t)},r=function(t,e){return i["a"].patch("/sys/users/"+t,e)},l=function(t){return i["a"].get("/sys/users/"+t)},u=function(t){return i["a"].delete("/sys/users/"+t)},c=function(t){return i["a"].get("/sys/userRoles/"+t)},d=function(t,e){return i["a"].patch("/sys/userRoles/"+t,{roles:e})}},2203:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-container",[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"账号",clearable:""},model:{value:t.filter.username,callback:function(e){t.$set(t.filter,"username",e)},expression:"filter.username"}})],1),a("v-col",[a("v-select",{attrs:{label:"角色",items:t.roles,"item-value":"id","item-text":"name",clearable:""},model:{value:t.filter.role,callback:function(e){t.$set(t.filter,"role",e)},expression:"filter.role"}})],1),a("v-col",[a("v-select",{attrs:{label:"状态",items:t.states,clearable:""},model:{value:t.filter.state,callback:function(e){t.$set(t.filter,"state",e)},expression:"filter.state"}})],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.table.headers,items:t.table.items,options:t.table.options,"server-items-length":t.totalRecords,loading:t.table.loading,"loading-text":"努力加载中... 请稍等","no-data-text":"暂无数据","no-results-text":"未找到相关数据","footer-props":{showFirstLastPage:!0,"items-per-page-options":[5,10,15,20,50]}},on:{"update:options":function(e){return t.$set(t.table,"options",e)}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("用户管理")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-btn",{directives:[{name:"permission",rawName:"v-permission",value:"user:edit",expression:"'user:edit'"}],attrs:{color:"primary",dark:""},on:{click:function(e){return e.stopPropagation(),t.newItem(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("新建用户 ")],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:""},on:{click:t.fetchData}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-magnify")]),t._v("查询 ")],1)],1)]},proxy:!0},{key:"item.state",fn:function(e){var i=e.item;return[a("v-chip",{attrs:{color:1==i.state?"green":"orange",dark:""}},[t._v(t._s(1==i.state?"启用":"禁用"))])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:"user:edit",expression:"'user:edit'"}],attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},n),[t._v("mdi-pencil")])]}}],null,!0)},[a("span",[t._v("用户信息")])]),a("v-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:"user:setRole",expression:"'user:setRole'"}],attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editRole(i)}}},n),[t._v("mdi-account-plus")])]}}],null,!0)},[a("span",[t._v("分配角色")])]),a("v-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:"user:delete",expression:"'user:delete'"}],attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},n),[t._v("mdi-delete")])]}}],null,!0)},[a("span",[t._v("删除用户")])])]}}])}),a("user-form",{ref:"userForm",on:{afterSave:t.fetchData}}),a("user-role",{ref:"userRole"})],1)},n=[],s=(a("4de4"),a("1602")),o=a("4c0e"),r=a("3be3"),l=a("fb28"),u=a("ed08"),c={components:{UserForm:r["default"],UserRole:l["default"]},data:function(){return{states:[{text:"启用",value:"1"},{text:"禁用",value:"2"}],roles:[],filter:{name:"",role:"",state:""},table:{options:{},loading:!1,headers:[{text:"ID",value:"id"},{text:"账号",value:"username"},{text:"状态",value:"state"},{text:"创建时间",value:"created_at"},{text:"更新时间",value:"updated_at"},{text:"操作",value:"actions",sortable:!1}],items:[]},totalRecords:0}},watch:{"table.options":{handler:function(){this.fetchData()},deep:!0}},created:function(){this.initRoles()},methods:{initRoles:function(){var t=this;o["c"]().then((function(e){var a=e.data;t.roles=a}))},fetchData:function(){var t=this;this.editDialog=!1,this.editId=null,this.table.loading=!0,s["d"](this.table.options,this.filter).then((function(e){var a=e.data;t.table.loading=!1,t.table.items=a.data,t.totalRecords=a.total}))},newItem:function(){this.$refs.userForm.showForm()},editItem:function(t){this.$refs.userForm.showForm(t.id)},deleteItem:function(t){var e=this;this.$root.$confirm("确认消息","要删除该记录吗？").then((function(a){a&&s["e"](t.id).then((function(){Object(u["b"])("删除成功"),e.fetchData()}))}))},editRole:function(t){this.$refs.userRole.showForm(t)}}},d=c,h=a("2877"),f=a("6544"),p=a.n(f),v=a("8336"),m=a("cc20"),b=a("62ad"),g=a("a523"),x=a("8fea"),V=a("ce7e"),y=a("132d"),_=a("0fd9"),C=a("b974"),k=a("2fa4"),S=a("8654"),w=a("71d9"),R=a("2a7f"),I=a("3a2f"),$=Object(h["a"])(d,i,n,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:v["a"],VChip:m["a"],VCol:b["a"],VContainer:g["a"],VDataTable:x["a"],VDivider:V["a"],VIcon:y["a"],VRow:_["a"],VSelect:C["a"],VSpacer:k["a"],VTextField:S["a"],VToolbar:w["a"],VToolbarTitle:R["b"],VTooltip:I["a"]})},"2c64":function(t,e,a){},"3be3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",scrollable:""},on:{input:t.dialogClose},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),i(t.save)}}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("VTextFieldWithValidation",{attrs:{label:"账号",rules:"required|min:4|max:16",clearable:"",counter:""},model:{value:t.item.username,callback:function(e){t.$set(t.item,"username",e)},expression:"item.username"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("VTextFieldWithValidation",{attrs:{placeholder:t.placeholder,type:"password",label:"密码",rules:"min:6|max:32",autocomplete:"new-password",clearable:"",counter:""},model:{value:t.item.password,callback:function(e){t.$set(t.item,"password",e)},expression:"item.password"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-radio-group",{attrs:{mandatory:"",row:""},model:{value:t.item.state,callback:function(e){t.$set(t.item,"state",e)},expression:"item.state"}},[a("v-radio",{attrs:{label:"启用",value:1}}),a("v-radio",{attrs:{label:"禁用",value:2}})],1)],1),t.isEditForm?a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{readonly:"",disabled:"",label:"创建时间"},model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1):t._e(),t.isEditForm?a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{readonly:"",disabled:"",label:"更新时间"},model:{value:t.item.updated_at,callback:function(e){t.$set(t.item,"updated_at",e)},expression:"item.updated_at"}})],1):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue-grey",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("取消")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v("保存")])],1)],1)]}}])})],1)],1)},n=[],s=a("7bb1"),o=a("dee4"),r=a("1602"),l=a("ed08"),u={components:{ValidationObserver:s["a"],VTextFieldWithValidation:o["a"]},data:function(){return{dialog:!1,formType:"create",item:{state:1}}},computed:{isEditForm:function(){return"edit"==this.formType},formTitle:function(){return this.isEditForm?"编辑用户":"新建用户"},placeholder:function(){return this.isEditForm?"不填则不修改密码":"默认密码为123456"}},methods:{showForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t?(this.formType="edit",this.getItem(t),this.item.id=t):this.formType="create",this.dialog=!0},dialogClose:function(t){0==t&&this.close()},close:function(){var t=this;this.dialog=!1,this.item={},this.$refs.form.reset(),this.$nextTick((function(){t.$refs.observer.reset()}))},save:function(){var t=this;delete this.item.created_at,delete this.item.updated_at,this.isEditForm?r["f"](this.item.id,this.item).then((function(e){var a=e.data;t.close(),a&&(Object(l["b"])("保存成功"),t.$emit("afterSave"))})):r["a"](this.item).then((function(e){var a=e.data;t.close(),a&&(Object(l["b"])("保存成功"),t.$emit("afterSave"))}))},getItem:function(t){var e=this;r["b"](t).then((function(t){var a=t.data;e.item=a}))}}},c=u,d=a("2877"),h=a("6544"),f=a.n(h),p=a("8336"),v=a("b0af"),m=a("99d9"),b=a("62ad"),g=a("a523"),x=a("169a"),V=a("4bd4"),y=a("67b6"),_=a("43a6"),C=a("0fd9"),k=a("2fa4"),S=a("8654"),w=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=w.exports;f()(w,{VBtn:p["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:b["a"],VContainer:g["a"],VDialog:x["a"],VForm:V["a"],VRadio:y["a"],VRadioGroup:_["a"],VRow:C["a"],VSpacer:k["a"],VTextField:S["a"]})},"3d86":function(t,e,a){},"43a6":function(t,e,a){"use strict";a("a9e3");var i=a("5530"),n=(a("ec29"),a("3d86"),a("c37a")),s=a("604c"),o=a("8547"),r=a("58df"),l=Object(r["a"])(o["a"],s["a"],n["a"]);e["a"]=l.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(i["a"])({},n["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},n["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:s["a"].options.methods.onClick}})},5311:function(t,e,a){"use strict";var i=a("5607"),n=a("2b0e");e["a"]=n["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},"67b6":function(t,e,a){"use strict";a("b0c0");var i=a("5530"),n=(a("2c64"),a("ba87")),s=a("9d26"),o=a("c37a"),r=a("7e2b"),l=a("a9ad"),u=a("4e82"),c=a("5311"),d=a("7560"),h=a("fe09"),f=a("80d2"),p=a("58df"),v=Object(p["a"])(r["a"],l["a"],c["a"],Object(u["a"])("radioGroup"),d["a"]);e["a"]=v.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(i["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses,{},this.groupClasses)},computedColor:function(){return h["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return o["a"].options.computed.computedId.call(this)},hasLabel:o["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly:function(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return h["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return h["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){var t=this;return this.hasLabel?this.$createElement(n["a"],{on:{click:function(e){e.preventDefault(),t.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(f["r"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(i["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}})},"841c":function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),s=a("1d80"),o=a("129f"),r=a("14c3");i("search",1,(function(t,e,a){return[function(e){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a):new RegExp(e)[t](String(a))},function(t){var i=a(e,t,this);if(i.done)return i.value;var s=n(t),l=String(this),u=s.lastIndex;o(u,0)||(s.lastIndex=0);var c=r(s,l);return o(s.lastIndex,u)||(s.lastIndex=u),null===c?-1:c.index}]}))},ec29:function(t,e,a){},fb28:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("角色分配："+t._s(t.user.username))])]),a("v-card-text",{staticStyle:{height:"300px"}},[a("v-select",{attrs:{items:t.roles,"item-text":"name","item-value":"id",label:"选择角色",chips:"",multiple:"",clearable:""},model:{value:t.userRoles,callback:function(e){t.userRoles=e},expression:"userRoles"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("取消")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("保存")])],1)],1)],1)},n=[],s=a("1602"),o=a("4c0e"),r=a("ed08"),l={data:function(){return{dialog:!1,roles:[],user:{},userRoles:[]}},created:function(){this.getRoles()},methods:{showForm:function(t){this.getUserRoles(t.id),this.user=t,this.dialog=!0},close:function(){this.user={},this.userRoles=[],this.dialog=!1},save:function(){var t=this;s["g"](this.user.id,this.userRoles).then((function(e){var a=e.data;t.close(),a&&Object(r["b"])("保存成功")}))},getRoles:function(){var t=this;o["c"]().then((function(e){var a=e.data;t.roles=a}))},getUserRoles:function(t){var e=this;s["c"](t).then((function(t){var a=t.data;e.userRoles=a}))}}},u=l,c=a("2877"),d=a("6544"),h=a.n(d),f=a("8336"),p=a("b0af"),v=a("99d9"),m=a("169a"),b=a("b974"),g=a("2fa4"),x=Object(c["a"])(u,i,n,!1,null,null,null);e["default"]=x.exports;h()(x,{VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:m["a"],VSelect:b["a"],VSpacer:g["a"]})},fe09:function(t,e,a){"use strict";a("4de4"),a("45fc"),a("d3b7"),a("25f0");var i=a("c37a"),n=a("5311"),s=a("8547"),o=a("58df");e["a"]=Object(o["a"])(i["a"],n["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=i["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);