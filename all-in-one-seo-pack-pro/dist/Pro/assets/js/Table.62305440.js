import{j as O}from"./links.574d4fd4.js";import{n as q}from"./numbers.c7cb4085.js";import{C as M,d as E}from"./Caret.89e18339.js";import{o as s,c as i,F as m,L as y,a as o,t as d,O as C,_ as D,k as g,l as k,D as v,I as _,H as F,q as S,Q as j,J as H,x as w,C as L,b as r,m as T,j as K,$ as V}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as N}from"./_plugin-vue_export-helper.58be9317.js";import{C as z}from"./Tooltip.72f8a160.js";import{T as J}from"./Slide.6b2090d0.js";import{_ as I}from"./default-i18n.3881921e.js";const ft={data(){return{resultsPerPage:20,orderBy:null,orderDir:null,searchTerm:"",pageNumber:1,filter:"all",wpTableKey:0,wpTableLoading:!1}},methods:{refreshTable(){return this.wpTableLoading=!0,this.processFetchTableData().then(()=>this.wpTableLoading=!1)},processAdditionalFilters({filters:t}){this.wpTableLoading=!0,this.selectedFilters=t,this.processFetchTableData(t).then(()=>this.wpTableLoading=!1)},processSearch(t){typeof t=="object"&&(t=t.target.value),this.pageNumber=1,this.searchTerm=t,this.wpTableLoading=!0,this.processFetchTableData().then(()=>this.wpTableLoading=!1)},processPagination(t){this.pageNumber=t,this.wpTableLoading=!0,this.processFetchTableData().then(()=>this.wpTableLoading=!1)},processFilterTable(t){this.filter=t.slug,this.searchTerm="",this.pageNumber=1,this.wpTableLoading=!0,this.resetSelectedFilters(),this.processFetchTableData().then(()=>this.wpTableLoading=!1)},processChangeItemsPerPage(t){this.pageNumber=1,this.resultsPerPage=t,this.wpTableLoading=!0,O().changeItemsPerPage({slug:this.changeItemsPerPageSlug,value:t}).then(()=>this.processFetchTableData().then(()=>this.$scrollTo(`#${this.tableId}`,{offset:-110}))).then(()=>this.wpTableLoading=!1)},processSort(t,a){a.target.blur(),this.orderBy=t.slug,this.orderDir=this.orderBy!==t.slug?t.sortDir:t.sortDir==="asc"?"desc":"asc",this.wpTableLoading=!0,this.processFetchTableData().then(()=>this.wpTableLoading=!1)},processFetchTableData(t){return this.fetchData({slug:this.slug||null,orderBy:this.orderBy,orderDir:this.orderDir,limit:this.resultsPerPage,offset:this.pageNumber===1?0:(this.pageNumber-1)*this.resultsPerPage,searchTerm:this.searchTerm,filter:this.filter,additionalFilters:t||this.selectedFilters})},resetSelectedFilters(){}},created(){const t=O();this.resultsPerPage=t.settings.tablePagination[this.changeItemsPerPageSlug]||this.resultsPerPage}};const Q={emits:["process-additional-filters","change"],props:{additionalFilters:{type:Array,required:!0},selectedFilters:{type:Object,default(){return{}}}},data(){return{strings:{filter:this.$t.__("Filter",this.$td)}}},mounted(){this.setInitialOptions()},updated(){this.setInitialOptions()},methods:{setInitialOptions(){this.additionalFilters.forEach(t=>{this.selectedFilters[t.name]||(this.selectedFilters[t.name]=t.options[0].value)})}}},G={class:"aioseo-wp-additional-filters alignleft actions"},X={for:"filter-by-date",class:"screen-reader-text"},Y=["name","onUpdate:modelValue","onChange"],Z=["value"];function $(t,a,e,P,l,c){return s(),i("div",G,[(s(!0),i(m,null,y(e.additionalFilters,(u,p)=>(s(),i(m,{key:p},[o("label",X,d(u.label),1),C(o("select",{name:u.name,"onUpdate:modelValue":f=>e.selectedFilters[u.name]=f,onChange:f=>t.$emit("change",{name:u.name,selectedValue:f.target.value})},[(s(!0),i(m,null,y(u.options,(f,B)=>(s(),i("option",{key:B,value:f.value},d(f.label),9,Z))),128))],40,Y),[[D,e.selectedFilters[u.name]]])],64))),128)),o("button",{class:"button action",onClick:a[0]||(a[0]=u=>t.$emit("process-additional-filters",e.selectedFilters))},d(l.strings.filter),1)])}const ee=N(Q,[["render",$]]);const te={emits:["process-bulk-action"],props:{bulkOptions:{type:Array,required:!0},disableTable:Boolean},data(){return{bulkAction:"-1",strings:{bulkActions:this.$t.__("Bulk Actions",this.$td),apply:this.$t.__("Apply",this.$td)}}}},se={class:"aioseo-wp-bulk-actions alignleft actions bulkactions"},ae=["disabled"],le={value:"-1"},ie=["value"],ne=["disabled"];function oe(t,a,e,P,l,c){return s(),i("div",se,[C(o("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>l.bulkAction=u),disabled:e.disableTable},[o("option",le,d(l.strings.bulkActions),1),(s(!0),i(m,null,y(e.bulkOptions,(u,p)=>(s(),i("option",{key:p,value:u.value},d(u.label),9,ie))),128))],8,ae),[[D,l.bulkAction]]),o("button",{class:"button action",onClick:a[1]||(a[1]=u=>l.bulkAction!=="-1"?t.$emit("process-bulk-action",l.bulkAction):null),disabled:e.disableTable},d(l.strings.apply),9,ne)])}const re=N(te,[["render",oe]]);const ue={props:{modelValue:Number,disableTable:Boolean},data(){return{items:[5,10,20,25,50,100],itemsPerPage:20,strings:{itemsPerPage:this.$t.__("items per page",this.$td)}}},watch:{itemsPerPage(t){this.$emit("update:modelValue",t)}},mounted(){this.itemsPerPage=this.modelValue}},ce={class:"aioseo-wp-items-per-page alignleft"},de=["disabled"],be=["value"];function he(t,a,e,P,l,c){return s(),i("div",ce,[o("label",null,[C(o("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>l.itemsPerPage=u),disabled:e.disableTable},[(s(!0),i(m,null,y(l.items,(u,p)=>(s(),i("option",{key:p,value:u},d(u),9,be))),128))],8,de),[[D,l.itemsPerPage]]),o("span",null,d(l.strings.itemsPerPage),1)])])}const me=N(ue,[["render",he]]),ge={emits:["paginate"],props:{totals:{type:Object,required:!0},initialPageNumber:{type:Number,default(){return 1}},disableTable:Boolean},data(){return{numbers:q,pageNumber:1,strings:{of:this.$t.__("of",this.$td),items:this.$t.__("items",this.$td)}}},watch:{initialPageNumber(t){t!==this.pageNumber&&(this.pageNumber=t)}},methods:{toPage(t){this.pageNumber=t,this.$emit("paginate",parseInt(t))}},created(){this.pageNumber=this.initialPageNumber}},_e={class:"tablenav-pages pagination"},pe={class:"displaying-num"},fe={class:"pagination-links"},ye={class:"paging-input"},ke=["max","disabled"],Pe={class:"tablenav-paging-text"};function we(t,a,e,P,l,c){return s(),i("div",_e,[o("span",pe,d(l.numbers.numberFormat(e.totals.total))+" "+d(l.strings.items),1),o("span",fe,[(s(),g(S(l.pageNumber===1?"span":"a"),{href:"#",class:_(l.pageNumber===1?"tablenav-pages-navspan button disabled":"first-page button"),onClick:a[0]||(a[0]=F(u=>l.pageNumber===1?null:c.toPage(1),["prevent"]))},{default:k(()=>[v(" « ")]),_:1},8,["class"])),(s(),g(S(l.pageNumber===1?"span":"a"),{href:"#",class:_(l.pageNumber===1?"tablenav-pages-navspan button disabled":"prev-page button"),onClick:a[1]||(a[1]=F(u=>l.pageNumber===1?null:c.toPage(l.pageNumber-1),["prevent"]))},{default:k(()=>[v(" ‹ ")]),_:1},8,["class"])),o("span",ye,[C(o("input",{class:"current-page",type:"number",name:"paged","onUpdate:modelValue":a[2]||(a[2]=u=>l.pageNumber=u),size:"2",min:1,max:e.totals.pages||1,step:1,"aria-describedby":"table-paging",onKeyup:a[3]||(a[3]=H(u=>c.toPage(l.pageNumber),["enter"])),disabled:!e.totals.pages||e.disableTable},null,40,ke),[[j,l.pageNumber]]),o("span",Pe,d(l.strings.of)+" "+d(e.totals.pages||0),1)]),(s(),g(S(l.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(l.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"next-page button"),onClick:a[4]||(a[4]=F(u=>l.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(l.pageNumber+1),["prevent"]))},{default:k(()=>[v(" › ")]),_:1},8,["class"])),(s(),g(S(l.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(l.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"last-page button"),onClick:a[5]||(a[5]=F(u=>l.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(e.totals.pages),["prevent"]))},{default:k(()=>[v(" » ")]),_:1},8,["class"]))])])}const ve=N(ge,[["render",we]]);const Te={emits:["sort-column"],components:{CoreTooltip:z},props:{column:{type:Object,required:!0},disableTable:Boolean,allowTooltipIcon:Boolean}},Fe={key:0,class:"aioseo-table-header-tooltip-icon"},Ne=o("span",{class:"sorting-indicator"},null,-1);function Ae(t,a,e,P,l,c){const u=w("core-tooltip");return s(),i("th",{scope:"col",style:K({width:e.column.width}),class:_(["aioseo-manage-column manage-column",[{sortable:!e.disableTable&&e.column.sortable,asc:e.column.sortDir==="asc"&&e.column.sortable,desc:e.column.sortDir==="desc"&&e.column.sortable,sorted:e.column.sortable&&e.column.sorted},e.column.slug]])},[e.allowTooltipIcon&&e.column.tooltipIcon?(s(),i("div",Fe,[L(u,{class:"action",type:"action"},{tooltip:k(()=>[v(d(e.column.label),1)]),default:k(()=>[(s(),g(S(e.column.tooltipIcon)))]),_:1})])):r("",!0),!e.allowTooltipIcon||!e.column.tooltipIcon?(s(),i(m,{key:1},[e.column.sortable?(s(),i("a",{key:0,href:"#",onClick:a[0]||(a[0]=F(p=>t.$emit("sort-column",e.column,p),["prevent"]))},[o("span",null,d(e.column.label),1),Ne])):r("",!0),e.column.sortable?r("",!0):(s(),i(m,{key:1},[t.$slots.headerFooter?T(t.$slots,"headerFooter",{key:0}):r("",!0),t.$slots.headerFooter?r("",!0):(s(),i(m,{key:1},[v(d(e.column.label),1)],64))],64))],64)):r("",!0)],6)}const Se=N(Te,[["render",Ae]]);const R="all-in-one-seo-pack",Ce={emits:["sort-column","process-bulk-action","paginate","search","filter-table","process-change-items-per-page","process-additional-filters","additional-filter-option-selected"],components:{CoreLoader:M,CoreWpAdditionalFilters:ee,CoreWpBulkActions:re,CoreWpItemsPerPage:me,CoreWpPagination:ve,CoreWpTableHeaderFooter:Se,TransitionSlide:J},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},filters:{type:Array,required:!1},totals:{type:Object,required:!1},loading:Boolean,showSearch:{type:Boolean,default(){return!0}},showBulkActions:{type:Boolean,default(){return!0}},showPagination:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},searchLabel:{type:String,default(){return I("Search",R)}},initialPageNumber:{type:Number,default(){return 1}},initialItemsPerPage:{type:Number,default(){return 20}},initialSearchTerm:{type:String,default(){return""}},noResultsLabel:{type:String},bulkOptions:Array,additionalFilters:Array,selectedFilters:Object,itemsPerPageFilter:String,blurRows:Boolean,disableTable:Boolean,showItemsPerPage:Boolean},data(){return{numbers:q,itemsPerPage:null,searchTerm:"",pageNumber:1,activeRow:null,strings:{items:I("items",R),noResults:I("No items found.",R)}}},watch:{initialPageNumber(t){this.pageNumber=t},pageNumber(t){if(Math.abs(t)!==t){this.pageNumber=Math.floor(t);return}if(this.totals&&t>this.totals.pages){this.pageNumber=this.totals.pages;return}1>t&&(this.pageNumber=1)},itemsPerPage(t,a){a!==null&&this.processChangeItemsPerPage()}},methods:{showFilterCount(t){return Object.prototype.hasOwnProperty.call(t,"count")},editRow(t){if(t===null||this.activeRow===t){this.activeRow=null;return}this.activeRow=t},processSearch(){E(()=>{this.editRow(-1),this.$emit("search",this.searchTerm)},100)},processChangeItemsPerPage(){this.$emit("process-change-items-per-page",this.itemsPerPage)},processBulkAction(t){this.$emit("process-bulk-action",{action:t,selectedRows:this.selectedItems()}),this.editRow(-1),this.resetSelectedItems()},processPaginate(t){this.pageNumber=t,this.editRow(-1),this.$emit("paginate",t,this.searchTerm)},processFilter(t){this.pageNumber=1,this.searchTerm="",this.editRow(-1),this.$emit("filter-table",t)},processAdditionalFilters(t){this.pageNumber=1,this.searchTerm="",this.editRow(-1),this.$emit("process-additional-filters",{filters:t})},selectedItems(){const t=this.$refs.table.querySelectorAll("tbody tr.main-row"),a=[];return t.forEach(e=>{const P=e.querySelector("th.check-column input");P&&P.checked&&a.push(e.dataset.rowId)}),a},resetSelectedItems(){const t=this.$refs.table.querySelectorAll(".check-column input:checked");t&&t.forEach(a=>a.checked=!1)},setPageNumber(t){this.pageNumber=t}},computed:{filteredColumns(){return this.columns.filter(t=>"show"in t?t.show:!0)},noResults(){return this.noResultsLabel||this.strings.noResults}},created(){this.pageNumber=this.initialPageNumber,this.searchTerm=this.initialSearchTerm,this.itemsPerPage=this.initialItemsPerPage}},Be={class:"aioseo-wp-table"},Ie={key:0,class:"aioseo-wp-table-header"},Re={class:"subsubsub"},Le=["onClick"],De={key:0},Oe={key:0},Ve={key:0,class:"separator"},qe={key:0,class:"search-box"},je=["disabled"],He=["value","disabled"],Ue={class:"tablenav top"},We=o("br",{class:"clear"},null,-1),xe={class:"wp-table"},Me={key:0,class:"manage-column column-cb check-column"},Ee=["disabled"],Ke={key:0,id:"the-list"},ze={key:0,class:"loader-overlay-table"},Je=["data-row-id","data-row-index"],Qe={key:0,scope:"row",class:"check-column"},Ge=["disabled"],Xe=["colspan"],Ye={key:1},Ze=["colspan"],$e={class:"border"},et=["colspan"],tt={class:"no-results"},st={key:0},at={key:1},lt={key:0,class:"manage-column column-cb check-column"},it=["disabled"],nt={key:1,class:"tablenav bottom"},ot=o("div",{class:"alignleft actions"},null,-1),rt=o("br",{class:"clear"},null,-1);function ut(t,a,e,P,l,c){const u=w("core-wp-bulk-actions"),p=w("core-wp-additional-filters"),f=w("core-wp-pagination"),B=w("core-wp-table-header-footer"),U=w("core-loader"),W=w("transition-slide"),x=w("core-wp-items-per-page");return s(),i("div",Be,[e.showHeader?(s(),i("div",Ie,[o("ul",Re,[(s(!0),i(m,null,y(e.filters,(n,b)=>(s(),i("li",{key:b,class:_(n.slug)},[o("span",{class:_(["name",{active:n.active}])},[!n.active&&!e.disableTable?(s(),i("a",{key:0,href:"#",onClick:F(h=>c.processFilter(n),["prevent"])},[v(d(n.name)+" ",1),c.showFilterCount(n)?(s(),i("span",De," ("+d(l.numbers.numberFormat(n.count))+")",1)):r("",!0)],8,Le)):r("",!0),n.active||e.disableTable?(s(),i(m,{key:1},[v(d(n.name)+" ",1),c.showFilterCount(n)?(s(),i("span",Oe," ("+d(l.numbers.numberFormat(n.count))+")",1)):r("",!0)],64)):r("",!0)],2),b+1<e.filters.length?(s(),i("span",Ve,"|")):r("",!0)],2))),128))]),e.showSearch?(s(),i("p",qe,[C(o("input",{type:"search",id:"post-search-input",name:"s","onUpdate:modelValue":a[0]||(a[0]=n=>l.searchTerm=n),onKeyup:a[1]||(a[1]=H((...n)=>c.processSearch&&c.processSearch(...n),["enter"])),onSearch:a[2]||(a[2]=(...n)=>c.processSearch&&c.processSearch(...n)),disabled:e.disableTable},null,40,je),[[j,l.searchTerm]]),o("input",{type:"submit",id:"search-submit",class:"button",value:e.searchLabel,onClick:a[3]||(a[3]=F((...n)=>c.processSearch&&c.processSearch(...n),["prevent"])),disabled:e.disableTable},null,8,He)])):r("",!0),o("div",Ue,[T(t.$slots,"tablenav"),e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.additionalFilters&&e.additionalFilters.length?(s(),g(p,{key:1,"additional-filters":e.additionalFilters,"selected-filters":e.selectedFilters,onChange:a[4]||(a[4]=n=>t.$emit("additional-filter-option-selected",n)),onProcessAdditionalFilters:c.processAdditionalFilters},null,8,["additional-filters","selected-filters","onProcessAdditionalFilters"])):r("",!0),e.showPagination?(s(),g(f,{key:2,totals:e.totals,"initial-page-number":l.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),We])])):r("",!0),o("div",xe,[o("table",{class:_(["wp-list-table widefat fixed",{blurred:e.blurRows}]),ref:"table",cellpadding:"0",cellspacing:"0","aria-label":"Paginated Table"},[o("thead",null,[o("tr",null,[e.showBulkActions?(s(),i("td",Me,[o("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,Ee)])):r("",!0),(s(!0),i(m,null,y(e.columns,(n,b)=>(s(),g(B,{key:b,column:n,"disable-table":e.disableTable,onSortColumn:(h,A)=>t.$emit("sort-column",h,A),"allow-tooltip-icon":""},V({_:2},[t.$slots[n.slug+"HeaderFooter"]?{name:"headerFooter",fn:k(()=>[T(t.$slots,n.slug+"HeaderFooter",{area:"header"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])]),e.rows?(s(),i("tbody",Ke,[e.loading?(s(),i("div",ze,[L(U)])):r("",!0),(s(!0),i(m,null,y(e.rows,(n,b)=>(s(),i(m,{key:b},[o("tr",{class:_(["main-row",{even:b%2===0,enabled:n.enabled||!n.hasOwnProperty("enabled")}]),"data-row-id":n.rowIndex&&n[n.rowIndex]||n.id||n.url||b,"data-row-index":b},[e.showBulkActions?(s(),i("th",Qe,[n.preventBulkAction?r("",!0):(s(),i("input",{key:0,type:"checkbox",disabled:e.disableTable},null,8,Ge))])):r("",!0),(s(!0),i(m,null,y(c.filteredColumns,(h,A)=>(s(),i("td",{class:_(["manage-column",h.slug]),key:A,colspan:h!=null&&h.colspan?h.colspan:1},[t.$slots[h.slug]?T(t.$slots,h.slug,{key:0,row:n,column:n[h.slug],editRow:c.editRow,index:b,editRowActive:l.activeRow===b}):r("",!0),t.$slots[h.slug]?r("",!0):(s(),i("span",Ye,d(n[h.slug]),1))],10,Xe))),128))],10,Je),o("tr",{class:_(["edit-row",{even:b%2===0}])},[o("td",{colspan:e.showBulkActions?e.columns.length+1:e.columns.length,class:"edit-row-content"},[L(W,{tag:"div",class:"wrapper",active:b===l.activeRow},{default:k(()=>[o("div",$e,[T(t.$slots,"edit-row",{row:n,index:b,editRow:c.editRow})])]),_:2},1032,["active"])],8,Ze)],2)],64))),128)),e.rows.length?r("",!0):(s(),i("td",{key:1,colspan:e.columns.length},[o("div",tt,[e.loading?r("",!0):(s(),i("span",st,d(c.noResults),1))])],8,et))])):r("",!0),e.showTableFooter?(s(),i("tfoot",at,[o("tr",null,[e.showBulkActions?(s(),i("td",lt,[o("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,it)])):r("",!0),(s(!0),i(m,null,y(e.columns,(n,b)=>(s(),g(B,{key:b,column:n,"disable-table":e.disableTable,onSortColumn:(h,A)=>t.$emit("sort-column",h,A)},V({_:2},[t.$slots[n.slug+"HeaderFooter"]?{name:"headerFooter",fn:k(()=>[T(t.$slots,n.slug+"HeaderFooter",{area:"footer"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])])):r("",!0)],2),T(t.$slots,"cta")]),e.showTableFooter?(s(),i("div",nt,[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.showItemsPerPage?(s(),g(x,{key:1,modelValue:l.itemsPerPage,"onUpdate:modelValue":a[5]||(a[5]=n=>l.itemsPerPage=n),"disable-table":e.disableTable},null,8,["modelValue","disable-table"])):r("",!0),ot,e.showPagination?(s(),g(f,{key:2,totals:e.totals,"initial-page-number":l.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),rt])):r("",!0)])}const yt=N(Ce,[["render",ut]]);export{yt as C,ft as W};