import{e as V,u as B,c as D}from"./links.574d4fd4.js";import{v as I}from"./isArrayLikeObject.59b68b05.js";import{B as x}from"./Checkbox.66c1e532.js";import{B as G}from"./RadioToggle.1b934958.js";import{C as P,a as W}from"./index.b1bbc091.js";import{C as E}from"./Card.e9a25031.js";import{C as K}from"./PostTypeOptions.ab839663.js";import{C as z}from"./ProBadge.4381f91b.js";import{C as H}from"./SettingsRow.3c16cab0.js";import{C as N}from"./Tooltip.72f8a160.js";import{G as R,a as Y}from"./Row.e7795c3e.js";import{x as p,c as y,C as s,l as n,o as l,a as r,t as i,k as c,b as d,D as h,F as q,L as F}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as j}from"./_plugin-vue_export-helper.58be9317.js";import"./default-i18n.3881921e.js";import"./Checkmark.68b20c77.js";import"./Caret.89e18339.js";import"./Slide.6b2090d0.js";import"./HighlightToggle.6d3cc7d8.js";import"./Radio.76a0cae5.js";const Q={setup(){return{licenseStore:V(),optionsStore:B(),rootStore:D()}},components:{BaseCheckbox:x,BaseRadioToggle:G,CoreAlert:P,CoreCard:E,CorePostTypeOptions:K,CoreProBadge:z,CoreSettingsRow:H,CoreTooltip:N,GridColumn:R,GridRow:Y,SvgCircleQuestionMark:W},data(){return{openAiKeyInvalid:!1,strings:{advanced:this.$t.__("Advanced Settings",this.$td),truSeo:this.$t.__("TruSEO Score & Content",this.$td),truSeoDescription:this.$t.__("Enable our TruSEO score to help you optimize your content for maximum traffic.",this.$td),headlineAnalyzer:this.$t.__("Headline Analyzer",this.$td),headlineAnalyzerDescription:this.$t.__("Enable our Headline Analyzer to help you write irresistible headlines and rank better in search results.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),postTypeColumns:this.$t.__("Post Type Columns",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.sprintf(this.$t.__("Select which Post Types you want to use the %1$s columns with.",this.$td),"AIOSEO"),usageTracking:this.$t.__("Usage Tracking",this.$td),adminBarMenu:this.$t.__("Admin Bar Menu",this.$td),adminBarMenuDescription:this.$t.sprintf(this.$t.__("This adds %1$s to the admin toolbar for easy access to your SEO settings.",this.$td),"AIOSEO"),dashboardWidgets:this.$t.__("Dashboard Widgets",this.$td),dashboardWidgetsDescription:this.$t.sprintf(this.$t.__("Select which %1$s widgets to display on the dashboard.",this.$td),"AIOSEO"),announcements:this.$t.__("Announcements",this.$td),announcementsDescription:this.$t.__("This allows you to hide plugin announcements and update details in the Notification Center.",this.$td),automaticUpdates:this.$t.__("Automatic Updates",this.$td),all:this.$t.__("All (recommended)",this.$td),allDescription:this.$t.__("You are getting the latest features, bugfixes, and security updates as they are released.",this.$td),minor:this.$t.__("Minor Only",this.$td),minorDescription:this.$t.__("You are getting bugfixes and security updates, but not major features.",this.$td),none:this.$t.__("None",this.$td),noneDescription:this.$t.__("You will need to manually update everything.",this.$td),usageTrackingDescription:this.$t.__("By allowing us to track usage data we can better help you as we will know which WordPress configurations, themes and plugins we should test.",this.$td),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf(this.$t.__("Admin Bar Menu is a %1$s feature. %2$s",this.$td),"PRO",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetsUpsell:this.$t.sprintf(this.$t.__("Dashboard Widgets is a %1$s feature. %2$s",this.$td),"PRO",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:this.$t.__("Taxonomy Columns",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.sprintf(this.$t.__("Select which Taxonomies you want to use the %1$s columns with.",this.$td),"AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf(this.$t.__("Taxonomy Columns is a %1$s feature. %2$s",this.$td),"PRO",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf(this.$t.__("Uninstall %1$s",this.$td),"AIOSEO"),uninstallAioseoDescription:this.$t.sprintf(this.$t.__("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.",this.$td),"AIOSEO"),headlineAnalyzerWarning:this.$t.sprintf(this.$t.__("The Headline Analyzer is only available in %1$s and up. %2$s",this.$td),"WordPress 5.2",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"updateWordPress",!0)),openAiKey:this.$t.__("OpenAI API Key",this.$td),openAiKeyDescription:this.$t.sprintf(this.$t.__("Enter an OpenAI API key in order to automatically generate SEO titles and meta descriptions for your pages. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"openAi",!0)),openAiKeyUpsell:this.$t.sprintf(this.$t.__("OpenAI Integration is a %1$s feature. %2$s",this.$td),"PRO",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"open-ai",!0)),openAiKeyInvalid:this.$t.__("The API key you have entered is invalid. Please check your API key and try again.",this.$td)}}},computed:{adminBarMenu:{get(){return this.licenseStore.isUnlicensed?!0:this.optionsStore.options.advanced.adminBarMenu},set(u){this.optionsStore.options.advanced.adminBarMenu=u}},widgets(){return[{key:"seoSetup",label:this.$t.__("SEO Setup Wizard",this.$td),tooltip:this.$t.__("Our SEO Setup Wizard dashboard widget helps you remember to finish setting up some initial crucial settings for your site to help you rank higher in search results. Once the setup wizard is completed this widget will automatically disappear.",this.$td)},{key:"seoOverview",label:this.$t.__("SEO Overview",this.$td),tooltip:this.$t.__("Our SEO Overview widget helps you determine which posts or pages you should focus on for content updates to help you rank higher in search results.",this.$td)},{key:"seoNews",label:this.$t.__("SEO News",this.$td),tooltip:this.$t.__("Our SEO News widget provides helpful links that enable you to get the most out of your SEO and help you continue to rank higher than your competitors in search results.",this.$td)}]}},methods:{versionCompare:I,updateDashboardWidgets(u,a){if(u){const e=this.optionsStore.options.advanced.dashboardWidgets;e.push(a.key),this.optionsStore.options.advanced.dashboardWidgets=e;return}const A=this.optionsStore.options.advanced.dashboardWidgets.findIndex(e=>e===a.key);A!==-1&&this.optionsStore.options.advanced.dashboardWidgets.splice(A,1)},isDashboardWidgetChecked(u){return this.licenseStore.isUnlicensed?!0:this.optionsStore.options.advanced.dashboardWidgets.includes(u.key)},validateOpenAiKey(){this.optionsStore.options.advanced.openAiKey&&this.optionsStore.options.advanced.openAiKey.match(/^sk-[a-zA-Z0-9]{48}$/)===null?this.openAiKeyInvalid=!0:this.openAiKeyInvalid=!1}},beforeMount(){this.validateOpenAiKey()}},Z={class:"aioseo-advanced"},J={class:"aioseo-description"},X={class:"aioseo-description"},ee=["innerHTML"],te={class:"aioseo-description"},ne=["innerHTML"],se={class:"aioseo-description"},oe=["innerHTML"],ie=["innerHTML"],ae={class:"aioseo-description"},le=["innerHTML"],re={class:"aioseo-description"},de=["innerHTML"],ce={class:"aioseo-description"},ue={class:"aioseo-description"},pe={key:0},he={key:1},me={key:2},_e=["innerHTML"],ge={class:"aioseo-description"},ye=["innerHTML"],Se=["innerHTML"],ve={class:"aioseo-description"};function fe(u,a,A,e,t,_){const S=p("base-toggle"),m=p("core-settings-row"),g=p("core-alert"),v=p("base-checkbox"),b=p("core-post-type-options"),f=p("core-pro-badge"),k=p("base-radio-toggle"),T=p("svg-circle-question-mark"),$=p("core-tooltip"),L=p("grid-column"),O=p("grid-row"),U=p("base-input"),w=p("core-card");return l(),y("div",Z,[s(w,{slug:"advanced","header-text":t.strings.advanced},{default:n(()=>[s(m,{name:t.strings.truSeo},{content:n(()=>[s(S,{modelValue:e.optionsStore.options.advanced.truSeo,"onUpdate:modelValue":a[0]||(a[0]=o=>e.optionsStore.options.advanced.truSeo=o)},null,8,["modelValue"]),r("div",J,i(t.strings.truSeoDescription),1)]),_:1},8,["name"]),s(m,{name:t.strings.headlineAnalyzer},{content:n(()=>[s(S,{modelValue:e.optionsStore.options.advanced.headlineAnalyzer,"onUpdate:modelValue":a[1]||(a[1]=o=>e.optionsStore.options.advanced.headlineAnalyzer=o),disabled:_.versionCompare(e.rootStore.aioseo.wpVersion,"5.2","<")},null,8,["modelValue","disabled"]),r("div",X,i(t.strings.headlineAnalyzerDescription),1),_.versionCompare(e.rootStore.aioseo.wpVersion,"5.2","<")?(l(),c(g,{key:0,class:"warning",type:"yellow"},{default:n(()=>[r("div",{innerHTML:t.strings.headlineAnalyzerWarning},null,8,ee)]),_:1})):d("",!0)]),_:1},8,["name"]),s(m,{name:t.strings.postTypeColumns},{content:n(()=>[s(v,{size:"medium",modelValue:e.optionsStore.options.advanced.postTypes.all,"onUpdate:modelValue":a[2]||(a[2]=o=>e.optionsStore.options.advanced.postTypes.all=o)},{default:n(()=>[h(i(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.optionsStore.options.advanced.postTypes.all?d("",!0):(l(),c(b,{key:0,options:e.optionsStore.options.advanced,type:"postTypes"},null,8,["options"])),r("div",te,[h(i(t.strings.selectPostTypes)+" ",1),r("span",{innerHTML:u.$links.getDocLink(u.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0)},null,8,ne)])]),_:1},8,["name"]),s(m,null,{name:n(()=>[h(i(t.strings.taxonomyColumns)+" ",1),e.licenseStore.isUnlicensed?(l(),c(f,{key:0})):d("",!0)]),content:n(()=>[e.licenseStore.isUnlicensed?(l(),c(v,{key:0,disabled:"",size:"medium",modelValue:!0},{default:n(()=>[h(i(t.strings.includeAllTaxonomies),1)]),_:1})):d("",!0),e.licenseStore.isUnlicensed?d("",!0):(l(),c(v,{key:1,size:"medium",modelValue:e.optionsStore.options.advanced.taxonomies.all,"onUpdate:modelValue":a[3]||(a[3]=o=>e.optionsStore.options.advanced.taxonomies.all=o)},{default:n(()=>[h(i(t.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"])),!e.optionsStore.options.advanced.taxonomies.all&&!e.licenseStore.isUnlicensed?(l(),c(b,{key:2,options:e.optionsStore.options.advanced,type:"taxonomies"},null,8,["options"])):d("",!0),r("div",se,[h(i(t.strings.selectTaxonomies)+" ",1),r("span",{innerHTML:u.$links.getDocLink(u.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0)},null,8,oe)]),e.licenseStore.isUnlicensed?(l(),c(g,{key:3,class:"inline-upsell",type:"blue"},{default:n(()=>[r("div",{innerHTML:t.strings.taxonomyColumnsUpsell},null,8,ie)]),_:1})):d("",!0)]),_:1}),s(m,null,{name:n(()=>[h(i(t.strings.adminBarMenu)+" ",1),e.licenseStore.isUnlicensed?(l(),c(f,{key:0})):d("",!0)]),content:n(()=>[s(k,{disabled:e.licenseStore.isUnlicensed,modelValue:_.adminBarMenu,"onUpdate:modelValue":a[4]||(a[4]=o=>_.adminBarMenu=o),name:"adminBarMenu",options:[{label:u.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:u.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["disabled","modelValue","options"]),r("div",ae,i(t.strings.adminBarMenuDescription),1),e.licenseStore.isUnlicensed?(l(),c(g,{key:0,class:"inline-upsell",type:"blue"},{default:n(()=>[r("div",{innerHTML:t.strings.adminBarMenuUpsell},null,8,le)]),_:1})):d("",!0)]),_:1}),s(m,null,{name:n(()=>[h(i(t.strings.dashboardWidgets)+" ",1),e.licenseStore.isUnlicensed?(l(),c(f,{key:0})):d("",!0)]),content:n(()=>[s(O,null,{default:n(()=>[(l(!0),y(q,null,F(_.widgets,(o,C)=>(l(),c(L,{key:C},{default:n(()=>[s(v,{size:"medium",disabled:e.licenseStore.isUnlicensed,modelValue:_.isDashboardWidgetChecked(o),"onUpdate:modelValue":M=>_.updateDashboardWidgets(M,o)},{default:n(()=>[h(i(o.label)+" ",1),s($,null,{tooltip:n(()=>[h(i(o.tooltip),1)]),default:n(()=>[s(T)]),_:2},1024)]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1}),r("div",re,i(t.strings.dashboardWidgetsDescription),1),e.licenseStore.isUnlicensed?(l(),c(g,{key:0,class:"inline-upsell",type:"blue"},{default:n(()=>[r("div",{innerHTML:t.strings.dashboardWidgetsUpsell},null,8,de)]),_:1})):d("",!0)]),_:1}),s(m,{name:t.strings.announcements},{content:n(()=>[s(k,{modelValue:e.optionsStore.options.advanced.announcements,"onUpdate:modelValue":a[5]||(a[5]=o=>e.optionsStore.options.advanced.announcements=o),name:"announcements",options:[{label:u.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:u.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["modelValue","options"]),r("div",ce,i(t.strings.announcementsDescription),1)]),_:1},8,["name"]),s(m,null,{name:n(()=>[h(i(t.strings.automaticUpdates),1)]),content:n(()=>[s(k,{modelValue:e.optionsStore.options.advanced.autoUpdates,"onUpdate:modelValue":a[6]||(a[6]=o=>e.optionsStore.options.advanced.autoUpdates=o),name:"autoUpdates",options:[{label:t.strings.all,value:"all"},{label:t.strings.minor,value:"minor"},{label:t.strings.none,value:"none",activeClass:"dark"}]},null,8,["modelValue","options"]),r("div",ue,[e.optionsStore.options.advanced.autoUpdates==="all"?(l(),y("span",pe,i(t.strings.allDescription),1)):d("",!0),e.optionsStore.options.advanced.autoUpdates==="minor"?(l(),y("span",he,i(t.strings.minorDescription),1)):d("",!0),e.optionsStore.options.advanced.autoUpdates==="none"?(l(),y("span",me,i(t.strings.noneDescription),1)):d("",!0)])]),_:1}),u.$isPro?d("",!0):(l(),c(m,{key:0},{name:n(()=>[h(i(t.strings.usageTracking)+" ",1),s($,null,{tooltip:n(()=>[r("div",{innerHTML:t.strings.usageTrackingTooltip},null,8,_e)]),default:n(()=>[s(T)]),_:1})]),content:n(()=>[s(S,{modelValue:e.optionsStore.options.advanced.usageTracking,"onUpdate:modelValue":a[7]||(a[7]=o=>e.optionsStore.options.advanced.usageTracking=o)},null,8,["modelValue"]),r("div",ge,i(t.strings.usageTrackingDescription),1)]),_:1})),s(m,{id:"aioseo-open-ai-api-key",name:t.strings.openAiKey},{name:n(()=>[h(i(t.strings.openAiKey)+" ",1),e.licenseStore.isUnlicensed?(l(),c(f,{key:0})):d("",!0)]),content:n(()=>[s(U,{class:"openAiKey",type:"text",size:"medium",modelValue:e.optionsStore.options.advanced.openAiKey,"onUpdate:modelValue":a[8]||(a[8]=o=>e.optionsStore.options.advanced.openAiKey=o),disabled:e.licenseStore.isUnlicensed,onBlur:_.validateOpenAiKey},null,8,["modelValue","disabled","onBlur"]),r("div",{class:"aioseo-description",innerHTML:t.strings.openAiKeyDescription},null,8,ye),!e.licenseStore.isUnlicensed&&e.optionsStore.options.advanced.openAiKey&&t.openAiKeyInvalid?(l(),c(g,{key:0,class:"inline-upsell",type:"red"},{default:n(()=>[r("div",null,i(t.strings.openAiKeyInvalid),1)]),_:1})):d("",!0),e.licenseStore.isUnlicensed?(l(),c(g,{key:1,class:"inline-upsell",type:"blue"},{default:n(()=>[r("div",{innerHTML:t.strings.openAiKeyUpsell},null,8,Se)]),_:1})):d("",!0)]),_:1},8,["name"]),s(m,{name:t.strings.uninstallAioseo},{content:n(()=>[s(S,{modelValue:e.optionsStore.options.advanced.uninstall,"onUpdate:modelValue":a[9]||(a[9]=o=>e.optionsStore.options.advanced.uninstall=o)},null,8,["modelValue"]),r("div",ve,i(t.strings.uninstallAioseoDescription),1)]),_:1},8,["name"])]),_:1},8,["header-text"])])}const Ee=j(Q,[["render",fe]]);export{Ee as default};
