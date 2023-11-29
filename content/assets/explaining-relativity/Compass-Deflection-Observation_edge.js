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
            id:'ElectronCopy9',
            type:'image',
            rect:['214px','133px','38px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Electron.png",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['0px','0px','550px','51px','auto','auto'],
            text:"When we observe a compass under a wire with flowing current, we see deflection!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['9px','246px','481px','110px','auto','auto'],
            text:"This observation means something is wrong with the previous slides. The positive charge does feel a force. The question is \"How?\"",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'http---makeagifcom--media-5-11-2014-CLmtio',
            type:'image',
            rect:['90px','57px','320px','180px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"compass-deflection-observation.gif",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "height", '51px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_http---makeagifcom--media-5-11-2014-CLmtio}": [
            ["style", "left", '90px'],
            ["style", "top", '57px']
         ],
         "${_Text4}": [
            ["style", "top", '246px'],
            ["style", "height", '110px'],
            ["style", "left", '9px'],
            ["style", "width", '481px']
         ],
         "${_ElectronCopy9}": [
            ["style", "height", '36px'],
            ["style", "top", '129px'],
            ["style", "left", '826px'],
            ["style", "width", '38px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-13323038");
