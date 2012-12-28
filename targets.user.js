// ==UserScript==
// @match http://www.ingress.com/intel
// @match http://ingress.com/intel
// ==/UserScript==

//Stolen code used to break out of the greasemonkey/userscripts wrapper
if ('undefined' == typeof __PAGE_SCOPE_RUN__) {
  (function page_scope_runner() {
    // If we're _not_ already running in the page, grab the full source
    // of this script.
    var my_src = "(" + page_scope_runner.caller.toString() + ")();";

    // Create a script node holding this script, plus a marker that lets us
    // know we are running in the page scope (not the Greasemonkey sandbox).
    // Note that we are intentionally *not* scope-wrapping here.
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.textContent = "var __PAGE_SCOPE_RUN__ = true;\n" + my_src;

    // Insert the script node into the page, so it will run, and immediately
    // remove it to clean up.  Use setTimeout to force execution "outside" of
    // the user script scope completely.
    setTimeout(function() {
          document.body.appendChild(script);
          document.body.removeChild(script);
        }, 0);
  })();

  // Stop running, because we know Greasemonkey actually runs us in
  // an anonymous wrapper.
  return;
}
// For some reason I couldn't include CryptoJS via the same method datatables is included and have it work.
// I just copied all the code below to work around that issue.
//BEGIN CryptoJS
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(o,q){var l={},m=l.lib={},n=m.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),j=m.WordArray=n.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=q?e:4*a.length},toString:function(a){return(a||r).stringify(this)},concat:function(a){var e=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)e[d+b>>>2]|=(c[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<c.length)for(b=0;b<a;b+=4)e[d+b>>>2]=c[b>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=o.ceil(e/4)},clone:function(){var a=
n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*o.random()|0);return j.create(e,a)}}),k=l.enc={},r=k.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var b=e[d>>>2]>>>24-8*(d%4)&255;c.push((b>>>4).toString(16));c.push((b&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return j.create(c,b/2)}},p=k.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return j.create(c,b)}},h=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},b=m.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=j.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,i=d/(4*f),i=a?o.ceil(i):o.max((i|0)-this._minBufferSize,0),a=i*f,d=o.min(4*a,d);if(a){for(var h=0;h<a;h+=f)this._doProcessBlock(c,h);h=c.splice(0,a);b.sigBytes-=d}return j.create(h,d)},clone:function(){var a=n.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});m.Hasher=b.extend({init:function(){this.reset()},
reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return f.HMAC.create(a,c).finalize(b)}}});var f=l.algo={};return l}(Math);
(function(o){function q(b,f,a,e,c,d,g){b=b+(f&a|~f&e)+c+g;return(b<<d|b>>>32-d)+f}function l(b,f,a,e,c,d,g){b=b+(f&e|a&~e)+c+g;return(b<<d|b>>>32-d)+f}function m(b,f,a,e,c,d,g){b=b+(f^a^e)+c+g;return(b<<d|b>>>32-d)+f}function n(b,f,a,e,c,d,g){b=b+(a^(f|~e))+c+g;return(b<<d|b>>>32-d)+f}var j=CryptoJS,k=j.lib,r=k.WordArray,k=k.Hasher,p=j.algo,h=[];(function(){for(var b=0;64>b;b++)h[b]=4294967296*o.abs(o.sin(b+1))|0})();p=p.MD5=k.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,
2562383102,271733878])},_doProcessBlock:function(b,f){for(var a=0;16>a;a++){var e=f+a,c=b[e];b[e]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}for(var e=this._hash.words,c=e[0],d=e[1],g=e[2],i=e[3],a=0;64>a;a+=4)16>a?(c=q(c,d,g,i,b[f+a],7,h[a]),i=q(i,c,d,g,b[f+a+1],12,h[a+1]),g=q(g,i,c,d,b[f+a+2],17,h[a+2]),d=q(d,g,i,c,b[f+a+3],22,h[a+3])):32>a?(c=l(c,d,g,i,b[f+(a+1)%16],5,h[a]),i=l(i,c,d,g,b[f+(a+6)%16],9,h[a+1]),g=l(g,i,c,d,b[f+(a+11)%16],14,h[a+2]),d=l(d,g,i,c,b[f+a%16],20,h[a+3])):48>a?(c=
m(c,d,g,i,b[f+(3*a+5)%16],4,h[a]),i=m(i,c,d,g,b[f+(3*a+8)%16],11,h[a+1]),g=m(g,i,c,d,b[f+(3*a+11)%16],16,h[a+2]),d=m(d,g,i,c,b[f+(3*a+14)%16],23,h[a+3])):(c=n(c,d,g,i,b[f+3*a%16],6,h[a]),i=n(i,c,d,g,b[f+(3*a+7)%16],10,h[a+1]),g=n(g,i,c,d,b[f+(3*a+14)%16],15,h[a+2]),d=n(d,g,i,c,b[f+(3*a+5)%16],21,h[a+3]));e[0]=e[0]+c|0;e[1]=e[1]+d|0;e[2]=e[2]+g|0;e[3]=e[3]+i|0},_doFinalize:function(){var b=this._data,f=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;f[e>>>5]|=128<<24-e%32;f[(e+64>>>9<<4)+14]=(a<<8|a>>>
24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(f.length+1);this._process();b=this._hash.words;for(f=0;4>f;f++)a=b[f],b[f]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360}});j.MD5=k._createHelper(p);j.HmacMD5=k._createHmacHelper(p)})(Math);
//END CryptoJS

