(this["webpackJsonpportal-site-cra"]=this["webpackJsonpportal-site-cra"]||[]).push([[3],{48:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(2),o=r(4),i=r(3),c=r(0),l=r.n(c),s=r(55),u=r.n(s),f=[{word:"\u5316\u5986\u68c9\u4f7f\u7528\u6b65\u9aa4\u56fe\u89e3",rec:!0},{word:"\u62a4\u80a4\u5c0f\u5e38\u8bc6",rec:!1},{word:"\u66f2\u5267\u674e\u8c41\u5b50\u79bb\u5a5a",rec:!1},{word:"\u513f\u7ae5\u5b66\u753b\u753b\u5c0f\u89c6\u9891",rec:!1}],d=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={},a}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props.onSelectWord;return l.a.createElement("div",{className:"guessword"},l.a.createElement("div",{className:"guess-tit"},"\u731c\u4f60\u60f3\u641c"),l.a.createElement("div",{className:"guess-list"},f.map((function(t){return l.a.createElement("div",{key:t.word,className:"guess-item line1 ".concat(t.rec?"rec":""),onClick:function(){return e&&e(t.word)}},t.word)}))))}}]),r}(l.a.Component),p=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).getAssociateWord=function(){var e=a.props.word;return[{word:"\u4eca\u5929\u662f".concat(e,"\u7684\u751f\u65e5\u5417"),html:l.a.createElement("span",null,"\u4eca\u5929\u662f",l.a.createElement("span",{className:"match"},e),"\u7684\u751f\u65e5\u5417")},{word:"".concat(e,"\u662f\u6700\u7f8e\u7684"),html:l.a.createElement("span",null,l.a.createElement("span",{className:"match"},e),"\u662f\u6700\u7f8e\u7684")},{word:"\u6211\u559c\u6b22".concat(e),html:l.a.createElement("span",null,"\u6211\u559c\u6b22",l.a.createElement("span",{className:"match"},e))},{word:"\u6211\u60f3\u4f60\u4e86".concat(e),html:l.a.createElement("span",null,"\u6211\u60f3\u4f60\u4e86",l.a.createElement("span",{className:"match"},e))},{word:"\u9664\u4e86".concat(e,"\uff0c\u6211\u8c01\u90fd\u4e0d\u7406"),html:l.a.createElement("span",null,"\u9664\u4e86",l.a.createElement("span",{className:"match"},e),"\uff0c\u6211\u8c01\u90fd\u4e0d\u7406")}]},a.state={},a}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props.onSelectWord,t=this.getAssociateWord();return l.a.createElement("div",{className:"associatewords"},t.map((function(t){return l.a.createElement("div",{key:t.word,className:"word line1",onClick:function(){return e&&e(t.word)}},t.html)})))}}]),r}(l.a.Component),h=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={},a}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,t=e.word,r=e.result;return l.a.createElement("div",{className:"resultword"},l.a.createElement("div",{className:"result-tit"},"\u641c\u7d22\u7ed3\u679c"),0===r.length&&l.a.createElement("div",{className:"noresult"},"\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230\u5173\u4e8e\u300e",l.a.createElement("b",null,t),"\u300f\u7684\u4efb\u4f55\u5185\u5bb9"),r.length>0&&l.a.createElement("div",null,"\u6709\u7ed3\u679c\uff01"))}}]),r}(l.a.Component),m=(r(58),function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).changeContent=function(e){a.setState({contentType:e})},a.handleClearInput=function(e){e.stopPropagation(),e.preventDefault(),a.setState({searchWord:""}),a.changeContent("guess")},a.handleInputChange=function(e){var t=e.target.value;a.setState({searchWord:t}),t?a.changeContent("associate"):a.changeContent("guess")},a.handleEnterPress=function(e){13===(window.event||e).keyCode&&a.handleSearch()},a.handleSearchBtnClick=function(){var e=a.state,t=e.contentType,r=e.searchWord;if("loading"!==t)return r?void a.handleSearch():a.props.history.goBack()},a.handleSelectGuess=function(e){a.setState({searchWord:e},(function(){a.handleSearch()}))},a.handleSearch=function(){var e=a.state.searchWord;e&&(console.log(e),a.changeContent("loading"),setTimeout((function(){a.changeContent("result")}),1e3))},a.renderContent=function(){var e=a.state,t=e.contentType,r=e.searchWord,n=e.searchResult;return{loading:l.a.createElement("div",{className:"loading-content"},"\u6b63\u5728\u641c\u7d22\uff0c\u8bf7\u7a0d\u540e..."),guess:l.a.createElement(d,{onSelectWord:a.handleSelectGuess}),associate:l.a.createElement(p,{word:r,onSelectWord:a.handleSelectGuess}),result:l.a.createElement(h,{word:r,result:n})}[t]},a.state={contentType:"guess",searchWord:u.a.parse(e.location.search.slice(1)).key||"",searchResult:[]},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.handleSearch()}},{key:"render",value:function(){var e=this.state,t=e.contentType,r=e.searchWord;return l.a.createElement("div",{className:"page-root page-search"},l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"searchbox"},l.a.createElement("input",{autoFocus:!0,type:"text",className:"input",placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",disabled:"loading"===t,value:r,onChange:this.handleInputChange,onKeyDown:this.handleEnterPress}),l.a.createElement("span",{className:"loading"===t?"searchbtn loading":"searchbtn",onClick:this.handleSearchBtnClick},"loading"===t?"":r?"\u641c\u7d22":"\u53d6\u6d88"),l.a.createElement("span",{className:r&&"loading"!==t?"clear show":"clear",onClick:this.handleClearInput}))),l.a.createElement("div",{className:"body"},this.renderContent()))}}]),r}(l.a.Component));t.default=m},49:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],c=Object.keys(i),l=0;l<c.length;++l){var s=c[l],u=i[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var n=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(a){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",i=0;i<n.length;++i){var c=n.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?a+=n.charAt(i):c<128?a+=o[c]:c<2048?a+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?a+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(i)),a+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return a},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(a(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var c=t;return a(t)&&!a(r)&&(c=i(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"===typeof i&&r&&"object"===typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),c)}}},50:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g,o=r(49),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)},55:function(e,t,r){"use strict";var n=r(56),a=r(57),o=r(50);e.exports={formats:o,parse:a,stringify:n}},56:function(e,t,r){"use strict";var n=r(49),a=r(50),o=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,f=a.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:a.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,a,o,i,l,u,f,p,h,m,y,g){var b,v=t;if("function"===typeof u?v=u(r,v):v instanceof Date?v=h(v):"comma"===a&&c(v)&&(v=v.join(",")),null===v){if(o)return l&&!y?l(r,d.encoder,g,"key"):r;v=""}if("string"===typeof(b=v)||"number"===typeof b||"boolean"===typeof b||"symbol"===typeof b||"bigint"===typeof b||n.isBuffer(v))return l?[m(y?r:l(r,d.encoder,g,"key"))+"="+m(l(v,d.encoder,g,"value"))]:[m(r)+"="+m(String(v))];var j,w=[];if("undefined"===typeof v)return w;if(c(u))j=u;else{var O=Object.keys(v);j=f?O.sort(f):O}for(var E=0;E<j.length;++E){var N=j[E];i&&null===v[N]||(c(v)?s(w,e(v[N],"function"===typeof a?a(r,N):r,a,o,i,l,u,f,p,h,m,y,g)):s(w,e(v[N],r+(p?"."+N:"["+N+"]"),a,o,i,l,u,f,p,h,m,y,g)))}return w};e.exports=function(e,t){var r,n=e,l=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if("undefined"!==typeof e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],i=d.filter;return("function"===typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"===typeof l.filter?n=(0,l.filter)("",n):c(l.filter)&&(r=l.filter);var u,f=[];if("object"!==typeof n||null===n)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=i[u];r||(r=Object.keys(n)),l.sort&&r.sort(l.sort);for(var m=0;m<r.length;++m){var y=r[m];l.skipNulls&&null===n[y]||s(f,p(n[y],y,h,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var g=f.join(l.delimiter),b=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),g.length>0?b+g:""}},57:function(e,t,r){"use strict";var n=r(49),a=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},s=function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},u=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=r.depth>0&&/(\[[^[\]]*])/.exec(o),s=c?o.slice(0,c.index):o,u=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}for(var f=0;r.depth>0&&null!==(c=i.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+o.slice(c.index)+"]"),function(e,t,r,n){for(var a=n?t:l(t,r),o=e.length-1;o>=0;--o){var i,c=e[o];if("[]"===c&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var s="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(s,10);r.parseArrays||""!==s?!isNaN(u)&&c!==s&&String(u)===s&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=a:i[s]=a:i={0:a}}a=i}return a}(u,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var f="string"===typeof e?function(e,t){var r,u={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,p=f.split(t.delimiter,d),h=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?m="utf-8":"utf8=%26%2310003%3B"===p[r]&&(m="iso-8859-1"),h=r,r=p.length);for(r=0;r<p.length;++r)if(r!==h){var y,g,b=p[r],v=b.indexOf("]="),j=-1===v?b.indexOf("="):v+1;-1===j?(y=t.decoder(b,i.decoder,m,"key"),g=t.strictNullHandling?null:""):(y=t.decoder(b.slice(0,j),i.decoder,m,"key"),g=s(l(b.slice(j+1),t),(function(e){return t.decoder(e,i.decoder,m,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===m&&(g=c(g)),b.indexOf("[]=")>-1&&(g=o(g)?[g]:g),a.call(u,y)?u[y]=n.combine(u[y],g):u[y]=g}return u}(e,r):e,d=r.plainObjects?Object.create(null):{},p=Object.keys(f),h=0;h<p.length;++h){var m=p[h],y=u(m,f[m],r,"string"===typeof e);d=n.merge(d,y,r)}return n.compact(d)}},58:function(e,t,r){}}]);
//# sourceMappingURL=3.47bf9a90.chunk.js.map