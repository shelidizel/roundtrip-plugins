import{_ as m}from"./js/_plugin-vue_export-helper.58be9317.js";import{x as e,o as p,c as k,C as a,a as f,H as r,b as _,Y as h}from"./js/vue.runtime.esm-bundler.78401fbe.js";import{l as L}from"./js/index.3489981f.js";import{l as S}from"./js/index.b1bbc091.js";import{l as g}from"./js/index.0b123ab1.js";import{e as A,a as w,c as y,l as v}from"./js/links.574d4fd4.js";import{e as C}from"./js/elemLoaded.9a6eb745.js";import{a as F}from"./js/addons.f4a19c9a.js";import{u as x}from"./js/url.47314748.js";import{S as E}from"./js/Information.8541dc5f.js";import{S as V}from"./js/Caret.89e18339.js";import"./js/translations.6e7b2383.js";import"./js/default-i18n.3881921e.js";import"./js/constants.7045f08f.js";import"./js/isArrayLikeObject.59b68b05.js";import"./js/upperFirst.1bce92c5.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/toString.03aff7e6.js";const P={setup(){return{licenseStore:A(),postEditorStore:w(),rootStore:y()}},components:{SvgCircleInformation:E,SvgClose:V},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:this.$t.sprintf(this.$t.__("Did you know you can automatically add internal links using Link Assistant? %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,this.rootStore.aioseo.urls.aio.linkAssistant,!0))}}},computed:{canShowUpsell(){const t=F.getAddon("aioseo-link-assistant"),{options:o}=this.postEditorStore.currentPost,i=o.linkFormat.internalLinkCount,n=o.linkFormat.linkAssistantDismissed;return(this.licenseStore.isUnlicensed||!t||!t.isActive||t.requiresUpgrade)&&2<i&&!n&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{async linkAdded(t){var s;await this.$nextTick();const{options:o}=this.postEditorStore.currentPost,i=o.linkFormat.internalLinkCount,n=o.linkFormat.linkAssistantDismissed;2<i||n||this.isInternalLink(t.url||((s=t.suggestion)==null?void 0:s.url)||null)&&this.postEditorStore.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const t=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(t!=null&&t.value)&&(this.linkFormatValue=JSON.parse(t.value))},isInternalLink(t){const o=x.parse(t,!1,!0);return t.indexOf("//")===-1&&t.indexOf("/")===0?!0:t.indexOf("#")===0?!1:o.host?o.host===this.rootStore.aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:t,hasAction:o}=window.wp.hooks;o("aioseo-link-format-link-added","aioseo")||t("aioseo-link-format-link-added","aioseo",this.linkAdded)}},D={key:0,class:"aioseo-link-assistant-did-you-know"},I=["innerHTML"];function N(t,o,i,n,s,u){const c=e("svg-circle-information"),d=e("svg-close");return u.canShowUpsell?(p(),k("div",D,[a(c),f("span",{onClick:o[0]||(o[0]=r($=>s.disabled=!0,["stop"])),innerHTML:s.strings.upsell},null,8,I),a(d,{onClick:r(n.postEditorStore.disableLinkAssistantEducation,["stop"])},null,8,["onClick"])])):_("",!0)}const U=m(P,[["render",N]]),l=()=>{let t=h({...U,name:"Standalone/LinkFormat"});t=L(t),t=S(t),t=g(t),v(t),t.mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?l():(C("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(o){o.animationName==="aioseoLaDidYouKnow"&&l()},{passive:!0})));