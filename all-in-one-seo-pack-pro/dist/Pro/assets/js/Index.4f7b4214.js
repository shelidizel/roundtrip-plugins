import{a as F,i as V,c as P}from"./links.574d4fd4.js";import{C as I,b as M,c as B,d as O}from"./Caret.89e18339.js";import{J as j}from"./JsonValues.870a4901.js";import{s as k}from"./strings.81a9a134.js";import{C as J}from"./ProBadge.4381f91b.js";import{S as Q}from"./External.f8ff7aa4.js";import{x as u,o as l,c as m,a as o,F as T,L as $,k as h,l as g,D as v,t as f,b as c,H,C as d,I as L,m as K,$ as G}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as w}from"./_plugin-vue_export-helper.58be9317.js";import{S as z}from"./Exclamation.20b286fc.js";import{B as Z}from"./Checkbox.66c1e532.js";import{C as N,S as q}from"./index.b1bbc091.js";import{S as X}from"./Gear.da11b8f1.js";import{T as W}from"./Slide.6b2090d0.js";import{C as ee}from"./Tooltip.72f8a160.js";import{S as te}from"./Plus.cdfc8876.js";const se={emits:["set-url"],components:{CoreProBadge:J,SvgExternal:Q},props:{results:{type:Array,required:!0},url:String},data(){return{strings:{DRAFT:this.$t.__("DRAFT",this.$td),PENDING:this.$t.__("PENDING",this.$td),FUTURE:this.$t.__("FUTURE",this.$td)}}},methods:{getOptionTitle(e){e=e.replace(/<\/?[^>]+(>|$)/g,"");const t=this.url.replace(/<\/?[^>]+(>|$)/g,""),s=new RegExp(`(${t})`,"gi");return e.replace(s,'<span class="search-term">$1</span>')},getStatusLabel(e){switch(e.toLowerCase()){case"draft":return this.strings.DRAFT;case"future":return this.strings.FUTURE;case"pending":return this.strings.PENDING}}}},re={class:"aioseo-add-redirection-url-results"},ie=["onClick"],le={class:"option"},oe={class:"option-title"},ne=["innerHTML"],ue={class:"option-details"},ae=["href"];function ce(e,t,s,_,r,i){const a=u("core-pro-badge"),y=u("svg-external");return l(),m("div",re,[o("ul",null,[(l(!0),m(T,null,$(s.results,(R,E)=>(l(),m("li",{key:E,onClick:C=>e.$emit("set-url",R.link)},[o("span",null,[o("div",le,[o("div",oe,[o("div",{innerHTML:i.getOptionTitle(R.label)},null,8,ne),R.status!=="publish"?(l(),h(a,{key:0},{default:g(()=>[v(f(i.getStatusLabel(R.status)),1)]),_:2},1024)):c("",!0)]),o("div",ue,[o("span",null,f(R.link),1)])]),o("a",{class:"option-permalink",href:R.link,target:"_blank",onClick:H(()=>{},["stop"])},[d(y)],8,ae)])],8,ie))),128))])])}const Y=w(se,[["render",ce]]);const he={setup(){return{postEditorStore:F(),redirectsStore:V(),rootStore:P()}},components:{CoreAddRedirectionUrlResults:Y,CoreLoader:I,SvgCircleCheck:M,SvgCircleClose:B,SvgCircleExclamation:z},props:{url:String,errors:Array,warnings:Array},data(){return{showResults:!1,isLoading:!1,value:null,results:[]}},watch:{value(){this.value&&(this.value=this.value.replace(/(https?:\/)(\/)+|(\/)+/g,"$1$2$3"),this.value.startsWith("/")&&(this.value=this.value.replace(/\s+/g,"")))},url:{immediate:!0,handler(){this.value=this.url}}},methods:{onBlur(){setTimeout(()=>{this.$emit("update:modelValue",this.value)},150)},searchChange(){if(this.value){if(this.value.startsWith("/")||this.value.startsWith("http:")||this.value.startsWith("https:")){this.isLoading=!1;return}this.isLoading=!0,O(()=>{if(!this.value){this.isLoading=!1;return}this.showResults=!0,this.ajaxSearch(this.value).then(()=>this.isLoading=!1)},500)}},ajaxSearch(e){return this.redirectsStore.getPosts({query:e,postId:this.postEditorStore.currentPost.id}).then(t=>{this.results=t.body.objects})},setUrl(e){this.showResults=!1,this.value=e.replace(this.rootStore.aioseo.urls.mainSiteUrl,"",e),this.$emit("update:modelValue",this.value)},documentClick(e){if(!this.showResults)return;const t=e&&e.target?e.target:null,s=this.$refs["redirect-target-url"];s&&s!==t&&!s.contains(t)&&(this.showResults=!1)}},mounted(){document.addEventListener("click",this.documentClick)},beforeUnmount(){document.removeEventListener("click",this.documentClick)}},de={class:"aioseo-add-redirection-target-url",ref:"redirect-target-url"},ge={class:"append-icon"};function _e(e,t,s,_,r,i){const a=u("svg-circle-close"),y=u("svg-circle-check"),R=u("svg-circle-exclamation"),E=u("core-loader"),C=u("base-input"),b=u("core-add-redirection-url-results");return l(),m("div",de,[d(C,{modelValue:r.value,"onUpdate:modelValue":[t[0]||(t[0]=S=>r.value=S),t[2]||(t[2]=S=>e.$emit("update:modelValue",r.value))],onKeyup:i.searchChange,onFocus:t[1]||(t[1]=S=>r.showResults=!0),onBlur:t[3]||(t[3]=S=>e.$emit("blur",r.value)),size:"medium",placeholder:"/target-page/",class:L({"aioseo-error":s.errors.length,"aioseo-active":!s.errors.length&&!s.warnings.length&&s.url,"aioseo-warning":s.warnings.length})},{"append-icon":g(()=>[o("div",ge,[r.isLoading?c("",!0):(l(),m(T,{key:0},[s.errors.length?(l(),h(a,{key:0})):c("",!0),!s.errors.length&&!s.warnings.length&&s.url?(l(),h(y,{key:1})):c("",!0),s.warnings.length?(l(),h(R,{key:2})):c("",!0)],64)),r.isLoading?(l(),h(E,{key:1,dark:""})):c("",!0)])]),_:1},8,["modelValue","onKeyup","class"]),r.showResults&&r.results.length?(l(),h(b,{key:0,results:r.results,url:r.value,onSetUrl:i.setUrl},null,8,["results","url","onSetUrl"])):c("",!0)],512)}const pe=w(he,[["render",_e]]),me=function(e,t){if(typeof e!="string")return e;const s=new RegExp("^"+t.replace(/\/$/,""),"i");return e.replace(s,"")};const fe={setup(){return{redirectsStore:V(),rootStore:P()}},emits:["updated-url","remove-url","updated-option"],components:{BaseCheckbox:Z,CoreAddRedirectionUrlResults:Y,CoreAlert:N,CoreLoader:I,SvgCircleCheck:M,SvgCircleClose:B,SvgCircleExclamation:z,SvgGear:X,SvgTrash:q,TransitionSlide:W},props:{url:{type:Object,default(){return{id:null,url:null,regex:!1,ignoreSlash:!0,ignoreCase:!0,errors:[],warnings:[]}}},allowDelete:Boolean,targetUrl:String,log404:Boolean,disableSource:Boolean},data(){return{showResults:!1,isLoading:!1,showOptions:!1,strings:{ignoreSlash:this.$t.__("Ignore Slash",this.$td),ignoreCase:this.$t.__("Ignore Case",this.$td),regex:this.$t.__("Regex",this.$td)},results:[]}},watch:{targetUrl(){this.updateSourceUrl(this.url.url)}},computed:{maybeRegex(){return this.url.url.match(/[*\\()[\]^$]/)!==null||this.url.url.indexOf(".?")!==-1},invalidUrl(){var t;if(!this.url.url)return!1;const e=[];if(this.url.regex)try{new RegExp(this.url.url)}catch{return e.push(this.$t.__("The regex syntax is invalid.",this.$td)),e}if(!this.url.regex&&!k(this.url.url))return e.push(this.$t.__("Your URL is invalid.",this.$td)),e;if(this.url.url.substr(0,4)==="http"&&e.push(this.$t.__("Please enter a valid relative source URL.",this.$td)),this.url.url.match(/%[a-zA-Z]+%/)&&e.push(this.$t.__("Permalinks are not currently supported.",this.$td)),(this.url.url==="/(.*)"||this.url.url==="^/(.*)")&&e.push(this.$t.__("This redirect is supported using the Relocate Site feature under Full Site Redirect tab.",this.$td)),this.url.url&&this.url.url.length&&this.targetUrl&&this.targetUrl.length){let s=this.url.ignoreSlash?this.$links.unTrailingSlashIt(this.url.url):this.url.url,_=this.url.ignoreSlash?this.$links.unTrailingSlashIt(this.targetUrl):this.targetUrl;s=this.url.ignoreCase?s.toLowerCase():s,_=this.url.ignoreCase?_.toLowerCase():_,(s===_||this.url.regex&&_.match(s))&&e.push(this.$t.__("Your source is the same as a target and this will create a loop.",this.$td))}if(0<((t=this.redirectsStore)==null?void 0:t.protectedPaths.length)){const s=this.redirectsStore.protectedPaths.map(_=>_.replace(/\/$/,""));this.url.url.match(new RegExp("^("+s.join("|")+")"))&&e.push(this.$t.__("Your source is a protected path and cannot be redirected.",this.$td))}return e},iffyUrl(){if(!this.url.url||this.disableSource)return[];const e=[];return this.url.url.substr(0,4)!=="http"&&this.url.url.substr(0,1)!=="/"&&0<this.url.url.length&&!this.url.regex&&e.push(this.$t.sprintf(this.$t.__("The source URL should probably start with a %1$s",this.$td),"<code>/</code>")),this.url.url.indexOf("#")!==-1&&e.push(this.$t.__("Anchor values are not sent to the server and cannot be redirected.",this.$td)),!this.log404&&this.maybeRegex&&!this.url.regex&&e.push(this.$t.sprintf(this.$t.__("Remember to enable the %1$s option if this is a regular expression.",this.$td),"<code>Regex</code>")),this.url.regex&&(this.url.url.indexOf("^")===-1&&this.url.url.indexOf("$")===-1&&e.push(this.$t.sprintf(this.$t.__("To prevent a greedy regular expression you can use %1$s to anchor it to the start of the URL. For example: %2$s",this.$td),"<code>^/</code>","<code>^/"+k(this.url.url.replace(/^\//,""))+"</code>")),0<this.url.url.indexOf("^")&&e.push(this.$t.sprintf(this.$t.__("The caret %1$s should be at the start. For example: %2$s",this.$td),"<code>^/</code>","<code>^/"+k(this.url.url.replace("^","").replace(/^\//,""))+"</code>")),this.url.url.indexOf("^")===0&&this.url.url.indexOf("^/")===-1&&e.push(this.$t.sprintf(this.$t.__("The source URL should probably start with a %1$s",this.$td),"<code>^/</code>")),this.url.url.length-1!==this.url.url.indexOf("$")&&this.url.url.indexOf("$")!==-1&&e.push(this.$t.sprintf(this.$t.__("The dollar symbol %1$s should be at the end. For example: %2$s",this.$td),"<code>$</code>","<code>"+k(this.url.url.replace(/\$/g,""))+"$</code>"))),this.url.url.match(/(\.html|\.htm|\.php|\.pdf|\.jpg)$/)!==null&&e.push(this.$t.__("Some servers may be configured to serve file resources directly, preventing a redirect occurring.",this.$td)),e},urlOptionsActive(){return this.url.regex||this.showOptions}},methods:{updateSourceUrl(e){e&&(this.disableSource||(e&&(e=e.replace(/(https?:\/)(\/)+|(\/)+/g,"$1$2$3")),!this.url.regex&&e.startsWith("/")&&(e=e.replace(/\s+/g,"")),e=me(e,this.rootStore.aioseo.urls.home)),this.url.url=e,this.url.errors=this.invalidUrl,this.url.warnings=this.iffyUrl,this.$emit("updated-url",this.url))},updateOption(e,t){this.url[e]=t,this.updateSourceUrl(this.url.url),this.$emit("updated-option",this.url)},searchChange(){if(!(!this.url.url||this.url.regex)){if(this.url.url.startsWith("/")||this.url.url.startsWith("^")||this.url.url.startsWith("http:")||this.url.url.startsWith("https:")){this.isLoading=!1;return}this.isLoading=!0,O(()=>{if(!this.url.url){this.isLoading=!1;return}this.showResults=!0,this.ajaxSearch(this.url.url).then(()=>this.isLoading=!1)},500)}},ajaxSearch(e){return this.redirectsStore.getPosts({query:e}).then(t=>{this.results=t.body.objects})},setUrl(e){this.showResults=!1,this.updateOption("url",e.replace(this.rootStore.aioseo.urls.mainSiteUrl,"",e))},documentClick(e){if(!this.showResults)return;const t=e&&e.target?e.target:null,s=this.$refs["redirect-source-url"];s&&s!==t&&!s.contains(t)&&(this.showResults=!1)}},mounted(){this.url.showOptions&&(this.showOptions=!0,this.updateSourceUrl(this.url.url)),document.addEventListener("click",this.documentClick)},beforeUnmount(){document.removeEventListener("click",this.documentClick)}},Re={class:"aioseo-redirect-source-url",ref:"redirect-source-url"},Ue={class:"append-icon"};function ve(e,t,s,_,r,i){const a=u("svg-circle-close"),y=u("svg-circle-check"),R=u("svg-circle-exclamation"),E=u("svg-gear"),C=u("svg-trash"),b=u("core-loader"),S=u("base-input"),D=u("core-add-redirection-url-results"),n=u("base-checkbox"),p=u("transition-slide"),A=u("core-alert");return l(),m("div",Re,[d(S,{modelValue:s.url.url,"onUpdate:modelValue":t[2]||(t[2]=U=>i.updateSourceUrl(U)),onKeyup:i.searchChange,onFocus:t[3]||(t[3]=U=>r.showResults=!0),disabled:s.log404||s.disableSource,size:"medium",placeholder:"/source-page/",class:L({"aioseo-error":s.url.errors.length,"aioseo-active":!s.url.errors.length&&!s.url.warnings.length&&s.url.url,"aioseo-warning":s.url.warnings.length})},{"append-icon":g(()=>[o("div",Ue,[r.isLoading?c("",!0):(l(),m(T,{key:0},[s.url.errors.length?(l(),h(a,{key:0})):c("",!0),!s.url.errors.length&&!s.url.warnings.length&&s.url.url?(l(),h(y,{key:1})):c("",!0),s.url.warnings.length?(l(),h(R,{key:2})):c("",!0),d(E,{class:L({active:i.urlOptionsActive}),onClick:t[0]||(t[0]=U=>r.showOptions=!r.showOptions)},null,8,["class"]),s.allowDelete?(l(),h(C,{key:3,onClick:t[1]||(t[1]=U=>e.$emit("remove-url"))})):c("",!0)],64)),r.isLoading?(l(),h(b,{key:1,dark:""})):c("",!0)])]),_:1},8,["modelValue","onKeyup","disabled","class"]),!s.url.regex&&r.showResults&&r.results.length?(l(),h(D,{key:0,results:r.results,url:s.url.url,onSetUrl:i.setUrl},null,8,["results","url","onSetUrl"])):c("",!0),s.log404?c("",!0):K(e.$slots,"source-url-description",{key:1}),d(p,{active:r.showOptions,class:"source-url-options"},{default:g(()=>[d(n,{size:"medium",modelValue:s.url.ignoreSlash,"onUpdate:modelValue":t[4]||(t[4]=U=>i.updateOption("ignoreSlash",U))},{default:g(()=>[v(f(r.strings.ignoreSlash),1)]),_:1},8,["modelValue"]),d(n,{size:"medium",modelValue:s.url.ignoreCase,"onUpdate:modelValue":t[5]||(t[5]=U=>i.updateOption("ignoreCase",U))},{default:g(()=>[v(f(r.strings.ignoreCase),1)]),_:1},8,["modelValue"]),!s.log404&&!s.disableSource?(l(),h(n,{key:0,size:"medium",modelValue:s.url.regex,"onUpdate:modelValue":t[6]||(t[6]=U=>i.updateOption("regex",U))},{default:g(()=>[v(f(r.strings.regex),1)]),_:1},8,["modelValue"])):c("",!0)]),_:1},8,["active"]),d(p,{active:!!s.url.errors.length},{default:g(()=>[(l(!0),m(T,null,$(s.url.errors,(U,x)=>(l(),h(A,{key:x,class:"source-url-error",type:"red",size:"small",innerHTML:U},null,8,["innerHTML"]))),128))]),_:1},8,["active"]),d(p,{active:!!s.url.warnings.length},{default:g(()=>[(l(!0),m(T,null,$(s.url.warnings,(U,x)=>(l(),h(A,{key:x,class:"source-url-warning",type:"yellow",size:"small",innerHTML:U},null,8,["innerHTML"]))),128))]),_:1},8,["active"])],512)}const ye=w(fe,[["render",ve]]);const Se={type:null,key:null,value:null,regex:null},be={setup(){return{rootStore:P()}},components:{CoreTooltip:ee,SvgCirclePlus:te,SvgTrash:q},props:{editCustomRules:Array},data(){return{strings:{customRules:this.$t.__("Custom Rules",this.$td),selectMatchRule:this.$t.__("Select Rule",this.$td),delete:this.$t.__("Delete",this.$td),add:this.$t.__("Add Custom Rule",this.$td),regex:this.$t.__("Regex",this.$td),selectAValue:this.$t.__("Select a Value or Add a New One",this.$td),key:this.$t.__("Key",this.$td),value:this.$t.__("Value",this.$td)},customRules:[],types:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.login,value:"login",placeholder:this.$t.__("Select Status",this.$td),singleRule:!0,options:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.loggedin,value:"loggedin"},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.loggedout,value:"loggedout"}]},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.role,value:"role",multiple:!0,placeholder:this.$t.__("Select Roles",this.$td),options:Object.entries(this.rootStore.aioseo.user.roles).map(e=>({label:e[1],value:e[0]}))},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.referrer,value:"referrer",regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.agent,value:"agent",regex:!0,taggable:!0,multiple:!0,options:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.mobile,value:"mobile",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.feeds,value:"feeds",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.libraries,value:"libraries",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)}]},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.cookie,value:"cookie",keyValuePair:!0,regex:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.ip,value:"ip",placeholder:this.$t.__("Enter an IP Address",this.$td),taggable:!0,regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.server,value:"server",placeholder:this.$t.__("Enter the Server Name",this.$td),regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.header,value:"header",keyValuePair:!0,regex:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.wp_filter,value:"wp_filter",placeholder:this.$t.__("Enter a WordPress Filter Name",this.$td),taggable:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.locale,value:"locale",taggable:!0,regex:!0,placeholder:this.$t.__("Enter a Locale Code, e.g.: en_GB, es_ES",this.$td),singleRule:!0}]}},computed:{hasCustomRules(){return 0<this.customRules.length},filteredTypes(){return this.types.map(e=>(e.$isDisabled=!1,e.singleRule&&this.customRules.find(t=>e.value===t.type)&&(e.$isDisabled=!0),e))}},methods:{removeRule(e){this.customRules.splice(e,1),this.hasCustomRules||this.addRule(null)},addRule(e,t=!1){e||(e=JSON.parse(JSON.stringify(Se))),(!t||t&&this.customRules.filter(s=>s===e).length===0)&&this.customRules.push(e)},updateRule(e,t,s){const _=this.customRules[s];t=typeof t.value<"u"?t.value:t,t=typeof t=="object"&&t.length?t.map(r=>r.value):t,_[e]=t,e==="type"&&(_.value=""),this.customRules[s]=_},getRuleValue(e,t,s=!1){if(!this.customRules[t])return;let r=this.customRules[t][e],i=null;if(s)return r;switch(e){case"type":r=this.types.find(a=>r===a.value);break;case"value":i=this.getType(t,"options"),i&&(typeof r=="object"?r=r.map(a=>i.find(y=>a===y.value)||a).filter(a=>!!a):r=i.find(a=>r===a.value)||r),this.getType(t,"taggable")&&(r=typeof r=="object"?r.map(a=>typeof a.label>"u"?{label:a,value:a}:a):[]);break}return r},getType(e,t){const s=this.getRuleValue("type",e);return t?s&&typeof s[t]<"u"?s[t]:!1:s}},mounted(){this.editCustomRules&&(this.customRules=this.editCustomRules),this.hasCustomRules||this.addRule(null)}},Te={class:"custom-rules"},Ee={class:"redirects-options-table",cellspacing:"0",cellpadding:"0","aria-label":"Custom Rules"},Ce={colspan:"2"},$e={class:"rule-settings"},Le={class:"actions"},ke={colspan:"2"};function we(e,t,s,_,r,i){const a=u("base-select"),y=u("base-input"),R=u("base-toggle"),E=u("svg-trash"),C=u("core-tooltip"),b=u("svg-circle-plus"),S=u("base-button");return l(),m("div",Te,[o("table",Ee,[o("thead",null,[o("tr",null,[o("td",Ce,f(r.strings.customRules),1)])]),o("tbody",null,[(l(!0),m(T,null,$(r.customRules,(D,n)=>(l(),m("tr",{class:L(["rule",{even:n%2===0}]),key:n},[o("td",$e,[d(a,{options:i.filteredTypes,size:"medium",placeholder:r.strings.selectMatchRule,modelValue:i.getRuleValue("type",n),"onUpdate:modelValue":p=>i.updateRule("type",p,n)},null,8,["options","placeholder","modelValue","onUpdate:modelValue"]),i.getType(n,"options")||i.getType(n,"taggable")?(l(),h(a,{key:0,options:i.getType(n,"options")||[],size:"medium",modelValue:i.getRuleValue("value",n),"onUpdate:modelValue":p=>i.updateRule("value",p,n),multiple:i.getType(n,"multiple")||i.getType(n,"taggable"),taggable:i.getType(n,"taggable"),placeholder:i.getType(n,"placeholder")||r.strings.selectAValue},null,8,["options","modelValue","onUpdate:modelValue","multiple","taggable","placeholder"])):c("",!0),i.getType(n,"keyValuePair")?(l(),h(y,{key:1,modelValue:i.getRuleValue("key",n),"onUpdate:modelValue":p=>i.updateRule("key",p,n),size:"medium",placeholder:i.getType(n,"placeholderKey")||r.strings.key},null,8,["modelValue","onUpdate:modelValue","placeholder"])):c("",!0),!i.getType(n,"options")&&!i.getType(n,"taggable")?(l(),h(y,{key:2,modelValue:i.getRuleValue("value",n),"onUpdate:modelValue":p=>i.updateRule("value",p,n),size:"medium",placeholder:i.getType(n,"placeholder")||r.strings.value,disabled:!i.getType(n)},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):c("",!0),i.getType(n,"regex")?(l(),h(R,{key:3,modelValue:i.getRuleValue("regex",n),"onUpdate:modelValue":p=>i.updateRule("regex",p,n)},{default:g(()=>[v(f(r.strings.regex),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])):c("",!0)]),o("td",Le,[d(C,{class:"action",type:"action"},{tooltip:g(()=>[v(f(r.strings.delete),1)]),default:g(()=>[d(E,{onClick:p=>i.removeRule(n)},null,8,["onClick"])]),_:2},1024)])],2))),128))]),o("tfoot",null,[o("tr",null,[o("td",ke,[d(S,{size:"small-table",type:"black",onClick:t[0]||(t[0]=D=>i.addRule(null))},{default:g(()=>[d(b),v(" "+f(r.strings.add),1)]),_:1})])])])])])}const De=w(be,[["render",we],["__scopeId","data-v-6aa1ca29"]]),Ae={},xe={width:"36",height:"16",viewBox:"0 0 36 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-right-arrow"},Ve=o("path",{d:"M36 8L28.4211 0.5V6.125H0V9.875H28.4211V15.5L36 8Z",fill:"currentColor"},null,-1),Pe=[Ve];function Oe(e,t){return l(),m("svg",xe,Pe)}const Ie=w(Ae,[["render",Oe]]),Me={methods:{redirectHasUnPublishedPost(e){return e.post_id&&e.postStatus!=="publish"}}};const Be={setup(){return{redirectsStore:V()}},emits:["cancel","added-redirect"],components:{CoreAddRedirectionTargetUrl:pe,CoreAddRedirectionUrl:ye,CoreAlert:N,CustomRules:De,SvgRightArrow:Ie,TransitionSlide:W},mixins:[j,Me],props:{edit:Boolean,log404:Boolean,disableSource:Boolean,url:Object,urls:Array,target:String,type:Number,query:String,slash:Boolean,case:Boolean,rules:{type:Array,default(){return[]}},postId:Number,postStatus:String},data(){return{genericError:!1,showAdvancedSettings:!1,addingRedirect:!1,targetUrl:null,targetUrlErrors:[],targetUrlWarnings:[],sourceUrls:[],redirectType:null,queryParam:null,customRules:[],strings:{redirectType:this.$t.__("Redirect Type:",this.$td),targetUrl:this.$t.__("Target URL",this.$td),targetUrlDescription:this.$t.__("Enter a URL or start by typing a page or post title, slug or ID.",this.$td),addUrl:this.$t.__("Add URL",this.$td),sourceUrlDescription:this.$t.sprintf(this.$t.__("Enter a relative URL to redirect from or start by typing in page or post title, slug or ID. You can also use regex (%1$s)",this.$td),this.$links.getDocLink(this.$t.__("what's this?",this.$td),"redirectManagerRegex")),advancedSettings:this.$t.__("Advanced Settings",this.$td),queryParams:this.$t.__("Query Parameters:",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),cancel:this.$t.__("Cancel",this.$td),genericErrorMessage:this.$t.__("An error occurred while adding your redirects. Please try again later.",this.$td),sourceUrlSetOncePublished:this.$t.__("source url set once post is published",this.$td)},sourceDisabled:!1}},watch:{sourceUrls:{deep:!0,handler(){O(()=>this.checkForDuplicates(),500)}}},computed:{saveIsDisabled(){return!!this.sourceUrls.filter(e=>!e.url).length||!!this.sourceUrls.filter(e=>0<e.errors.length).length||this.redirectTypeHasTarget()&&!this.targetUrl},getRelativeAbsolute(){const e=this.targetUrl.match(/^\/([a-zA-Z0-9_\-%]*\..*)\//);return e?e[0]:null},sourceUrl(){return 1<this.sourceUrls.length?this.$t.__("Source URLs",this.$td):this.$t.__("Source URL",this.$td)},addRedirect(){return 1<this.sourceUrls.length?this.$t.__("Add Redirects",this.$td):this.$t.__("Add Redirect",this.$td)},hasTargetUrlErrors(){if(!this.targetUrl)return[];const e=[],t=k(this.targetUrl);if(!t)return e.push(this.$t.__("Your target URL is not valid.",this.$td)),e;this.targetUrl&&!this.beginsWith(this.targetUrl,"https://")&&!this.beginsWith(this.targetUrl,"http://")&&this.targetUrl.substr(0,1)!=="/"&&e.push(this.$t.sprintf(this.$t.__("Your target URL should be an absolute URL like %1$s or start with a slash %2$s.",this.$td),"<code>https://domain.com/"+t+"</code>","<code>/"+t+"</code>"));const s=this.targetUrl.match(/[|\\$]/g);return s!==null&&(this.sourceUrls.map(r=>r.regex).every(r=>r)||e.push(this.$t.sprintf(this.$t.__("Your target URL contains the invalid character(s) %1$s",this.$td),"<code>"+s+"</code>"))),e},hasTargetUrlWarnings(){if(!k(this.targetUrl))return[];const e=[];return this.getRelativeAbsolute&&e.push(this.$t.sprintf(this.$t.__("Your URL appears to contain a domain inside the path: %1$s. Did you mean to use %2$s instead?",this.$td),"<code>"+this.getRelativeAbsolute+"</code>","<code>https:/"+this.getRelativeAbsolute+"</code>")),e},getDefaultRedirectType(){let e=this.getJsonValue(this.redirectsStore.options.redirectDefaults.redirectType);return e||(e=this.$constants.REDIRECT_TYPES[0]),e},getDefaultQueryParam(){let e=this.getJsonValue(this.redirectsStore.options.redirectDefaults.queryParam);return e||(e=this.$constants.REDIRECT_QUERY_PARAMS[0]),e},getDefaultSlash(){return this.redirectsStore.options.redirectDefaults.ignoreSlash},getDefaultCase(){return this.redirectsStore.options.redirectDefaults.ignoreCase},getDefaultSourceUrls(){return[JSON.parse(JSON.stringify(this.getDefaultSourceUrl))]},getDefaultSourceUrl(){return{id:null,url:null,regex:!1,ignoreSlash:this.slash||this.getDefaultSlash||!1,ignoreCase:this.case||this.getDefaultCase||!1,errors:[],warnings:[]}},redirectQueryParams(){return 0<this.sourceUrls.filter(e=>e.regex).length?this.$constants.REDIRECT_QUERY_PARAMS.map(e=>(e.$isDisabled=!1,e.value==="exact"&&(e.$isDisabled=!0,this.queryParam.value==="exact"&&(this.queryParam=this.$constants.REDIRECT_QUERY_PARAMS.find(t=>!t.$isDisabled))),e)):this.$constants.REDIRECT_QUERY_PARAMS.map(e=>(e.$isDisabled=!1,e))},unPublishedPost(){return this.redirectHasUnPublishedPost({post_id:this.postId,postStatus:this.postStatus})}},methods:{beginsWith(e,t){return t.indexOf(e)===0||e.substr(0,t.length)===t},addUrl(){this.sourceUrls.push(JSON.parse(JSON.stringify(this.getDefaultSourceUrl)))},removeUrl(e){this.sourceUrls.splice(e,1)},addRedirects(){this.genericError=!1,this.addingRedirect=!0,this.sourceUrls.map(e=>(e.url.substr(0,4)!=="http"&&e.url.substr(0,1)!=="/"&&0<e.url.length&&!e.regex&&(e.url="/"+e.url),e)),this.redirectsStore.create({sourceUrls:this.sourceUrls,targetUrl:this.targetUrl,queryParam:this.queryParam.value,customRules:this.customRules,redirectType:this.redirectType.value,redirectTypeHasTarget:this.redirectTypeHasTarget(),group:this.log404?"404":"manual",postId:this.postId}).then(()=>{this.$emit("added-redirect"),window.aioseoBus.$emit("added-redirect"),this.reset()}).catch(e=>{this.handleError(e)})},saveChanges(){this.genericError=!1,this.addingRedirect=!0,this.sourceUrls[0].url.substr(0,4)!=="http"&&this.sourceUrls[0].url.substr(0,1)!=="/"&&0<this.sourceUrls[0].url.length&&!this.sourceUrls[0].regex&&(this.sourceUrls[0].url="/"+this.sourceUrls[0].url),this.redirectsStore.update({id:this.sourceUrls[0].id,payload:{sourceUrls:this.sourceUrls,targetUrl:this.targetUrl,queryParam:this.queryParam.value,customRules:this.customRules,redirectType:this.redirectType.value,redirectTypeHasTarget:this.redirectTypeHasTarget(),postId:this.postId}}).then(()=>{this.$emit("added-redirect"),this.reset()}).catch(e=>{console.error(e),this.handleError(e)})},handleError(e){if(e.response.status!==409||!e.response.body.failed||!e.response.body.failed.length){this.genericError=!0,this.addingRedirect=!1;return}const t=[],s=e.response.body.failed,_=this.$t.__("A redirect already exists for this source URL. To make changes, edit the original instead.",this.$td);s.forEach(r=>{const i=this.sourceUrls.findIndex(a=>a.url===r.url||r);i!==-1&&(this.sourceUrls[i].errors.find(a=>a===r.error||a===_)||this.sourceUrls[i].errors.push(r.error||_),t.push(i))});for(let r=this.sourceUrls.length-1;0<=r;r--)t.includes(r)||this.sourceUrls.splice(r,1);this.addingRedirect=!1},updateTargetUrl(e){this.targetUrl=e,this.targetUrlErrors=this.hasTargetUrlErrors,this.targetUrlWarnings=this.hasTargetUrlWarnings},reset(){if(this.showAdvancedSettings=!1,this.addingRedirect=!1,this.edit)return;const e=this.$constants.REDIRECT_TYPES.find(s=>s.value===this.type)||this.getDefaultRedirectType,t=this.$constants.REDIRECT_QUERY_PARAMS.find(s=>s.value===this.query)||this.getDefaultQueryParam;this.sourceUrls=[JSON.parse(JSON.stringify(this.getDefaultSourceUrl))],this.targetUrl=null,this.targetUrlErrors=[],this.targetUrlWarnings=[],this.redirectType=e||{label:"301 "+this.$t.__("Moved Permanently",this.$td),value:301},this.queryParam=t||{label:this.$t.__("Ignore all parameters",this.$td),value:"ignore"},this.customRules=[]},checkForDuplicates(){const e=[];this.sourceUrls.forEach((t,s)=>{if(!(!t.url||t.errors.length)){if(e.includes(t.url.replace(/\/$/,""))){this.sourceUrls[s].errors.push(this.$t.__("This is a duplicate of a URL you are already adding. You can only add unique source URLs.",this.$td));return}e.push(t.url.replace(/\/$/,""))}}),this.updateTargetUrl(this.targetUrl)},redirectTypeHasTarget(){return this.redirectType&&(typeof this.redirectType.noTarget>"u"||!this.redirectType.noTarget)}},mounted(){this.sourceUrls=this.getDefaultSourceUrls,this.url&&(this.sourceUrls=[{...this.getDefaultSourceUrl,...this.url}]),this.urls&&this.urls.length&&(this.sourceUrls=this.urls.map(s=>({...this.getDefaultSourceUrl,...s}))),this.sourceDisabled=this.disableSource,this.unPublishedPost&&(this.sourceUrls=this.sourceUrls.map(s=>(s.url="("+this.strings.sourceUrlSetOncePublished+")",s)),this.sourceDisabled=!0),this.target&&(this.targetUrl=this.target),this.rules&&(this.customRules=this.rules);const e=this.$constants.REDIRECT_TYPES.find(s=>s.value===this.type)||this.getDefaultRedirectType;e&&(this.redirectType=e);const t=this.$constants.REDIRECT_QUERY_PARAMS.find(s=>s.value===this.query)||this.getDefaultQueryParam;t&&(this.queryParam=t)}},He={class:"urls"},ze={class:"source"},Ne={class:"aioseo-settings-row no-border no-margin small-padding"},qe={class:"settings-name"},We={class:"name small-margin"},Ye=["innerHTML"],Fe={key:0,class:"url-arrow"},je={key:1,class:"target"},Je={class:"aioseo-settings-row no-border no-margin small-padding"},Qe={class:"settings-name"},Ke={class:"name small-margin"},Ge={class:"url"},Ze={class:"aioseo-description"},Xe=o("div",{class:"break"},null,-1),et={class:"source"},tt=["innerHTML"],st=o("div",{class:"url-arrow"},null,-1),rt=o("div",{class:"target"},null,-1),it={class:"all-settings"},lt={class:"all-settings-content"},ot={class:"redirect-type"},nt={class:"query-params"};function ut(e,t,s,_,r,i){const a=u("core-alert"),y=u("core-add-redirection-url"),R=u("base-button"),E=u("svg-right-arrow"),C=u("core-add-redirection-target-url"),b=u("transition-slide"),S=u("base-select"),D=u("custom-rules");return l(),m("div",{class:L(["aioseo-add-redirection",{"edit-url":s.edit,"log-404":s.log404}])},[r.genericError?(l(),h(a,{key:0,class:"generic-error",type:"red"},{default:g(()=>[v(f(r.strings.genericErrorMessage),1)]),_:1})):c("",!0),o("div",He,[o("div",ze,[o("div",Ne,[o("div",qe,[o("div",We,f(i.sourceUrl)+": ",1)]),(l(!0),m(T,null,$(r.sourceUrls,(n,p)=>(l(),h(y,{key:p,url:n,"allow-delete":1<r.sourceUrls.length,onRemoveUrl:A=>i.removeUrl(p),"target-url":r.targetUrl,log404:s.log404,disableSource:r.sourceDisabled},G({_:2},[s.edit&&!r.sourceDisabled?{name:"source-url-description",fn:g(()=>[o("div",{class:"aioseo-description source-description",innerHTML:r.strings.sourceUrlDescription},null,8,Ye)]),key:"0"}:void 0]),1032,["url","allow-delete","onRemoveUrl","target-url","log404","disableSource"]))),128)),!s.edit&&!s.log404&&!r.sourceDisabled?(l(),h(R,{key:0,size:"small",type:"gray",onClick:i.addUrl},{default:g(()=>[v(f(r.strings.addUrl),1)]),_:1},8,["onClick"])):c("",!0)])]),i.redirectTypeHasTarget()?(l(),m("div",Fe,[d(E)])):c("",!0),i.redirectTypeHasTarget()?(l(),m("div",je,[o("div",Je,[o("div",Qe,[o("div",Ke,f(r.strings.targetUrl)+": ",1)]),o("div",Ge,[d(C,{url:r.targetUrl,errors:r.targetUrlErrors,warnings:r.targetUrlWarnings,"onUpdate:modelValue":i.updateTargetUrl},null,8,["url","errors","warnings","onUpdate:modelValue"]),o("div",Ze,f(r.strings.targetUrlDescription),1),d(b,{active:!!r.targetUrlErrors.length},{default:g(()=>[o("div",null,[(l(!0),m(T,null,$(r.targetUrlErrors,(n,p)=>(l(),h(a,{key:p,class:"target-url-error",type:"red",size:"small",innerHTML:n},null,8,["innerHTML"]))),128))])]),_:1},8,["active"]),d(b,{active:!!r.targetUrlWarnings.length},{default:g(()=>[o("div",null,[(l(!0),m(T,null,$(r.targetUrlWarnings,(n,p)=>(l(),h(a,{key:p,class:"target-url-warning",type:"yellow",size:"small",innerHTML:n},null,8,["innerHTML"]))),128))])]),_:1},8,["active"])])])])):c("",!0),!s.edit&&!s.log404&&!r.sourceDisabled?(l(),m(T,{key:2},[Xe,o("div",et,[o("div",{class:"aioseo-description source-description",innerHTML:r.strings.sourceUrlDescription},null,8,tt)]),st,rt],64)):c("",!0)]),o("div",{class:L(["settings",{advanced:r.showAdvancedSettings}])},[o("div",it,[o("div",lt,[o("div",ot,[v(f(r.strings.redirectType)+" ",1),d(S,{options:e.$constants.REDIRECT_TYPES,modelValue:r.redirectType,"onUpdate:modelValue":t[0]||(t[0]=n=>r.redirectType=n),size:"medium"},null,8,["options","modelValue"])]),d(b,{class:"advanced-settings",active:r.showAdvancedSettings},{default:g(()=>[o("div",nt,[v(f(r.strings.queryParams)+" ",1),d(S,{options:i.redirectQueryParams,modelValue:r.queryParam,"onUpdate:modelValue":t[1]||(t[1]=n=>r.queryParam=n),size:"medium"},null,8,["options","modelValue"])])]),_:1},8,["active"]),r.showAdvancedSettings?c("",!0):(l(),m("a",{key:0,class:"advanced-settings-link",href:"#",onClick:t[2]||(t[2]=H(n=>r.showAdvancedSettings=!r.showAdvancedSettings,["prevent"]))},f(r.strings.advancedSettings),1))])]),d(b,{class:"advanced-settings",active:r.showAdvancedSettings},{default:g(()=>[d(D,{"edit-custom-rules":r.customRules},null,8,["edit-custom-rules"])]),_:1},8,["active"]),o("div",{class:L(["actions",{advanced:r.showAdvancedSettings}])},[d(R,{size:"medium",type:"blue",onClick:t[3]||(t[3]=n=>s.edit?i.saveChanges():i.addRedirects()),loading:r.addingRedirect,disabled:i.saveIsDisabled},{default:g(()=>[v(f(s.edit?r.strings.saveChanges:i.addRedirect),1)]),_:1},8,["loading","disabled"]),s.edit?(l(),h(R,{key:0,size:"medium",type:"gray",onClick:t[4]||(t[4]=n=>e.$emit("cancel",!0)),class:"cancel-edit-row"},{default:g(()=>[v(f(r.strings.cancel),1)]),_:1})):c("",!0)],2)],2)],2)}const Tt=w(Be,[["render",ut]]);export{Tt as C,Me as R,Ie as S};
