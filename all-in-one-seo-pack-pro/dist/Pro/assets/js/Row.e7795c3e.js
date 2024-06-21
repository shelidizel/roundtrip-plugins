import{o as l,c as a,m as o,I as n}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as i}from"./_plugin-vue_export-helper.58be9317.js";const p={emits:["transitionend"],props:{firstXs:{type:Boolean,default:!1},lastXs:{type:Boolean,default:!1},firstSm:{type:Boolean,default:!1},lastSm:{type:Boolean,default:!1},firstMd:{type:Boolean,default:!1},lastMd:{type:Boolean,default:!1},firstLg:{type:Boolean,default:!1},lastLg:{type:Boolean,default:!1},firstXl:{type:Boolean,default:!1},lastXl:{type:Boolean,default:!1},xsOffset:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},smOffset:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},mdOffset:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},lgOffset:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},xlOffset:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},xs:{type:String,default:"12",validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},sm:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},md:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},lg:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},xl:{type:String,validator(t){const e=parseInt(t);return!isNaN(e)&&0<t&&13>t}},textXs:{type:String,default:"left",validator:t=>["left","center","right"].includes(t)},textSm:{type:String,validator:t=>["left","center","right"].includes(t)},textMd:{type:String,validator:t=>["left","center","right"].includes(t)},textLg:{type:String,validator:t=>["left","center","right"].includes(t)},textXl:{type:String,validator:t=>["left","center","right"].includes(t)},oneFifth:{type:Boolean,required:!1,default:!1}},computed:{classes(){let t="aioseo-col";return t+=this.firstXs?" first-xs":this.lastXs?" last-xs":"",t+=this.firstSm?" first-sm":this.lastSm?" last-sm":"",t+=this.firstMd?" first-md":this.lastMd?" last-md":"",t+=this.firstLg?" first-lg":this.lastLg?" last-lg":"",t+=this.firstXl?" first-xl":this.lastXl?" last-xl":"",t+=this.xsOffset?" col-xs-offset-"+this.xsOffset:"",t+=this.smOffset?" col-sm-offset-"+this.smOffset:"",t+=this.mdOffset?" col-md-offset-"+this.mdOffset:"",t+=this.lgOffset?" col-lg-offset-"+this.lgOffset:"",t+=this.xlOffset?" col-xl-offset-"+this.xlOffset:"",t+=" col-xs-"+this.xs,t+=this.sm?" col-sm-"+this.sm:"",t+=this.md?" col-md-"+this.md:"",t+=this.lg?" col-lg-"+this.lg:"",t+=this.xl?" col-xl-"+this.xl:"",t+=" text-xs-"+this.textXs,t+=this.textSm?" text-sm-"+this.textSm:"",t+=this.textMd?" text-md-"+this.textMd:"",t+=this.textLg?" text-lg-"+this.textLg:"",t+=this.textXl?" text-xl-"+this.textXl:"",t+=this.oneFifth?" col-md-24":"",t}}};function m(t,e,r,d,f,s){return l(),a("div",{class:n(s.classes),onTransitionend:e[0]||(e[0]=u=>t.$emit("transitionend",u))},[o(t.$slots,"default")],34)}const x=i(p,[["render",m]]);const c={props:{reverse:{type:Boolean,default:!1},startXs:{type:Boolean,default:!1},centerXs:{type:Boolean,default:!1},endXs:{type:Boolean,default:!1},topXs:{type:Boolean,default:!1},middleXs:{type:Boolean,default:!1},bottomXs:{type:Boolean,default:!1},aroundXs:{type:Boolean,default:!1},betweenXs:{type:Boolean,default:!1},startSm:{type:Boolean,default:!1},centerSm:{type:Boolean,default:!1},endSm:{type:Boolean,default:!1},topSm:{type:Boolean,default:!1},middleSm:{type:Boolean,default:!1},bottomSm:{type:Boolean,default:!1},aroundSm:{type:Boolean,default:!1},betweenSm:{type:Boolean,default:!1},startMd:{type:Boolean,default:!1},centerMd:{type:Boolean,default:!1},endMd:{type:Boolean,default:!1},topMd:{type:Boolean,default:!1},middleMd:{type:Boolean,default:!1},bottomMd:{type:Boolean,default:!1},aroundMd:{type:Boolean,default:!1},betweenMd:{type:Boolean,default:!1},startLg:{type:Boolean,default:!1},centerLg:{type:Boolean,default:!1},endLg:{type:Boolean,default:!1},topLg:{type:Boolean,default:!1},middleLg:{type:Boolean,default:!1},bottomLg:{type:Boolean,default:!1},aroundLg:{type:Boolean,default:!1},betweenLg:{type:Boolean,default:!1}},computed:{classes(){let t=this.reverse?"aioseo-row reverse":"aioseo-row ";return t+=this.startXs?" start-xs":this.centerXs?" center-xs":this.endXs?" end-xs":"",t+=this.startSm?" start-sm":this.centerSm?" center-sm":this.endSm?" end-sm":"",t+=this.startMd?" start-md":this.centerMd?" center-md":this.endMd?" end-md":"",t+=this.startLg?" start-lg":this.centerLg?" center-lg":this.endLg?" end-lg":"",t+=this.topXs?" top-xs":this.middleXs?" middle-xs":this.bottomXs?" bottom-xs":"",t+=this.topSm?" top-sm":this.middleSm?" middle-sm":this.bottomSm?" bottom-sm":"",t+=this.topMd?" top-md":this.middleMd?" middle-md":this.bottomMd?" bottom-md":"",t+=this.topLg?" top-lg":this.middleLg?" middle-lg":this.bottomLg?" bottom-lg":"",t+=this.aroundXs?" around-xs":this.betweenXs?" between-xs":"",t+=this.aroundSm?" around-sm":this.betweenSm?" between-sm":"",t+=this.aroundMd?" around-md":this.betweenMd?" between-md":"",t+=this.aroundLg?" around-lg":this.betweenLg?" between-lg":"",t}}};function h(t,e,r,d,f,s){return l(),a("div",{class:n(s.classes)},[o(t.$slots,"default")],2)}const B=i(c,[["render",h]]);export{x as G,B as a};
