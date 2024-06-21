import{u,c as _}from"./links.574d4fd4.js";import{B as m}from"./Editor.df2359d9.js";import{C as h}from"./index.b1bbc091.js";import{C as f}from"./Card.e9a25031.js";import{C as g}from"./SettingsRow.3c16cab0.js";import{x as t,c as y,C as s,l as r,o as a,a as w,k as v,D as b,t as x,b as C}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as E}from"./_plugin-vue_export-helper.58be9317.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.59b68b05.js";import"./tags.58b8cbee.js";import"./Caret.89e18339.js";import"./Tooltip.72f8a160.js";import"./Slide.6b2090d0.js";import"./Row.e7795c3e.js";const S={setup(){return{optionsStore:u(),rootStore:_()}},components:{BaseEditor:m,CoreAlert:h,CoreCard:f,CoreSettingsRow:g},data(){return{strings:{htaccessEditor:this.$t.__(".htaccess Editor",this.$td),editHtaccess:this.$t.__("Edit .htaccess",this.$td),description:this.$t.sprintf(this.$t.__("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s",this.$td),"<strong>","</strong>")}}}},k={class:"aioseo-tools-htaccess-editor"},B=["innerHTML"];function H(V,n,A,e,o,P){const i=t("core-alert"),c=t("base-editor"),l=t("core-settings-row"),d=t("core-card");return a(),y("div",k,[s(d,{slug:"htaccessEditor","header-text":o.strings.htaccessEditor},{default:r(()=>[w("div",{class:"aioseo-settings-row aioseo-section-description",innerHTML:o.strings.description},null,8,B),s(l,{name:o.strings.editHtaccess,align:""},{content:r(()=>[e.optionsStore.htaccessError?(a(),v(i,{key:0,type:"red"},{default:r(()=>[b(x(e.optionsStore.htaccessError),1)]),_:1})):C("",!0),s(c,{class:"htaccess-editor",disabled:!e.rootStore.aioseo.user.unfilteredHtml,modelValue:e.rootStore.aioseo.data.htaccess,"onUpdate:modelValue":n[0]||(n[0]=p=>e.rootStore.aioseo.data.htaccess=p),"line-numbers":"",monospace:"","preserve-whitespace":""},null,8,["disabled","modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const G=E(S,[["render",H]]);export{G as default};
