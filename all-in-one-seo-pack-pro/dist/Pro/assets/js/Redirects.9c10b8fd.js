import{i as A,c as V,j as z,e as G}from"./links.574d4fd4.js";import{J as j}from"./JsonValues.870a4901.js";import{C as I,W}from"./Table.62305440.js";import{s as L}from"./strings.81a9a134.js";import{C as x,R as Q}from"./Index.4f7b4214.js";import{C as J,a as K}from"./index.b1bbc091.js";import{C as X}from"./Index.815fe32c.js";import{C as Z}from"./Tooltip.72f8a160.js";import{b as ee,c as te,S as se}from"./Caret.89e18339.js";import{S as re}from"./Information.8541dc5f.js";import{x as u,o as d,c as h,k as y,l,a as r,H as S,t as i,D as _,b as g,C as n,F as U,L as B,q as oe,I as E}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as w}from"./_plugin-vue_export-helper.58be9317.js";import{A as ie}from"./AddonConditions.9aacd850.js";import{C as le}from"./Blur.7f36813b.js";import{C as ne}from"./Card.e9a25031.js";import{C as de}from"./Index.b732d651.js";import{R as ce}from"./RequiredPlans.6ee9b196.js";const ae={setup(){const t=A();return{redirectsStore:t,rootStore:V(),settingsStore:z(),fetchData:t.fetchRedirects}},components:{CoreAddRedirection:x,CoreAlert:J,CoreModal:X,CoreTooltip:Z,CoreWpTable:I,SvgCircleCheck:ee,SvgCircleClose:te,SvgCircleInformation:re,SvgCircleQuestionMark:K,SvgClose:se},mixins:[j,W,Q],props:{showBulkActions:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},disableSource:{type:Boolean,default(){return!1}},excludeColumns:Array},data(){return{tableId:"aioseo-redirects-wp-table",queryUrls:[],deletingRow:!1,showDeleteModal:!1,shouldDeleteRow:null,changeItemsPerPageSlug:"redirects",strings:{searchUrls:this.$t.__("Search URLs",this.$tdPro),edit:this.$t.__("Edit",this.$tdPro),checkRedirect:this.$t.__("Check Redirect",this.$tdPro),delete:this.$t.__("Delete",this.$tdPro),areYouSureDeleteRedirect:this.$t.__("Are you sure you want to delete this redirect?",this.$tdPro),areYouSureDeleteRedirects:this.$t.__("Are you sure you want to delete these redirects?",this.$tdPro),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$tdPro),yesDeleteRedirect:this.$t.__("Yes, I want to delete this redirect",this.$tdPro),yesDeleteRedirects:this.$t.__("Yes, I want to delete these redirects",this.$tdPro),noChangedMind:this.$t.__("No, I changed my mind",this.$tdPro),rules:this.$t.__("Rules",this.$tdPro),customRules:this.$t.__("Custom Rules",this.$tdPro),regex:this.$t.__("Regex",this.$tdPro),redirectTest:this.$t.__("Check redirect for",this.$tdPro),summary:this.$t.__("Summary",this.$tdPro),errors:this.$t.__("Errors",this.$tdPro),responseCode:this.$t.__("Response Code",this.$tdPro),sourceUrl:this.$t.__("Source URL",this.$tdPro),targetUrl:this.$t.__("Target URL",this.$tdPro),xRedirectBy:this.$t.__("Redirected By",this.$tdPro),customUrl:this.$t.__("Custom URL",this.$tdPro),testUrl:this.$t.__("Test Redirect",this.$tdPro),redirectResultOk:this.$t.__("Woohoo! Your redirect worked perfectly!",this.$tdPro)+" 🎉",redirectResultError:this.$t.__("Whoops! Your URL failed to redirect properly.",this.$tdPro)+" 🤔",expected:this.$t.__("Expected",this.$tdPro),result:this.$t.__("Result",this.$tdPro),regexNeedsUrl:this.$t.sprintf(this.$t.__("You are using %1$sRegex%2$s for this redirect so you will need to manually add a URL to test.",this.$tdPro),"<strong>","</strong>")},bulkOptions:[{label:this.$t.__("Enable",this.$tdPro),value:"enable"},{label:this.$t.__("Disable",this.$tdPro),value:"disable"},{label:this.$t.__("Reset Hits",this.$tdPro),value:"reset-hits"},{label:this.$t.__("Delete",this.$tdPro),value:"delete"}],customRuleInfo:null,redirectTestInfo:null,redirectTestResult:null,redirectTestLoading:!1,redirectTestUrl:""}},computed:{areYouSureDeleteRedirect(){return Array.isArray(this.shouldDeleteRow)?this.strings.areYouSureDeleteRedirects:this.strings.areYouSureDeleteRedirect},yesDeleteRedirect(){return Array.isArray(this.shouldDeleteRow)?this.strings.yesDeleteRedirects:this.strings.yesDeleteRedirect},columns(){const t=[{slug:"source_url",label:this.$t.__("Source URL",this.$tdPro),sortable:!0,sortDir:this.orderBy==="source_url"?this.orderDir:"asc",sorted:this.orderBy==="source_url"},{slug:"target_url",label:this.$t.__("Target URL",this.$tdPro),sortable:!0,sortDir:this.orderBy==="target_url"?this.orderDir:"asc",sorted:this.orderBy==="target_url"},{slug:"hits",label:this.$t.__("Hits",this.$tdPro),width:"97px",sortable:!0,sortDir:this.orderBy==="hits"?this.orderDir:"asc",sorted:this.orderBy==="hits"},{slug:"type",label:this.$t.__("Type",this.$tdPro),width:"100px",sortable:!0,sortDir:this.orderBy==="type"?this.orderDir:"asc",sorted:this.orderBy==="type"},{slug:"group",label:this.$t.__("Group",this.$tdPro),width:"150px",sortable:!0,sortDir:this.orderBy==="group"?this.orderDir:"asc",sorted:this.orderBy==="group"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"85px",sortable:!0,sortDir:this.orderBy==="enabled"?this.orderDir:"asc",sorted:this.orderBy==="enabled"},{slug:"actions",label:"",width:"40px"}];if(this.redirectsStore.options.main.method==="server"){const o=t.findIndex(c=>c.slug==="hits");o!==-1&&t.splice(o,1)}return this.excludeColumns&&this.excludeColumns.length?t.filter(o=>!this.excludeColumns.find(c=>c===o.slug)):t},additionalFilters(){return[{label:this.$t.__("Filter by Group",this.$tdPro),name:"group",options:[{label:this.$t.__("All Groups",this.$tdPro),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]},getRows(){return this.redirectsStore.rows.map(t=>(t.target_url=t.target_url||"-",t))}},methods:{toggleInput(t,o){this.wpTableLoading=!0,this.redirectsStore.bulk({action:o?"disable":"enable",rowIds:[t.id]}).then(()=>this.processFetchTableData()).then(()=>this.wpTableLoading=!1).then(()=>window.aioseoBus.$emit("redirect-updated"))},processBulkAction({action:t,selectedRows:o}){if(o.length){if(t==="delete"){this.shouldDeleteRow=o,this.showDeleteModal=!0;return}this.wpTableLoading=!0,this.redirectsStore.bulk({action:t,rowIds:o}).then(()=>this.processFetchTableData()).then(()=>this.wpTableLoading=!1).then(()=>window.aioseoBus.$emit("redirect-updated"))}},getColumnLabel(t){return t===0?this.$t.__("Pass through",this.$tdPro):t},maybeDeleteRow(t){const o=this.redirectsStore.rows.find((c,m)=>m===t);o&&(this.showDeleteModal=!0,this.shouldDeleteRow=o.id)},processDeleteRow(){if(this.deletingRow=!0,Array.isArray(this.shouldDeleteRow))return this.redirectsStore.bulk({action:"delete",rowIds:this.shouldDeleteRow}).then(()=>{this.deletingRow=!1,this.showDeleteModal=!1,this.shouldDeleteRow=null,this.refreshTable()}).then(()=>window.aioseoBus.$emit("redirect-updated"));this.redirectsStore.delete(this.shouldDeleteRow).then(()=>{this.deletingRow=!1,this.showDeleteModal=!1,this.shouldDeleteRow=null,this.refreshTable()})},showCustomRuleInfo(t){this.customRuleInfo=t.custom_rules.map(o=>{switch(o.type){case"role":o.value=o.value.map(c=>c.charAt(0).toUpperCase()+c.slice(1));break}return o})},isObject(t){return typeof t=="object"},showRedirectTest(t){this.redirectTestResult=null,this.redirectTestUrl=t.regex?"":t.source_url,t.regex||this.redirectTest(t.id),this.redirectTestInfo=t},redirectTest(t){this.redirectTestLoading=!0,this.redirectTestResult=null,this.redirectsStore.test({id:t,payload:{sourceUrl:this.redirectTestUrl}}).then(o=>{this.redirectTestLoading=!1,this.redirectTestResult=o.body}).catch(()=>{this.redirectTestLoading=!1})},customUrlDescription(t){const o=L(t.source_url.replace(this.rootStore.aioseo.urls.mainSiteUrl,""));return this.$t.sprintf(this.$t.__("You can test redirects with a URL that includes your domain name ( %1$s ) or just the path ( %2$s )",this.$tdPro),this.rootStore.aioseo.urls.mainSiteUrl+o,o)},addedRedirectRefresh(){this.orderBy=null,this.orderDir="asc",this.refreshTable()},sanitizeString:L},mounted(){window.aioseoBus.$on("added-redirect",this.addedRedirectRefresh),this.redirectsStore.lateRefresh.redirects&&(this.refreshTable(),this.redirectsStore.setLateRefresh({value:!1,type:"redirects"}))},beforeUnmount(){window.aioseoBus.$off("added-redirect",this.addedRedirectRefresh)}},ue={class:"aioseo-redirects-table"},he=["onClick"],_e={class:"row-actions"},ge={class:"edit"},pe=["onClick"],me={key:0,class:"test"},Re=["onClick"],be={class:"trash"},fe=["onClick"],ye={style:{"text-align":"right"}},Ce={key:0},Se={class:"aioseo-modal-body"},ve=["innerHTML"],Te={class:"aioseo-modal-body"},ke={class:"rule"},we={key:0},$e={key:1},Pe={key:0,class:"regex"},De={class:"title"},Ue={class:"source"},Be={class:"aioseo-modal-body"},Le={class:"custom-url"},Ae=["innerHTML"],Ie={class:"label"},xe={class:"custom-url-input"},Ee={key:0,class:"redirect-results"},Me={class:"result"},Fe={class:"summary"},Oe={class:"label"},He={"aria-label":"Redirect Check Results",class:"redirects-options-table small"},Ye=r("td",null,null,-1),Ne={class:"even"},qe={key:0},Ve={key:1,class:"even"},ze=r("td",null,"AIOSEO",-1),Ge={key:0,class:"errors"},je={class:"label"},We=["innerHTML"];function Qe(t,o,c,m,e,a){const R=u("base-toggle"),b=u("core-add-redirection"),C=u("svg-circle-information"),v=u("core-tooltip"),F=u("core-wp-table"),O=u("svg-close"),$=u("base-button"),P=u("core-modal"),T=u("core-alert"),H=u("svg-circle-question-mark"),Y=u("base-input"),N=u("svg-circle-check"),q=u("svg-circle-close");return d(),h("div",ue,[(d(),y(F,{ref:"table",id:e.tableId,"additional-filters":a.additionalFilters,"bulk-options":e.bulkOptions,columns:a.columns,filters:m.redirectsStore.filters,"initial-items-per-page":m.settingsStore.settings.tablePagination.redirects,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,key:t.wpTableKey,loading:t.wpTableLoading,rows:a.getRows,"search-label":e.strings.searchUrls,"selected-filters":m.redirectsStore.selectedFilters,"show-bulk-actions":c.showBulkActions,"show-header":c.showHeader,"show-table-footer":c.showTableFooter,totals:m.redirectsStore.totals.main,"show-items-per-page":"",onFilterTable:t.processFilterTable,onPaginate:t.processPagination,onProcessAdditionalFilters:t.processAdditionalFilters,onProcessBulkAction:a.processBulkAction,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{source_url:l(({row:s,index:p,column:f,editRow:k})=>[r("strong",null,[r("a",{class:"edit-link",href:"#",onClick:S(D=>k(p),["prevent"])},i(f),9,he)]),r("div",_e,[r("span",ge,[r("a",{href:"#",onClick:S(D=>k(p),["prevent"])},i(e.strings.edit),9,pe),_(" | ")]),s.enabled&&!t.redirectHasUnPublishedPost(s)?(d(),h("span",me,[r("a",{href:"#",onClick:S(D=>a.showRedirectTest(s),["prevent"])},i(e.strings.checkRedirect),9,Re),_(" | ")])):g("",!0),r("span",be,[r("a",{class:"submitdelete",href:"#",onClick:S(D=>a.maybeDeleteRow(p),["prevent"])},i(e.strings.delete),9,fe)])])]),type:l(({column:s})=>[_(i(a.getColumnLabel(s)),1)]),group:l(({row:s})=>[_(i(s.groupName),1)]),enabled:l(({column:s,row:p})=>[r("div",ye,[n(R,{modelValue:s,"onUpdate:modelValue":f=>a.toggleInput(p,s)},null,8,["modelValue","onUpdate:modelValue"])])]),"edit-row":l(({row:s,editRow:p})=>[n(b,{edit:"",onCancel:f=>p(null),onAddedRedirect:f=>p(null),url:{id:s.id,url:s.source_url,regex:s.regex,ignoreSlash:s.ignore_slash,ignoreCase:s.ignore_case,showOptions:!0,errors:[],warnings:[]},target:s.target_url,type:s.type,query:s.query_param,rules:s.custom_rules,disableSource:c.disableSource,"post-id":s.post_id,"post-status":s.postStatus},null,8,["onCancel","onAddedRedirect","url","target","type","query","rules","disableSource","post-id","post-status"])]),actions:l(({row:s})=>[s.custom_rules&&0<s.custom_rules.length?(d(),h("span",Ce,[n(v,{type:"action"},{tooltip:l(()=>[_(i(e.strings.rules),1)]),default:l(()=>[n(C,{class:"log-info",onClick:p=>a.showCustomRuleInfo(s)},null,8,["onClick"])]),_:2},1024)])):g("",!0)]),_:1},8,["id","additional-filters","bulk-options","columns","filters","initial-items-per-page","initial-page-number","initial-search-term","loading","rows","search-label","selected-filters","show-bulk-actions","show-header","show-table-footer","totals","onFilterTable","onPaginate","onProcessAdditionalFilters","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),n(P,{show:e.showDeleteModal,classes:["aioseo-redirects-test-modal","aioseo-redirects","delete-redirect"],"no-header":"",onClose:o[3]||(o[3]=s=>e.showDeleteModal=!1)},{body:l(()=>[r("div",Se,[r("button",{class:"close",onClick:o[1]||(o[1]=S(s=>e.showDeleteModal=!1,["stop"]))},[n(O,{onClick:o[0]||(o[0]=s=>e.showDeleteModal=!1)})]),r("h3",null,i(a.areYouSureDeleteRedirect),1),r("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,ve),n($,{type:"blue",size:"medium",onClick:a.processDeleteRow,loading:e.deletingRow},{default:l(()=>[_(i(a.yesDeleteRedirect),1)]),_:1},8,["onClick","loading"]),n($,{type:"gray",size:"medium",onClick:o[2]||(o[2]=s=>e.showDeleteModal=!1)},{default:l(()=>[_(i(e.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"]),n(P,{show:e.customRuleInfo,classes:["aioseo-redirects","custom-rule-info"],onClose:o[4]||(o[4]=s=>e.customRuleInfo=null)},{headerTitle:l(()=>[_(i(e.strings.customRules),1)]),body:l(()=>[r("div",Te,[(d(!0),h(U,null,B(e.customRuleInfo,(s,p)=>(d(),h("div",{key:p},[r("div",ke,[r("strong",null,i(t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[s.type])+":",1),_(" "+i(typeof s.value!="object"&&!s.key?t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[s.value]||s.value:"")+" ",1),a.isObject(s.value)?(d(),h("ul",we,[(d(!0),h(U,null,B(s.value,(f,k)=>(d(),h("li",{key:k},i(t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[f]||f),1))),128))])):g("",!0),s.key?(d(),h("ul",$e,[r("li",null,[r("strong",null,i(s.key)+":",1),_(" "+i(s.value),1)])])):g("",!0)]),s.regex?(d(),h("div",Pe,[n(R,{modelValue:s.regex,disabled:!0},{default:l(()=>[_(i(e.strings.regex),1)]),_:2},1032,["modelValue"])])):g("",!0)]))),128))])]),_:1},8,["show"]),n(P,{show:e.redirectTestInfo,classes:["aioseo-redirects-test-modal","aioseo-redirects","redirect-test"],onClose:o[7]||(o[7]=s=>e.redirectTestInfo=null),"allow-overflow":""},{headerTitle:l(()=>[r("div",De,i(e.strings.redirectTest)+":",1),n(v,null,{tooltip:l(()=>[r("div",null,i(a.sanitizeString(e.redirectTestInfo.source_url)),1)]),default:l(()=>[r("div",Ue,i(a.sanitizeString(e.redirectTestInfo.source_url)),1)]),_:1})]),body:l(()=>[r("div",Be,[r("div",Le,[e.redirectTestInfo.regex?(d(),y(T,{key:0,type:"blue",size:"medium",class:"alert-regex"},{default:l(()=>[n(C),r("span",{innerHTML:e.strings.regexNeedsUrl},null,8,Ae)]),_:1})):g("",!0),r("div",Ie,[_(i(e.strings.customUrl)+" ",1),n(v,null,{tooltip:l(()=>[_(i(a.customUrlDescription(e.redirectTestInfo)),1)]),default:l(()=>[n(H)]),_:1})]),r("div",xe,[n(Y,{size:"medium",modelValue:e.redirectTestUrl,"onUpdate:modelValue":o[5]||(o[5]=s=>e.redirectTestUrl=s),disabled:e.redirectTestLoading},null,8,["modelValue","disabled"]),n($,{type:"green",size:"medium",loading:e.redirectTestLoading,onClick:o[6]||(o[6]=S(s=>a.redirectTest(e.redirectTestInfo.id),["prevent"]))},{default:l(()=>[_(i(e.strings.testUrl),1)]),_:1},8,["loading"])])]),e.redirectTestResult?(d(),h("div",Ee,[r("div",Me,[e.redirectTestResult.errors.length===0?(d(),y(T,{key:0,type:"green",size:"medium"},{default:l(()=>[n(N),_(" "+i(e.strings.redirectResultOk),1)]),_:1})):g("",!0),0<e.redirectTestResult.errors.length?(d(),y(T,{key:1,type:"red",size:"medium"},{default:l(()=>[n(q),_(" "+i(e.strings.redirectResultError),1)]),_:1})):g("",!0)]),r("div",Fe,[r("div",Oe,i(e.strings.summary),1),r("table",He,[r("thead",null,[r("tr",null,[Ye,r("td",null,i(e.strings.expected),1),r("td",null,i(e.strings.result),1)])]),r("tbody",null,[r("tr",Ne,[r("td",null,i(e.strings.responseCode)+":",1),r("td",null,i(e.redirectTestInfo.type),1),r("td",null,i(e.redirectTestResult.redirect.responseCode),1)]),e.redirectTestResult.redirect.location?(d(),h("tr",qe,[r("td",null,i(e.strings.targetUrl)+":",1),r("td",null,i(e.redirectTestResult.redirect.targetUrl),1),r("td",null,i(e.redirectTestResult.redirect.location),1)])):g("",!0),e.redirectTestResult.redirect.xRedirectBy?(d(),h("tr",Ve,[r("td",null,i(e.strings.xRedirectBy)+":",1),ze,r("td",null,i(e.redirectTestResult.redirect.xRedirectBy),1)])):g("",!0)])])]),0<e.redirectTestResult.errors.length?(d(),h("div",Ge,[r("div",je,i(e.strings.errors),1),n(T,{type:"red",size:"medium"},{default:l(()=>[r("ul",null,[(d(!0),h(U,null,B(e.redirectTestResult.errors,(s,p)=>(d(),h("li",{key:p},[r("span",{innerHTML:s},null,8,We)]))),128))])]),_:1})])):g("",!0)])):g("",!0)])]),_:1},8,["show"])])}const yt=w(ae,[["render",Qe]]),Je={components:{CoreAddRedirection:x,CoreBlur:le,CoreCard:ne,CoreWpTable:I},props:{noCoreCard:Boolean},data(){return{strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td),searchUrls:this.$t.__("Search URLs",this.$td)},bulkOptions:[{label:"",value:""}]}},computed:{columns(){return[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"}]},additionalFilters(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]}}},Ke={class:"aioseo-redirects-blur"};function Xe(t,o,c,m,e,a){const R=u("core-add-redirection"),b=u("core-blur"),C=u("core-card"),v=u("core-wp-table");return d(),h("div",Ke,[c.noCoreCard?g("",!0):(d(),y(C,{key:0,slug:"addNewRedirection","header-text":e.strings.addNewRedirection,noSlide:!0},{default:l(()=>[n(b,null,{default:l(()=>[n(R,{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})]),_:1},8,["header-text"])),c.noCoreCard?(d(),y(b,{key:1},{default:l(()=>[n(R,{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})):g("",!0),n(b,null,{default:l(()=>[n(v,{filters:[],totals:{total:0,pages:0,page:1},columns:a.columns,rows:[],"search-label":e.strings.searchUrls,"bulk-options":e.bulkOptions,"additional-filters":a.additionalFilters},null,8,["columns","search-label","bulk-options","additional-filters"])]),_:1})])}const M=w(Je,[["render",Xe]]),Ze={setup(){return{redirectsStore:A()}},mixins:[ie],components:{Blur:M},props:{noCoreCard:Boolean},data(){return{addonSlug:"aioseo-redirects",strings:{ctaHeader:this.$t.__("Enable Redirects on Your Site",this.$tdPro),serverRedirects:this.$t.__("Fast Server Redirects",this.$tdPro),automaticRedirects:this.$t.__("Automatic Redirects",this.$tdPro),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$tdPro),monitoring404:this.$t.__("404 Monitoring",this.$tdPro),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$tdPro),siteAliases:this.$t.__("Site Aliases",this.$tdPro),ctaDescription:this.$t.__("Our Redirection Manager lets you easily create and manage redirects for broken links to avoid confusing search engines and users and prevents losing backlinks.",this.$tdPro)}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Redirects",this.$tdPro):this.$t.__("Activate Redirects",this.$tdPro)}}};function et(t,o,c,m,e,a){const R=u("blur");return d(),h("div",{class:E({"aioseo-redirects":!0,"core-card":!c.noCoreCard})},[n(R,{noCoreCard:c.noCoreCard},null,8,["noCoreCard"]),(d(),y(oe(t.ctaComponent),{"addon-slug":e.addonSlug,"cta-header":e.strings.ctaHeader,"cta-description":e.strings.ctaDescription,"cta-button-text":a.ctaButtonText,"learn-more-link":t.$links.getDocUrl("redirects"),"feature-list":[e.strings.serverRedirects,e.strings.automaticRedirects,e.strings.redirectMonitoring,e.strings.monitoring404,e.strings.fullSiteRedirects,e.strings.siteAliases],"post-activation-promises":[m.redirectsStore.getRedirectOptions],onAddonActivated:o[0]||(o[0]=b=>m.redirectsStore.setLateRefresh({value:!0}))},null,40,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-link","feature-list","post-activation-promises"]))],2)}const Ct=w(Ze,[["render",et]]),tt={setup(){return{licenseStore:G()}},components:{Blur:M,Cta:de,RequiredPlans:ce},props:{noCoreCard:Boolean,parentComponentContext:String},data(){return{strings:{ctaButtonText:this.$t.__("Unlock Redirects",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Redirects is a %1$s Feature",this.$td),"PRO"),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),redirectsDescription:this.$t.__("Our Redirection Manager lets you easily create and manage redirects for broken links to avoid confusing search engines and users and prevents losing backlinks.",this.$td)}}}};function st(t,o,c,m,e,a){const R=u("blur"),b=u("required-plans"),C=u("cta");return d(),h("div",{class:E({"aioseo-redirects":!0,"core-card":!c.noCoreCard})},[n(R,{noCoreCard:c.noCoreCard},null,8,["noCoreCard"]),n(C,{"cta-link":t.$links.getPricingUrl("redirects","redirects-upsell",c.parentComponentContext?c.parentComponentContext:null),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("redirects",c.parentComponentContext?c.parentComponentContext:null,t.$isPro?"pricing":"liteUpgrade"),"feature-list":[e.strings.serverRedirects,e.strings.automaticRedirects,e.strings.redirectMonitoring,e.strings.monitoring404,e.strings.fullSiteRedirects,e.strings.siteAliases],"hide-bonus":!m.licenseStore.isUnlicensed},{"header-text":l(()=>[_(i(e.strings.ctaHeader),1)]),description:l(()=>[n(b,{addon:"aioseo-redirects"}),_(" "+i(e.strings.redirectsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])],2)}const St=w(tt,[["render",st]]);export{Ct as C,St as L,yt as R};
