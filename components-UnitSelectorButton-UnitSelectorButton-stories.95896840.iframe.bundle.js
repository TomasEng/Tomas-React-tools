"use strict";(self.webpackChunktomas_react_tools=self.webpackChunktomas_react_tools||[]).push([[149],{"./src/components/UnitSelectorButton/UnitSelectorButton.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UnitSelectorButton_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),UnitSelector=__webpack_require__("./src/components/UnitSelector/UnitSelector.tsx"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitSelectorButton=function UnitSelectorButton(_ref){var dimension=_ref.dimension,textFn=_ref.textFn,defaultUnit=(0,react.useCallback)((function(){return Object.values(lib.allUnits[dimension].units)[0].baseUnit}),[dimension]),_useState=(0,react.useState)(defaultUnit),_useState2=(0,slicedToArray.Z)(_useState,2),selectedUnit=_useState2[0],setSelectedUnit=_useState2[1];return(0,jsx_runtime.jsx)(esm.J2,{trigger:(0,jsx_runtime.jsx)(esm.zx,{title:textFn(selectedUnit),children:selectedUnit.symbol}),placement:"top",children:(0,jsx_runtime.jsx)(UnitSelector.n,{dimension:dimension,onChange:setSelectedUnit,selectedUnit:selectedUnit,textFn:textFn})})};try{UnitSelectorButton.displayName="UnitSelectorButton",UnitSelectorButton.__docgenInfo={description:"",displayName:"UnitSelectorButton",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"acceleration"'},{value:'"amountOfSubstance"'},{value:'"area"'},{value:'"capacitance"'},{value:'"charge"'},{value:'"conductance"'},{value:'"conductivity"'},{value:'"current"'},{value:'"density"'},{value:'"energy"'},{value:'"force"'},{value:'"frequency"'},{value:'"inductance"'},{value:'"length"'},{value:'"luminousIntensity"'},{value:'"magneticFlux"'},{value:'"magneticFluxDensity"'},{value:'"mass"'},{value:'"power"'},{value:'"pressure"'},{value:'"resistance"'},{value:'"resistivity"'},{value:'"temperature"'},{value:'"time"'},{value:'"velocity"'},{value:'"voltage"'},{value:'"volume"'}]}},textFn:{defaultValue:null,description:"",name:"textFn",required:!0,type:{name:"UnitTextFn<Dimension>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitSelectorButton/UnitSelectorButton.tsx#UnitSelectorButton"]={docgenInfo:UnitSelectorButton.__docgenInfo,name:"UnitSelectorButton",path:"src/components/UnitSelectorButton/UnitSelectorButton.tsx#UnitSelectorButton"})}catch(__react_docgen_typescript_loader_error){}var _Example$parameters,_Example$parameters2,_Example$parameters2$,meta={title:"Components/UnitSelectorButton",component:UnitSelectorButton,tags:["autodocs"],parameters:{layout:"centered"}},Example={args:{dimension:"length",textFn:__webpack_require__("./src/test-data/unitTextFn.ts").q}},UnitSelectorButton_stories=meta;Example.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Example.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    dimension: 'length',\n    textFn: unitTextFn\n  }\n}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./src/components/UnitSelector/UnitSelector.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return UnitSelector}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),UnitSelector_module_root="UnitSelector_root__YtK42",UnitSelector_module_unitSelector="UnitSelector_unitSelector__q2QvD",UnitSelector_module_prefixSelector="UnitSelector_prefixSelector__kQcuS",esm=__webpack_require__("./node_modules/@digdir/design-system-react/dist/esm/index.js"),unitPrefixes=["yotta","zetta","exa","peta","tera","giga","mega","kilo","hecto","deca","","deci","centi","milli","micro","nano","pico","femto","atto","zepto","yocto"],UnitSelectorActionType=function(UnitSelectorActionType){return UnitSelectorActionType.SET_UNIT="SET_UNIT",UnitSelectorActionType.SET_UNIT_KEY="SET_UNIT_KEY",UnitSelectorActionType.SET_PREFIX="SET_PREFIX",UnitSelectorActionType}({}),unitSelectorReducer=function unitSelectorReducer(callback){return function(state,action){var newState;switch(action.type){case UnitSelectorActionType.SET_UNIT:newState=function setUnit(state,action){return{unit:action.unit}}(0,action);break;case UnitSelectorActionType.SET_UNIT_KEY:newState=function setUnitKey(state,action){var _state$unit=state.unit,prefix=_state$unit.prefix,dimension=_state$unit.dimension;return{unit:(0,lib.findUnitsByDimension)(dimension)[action.unitKey].withPrefix(prefix)}}(state,action);break;case UnitSelectorActionType.SET_PREFIX:newState=function setPrefix(state,action){return{unit:state.unit.withPrefix(action.prefix||null)}}(state,action);break;default:newState=state}return callback(newState),newState}},prefixAsString=function prefixAsString(prefix){return prefix||""},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UnitSelector=function UnitSelector(_ref){var dimension=_ref.dimension,onChange=_ref.onChange,_ref$textFn=_ref.textFn,textFn=void 0===_ref$textFn?function(unit){return unit.key||""}:_ref$textFn,selectedUnit=_ref.selectedUnit,units=lib.allUnits[dimension].units,_useReducer=(0,react.useReducer)(unitSelectorReducer((function reducerCallback(state){return onChange&&onChange(state.unit)})),{unit:null!=selectedUnit?selectedUnit:Object.values(units)[0].baseUnit}),_useReducer2=(0,slicedToArray.Z)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];(0,react.useEffect)((function(){dispatch({type:UnitSelectorActionType.SET_UNIT,unit:null!=selectedUnit?selectedUnit:Object.values(units)[0].baseUnit})}),[dimension,units,selectedUnit]);var options=Object.values(units).filter((function(unit){return!unit.prefix})).map((function(unit){return{label:textFn(unit),value:unit.key}})),prefixOptions=unitPrefixes.map((function(prefix){return{label:prefix||"",value:prefix||""}}));return(0,jsx_runtime.jsxs)("span",{className:UnitSelector_module_root,children:[(0,jsx_runtime.jsx)("span",{className:UnitSelector_module_prefixSelector,children:(0,jsx_runtime.jsx)(esm.Ph,{label:"Prefix",options:prefixOptions,onChange:function setPrefix(prefix){return dispatch({type:UnitSelectorActionType.SET_PREFIX,prefix:prefix})},value:prefixAsString(state.unit.prefix)})}),(0,jsx_runtime.jsx)("span",{className:UnitSelector_module_unitSelector,children:(0,jsx_runtime.jsx)(esm.Ph,{label:"Unit",options:options,onChange:function setUnit(unitKey){return dispatch({type:UnitSelectorActionType.SET_UNIT_KEY,unitKey:unitKey})},value:state.unit.key})})]})};try{UnitSelector.displayName="UnitSelector",UnitSelector.__docgenInfo={description:"",displayName:"UnitSelector",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"acceleration"'},{value:'"amountOfSubstance"'},{value:'"area"'},{value:'"capacitance"'},{value:'"charge"'},{value:'"conductance"'},{value:'"conductivity"'},{value:'"current"'},{value:'"density"'},{value:'"energy"'},{value:'"force"'},{value:'"frequency"'},{value:'"inductance"'},{value:'"length"'},{value:'"luminousIntensity"'},{value:'"magneticFlux"'},{value:'"magneticFluxDensity"'},{value:'"mass"'},{value:'"power"'},{value:'"pressure"'},{value:'"resistance"'},{value:'"resistivity"'},{value:'"temperature"'},{value:'"time"'},{value:'"velocity"'},{value:'"voltage"'},{value:'"volume"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((unit: Unit<Dimension>) => void)"}},textFn:{defaultValue:{value:"(unit: Unit) => unit.key || ''"},description:"",name:"textFn",required:!1,type:{name:"UnitTextFn<Dimension>"}},selectedUnit:{defaultValue:null,description:"",name:"selectedUnit",required:!1,type:{name:"Unit<Dimension>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnitSelector/UnitSelector.tsx#UnitSelector"]={docgenInfo:UnitSelector.__docgenInfo,name:"UnitSelector",path:"src/components/UnitSelector/UnitSelector.tsx#UnitSelector"})}catch(__react_docgen_typescript_loader_error){}},"./src/test-data/unitTextFn.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return unitTextFn}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),lib=__webpack_require__("./node_modules/enheter/lib/index.js"),capitalize=function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)},unitTexts={length:{angstrom:["ångström","ångströms"],astronomicalUnit:["astronomical unit","astronomical units"],chain:["chain","chains"],fathom:["fathom","fathoms"],fermi:["fermi","fermis"],foot:["foot","feet"],furlong:["furlong","furlongs"],inch:["inch","inches"],lightYear:["light year","light years"],link:["link","links"],metre:["metre","metres"],micron:["micron","microns"],nauticalMile:["nautical mile","nautical miles"],parsec:["parsec","parsecs"],rod:["rod","rods"],scandinavianMile:["scandinavian mile","scandinavian miles"],statuteMile:["statute mile","statute miles"],yard:["yard","yards"]},mass:{carat:["carat","carats"],gram:["gram","grams"],kilogram:["kilogram","kilograms"],ounce:["ounce","ounces"],pound:["pound","pounds"],tonne:["tonne","tonnes"]},time:{day:["day","days"],hour:["hour","hours"],minute:["minute","minutes"],second:["second","seconds"],week:["week","weeks"]},temperature:{celsius:["degree Celsius","degrees Celsius"],delisle:["degree Delisle","degrees Delisle"],fahrenheit:["degree Fahrenheit","degrees Fahrenheit"],kelvin:["kelvin","kelvins"],newton:["degree Newton","degrees Newton"],rankine:["degree Rankine","degrees Rankine"],reaumur:["degree Réaumur","degrees Réaumur"],romer:["degree Rømer","degrees Rømer"]},area:{acre:["acre","acres"],are:["are","ares"],dekare:["dekare","dekares"],hectare:["hectare","hectares"],squareFoot:["square foot","square feet"],squareInch:["square inch","square inches"],squareMetre:["square metre","square metres"],squareYard:["square yard","square yards"]},volume:{cubicFoot:["cubic foot","cubic feet"],cubicInch:["cubic inch","cubic inches"],cubicMetre:["cubic metre","cubic metres"],cubicYard:["cubic yard","cubic yards"],imperialGallon:["imperial gallon","imperial gallons"],litre:["litre","litres"],usGallon:["US gallon","US gallons"]},velocity:{footPerSecond:["foot per second","feet per second"],kilometrePerHour:["kilometre per hour","kilometres per hour"],knot:["knot","knots"],metrePerHour:["metre per hour","metres per hour"],metrePerSecond:["metre per second","metres per second"],milePerHour:["mile per hour","miles per hour"]},acceleration:{footPerSecondSquared:["foot per second squared","feet per second squared"],gal:["galileo","galileos"],metrePerSecondSquared:["metre per second squared","metres per second squared"],standardGravity:["standard gravity","standard gravities"]},charge:{coulomb:["coulomb","coulombs"],elementaryCharge:["elementary charge","elementary charges"],statcoulomb:["statcoulomb","statcoulombs"]},current:{ampere:["ampere","amperes"]},energy:{calorie:["calorie","calories"],electronVolt:["electron volt","electron volts"],erg:["erg","ergs"],joule:["joule","joules"],kilocalorie:["kilocalorie","kilocalories"],kilowattHour:["kilowatt hour","kilowatt hours"],wattHour:["watt hour","watt hours"],wattSecond:["watt second","watt seconds"]},force:{dyne:["dyne","dynes"],kilonewton:["kilonewton","kilonewtons"],kilopond:["kilopond","kiloponds"],newton:["newton","newtons"],pond:["pond","ponds"],pound:["pound","pounds"],poundal:["poundal","poundals"]},frequency:{hertz:["hertz","hertz"]},power:{horsepower:["horsepower","horsepower"],watt:["watt","watts"]},pressure:{bar:["bar","bars"],inchOfMercury:["inch of mercury","inches of mercury"],kilopondPerSquareCentimetre:["kilopond per square centimetre","kiloponds per square centimetre"],millibar:["millibar","millibars"],pascal:["pascal","pascals"],poundPerSquareInch:["pound per square inch","pounds per square inch"],standardAtmosphere:["standard atmosphere","standard atmospheres"],torr:["torr","torrs"]},voltage:{volt:["volt","volts"]},capacitance:{farad:["farad","farads"]},resistance:{ohm:["ohm","ohms"]},inductance:{henry:["henry","henrys"]},magneticFlux:{maxwell:["maxwell","maxwells"],weber:["weber","webers"]},magneticFluxDensity:{gauss:["gauss","gauss"],tesla:["tesla","teslas"]},luminousIntensity:{candela:["candela","candelas"],candlepower:["candlepower","candlepower"]},conductance:{siemens:["siemens","siemens"]},density:{kilogramPerCubicMetre:["kilogram per cubic metre","kilograms per cubic metre"],gramPerCubicCentimetre:["gram per cubic centimetre","grams per cubic centimetre"]},conductivity:{siemensPerMetre:["siemens per metre","siemens per metre"]},resistivity:{ohmMetre:["ohm metre","ohm metre"]},amountOfSubstance:{mole:["mole","moles"]}},unitTextFn=function unitTextFn(unit){for(var dimensionName=(0,lib.findDimensionName)(unit.dimension),_i=0,_Object$entries=Object.entries(unitTexts);_i<_Object$entries.length;_i++){var _Object$entries$_i=(0,slicedToArray.Z)(_Object$entries[_i],2),dimension=_Object$entries$_i[0],units=_Object$entries$_i[1];if(dimension===dimensionName)for(var _i2=0,_Object$entries2=Object.entries(units);_i2<_Object$entries2.length;_i2++){var _Object$entries2$_i=(0,slicedToArray.Z)(_Object$entries2[_i2],2),key=_Object$entries2$_i[0],value=_Object$entries2$_i[1];if(unit.key===key)return capitalize((unit.prefix||"")+value[0])}}return""}}}]);