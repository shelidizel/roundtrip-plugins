import{c as e}from"./links.574d4fd4.js";import{C as n}from"./index.b1bbc091.js";import{x as s,o as c,k as a,b as i}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as l}from"./_plugin-vue_export-helper.58be9317.js";const u={setup(){return{rootStore:e()}},components:{CoreAlert:n},data(){return{strings:{unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}}};function p(_,m,f,t,r,d){const o=s("core-alert");return t.rootStore.aioseo.user.unfilteredHtml?i("",!0):(c(),a(o,{key:0,class:"no-access",type:"red",innerHTML:r.strings.unfilteredHtmlError},null,8,["innerHTML"]))}const x=l(u,[["render",p]]);export{x as C};
