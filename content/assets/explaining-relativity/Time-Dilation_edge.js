/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text2',
            type:'text',
            rect:['0px','0px','550px','53px','auto','auto'],
            text:"The equation for observing the time of a body at rest and a body in motion is given by:",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Time_Dilation_Equation',
            type:'image',
            rect:['7px','59px','119px','72px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Time-Dilation-Equation.png",'0px','0px']
         },
         {
            id:'simple_clock2',
            type:'image',
            rect:['139px','139px','72px','72px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"simple-clock2.PNG",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['175px','173px','20px','3px','auto','auto'],
            borderRadius:["50% 333.33%","50% 333.33%","50% 333.33%","50% 333.33%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-90'],[],['1.21']]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['177px','174px','20px','3px','auto','auto'],
            borderRadius:["50% 333.33%","50% 333.33%","50% 333.33%","50% 333.33%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-90'],[],['1.21']]
         },
         {
            id:'simple_clock2Copy',
            type:'image',
            rect:['140px','276px','72px','72px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"simple-clock2.PNG",'0px','0px']
         },
         {
            id:'RoundRectCopy3',
            type:'rect',
            rect:['176px','310px','20px','3px','auto','auto'],
            borderRadius:["50% 333.33%","50% 333.33%","50% 333.33%","50% 333.33%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-90'],[],['1.21']]
         },
         {
            id:'RoundRectCopy2',
            type:'rect',
            rect:['178px','311px','20px','3px','auto','auto'],
            borderRadius:["50% 333.33%","50% 333.33%","50% 333.33%","50% 333.33%"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-68'],[],['1.21']]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['274px','-31px','0px','550px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['90']]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['4px','150px','119px','59px','auto','auto'],
            text:"Scenario A<br>v = 0 c",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text',
            type:'text',
            rect:['4px','287px','50px','59px','auto','auto'],
            text:"Scenario B<br>v = .85 c",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text3Copy',
            type:'text',
            rect:['147px','354px','72px','38px','auto','auto'],
            text:"t = 0.00 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy7',
            type:'text',
            rect:['147px','354px','72px','38px','auto','auto'],
            text:"t = 0.5 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy10',
            type:'text',
            rect:['147px','354px','72px','38px','auto','auto'],
            text:"t = 1.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy12',
            type:'text',
            rect:['147px','354px','72px','38px','auto','auto'],
            text:"t = 1.5 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy13',
            type:'text',
            rect:['147px','354px','72px','38px','auto','auto'],
            text:"t = 2.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy18',
            type:'text',
            rect:['135px','214px','72px','38px','auto','auto'],
            text:"t = 0.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy17',
            type:'text',
            rect:['138px','214px','72px','38px','auto','auto'],
            text:"t = 1.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy16',
            type:'text',
            rect:['136px','214px','72px','38px','auto','auto'],
            text:"t = 2.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy15',
            type:'text',
            rect:['136px','214px','72px','38px','auto','auto'],
            text:"t = 3.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3Copy14',
            type:'text',
            rect:['137px','214px','72px','38px','auto','auto'],
            text:"t = 4.0 s",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '173px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '1.21'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '175px'],
            ["style", "width", '20px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '354px'],
            ["style", "opacity", '1'],
            ["style", "left", '127px'],
            ["style", "width", '109px']
         ],
         "${_simple_clock2Copy}": [
            ["style", "height", '72px'],
            ["style", "top", '276px'],
            ["style", "left", '140px'],
            ["style", "width", '72px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '354px'],
            ["style", "opacity", '1'],
            ["style", "left", '127px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy18}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '135px'],
            ["style", "width", '109px']
         ],
         "${_Text2}": [
            ["style", "left", '0px'],
            ["style", "height", '53px']
         ],
         "${_Text3Copy15}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '136px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy7}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy11}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '109px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-31px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '550px'],
            ["style", "left", '274px'],
            ["style", "width", '2px']
         ],
         "${_Text3Copy17}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '138px'],
            ["style", "width", '109px']
         ],
         "${_Time_Dilation_Equation}": [
            ["style", "top", '59px'],
            ["style", "height", '72px'],
            ["style", "left", '7px'],
            ["style", "width", '119px']
         ],
         "${_Text3Copy16}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '136px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy14}": [
            ["style", "top", '214px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '137px'],
            ["style", "width", '109px']
         ],
         "${_simple_clock2}": [
            ["style", "top", '139px'],
            ["style", "height", '72px'],
            ["style", "left", '139px'],
            ["style", "width", '72px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '354px'],
            ["style", "left", '127px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy12}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0'],
            ["style", "left", '356px'],
            ["style", "width", '109px']
         ],
         "${_Text3Copy10}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0'],
            ["style", "left", '276px'],
            ["style", "width", '109px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '174px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '1.21'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '177px'],
            ["style", "width", '20px']
         ],
         "${_Text}": [
            ["style", "top", '287px'],
            ["style", "left", '4px'],
            ["style", "width", '125px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '310px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '1.21'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '176px'],
            ["style", "width", '20px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text3Copy13}": [
            ["style", "top", '354px'],
            ["style", "opacity", '0'],
            ["style", "left", '437px'],
            ["style", "width", '109px']
         ],
         "${_TextCopy}": [
            ["style", "top", '150px'],
            ["style", "left", '4px'],
            ["style", "width", '119px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '311px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '1.21'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '178px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '270deg', { fromValue: '-90deg'}], position: 0, duration: 1000 },
            { id: "eid12", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '630deg', { fromValue: '270deg'}], position: 1000, duration: 1000 },
            { id: "eid13", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '990deg', { fromValue: '630deg'}], position: 2000, duration: 1000 },
            { id: "eid14", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '1350deg', { fromValue: '990deg'}], position: 3000, duration: 1000 },
            { id: "eid96", tween: [ "style", "${_Text3Copy18}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
            { id: "eid97", tween: [ "style", "${_Text3Copy18}", "opacity", '0.000000', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid102", tween: [ "style", "${_Text3Copy16}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid103", tween: [ "style", "${_Text3Copy16}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid22", tween: [ "style", "${_Text3Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
            { id: "eid4", tween: [ "style", "${_RoundRectCopy3}", "left", '486px', { fromValue: '176px'}], position: 0, duration: 4000 },
            { id: "eid99", tween: [ "style", "${_Text3Copy17}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
            { id: "eid100", tween: [ "style", "${_Text3Copy17}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid105", tween: [ "style", "${_Text3Copy15}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_Text3Copy15}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid79", tween: [ "style", "${_Text3Copy12}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
            { id: "eid80", tween: [ "style", "${_Text3Copy12}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid42", tween: [ "style", "${_Text3Copy7}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Text3Copy7}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid47", tween: [ "style", "${_Text3Copy7}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
            { id: "eid109", tween: [ "style", "${_Text3Copy14}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
            { id: "eid3", tween: [ "style", "${_RoundRectCopy2}", "left", '488px', { fromValue: '178px'}], position: 0, duration: 4000 },
            { id: "eid11", tween: [ "transform", "${_RoundRectCopy2}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 0, duration: 1000 },
            { id: "eid16", tween: [ "transform", "${_RoundRectCopy2}", "rotateZ", '270deg', { fromValue: '90deg'}], position: 1000, duration: 1000 },
            { id: "eid17", tween: [ "transform", "${_RoundRectCopy2}", "rotateZ", '630deg', { fromValue: '270deg'}], position: 2000, duration: 2000 },
            { id: "eid2", tween: [ "style", "${_simple_clock2Copy}", "left", '450px', { fromValue: '140px'}], position: 0, duration: 4000 },
            { id: "eid72", tween: [ "style", "${_Text3Copy10}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid73", tween: [ "style", "${_Text3Copy10}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid94", tween: [ "style", "${_Text3Copy13}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 750 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10410895");
