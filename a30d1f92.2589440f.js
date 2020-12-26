(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(104)),c={id:"reports",title:"Report generation"},l={unversionedId:"reports",id:"reports",isDocsHomePage:!1,title:"Report generation",description:"You can create Graphical time series reports based on event filters. E.g.:",source:"@site/docs/reports.md",slug:"/reports",permalink:"/dlt-logs/docs/reports",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/reports.md",version:"current",sidebar:"dltLogsSideBar",previous:{title:"Time sync",permalink:"/dlt-logs/docs/timeSync"},next:{title:"Export and filter DLT files",permalink:"/dlt-logs/docs/exportAndFilter"}},o=[{value:"Example",id:"example",children:[{value:"Identify the log messages",id:"identify-the-log-messages",children:[]},{value:"Define the filter",id:"define-the-filter",children:[]},{value:"Open a dlt file and generate the report",id:"open-a-dlt-file-and-generate-the-report",children:[]},{value:"Zooming in a report",id:"zooming-in-a-report",children:[]},{value:"Ignore lifecycle start range",id:"ignore-lifecycle-start-range",children:[]}]},{value:"Details",id:"details",children:[{value:"Capture group names and types",id:"capture-group-names-and-types",children:[]},{value:"Mapping values to names",id:"mapping-values-to-names",children:[]},{value:"using a function to calculate values",id:"using-a-function-to-calculate-values",children:[]},{value:"Opening one report or multiple reports in one graph",id:"opening-one-report-or-multiple-reports-in-one-graph",children:[]}]}],b={toc:o};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can create ",Object(r.b)("strong",{parentName:"p"},"Graphical time series reports")," based on event filters. E.g.:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/mbehr1/dlt-logs/raw/master/images/timeSeriesReport1.png",alt:"Graphical time series reports"}))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("h3",{id:"identify-the-log-messages"},"Identify the log messages"),Object(r.b)("p",null,"Assuming you're having log messages like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"MON CPUS info CPU usage in interval : 42.1% cpu since boot : 21.0% Total thread cpu load : 15.5%\n")),Object(r.b)("p",null,"and you do want to create a graph of the three values."),Object(r.b)("h3",{id:"define-the-filter"},"Define the filter"),Object(r.b)("p",null,"Open ",Object(r.b)("strong",{parentName:"p"},"Preferences: Open Settings (JSON)")," and add a filter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{3,6}","{3,6}":!0}),'"dlt-logs.filters":[\n  {\n      "type": 3,\n      "apid": "MON",\n      "ctid": "CPUS",\n      "payloadRegex": "CPU usage in interval : (?<cpu_usage>.*)% cpu since boot : (?<cpu_since_boot>.*)% Total thread cpu load : (<thread_cpu_load>*)%"\n  }\n]\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The filter will be used on all messages independent whether the messages are hidden by other view-filters (positive or negative)."),Object(r.b)("p",{parentName:"div"},"Exceptions are load-time filters that are already applied at load time of the DLT file and did remove the messages completely."))),Object(r.b)("h3",{id:"open-a-dlt-file-and-generate-the-report"},"Open a dlt file and generate the report"),Object(r.b)("p",null,"todo add picture."),Object(r.b)("h3",{id:"zooming-in-a-report"},"Zooming in a report"),Object(r.b)("p",null,"todo"),Object(r.b)("h3",{id:"ignore-lifecycle-start-range"},"Ignore lifecycle start range"),Object(r.b)("p",null,"todo"),Object(r.b)("h2",{id:"details"},"Details"),Object(r.b)("p",null,"You can define event filters (type: 3), add normal filters like ecu, apid, ctid and use a payloadRegex that captures either one value or even multiple values with named capture groups (?\\<series","_","name",">",".*). "),Object(r.b)("h3",{id:"capture-group-names-and-types"},"Capture group names and types"),Object(r.b)("p",null,"By default all captures needs will be parsed as float numbers. You can change that behaviour by prefixing the capure name with STATE","_"," or INT","_"," (see below)."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"excected type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"comment"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STATE_*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to represent distinct states. Will use 2nd axix. Can be ints or strings. See reportOptions/valueMap on how to map to better readable names.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EVENT_*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use scatter/event - dot based and not line based chart.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INT_*"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseInt(). Can be used if e.g. hex values should be converted.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"other"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseFloat().")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"STATE","_"," and EVENT","_"," logically exclude each other as you do either want to draw a state diagram or a scatter/point diagram."),Object(r.b)("p",{parentName:"div"},"INT","_"," logically would fit as well for STATE","_"," or EVENT\u02dc_ but this can't be encoded using the value name. So e.g. if you need to convert hex values this is possible using a ",Object(r.b)("strong",{parentName:"p"},"conversionFunction")," that converts the value already. E.g. "),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"return { 'STATE_foo': Number.parseInt(matches[1])};\n")))),Object(r.b)("p",null,"Grid lines for lifecycle start/ends are automatically added. "),Object(r.b)("h3",{id:"mapping-values-to-names"},"Mapping values to names"),Object(r.b)("p",null,"It's often desirable to map values to names for to ease readability. E.g."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"low")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"high")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"255"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(r.b)("p",null,"An easy way is to define a ",Object(r.b)("inlineCode",{parentName:"p"},"valueMap")," by adding a it to the ",Object(r.b)("inlineCode",{parentName:"p"},"reportOptions"),"object for the filter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{7}","{7}":!0}),'{\n  "type": 3,\n  "apid": "...",\n  "ctid": "...",\n  "payloadRegex": "^value = (?<STATE_a>.*)$",\n  "reportOptions": {\n      "valueMap": {\n          "STATE_a": [\n              {\n                  "1": "high"\n              },\n              {\n                  "0": "low"\n              },\n              {\n                  "255": "unknown"\n              }\n          ]\n      }\n  }\n}\n')),Object(r.b)("h3",{id:"using-a-function-to-calculate-values"},"using a function to calculate values"),Object(r.b)("p",null,"For more versatile changes a ",Object(r.b)("inlineCode",{parentName:"p"},"conversionFunction"),"can be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"reportOptions"),"object:"),Object(r.b)("h4",{id:"conversionfunction-example"},"conversionFunction example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "payloadRegex": "Idle0\\\\s+.*\\\\s(.*)%",\n  "reportOptions": {\n    "conversionFunction": "return { \'cpu_idle0\': matches[1],\'INT_limit\':\'0x64\' }"\n  }\n}\n')),Object(r.b)("p",null,"in this example the ",Object(r.b)("inlineCode",{parentName:"p"},"conversionFunction"),"is returning two values: cpu","_","idle0 as the captured value and a 2nd value INT","_","limit with const value 100."),Object(r.b)("h4",{id:"conversionfunction-prototype-and-parameters"},"conversionFunction prototype and parameters"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"conversionFunction")," should accept two parameters ",Object(r.b)("inlineCode",{parentName:"p"},"matches"),"and ",Object(r.b)("inlineCode",{parentName:"p"},"params")," and return an object. E.g. as typescript prototype:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"(matches: RegExpExecArray | null | undefined, params: {} ) : Object\n")),Object(r.b)("p",null,"it will be created as function like this"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'convValuesFunction = Function("matches,params", filter.reportOptions.conversionFunction);                                        \n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"matches"),"is the return value from the corresponding RegExp.exec(...) (see ...).\n",Object(r.b)("inlineCode",{parentName:"p"},"params"),"is an Object like"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'params = {\n  localObj : {}, // will be exclusive for this filter. Initially empty obj.\n  reportObj : {} // will be shared between all filters for this report\n  msg : { // message object that matched the filter.\n    // currently as "stable api" only the following properties should be accessed:\n    timeStamp : Number // timeStamp of the msg in 0.1ms resolution\n    lifecycle : {} // Object per lifecycle detected (see ...)\n  }\n}\n')),Object(r.b)("h4",{id:"usage"},"usage"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"conversionFunction"),"can be used to modify the captured values for that event or to add new values."),Object(r.b)("p",null,'It can store values/properties in either the localObj to e.g. do calculations like "max" or even reportObj to exchange data between filters and their corresponding conversion functions.'),Object(r.b)("p",null,"It needs to be a JS function returning an array of objects { valueName: value } and gets the regex 'matches' as parameter. Additional parameter is \"params\" which is an object with msg, localObj and reportObj. E.g. \"return {'limit':42};\" for a static value. or \"return {'timeStamp': params.msg.timeStamp/10000};\". "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"localObj")," is initially an empty Object {} that can be used to store properties for that filter (e.g. interims data for calculations).  ",Object(r.b)("inlineCode",{parentName:"p"},"reportObj")," is an Object similar to localObj but shared between all filters."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As ",Object(r.b)("inlineCode",{parentName:"p"},"reportObj")," is shared between all filters you do need to take care for property name clashes! Use reportObj only if you really want to share data between filters."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Currently the conversionFunction is only called if the payloadRegEx matches the payload. This will be changed in a upcoming version."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Via the params.msg.lifecycle object you can e.g. check whether the msg belongs to a new lifecycle and reset e.g. some variables inside the localObj.\nE.g."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let lastLc = params.localObj['lifecycle'];\nif (lastLc !== params.msg.lifecycle) {\n  params.localObj['lifecycle'] = params.msg.lifecycle;\n  ... // do other stuff on new lifecycle...\n}\n")))),Object(r.b)("p",null,"todo ... add liveeditor to convert a function into the json string repr."),Object(r.b)("h3",{id:"opening-one-report-or-multiple-reports-in-one-graph"},"Opening one report or multiple reports in one graph"),Object(r.b)("p",null,'To open a report simply press on the "report" icon next to the filter.'),Object(r.b)("p",null,"todo picture"),Object(r.b)("p",null,"You can visualize multiple reports in the same view by simply clicking the 2nd report while keeping the first report view open."),Object(r.b)("p",null,"If you want to open the report as a new view you can hold the alt/options key before clicking the report icon."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Multiple reports share the same y-axis. So if you mix small values (e.g 0-1) with huge values (0-1000) you loose all details from the small values."))))}s.isMDXComponent=!0}}]);