import{o as t,c as o,a as u,m as i,b as g,F as m,L as v,I as y,x as l,C as d}from"./vue.runtime.esm-bundler.78401fbe.js";import{_}from"./_plugin-vue_export-helper.58be9317.js";import{f as h}from"./links.574d4fd4.js";import{S as $}from"./Logo.9906182f.js";const z={},S={class:"aioseo-wizard-body"},C={class:"body-content"},W={key:0,class:"cta"},x={class:"body-footer"};function A(e,s){return t(),o("div",S,[u("div",C,[i(e.$slots,"default")]),e.$slots.cta?(t(),o("div",W,[i(e.$slots,"cta")])):g("",!0),u("div",x,[i(e.$slots,"footer")])])}const U=_(z,[["render",A]]);const w={},b={class:"aioseo-wizard-container"};function B(e,s){return t(),o("div",b,[i(e.$slots,"default")])}const j=_(w,[["render",B]]);const L={props:{steps:{type:Array,required:!0}},computed:{getSteps(){const e={spacer:!0};return[...this.steps].map((s,r)=>r<this.steps.length-1?[s,{...e}]:[s]).reduce((s,r)=>s.concat(r))}},methods:{getActiveClass(e,s){return e.spacer?!!this.getSteps[s+1].active:e.active}}},k={class:"aioseo-wizard-progress"};function N(e,s,r,p,f,a){return t(),o("div",k,[(t(!0),o(m,null,v(a.getSteps,(n,c)=>(t(),o("div",{key:c,class:y([{circle:!n.spacer},{spacer:n.spacer},{active:a.getActiveClass(n,c)}])},null,2))),128))])}const P=_(L,[["render",N]]);const V={setup(){return{setupWizardStore:h()}},components:{SvgAioseoLogo:$,WizardProgress:P},computed:{steps(){const e=[];for(let s=0;s<this.setupWizardStore.getTotalStageCount;s++)s<this.setupWizardStore.getCurrentStageCount?e.push({active:!0}):e.push({active:!1});return e}}},F={class:"aioseo-wizard-header"},H={class:"logo"};function q(e,s,r,p,f,a){const n=l("svg-aioseo-logo"),c=l("wizard-progress");return t(),o("div",F,[u("div",H,[d(n)]),d(c,{steps:a.steps},null,8,["steps"])])}const D=_(V,[["render",q]]);export{U as W,j as a,D as b};