"use strict";(self.webpackChunktomas_react_tools=self.webpackChunktomas_react_tools||[]).push([[194],{"./src/components/UnitInput/UnitInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UnitInput_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),UnitInput_module_unitInput=(__webpack_require__("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),"UnitInput_unitInput__rdQhG"),UnitSearch=__webpack_require__("./src/components/UnitSearch/UnitSearch.tsx"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),UnitInputActionType=function(UnitInputActionType){return UnitInputActionType.SetUnit="SetMeasure",UnitInputActionType.SetNumber="SetNumber",UnitInputActionType}({}),unitInputReducer=function unitInputReducer(state,action){switch(action.type){case UnitInputActionType.SetUnit:return function setUnit(state,action){var number=state.number,unit=action.unit;return{measure:unit&&void 0!==number?new lib.Measure(unit,number):void 0,unit:unit,number:number}}(state,action);case UnitInputActionType.SetNumber:return function setNumber(state,action){var number=action.number,unit=state.unit;return{measure:unit&&void 0!==number?new lib.Measure(unit,number):void 0,unit:unit,number:number}}(state,action)}},useUpdate=__webpack_require__("./src/hooks/useUpdate.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["searchPlaceholder","value","onChange"],UnitInput=function UnitInput(_ref){var _state$number$toStrin,_state$number,_state$unit,searchPlaceholder=_ref.searchPlaceholder,value=_ref.value,onChange=_ref.onChange,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),initialValue=(0,react.useMemo)((function(){return value?{unit:value.unit,measure:value,number:value.value}:{unit:void 0,measure:void 0,number:void 0}}),[value]),_useReducer=(0,react.useReducer)(unitInputReducer,initialValue),_useReducer2=(0,slicedToArray.Z)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return(0,useUpdate.P)((function(){onChange&&onChange(state.measure)}),[state]),(0,jsx_runtime.jsxs)("span",{className:UnitInput_module_unitInput,children:[(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(esm.qo,{formatting:{number:{},align:"right"},onChange:function onChange(e){return dispatch({type:UnitInputActionType.SetNumber,number:Number(e.target.value)})},value:null!==(_state$number$toStrin=null===(_state$number=state.number)||void 0===_state$number?void 0:_state$number.toString())&&void 0!==_state$number$toStrin?_state$number$toStrin:void 0})}),(0,jsx_runtime.jsx)(UnitSearch.R,(0,objectSpread2.Z)({value:null!==(_state$unit=state.unit)&&void 0!==_state$unit?_state$unit:void 0,onChange:function onChange(unit){return dispatch({type:UnitInputActionType.SetUnit,unit:unit})},placeholder:searchPlaceholder},rest))]})};try{UnitInput.displayName="UnitInput",UnitInput.__docgenInfo={description:"",displayName:"UnitInput",props:{prefixKeywords:{defaultValue:null,description:"",name:"prefixKeywords",required:!0,type:{name:"UnitPrefixKeywords"}},unitKeywords:{defaultValue:null,description:"",name:"unitKeywords",required:!0,type:{name:"UnitKeywords"}},unitPrefixTextFn:{defaultValue:null,description:"",name:"unitPrefixTextFn",required:!0,type:{name:"UnitPrefixTextFn"}},unitTextFn:{defaultValue:null,description:"",name:"unitTextFn",required:!0,type:{name:"UnitTextFn<Dimension>"}},searchPlaceholder:{defaultValue:null,description:"",name:"searchPlaceholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:'Measure<"acceleration" | "amountOfSubstance" | "area" | "capacitance" | "charge" | "conductance" | "conductivity" | "current" | "density" | "energy" | "force" | "frequency" | "inductance" | ... 13 more ... | "volume">'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((measure?: Measure<"acceleration" | "amountOfSubstance" | "area" | "capacitance" | "charge" | "conductance" | "conductivity" | "current" | "density" | "energy" | "force" | "frequency" | ... 14 more ... | "volume">) => void)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitInput/UnitInput.tsx#UnitInput"]={docgenInfo:UnitInput.__docgenInfo,name:"UnitInput",path:"src/components/UnitInput/UnitInput.tsx#UnitInput"})}catch(__react_docgen_typescript_loader_error){}var _Example$parameters,_Example$parameters2,_Example$parameters2$,unitTextFn=__webpack_require__("./src/test-data/unitTextFn.ts"),unitPrefixTextFn=__webpack_require__("./src/test-data/unitPrefixTextFn.ts"),unitKeywords=__webpack_require__("./src/test-data/unitKeywords.ts"),unitPrefixKeywords=__webpack_require__("./src/test-data/unitPrefixKeywords.ts"),UnitInput_stories={title:"Components/UnitInput",component:UnitInput,tags:["autodocs"],parameters:{layout:"centered"}},Example={args:{unitPrefixTextFn:unitPrefixTextFn.T,unitKeywords:unitKeywords.g,unitTextFn:unitTextFn.q,prefixKeywords:unitPrefixKeywords.g,searchPlaceholder:"Enter a unit"}};Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    unitPrefixTextFn,\n    unitKeywords,\n    unitTextFn,\n    prefixKeywords: unitPrefixKeywords,\n    searchPlaceholder: "Enter a unit"\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Combobox/Combobox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return Combobox}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),ComboboxList_module_list="ComboboxList_list__euIov",objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Item_module_item="Item_item__j13cg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","active"],Item=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,active=_ref.active,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),id=(0,floating_ui_react.PC)();return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:ref,role:"option",id:id,"aria-selected":active},rest),{},{className:Item_module_item,children:children}))}));try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/Item.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/components/Combobox/Item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}var ComboboxList=function ComboboxList(_ref){var activeIndex=_ref.activeIndex,floating=_ref.floating,interactions=_ref.interactions,items=_ref.items,listRef=_ref.listRef,open=_ref.open,selectItem=_ref.selectItem,refs=floating.refs,floatingStyles=floating.floatingStyles,context=floating.context,getFloatingProps=interactions.getFloatingProps,getItemProps=interactions.getItemProps;return(0,jsx_runtime.jsx)(floating_ui_react.ll,{children:open&&(0,jsx_runtime.jsx)(floating_ui_react.wD,{context:context,initialFocus:-1,visuallyHiddenDismiss:!0,children:(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},getFloatingProps({ref:refs.setFloating,style:floatingStyles})),{},{className:ComboboxList_module_list,children:items.map((function(item,index){return(0,jsx_runtime.jsx)(Item,(0,objectSpread2.Z)((0,objectSpread2.Z)({},getItemProps({key:item.value,ref:function ref(node){listRef.current[index]=node},onClick:function onClick(){var _refs$domReference$cu;selectItem(item),null===(_refs$domReference$cu=refs.domReference.current)||void 0===_refs$domReference$cu||_refs$domReference$cu.focus()}})),{},{active:activeIndex===index,value:item.value,children:item.label}))}))}))})})};try{ComboboxList.displayName="ComboboxList",ComboboxList.__docgenInfo={description:"",displayName:"ComboboxList",props:{activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!0,type:{name:"number | null"}},floating:{defaultValue:null,description:"",name:"floating",required:!0,type:{name:"{ placement: Placement; strategy: Strategy; middlewareData: MiddlewareData; x: number; y: number; isPositioned: boolean; update: () => void; floatingStyles: CSSProperties; refs: { ...; } & ExtendedRefs<...>; elements: { ...; } & ExtendedElements<...>; context: { ...; }; }"}},interactions:{defaultValue:null,description:"",name:"interactions",required:!0,type:{name:"{ getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>; getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<...>; getItemProps: (userProps?: HTMLProps<...> | undefined) => Record<...>; }"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ComboboxItem[]"}},listRef:{defaultValue:null,description:"",name:"listRef",required:!0,type:{name:"MutableRefObject<(HTMLElement | null)[]>"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},selectItem:{defaultValue:null,description:"",name:"selectItem",required:!0,type:{name:"(item: ComboboxItem) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/ComboboxList.tsx#ComboboxList"]={docgenInfo:ComboboxList.__docgenInfo,name:"ComboboxList",path:"src/components/Combobox/ComboboxList.tsx#ComboboxList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/@digdir/design-system-tokens/brand/digdir/tokens.css");var Combobox_module_button="Combobox_button__-JV4J",classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Combobox=function Combobox(_ref){var placeholder=_ref.placeholder,triggerOnChange=_ref.onChange,_ref$openOnFocus=_ref.openOnFocus,openOnFocus=void 0!==_ref$openOnFocus&&_ref$openOnFocus,searchResult=_ref.searchResult,selectedClassName=_ref.selectedClassName,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),inputValue=_useState4[0],setInputValue=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),activeIndex=_useState6[0],setActiveIndex=_useState6[1],_useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),selectedItem=_useState8[0],setSelectedItem=_useState8[1];(0,react.useEffect)((function(){if("string"==typeof value){var newSelectedValue=searchResult(value).find((function(item){return item.value===value}));setSelectedItem(newSelectedValue||null)}else value&&setSelectedItem(value)}),[searchResult,value]);var listRef=(0,react.useRef)([]),floating=(0,floating_ui_react.YF)({whileElementsMounted:floating_ui_dom_browser_min.Me,open:open,onOpenChange:setOpen,middleware:[(0,floating_ui_core_browser_min.RR)({padding:10}),(0,floating_ui_core_browser_min.dp)({apply:function apply(_ref2){var rects=_ref2.rects,availableHeight=_ref2.availableHeight,elements=_ref2.elements;Object.assign(elements.floating.style,{width:"".concat(rects.reference.width,"px"),maxHeight:"".concat(availableHeight,"px")})},padding:10})]}),refs=floating.refs,context=floating.context,role=(0,floating_ui_react.qs)(context,{role:"listbox"}),dismiss=(0,floating_ui_react.bQ)(context),listNav=(0,floating_ui_react.c0)(context,{listRef:listRef,activeIndex:activeIndex,onNavigate:setActiveIndex,virtual:!0,loop:!0}),interactions=(0,floating_ui_react.NI)([role,dismiss,listNav]),getReferenceProps=interactions.getReferenceProps,items=searchResult(inputValue),selectItem=function selectItem(item){item.searchString?setInputValue(item.searchString):(setInputValue(""),setSelectedItem(item),triggerOnChange&&triggerOnChange(item.value)),setOpen(!1)};return selectedItem?(0,jsx_runtime.jsx)(esm.zx,{className:classnames_default()(selectedClassName,Combobox_module_button),color:"secondary",onClick:function onClick(){return setSelectedItem(null)},role:"combobox",size:"medium",type:"button",value:selectedItem.value,variant:"outline",children:selectedItem.label}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.qo,(0,objectSpread2.Z)({autoComplete:"off",autoFocus:!0},getReferenceProps({ref:refs.setReference,onChange:function onChange(event){var value=event.target.value;setInputValue(value),value?(setOpen(!0),setActiveIndex(0)):setOpen(!1)},onFocus:function onFocus(){return openOnFocus&&setOpen(!0)},value:inputValue,placeholder:placeholder,"aria-autocomplete":"list",onKeyDown:function onKeyDown(event){"Enter"===event.key&&null!=activeIndex&&items[activeIndex]&&(selectItem(items[activeIndex]),setActiveIndex(null))}}))),(0,jsx_runtime.jsx)(ComboboxList,{activeIndex:activeIndex,floating:floating,interactions:interactions,items:items,listRef:listRef,open:open,selectItem:selectItem})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},openOnFocus:{defaultValue:{value:"false"},description:"",name:"openOnFocus",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},searchResult:{defaultValue:null,description:"",name:"searchResult",required:!0,type:{name:"(input: string) => ComboboxItem[]"}},selectedClassName:{defaultValue:null,description:"",name:"selectedClassName",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string | ComboboxItem"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"src/components/Combobox/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Combobox/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return _Combobox__WEBPACK_IMPORTED_MODULE_0__.h}});var _Combobox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Combobox/Combobox.tsx")},"./src/components/UnitItem/UnitItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return UnitItem}});__webpack_require__("./node_modules/react/index.js");var UnitItem_module_root="UnitItem_root__h076S",UnitItem_module_unit="UnitItem_unit__Ndkxa",UnitItem_module_dimension="UnitItem_dimension__b1NKZ",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitItem=function UnitItem(_ref){var name=_ref.name,symbol=_ref.symbol,dimension=_ref.dimension;return(0,jsx_runtime.jsxs)("span",{className:UnitItem_module_root,children:[(0,jsx_runtime.jsxs)("span",{className:UnitItem_module_unit,children:[(0,jsx_runtime.jsx)("span",{children:name})," ",(0,jsx_runtime.jsxs)("span",{children:["(",symbol,")"]})]}),(0,jsx_runtime.jsx)("span",{className:UnitItem_module_dimension,children:dimension})]})};try{UnitItem.displayName="UnitItem",UnitItem.__docgenInfo={description:"",displayName:"UnitItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!0,type:{name:"string"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitItem/UnitItem.tsx#UnitItem"]={docgenInfo:UnitItem.__docgenInfo,name:"UnitItem",path:"src/components/UnitItem/UnitItem.tsx#UnitItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnitPrefixItem/UnitPrefixItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return UnitPrefixItem}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitPrefixItem=function UnitPrefixItem(_ref){var prefixName=_ref.prefixName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:prefixName})};try{UnitPrefixItem.displayName="UnitPrefixItem",UnitPrefixItem.__docgenInfo={description:"",displayName:"UnitPrefixItem",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!0,type:{name:"Prefix"}},prefixName:{defaultValue:null,description:"",name:"prefixName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitPrefixItem/UnitPrefixItem.tsx#UnitPrefixItem"]={docgenInfo:UnitPrefixItem.__docgenInfo,name:"UnitPrefixItem",path:"src/components/UnitPrefixItem/UnitPrefixItem.tsx#UnitPrefixItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnitSearch/UnitSearch.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return UnitSearch}});var react=__webpack_require__("./node_modules/react/index.js"),unitUtils=__webpack_require__("./src/utils/unitUtils.ts"),Combobox=__webpack_require__("./src/components/Combobox/index.ts"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),UnitPrefixItem=__webpack_require__("./src/components/UnitPrefixItem/UnitPrefixItem.tsx"),UnitItem=__webpack_require__("./src/components/UnitItem/UnitItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),createComboboxItem=function createComboboxItem(unitOrPrefixSearchResultItem,unitTextFn,unitPrefixTextFn){var label,searchString=void 0;if(unitOrPrefixSearchResultItem.isPrefixOnly()){var prefixName=unitPrefixTextFn(unitOrPrefixSearchResultItem.prefix);label=(0,jsx_runtime.jsx)(UnitPrefixItem.o,{prefix:unitOrPrefixSearchResultItem.prefix,prefixName:prefixName}),searchString=prefixName}else{if(!unitOrPrefixSearchResultItem.unit)throw new Error("Something impossible happened.");var prefixedUnit=(0,unitUtils.VW)(unitOrPrefixSearchResultItem.unit).withPrefix(unitOrPrefixSearchResultItem.prefix),dimension=prefixedUnit.dimension,symbol=prefixedUnit.symbol;label=(0,jsx_runtime.jsx)(UnitItem.J,{name:unitTextFn(prefixedUnit),symbol:symbol,dimension:(0,lib.findDimensionName)(dimension)})}return{value:unitOrPrefixSearchResultItem.id(),label:label,searchString:searchString}},classes=__webpack_require__("./src/classes/index.ts"),UnitSearch_module_selected="UnitSearch_selected__u0Zlc",UnitSearch=function UnitSearch(_ref){var onChange=_ref.onChange,placeholder=_ref.placeholder,prefixKeywords=_ref.prefixKeywords,unitKeywords=_ref.unitKeywords,unitPrefixTextFn=_ref.unitPrefixTextFn,unitTextFn=_ref.unitTextFn,value=_ref.value,searchResult=(0,react.useCallback)((function(keyword){return(0,unitUtils.mb)((0,unitUtils.lm)(keyword,unitKeywords,prefixKeywords),keyword,unitKeywords,prefixKeywords,unitTextFn).map((function(it){return createComboboxItem(it,unitTextFn,unitPrefixTextFn)}))}),[prefixKeywords,unitKeywords,unitTextFn,unitPrefixTextFn]),handleChange=(0,react.useCallback)((function(value){var unitResult=classes.H.fromId(value);if(!unitResult.isPrefixOnly()){var _unit=(0,unitUtils.VW)(unitResult.unit).withPrefix(unitResult.prefix);onChange&&onChange(_unit)}}),[onChange]),selected=(0,react.useMemo)((function(){return value?createComboboxItem(classes.H.fromUnit(value),unitTextFn,unitPrefixTextFn):void 0}),[unitPrefixTextFn,unitTextFn,value]);return(0,jsx_runtime.jsx)(Combobox.h,{onChange:handleChange,placeholder:placeholder,searchResult:searchResult,selectedClassName:UnitSearch_module_selected,value:selected})};try{UnitSearch.displayName="UnitSearch",UnitSearch.__docgenInfo={description:"",displayName:"UnitSearch",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((unit: Unit<Dimension>) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefixKeywords:{defaultValue:null,description:"",name:"prefixKeywords",required:!0,type:{name:"UnitPrefixKeywords"}},unitKeywords:{defaultValue:null,description:"",name:"unitKeywords",required:!0,type:{name:"UnitKeywords"}},unitPrefixTextFn:{defaultValue:null,description:"",name:"unitPrefixTextFn",required:!0,type:{name:"UnitPrefixTextFn"}},unitTextFn:{defaultValue:null,description:"",name:"unitTextFn",required:!0,type:{name:"UnitTextFn<Dimension>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Unit<Dimension>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitSearch/UnitSearch.tsx#UnitSearch"]={docgenInfo:UnitSearch.__docgenInfo,name:"UnitSearch",path:"src/components/UnitSearch/UnitSearch.tsx#UnitSearch"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useUpdate.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return useUpdate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useUpdate=function useUpdate(effect,deps){var isFirst=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!isFirst.current)return effect();isFirst.current=!1}),deps)}},"./src/test-data/unitKeywords.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return unitKeywords}});var unitKeywords={length:{angstrom:["ångström","angstrom","ångstrom","angström"],astronomicalUnit:["astronomical unit","astronomisk enhet"],chain:["chain"],fathom:["fathom","favn"],fermi:["fermi"],foot:["foot","feet","fot"],furlong:["furlong"],inch:["inch","tomme"],lightYear:["light year","lysår"],link:["link","Gunter's link"],metre:["metre","meter"],micron:["micron","mikron","micrometer","mikrometer"],nauticalMile:["nautical mile","nautisk mil"],parsec:["parsec","parsecs"],rod:["rod","perch","pole","lug","stang"],scandinavianMile:["scandinavian mile","mil","skandinavisk mil","norsk mil"],statuteMile:["statute mile"],yard:["yard"]},mass:{carat:["carat","karat"],gram:["gram","gramme"],kilogram:["kilogram","kilogramme"],ounce:["ounce","unse"],pound:["pound","pund"],tonne:["tonne","tonn"]},time:{day:["day","dag"],hour:["hour","time"],minute:["minute","minutt"],second:["second","sekund"],week:["week","uke"]},temperature:{celsius:["celsius","degree celsius","grad celsius","celsiusgrad"],delisle:["degree delisle","grad delisle","delislegrad"],fahrenheit:["fahrenheit","degree fahrenheit","grad fahrenheit","fahrenheitgrad"],kelvin:["kelvin","degree kelvin","grad kelvin","kelvinqrad"],newton:["newton","degree newton","grad newton","newtongrad"],rankine:["rankine","degree rankine","grad rankine","rankinegrad"],reaumur:["reaumur","réaumur","degree réaumur","grad réaumur"],romer:["rømer","romer","degree rømer","grad rømer","rømergrad"]},area:{acre:["acre","acres"],are:["are"],dekare:["dekare","dekar","mål"],hectare:["hectare","hektar"],squareFoot:["square foot","square feet","kvadratfot"],squareInch:["square inch","kvadrattomme"],squareMetre:["square metre","square meter","kvadratmeter"],squareYard:["square yard","kvardratyard"]},volume:{cubicFoot:["cubic foot","cubic feet","kubikkfot"],cubicInch:["cubic inch","cubic inches","kubikktomme"],cubicMetre:["cubic metre","cubic meter","kuibkkmeter"],cubicYard:["cubic yard","kubikkyard"],imperialGallon:["imperial gallon","engelsk gallon"],litre:["litre","liter"],usGallon:["US gallon","amerikansk gallon"]},velocity:{footPerSecond:["foot per second","feet per second","fot per sekund"],kilometrePerHour:["kilometre per hour","kilometres per hour","kilometer per time","kilometer i timen"],knot:["knot","knop"],metrePerHour:["metre per hour","meter per hour","meter per time","meter i timen"],metrePerSecond:["metre per second","meter per second","meter per sekund","meter i sekundet"],milePerHour:["mile per hour","miles per time","miles i timen"]},acceleration:{footPerSecondSquared:["foot per second squared","feet per second squared","fot per sekund per sekund"],gal:["galileo"],metrePerSecondSquared:["metre per second squared","meter per second squared","meter per sekund per sekund"],standardGravity:["standard gravity","standardgravitasjon"]},charge:{coulomb:["coulomb"],elementaryCharge:["elementary charge","elementærladning"],statcoulomb:["statcoulomb","statisk coulomb"]},current:{ampere:["ampere"]},energy:{calorie:["calorie","kalori"],electronVolt:["electron volt","elektronvolt"],erg:["erg"],joule:["joule"],kilocalorie:["kilocalorie","kilokalori"],kilowattHour:["kilowatt hour","kilowattime"],wattHour:["watt hour","wattime"],wattSecond:["watt second","wattsekund"]},force:{dyne:["dyne","dyn"],kilonewton:["kilonewton"],kilopond:["kilopond","kilogram-force","kilogramkraft"],newton:["newton"],pond:["pond","gram-force","gramkraft"],pound:["pound","pund"],poundal:["poundal"]},frequency:{hertz:["hertz"]},power:{horsepower:["horsepower","hestekraft","hestekrefter"],watt:["watt"]},pressure:{bar:["bar"],inchOfMercury:["inches of mercury","tommer kvikksølv"],kilopondPerSquareCentimetre:["kilopond per square centimetre","kilogramkraft per kvadratcentimeter"],millibar:["millibar"],pascal:["pascal"],poundPerSquareInch:["pound per square inch","pund per kvadrattomme"],standardAtmosphere:["standard atmosphere","standardatmosfære"],torr:["torr"]},voltage:{volt:["volt"]},capacitance:{farad:["farad","faraday"]},resistance:{ohm:["ohm"]},inductance:{henry:["henry"]},magneticFlux:{maxwell:["maxwell"],weber:["weber"]},magneticFluxDensity:{gauss:["gauss"],tesla:["tesla"]},luminousIntensity:{candela:["candela"],candlepower:["candlepower","normallys"]},conductance:{siemens:["siemens"]},density:{kilogramPerCubicMetre:["kilograms per cubic metre","kilograms per cubic meter","kilogram per kubikkmeter"],gramPerCubicCentimetre:["gram per cubic centimetre","grams per cubic centimetre","gram per kubikkcentimeter"]},conductivity:{siemensPerMetre:["siemens per metre","siemens per meter"]},resistivity:{ohmMetre:["ohm metre","ohm meter","ohmmeter"]},amountOfSubstance:{mole:["mole","mol"]}}},"./src/test-data/unitPrefixKeywords.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return unitPrefixKeywords}});var unitPrefixKeywords={quetta:["quetta"],ronna:["ronna"],yotta:["yotta"],zetta:["zetta"],exa:["exa"],peta:["peta"],tera:["tera"],giga:["giga"],mega:["mega"],kilo:["kilo"],hecto:["hecto","hekto"],deca:["deca","deka"],deci:["deci","desi"],centi:["centi"],milli:["milli"],micro:["micro","mikro"],nano:["nano"],pico:["pico","piko"],femto:["femto"],atto:["atto"],zepto:["zepto"],yocto:["yocto","yokto"],ronto:["ronto"],quecto:["quecto"]}},"./src/test-data/unitPrefixTextFn.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return unitPrefixTextFn}});var unitPrefixTexts={quetta:"quetta",ronna:"ronna",yotta:"yotta",zetta:"zetta",exa:"exa",peta:"peta",tera:"tera",giga:"giga",mega:"mega",kilo:"kilo",hecto:"hecto",deca:"deca",deci:"deci",centi:"centi",milli:"milli",micro:"micro",nano:"nano",pico:"pico",femto:"femto",atto:"atto",zepto:"zepto",yocto:"yocto",ronto:"ronto",quecto:"quecto"},unitPrefixTextFn=function unitPrefixTextFn(prefix){return null===prefix?"":unitPrefixTexts[prefix]}}}]);