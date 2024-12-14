(()=>{var e,t,r,n={2767:(e,t,r)=>{"use strict";r.r(t);var n=r(1609);const o=window.wp.blocks;var i=r(851),c=r(7104),a=r(3576);const l=window.wp.blockEditor;var s=r(7723);const u=window.wc.wcSettings;var m,p,d,b,w,_,g,f,h,E;const k=(0,u.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),y=(k.pluginUrl,k.pluginUrl,null===(m=u.STORE_PAGES.shop)||void 0===m||m.permalink,null===(p=u.STORE_PAGES.checkout)||void 0===p||p.id,null===(d=u.STORE_PAGES.checkout)||void 0===d||d.permalink,null===(b=u.STORE_PAGES.privacy)||void 0===b||b.permalink,null===(w=u.STORE_PAGES.privacy)||void 0===w||w.title,null===(_=u.STORE_PAGES.terms)||void 0===_||_.permalink,null===(g=u.STORE_PAGES.terms)||void 0===g||g.title,null===(f=u.STORE_PAGES.cart)||void 0===f||f.id,null===(h=u.STORE_PAGES.cart)||void 0===h||h.permalink,null!==(E=u.STORE_PAGES.myaccount)&&void 0!==E&&E.permalink?u.STORE_PAGES.myaccount.permalink:(0,u.getSetting)("wpLoginUrl","/wp-login.php"),(0,u.getSetting)("localPickupEnabled",!1),(0,u.getSetting)("countries",{})),v=(0,u.getSetting)("countryData",{}),S=(Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,y[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).map((e=>[e,v[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]});(0,u.getSetting)("addressFieldsLocations",S).address,(0,u.getSetting)("addressFieldsLocations",S).contact,(0,u.getSetting)("addressFieldsLocations",S).order,(0,u.getSetting)("additionalOrderFields",{}),(0,u.getSetting)("additionalContactFields",{}),(0,u.getSetting)("additionalAddressFields",{});var C=r(9491);r(4302);const x=(0,C.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:o,instanceId:i})=>{const c=`h${t}`;return(0,n.createElement)(c,{className:e},(0,n.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${i}`},(0,s.__)("Block title","woocommerce")),(0,n.createElement)(l.PlainText,{id:`block-title-${i}`,className:"wc-block-editor-components-title",value:o,onChange:r,style:{backgroundColor:"transparent"}}))}));var F=r(4133);const N=window.wp.components;var O=r(6087);function P(e,t){const r=(0,O.useRef)();return(0,O.useEffect)((()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)}),[e,t]),r.current}const A=window.wc.wcBlocksData,T=window.wp.data;var R=r(923),j=r.n(R);const B=(0,O.createContext)("page"),U=()=>(0,O.useContext)(B),L=(B.Provider,e=>{const t=U();e=e||t;const r=(0,T.useSelect)((t=>t(A.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:n}=(0,T.useDispatch)(A.QUERY_STATE_STORE_KEY);return[r,(0,O.useCallback)((t=>{n(e,t)}),[e,n])]}),I=(e,t,r)=>{const n=U();r=r||n;const o=(0,T.useSelect)((n=>n(A.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:i}=(0,T.useDispatch)(A.QUERY_STATE_STORE_KEY);return[o,(0,O.useCallback)((t=>{i(r,e,t)}),[r,e,i])]};var M=r(4717);const q=window.wc.wcTypes;var G=r(5574);function Q(e){const t=(0,O.useRef)(e);return j()(e,t.current)||(t.current=e),t.current}const V=({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:n,queryState:o,isEditor:i=!1})=>{let c=U();c=`${c}-collection-data`;const[a]=L(c),[l,s]=I("calculate_attribute_counts",[],c),[u,m]=I("calculate_price_range",null,c),[p,d]=I("calculate_stock_status_counts",null,c),[b,w]=I("calculate_rating_counts",null,c),_=Q(e||{}),g=Q(t),f=Q(r),h=Q(n);(0,O.useEffect)((()=>{"object"==typeof _&&Object.keys(_).length&&(l.find((e=>(0,q.objectHasProp)(_,"taxonomy")&&e.taxonomy===_.taxonomy))||s([...l,_]))}),[_,l,s]),(0,O.useEffect)((()=>{u!==g&&void 0!==g&&m(g)}),[g,m,u]),(0,O.useEffect)((()=>{p!==f&&void 0!==f&&d(f)}),[f,d,p]),(0,O.useEffect)((()=>{b!==h&&void 0!==h&&w(h)}),[h,w,b]);const[E,k]=(0,O.useState)(i),[y]=(0,M.d7)(E,200);E||k(!0);const v=(0,O.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,G.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(a)),[a]);return(e=>{const{namespace:t,resourceName:r,resourceValues:n=[],query:o={},shouldSelect:i=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const c=(0,O.useRef)({results:[],isLoading:!0}),a=Q(o),l=Q(n),s=(()=>{const[,e]=(0,O.useState)();return(0,O.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,T.useSelect)((e=>{if(!i)return null;const n=e(A.COLLECTIONS_STORE_KEY),o=[t,r,a,l],c=n.getCollectionError(...o);if(c){if(!(0,q.isError)(c))throw new Error("TypeError: `error` object is not an instance of Error constructor");s(c)}return{results:n.getCollection(...o),isLoading:!n.hasFinishedResolution("getCollection",o)}}),[t,r,l,a,i]);return null!==u&&(c.current=u),c.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...o,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...v},shouldSelect:y})},W=window.wc.blocksComponents;r(9505);const Y=(e,t,r,n=1,o=!1)=>{let[i,c]=e;const a=e=>Number.isFinite(e);return a(i)||(i=t||0),a(c)||(c=r||n),a(t)&&t>i&&(i=t),a(r)&&r<=i&&(i=r-n),a(t)&&t>=c&&(c=t+n),a(r)&&r<c&&(c=r),!o&&i>=c&&(i=c-n),o&&c<=i&&(c=i+n),[i,c]};r(1504);const D=({className:e,isLoading:t,disabled:r,
/* translators: Submit button text for filters. */
label:o=(0,s.__)("Apply","woocommerce"),onClick:c,screenReaderLabel:a=(0,s.__)("Apply filter","woocommerce")})=>(0,n.createElement)("button",{type:"submit",className:(0,i.A)("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:r,onClick:c},(0,n.createElement)(W.Label,{label:o,screenReaderLabel:a})),$=({maxConstraint:e,minorUnit:t})=>({floatValue:r})=>void 0!==r&&r<=e/10**t&&r>0,H=({minConstraint:e,currentMaxValue:t,minorUnit:r})=>({floatValue:n})=>void 0!==n&&n>=e/10**r&&n<t/10**r;r(8335);const K=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,s.__)("Reset","woocommerce"),onClick:r,screenReaderLabel:o=(0,s.__)("Reset filter","woocommerce")})=>(0,n.createElement)("button",{className:(0,i.A)("wc-block-components-filter-reset-button",e),onClick:r},(0,n.createElement)(W.Label,{label:t,screenReaderLabel:o})),z=({minPrice:e,maxPrice:t,minConstraint:r,maxConstraint:o,onChange:c,step:a,currency:l,showInputFields:u=!0,showFilterButton:m=!1,inlineInput:p=!0,isLoading:d=!1,isUpdating:b=!1,isEditor:w=!1,onSubmit:_=(()=>{})})=>{const g=(0,O.useRef)(null),f=(0,O.useRef)(null),h=a||10**l.minorUnit,[E,k]=(0,O.useState)(e),[y,v]=(0,O.useState)(t),S=(0,O.useRef)(null),[C,x]=(0,O.useState)(0);(0,O.useEffect)((()=>{k(e)}),[e]),(0,O.useEffect)((()=>{v(t)}),[t]),(0,O.useLayoutEffect)((()=>{var e;p&&S.current&&x(null===(e=S.current)||void 0===e?void 0:e.offsetWidth)}),[p,x]);const F=(0,O.useMemo)((()=>isFinite(r)&&isFinite(o)),[r,o]),N=(0,O.useMemo)((()=>isFinite(e)&&isFinite(t)&&F?{"--low":(e-r)/(o-r)*100+"%","--high":(t-r)/(o-r)*100+"%"}:{"--low":"0%","--high":"100%"}),[e,t,r,o,F]),P=(0,O.useCallback)((e=>{if(d||!F||!g.current||!f.current)return;const t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=g.current.offsetWidth,i=+g.current.value,c=f.current.offsetWidth,a=+f.current.value,l=n*(i/o),s=c*(a/o);Math.abs(r-l)>Math.abs(r-s)?(g.current.style.zIndex="20",f.current.style.zIndex="21"):(g.current.style.zIndex="21",f.current.style.zIndex="20")}),[d,o,F]),A=(0,O.useCallback)((n=>{const i=n.target.classList.contains("wc-block-price-filter__range-input--min"),a=+n.target.value,l=i?[Math.round(a/h)*h,t]:[e,Math.round(a/h)*h],s=Y(l,r,o,h,i);c(s)}),[c,e,t,r,o,h]),T=(0,M.YQ)(((e,t,r)=>{if(e>=t){const e=Y([0,t],null,null,h,r);return c([parseInt(e[0],10),parseInt(e[1],10)])}const n=Y([e,t],null,null,h,r);c(n)}),1e3),R=(0,M.YQ)(_,600),j=(0,i.A)("wc-block-price-filter","wc-block-components-price-slider",u&&"wc-block-price-filter--has-input-fields",u&&"wc-block-components-price-slider--has-input-fields",m&&"wc-block-price-filter--has-filter-button",m&&"wc-block-components-price-slider--has-filter-button",!F&&"is-disabled",(p||C<=300)&&"wc-block-components-price-slider--is-input-inline"),B=(0,q.isObject)(g.current)?g.current.ownerDocument.activeElement:void 0,U=B&&B===g.current?h:1,L=B&&B===f.current?h:1,I=String(E/10**l.minorUnit),G=String(y/10**l.minorUnit),Q=p&&C>300,V=(0,n.createElement)("div",{className:(0,i.A)("wc-block-price-filter__range-input-wrapper","wc-block-components-price-slider__range-input-wrapper",{"is-loading":d&&b}),onMouseMove:P,onFocus:P},F&&(0,n.createElement)("div",{"aria-hidden":u},(0,n.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:N}),(0,n.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":(0,s.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":I,value:Number.isFinite(e)?e:r,onChange:A,step:U,min:r,max:o,ref:g,disabled:d&&!F,tabIndex:u?-1:0}),(0,n.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":(0,s.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":G,value:Number.isFinite(t)?t:o,onChange:A,step:L,min:r,max:o,ref:f,disabled:d,tabIndex:u?-1:0}))),z=e=>`wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,J={currency:l,decimalScale:0},X={...J,displayType:"input",allowNegative:!1,disabled:d||!F,onClick:e=>{const t=e.currentTarget;t&&t.select()}};return(0,n.createElement)("div",{className:j,ref:S},(!Q||!u)&&V,u&&(0,n.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},b?(0,n.createElement)("div",{className:"input-loading"}):(0,n.createElement)(W.FormattedMonetaryAmount,{...X,className:z("min"),"aria-label":(0,s.__)("Filter products by minimum price","woocommerce"),isAllowed:H({minConstraint:r,minorUnit:l.minorUnit,currentMaxValue:y}),onValueChange:e=>{e!==E&&(k(e),T(e,y,!0))},value:E}),Q&&V,b?(0,n.createElement)("div",{className:"input-loading"}):(0,n.createElement)(W.FormattedMonetaryAmount,{...X,className:z("max"),"aria-label":(0,s.__)("Filter products by maximum price","woocommerce"),isAllowed:$({maxConstraint:o,minorUnit:l.minorUnit}),onValueChange:e=>{e!==y&&(v(e),T(E,e,!1))},value:y})),!u&&!b&&Number.isFinite(e)&&Number.isFinite(t)&&(0,n.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},(0,n.createElement)(W.FormattedMonetaryAmount,{...J,value:e}),(0,n.createElement)(W.FormattedMonetaryAmount,{...J,value:t})),(0,n.createElement)("div",{className:"wc-block-components-price-slider__actions"},(w||!b&&(e!==r||t!==o))&&(0,n.createElement)(K,{onClick:()=>{c([r,o]),R()},screenReaderLabel:(0,s.__)("Reset price filter","woocommerce")}),m&&(0,n.createElement)(D,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",isLoading:b,disabled:d||!F,onClick:_,screenReaderLabel:(0,s.__)("Apply price filter","woocommerce")})))};r(1626);const J=({children:e})=>(0,n.createElement)("div",{className:"wc-block-filter-title-placeholder"},e),X=window.wc.priceFormat,Z=window.wp.url,ee=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,q.isBoolean);function te(e){return window?(0,Z.getQueryArg)(window.location.href,e):null}function re(e){if(ee){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,r)=>{r.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(r)})),window.location.href=t.href}else window.history.replaceState({},"",e)}const ne="ROUND_UP",oe="ROUND_DOWN",ie=(e,t,r)=>{const n=10*10**t;let o=null;const i=parseFloat(e);isNaN(i)||(r===ne?o=Math.ceil(i/n)*n:r===oe&&(o=Math.floor(i/n)*n));const c=P(o,Number.isFinite);return Number.isFinite(o)?o:c};r(8836);const ce=(0,O.createContext)({});function ae(e,t){return Number(e)*10**t}const le=({attributes:e,isEditor:t=!1})=>{const r=(()=>{const{wrapper:e}=(0,O.useContext)(ce);return t=>{e&&e.current&&(e.current.hidden=!t)}})(),o=(0,u.getSettingWithCoercion)("hasFilterableProducts",!1,q.isBoolean),i=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,q.isBoolean),[c,a]=(0,O.useState)(!1),l=te("min_price"),s=te("max_price"),[m]=L(),{results:p,isLoading:d}=V({queryPrices:!0,queryState:m,isEditor:t}),b=(0,X.getCurrencyFromPriceResponse)((0,q.objectHasProp)(p,"price_range")?p.price_range:void 0),[w,_]=I("min_price"),[g,f]=I("max_price"),[h,E]=(0,O.useState)(ae(l,b.minorUnit)||null),[k,y]=(0,O.useState)(ae(s,b.minorUnit)||null),{minConstraint:v,maxConstraint:S}=(({minPrice:e,maxPrice:t,minorUnit:r})=>({minConstraint:ie(e||"",r,oe),maxConstraint:ie(t||"",r,ne)}))({minPrice:(0,q.objectHasProp)(p,"price_range")&&(0,q.objectHasProp)(p.price_range,"min_price")&&(0,q.isString)(p.price_range.min_price)?p.price_range.min_price:void 0,maxPrice:(0,q.objectHasProp)(p,"price_range")&&(0,q.objectHasProp)(p.price_range,"max_price")&&(0,q.isString)(p.price_range.max_price)?p.price_range.max_price:void 0,minorUnit:b.minorUnit});(0,O.useEffect)((()=>{c||(_(ae(l,b.minorUnit)),f(ae(s,b.minorUnit)),a(!0))}),[b.minorUnit,c,s,l,f,_]);const[C,x]=(0,O.useState)(d),F=(0,O.useCallback)(((e,t)=>{const r=t>=Number(S)?void 0:t,n=e<=Number(v)?void 0:e;if(window){const e=function(e,t){const r={};for(const[e,n]of Object.entries(t))n?r[e]=n.toString():delete r[e];const n=(0,Z.removeQueryArgs)(e,...Object.keys(t));return(0,Z.addQueryArgs)(n,r)}(window.location.href,{min_price:n/10**b.minorUnit,max_price:r/10**b.minorUnit});window.location.href!==e&&re(e)}_(n),f(r)}),[v,S,_,f,b.minorUnit]),N=(0,M.YQ)(F,500),A=(0,O.useCallback)((t=>{x(!0),t[0]!==h&&E(t[0]),t[1]!==k&&y(t[1]),i&&c&&!e.showFilterButton&&N(t[0],t[1])}),[h,k,E,y,i,c,N,e.showFilterButton]);(0,O.useEffect)((()=>{e.showFilterButton||i||N(h,k)}),[h,k,e.showFilterButton,N,i]);const T=P(w),R=P(g),j=P(v),B=P(S);if((0,O.useEffect)((()=>{(!Number.isFinite(h)||w!==T&&w!==h||v!==j&&v!==h)&&E(Number.isFinite(w)?w:v),(!Number.isFinite(k)||g!==R&&g!==k||S!==B&&S!==k)&&y(Number.isFinite(g)?g:S)}),[h,k,w,g,v,S,j,B,T,R]),!o)return r(!1),null;if(!d&&(null===v||null===S||v===S))return r(!1),null;const U=`h${e.headingLevel}`;r(!0),!d&&C&&x(!1);const G=(0,n.createElement)(U,{className:"wc-block-price-filter__title"},e.heading),Q=d&&C?(0,n.createElement)(J,null,G):G;return(0,n.createElement)(n.Fragment,null,!t&&e.heading&&Q,(0,n.createElement)("div",{className:"wc-block-price-slider"},(0,n.createElement)(z,{minConstraint:v,maxConstraint:S,minPrice:h,maxPrice:k,currency:b,showInputFields:e.showInputFields,inlineInput:e.inlineInput,showFilterButton:e.showFilterButton,onChange:A,onSubmit:()=>F(h,k),isLoading:d,isUpdating:C,isEditor:t})))};r(6562);const se=({clientId:e,setAttributes:t,filterType:r,attributes:i})=>{const{replaceBlock:c}=(0,T.useDispatch)("core/block-editor"),{heading:a,headingLevel:u}=i;if((0,T.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const m=[(0,n.createElement)(N.Button,{key:"convert",onClick:()=>{const n=[(0,o.createBlock)(`woocommerce/${r}`,{...i,heading:""})];a&&""!==a&&n.unshift((0,o.createBlock)("core/heading",{content:a,level:null!=u?u:2})),c(e,(0,o.createBlock)("woocommerce/filter-wrapper",{heading:a,filterType:r},[...n])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,s.__)("Upgrade block","woocommerce"))];return(0,n.createElement)(l.Warning,{actions:m},(0,s.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))},ue=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter by Price Controls","description":"Enable customers to filter the product grid by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),me={heading:{type:"string",default:(0,s.__)("Filter by price","woocommerce")}},pe=[{attributes:{...ue.attributes,...me},save:({attributes:e})=>{const{className:t,showInputFields:r,showFilterButton:o,heading:c,headingLevel:a}=e,s={"data-showinputfields":r,"data-showfilterbutton":o,"data-heading":c,"data-heading-level":a};return(0,n.createElement)("div",{...l.useBlockProps.save({className:(0,i.A)("is-loading",t)}),...s},(0,n.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}}];(0,o.registerBlockType)(ue,{icon:{src:(0,n.createElement)(c.A,{icon:a.A,className:"wc-block-editor-components-block-icon"})},attributes:{...ue.attributes,...me},edit:function({attributes:e,setAttributes:t,clientId:r}){const{heading:o,headingLevel:i,showInputFields:m,inlineInput:p,showFilterButton:d}=e,b=(0,l.useBlockProps)();return(0,n.createElement)("div",{...b},0===k.productCount?(0,n.createElement)(N.Placeholder,{className:"wc-block-price-slider",icon:(0,n.createElement)(c.A,{icon:a.A}),label:(0,s.__)("Filter by Price","woocommerce"),instructions:(0,s.__)("Display a slider to filter products in your store by price.","woocommerce")},(0,n.createElement)("p",null,(0,s.__)("To filter your products by price you first need to assign prices to your products.","woocommerce")),(0,n.createElement)(N.Button,{className:"wc-block-price-slider__add-product-button",variant:"secondary",href:(0,u.getAdminLink)("post-new.php?post_type=product"),target:"_top"},(0,s.__)("Add new product","woocommerce")+" ",(0,n.createElement)(c.A,{icon:F.A})),(0,n.createElement)(N.Button,{className:"wc-block-price-slider__read_more_button",variant:"tertiary",href:"https://woocommerce.com/document/managing-products/",target:"_blank"},(0,s.__)("Learn more","woocommerce"))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.InspectorControls,{key:"inspector"},(0,n.createElement)(N.PanelBody,{title:(0,s.__)("Settings","woocommerce")},(0,n.createElement)(N.__experimentalToggleGroupControl,{label:(0,s.__)("Price Range Selector","woocommerce"),value:m?"editable":"text",onChange:e=>t({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},(0,n.createElement)(N.__experimentalToggleGroupControlOption,{value:"editable",label:(0,s.__)("Editable","woocommerce")}),(0,n.createElement)(N.__experimentalToggleGroupControlOption,{value:"text",label:(0,s.__)("Text","woocommerce")})),m&&(0,n.createElement)(N.ToggleControl,{label:(0,s.__)("Inline input fields","woocommerce"),checked:p,onChange:()=>t({inlineInput:!p}),help:(0,s.__)("Show input fields inline with the slider.","woocommerce")}),(0,n.createElement)(N.ToggleControl,{label:(0,s.__)("Show 'Apply filters' button","woocommerce"),help:(0,s.__)("Products will update when the button is clicked.","woocommerce"),checked:d,onChange:()=>t({showFilterButton:!d})}))),(0,n.createElement)(se,{attributes:e,clientId:r,setAttributes:t,filterType:"price-filter"}),o&&(0,n.createElement)(x,{className:"wc-block-price-filter__title",headingLevel:i,heading:o,onChange:e=>t({heading:e})}),(0,n.createElement)(N.Disabled,null,(0,n.createElement)(le,{attributes:e,isEditor:!0}))))},save({attributes:e}){const{className:t}=e;return(0,n.createElement)("div",{...l.useBlockProps.save({className:(0,i.A)("is-loading",t)})},(0,n.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))},deprecated:pe})},1626:()=>{},8335:()=>{},1504:()=>{},9505:()=>{},6562:()=>{},8836:()=>{},4302:()=>{},1609:e=>{"use strict";e.exports=window.React},9491:e=>{"use strict";e.exports=window.wp.compose},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.m=n,e=[],i.O=(t,r,n,o)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],a=!0,l=0;l<r.length;l++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(a=!1,o<c&&(c=o));if(a){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,i.d(o,c),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=1493,(()=>{var e={1493:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[c,a,l]=r,s=0;if(c.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var u=l(i)}for(t&&t(r);s<c.length;s++)o=c[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=i.O(void 0,[94],(()=>i(2767)));c=i.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["price-filter"]=c})();