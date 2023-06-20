"use strict";(self.webpackChunktomas_react_tools=self.webpackChunktomas_react_tools||[]).push([[394],{"./src/classes/UnitOrPrefixSearchResultItem.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return UnitOrPrefixSearchResultItem}});var C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),UnitOrPrefixSearchResultItem=function(){function UnitOrPrefixSearchResultItem(unit,prefix){(0,C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__.Z)(this,UnitOrPrefixSearchResultItem),this.unit=void 0,this.prefix=void 0,this.unit=unit,this.prefix=null!=prefix?prefix:null}return(0,C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__.Z)(UnitOrPrefixSearchResultItem,[{key:"id",value:function id(){var prefixKey=this.prefix||"";if(this.unit){var _this$unit=this.unit,dimensionKey=_this$unit.dimensionKey,unitKey=_this$unit.unitKey;return"".concat(dimensionKey,".").concat(unitKey,".").concat(prefixKey)}return"..".concat(prefixKey)}},{key:"isPrefixOnly",value:function isPrefixOnly(){return!this.unit}}],[{key:"fromUnitKeys",value:function fromUnitKeys(unit){return new UnitOrPrefixSearchResultItem(unit)}},{key:"fromUnitKeysWithPrefix",value:function fromUnitKeysWithPrefix(prefix){return function(unit){return new UnitOrPrefixSearchResultItem(unit,prefix)}}},{key:"fromPrefix",value:function fromPrefix(prefix){return new UnitOrPrefixSearchResultItem(void 0,prefix)}},{key:"fromId",value:function fromId(id){var _id$split=id.split("."),_id$split2=(0,C_Users_tomas_IdeaProjects_tomas_react_tools_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_id$split,3),dimensionKey=_id$split2[0],unitKey=_id$split2[1];return new UnitOrPrefixSearchResultItem(dimensionKey&&unitKey?{dimensionKey:dimensionKey,unitKey:unitKey}:void 0,_id$split2[2]||null)}}]),UnitOrPrefixSearchResultItem}()},"./src/components/UnitSelector/UnitSelector.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return UnitSelector}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),UnitSelector_module_root="UnitSelector_root__YtK42",UnitSelector_module_unitSelector="UnitSelector_unitSelector__q2QvD",UnitSelector_module_prefixSelector="UnitSelector_prefixSelector__kQcuS",esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),unitPrefixes=["quetta","ronna","yotta","zetta","exa","peta","tera","giga","mega","kilo","hecto","deca","","deci","centi","milli","micro","nano","pico","femto","atto","zepto","yocto","ronto","quecto"],UnitSelectorActionType=function(UnitSelectorActionType){return UnitSelectorActionType.SET_UNIT="SET_UNIT",UnitSelectorActionType.SET_UNIT_KEY="SET_UNIT_KEY",UnitSelectorActionType.SET_PREFIX="SET_PREFIX",UnitSelectorActionType}({}),unitSelectorReducer=function unitSelectorReducer(callback){return function(state,action){var newState;switch(action.type){case UnitSelectorActionType.SET_UNIT:newState=function setUnit(state,action){return{unit:action.unit}}(0,action);break;case UnitSelectorActionType.SET_UNIT_KEY:newState=function setUnitKey(state,action){var _state$unit=state.unit,prefix=_state$unit.prefix,dimension=_state$unit.dimension;return{unit:(0,lib.findUnitsByDimension)(dimension)[action.unitKey].withPrefix(prefix)}}(state,action);break;case UnitSelectorActionType.SET_PREFIX:newState=function setPrefix(state,action){return{unit:state.unit.withPrefix(action.prefix||null,state.unit.key)}}(state,action);break;default:newState=state}return callback(newState),newState}},prefixAsString=function prefixAsString(prefix){return prefix||""},unitUtils=__webpack_require__("./src/utils/unitUtils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitSelector=function UnitSelector(_ref){var dimension=_ref.dimension,onChange=_ref.onChange,_ref$prefixText=_ref.prefixText,prefixText=void 0===_ref$prefixText?"Prefix":_ref$prefixText,selectedUnit=_ref.selectedUnit,_ref$textFn=_ref.textFn,textFn=void 0===_ref$textFn?function(unit){return unit.key||""}:_ref$textFn,_ref$unitText=_ref.unitText,unitText=void 0===_ref$unitText?"Unit":_ref$unitText,units=lib.allUnits[dimension].units,_useReducer=(0,react.useReducer)(unitSelectorReducer((function reducerCallback(state){return onChange&&onChange(state.unit)})),{unit:(0,unitUtils.Lz)(dimension,selectedUnit)}),_useReducer2=(0,slicedToArray.Z)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];!function useUpdate(effect,deps){var isFirst=(0,react.useRef)(!0);(0,react.useEffect)((function(){if(!isFirst.current)return effect();isFirst.current=!1}),deps)}((function(){dispatch({type:UnitSelectorActionType.SET_UNIT,unit:(0,unitUtils.Lz)(dimension,selectedUnit)})}),[dimension,selectedUnit]);var options=Object.values(units).filter((function(unit){return!unit.prefix})).map((function(unit){var _findUnitName;return{label:textFn(unit),value:null!==(_findUnitName=(0,lib.findUnitName)(unit))&&void 0!==_findUnitName?_findUnitName:""}})),prefixOptions=unitPrefixes.map((function(prefix){return{label:prefix||"",value:prefix||""}}));return(0,jsx_runtime.jsxs)("span",{className:UnitSelector_module_root,children:[(0,jsx_runtime.jsx)("span",{className:UnitSelector_module_prefixSelector,children:(0,jsx_runtime.jsx)(esm.Ph,{label:prefixText,options:prefixOptions,onChange:function setPrefix(prefix){return dispatch({type:UnitSelectorActionType.SET_PREFIX,prefix:prefix})},value:prefixAsString(state.unit.prefix)})}),(0,jsx_runtime.jsx)("span",{className:UnitSelector_module_unitSelector,children:(0,jsx_runtime.jsx)(esm.Ph,{label:unitText,options:options,onChange:function setUnit(unitKey){return dispatch({type:UnitSelectorActionType.SET_UNIT_KEY,unitKey:unitKey})},value:(0,lib.findUnitName)(state.unit.withPrefix(null))})})]})};try{UnitSelector.displayName="UnitSelector",UnitSelector.__docgenInfo={description:"",displayName:"UnitSelector",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"acceleration"'},{value:'"amountOfSubstance"'},{value:'"area"'},{value:'"capacitance"'},{value:'"charge"'},{value:'"conductance"'},{value:'"conductivity"'},{value:'"current"'},{value:'"density"'},{value:'"energy"'},{value:'"force"'},{value:'"frequency"'},{value:'"inductance"'},{value:'"length"'},{value:'"luminousIntensity"'},{value:'"magneticFlux"'},{value:'"magneticFluxDensity"'},{value:'"mass"'},{value:'"power"'},{value:'"pressure"'},{value:'"resistance"'},{value:'"resistivity"'},{value:'"temperature"'},{value:'"time"'},{value:'"velocity"'},{value:'"voltage"'},{value:'"volume"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((unit: Unit<Dimension>) => void)"}},prefixText:{defaultValue:{value:"Prefix"},description:"",name:"prefixText",required:!1,type:{name:"string"}},selectedUnit:{defaultValue:null,description:"",name:"selectedUnit",required:!1,type:{name:"Unit<Dimension>"}},textFn:{defaultValue:{value:"(unit: Unit) => unit.key || ''"},description:"",name:"textFn",required:!1,type:{name:"UnitTextFn<Dimension>"}},unitText:{defaultValue:{value:"Unit"},description:"",name:"unitText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitSelector/UnitSelector.tsx#UnitSelector"]={docgenInfo:UnitSelector.__docgenInfo,name:"UnitSelector",path:"src/components/UnitSelector/UnitSelector.tsx#UnitSelector"})}catch(__react_docgen_typescript_loader_error){}},"./src/test-data/unitTextFn.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return unitTextFn}});var enheter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/enheter/lib/index.js"),_utils_stringUtils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/stringUtils.ts"),unitTexts={length:{angstrom:["ångström","ångströms"],astronomicalUnit:["astronomical unit","astronomical units"],chain:["chain","chains"],fathom:["fathom","fathoms"],fermi:["fermi","fermis"],foot:["foot","feet"],furlong:["furlong","furlongs"],inch:["inch","inches"],lightYear:["light year","light years"],link:["link","links"],metre:["metre","metres"],micron:["micron","microns"],nauticalMile:["nautical mile","nautical miles"],parsec:["parsec","parsecs"],rod:["rod","rods"],scandinavianMile:["scandinavian mile","scandinavian miles"],statuteMile:["statute mile","statute miles"],yard:["yard","yards"]},mass:{carat:["carat","carats"],gram:["gram","grams"],kilogram:["kilogram","kilograms"],ounce:["ounce","ounces"],pound:["pound","pounds"],tonne:["tonne","tonnes"]},time:{day:["day","days"],hour:["hour","hours"],minute:["minute","minutes"],second:["second","seconds"],week:["week","weeks"]},temperature:{celsius:["degree Celsius","degrees Celsius"],delisle:["degree Delisle","degrees Delisle"],fahrenheit:["degree Fahrenheit","degrees Fahrenheit"],kelvin:["kelvin","kelvins"],newton:["degree Newton","degrees Newton"],rankine:["degree Rankine","degrees Rankine"],reaumur:["degree Réaumur","degrees Réaumur"],romer:["degree Rømer","degrees Rømer"]},area:{acre:["acre","acres"],are:["are","ares"],dekare:["dekare","dekares"],hectare:["hectare","hectares"],squareFoot:["square foot","square feet"],squareInch:["square inch","square inches"],squareMetre:["square metre","square metres"],squareYard:["square yard","square yards"]},volume:{cubicFoot:["cubic foot","cubic feet"],cubicInch:["cubic inch","cubic inches"],cubicMetre:["cubic metre","cubic metres"],cubicYard:["cubic yard","cubic yards"],imperialGallon:["imperial gallon","imperial gallons"],litre:["litre","litres"],usGallon:["US gallon","US gallons"]},velocity:{footPerSecond:["foot per second","feet per second"],kilometrePerHour:["kilometre per hour","kilometres per hour"],knot:["knot","knots"],metrePerHour:["metre per hour","metres per hour"],metrePerSecond:["metre per second","metres per second"],milePerHour:["mile per hour","miles per hour"]},acceleration:{footPerSecondSquared:["foot per second squared","feet per second squared"],gal:["galileo","galileos"],metrePerSecondSquared:["metre per second squared","metres per second squared"],standardGravity:["standard gravity","standard gravities"]},charge:{coulomb:["coulomb","coulombs"],elementaryCharge:["elementary charge","elementary charges"],statcoulomb:["statcoulomb","statcoulombs"]},current:{ampere:["ampere","amperes"]},energy:{calorie:["calorie","calories"],electronVolt:["electron volt","electron volts"],erg:["erg","ergs"],joule:["joule","joules"],kilocalorie:["kilocalorie","kilocalories"],kilowattHour:["kilowatt hour","kilowatt hours"],wattHour:["watt hour","watt hours"],wattSecond:["watt second","watt seconds"]},force:{dyne:["dyne","dynes"],kilonewton:["kilonewton","kilonewtons"],kilopond:["kilopond","kiloponds"],newton:["newton","newtons"],pond:["pond","ponds"],pound:["pound","pounds"],poundal:["poundal","poundals"]},frequency:{hertz:["hertz","hertz"]},power:{horsepower:["horsepower","horsepower"],watt:["watt","watts"]},pressure:{bar:["bar","bars"],inchOfMercury:["inch of mercury","inches of mercury"],kilopondPerSquareCentimetre:["kilopond per square centimetre","kiloponds per square centimetre"],millibar:["millibar","millibars"],pascal:["pascal","pascals"],poundPerSquareInch:["pound per square inch","pounds per square inch"],standardAtmosphere:["standard atmosphere","standard atmospheres"],torr:["torr","torrs"]},voltage:{volt:["volt","volts"]},capacitance:{farad:["farad","farads"]},resistance:{ohm:["ohm","ohms"]},inductance:{henry:["henry","henrys"]},magneticFlux:{maxwell:["maxwell","maxwells"],weber:["weber","webers"]},magneticFluxDensity:{gauss:["gauss","gauss"],tesla:["tesla","teslas"]},luminousIntensity:{candela:["candela","candelas"],candlepower:["candlepower","candlepower"]},conductance:{siemens:["siemens","siemens"]},density:{kilogramPerCubicMetre:["kilogram per cubic metre","kilograms per cubic metre"],gramPerCubicCentimetre:["gram per cubic centimetre","grams per cubic centimetre"]},conductivity:{siemensPerMetre:["siemens per metre","siemens per metre"]},resistivity:{ohmMetre:["ohm metre","ohm metre"]},amountOfSubstance:{mole:["mole","moles"]}},unitTextFn=function unitTextFn(unit){var dimensionName=(0,enheter__WEBPACK_IMPORTED_MODULE_0__.findDimensionName)(unit.dimension),prefix=unit.prefix,prefixlessUnit=unit.withPrefix(null),prefixlessUnitName=(0,enheter__WEBPACK_IMPORTED_MODULE_0__.findUnitName)(prefixlessUnit);if(dimensionName&&prefixlessUnitName&&prefixlessUnitName in unitTexts[dimensionName]){var prefixlessName=unitTexts[dimensionName][prefixlessUnitName][0];return(0,_utils_stringUtils__WEBPACK_IMPORTED_MODULE_1__.kC)((prefix||"")+prefixlessName)}return""}},"./src/utils/stringUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G4:function(){return containsAllCharsInOrder},kC:function(){return capitalize}});var capitalize=function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)},containsAllCharsInOrder=function containsAllCharsInOrder(search,data){for(var searchLower=search.toLowerCase(),dataLower=data.toLowerCase(),searchIndex=0,i=0;i<dataLower.length;i++)if(dataLower[i]===searchLower[searchIndex]&&++searchIndex===searchLower.length)return!0;return!1}},"./src/utils/unitUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{VW:function(){return findUnitFromUnitKeys},Lz:function(){return initializeUnit},lm:function(){return matchingUnitsWithPrefix},mb:function(){return orderSearchResults}});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),createForOfIteratorHelper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),unitDimensions=Object.keys(lib.allUnits),stringUtils=__webpack_require__("./src/utils/stringUtils.ts"),matchArray=function matchArray(array,search){return array.some((function(item){return(0,stringUtils.G4)(search,item)}))},UnitOrPrefixSearchResultItem=__webpack_require__("./src/classes/UnitOrPrefixSearchResultItem.ts"),compareMatchingCharsInOrder=function compareMatchingCharsInOrder(search){return function(a,b){var aContains=(0,stringUtils.G4)(search,a),bContains=(0,stringUtils.G4)(search,b);if(!aContains&&!bContains)return 0;if(aContains&&!bContains)return-1;if(!aContains&&bContains)return 1;for(var matchIndex=0,i=0;i<search.length;i++){var aIndex=a.substring(matchIndex).indexOf(search[i]),bIndex=b.substring(matchIndex).indexOf(search[i]);if(aIndex<bIndex)return-1;if(aIndex>bIndex)return 1;matchIndex+=aIndex+1}return 0}},compareLength=function compareLength(a,b){return a.length-b.length},initializeUnit=function initializeUnit(dimension,unit){var validUnits=lib.allUnits[dimension].units,validUnitsArray=Object.values(validUnits);if(!validUnitsArray.length)throw new Error("No valid units for dimension ".concat(dimension));var defaultUnit=validUnitsArray[0].baseUnit;return unit&&(0,lib.findDimensionName)(unit.dimension)===dimension?unit:defaultUnit},unitNamesOfDimension=function unitNamesOfDimension(dimension){var units=lib.allUnits[dimension].units;return Object.keys(units)},matchingUnits=function matchingUnits(keyword,unitKeywords){var _step,dimensions=arguments.length>2&&void 0!==arguments[2]?arguments[2]:unitDimensions,matchingUnits=[],_iterator=(0,createForOfIteratorHelper.Z)(dimensions);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _step2,dimension=_step.value,unitNames=unitNamesOfDimension(dimension),_iterator2=(0,createForOfIteratorHelper.Z)(unitNames);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var unitName=_step2.value,keywords=unitKeywords[dimension][unitName],unit=lib.allUnits[dimension].units[unitName];(matchArray(keywords,keyword)||(0,stringUtils.G4)(keyword,unit.symbol))&&matchingUnits.push({dimensionKey:dimension,unitKey:unitName})}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}}catch(err){_iterator.e(err)}finally{_iterator.f()}return matchingUnits},matchingUnitsWithPrefix=function matchingUnitsWithPrefix(keyword,unitKeywords,prefixKeywords){var units=matchingUnits(keyword,unitKeywords).map(UnitOrPrefixSearchResultItem.H.fromUnitKeys),prefixes=function matchingPrefixes(keyword,prefixKeywords){return Object.keys(prefixKeywords).filter((function(prefix){return matchArray(prefixKeywords[prefix],keyword)}))}(keyword,prefixKeywords).map(UnitOrPrefixSearchResultItem.H.fromPrefix),result=[].concat((0,toConsumableArray.Z)(units),(0,toConsumableArray.Z)(prefixes)),_prefixKeywordAtStart=function prefixKeywordAtStartOfString(str,prefixKeywords){var _Object$entries$map$f;return null!==(_Object$entries$map$f=Object.entries(prefixKeywords).map((function(_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),prefix=_ref2[0];return _ref2[1].map((function(keyword){return{prefix:prefix,matchingKeyword:keyword}}))})).flat().find((function(r){return str.startsWith(r.matchingKeyword)})))&&void 0!==_Object$entries$map$f?_Object$entries$map$f:{prefix:null,matchingKeyword:""}}(keyword,prefixKeywords),prefix=_prefixKeywordAtStart.prefix,matchingKeyword=_prefixKeywordAtStart.matchingKeyword;if(prefix){var keywordWithoutPrefix=keyword.slice(matchingKeyword.length),prefixedUnits=matchingUnits(keywordWithoutPrefix,unitKeywords).map(UnitOrPrefixSearchResultItem.H.fromUnitKeysWithPrefix(prefix));result.push.apply(result,(0,toConsumableArray.Z)(prefixedUnits))}return result},findUnitFromUnitKeys=function findUnitFromUnitKeys(_ref3){return function findUnit(dimension,unitName){for(var _i=0,_Object$entries=Object.entries(lib.allUnits[dimension].units);_i<_Object$entries.length;_i++){var _Object$entries$_i=(0,slicedToArray.Z)(_Object$entries[_i],2),key=_Object$entries$_i[0],unit=_Object$entries$_i[1];if(key===unitName)return unit}throw new Error("No unit with name ".concat(unitName," in dimension ").concat(dimension,"."))}(_ref3.dimensionKey,_ref3.unitKey)},orderSearchResults=function orderSearchResults(results,keyword,unitKeywords,prefixKeywords,unitTextFn){return function orderByKeywords(keywordMap,compareFn){return(0,toConsumableArray.Z)(keywordMap.entries()).map((function(_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),key=_ref2[0],keywords=_ref2[1];return{key:key,keywords:(null!=keywords&&keywords.length?keywords:[key]).sort(compareFn)}})).sort((function(a,b){for(var length=Math.min(a.keywords.length,b.keywords.length),i=0;i<length;i++){var compared=compareFn(a.keywords[i],b.keywords[i]);if(0!==compared)return compared}return 0})).map((function(_ref3){return _ref3.key}))}(new Map(results.map((function(result){var keywords;if(result.isPrefixOnly())keywords=prefixKeywords[result.prefix];else{var _unitKeywords$dimensi,unit=findUnitFromUnitKeys(result.unit);keywords=[].concat((0,toConsumableArray.Z)(null==unitKeywords||null===(_unitKeywords$dimensi=unitKeywords[result.unit.dimensionKey])||void 0===_unitKeywords$dimensi?void 0:_unitKeywords$dimensi[result.unit.unitKey]),[unitTextFn(unit)])}return[result.id(),keywords]}))),function buildCompareFunction(functions){return function(a,b){var _step,_iterator=(0,createForOfIteratorHelper.Z)(functions);try{for(_iterator.s();!(_step=_iterator.n()).done;){var result=(0,_step.value)(a,b);if(0!==result)return result}}catch(err){_iterator.e(err)}finally{_iterator.f()}return 0}}([compareLength,compareMatchingCharsInOrder(keyword)])).map(UnitOrPrefixSearchResultItem.H.fromId)}}}]);