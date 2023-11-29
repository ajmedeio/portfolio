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
            id:'Proton',
            type:'image',
            rect:['54px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy',
            type:'image',
            rect:['134px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy2',
            type:'image',
            rect:['214px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy3',
            type:'image',
            rect:['291px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy4',
            type:'image',
            rect:['371px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy5',
            type:'image',
            rect:['446px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'Electron',
            type:'image',
            rect:['54px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy',
            type:'image',
            rect:['134px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy2',
            type:'image',
            rect:['214px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy3',
            type:'image',
            rect:['291px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy4',
            type:'image',
            rect:['371px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy5',
            type:'image',
            rect:['446px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ProtonCopy11',
            type:'image',
            rect:['-396px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy10',
            type:'image',
            rect:['-316px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy9',
            type:'image',
            rect:['-236px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy8',
            type:'image',
            rect:['-159px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy7',
            type:'image',
            rect:['-79px','79px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ProtonCopy6',
            type:'image',
            rect:['-4px','129px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'ElectronCopy11',
            type:'image',
            rect:['-396px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy10',
            type:'image',
            rect:['-316px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy9',
            type:'image',
            rect:['-236px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy8',
            type:'image',
            rect:['-159px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy7',
            type:'image',
            rect:['-79px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ElectronCopy6',
            type:'image',
            rect:['-4px','83px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'ProtonCopy12',
            type:'image',
            rect:['310px','242px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Proton.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['9px','12px','auto','auto','auto','auto'],
            text:"Neutral wire: charge is evenly distributed<br>",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text3',
            type:'text',
            rect:['19px','215px','290px','90px','auto','auto'],
            text:"This positive charge should feel no force due to the wire.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '181px']
         ],
         "${_ProtonCopy5}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '446px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy12}": [
            ["style", "height", '36px'],
            ["style", "top", '242px'],
            ["style", "left", '310px'],
            ["style", "width", '38px']
         ],
         "${_Text3}": [
            ["style", "top", '215px'],
            ["style", "left", '19px'],
            ["style", "height", '90px']
         ],
         "${_ElectronCopy4}": [
            ["style", "height", '36px'],
            ["style", "top", '133px'],
            ["style", "left", '371px'],
            ["style", "width", '38px']
         ],
         "${_Proton}": [
            ["style", "top", '79px'],
            ["style", "height", '36px'],
            ["style", "left", '54px'],
            ["style", "width", '38px']
         ],
         "${_Electron}": [
            ["style", "top", '133px'],
            ["style", "height", '36px'],
            ["style", "left", '54px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy4}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '371px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy7}": [
            ["style", "top", '79px'],
            ["style", "height", '36px'],
            ["style", "left", '-85px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy11}": [
            ["style", "height", '36px'],
            ["style", "top", '133px'],
            ["style", "left", '-402px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy2}": [
            ["style", "height", '36px'],
            ["style", "top", '133px'],
            ["style", "left", '214px'],
            ["style", "width", '38px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(1,1,1,1.00)'],
            ["style", "top", '56px']
         ],
         "${_ElectronCopy6}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '-10px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '134px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy9}": [
            ["style", "top", '133px'],
            ["style", "height", '36px'],
            ["style", "left", '-242px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy7}": [
            ["style", "top", '133px'],
            ["style", "height", '36px'],
            ["style", "left", '-85px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy8}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '-165px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy11}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '-402px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy10}": [
            ["style", "top", '133px'],
            ["style", "height", '36px'],
            ["style", "left", '-322px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy5}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '446px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy2}": [
            ["style", "height", '36px'],
            ["style", "top", '79px'],
            ["style", "left", '214px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy9}": [
            ["style", "top", '79px'],
            ["style", "height", '36px'],
            ["style", "left", '-242px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy8}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '-165px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy3}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '291px'],
            ["style", "width", '38px']
         ],
         "${_Text}": [
            ["style", "left", '9px'],
            ["style", "top", '12px']
         ],
         "${_ElectronCopy10}": [
            ["style", "top", '83px'],
            ["style", "height", '36px'],
            ["style", "left", '-322px'],
            ["style", "width", '38px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ElectronCopy3}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '291px'],
            ["style", "width", '38px']
         ],
         "${_ProtonCopy6}": [
            ["style", "top", '129px'],
            ["style", "height", '36px'],
            ["style", "left", '-10px'],
            ["style", "width", '38px']
         ],
         "${_ElectronCopy}": [
            ["style", "height", '36px'],
            ["style", "top", '83px'],
            ["style", "left", '134px'],
            ["style", "width", '38px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "style", "${_ElectronCopy}", "top", '129px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid107", tween: [ "style", "${_ElectronCopy}", "top", '83px', { fromValue: '129px'}], position: 1000, duration: 1000 },
            { id: "eid130", tween: [ "style", "${_ElectronCopy}", "top", '129px', { fromValue: '83px'}], position: 2000, duration: 1000 },
            { id: "eid151", tween: [ "style", "${_ElectronCopy}", "top", '83px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid78", tween: [ "style", "${_ElectronCopy4}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid101", tween: [ "style", "${_ElectronCopy4}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid177", tween: [ "style", "${_ElectronCopy4}", "top", '133px', { fromValue: '129px'}], position: 2000, duration: 250 },
            { id: "eid178", tween: [ "style", "${_ElectronCopy4}", "top", '465px', { fromValue: '133px'}], position: 2250, duration: 250 },
            { id: "eid180", tween: [ "style", "${_ElectronCopy4}", "top", '474px', { fromValue: '465px'}], position: 2500, duration: 250 },
            { id: "eid182", tween: [ "style", "${_ElectronCopy4}", "top", '129px', { fromValue: '474px'}], position: 2750, duration: 250 },
            { id: "eid167", tween: [ "style", "${_ElectronCopy4}", "top", '83px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid97", tween: [ "style", "${_ElectronCopy11}", "left", '-341px', { fromValue: '-402px'}], position: 0, duration: 1000 },
            { id: "eid120", tween: [ "style", "${_ElectronCopy11}", "left", '-242px', { fromValue: '-341px'}], position: 1000, duration: 1000 },
            { id: "eid143", tween: [ "style", "${_ElectronCopy11}", "left", '-165px', { fromValue: '-242px'}], position: 2000, duration: 1000 },
            { id: "eid164", tween: [ "style", "${_ElectronCopy11}", "left", '-85px', { fromValue: '-165px'}], position: 3000, duration: 1000 },
            { id: "eid82", tween: [ "style", "${_ElectronCopy2}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid105", tween: [ "style", "${_ElectronCopy2}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid128", tween: [ "style", "${_ElectronCopy2}", "top", '83px', { fromValue: '129px'}], position: 2000, duration: 1000 },
            { id: "eid149", tween: [ "style", "${_ElectronCopy2}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid92", tween: [ "style", "${_ElectronCopy8}", "top", '129px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid115", tween: [ "style", "${_ElectronCopy8}", "top", '83px', { fromValue: '129px'}], position: 1000, duration: 1000 },
            { id: "eid138", tween: [ "style", "${_ElectronCopy8}", "top", '129px', { fromValue: '83px'}], position: 2000, duration: 1000 },
            { id: "eid159", tween: [ "style", "${_ElectronCopy8}", "top", '83px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid91", tween: [ "style", "${_ElectronCopy8}", "left", '-85px', { fromValue: '-165px'}], position: 0, duration: 1000 },
            { id: "eid114", tween: [ "style", "${_ElectronCopy8}", "left", '-10px', { fromValue: '-85px'}], position: 1000, duration: 1000 },
            { id: "eid137", tween: [ "style", "${_ElectronCopy8}", "left", '54px', { fromValue: '-10px'}], position: 2000, duration: 1000 },
            { id: "eid158", tween: [ "style", "${_ElectronCopy8}", "left", '134px', { fromValue: '54px'}], position: 3000, duration: 1000 },
            { id: "eid98", tween: [ "style", "${_ElectronCopy11}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid121", tween: [ "style", "${_ElectronCopy11}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid144", tween: [ "style", "${_ElectronCopy11}", "top", '83px', { fromValue: '129px'}], position: 2000, duration: 1000 },
            { id: "eid165", tween: [ "style", "${_ElectronCopy11}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid87", tween: [ "style", "${_ElectronCopy6}", "left", '54px', { fromValue: '-10px'}], position: 0, duration: 1000 },
            { id: "eid110", tween: [ "style", "${_ElectronCopy6}", "left", '134px', { fromValue: '54px'}], position: 1000, duration: 1000 },
            { id: "eid133", tween: [ "style", "${_ElectronCopy6}", "left", '214px', { fromValue: '134px'}], position: 2000, duration: 1000 },
            { id: "eid154", tween: [ "style", "${_ElectronCopy6}", "left", '291px', { fromValue: '214px'}], position: 3000, duration: 1000 },
            { id: "eid81", tween: [ "style", "${_ElectronCopy2}", "left", '291px', { fromValue: '214px'}], position: 0, duration: 1000 },
            { id: "eid104", tween: [ "style", "${_ElectronCopy2}", "left", '371px', { fromValue: '291px'}], position: 1000, duration: 1000 },
            { id: "eid127", tween: [ "style", "${_ElectronCopy2}", "left", '446px', { fromValue: '371px'}], position: 2000, duration: 1000 },
            { id: "eid148", tween: [ "style", "${_ElectronCopy2}", "left", '506px', { fromValue: '446px'}], position: 3000, duration: 1000 },
            { id: "eid76", tween: [ "style", "${_ElectronCopy5}", "left", '512px', { fromValue: '446px'}], position: 0, duration: 1000 },
            { id: "eid99", tween: [ "style", "${_ElectronCopy5}", "left", '591px', { fromValue: '512px'}], position: 1000, duration: 250 },
            { id: "eid175", tween: [ "style", "${_ElectronCopy5}", "left", '608px', { fromValue: '591px'}], position: 1250, duration: 750 },
            { id: "eid122", tween: [ "style", "${_ElectronCopy5}", "left", '-261px', { fromValue: '608px'}], position: 2000, duration: 250 },
            { id: "eid172", tween: [ "style", "${_ElectronCopy5}", "left", '-322px', { fromValue: '-261px'}], position: 2250, duration: 750 },
            { id: "eid168", tween: [ "style", "${_ElectronCopy5}", "left", '-243px', { fromValue: '-322px'}], position: 3000, duration: 1000 },
            { id: "eid83", tween: [ "style", "${_ElectronCopy}", "left", '209px', { fromValue: '134px'}], position: 0, duration: 1000 },
            { id: "eid106", tween: [ "style", "${_ElectronCopy}", "left", '291px', { fromValue: '209px'}], position: 1000, duration: 1000 },
            { id: "eid129", tween: [ "style", "${_ElectronCopy}", "left", '371px', { fromValue: '291px'}], position: 2000, duration: 1000 },
            { id: "eid150", tween: [ "style", "${_ElectronCopy}", "left", '446px', { fromValue: '371px'}], position: 3000, duration: 1000 },
            { id: "eid94", tween: [ "style", "${_ElectronCopy9}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid117", tween: [ "style", "${_ElectronCopy9}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid140", tween: [ "style", "${_ElectronCopy9}", "top", '83px', { fromValue: '129px'}], position: 2000, duration: 1000 },
            { id: "eid161", tween: [ "style", "${_ElectronCopy9}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid95", tween: [ "style", "${_ElectronCopy10}", "left", '-242px', { fromValue: '-322px'}], position: 0, duration: 1000 },
            { id: "eid118", tween: [ "style", "${_ElectronCopy10}", "left", '-165px', { fromValue: '-242px'}], position: 1000, duration: 1000 },
            { id: "eid141", tween: [ "style", "${_ElectronCopy10}", "left", '-85px', { fromValue: '-165px'}], position: 2000, duration: 1000 },
            { id: "eid162", tween: [ "style", "${_ElectronCopy10}", "left", '0px', { fromValue: '-85px'}], position: 3000, duration: 1000 },
            { id: "eid80", tween: [ "style", "${_ElectronCopy3}", "top", '129px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid103", tween: [ "style", "${_ElectronCopy3}", "top", '83px', { fromValue: '129px'}], position: 1000, duration: 1000 },
            { id: "eid126", tween: [ "style", "${_ElectronCopy3}", "top", '129px', { fromValue: '83px'}], position: 2000, duration: 1000 },
            { id: "eid170", tween: [ "style", "${_ElectronCopy3}", "top", '136px', { fromValue: '129px'}], position: 3000, duration: 250 },
            { id: "eid184", tween: [ "style", "${_ElectronCopy3}", "top", '456px', { fromValue: '136px'}], position: 3250, duration: 250 },
            { id: "eid186", tween: [ "style", "${_ElectronCopy3}", "top", '497px', { fromValue: '456px'}], position: 3500, duration: 250 },
            { id: "eid188", tween: [ "style", "${_ElectronCopy3}", "top", '83px', { fromValue: '497px'}], position: 3750, duration: 250 },
            { id: "eid86", tween: [ "style", "${_Electron}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid109", tween: [ "style", "${_Electron}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid132", tween: [ "style", "${_Electron}", "top", '83px', { fromValue: '129px'}], position: 2000, duration: 1000 },
            { id: "eid153", tween: [ "style", "${_Electron}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid88", tween: [ "style", "${_ElectronCopy6}", "top", '129px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid111", tween: [ "style", "${_ElectronCopy6}", "top", '83px', { fromValue: '129px'}], position: 1000, duration: 1000 },
            { id: "eid134", tween: [ "style", "${_ElectronCopy6}", "top", '129px', { fromValue: '83px'}], position: 2000, duration: 1000 },
            { id: "eid155", tween: [ "style", "${_ElectronCopy6}", "top", '83px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid93", tween: [ "style", "${_ElectronCopy9}", "left", '-165px', { fromValue: '-242px'}], position: 0, duration: 1000 },
            { id: "eid116", tween: [ "style", "${_ElectronCopy9}", "left", '-85px', { fromValue: '-165px'}], position: 1000, duration: 1000 },
            { id: "eid139", tween: [ "style", "${_ElectronCopy9}", "left", '0px', { fromValue: '-85px'}], position: 2000, duration: 1000 },
            { id: "eid160", tween: [ "style", "${_ElectronCopy9}", "left", '54px', { fromValue: '0px'}], position: 3000, duration: 1000 },
            { id: "eid77", tween: [ "style", "${_ElectronCopy4}", "left", '446px', { fromValue: '371px'}], position: 0, duration: 1000 },
            { id: "eid100", tween: [ "style", "${_ElectronCopy4}", "left", '501px', { fromValue: '446px'}], position: 1000, duration: 1000 },
            { id: "eid123", tween: [ "style", "${_ElectronCopy4}", "left", '587px', { fromValue: '501px'}], position: 2000, duration: 250 },
            { id: "eid176", tween: [ "style", "${_ElectronCopy4}", "left", '584px', { fromValue: '587px'}], position: 2250, duration: 250 },
            { id: "eid179", tween: [ "style", "${_ElectronCopy4}", "left", '-112px', { fromValue: '584px'}], position: 2500, duration: 250 },
            { id: "eid181", tween: [ "style", "${_ElectronCopy4}", "left", '-242px', { fromValue: '-112px'}], position: 2750, duration: 250 },
            { id: "eid166", tween: [ "style", "${_ElectronCopy4}", "left", '-165px', { fromValue: '-242px'}], position: 3000, duration: 1000 },
            { id: "eid96", tween: [ "style", "${_ElectronCopy10}", "top", '129px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid119", tween: [ "style", "${_ElectronCopy10}", "top", '83px', { fromValue: '129px'}], position: 1000, duration: 1000 },
            { id: "eid142", tween: [ "style", "${_ElectronCopy10}", "top", '129px', { fromValue: '83px'}], position: 2000, duration: 1000 },
            { id: "eid163", tween: [ "style", "${_ElectronCopy10}", "top", '79px', { fromValue: '129px'}], position: 3000, duration: 1000 },
            { id: "eid79", tween: [ "style", "${_ElectronCopy3}", "left", '371px', { fromValue: '291px'}], position: 0, duration: 1000 },
            { id: "eid102", tween: [ "style", "${_ElectronCopy3}", "left", '446px', { fromValue: '371px'}], position: 1000, duration: 1000 },
            { id: "eid125", tween: [ "style", "${_ElectronCopy3}", "left", '500px', { fromValue: '446px'}], position: 2000, duration: 1000 },
            { id: "eid147", tween: [ "style", "${_ElectronCopy3}", "left", '590px', { fromValue: '500px'}], position: 3000, duration: 250 },
            { id: "eid183", tween: [ "style", "${_ElectronCopy3}", "left", '600px', { fromValue: '590px'}], position: 3250, duration: 250 },
            { id: "eid185", tween: [ "style", "${_ElectronCopy3}", "left", '-143px', { fromValue: '600px'}], position: 3500, duration: 250 },
            { id: "eid187", tween: [ "style", "${_ElectronCopy3}", "left", '-322px', { fromValue: '-143px'}], position: 3750, duration: 250 },
            { id: "eid75", tween: [ "style", "${_ElectronCopy5}", "top", '133px', { fromValue: '83px'}], position: 0, duration: 1000 },
            { id: "eid146", tween: [ "style", "${_ElectronCopy5}", "top", '147px', { fromValue: '133px'}], position: 1000, duration: 250 },
            { id: "eid174", tween: [ "style", "${_ElectronCopy5}", "top", '483px', { fromValue: '147px'}], position: 1250, duration: 750 },
            { id: "eid171", tween: [ "style", "${_ElectronCopy5}", "top", '447px', { fromValue: '483px'}], position: 2000, duration: 250 },
            { id: "eid173", tween: [ "style", "${_ElectronCopy5}", "top", '83px', { fromValue: '447px'}], position: 2250, duration: 750 },
            { id: "eid169", tween: [ "style", "${_ElectronCopy5}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid90", tween: [ "style", "${_ElectronCopy7}", "top", '83px', { fromValue: '133px'}], position: 0, duration: 1000 },
            { id: "eid112", tween: [ "style", "${_ElectronCopy7}", "top", '129px', { fromValue: '83px'}], position: 1000, duration: 1000 },
            { id: "eid136", tween: [ "style", "${_ElectronCopy7}", "top", '83px', { fromValue: '129px'}], position: 2000, duration: 1000 },
            { id: "eid157", tween: [ "style", "${_ElectronCopy7}", "top", '129px', { fromValue: '83px'}], position: 3000, duration: 1000 },
            { id: "eid89", tween: [ "style", "${_ElectronCopy7}", "left", '-10px', { fromValue: '-85px'}], position: 0, duration: 1000 },
            { id: "eid113", tween: [ "style", "${_ElectronCopy7}", "left", '54px', { fromValue: '-10px'}], position: 1000, duration: 1000 },
            { id: "eid135", tween: [ "style", "${_ElectronCopy7}", "left", '137px', { fromValue: '54px'}], position: 2000, duration: 1000 },
            { id: "eid156", tween: [ "style", "${_ElectronCopy7}", "left", '214px', { fromValue: '137px'}], position: 3000, duration: 1000 },
            { id: "eid85", tween: [ "style", "${_Electron}", "left", '134px', { fromValue: '54px'}], position: 0, duration: 1000 },
            { id: "eid108", tween: [ "style", "${_Electron}", "left", '214px', { fromValue: '134px'}], position: 1000, duration: 1000 },
            { id: "eid131", tween: [ "style", "${_Electron}", "left", '291px', { fromValue: '214px'}], position: 2000, duration: 1000 },
            { id: "eid152", tween: [ "style", "${_Electron}", "left", '371px', { fromValue: '291px'}], position: 3000, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-2185011");
