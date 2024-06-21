import{n as T,e as W,u as P,c as K,f as A,m as E}from"./links.574d4fd4.js";import{p as O}from"./popup.6fe74774.js";import"./default-i18n.3881921e.js";import{x as s,c as u,C as o,l as i,o as a,a as r,D as l,t as d,b as h,F as H,L as B,k as f}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as M}from"./_plugin-vue_export-helper.58be9317.js";import{S as N}from"./Checkmark.68b20c77.js";import{u as U,W as V}from"./Wizard.60040a90.js";import{C as G}from"./index.b1bbc091.js";import{G as D,a as I}from"./Row.e7795c3e.js";import{W as F,a as R,b as Y}from"./Header.ccf1c291.js";import{W as j}from"./CloseAndExit.54621e48.js";import{_ as q}from"./Steps.52be0f49.js";import"./isArrayLikeObject.59b68b05.js";import"./params.f0608262.js";import"./addons.f4a19c9a.js";import"./upperFirst.1bce92c5.js";import"./_stringToArray.4de3b1f3.js";import"./toString.03aff7e6.js";import"./Caret.89e18339.js";import"./Logo.9906182f.js";import"./Index.815fe32c.js";const J={setup(){const{strings:e}=U();return{connectStore:T(),licenseStore:W(),optionsStore:P(),rootStore:K(),setupWizardStore:A(),composableStrings:e}},components:{CoreAlert:G,GridColumn:D,GridRow:I,SvgCheckmark:N,WizardBody:F,WizardCloseAndExit:j,WizardContainer:R,WizardHeader:Y,WizardSteps:q},mixins:[V],data(){return{error:null,loading:!1,stage:"license-key",localLicenseKey:null,strings:E(this.composableStrings,{enterYourLicenseKey:this.$t.sprintf(this.$t.__("Enter your %1$s License Key",this.$td),"AIOSEO"),boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Lite"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Pro"),linkText:this.$t.sprintf(this.$t.__("upgrade to %1$s",this.$td),"Pro"),placeholder:this.$t.__("Paste your license key here",this.$td),connect:this.$t.__("Connect",this.$td)})}},watch:{localLicenseKey(e){this.setupWizardStore.licenseKey=e}},computed:{noLicenseNeeded(){return this.$t.sprintf(this.$t.__("You're using %1$s - no license needed. Enjoy!",this.$td)+" 🙂",this.strings.boldText)},link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return this.$isPro?this.$t.__("To unlock the selected features, please enter your license key below.",this.$td):this.$t.sprintf(this.$t.__("To unlock the selected features, please %1$s and enter your license key below.",this.$td),this.link)},alreadyPurchased(){return this.$t.sprintf(this.$t.__("Already purchased? Simply enter your license key below to connect with %1$s!",this.$td),this.strings.purchasedBoldText)}},methods:{processConnectOrActivate(){if(this.$isPro)return this.processActivateLicense();this.processGetConnectUrl()},processActivateLicense(){this.error=null,this.loading=!0,this.rootStore.loading=!0,this.licenseStore.activate(this.localLicenseKey).then(()=>{this.optionsStore.internalOptions.internal.license.expired=!1,this.setupWizardStore.saveWizard("license-key").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})}).catch(e=>{if(this.loading=!1,this.localLicenseKey=null,this.rootStore.loading=!1,!e||!e.response||!e.response.body||!e.response.body.error||!e.response.body.licenseData){this.error=this.$t.__("An unknown error occurred, please try again later.",this.$td);return}const n=e.response.body.licenseData;n.invalid?this.error=this.$t.__("The license key provided is invalid. Please use a different key to continue receiving automatic updates.",this.$td):n.disabled?this.error=this.$t.__("The license key provided is disabled. Please use a different key to continue receiving automatic updates.",this.$td):n.expired?this.error=this.licenseKeyExpired:n.activationsError?this.error=this.$t.__("This license key has reached the maximum number of activations. Please deactivate it from another site or purchase a new license to continue receiving automatic updates.",this.$td):(n.connectionError||n.requestError)&&(this.error=this.$t.__("There was an error connecting to the licensing API. Please try again later.",this.$td))})},processGetConnectUrl(){this.loading=!0,this.rootStore.loading=!0,this.connectStore.getConnectUrl({key:this.localLicenseKey,wizard:!0}).then(e=>{if(e.body.url){if(!e.body.popup)return this.loading=!1,this.rootStore.loading=!1,window.open(e.body.url);this.openPopup(e.body.url)}})},openPopup(e){O(e,"_self",600,630,!0,["file","token"],this.completedCallback,this.closedCallback)},completedCallback(e){return e.wizard=!0,this.connectStore.processConnect(e)},closedCallback(e){if(e)return window.location.reload();this.loading=!1,this.rootStore.loading=!1},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}},mounted(){this.localLicenseKey=this.setupWizardStore.licenseKey}},Q={class:"aioseo-wizard-license-key"},X={class:"header"},Z=["innerHTML"],ee={class:"license-cta-box"},te=["innerHTML"],se=["innerHTML"],oe={class:"license-key"},ne=r("input",{type:"text",name:"username",autocomplete:"username",style:{display:"none"}},null,-1),ie={class:"go-back"},re=r("div",{class:"spacer"},null,-1);function ae(e,n,le,_,t,c){const g=s("wizard-header"),k=s("wizard-steps"),S=s("svg-checkmark"),b=s("grid-column"),$=s("grid-row"),L=s("base-input"),m=s("base-button"),v=s("core-alert"),y=s("router-link"),w=s("wizard-body"),z=s("wizard-close-and-exit"),x=s("wizard-container");return a(),u("div",Q,[o(g),o(x,null,{default:i(()=>[o(w,null,{footer:i(()=>[r("div",ie,[o(y,{to:_.setupWizardStore.getPrevLink,class:"no-underline"},{default:i(()=>[l("←")]),_:1},8,["to"]),l("   "),o(y,{to:_.setupWizardStore.getPrevLink},{default:i(()=>[l(d(t.strings.goBack),1)]),_:1},8,["to"])]),re,o(m,{type:"gray",onClick:c.skipStep},{default:i(()=>[l(d(t.strings.skipThisStep),1)]),_:1},8,["onClick"])]),default:i(()=>[o(k),r("div",X,d(t.strings.enterYourLicenseKey),1),e.$isPro?h("",!0):(a(),u("div",{key:0,class:"description",innerHTML:c.noLicenseNeeded},null,8,Z)),r("div",ee,[r("div",{innerHTML:c.tooltipText},null,8,te),o($,null,{default:i(()=>[(a(!0),u(H,null,B(e.getSelectedUpsellFeatures,(p,C)=>(a(),f(b,{sm:"6",key:C},{default:i(()=>[o(S),l(" "+d(p.name),1)]),_:2},1024))),128))]),_:1})]),e.$isPro?h("",!0):(a(),u("div",{key:1,innerHTML:c.alreadyPurchased},null,8,se)),r("form",oe,[ne,o(L,{type:"password",placeholder:t.strings.placeholder,"append-icon":t.localLicenseKey?"circle-check":null,autocomplete:"new-password",modelValue:t.localLicenseKey,"onUpdate:modelValue":n[0]||(n[0]=p=>t.localLicenseKey=p)},null,8,["placeholder","append-icon","modelValue"]),o(m,{type:"green",disabled:!t.localLicenseKey,loading:t.loading,onClick:c.processConnectOrActivate},{default:i(()=>[l(d(t.strings.connect),1)]),_:1},8,["disabled","loading","onClick"])]),t.error?(a(),f(v,{key:2,class:"license-key-error",type:"red",innerHTML:t.error},null,8,["innerHTML"])):h("",!0)]),_:1}),o(z)]),_:1})])}const We=M(J,[["render",ae]]);export{We as default};
