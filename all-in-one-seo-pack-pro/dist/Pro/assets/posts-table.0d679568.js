import{_ as I}from"./js/_plugin-vue_export-helper.58be9317.js";import{o as a,c as _,a as o,x as m,k as g,b as u,l as n,D as c,t as i,C as d,H as h,m as $,I as R,Y as M,h as N}from"./js/vue.runtime.esm-bundler.78401fbe.js";import{l as tt}from"./js/index.3489981f.js";import{l as et}from"./js/index.b1bbc091.js";import{l as st}from"./js/index.0b123ab1.js";import{u as O,B as z,m as B,s as P,t as H,l as U}from"./js/links.574d4fd4.js";import{s as it,t as ot,T as nt}from"./js/postSlug.23dfcba8.js";import{a as lt}from"./js/allowed.59f3c72a.js";import"./js/default-i18n.3881921e.js";import{u as j,T as Z}from"./js/TruSeoScore.b474bf15.js";import{l as L}from"./js/license.3fbd013a.js";import{B as G,e as q}from"./js/Caret.89e18339.js";import{C as F}from"./js/HtmlTagsEditor.884e425c.js";import{_ as rt}from"./js/ScoreButton.73d3e72f.js";import{C as D}from"./js/Tooltip.72f8a160.js";import{_ as at}from"./js/IndexStatus.3efd5738.js";import{S as ct}from"./js/LogoGear.d631c62c.js";import{S as dt,a as ut,b as pt,c as mt}from"./js/Affiliate.fdeb2d7c.js";/* empty css                */import"./js/translations.6e7b2383.js";import"./js/constants.7045f08f.js";import"./js/isArrayLikeObject.59b68b05.js";import"./js/metabox.5b4ee3cf.js";import"./js/cleanForSlug.b8be1cc7.js";import"./js/toString.03aff7e6.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/deburr.f9ffc34a.js";import"./js/get.9f392d3b.js";import"./js/upperFirst.1bce92c5.js";import"./js/tags.58b8cbee.js";import"./js/Editor.df2359d9.js";import"./js/UnfilteredHtml.6760ba7c.js";import"./js/Calendar.85c26920.js";import"./js/Mobile.cd72190d.js";import"./js/Checkmark.68b20c77.js";import"./js/Link.56f52bd8.js";import"./js/CheckSolid.799a4b9e.js";import"./js/CloseSolid.c84a342c.js";const ht={},_t={viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-headline-analyzer"},gt=o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5448 1.76771H14.6665V1.79272L10.5448 4.61008V1.76771ZM5.46515 8.08232V1.76779H1.34351V4.8899L1.34378 4.71192L5.42731 8.10819L5.46515 8.08232ZM1.34351 11.4568L5.46515 14.2652V15.0999H1.34351V11.4568ZM10.5448 10.8851L14.6665 8.14027V15.0982H10.5448V10.8851Z",fill:"currentColor"},null,-1),ft=o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.46515 8.05739L5.42731 8.08325L1.34378 4.68698L1.34351 4.86412V1.76779H5.46515V8.05739ZM5.46515 14.2083L1.34351 11.3998V15.0999H5.46515V14.2083ZM10.5448 10.8281L14.6665 8.08332V15.0982H10.5448V10.8281ZM14.6665 1.76778L10.5448 4.58515V1.76771H14.6665V1.76778Z",fill:"currentColor"},null,-1),vt=o("path",{d:"M5.42725 9.45857L14.6665 3.14303V6.76487L5.46703 12.8912L1.33325 10.0745L1.34372 6.06231L5.42725 9.45857Z",fill:"currentColor"},null,-1),wt=[gt,ft,vt];function Tt(e,s){return a(),_("svg",_t,wt)}const yt=I(ht,[["render",Tt]]);const kt={setup(){const{strings:e}=j();return{composableStrings:e,optionsStore:O(),searchStatisticsStore:z()}},components:{BaseButton:G,CoreHtmlTagsEditor:F,CoreScoreButton:rt,CoreTooltip:D,IndexStatus:at,SvgAioseoLogoGear:ct,SvgHeadlineAnalyzer:yt,SvgPencil:q},mixins:[Z],props:{post:Object,posts:Array},data(){return{allowed:lt,postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,inspectionResult:!1,inspectionResultLoading:!0,teucu:!1,strings:B(this.composableStrings,{title:this.$t.__("Title",this.$td),description:this.$t.__("Description",this.$td),imageTitle:this.$t.__("Image Title",this.$td),imageAltTag:this.$t.__("Image Alt Tag",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),discardChanges:this.$t.__("Discard Changes",this.$td),truSeoScore:this.$t.__("TruSEO Score",this.$td),headlineScore:this.$t.__("Headline Score",this.$td)}),license:L}},computed:{showIndexStatus(){var p,t,r;if(!this.$isPro||!L.hasCoreFeature("search-statistics","index-status"))return!1;const e=!this.searchStatisticsStore.unverifiedSite,s=typeof((r=(t=(p=this.optionsStore.internalOptions.internal)==null?void 0:p.searchStatistics)==null?void 0:t.profile)==null?void 0:r.key)=="string",l=this.allowed("aioseo_search_statistics_settings");return e&&s&&l}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,P.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.post.titleParsed=e.body.title,this.post.descriptionParsed=e.body.description,this.$root._data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(e=>{console.error(`Unable to update post with ID ${this.post.id}: ${e}`)})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,P.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(e=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${e}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},truncate:H,updatePostTitle(e,s){const l=document.getElementById(`post-${e}`);if(!l)return;const p=l.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!p)return;const t=p.getElementsByTagName("span")[0];p.innerText=s,p.prepend(t)},updateInspectionResult(e){const{inspectionResult:s,inspectionResultLoading:l}=e;this.inspectionResult=s,this.inspectionResultLoading=l}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed,this.inspectionResult=this.post.inspectionResult,this.inspectionResultLoading=this.post.inspectionResultLoading,this.post.reload&&this.save(),window.aioseoBus.$on("updateInspectionResult"+this.postId,this.updateInspectionResult)},beforeUnmount(){window.aioseoBus.$off("updateInspectionResult"+this.postId,this.updateInspectionResult)},async created(){this.showTruSeo=it()}},bt={key:0,class:"edit-row scores"},Ct={class:"edit-row edit-title"},It={key:0},St=o("strong",null,":",-1),Et={key:1,class:"edit-row"},Pt={class:"edit-row edit-description"},Dt=["id"],xt=o("strong",null,":",-1),At={key:2,class:"edit-row"},Lt={class:"edit-row edit-image-title"},Vt=["id"],Rt=o("strong",null,":",-1),Mt={key:3,class:"edit-row"},Nt={class:"edit-row edit-image-alt"},Ot=["id"],zt=o("strong",null,":",-1),Bt={key:4,class:"edit-row"};function Ht(e,s,l,p,t,r){var x,A;const v=m("index-status"),f=m("svg-headline-analyzer"),T=m("core-score-button"),w=m("core-tooltip"),k=m("svg-aioseo-logo-gear"),C=m("svg-pencil"),S=m("core-html-tags-editor"),y=m("base-button");return a(),_("div",{class:R(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}])},[o("div",null,[e.$root._data.screen.base==="edit"&&!t.isSpecialPage?(a(),_("div",bt,[r.showIndexStatus?(a(),g(v,{key:0,result:(x=t.inspectionResult)==null?void 0:x.indexStatusResult,"result-link":(A=t.inspectionResult)==null?void 0:A.inspectionResultLink,loading:t.inspectionResultLoading,viewable:l.post.isPostVisible,"tooltip-offset":"-150px,0"},null,8,["result","result-link","loading","viewable"])):u("",!0),p.optionsStore.options.advanced.headlineAnalyzer?(a(),g(w,{key:1,type:"action"},{tooltip:n(()=>[c(i(t.strings.headlineScore),1)]),default:n(()=>[d(T,{score:l.post.headlineScore,postId:t.postId},{icon:n(()=>[d(f)]),_:1},8,["score","postId"])]),_:1})):u("",!0),t.showTruSeo&&t.allowed("aioseo_page_analysis")?(a(),g(w,{key:2,type:"action"},{tooltip:n(()=>[c(i(t.strings.truSeoScore),1)]),default:n(()=>[d(T,{score:l.post.value,postId:t.postId},{icon:n(()=>[d(k)]),_:1},8,["score","postId"])]),_:1})):u("",!0)])):u("",!0),o("div",null,[t.allowed("aioseo_page_general_settings")?(a(),g(w,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditTitle},{tooltip:n(()=>[o("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:n(()=>[o("div",Ct,[o("strong",null,i(t.strings.title),1),t.showEditTitle?u("",!0):(a(),_("span",It,[St,c(" "+i(r.truncate(t.titleParsed,100)),1)])),t.showEditTitle?u("",!0):(a(),g(C,{key:1,class:"pencil-icon",onClick:h(r.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):u("",!0)]),t.showEditTitle?(a(),_("div",Et,[d(S,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=b=>t.title=b),"line-numbers":!1,single:"","tags-context":"postTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_title"]},null,8,["modelValue"]),d(y,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(y,{type:"blue",size:"small",onClick:h(r.save,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0),o("div",null,[t.allowed("aioseo_page_general_settings")?(a(),g(w,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditDescription},{tooltip:n(()=>[o("strong",null,i(t.strings.description)+":",1),c(" "+i(r.truncate(t.descriptionParsed)),1)]),default:n(()=>[o("div",Pt,[o("strong",null,i(t.strings.description),1),t.showEditDescription?u("",!0):(a(),_("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[xt,c(" "+i(r.truncate(t.descriptionParsed)),1)],8,Dt)),t.showEditDescription?u("",!0):(a(),g(C,{key:1,class:"pencil-icon",onClick:h(r.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):u("",!0)]),t.showEditDescription?(a(),_("div",At,[d(S,{modelValue:t.postDescription,"onUpdate:modelValue":s[1]||(s[1]=b=>t.postDescription=b),"line-numbers":!1,"tags-context":"postDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_excerpt"]},null,8,["modelValue"]),d(y,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(y,{type:"blue",size:"small",onClick:h(r.save,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0),$(e.$slots,"default"),o("div",null,[e.$root._data.screen.base==="upload"&&l.post.showMedia?(a(),g(w,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageTitle},{tooltip:n(()=>[o("strong",null,i(t.strings.imageTitle)+":",1),c(" "+i(t.imageTitle),1)]),default:n(()=>[o("div",Lt,[o("strong",null,i(t.strings.imageTitle),1),t.showEditImageTitle?u("",!0):(a(),_("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[Rt,c(" "+i(t.imageTitle),1)],8,Vt)),t.showEditImageTitle?u("",!0):(a(),g(C,{key:1,class:"pencil-icon",onClick:h(r.editImageTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):u("",!0)]),t.showEditImageTitle?(a(),_("div",Mt,[d(S,{modelValue:t.imageTitle,"onUpdate:modelValue":s[2]||(s[2]=b=>t.imageTitle=b),"line-numbers":!1,single:"","tags-context":"attachmentTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["image_title"]},null,8,["modelValue"]),d(y,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(y,{type:"blue",size:"small",onClick:h(r.saveImage,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0),o("div",null,[e.$root._data.screen.base==="upload"&&l.post.showMedia?(a(),g(w,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageAltTag},{tooltip:n(()=>[o("strong",null,i(t.strings.imageAltTag)+":",1),c(" "+i(t.imageAltTag),1)]),default:n(()=>[o("div",Nt,[o("strong",null,i(t.strings.imageAltTag),1),t.showEditImageAltTag?u("",!0):(a(),_("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[zt,c(" "+i(t.imageAltTag),1)],8,Ot)),t.showEditImageAltTag?u("",!0):(a(),g(C,{key:1,class:"pencil-icon",onClick:h(r.editImageAlt,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):u("",!0)]),t.showEditImageAltTag?(a(),_("div",Bt,[d(S,{modelValue:t.imageAltTag,"onUpdate:modelValue":s[3]||(s[3]=b=>t.imageAltTag=b),"line-numbers":!1,single:"","tags-context":"attachmentDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["alt_tag"]},null,8,["modelValue"]),d(y,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(y,{type:"blue",size:"small",onClick:h(r.saveImage,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0)])],2)}const Q=I(kt,[["render",Ht]]);const Ut={components:{CorePostColumn:Q,CoreTooltip:D,SvgLinkAffiliate:dt,SvgLinkExternal:ut,SvgLinkInternalInbound:pt,SvgLinkInternalOutbound:mt},props:{post:Object},data(){return{strings:{inboundInternal:this.$t.sprintf(this.$t.__("%1$sInbound Internal Links%2$sLinks from other posts to this post",this.$tdPro),"<strong>","</strong><br />"),outboundInternal:this.$t.sprintf(this.$t.__("%1$sOutbound Internal Links%2$sLinks from this post to other posts",this.$tdPro),"<strong>","</strong><br />"),affiliate:this.$t.__("Affiliate",this.$tdPro),external:this.$t.__("External",this.$tdPro)}}}},jt={key:0,class:"links"},Zt=["innerHTML"],Gt=["innerHTML"];function qt(e,s,l,p,t,r){const v=m("svg-link-internal-inbound"),f=m("core-tooltip"),T=m("svg-link-internal-outbound"),w=m("svg-link-affiliate"),k=m("svg-link-external"),C=m("core-post-column");return a(),g(C,{post:l.post},{default:n(()=>[l.post.linkCounts&&l.post.postType!=="attachment"?(a(),_("div",jt,[d(f,{type:"action"},{tooltip:n(()=>[o("div",{innerHTML:t.strings.inboundInternal},null,8,Zt)]),default:n(()=>[o("div",null,[d(v),c(" "+i(l.post.linkCounts.inboundInternal),1)])]),_:1}),d(f,{type:"action"},{tooltip:n(()=>[o("div",{innerHTML:t.strings.outboundInternal},null,8,Gt)]),default:n(()=>[o("div",null,[d(T),c(" "+i(l.post.linkCounts.outboundInternal),1)])]),_:1}),d(f,{type:"action"},{tooltip:n(()=>[c(i(t.strings.affiliate),1)]),default:n(()=>[o("div",null,[d(w),c(" "+i(l.post.linkCounts.affiliate),1)])]),_:1}),d(f,{type:"action"},{tooltip:n(()=>[c(i(t.strings.external),1)]),default:n(()=>[o("div",null,[d(k),c(" "+i(l.post.linkCounts.external),1)])]),_:1})])):u("",!0)]),_:1},8,["post"])}const Ft=I(Ut,[["render",qt]]),Qt={components:{CorePostColumn:Q},props:{post:Object}};function Xt(e,s,l,p,t,r){const v=m("core-post-column");return a(),g(v,{post:l.post},null,8,["post"])}const Yt=I(Qt,[["render",Xt]]),Jt={components:{PostColumn:Ft,PostColumnLite:Yt},props:{post:Object}},Kt={class:"aioseo-app"};function Wt(e,s,l,p,t,r){const v=m("PostColumn"),f=m("PostColumnLite");return a(),_("div",Kt,[e.$isPro?(a(),g(v,{key:0,post:l.post},null,8,["post"])):u("",!0),e.$isPro?u("",!0):(a(),g(f,{key:1,post:l.post},null,8,["post"]))])}const $t=I(Jt,[["render",Wt]]);const te={setup(){const{strings:e}=j();return{composableStrings:e}},components:{BaseButton:G,CoreHtmlTagsEditor:F,CoreTooltip:D,SvgPencil:q},mixins:[Z],props:{term:Object,terms:Array,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:B(this.composableStrings,{title:this.$t.__("Title",this.$td),description:this.$t.__("Description",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),discardChanges:this.$t.__("Discard Changes",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,P.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.term.titleParsed=e.body.title,this.term.descriptionParsed=e.body.description}).catch(e=>{console.error(`Unable to update term with ID ${this.term.id}: ${e}`)})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},truncate:H},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed,this.term.reload&&this.save()},async created(){this.showTruSeo=ot()}},ee={class:"aioseo-app"},se={class:"edit-row edit-title"},ie={key:0},oe=o("strong",null,":",-1),ne={key:0,class:"edit-row"},le={class:"edit-row edit-description"},re={key:0},ae=o("strong",null,":",-1),ce={key:1,class:"edit-row"};function de(e,s,l,p,t,r){const v=m("svg-pencil"),f=m("core-tooltip"),T=m("core-html-tags-editor"),w=m("base-button");return a(),_("div",ee,[o("div",{class:R(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription}])},[o("div",null,[o("div",null,[d(f,{class:"aioseo-details-column__tooltip"},{tooltip:n(()=>[o("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:n(()=>[o("div",se,[o("strong",null,i(t.strings.title),1),t.showEditTitle?u("",!0):(a(),_("span",ie,[oe,c(" "+i(r.truncate(t.titleParsed,100)),1)])),t.showEditTitle?u("",!0):(a(),g(v,{key:1,class:"pencil-icon",onClick:h(r.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditTitle?(a(),_("div",ne,[d(T,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=k=>t.title=k),"line-numbers":!1,single:"","tags-context":"taxonomyTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_title"]},null,8,["modelValue"]),d(w,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(w,{type:"blue",size:"small",onClick:h(r.save,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0),o("div",null,[d(f,{class:"aioseo-details-column__tooltip"},{tooltip:n(()=>[o("strong",null,i(t.strings.description)+":",1),c(" "+i(t.descriptionParsed),1)]),default:n(()=>[o("div",le,[o("strong",null,i(t.strings.description),1),t.showEditDescription?u("",!0):(a(),_("span",re,[ae,c(" "+i(r.truncate(t.descriptionParsed)),1)])),t.showEditDescription?u("",!0):(a(),g(v,{key:1,class:"pencil-icon",onClick:h(r.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditDescription?(a(),_("div",ce,[d(T,{modelValue:t.termDescription,"onUpdate:modelValue":s[1]||(s[1]=k=>t.termDescription=k),"line-numbers":!1,"tags-context":"taxonomyDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_description"]},null,8,["modelValue"]),d(w,{type:"gray",size:"small",onClick:h(r.cancel,["prevent"])},{default:n(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),d(w,{type:"blue",size:"small",onClick:h(r.save,["prevent"])},{default:n(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):u("",!0)])],2)])}const ue=I(te,[["render",de]]);U();const X=z(),pe=O(),{posts:E}=window.aioseo,{$emit:me}=window.aioseoBus,V=({page:e,result:s,loading:l})=>{window.aioseo.posts=window.aioseo.posts.map(p=>(p.page===e&&(p.inspectionResult=s,p.inspectionResultLoading=l,me("updateInspectionResult"+p.id,p)),p))},he=()=>{var l,p,t;const e=!X.unverifiedSite,s=typeof((t=(p=(l=pe.internalOptions.internal)==null?void 0:l.searchStatistics)==null?void 0:p.profile)==null?void 0:t.key)=="string";return e&&s};if(E!=null&&E.length&&he()){const e=Object.values(E).filter(s=>{var l;return s.isPostVisible&&(!s.inspectionResult||((l=s.inspectionResult)==null?void 0:l.length)===0)});e.length&&(e.forEach(s=>{V({page:s.page,result:s.inspectionResult,loading:!0})}),X.getInspectionResult(e.map(s=>s.page)).then(s=>{e.forEach(l=>{V({page:l.page,result:s[l.page],loading:!1})})}))}const Y=e=>(e=tt(e),e=et(e),e=st(e),U(e),e.config.globalProperties.$truSeo=new nt,e),J=e=>{const s=document.getElementById(e);s!=null&&s.__vue_app__&&s.__vue_app__.unmount()},K=e=>{J(`${e.columnName}-${e.id}`),Y(M({name:"Standalone/PostsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>N($t)},{post:e})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.posts&&window.aioseo.posts.forEach(e=>{K(e)});const W=e=>{J(`${e.columnName}-${e.id}`),Y(M({name:"Standalone/TermsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>N(ue)},{term:e})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.terms&&window.aioseo.posts.length===0&&window.aioseo.terms.forEach(e=>{W(e)});(function(e){e(document).on("ajaxComplete",(s,l,p)=>{const t=new URLSearchParams(p.data),r=t==null?void 0:t.get("action");if(!(!t||!r)){if(r==="inline-save"){const{post_ID:v}=Object.fromEntries(t.entries()),f=window.aioseo.posts.find(T=>T.id===parseInt(v));K({...f,reload:!0})}if(r==="inline-save-tax"){const{tax_ID:v}=Object.fromEntries(t.entries()),f=window.aioseo.terms.find(T=>T.id===parseInt(v));W({...f,reload:!0})}}})})(window.jQuery);