//14201404787536b5f24a9867d7e981fb is the MD5 of the current version of function S.
//Since I just want to add a single line to the function, I have to ensure nothing has changed from the version I know.
var md5 = CryptoJS.MD5(String(S.prototype.constructor))
if (md5 != "14201404787536b5f24a9867d7e981fb")
{
  alert("NianticOps changed something, please get a new version\n\nCurrent version md5 =" + md5);
  return;
}

var portals = {}
var fields = []
var players = {"75e0289116e54a49afc79f3a787f73e7.c":{"name":"<span title=75e0289116e54a49afc79f3a787f73e7.c>scootle</span>","level":8,"faction":"RESISTANCE"},"c3a3ab410f0e42ca8ee65cd508d12d0c.c":{"name":"<span title=c3a3ab410f0e42ca8ee65cd508d12d0c.c>3nvy</span>","level":7,"faction":"RESISTANCE"},"9f572887898a4a92adec18ddec5ca3e2.c":{"name":"<span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c><span title=9f572887898a4a92adec18ddec5ca3e2.c>RobotAtlas</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"e212f04404594afaa5ea41f54ead1504.c":{"name":"e212f04404594afaa5ea41f54ead1504.c","level":7,"faction":"RESISTANCE"},"632fbac822064db2a3ce1f946bcc11ef.c":{"name":"632fbac822064db2a3ce1f946bcc11ef.c","level":7,"faction":"RESISTANCE"},"0af65bc7c3a24194aa8963d18913a5d3.c":{"name":"<span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c><span title=0af65bc7c3a24194aa8963d18913a5d3.c>gloaming</span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"a39ea7d50867496ebb46869f9fa3aa21.c":{"name":"a39ea7d50867496ebb46869f9fa3aa21.c","level":7,"faction":"RESISTANCE"},"f466a5a5ea0a43d8ab09ad11320f009e.c":{"name":"<span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c><span title=f466a5a5ea0a43d8ab09ad11320f009e.c>Rime</span></span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"bc22d7ecaba34a6c8e4a2c318c489266.c":{"name":"<span title=bc22d7ecaba34a6c8e4a2c318c489266.c>HSuke</span>","level":7,"faction":"RESISTANCE"},"b4dec4cff79647b6bcd50aa44dd0097b.c":{"name":"<span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c><span title=b4dec4cff79647b6bcd50aa44dd0097b.c>weasel</span></span></span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"0b65273203b640c2915f0b4dfaccb69a.c":{"name":"<span title=0b65273203b640c2915f0b4dfaccb69a.c><span title=0b65273203b640c2915f0b4dfaccb69a.c><span title=0b65273203b640c2915f0b4dfaccb69a.c><span title=0b65273203b640c2915f0b4dfaccb69a.c><span title=0b65273203b640c2915f0b4dfaccb69a.c><span title=0b65273203b640c2915f0b4dfaccb69a.c>GeneralMac</span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"13da0f008c9a4f1299e32a61b01eeff9.c":{"name":"<span title=13da0f008c9a4f1299e32a61b01eeff9.c>romeoso</span>","level":8,"faction":"RESISTANCE"},"fb2b604dcb76458eb7846859a037cc2d.c":{"name":"<span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c><span title=fb2b604dcb76458eb7846859a037cc2d.c>DividedSky</span></span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"a8d07113cdc840d88667a8edfb324527.c":{"name":"<span title=a8d07113cdc840d88667a8edfb324527.c>MrAnalytical</span>","level":7,"faction":"RESISTANCE"},"8639ac057b434afaa299492969567eec.c":{"name":"8639ac057b434afaa299492969567eec.c","level":7,"faction":"RESISTANCE"},"a7c99d8ba34e485296d6178662b61903.c":{"name":"<span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c><span title=a7c99d8ba34e485296d6178662b61903.c>hypercat</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"e91d2cbc0cc54366b884c4270b48a1a0.c":{"name":"<span title=e91d2cbc0cc54366b884c4270b48a1a0.c><span title=e91d2cbc0cc54366b884c4270b48a1a0.c><span title=e91d2cbc0cc54366b884c4270b48a1a0.c><span title=e91d2cbc0cc54366b884c4270b48a1a0.c><span title=e91d2cbc0cc54366b884c4270b48a1a0.c>splodey</span></span></span></span></span>","level":7,"faction":"ALIENS"},"82d83b3ab8a7404098e5ee094bd62e43.c":{"name":"<span title=82d83b3ab8a7404098e5ee094bd62e43.c><span title=82d83b3ab8a7404098e5ee094bd62e43.c><span title=82d83b3ab8a7404098e5ee094bd62e43.c><span title=82d83b3ab8a7404098e5ee094bd62e43.c><span title=82d83b3ab8a7404098e5ee094bd62e43.c><span title=82d83b3ab8a7404098e5ee094bd62e43.c>misterikkit</span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"ed014398a77e4f5db141c9d7c4a09d6a.c":{"name":"<span title=ed014398a77e4f5db141c9d7c4a09d6a.c>Zorkstation</span>","level":7,"faction":"RESISTANCE"},"43f327975d7048cd9fa79341230a0e11.c":{"name":"43f327975d7048cd9fa79341230a0e11.c","level":7,"faction":"RESISTANCE"},"5c26d3de8523408c97ddedc85fcf38bc.c":{"name":"<span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c><span title=5c26d3de8523408c97ddedc85fcf38bc.c>Ichthyos</span></span></span></span></span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"0e1a81db8fc5400cab4244c8b76e00cd.c":{"name":"<span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c><span title=0e1a81db8fc5400cab4244c8b76e00cd.c>Auryn</span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"43162d2463744e83b5edf248cc26c5b0.c":{"name":"43162d2463744e83b5edf248cc26c5b0.c","level":7,"faction":"RESISTANCE"},"0958eedd3ce647129b4d4d0db87f5a1c.c":{"name":"<span title=0958eedd3ce647129b4d4d0db87f5a1c.c>rongou</span>","level":7,"faction":"RESISTANCE"},"a497819a951a4840b6c70b04b42267fc.c":{"name":"<span title=a497819a951a4840b6c70b04b42267fc.c><span title=a497819a951a4840b6c70b04b42267fc.c><span title=a497819a951a4840b6c70b04b42267fc.c>foobar</span></span></span>","level":7,"faction":"ALIENS"},"a0206bdc7a794def9765b2baba071b51.c":{"name":"a0206bdc7a794def9765b2baba071b51.c","level":7,"faction":"RESISTANCE"},"9e9b5fb095894c11bb3a55bbdef869af.c":{"name":"<span title=9e9b5fb095894c11bb3a55bbdef869af.c>Tiak</span>","level":7,"faction":"RESISTANCE"},"70e2bd6785d8407b832a077ed2fdc5bf.c":{"name":"70e2bd6785d8407b832a077ed2fdc5bf.c","level":7,"faction":"RESISTANCE"},"77285f723fec4f8db86e29d52dcbf017.c":{"name":"<span title=77285f723fec4f8db86e29d52dcbf017.c>rck</span>","level":7,"faction":"RESISTANCE"},"460c531b543f42c397c5cde126a38bcf.c":{"name":"460c531b543f42c397c5cde126a38bcf.c","level":8,"faction":"RESISTANCE"},"0a65441a826c4dd29e895bb9a3d18f4e.c":{"name":"<span title=0a65441a826c4dd29e895bb9a3d18f4e.c>Montserrat</span>","level":7,"faction":"RESISTANCE"},"8291bbf37224470189aa3f3950d2a708.c":{"name":"<span title=8291bbf37224470189aa3f3950d2a708.c>Ninjai</span>","level":7,"faction":"RESISTANCE"},"3eef7d1bbb114db7b3beceef50c1ce4a.c":{"name":"<span title=3eef7d1bbb114db7b3beceef50c1ce4a.c>gosha</span>","level":8,"faction":"RESISTANCE"},"4cdacdfaddc64ffb8e24d7f2f7662145.c":{"name":"4cdacdfaddc64ffb8e24d7f2f7662145.c","level":7,"faction":"RESISTANCE"},"4a2359c01580430cb595a0ae5659569b.c":{"name":"<span title=4a2359c01580430cb595a0ae5659569b.c>tspwh</span>","level":7,"faction":"RESISTANCE"},"2223ac94d906446b9cf62cced8f61ae5.c":{"name":"<span title=2223ac94d906446b9cf62cced8f61ae5.c>Luffi</span>","level":7,"faction":"RESISTANCE"},"11f31a923ae84c95add6559305628071.c":{"name":"11f31a923ae84c95add6559305628071.c","level":7,"faction":"RESISTANCE"},"c9803ea0c84a41589ef769978e883ba2.c":{"name":"<span title=c9803ea0c84a41589ef769978e883ba2.c>kirkalicious</span>","level":8,"faction":"RESISTANCE"},"d755adbf0aaa4ff38c1b94ee64444ed9.c":{"name":"d755adbf0aaa4ff38c1b94ee64444ed9.c","level":8,"faction":"RESISTANCE"},"32798c34ba4747849d4ed856b0e243d2.c":{"name":"32798c34ba4747849d4ed856b0e243d2.c","level":8,"faction":"RESISTANCE"},"619d78cb52c146fca419f87b3c3136ff.c":{"name":"619d78cb52c146fca419f87b3c3136ff.c","level":7,"faction":"RESISTANCE"},"f7df1573d766469189de9709cb8ea2ce.c":{"name":"<span title=f7df1573d766469189de9709cb8ea2ce.c><span title=f7df1573d766469189de9709cb8ea2ce.c>DestroyRawr</span></span>","level":7,"faction":"ALIENS"},"eca4c6e1ef3e42bba3d8eb0fa7fc9959.c":{"name":"<span title=eca4c6e1ef3e42bba3d8eb0fa7fc9959.c><span title=eca4c6e1ef3e42bba3d8eb0fa7fc9959.c>DextroyRawr</span></span>","level":8,"faction":"ALIENS"},"9fce7d05a6064d9986470b29e44d0586.c":{"name":"9fce7d05a6064d9986470b29e44d0586.c","level":7,"faction":"RESISTANCE"},"f713f57130be4e779400b05cead45a75.c":{"name":"<span title=f713f57130be4e779400b05cead45a75.c>Cyclomania</span>","level":7,"faction":"RESISTANCE"},"d67232408c55463695f098e8280ec042.c":{"name":"<span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c><span title=d67232408c55463695f098e8280ec042.c>mengo76</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"f0b4341372f74138b43ced8a4bf134bc.c":{"name":"<span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c><span title=f0b4341372f74138b43ced8a4bf134bc.c>badito</span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"265bd94105f149c8901dee8a96102c89.c":{"name":"265bd94105f149c8901dee8a96102c89.c","level":7,"faction":"RESISTANCE"},"b9fe6d2bdb6c43038e920eaafa6ba587.c":{"name":"<span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c><span title=b9fe6d2bdb6c43038e920eaafa6ba587.c>firedrake</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"4ffaff2af630477cbe78f575754e0fb4.c":{"name":"<span title=4ffaff2af630477cbe78f575754e0fb4.c>TheCurmudgeon</span>","level":7,"faction":"RESISTANCE"},"4eac31948bb243eaa85d357c95dee147.c":{"name":"<span title=4eac31948bb243eaa85d357c95dee147.c>xyzzy</span>","level":7,"faction":"RESISTANCE"},"09cee2784dbe446783781a19ce5e32eb.c":{"name":"<span title=09cee2784dbe446783781a19ce5e32eb.c>sleepy</span>","level":7,"faction":"RESISTANCE"},"d758ee87259e4dc1b202d608eef18786.c":{"name":"<span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c><span title=d758ee87259e4dc1b202d608eef18786.c>robeau</span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"82adb6fea5a447eb98ebf16fe997dca8.c":{"name":"<span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c><span title=82adb6fea5a447eb98ebf16fe997dca8.c>Moritz</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"e460fadba42c4ba7ab59b677069c73d8.c":{"name":"<span title=e460fadba42c4ba7ab59b677069c73d8.c>tanzanite</span>","level":8,"faction":"RESISTANCE"},"0c1958a4d58c4f57abe91a2cb88ec054.c":{"name":"0c1958a4d58c4f57abe91a2cb88ec054.c","level":7,"faction":"RESISTANCE"},"9c9a4b4945b04b6da8e9b2f323943756.c":{"name":"<span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c><span title=9c9a4b4945b04b6da8e9b2f323943756.c>Thrakazog</span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"27a4b2af6a5749809b806a8c60e7f736.c":{"name":"<span title=27a4b2af6a5749809b806a8c60e7f736.c>Jdban</span>","level":7,"faction":"RESISTANCE"},"a9a70de32b474c4a94469f557954125c.c":{"name":"<span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c><span title=a9a70de32b474c4a94469f557954125c.c>sheepcow</span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"4cc1f9be50de4287856d770d06432342.c":{"name":"<span title=4cc1f9be50de4287856d770d06432342.c>Moschops</span>","level":7,"faction":"RESISTANCE"},"b26eae1f9dcd430c9a76df2feccbdc69.c":{"name":"<span title=b26eae1f9dcd430c9a76df2feccbdc69.c><span title=b26eae1f9dcd430c9a76df2feccbdc69.c><span title=b26eae1f9dcd430c9a76df2feccbdc69.c><span title=b26eae1f9dcd430c9a76df2feccbdc69.c><span title=b26eae1f9dcd430c9a76df2feccbdc69.c><span title=b26eae1f9dcd430c9a76df2feccbdc69.c>SYBKing</span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"17de098a98f94f1aa7cadf2ae85f7625.c":{"name":"<span title=17de098a98f94f1aa7cadf2ae85f7625.c><span title=17de098a98f94f1aa7cadf2ae85f7625.c><span title=17de098a98f94f1aa7cadf2ae85f7625.c><span title=17de098a98f94f1aa7cadf2ae85f7625.c>Ravenclaw</span></span></span></span>","level":7,"faction":"ALIENS"},"fe9bcd8e259d4afb812b64d3e672794c.c":{"name":"<span title=fe9bcd8e259d4afb812b64d3e672794c.c><span title=fe9bcd8e259d4afb812b64d3e672794c.c><span title=fe9bcd8e259d4afb812b64d3e672794c.c><span title=fe9bcd8e259d4afb812b64d3e672794c.c><span title=fe9bcd8e259d4afb812b64d3e672794c.c><span title=fe9bcd8e259d4afb812b64d3e672794c.c>Ariock</span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"e37466fd5ffb434385a8e79ff2d26b8d.c":{"name":"<span title=e37466fd5ffb434385a8e79ff2d26b8d.c><span title=e37466fd5ffb434385a8e79ff2d26b8d.c><span title=e37466fd5ffb434385a8e79ff2d26b8d.c><span title=e37466fd5ffb434385a8e79ff2d26b8d.c><span title=e37466fd5ffb434385a8e79ff2d26b8d.c><span title=e37466fd5ffb434385a8e79ff2d26b8d.c>majestic12</span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"f41509894f184329a4ee817c2e391c64.c":{"name":"<span title=f41509894f184329a4ee817c2e391c64.c><span title=f41509894f184329a4ee817c2e391c64.c><span title=f41509894f184329a4ee817c2e391c64.c><span title=f41509894f184329a4ee817c2e391c64.c><span title=f41509894f184329a4ee817c2e391c64.c><span title=f41509894f184329a4ee817c2e391c64.c>RustyVenture</span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"ddd7d62b946841f1aafee622e9d5ac3c.c":{"name":"<span title=ddd7d62b946841f1aafee622e9d5ac3c.c><span title=ddd7d62b946841f1aafee622e9d5ac3c.c><span title=ddd7d62b946841f1aafee622e9d5ac3c.c><span title=ddd7d62b946841f1aafee622e9d5ac3c.c><span title=ddd7d62b946841f1aafee622e9d5ac3c.c><span title=ddd7d62b946841f1aafee622e9d5ac3c.c>P1X3L</span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"36ca6a2bef0046139a95c94e40161d32.c":{"name":"<span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c><span title=36ca6a2bef0046139a95c94e40161d32.c>Sun</span></span></span></span></span></span></span></span></span></span></span></span></span>","level":8,"faction":"ALIENS"},"54dc9c1c7e7a44a780554eddbfeae1f8.c":{"name":"<span title=54dc9c1c7e7a44a780554eddbfeae1f8.c><span title=54dc9c1c7e7a44a780554eddbfeae1f8.c>mercurio</span></span>","level":7,"faction":"ALIENS"},"3de5f2db05ba473f9047eaab50de3fa5.c":{"name":"3de5f2db05ba473f9047eaab50de3fa5.c","level":7,"faction":"RESISTANCE"},"fcb4e1d1967c4c13aa5b98acff5c7f70.c":{"name":"<span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c><span title=fcb4e1d1967c4c13aa5b98acff5c7f70.c>Nemo5150</span></span></span></span></span></span></span>","level":7,"faction":"ALIENS"},"07dcac54475742d796aa4ea70ebec636.c":{"name":"07dcac54475742d796aa4ea70ebec636.c","level":7,"faction":"RESISTANCE"}} 

//collect all relevant portal info into a global variable for use when creating the table.
function CollectPortalInfo(a)
{
  if (("result" in a))
  {
    if ("map" in a.result)
    {
      for (var idThing in a.result.map)
      {
        var idThing = a.result.map[idThing]
        if ("gameEntities" in idThing)
        {
          for (var entity in idThing.gameEntities)
          {
            var entity = idThing.gameEntities[entity];
            var guid = entity[0]
            var properties = entity[2]
            if ("portalV2" in properties)
            {
              if (typeof portals[guid] == 'undefined')
              {
                portals[guid] = {"fields": 0, "MU": 0}
              }
              else
              {
                portals[guid] = {"fields": portals[guid].fields, "MU": portals[guid].MU}
              }
              portals[guid].faction = properties.controllingTeam.team
              portals[guid].title = properties.portalV2.descriptiveText.TITLE
              portals[guid].address = properties.portalV2.descriptiveText.ADDRESS
              portals[guid].latE6 = properties.locationE6.latE6
              portals[guid].lngE6 = properties.locationE6.lngE6
              portals[guid].intelLink = "<a href='http://www.ingress.com/intel?latE6=" + String(portals[guid].latE6) +
                                        "&lngE6=" + String(portals[guid].lngE6) + "&z=19'>Link</a>"
              portals[guid].coords = String(portals[guid].latE6 / 1E6) + ", " + String(portals[guid].lngE6 / 1E6)
              portals[guid].level = 0
              portals[guid].resonators = ""
              portals[guid].numResonators = 0
              for (var i in properties.resonatorArray.resonators)
              {
                var resonator = properties.resonatorArray.resonators[i]
                if (resonator != null)
                {
                  var level = resonator.level
                  portals[guid].level += level / 8
                  portals[guid].resonators += String(level)
                  portals[guid].numResonators++
                  portals[guid].players += String(resonator.ownerGuid) + " "
                  if (typeof players[resonator.ownerGuid] == 'undefined')
                  {
                    players[resonator.ownerGuid] = {"name": "", "level": level, "faction": portals[guid].faction}
                  }
                  else
                  {
                    players[resonator.ownerGuid].level = players[resonator.ownerGuid].level < level ? level : players[resonator.ownerGuid].level
                  }
                }
                else
                {
                  portals[guid].resonators += "0"
                }
              }
              portals[guid].sortedResonators = Number(portals[guid].resonators.split('').sort().reverse().join(''))
              portals[guid].mitigation = 0
              portals[guid].mods = ""
              for (var i in properties.portalV2.linkedModArray)
              {
                if (properties.portalV2.linkedModArray[i] != null)
                {
                  var mod = properties.portalV2.linkedModArray[i].stats.MITIGATION
                  portals[guid].mitigation += Number(mod)
                  portals[guid].mods += "(" + mod + ")"
                }
              }
              portals[guid].links = 0
              if ("linkedEdges" in properties.portalV2)
              {
                for (var i in properties.portalV2.linkedEdges)
                {
                  if (properties.portalV2.linkedEdges[i] != null)
                  {
                      portals[guid].links++
                  }
                }
              }
            }
            else
            {
              if ("capturedRegion" in properties)
              {
                if ($.inArray(guid, fields) == -1)
                {
                  fields.push(guid)
                  for (var vertex in properties.capturedRegion)
                  {
                    var guid = properties.capturedRegion[vertex].guid
                    if (typeof portals[guid] == 'undefined')
                    {
                      portals[guid] = {"fields": 0, "MU": 0}
                    }
                    if (typeof portals[guid].fields == 'undefined')
                    {
                      portals[guid].fields = 0
                      portals[guid].MU = 0
                    }
                    portals[guid].fields += 1
                    portals[guid].MU += Number(properties.entityScore.entityScore)
                  }
                }
              }
              else
              {
                if ("edge" in properties)
                {
                  //using edge entities sucks for counting links
                }
              }
            }
          }
        }
      }
    }
    if (($.isArray(a.result)) && ("nickname" in a.result[0]))
    {
      for (var i in a.result)
      {
        var guid = a.result[i].guid
        players[guid].name = a.result[i].nickname
      }
    }
  }
}
//This *SHOULD* work, but it doesn't. I think it has something to do with the greasemonkey/userscript wrapper.
/*
window.S = new Function (
  "a", "b", "c", "d", "e",
  String(S.prototype.constructor)
    .replace("success:function(a) {", "success:function(a) {\n    CollectPortalInfo(a)")
    .replace(/^function[^{]+{/i,"")  // remove everything up to and including the first curly bracket
    .replace(/}[^}]*$/i, "")  // remove last curly bracket and everything after
);
*/

//Since I can't just insert the line I want, I have to overwrite the entire function with the last known function + the included line.
//This is why I break out if the function changes from my known version.
window.S = function (a, b, c, d, e) {
  c.method = b;
  var f = t(a.Fc, a, b, e), g = t(a.cd, a, b, d), h = t(a.jd, a);
  _gaq.push(["_trackEvent", "RPC", b]);
  c = $.ajax({type:"POST", url:"/rpc/" + b, dataType:"json", contentType:"application/json; charset=utf-8", data:JSON.stringify(c), Jd:function() {
    f()
  }, success:function(a) {
    CollectPortalInfo(a)
    g(a)
  }, error:function() {
    _gaq.push(["_trackEvent", "RPC_error", b])
  }, complete:function(a) {
    h(b, a)
  }});
  Mc(a, b).push(c)
}

//include datatables
var script = document.createElement('script')
script.src = "http://datatables.net/download/build/jquery.dataTables.min.js"
document.getElementsByTagName('head')[0].appendChild(script);

//Add a div below the footer. Completely hidden from view without scrolling down.
$("#footer").after(' \
<div style="width: 100%; height: 100%; margin-top: 70px; min-width: 700px;" id="target"> \
  <table style="border: 2px solid #59FBEA; display:inline-block;"> \
    <tr> \
      <td>Show:</td> \
      <td><input type="checkbox" name="level" value="0" checked="checked">L0</input></td> \
      <td><input type="checkbox" name="level" value="1" checked="checked">L1</input></td> \
      <td><input type="checkbox" name="level" value="2" checked="checked">L2</input></td> \
      <td><input type="checkbox" name="level" value="3" checked="checked">L3</input></td> \
      <td><input type="checkbox" name="level" value="4" checked="checked">L4</input></td> \
      <td><input type="checkbox" name="level" value="5" checked="checked">L5</input></td> \
      <td><input type="checkbox" name="level" value="6" checked="checked">L6</input></td> \
      <td><input type="checkbox" name="level" value="7" checked="checked">L7</input></td> \
      <td><input type="checkbox" name="level" value="8" checked="checked">L8</input></td> \
      <td><input type="checkbox" name="faction" value="NEUTRAL">Unclaimed</input></td> \
      <td><input type="checkbox" name="faction" value="ALIENS" checked="checked">Aliens</input></td> \
      <td><input type="checkbox" name="faction" value="RESISTANCE">Resistance</input></td> \
    </tr> \
  </table> \
  <table style="border: 2px solid red; display:inline-block;"><tr><td><span id="refresh" style="cursor: pointer">Refresh Targets</span></td></tr></table> \
  <table style="border: 2px solid gray; display:inline-block;"><tr><td><span id="export" style="cursor: pointer">Export Player List</span></td></tr></table><br/> \
  <table id="targetTable"></table> \
</div> \
')
$("#refresh").click(makeTargetsTable)
$("#export").click(makePlayersTable)

//Populate the table with data.
function colorRows(nRow, aData, iDisplayIndex, iDisplayIndexFull)
{
  if ( aData.faction == "ALIENS" )
  {
    $(nRow).css( { 'background-color': 'darkgreen'} )
  }
  else
  {
    if (aData.faction == "RESISTANCE")
    {
      $(nRow).css( { 'background-color': 'darkblue' } )
    }
    else
    {
      $(nRow).css( { 'background-color': 'darkgrey' } )
    }
  }
}

function makeTargetsTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var aaData = []
  for (var guid in portals)
  {
    var portal = portals[guid]
    if ($.inArray(String(portal.faction), factions) == -1)
      continue;
    if ($.inArray(String(portal.level | 0), levels) == -1)
      continue;
    if ( typeof portal.address == 'undefined')
      continue;
    portal.res = "<span title='" + portal.resonators + "'>" + portal.sortedResonators + "</span>"
    portal.AP = portal.fields * 750 + portal.links * 187 + portal.numResonators * 75
    aaData.push(portal)
  }

  var aoColumns = [
    { "sTitle": "Title",   "mData": "title", sWidth: '230px'},
    { "sTitle": "Address",  "mData": "address", sWidth: '300px'},
    { "sTitle": "Coordinates", "mData": "coords", sWidth: '170px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Resonators",    "mData": "res", sWidth: '70px'},
    { "sTitle": "Mods",    "mData": "mods", sWidth: '100px'},
    { "sTitle": "Links",    "mData": "links", sWidth: '20px'},
    { "sTitle": "Fields",    "mData": "fields", sWidth: '20px'},
    { "sTitle": "AP",    "mData": "AP", sWidth: '70px'},
    { "sTitle": "MU",    "mData": "MU", sWidth: '90px'},
    { "sTitle": "Intel",    "mData": "intelLink", sWidth: '35px'},
    { "sTitle": "Faction",  "mData": "faction", "bSearchable": false, "bVisible": false},
    { "sTitle": "Players",  "mData": "players", "bSearchable": true, "bVisible": false}
  ]
  $("#targetTable").dataTable({"aaData": aaData, "aoColumns": aoColumns, "aaSorting": [[ 8, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })
}

function makePlayersTable()
{
  var levels = []
  $("input[type='checkbox'][name='level']:checked").each(function(){levels.push($(this).attr('value'))} )
  var factions = []
  $("input[type='checkbox'][name='faction']:checked").each(function(){factions.push($(this).attr('value'))} )
  var aaData = []
  var playersToExport = {}
  for (var guid in players)
  {
    var player = players[guid]
    if ($.inArray(String(player.faction), factions) == -1)
      continue;
    if ($.inArray(String(player.level | 0), levels) == -1)
      continue;
//    if (player.name || (player.level > 5))
//      playersToExport[guid] = JSON.parse(JSON.stringify(players[guid]))
    player.name = player.name ? "<span title=" + guid + ">" + player.name + "</span>" : guid
    aaData.push(player)
  }

//  console.log(JSON.stringify(playersToExport))

  var aoColumns = [
    { "sTitle": "Name",   "mData": "name", sWidth: '230px'},
    { "sTitle": "Level",  "mData": "level", sWidth: '60px'},
    { "sTitle": "Faction",  "mData": "faction",  "bSearchable": false, "bVisible": false}
  ]
  $("#targetTable").dataTable({"aaData": aaData, "aoColumns": aoColumns, "aaSorting": [[ 1, "desc" ]], "bAutoWidth": false, "bDestroy": true, "fnRowCallback": colorRows })

}
