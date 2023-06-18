"use strict";(self.webpackChunktomas_react_tools=self.webpackChunktomas_react_tools||[]).push([[515],{"./src/components/UnitSearch/UnitSearch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UnitSearch_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),unitUtils=__webpack_require__("./src/utils/unitUtils.ts"),Combobox=__webpack_require__("./src/components/Combobox/Combobox.tsx"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),UnitPrefixItem=__webpack_require__("./src/components/UnitPrefixItem/UnitPrefixItem.tsx"),UnitItem=__webpack_require__("./src/components/UnitItem/UnitItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitSearch=function UnitSearch(_ref){var placeholder=_ref.placeholder,prefixKeywords=_ref.prefixKeywords,unitKeywords=_ref.unitKeywords,unitPrefixTextFn=_ref.unitPrefixTextFn,unitTextFn=_ref.unitTextFn,searchResult=(0,react.useCallback)((function(keyword){return(0,unitUtils.mb)((0,unitUtils.lm)(keyword,unitKeywords,prefixKeywords),keyword,unitKeywords,prefixKeywords,unitTextFn).map((function(it){return function createComboboxItem(unitOrPrefixSearchResultItem,unitTextFn,unitPrefixTextFn){var label,searchString=void 0;if(unitOrPrefixSearchResultItem.isPrefixOnly()){var prefixName=unitPrefixTextFn(unitOrPrefixSearchResultItem.prefix);label=(0,jsx_runtime.jsx)(UnitPrefixItem.o,{prefix:unitOrPrefixSearchResultItem.prefix,prefixName:prefixName}),searchString=prefixName}else{if(!unitOrPrefixSearchResultItem.unit)throw new Error("Something impossible happened.");var prefixedUnit=(0,unitUtils.VW)(unitOrPrefixSearchResultItem.unit).withPrefix(unitOrPrefixSearchResultItem.prefix),dimension=prefixedUnit.dimension,symbol=prefixedUnit.symbol;label=(0,jsx_runtime.jsx)(UnitItem.J,{name:unitTextFn(prefixedUnit),symbol:symbol,dimension:(0,lib.findDimensionName)(dimension)})}return{value:unitOrPrefixSearchResultItem.id(),label:label,searchString:searchString}}(it,unitTextFn,unitPrefixTextFn)}))}),[prefixKeywords,unitKeywords,unitTextFn,unitPrefixTextFn]);return(0,jsx_runtime.jsx)(Combobox.h,{searchResult:searchResult,placeholder:placeholder})};try{UnitSearch.displayName="UnitSearch",UnitSearch.__docgenInfo={description:"",displayName:"UnitSearch",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},prefixKeywords:{defaultValue:null,description:"",name:"prefixKeywords",required:!0,type:{name:"UnitPrefixKeywords"}},unitKeywords:{defaultValue:null,description:"",name:"unitKeywords",required:!0,type:{name:"UnitKeywords"}},unitPrefixTextFn:{defaultValue:null,description:"",name:"unitPrefixTextFn",required:!0,type:{name:"UnitPrefixTextFn"}},unitTextFn:{defaultValue:null,description:"",name:"unitTextFn",required:!0,type:{name:"UnitTextFn<Dimension>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitSearch/UnitSearch.tsx#UnitSearch"]={docgenInfo:UnitSearch.__docgenInfo,name:"UnitSearch",path:"src/components/UnitSearch/UnitSearch.tsx#UnitSearch"})}catch(__react_docgen_typescript_loader_error){}var _Example$parameters,_Example$parameters2,_Example$parameters2$,unitTextFn=__webpack_require__("./src/test-data/unitTextFn.ts"),unitPrefixTexts={quetta:"quetta",ronna:"ronna",yotta:"yotta",zetta:"zetta",exa:"exa",peta:"peta",tera:"tera",giga:"giga",mega:"mega",kilo:"kilo",hecto:"hecto",deca:"deca",deci:"deci",centi:"centi",milli:"milli",micro:"micro",nano:"nano",pico:"pico",femto:"femto",atto:"atto",zepto:"zepto",yocto:"yocto",ronto:"ronto",quecto:"quecto"},meta={title:"Components/UnitSearch",component:UnitSearch,tags:["autodocs"],parameters:{layout:"centered"}},Example={args:{unitKeywords:{length:{angstrom:["ångström","angstrom","ångstrom","angström"],astronomicalUnit:["astronomical unit","astronomisk enhet"],chain:["chain"],fathom:["fathom","favn"],fermi:["fermi"],foot:["foot","feet","fot"],furlong:["furlong"],inch:["inch","tomme"],lightYear:["light year","lysår"],link:["link","Gunter's link"],metre:["metre","meter"],micron:["micron","mikron","micrometer","mikrometer"],nauticalMile:["nautical mile","nautisk mil"],parsec:["parsec","parsecs"],rod:["rod","perch","pole","lug","stang"],scandinavianMile:["scandinavian mile","mil","skandinavisk mil","norsk mil"],statuteMile:["statute mile"],yard:["yard"]},mass:{carat:["carat","karat"],gram:["gram","gramme"],kilogram:["kilogram","kilogramme"],ounce:["ounce","unse"],pound:["pound","pund"],tonne:["tonne","tonn"]},time:{day:["day","dag"],hour:["hour","time"],minute:["minute","minutt"],second:["second","sekund"],week:["week","uke"]},temperature:{celsius:["celsius","degree celsius","grad celsius","celsiusgrad"],delisle:["degree delisle","grad delisle","delislegrad"],fahrenheit:["fahrenheit","degree fahrenheit","grad fahrenheit","fahrenheitgrad"],kelvin:["kelvin","degree kelvin","grad kelvin","kelvinqrad"],newton:["newton","degree newton","grad newton","newtongrad"],rankine:["rankine","degree rankine","grad rankine","rankinegrad"],reaumur:["reaumur","réaumur","degree réaumur","grad réaumur"],romer:["rømer","romer","degree rømer","grad rømer","rømergrad"]},area:{acre:["acre","acres"],are:["are"],dekare:["dekare","dekar","mål"],hectare:["hectare","hektar"],squareFoot:["square foot","square feet","kvadratfot"],squareInch:["square inch","kvadrattomme"],squareMetre:["square metre","square meter","kvadratmeter"],squareYard:["square yard","kvardratyard"]},volume:{cubicFoot:["cubic foot","cubic feet","kubikkfot"],cubicInch:["cubic inch","cubic inches","kubikktomme"],cubicMetre:["cubic metre","cubic meter","kuibkkmeter"],cubicYard:["cubic yard","kubikkyard"],imperialGallon:["imperial gallon","engelsk gallon"],litre:["litre","liter"],usGallon:["US gallon","amerikansk gallon"]},velocity:{footPerSecond:["foot per second","feet per second","fot per sekund"],kilometrePerHour:["kilometre per hour","kilometres per hour","kilometer per time","kilometer i timen"],knot:["knot","knop"],metrePerHour:["metre per hour","meter per hour","meter per time","meter i timen"],metrePerSecond:["metre per second","meter per second","meter per sekund","meter i sekundet"],milePerHour:["mile per hour","miles per time","miles i timen"]},acceleration:{footPerSecondSquared:["foot per second squared","feet per second squared","fot per sekund per sekund"],gal:["galileo"],metrePerSecondSquared:["metre per second squared","meter per second squared","meter per sekund per sekund"],standardGravity:["standard gravity","standardgravitasjon"]},charge:{coulomb:["coulomb"],elementaryCharge:["elementary charge","elementærladning"],statcoulomb:["statcoulomb","statisk coulomb"]},current:{ampere:["ampere"]},energy:{calorie:["calorie","kalori"],electronVolt:["electron volt","elektronvolt"],erg:["erg"],joule:["joule"],kilocalorie:["kilocalorie","kilokalori"],kilowattHour:["kilowatt hour","kilowattime"],wattHour:["watt hour","wattime"],wattSecond:["watt second","wattsekund"]},force:{dyne:["dyne","dyn"],kilonewton:["kilonewton"],kilopond:["kilopond","kilogram-force","kilogramkraft"],newton:["newton"],pond:["pond","gram-force","gramkraft"],pound:["pound","pund"],poundal:["poundal"]},frequency:{hertz:["hertz"]},power:{horsepower:["horsepower","hestekraft","hestekrefter"],watt:["watt"]},pressure:{bar:["bar"],inchOfMercury:["inches of mercury","tommer kvikksølv"],kilopondPerSquareCentimetre:["kilopond per square centimetre","kilogramkraft per kvadratcentimeter"],millibar:["millibar"],pascal:["pascal"],poundPerSquareInch:["pound per square inch","pund per kvadrattomme"],standardAtmosphere:["standard atmosphere","standardatmosfære"],torr:["torr"]},voltage:{volt:["volt"]},capacitance:{farad:["farad","faraday"]},resistance:{ohm:["ohm"]},inductance:{henry:["henry"]},magneticFlux:{maxwell:["maxwell"],weber:["weber"]},magneticFluxDensity:{gauss:["gauss"],tesla:["tesla"]},luminousIntensity:{candela:["candela"],candlepower:["candlepower","normallys"]},conductance:{siemens:["siemens"]},density:{kilogramPerCubicMetre:["kilograms per cubic metre","kilograms per cubic meter","kilogram per kubikkmeter"],gramPerCubicCentimetre:["gram per cubic centimetre","grams per cubic centimetre","gram per kubikkcentimeter"]},conductivity:{siemensPerMetre:["siemens per metre","siemens per meter"]},resistivity:{ohmMetre:["ohm metre","ohm meter","ohmmeter"]},amountOfSubstance:{mole:["mole","mol"]}},prefixKeywords:{quetta:["quetta"],ronna:["ronna"],yotta:["yotta"],zetta:["zetta"],exa:["exa"],peta:["peta"],tera:["tera"],giga:["giga"],mega:["mega"],kilo:["kilo"],hecto:["hecto","hekto"],deca:["deca","deka"],deci:["deci","desi"],centi:["centi"],milli:["milli"],micro:["micro","mikro"],nano:["nano"],pico:["pico","piko"],femto:["femto"],atto:["atto"],zepto:["zepto"],yocto:["yocto","yokto"],ronto:["ronto"],quecto:["quecto"]},unitTextFn:unitTextFn.q,unitPrefixTextFn:function unitPrefixTextFn(prefix){return null===prefix?"":unitPrefixTexts[prefix]},placeholder:"Enter a unit"}},UnitSearch_stories=meta;Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    unitKeywords,\n    prefixKeywords: unitPrefixKeywords,\n    unitTextFn,\n    unitPrefixTextFn,\n    placeholder: "Enter a unit"\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/Combobox/Combobox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return Combobox}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","active"],Item=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,active=_ref.active,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),id=(0,floating_ui_react_esm.PC)();return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:ref,role:"option",id:id,"aria-selected":active},rest),{},{style:(0,objectSpread2.Z)({background:active?"lightblue":"none",padding:4,cursor:"default"},rest.style),children:children}))}));try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/Item.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/components/Combobox/Item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}var Combobox=function Combobox(_ref){var placeholder=_ref.placeholder,searchResult=_ref.searchResult,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),inputValue=_useState4[0],setInputValue=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),activeIndex=_useState6[0],setActiveIndex=_useState6[1],_useState7=(0,react.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),selectedItem=_useState8[0],setSelectedItem=_useState8[1],listRef=(0,react.useRef)([]),_useFloating=(0,floating_ui_react_esm.YF)({whileElementsMounted:floating_ui_dom_browser_min.Me,open:open,onOpenChange:setOpen,middleware:[(0,floating_ui_core_browser_min.RR)({padding:10}),(0,floating_ui_core_browser_min.dp)({apply:function apply(_ref2){var rects=_ref2.rects,availableHeight=_ref2.availableHeight,elements=_ref2.elements;Object.assign(elements.floating.style,{width:"".concat(rects.reference.width,"px"),maxHeight:"".concat(availableHeight,"px")})},padding:10})]}),refs=_useFloating.refs,floatingStyles=_useFloating.floatingStyles,context=_useFloating.context,role=(0,floating_ui_react_esm.qs)(context,{role:"listbox"}),dismiss=(0,floating_ui_react_esm.bQ)(context),listNav=(0,floating_ui_react_esm.c0)(context,{listRef:listRef,activeIndex:activeIndex,onNavigate:setActiveIndex,virtual:!0,loop:!0}),_useInteractions=(0,floating_ui_react_esm.NI)([role,dismiss,listNav]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps,getItemProps=_useInteractions.getItemProps,items=searchResult(inputValue),selectItem=function selectItem(item){item.searchString?setInputValue(item.searchString):(setInputValue(""),setSelectedItem(item)),setOpen(!1)};return selectedItem?(0,jsx_runtime.jsx)(esm.zx,{color:"secondary",onClick:function onClick(){return setSelectedItem(null)},type:"button",value:selectedItem.value,variant:"outline",children:selectedItem.label}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.qo,(0,objectSpread2.Z)({autoFocus:!0},getReferenceProps({ref:refs.setReference,onChange:function onChange(event){var value=event.target.value;setInputValue(value),value?(setOpen(!0),setActiveIndex(0)):setOpen(!1)},value:inputValue,placeholder:placeholder,"aria-autocomplete":"list",onKeyDown:function onKeyDown(event){"Enter"===event.key&&null!=activeIndex&&items[activeIndex]&&(selectItem(items[activeIndex]),setActiveIndex(null))}}))),(0,jsx_runtime.jsx)(floating_ui_react_esm.ll,{children:open&&(0,jsx_runtime.jsx)(floating_ui_react_esm.wD,{context:context,initialFocus:-1,visuallyHiddenDismiss:!0,children:(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},getFloatingProps({ref:refs.setFloating,style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},floatingStyles),{},{background:"#eee",color:"black",overflowY:"auto"})})),{},{children:items.map((function(item,index){return(0,jsx_runtime.jsx)(Item,(0,objectSpread2.Z)((0,objectSpread2.Z)({},getItemProps({key:item.value,ref:function ref(node){listRef.current[index]=node},onClick:function onClick(){var _refs$domReference$cu;selectItem(item),null===(_refs$domReference$cu=refs.domReference.current)||void 0===_refs$domReference$cu||_refs$domReference$cu.focus()}})),{},{active:activeIndex===index,children:item.label}))}))}))})})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},searchResult:{defaultValue:null,description:"",name:"searchResult",required:!0,type:{name:"(input: string) => ComboboxItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"src/components/Combobox/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnitItem/UnitItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return UnitItem}});__webpack_require__("./node_modules/react/index.js");var UnitItem_module_root="UnitItem_root__h076S",UnitItem_module_unit="UnitItem_unit__Ndkxa",UnitItem_module_dimension="UnitItem_dimension__b1NKZ",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitItem=function UnitItem(_ref){var name=_ref.name,symbol=_ref.symbol,dimension=_ref.dimension;return(0,jsx_runtime.jsxs)("span",{className:UnitItem_module_root,children:[(0,jsx_runtime.jsxs)("span",{className:UnitItem_module_unit,children:[(0,jsx_runtime.jsx)("span",{children:name})," ",(0,jsx_runtime.jsxs)("span",{children:["(",symbol,")"]})]}),(0,jsx_runtime.jsx)("span",{className:UnitItem_module_dimension,children:dimension})]})};try{UnitItem.displayName="UnitItem",UnitItem.__docgenInfo={description:"",displayName:"UnitItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!0,type:{name:"string"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitItem/UnitItem.tsx#UnitItem"]={docgenInfo:UnitItem.__docgenInfo,name:"UnitItem",path:"src/components/UnitItem/UnitItem.tsx#UnitItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnitPrefixItem/UnitPrefixItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return UnitPrefixItem}});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitPrefixItem=function UnitPrefixItem(_ref){var prefixName=_ref.prefixName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:prefixName})};try{UnitPrefixItem.displayName="UnitPrefixItem",UnitPrefixItem.__docgenInfo={description:"",displayName:"UnitPrefixItem",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!0,type:{name:"Prefix"}},prefixName:{defaultValue:null,description:"",name:"prefixName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitPrefixItem/UnitPrefixItem.tsx#UnitPrefixItem"]={docgenInfo:UnitPrefixItem.__docgenInfo,name:"UnitPrefixItem",path:"src/components/UnitPrefixItem/UnitPrefixItem.tsx#UnitPrefixItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/test-data/unitTextFn.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return unitTextFn}});var enheter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/enheter/lib/index.js"),_utils_stringUtils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/stringUtils.ts"),unitTexts={length:{angstrom:["ångström","ångströms"],astronomicalUnit:["astronomical unit","astronomical units"],chain:["chain","chains"],fathom:["fathom","fathoms"],fermi:["fermi","fermis"],foot:["foot","feet"],furlong:["furlong","furlongs"],inch:["inch","inches"],lightYear:["light year","light years"],link:["link","links"],metre:["metre","metres"],micron:["micron","microns"],nauticalMile:["nautical mile","nautical miles"],parsec:["parsec","parsecs"],rod:["rod","rods"],scandinavianMile:["scandinavian mile","scandinavian miles"],statuteMile:["statute mile","statute miles"],yard:["yard","yards"]},mass:{carat:["carat","carats"],gram:["gram","grams"],kilogram:["kilogram","kilograms"],ounce:["ounce","ounces"],pound:["pound","pounds"],tonne:["tonne","tonnes"]},time:{day:["day","days"],hour:["hour","hours"],minute:["minute","minutes"],second:["second","seconds"],week:["week","weeks"]},temperature:{celsius:["degree Celsius","degrees Celsius"],delisle:["degree Delisle","degrees Delisle"],fahrenheit:["degree Fahrenheit","degrees Fahrenheit"],kelvin:["kelvin","kelvins"],newton:["degree Newton","degrees Newton"],rankine:["degree Rankine","degrees Rankine"],reaumur:["degree Réaumur","degrees Réaumur"],romer:["degree Rømer","degrees Rømer"]},area:{acre:["acre","acres"],are:["are","ares"],dekare:["dekare","dekares"],hectare:["hectare","hectares"],squareFoot:["square foot","square feet"],squareInch:["square inch","square inches"],squareMetre:["square metre","square metres"],squareYard:["square yard","square yards"]},volume:{cubicFoot:["cubic foot","cubic feet"],cubicInch:["cubic inch","cubic inches"],cubicMetre:["cubic metre","cubic metres"],cubicYard:["cubic yard","cubic yards"],imperialGallon:["imperial gallon","imperial gallons"],litre:["litre","litres"],usGallon:["US gallon","US gallons"]},velocity:{footPerSecond:["foot per second","feet per second"],kilometrePerHour:["kilometre per hour","kilometres per hour"],knot:["knot","knots"],metrePerHour:["metre per hour","metres per hour"],metrePerSecond:["metre per second","metres per second"],milePerHour:["mile per hour","miles per hour"]},acceleration:{footPerSecondSquared:["foot per second squared","feet per second squared"],gal:["galileo","galileos"],metrePerSecondSquared:["metre per second squared","metres per second squared"],standardGravity:["standard gravity","standard gravities"]},charge:{coulomb:["coulomb","coulombs"],elementaryCharge:["elementary charge","elementary charges"],statcoulomb:["statcoulomb","statcoulombs"]},current:{ampere:["ampere","amperes"]},energy:{calorie:["calorie","calories"],electronVolt:["electron volt","electron volts"],erg:["erg","ergs"],joule:["joule","joules"],kilocalorie:["kilocalorie","kilocalories"],kilowattHour:["kilowatt hour","kilowatt hours"],wattHour:["watt hour","watt hours"],wattSecond:["watt second","watt seconds"]},force:{dyne:["dyne","dynes"],kilonewton:["kilonewton","kilonewtons"],kilopond:["kilopond","kiloponds"],newton:["newton","newtons"],pond:["pond","ponds"],pound:["pound","pounds"],poundal:["poundal","poundals"]},frequency:{hertz:["hertz","hertz"]},power:{horsepower:["horsepower","horsepower"],watt:["watt","watts"]},pressure:{bar:["bar","bars"],inchOfMercury:["inch of mercury","inches of mercury"],kilopondPerSquareCentimetre:["kilopond per square centimetre","kiloponds per square centimetre"],millibar:["millibar","millibars"],pascal:["pascal","pascals"],poundPerSquareInch:["pound per square inch","pounds per square inch"],standardAtmosphere:["standard atmosphere","standard atmospheres"],torr:["torr","torrs"]},voltage:{volt:["volt","volts"]},capacitance:{farad:["farad","farads"]},resistance:{ohm:["ohm","ohms"]},inductance:{henry:["henry","henrys"]},magneticFlux:{maxwell:["maxwell","maxwells"],weber:["weber","webers"]},magneticFluxDensity:{gauss:["gauss","gauss"],tesla:["tesla","teslas"]},luminousIntensity:{candela:["candela","candelas"],candlepower:["candlepower","candlepower"]},conductance:{siemens:["siemens","siemens"]},density:{kilogramPerCubicMetre:["kilogram per cubic metre","kilograms per cubic metre"],gramPerCubicCentimetre:["gram per cubic centimetre","grams per cubic centimetre"]},conductivity:{siemensPerMetre:["siemens per metre","siemens per metre"]},resistivity:{ohmMetre:["ohm metre","ohm metre"]},amountOfSubstance:{mole:["mole","moles"]}},unitTextFn=function unitTextFn(unit){var dimensionName=(0,enheter__WEBPACK_IMPORTED_MODULE_0__.findDimensionName)(unit.dimension),prefix=unit.prefix,prefixlessUnit=unit.withPrefix(null),prefixlessUnitName=(0,enheter__WEBPACK_IMPORTED_MODULE_0__.findUnitName)(prefixlessUnit);if(dimensionName&&prefixlessUnitName&&prefixlessUnitName in unitTexts[dimensionName]){var prefixlessName=unitTexts[dimensionName][prefixlessUnitName][0];return(0,_utils_stringUtils__WEBPACK_IMPORTED_MODULE_1__.kC)((prefix||"")+prefixlessName)}return""}},"./src/utils/stringUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G4:function(){return containsAllCharsInOrder},kC:function(){return capitalize},rg:function(){return matchRatio}});var C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"),capitalize=function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)},indicesOf=function indicesOf(char,data){if(1!==char.length)throw new Error("Char must be a single character.");for(var indices=[],i=0;i<data.length;i++)data[i]===char&&indices.push(i);return indices},containsAllCharsInOrder=function containsAllCharsInOrder(search,data){for(var searchLower=search.toLowerCase(),dataLower=data.toLowerCase(),searchIndex=0,i=0;i<dataLower.length;i++)if(dataLower[i]===searchLower[searchIndex]&&++searchIndex===searchLower.length)return!0;return!1},matchRatio=function matchRatio(search,data){if(!search||!data)return 0;for(var searchLower=search.toLowerCase(),dataLower=data.toLowerCase(),_ref=searchLower.length<dataLower.length?[searchLower,dataLower]:[dataLower,searchLower],_ref2=(0,C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,2),shortest=_ref2[0],longest=_ref2[1],matchedIndices=[],i=0;i<shortest.length;i++){var _step2,char=shortest[i],_iterator2=(0,C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__.Z)(indicesOf(char,longest));try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var index=_step2.value;if(!matchedIndices.includes(index)){matchedIndices.push(index);break}}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}return matchedIndices.length/longest.length}},"./src/utils/unitUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{VW:function(){return findUnitFromUnitKeys},Lz:function(){return initializeUnit},lm:function(){return matchingUnitsWithPrefix},mb:function(){return orderSearchResults}});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),createForOfIteratorHelper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),unitDimensions=Object.keys(lib.allUnits),stringUtils=__webpack_require__("./src/utils/stringUtils.ts"),matchArray=function matchArray(array,search){return array.some((function(item){return(0,stringUtils.G4)(search,item)}))},classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),UnitOrPrefixSearchResultItem=function(){function UnitOrPrefixSearchResultItem(unit,prefix){(0,classCallCheck.Z)(this,UnitOrPrefixSearchResultItem),this.unit=void 0,this.prefix=void 0,this.unit=unit,this.prefix=null!=prefix?prefix:null}return(0,createClass.Z)(UnitOrPrefixSearchResultItem,[{key:"id",value:function id(){var prefixKey=this.prefix||"";if(this.unit){var _this$unit=this.unit,dimensionKey=_this$unit.dimensionKey,unitKey=_this$unit.unitKey;return"".concat(dimensionKey,".").concat(unitKey,".").concat(prefixKey)}return"..".concat(prefixKey)}},{key:"isPrefixOnly",value:function isPrefixOnly(){return!this.unit}}],[{key:"fromUnitKeys",value:function fromUnitKeys(unit){return new UnitOrPrefixSearchResultItem(unit)}},{key:"fromUnitKeysWithPrefix",value:function fromUnitKeysWithPrefix(prefix){return function(unit){return new UnitOrPrefixSearchResultItem(unit,prefix)}}},{key:"fromPrefix",value:function fromPrefix(prefix){return new UnitOrPrefixSearchResultItem(void 0,prefix)}},{key:"fromId",value:function fromId(id){var _id$split=id.split("."),_id$split2=(0,slicedToArray.Z)(_id$split,3),dimensionKey=_id$split2[0],unitKey=_id$split2[1];return new UnitOrPrefixSearchResultItem(dimensionKey&&unitKey?{dimensionKey:dimensionKey,unitKey:unitKey}:void 0,_id$split2[2]||null)}}]),UnitOrPrefixSearchResultItem}(),compareMatch=function compareMatch(search){return function(a,b){var comparedInOrder=function compareMatchingCharsInOrder(search){return function(a,b){var aContains=(0,stringUtils.G4)(search,a),bContains=(0,stringUtils.G4)(search,b);if(!aContains&&!bContains)return 0;if(aContains&&!bContains)return-1;if(!aContains&&bContains)return 1;for(var matchIndex=0,i=0;i<search.length;i++){var aIndex=a.substring(matchIndex).indexOf(search[i]),bIndex=b.substring(matchIndex).indexOf(search[i]);if(aIndex<bIndex)return-1;if(aIndex>bIndex)return 1;matchIndex+=aIndex+1}return 0}}(search)(a,b);if(0!==comparedInOrder)return comparedInOrder;var comparedByRatio=function compareMatchingRatio(search){return function(a,b){var aRatio=(0,stringUtils.rg)(search,a);return(0,stringUtils.rg)(search,b)-aRatio}}(search)(a,b);return 0!==comparedByRatio?comparedByRatio:0}},initializeUnit=function initializeUnit(dimension,unit){var validUnits=lib.allUnits[dimension].units,validUnitsArray=Object.values(validUnits);if(!validUnitsArray.length)throw new Error("No valid units for dimension ".concat(dimension));var defaultUnit=validUnitsArray[0].baseUnit;return unit&&(0,lib.findDimensionName)(unit.dimension)===dimension?unit:defaultUnit},unitNamesOfDimension=function unitNamesOfDimension(dimension){var units=lib.allUnits[dimension].units;return Object.keys(units)},matchingUnits=function matchingUnits(keyword,unitKeywords){var _step,dimensions=arguments.length>2&&void 0!==arguments[2]?arguments[2]:unitDimensions,matchingUnits=[],_iterator=(0,createForOfIteratorHelper.Z)(dimensions);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _step2,dimension=_step.value,unitNames=unitNamesOfDimension(dimension),_iterator2=(0,createForOfIteratorHelper.Z)(unitNames);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var unitName=_step2.value,keywords=unitKeywords[dimension][unitName],unit=lib.allUnits[dimension].units[unitName];(matchArray(keywords,keyword)||(0,stringUtils.G4)(keyword,unit.symbol))&&matchingUnits.push({dimensionKey:dimension,unitKey:unitName})}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return matchingUnits},matchingUnitsWithPrefix=function matchingUnitsWithPrefix(keyword,unitKeywords,prefixKeywords){var units=matchingUnits(keyword,unitKeywords).map(UnitOrPrefixSearchResultItem.fromUnitKeys),prefixes=function matchingPrefixes(keyword,prefixKeywords){return Object.keys(prefixKeywords).filter((function(prefix){return matchArray(prefixKeywords[prefix],keyword)}))}(keyword,prefixKeywords).map(UnitOrPrefixSearchResultItem.fromPrefix),result=[].concat((0,toConsumableArray.Z)(units),(0,toConsumableArray.Z)(prefixes)),_prefixKeywordAtStart=function prefixKeywordAtStartOfString(str,prefixKeywords){var _Object$entries$map$f;return null!==(_Object$entries$map$f=Object.entries(prefixKeywords).map((function(_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),prefix=_ref2[0];return _ref2[1].map((function(keyword){return{prefix:prefix,matchingKeyword:keyword}}))})).flat().find((function(r){return str.startsWith(r.matchingKeyword)})))&&void 0!==_Object$entries$map$f?_Object$entries$map$f:{prefix:null,matchingKeyword:""}}(keyword,prefixKeywords),prefix=_prefixKeywordAtStart.prefix,matchingKeyword=_prefixKeywordAtStart.matchingKeyword;if(prefix){var keywordWithoutPrefix=keyword.slice(matchingKeyword.length),prefixedUnits=matchingUnits(keywordWithoutPrefix,unitKeywords).map(UnitOrPrefixSearchResultItem.fromUnitKeysWithPrefix(prefix));result.push.apply(result,(0,toConsumableArray.Z)(prefixedUnits))}return result},findUnitFromUnitKeys=function findUnitFromUnitKeys(_ref3){return function findUnit(dimension,unitName){for(var _i=0,_Object$entries=Object.entries(lib.allUnits[dimension].units);_i<_Object$entries.length;_i++){var _Object$entries$_i=(0,slicedToArray.Z)(_Object$entries[_i],2),key=_Object$entries$_i[0],unit=_Object$entries$_i[1];if(key===unitName)return unit}throw new Error("No unit with name ".concat(unitName," in dimension ").concat(dimension,"."))}(_ref3.dimensionKey,_ref3.unitKey)},orderSearchResults=function orderSearchResults(results,keyword,unitKeywords,prefixKeywords,unitTextFn){return function orderByKeywords(keywordMap,compareFn){return(0,toConsumableArray.Z)(keywordMap.entries()).map((function(_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),key=_ref2[0],keywords=_ref2[1];return{key:key,keywords:(null!=keywords&&keywords.length?keywords:[key]).sort(compareFn)}})).sort((function(a,b){for(var length=Math.min(a.keywords.length,b.keywords.length),i=0;i<length;i++){var compared=compareFn(a.keywords[i],b.keywords[i]);if(0!==compared)return compared}return 0})).map((function(_ref3){return _ref3.key}))}(new Map(results.map((function(result){var keywords;if(result.isPrefixOnly())keywords=prefixKeywords[result.prefix];else{var _unitKeywords$dimensi,unit=findUnitFromUnitKeys(result.unit);keywords=[].concat((0,toConsumableArray.Z)(null==unitKeywords||null===(_unitKeywords$dimensi=unitKeywords[result.unit.dimensionKey])||void 0===_unitKeywords$dimensi?void 0:_unitKeywords$dimensi[result.unit.unitKey]),[unitTextFn(unit)])}return[result.id(),keywords]}))),compareMatch(keyword)).map(UnitOrPrefixSearchResultItem.fromId)}}}]);