import{b as H,e as P,o as b,c as N}from"./links.574d4fd4.js";import{a as q}from"./addons.f4a19c9a.js";import{g as Z}from"./params.f0608262.js";import{U as B}from"./Url.e3c0d5de.js";import{C as I}from"./index.b1bbc091.js";import{C as T,S as L}from"./Caret.89e18339.js";import{C as Y}from"./Index.815fe32c.js";import{C as F}from"./Tooltip.72f8a160.js";import{x as c,o,c as a,a as i,m as k,t,b as r,k as f,l,D as _,I as C,C as h,H as y}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as v}from"./_plugin-vue_export-helper.58be9317.js";const x={setup(){return{addonsStore:H(),licenseStore:P(),pluginsStore:b(),rootStore:N()}},mixins:[B],components:{CoreAlert:I,CoreLoader:T,CoreModal:Y,CoreTooltip:F,SvgClose:L},props:{feature:{type:Object,required:!0},canActivate:{type:Boolean,default(){return!0}},canManage:{type:Boolean,default(){return!1}},staticCard:Boolean},data(){return{addons:q,addon:{},showNetworkModal:!1,failed:!1,loading:!1,featureUpgrading:!1,strings:{version:this.$t.__("Version",this.$td),updateToVersion:this.$t.__("Update to version",this.$td),activated:this.$t.__("Activated",this.$td),deactivated:this.$t.__("Deactivated",this.$td),notInstalled:this.$t.__("Not Installed",this.$td),upgradeToPro:this.$t.__("Upgrade to Pro",this.$td),upgradeYourPlan:this.$t.__("Upgrade Your Plan",this.$td),updateFeature:this.$t.__("Update Addon",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),manage:this.$t.__("Manage",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("An update is required for this addon to continue to work with %1$s %2$s.",this.$td),"AIOSEO","Pro"),areYouSureNetworkChange:this.$t.__("This is a network-wide change.",this.$td),yesProcessNetworkChange:this.$t.__("Yes, process this network change",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)}}},computed:{networkChangeMessage(){return this.addon.isActive?this.$t.__("Are you sure you want to activate this addon across the network?",this.$td):this.$t.__("Are you sure you want to deactivate this addon across the network?",this.$td)}},methods:{closeNetworkModal(s=!1){this.addon.isActive=!s,this.showNetworkModal=!1,s&&this.actuallyProcessStatusChange(s)},processStatusChange(s){if(this.addon.isActive=s,this.rootStore.aioseo.data.isNetworkAdmin){this.showNetworkModal=!0;return}this.actuallyProcessStatusChange()},actuallyProcessStatusChange(){this.failed=!1,this.loading=!0;const s=this.addon.isActive?"installPlugins":"deactivatePlugins";this.pluginsStore[s]([{plugin:this.addon.basename}]).then(n=>{this.loading=!1,n.body.failed.length&&(this.addon.isActive=!this.addon.isActive,this.failed=!0)}).catch(()=>{this.loading=!1,this.addon.isActive=!this.addon.isActive})},processUpgradeFeature(){this.failed=!1,this.featureUpgrading=!0,this.pluginsStore.upgradePlugins([{plugin:this.addon.sku}]).then(s=>{if(this.featureUpgrading=!1,s.body.failed.length){this.addon.isActive=!1,this.failed=!0;return}this.addon=this.addons.getAddon(this.addon.sku)}).catch(()=>{this.featureUpgrading=!1,this.addon.isActive=!1})}},mounted(){this.addon=this.addons.getAddon(this.feature.sku);const s=Z();!this.addon.isActive&&s["aioseo-activate"]&&s["aioseo-activate"]===this.addon.sku&&(this.loading=!0,this.addon.isActive=!0,this.pluginsStore.installPlugins([{plugin:this.addon.basename}]).then(()=>this.loading=!1).catch(()=>{this.loading=!1,this.addon.isActive=!this.addon.isActive}))}},z={class:"aioseo-feature-card"},R={class:"feature-card-header"},E={class:"feature-card-description"},O={key:0,class:"learn-more"},D=["href"],G=["href"],W={key:1,class:"learn-more"},j=["href"],J=["href"],K={key:0,class:"feature-card-install-activate"},Q={key:1,class:"version"},X={class:"status"},$={key:1,class:"feature-card-upgrade-cta"},ee={key:0},se={key:1},te={key:2,class:"feature-card-upgrade-cta"},oe={class:"version"},ne={key:0},ie={class:"aioseo-modal-body"},re={class:"reset-description"};function ae(s,n,g,m,e,d){const w=c("core-alert"),A=c("core-loader"),V=c("base-toggle"),p=c("base-button"),M=c("core-tooltip"),U=c("svg-close"),S=c("core-modal");return o(),a("div",z,[i("div",{class:C(["feature-card-body",{static:g.staticCard}])},[i("div",R,[k(s.$slots,"title")]),i("div",E,[k(s.$slots,"description"),(!e.addon.isActive||e.addon.requiresUpgrade)&&!g.staticCard?(o(),a("div",O,[i("a",{href:s.$links.utmUrl("feature-manager-addon-link",e.addon.sku,e.addon.learnMoreUrl),target:"_blank"},t(s.$constants.GLOBAL_STRINGS.learnMore),9,D),i("a",{href:s.$links.utmUrl("feature-manager-addon-link",e.addon.sku,e.addon.learnMoreUrl),class:"no-underline",target:"_blank"}," →",8,G)])):r("",!0),e.addon.manageUrl&&(e.addon.isActive&&!e.addon.requiresUpgrade||g.staticCard)&&g.canManage?(o(),a("div",W,[i("a",{href:s.getHref(e.addon.manageUrl)},t(e.strings.manage),9,j),i("a",{href:s.getHref(e.addon.manageUrl),class:"no-underline"}," → ",8,J)])):r("",!0),e.failed?(o(),f(w,{key:2,class:"install-failed",type:"red"},{default:l(()=>[_(t(e.strings.activateError),1)]),_:1})):r("",!0)])],2),g.canActivate?(o(),a("div",{key:0,class:C(["feature-card-footer",{"upgrade-required":e.addon.requiresUpgrade||!m.licenseStore.license.isActive}])},[!e.addon.requiresUpgrade&&m.licenseStore.license.isActive&&(!e.addon.installed||e.addon.hasMinimumVersion)?(o(),a("div",K,[e.loading?(o(),f(A,{key:0,dark:""})):r("",!0),!e.loading&&e.addon.installedVersion?(o(),a("span",Q,t(e.strings.version)+" "+t(e.addon.installedVersion),1)):r("",!0),i("span",X,t(e.addon.isActive?e.strings.activated:e.addon.installed||e.addon.canInstall?e.strings.deactivated:e.strings.notInstalled),1),e.addon.installed||e.addon.canInstall?(o(),f(V,{key:2,modelValue:e.addon.isActive,"onUpdate:modelValue":n[0]||(n[0]=u=>d.processStatusChange(u))},null,8,["modelValue"])):r("",!0)])):r("",!0),e.addon.requiresUpgrade||!m.licenseStore.license.isActive?(o(),a("div",$,[h(p,{type:"green",size:"medium",tag:"a",href:s.$links.getUpsellUrl("feature-manager-upgrade",e.addon.sku,s.$isPro?"pricing":"liteUpgrade"),target:"_blank"},{default:l(()=>[s.$isPro?(o(),a("span",ee,t(e.strings.upgradeYourPlan),1)):r("",!0),s.$isPro?r("",!0):(o(),a("span",se,t(e.strings.upgradeToPro),1))]),_:1},8,["href"])])):r("",!0),s.$isPro&&!e.addon.requiresUpgrade&&e.addon.installed&&!e.addon.hasMinimumVersion?(o(),a("div",te,[e.addon.isActive&&!e.loading?(o(),f(M,{key:0},{tooltip:l(()=>[_(t(e.strings.updateRequired)+" ",1),e.addons.userCanUpdate(e.addon.sku)?r("",!0):(o(),a("strong",ne,t(e.strings.permissionWarning),1))]),default:l(()=>[i("span",oe,t(e.strings.updateToVersion)+" "+t(e.addon.minimumVersion),1)]),_:1})):r("",!0),h(p,{type:"blue",size:"medium",onClick:d.processUpgradeFeature,loading:e.featureUpgrading,disabled:!e.addons.userCanUpdate(e.addon.sku)},{default:l(()=>[_(t(e.strings.updateFeature),1)]),_:1},8,["onClick","loading","disabled"])])):r("",!0)],2)):r("",!0),h(S,{show:e.showNetworkModal,"no-header":"",onClose:n[5]||(n[5]=u=>d.closeNetworkModal(!1)),classes:["aioseo-feature-card-modal"]},{body:l(()=>[i("div",ie,[i("button",{class:"close",onClick:n[2]||(n[2]=y(u=>d.closeNetworkModal(!1),["stop"]))},[h(U,{onClick:n[1]||(n[1]=y(u=>d.closeNetworkModal(!1),["stop"]))})]),i("h3",null,t(e.strings.areYouSureNetworkChange),1),i("div",re,t(d.networkChangeMessage),1),h(p,{type:"blue",size:"medium",onClick:n[3]||(n[3]=u=>d.closeNetworkModal(!0))},{default:l(()=>[_(t(e.strings.yesProcessNetworkChange),1)]),_:1}),h(p,{type:"gray",size:"medium",onClick:n[4]||(n[4]=u=>d.closeNetworkModal(!1))},{default:l(()=>[_(t(e.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])])}const He=v(x,[["render",ae]]),de={},le={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ce=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM16 11H8V13H16V11Z",fill:"currentColor"},null,-1),ue=[ce];function he(s,n){return o(),a("svg",le,ue)}const Pe=v(de,[["render",he]]),ge={},_e={viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-sitemaps-pro"},pe=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.45 3.5H4.55C3.96667 3.5 3.5 3.96667 3.5 4.55V23.45C3.5 23.9167 3.96667 24.5 4.55 24.5H23.45C23.9167 24.5 24.5 23.9167 24.5 23.45V4.55C24.5 3.96667 23.9167 3.5 23.45 3.5ZM10.5 8.16667H8.16667V10.5H10.5V8.16667ZM19.8333 8.16667H12.8333V10.5H19.8333V8.16667ZM19.8333 12.8333H12.8333V15.1667H19.8333V12.8333ZM12.8333 17.5H19.8333V19.8333H12.8333V17.5ZM8.16667 12.8333H10.5V15.1667H8.16667V12.8333ZM10.5 17.5H8.16667V19.8333H10.5V17.5ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z",fill:"currentColor"},null,-1),fe=[pe];function me(s,n){return o(),a("svg",_e,fe)}const be=v(ge,[["render",me]]);export{He as C,Pe as S,be as a};