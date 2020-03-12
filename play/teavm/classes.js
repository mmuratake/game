"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.U=f;}
function $rt_cls(cls){return B5(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Cm(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Cr());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return Cs(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var B2=$rt_throw;var Ct=$rt_compare;var Cu=$rt_nullCheck;var B4=$rt_cls;var Cn=$rt_createArray;var Cv=$rt_isInstance;var Cw=$rt_nativeThread;var Cx=$rt_suspending;var Cy=$rt_resuming;var Cz=$rt_invalidPointer;var C=$rt_s;var BN=$rt_eraseClinit;var CA=$rt_imul;var CB=$rt_wrapException;
function B(){this.$id$=0;}
function BI(a){return B5(a.constructor);}
function Cc(a){var b,c,d,e,f,g,h,i,j,k;b=new Bb;b.a=$rt_createCharArray(16);b=T(T(b,BU(BI(a))),C(0));c=BT(a);if(!c)d=C(1);else{if(!c)e=32;else{f=0;e=c>>>16;if(e)f=16;else e=c;g=e>>>8;if(!g)g=e;else f=f|8;e=g>>>4;if(!e)e=g;else f=f|4;g=e>>>2;if(!g)g=e;else f=f|2;if(g>>>1)f=f|1;e=(32-f|0)-1|0;}e=(((32-e|0)+4|0)-1|0)/4|0;h=$rt_createCharArray(e);i=h.data;g=(e-1|0)*4|0;j=0;while(g>=0){k=j+1|0;f=c>>>g&15;i[j]=f>=16?0:f<10?(48+f|0)&65535:((97+f|0)-10|0)&65535;g=g-4|0;j=k;}d=Cm(h);}return BG(T(b,d));}
function BT(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function BO(){B.call(this);}
function Cq(b){var c,d,e;BF();Bz();BR();console.log("Starting game");c=window.document;d=c.createElement("canvas");e=640;d.width=e;e=480;d.height=e;d.getContext("2d").fillRect(100.0,100.0,50.0,50.0);c.body.appendChild(d);}
function Ba(){}
function Bp(){var a=this;B.call(a);a.f=null;a.i=null;}
function B5(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Bp;c.i=b;d=c;b.classObject=d;}return c;}
function BU(a){if(a.f===null)a.f=$rt_str(a.i.$meta.name);return a.f;}
function BX(){B.call(this);}
function Y(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function BK(){B.call(this);}
function L(){}
function M(){}
function P(){}
function O(){var a=this;B.call(a);a.b=null;a.d=0;}
var CC=null;function Cm(a){var b=new O();BE(b,a);return b;}
function BE(a,b){var c,d;b=b.data;c=b.length;a.b=$rt_createCharArray(c);d=0;while(d<c){a.b.data[d]=b[d];d=d+1|0;}}
function V(a,b){if(b>=0&&b<a.b.data.length)return a.b.data[b];B2(B8());}
function E(a){return a.b.data.length;}
function By(a){return a.b.data.length?0:1;}
function Cg(a,b){var c,d;if(a===b)return 1;if(!(b instanceof O))return 0;c=b;if(E(c)!=E(a))return 0;d=0;while(d<E(c)){if(V(a,d)!=V(c,d))return 0;d=d+1|0;}return 1;}
function B_(a){var b,c,d,e;a:{if(!a.d){b=a.b.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.d=(31*a.d|0)+e|0;d=d+1|0;}}}return a.d;}
function BF(){CC=new Bx;}
function J(){var a=this;B.call(a);a.o=null;a.h=0;a.g=0;}
function CD(a){var b=new J();Bo(b,a);return b;}
function Bo(a,b){a.h=1;a.g=1;a.o=b;}
function Cd(a){return a;}
function R(){J.call(this);}
function H(){R.call(this);}
function BH(){H.call(this);}
function S(){var a=this;B.call(a);a.a=null;a.c=0;}
function Bw(){}
function Bb(){S.call(this);}
function T(a,b){Bs(a,a.c,b);return a;}
function Bs(a,b,c){var d,e,f;if(b>=0&&b<=a.c){a:{if(c===null)c=C(2);else if(By(c))break a;BA(a,a.c+E(c)|0);d=a.c-1|0;while(d>=b){a.a.data[d+E(c)|0]=a.a.data[d];d=d+(-1)|0;}a.c=a.c+E(c)|0;d=0;while(d<E(c)){e=a.a.data;f=b+1|0;e[b]=V(c,d);d=d+1|0;b=f;}}return a;}B2(B8());}
function BG(a){var b,c,d,e,f;b=new O;c=a.a;d=a.c;b.b=$rt_createCharArray(d);e=0;while(e<d){f=c.data;b.b.data[e]=f[e+0|0];e=e+1|0;}return b;}
function BA(a,b){var c,d,e,f;if(a.a.data.length<b){b=a.a.data.length>=1073741823?2147483647:BD(b,BD(a.a.data.length*2|0,5));c=a.a.data;d=$rt_createCharArray(b);e=c.length;if(b<e)e=b;f=d.data;b=0;while(b<e){f[b]=c[b];b=b+1|0;}a.a=d;}}
function Ca(a,b,c){return Bs(a,b,c);}
function U(){B.call(this);}
function Bf(){U.call(this);}
var CE=null;function Bz(){CE=B4($rt_intcls());}
function K(){H.call(this);}
function CF(a){var b=new K();Bg(b,a);return b;}
function Bg(a,b){Bo(a,b);}
function BS(){K.call(this);}
function CG(a){var b=new BS();Ce(b,a);return b;}
function Ce(a,b){Bg(a,b);}
function BV(){K.call(this);}
function CH(a){var b=new BV();B$(b,a);return b;}
function B$(a,b){Bg(a,b);}
function W(){J.call(this);}
function X(){W.call(this);}
function Cs(a){var b=new X();B9(b,a);return b;}
function B9(a,b){Bo(a,b);}
function BJ(){B.call(this);}
function I(){}
function Be(){}
function Bm(){}
function F(){}
function BB(){}
function BM(){var a=this;B.call(a);a.F=null;a.I=null;}
function BQ(){B.call(this);}
function Bl(){}
function Bh(){}
function Br(){}
function Bc(){}
function Bd(){}
function Bq(){}
function Bi(){}
function BY(){B.call(this);}
function B7(a,b,c){a.T($rt_str(b),Y(c,"handleEvent"));}
function BZ(a,b,c){a.Q($rt_str(b),Y(c,"handleEvent"));}
function Cb(a,b){return a.D(b);}
function Cf(a,b,c,d){a.y($rt_str(b),Y(c,"handleEvent"),d?1:0);}
function B6(a,b){return !!a.w(b);}
function B3(a){return a.O();}
function B1(a,b,c,d){a.z($rt_str(b),Y(c,"handleEvent"),d?1:0);}
function Bn(){}
function Bx(){B.call(this);}
function N(){B.call(this);}
var CI=null;var CJ=null;function BR(){CI=B4($rt_charcls());CJ=Cn(N,128);}
function Z(){X.call(this);}
function BL(){Z.call(this);}
function B8(){var a=new BL();Ch(a);return a;}
function Ch(a){a.h=1;a.g=1;}
function BP(){B.call(this);}
function BD(b,c){if(b>c)c=b;return c;}
function BW(){B.call(this);}
$rt_packages([-1,"java",0,"lang"]);
$rt_metadata([B,"Object",1,0,[],0,3,0,0,BO,0,B,[],0,3,0,0,Ba,0,B,[],3,3,0,0,Bp,0,B,[Ba],0,3,0,0,BX,0,B,[],4,0,0,0,BK,0,B,[],4,3,0,0,L,0,B,[],3,3,0,0,M,0,B,[],3,3,0,0,P,0,B,[],3,3,0,0,O,0,B,[L,M,P],0,3,0,0,J,0,B,[],0,3,0,0,R,0,J,[],0,3,0,0,H,0,R,[],0,3,0,0,BH,0,H,[],0,3,0,0,S,0,B,[L,P],0,0,0,0,Bw,0,B,[],3,3,0,0,Bb,0,S,[Bw],0,3,0,0,U,0,B,[L],1,3,0,0,Bf,0,U,[M],0,3,0,0,K,0,H,[],0,3,0,0,BS,0,K,[],0,3,0,0,BV,0,K,[],0,3,0,0,W,0,J,[],0,3,0,0,X,0,W,[],0,3,0,0,BJ,0,B,[],0,3,0,0,I,0,B,[],3,3,0,0,Be,0,B,[I],3,3,0,0,Bm,
0,B,[Be],3,3,0,0,F,0,B,[I],3,3,0,0,BB,0,B,[Bm,F],3,3,0,0,BM,0,B,[],0,3,0,0,BQ,0,B,[],4,3,0,0,Bl,0,B,[F],3,3,0,0,Bh,0,B,[F],3,3,0,0,Br,0,B,[F],3,3,0,0,Bc,0,B,[F],3,3,0,0,Bd,0,B,[F,Bl,Bh,Br,Bc],3,3,0,0,Bq,0,B,[],3,3,0,0,Bi,0,B,[I],3,3,0,0,BY,0,B,[I,Bd,Bq,Bi],1,3,0,["B",function(b,c){return B7(this,b,c);},"R",function(b,c){return BZ(this,b,c);},"S",function(b){return Cb(this,b);},"E",function(b,c,d){return Cf(this,b,c,d);},"u",function(b){return B6(this,b);},"K",function(){return B3(this);},"G",function(b,c,d)
{return B1(this,b,c,d);}],Bn,0,B,[],3,3,0,0,Bx,0,B,[Bn],0,3,0,0,N,0,B,[M],0,3,0,0,Z,0,X,[],0,3,0,0,BL,0,Z,[],0,3,0,0,BP,0,B,[],4,3,0,0,BW,0,B,[],0,3,0,0]);
function $rt_array(cls,data){this.Z=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@","0","null"]);
O.prototype.toString=function(){return $rt_ustr(this);};
O.prototype.valueOf=O.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Cc(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(Cq);
(function(){var c;c=BY.prototype;c.dispatchEvent=c.u;c.addEventListener=c.B;c.removeEventListener=c.R;c.getLength=c.K;c.get=c.S;c.addEventListener=c.G;c.removeEventListener=c.E;})();
})();
