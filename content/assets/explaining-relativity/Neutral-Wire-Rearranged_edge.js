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
            id:'Rectangle',
            type:'rect',
            rect:['0px','56px','550px','12px','auto','auto'],
            fill:["rgba(1,1,1,1.00)"],
            stroke:[0,"rgba(0,0,0,1.00)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','181px','550px','12px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'ProtonCopy11',
            type:'image',
            rect:['54px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy10',
            type:'image',
            rect:['134px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy9',
            type:'image',
            rect:['214px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy8',
            type:'image',
            rect:['291px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy7',
            type:'image',
            rect:['371px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy6',
            type:'image',
            rect:['446px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ElectronCopy11',
            type:'image',
            rect:['54px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy10',
            type:'image',
            rect:['134px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy9',
            type:'image',
            rect:['214px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy8',
            type:'image',
            rect:['291px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy7',
            type:'image',
            rect:['371px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy6',
            type:'image',
            rect:['446px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ProtonCopy5',
            type:'image',
            rect:['-316px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy4',
            type:'image',
            rect:['-236px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy3',
            type:'image',
            rect:['-159px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy2',
            type:'image',
            rect:['-79px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy',
            type:'image',
            rect:['-4px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ElectronCopy5',
            type:'image',
            rect:['-396px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy4',
            type:'image',
            rect:['-316px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy3',
            type:'image',
            rect:['-236px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy2',
            type:'image',
            rect:['-159px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy',
            type:'image',
            rect:['-79px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'Electron',
            type:'image',
            rect:['-4px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'Proton',
            type:'image',
            rect:['310px','242px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['0px','0px','550px','43px','auto','auto'],
            text:"Even if we rearrange the charges, the wire is still neutral.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['14px','216px','273px','135px','auto','auto'],
            text:"Therefore, this positive charge should still feel no force because the net charge is zero.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "top", '181px']
         ],
         "${_ProtonCopy5}": [
            ["style", "height", '36px'],
            ["style", "top", '133px'],
            ["style", "left", '-322px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy2}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '134px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy7}": [
            ["style", "top", '79px'],
            ["style", "height", '36px'],
            ["style", "left", '371px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy4}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '0px'],
            ["style", "width", '38px']
         ],
         "${_Proton}": [
            ["style", "top", '242px'],
            ["style", "height", '36px'],
            ["style", "left", '310px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy11}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '54px'],
            ["style", "width", '38px']
         ],
         "${_Electron}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '291px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '214px'],
            ["style", "width", '38px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(1,1,1,1)'],
            ["style", "top", '56px']
         ],
         "${_ElectronCopy6}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '-243px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '-10px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy9}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '506px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy3}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '54px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy8}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '291px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy4}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '-242px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy10}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '446px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy5}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '-85px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy2}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '-85px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy9}": [
            ["style", "top", '79px'],
            ["style", "height", '36px'],
            ["style", "left", '214px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy8}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '-322px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy10}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '134px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy11}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '371px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy7}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '-165px'],
            ["style", "width", '38px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_ProtonCopy6}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '446px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy3}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '-165px'],
            ["style", "width", '38px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid35", tween: [ "style", "${_ElectronCopy5}", "left", '235px', { fromValue: '-85px'}], position: 0, duration: 5000 },
            { id: "eid3", tween: [ "style", "${_ProtonCopy6}", "top", '79px', { fromValue: '129px'}], position: 0, duration: 2000 },
            { id: "eid12", tween: [ "style", "${_ElectronCopy4}", "top", '129px', { fromValue: '79px'}], position: 0, duration: 2000 },
            { id: "eid19", tween: [ "style", "${_ProtonCopy9}", "left", '274px', { fromValue: '214px'}], position: 0, duration: 2000 },
            { id: "eid13", tween: [ "style", "${_ProtonCopy6}", "left", '506px', { fromValue: '446px'}], position: 0, duration: 2000 },
            { id: "eid24", tween: [ "style", "${_Electron}", "left", '611px', { fromValue: '291px'}], position: 0, duration: 5000 },
            { id: "eid7", tween: [ "style", "${_ElectronCopy7}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 2000 },
            { id: "eid4", tween: [ "style", "${_ProtonCopy10}", "top", '79px', { fromValue: '129px'}], position: 0, duration: 2000 },
            { id: "eid33", tween: [ "style", "${_ElectronCopy9}", "left", '826px', { fromValue: '506px'}], position: 0, duration: 5000 },
            { id: "eid14", tween: [ "style", "${_ProtonCopy7}", "left", '431px', { fromValue: '371px'}], position: 0, duration: 2000 },
            { id: "eid2", tween: [ "style", "${_ProtonCopy3}", "top", '79px', { fromValue: '129px'}], position: 0, duration: 2000 },
            { id: "eid22", tween: [ "style", "${_ProtonCopy5}", "left", '-242px', { fromValue: '-322px'}], position: 0, duration: 2000 },
            { id: "eid31", tween: [ "style", "${_ElectronCopy11}", "left", '691px', { fromValue: '371px'}], position: 0, duration: 5000 },
            { id: "eid16", tween: [ "style", "${_ProtonCopy11}", "left", '114px', { fromValue: '54px'}], position: 0, duration: 2000 },
            { id: "eid18", tween: [ "style", "${_ProtonCopy10}", "left", '194px', { fromValue: '134px'}], position: 0, duration: 2000 },
            { id: "eid9", tween: [ "style", "${_Electron}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 2000 },
            { id: "eid25", tween: [ "style", "${_ElectronCopy8}", "left", '-2px', { fromValue: '-322px'}], position: 0, duration: 5000 },
            { id: "eid23", tween: [ "style", "${_ProtonCopy3}", "left", '-85px', { fromValue: '-165px'}], position: 0, duration: 2000 },
            { id: "eid32", tween: [ "style", "${_ElectronCopy6}", "left", '77px', { fromValue: '-243px'}], position: 0, duration: 5000 },
            { id: "eid21", tween: [ "style", "${_ProtonCopy4}", "left", '-162px', { fromValue: '-242px'}], position: 0, duration: 2000 },
            { id: "eid17", tween: [ "style", "${_ProtonCopy2}", "left", '-5px', { fromValue: '-85px'}], position: 0, duration: 2000 },
            { id: "eid15", tween: [ "style", "${_ProtonCopy}", "left", '50px', { fromValue: '-10px'}], position: 0, duration: 2000 },
            { id: "eid8", tween: [ "style", "${_ElectronCopy2}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 2000 },
            { id: "eid30", tween: [ "style", "${_ElectronCopy10}", "left", '766px', { fromValue: '446px'}], position: 0, duration: 5000 },
            { id: "eid34", tween: [ "style", "${_ElectronCopy7}", "left", '155px', { fromValue: '-165px'}], position: 0, duration: 5000 },
            { id: "eid1", tween: [ "style", "${_ProtonCopy}", "top", '79px', { fromValue: '129px'}], position: 0, duration: 2000 },
            { id: "eid10", tween: [ "style", "${_ElectronCopy8}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 2000 },
            { id: "eid29", tween: [ "style", "${_ElectronCopy2}", "left", '454px', { fromValue: '134px'}], position: 0, duration: 5000 },
            { id: "eid28", tween: [ "style", "${_ElectronCopy4}", "left", '320px', { fromValue: '0px'}], position: 0, duration: 5000 },
            { id: "eid26", tween: [ "style", "${_ElectronCopy}", "left", '534px', { fromValue: '214px'}], position: 0, duration: 5000 },
            { id: "eid27", tween: [ "style", "${_ElectronCopy3}", "left", '374px', { fromValue: '54px'}], position: 0, duration: 5000 },
            { id: "eid11", tween: [ "style", "${_ElectronCopy10}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 2000 },
            { id: "eid6", tween: [ "style", "${_ProtonCopy5}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 2000 },
            { id: "eid20", tween: [ "style", "${_ProtonCopy8}", "left", '351px', { fromValue: '291px'}], position: 0, duration: 2000 },
            { id: "eid5", tween: [ "style", "${_ProtonCopy8}", "top", '79px', { fromValue: '129px'}], position: 0, duration: 2000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-12686124");
