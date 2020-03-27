"use strict";
var main;
(function() {
var $rt_seed = 2463534242;
function $rt_nextId() {
    var x = $rt_seed;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
}
function $rt_compare(a, b) {
    return a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1;
}
function $rt_isInstance(obj, cls) {
    return obj !== null && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls);
}
function $rt_isAssignable(from, to) {
    if (from === to) {
        return true;
    }
    if (to.$meta.item !== null) {
        return from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
    }
    var supertypes = from.$meta.supertypes;
    for (var i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            return true;
        }
    }
    return false;
}
Array.prototype.fill = Array.prototype.fill || function(value, start, end) {
    var len = this.length;
    if (!len) return this;
    start = start | 0;
    var i = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    end = end === undefined ? len : end | 0;
    end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
    for (;i < end;i++) {
        this[i] = value;
    }
    return this;
};
function $rt_createArray(cls, sz) {
    var data = new Array(sz);
    data.fill(null);
    return new $rt_array(cls, data);
}
function $rt_createArrayFromData(cls, init) {
    return $rt_wrapArray(cls, init);
}
function $rt_wrapArray(cls, data) {
    return new $rt_array(cls, data);
}
function $rt_createUnfilledArray(cls, sz) {
    return new $rt_array(cls, new Array(sz));
}
function $rt_createLongArray(sz) {
    var data = new Array(sz);
    var arr = new $rt_array($rt_longcls(), data);
    data.fill(Long_ZERO);
    return arr;
}
function $rt_createLongArrayFromData(init) {
    return new $rt_array($rt_longcls(), init);
}
function $rt_createNumericArray(cls, nativeArray) {
    return new $rt_array(cls, nativeArray);
}
function $rt_createCharArray(sz) {
    return $rt_createNumericArray($rt_charcls(), new Uint16Array(sz));
}
function $rt_createCharArrayFromData(data) {
    var buffer = new Uint16Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_charcls(), buffer);
}
function $rt_createByteArray(sz) {
    return $rt_createNumericArray($rt_bytecls(), new Int8Array(sz));
}
function $rt_createByteArrayFromData(data) {
    var buffer = new Int8Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_bytecls(), buffer);
}
function $rt_createShortArray(sz) {
    return $rt_createNumericArray($rt_shortcls(), new Int16Array(sz));
}
function $rt_createShortArrayFromData(data) {
    var buffer = new Int16Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_shortcls(), buffer);
}
function $rt_createIntArray(sz) {
    return $rt_createNumericArray($rt_intcls(), new Int32Array(sz));
}
function $rt_createIntArrayFromData(data) {
    var buffer = new Int32Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_intcls(), buffer);
}
function $rt_createBooleanArray(sz) {
    return $rt_createNumericArray($rt_booleancls(), new Int8Array(sz));
}
function $rt_createBooleanArrayFromData(data) {
    var buffer = new Int8Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_booleancls(), buffer);
}
function $rt_createFloatArray(sz) {
    return $rt_createNumericArray($rt_floatcls(), new Float32Array(sz));
}
function $rt_createFloatArrayFromData(data) {
    var buffer = new Float32Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_floatcls(), buffer);
}
function $rt_createDoubleArray(sz) {
    return $rt_createNumericArray($rt_doublecls(), new Float64Array(sz));
}
function $rt_createDoubleArrayFromData(data) {
    var buffer = new Float64Array(data.length);
    buffer.set(data);
    return $rt_createNumericArray($rt_doublecls(), buffer);
}
function $rt_arraycls(cls) {
    var result = cls.$array;
    if (result === null) {
        var arraycls = {  };
        var name = "[" + cls.$meta.binaryName;
        arraycls.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        arraycls.classObject = null;
        arraycls.$array = null;
        result = arraycls;
        cls.$array = arraycls;
    }
    return result;
}
function $rt_createcls() {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
}
function $rt_createPrimitiveCls(name, binaryName) {
    var cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
}
var $rt_booleanclsCache = null;
function $rt_booleancls() {
    if ($rt_booleanclsCache === null) {
        $rt_booleanclsCache = $rt_createPrimitiveCls("boolean", "Z");
    }
    return $rt_booleanclsCache;
}
var $rt_charclsCache = null;
function $rt_charcls() {
    if ($rt_charclsCache === null) {
        $rt_charclsCache = $rt_createPrimitiveCls("char", "C");
    }
    return $rt_charclsCache;
}
var $rt_byteclsCache = null;
function $rt_bytecls() {
    if ($rt_byteclsCache === null) {
        $rt_byteclsCache = $rt_createPrimitiveCls("byte", "B");
    }
    return $rt_byteclsCache;
}
var $rt_shortclsCache = null;
function $rt_shortcls() {
    if ($rt_shortclsCache === null) {
        $rt_shortclsCache = $rt_createPrimitiveCls("short", "S");
    }
    return $rt_shortclsCache;
}
var $rt_intclsCache = null;
function $rt_intcls() {
    if ($rt_intclsCache === null) {
        $rt_intclsCache = $rt_createPrimitiveCls("int", "I");
    }
    return $rt_intclsCache;
}
var $rt_longclsCache = null;
function $rt_longcls() {
    if ($rt_longclsCache === null) {
        $rt_longclsCache = $rt_createPrimitiveCls("long", "J");
    }
    return $rt_longclsCache;
}
var $rt_floatclsCache = null;
function $rt_floatcls() {
    if ($rt_floatclsCache === null) {
        $rt_floatclsCache = $rt_createPrimitiveCls("float", "F");
    }
    return $rt_floatclsCache;
}
var $rt_doubleclsCache = null;
function $rt_doublecls() {
    if ($rt_doubleclsCache === null) {
        $rt_doubleclsCache = $rt_createPrimitiveCls("double", "D");
    }
    return $rt_doubleclsCache;
}
var $rt_voidclsCache = null;
function $rt_voidcls() {
    if ($rt_voidclsCache === null) {
        $rt_voidclsCache = $rt_createPrimitiveCls("void", "V");
    }
    return $rt_voidclsCache;
}
function $rt_throw(ex) {
    throw $rt_exception(ex);
}
function $rt_exception(ex) {
    var err = ex.$jsException;
    if (!err) {
        err = new Error("Java exception thrown");
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(err);
        }
        err.$javaException = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return err;
}
function $rt_fillStack(err, ex) {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        var stack = $rt_decodeStack(err.stack);
        var javaStack = $rt_createArray($rt_objcls(), stack.length);
        var elem;
        var noStack = false;
        for (var i = 0;i < stack.length;++i) {
            var element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
}
function $rt_createMultiArray(cls, dimensions) {
    var first = 0;
    for (var i = dimensions.length - 1;i >= 0;i = i - 1 | 0) {
        if (dimensions[i] === 0) {
            first = i;
            break;
        }
    }
    if (first > 0) {
        for (i = 0;i < first;i = i + 1 | 0) {
            cls = $rt_arraycls(cls);
        }
        if (first === dimensions.length - 1) {
            return $rt_createArray(cls, dimensions[first]);
        }
    }
    var arrays = new Array($rt_primitiveArrayCount(dimensions, first));
    var firstDim = dimensions[first] | 0;
    for (i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createArray(cls, firstDim);
    }
    return $rt_createMultiArrayImpl(cls, arrays, dimensions, first);
}
function $rt_createByteMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_bytecls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createByteArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_bytecls(), arrays, dimensions);
}
function $rt_createCharMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_charcls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createCharArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_charcls(), arrays, dimensions, 0);
}
function $rt_createBooleanMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_booleancls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createBooleanArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_booleancls(), arrays, dimensions, 0);
}
function $rt_createShortMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_shortcls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createShortArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_shortcls(), arrays, dimensions, 0);
}
function $rt_createIntMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_intcls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createIntArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_intcls(), arrays, dimensions, 0);
}
function $rt_createLongMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_longcls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createLongArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_longcls(), arrays, dimensions, 0);
}
function $rt_createFloatMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_floatcls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createFloatArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_floatcls(), arrays, dimensions, 0);
}
function $rt_createDoubleMultiArray(dimensions) {
    var arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_doublecls(), dimensions);
    }
    var firstDim = dimensions[0] | 0;
    for (var i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createDoubleArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_doublecls(), arrays, dimensions, 0);
}
function $rt_primitiveArrayCount(dimensions, start) {
    var val = dimensions[start + 1] | 0;
    for (var i = start + 2;i < dimensions.length;i = i + 1 | 0) {
        val = val * (dimensions[i] | 0) | 0;
        if (val === 0) {
            break;
        }
    }
    return val;
}
function $rt_createMultiArrayImpl(cls, arrays, dimensions, start) {
    var limit = arrays.length;
    for (var i = start + 1 | 0;i < dimensions.length;i = i + 1 | 0) {
        cls = $rt_arraycls(cls);
        var dim = dimensions[i];
        var index = 0;
        var packedIndex = 0;
        while (index < limit) {
            var arr = $rt_createUnfilledArray(cls, dim);
            for (var j = 0;j < dim;j = j + 1 | 0) {
                arr.data[j] = arrays[index];
                index = index + 1 | 0;
            }
            arrays[packedIndex] = arr;
            packedIndex = packedIndex + 1 | 0;
        }
        limit = packedIndex;
    }
    return arrays[0];
}
function $rt_assertNotNaN(value) {
    if (typeof value === 'number' && isNaN(value)) {
        throw "NaN";
    }
    return value;
}
var $rt_stdoutBuffer = "";
var $rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : function(ch) {
    if (ch === 0xA) {
        if (console) {
            console.info($rt_stdoutBuffer);
        }
        $rt_stdoutBuffer = "";
    } else {
        $rt_stdoutBuffer += String.fromCharCode(ch);
    }
};
var $rt_stderrBuffer = "";
var $rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : function(ch) {
    if (ch === 0xA) {
        if (console) {
            console.error($rt_stderrBuffer);
        }
        $rt_stderrBuffer = "";
    } else {
        $rt_stderrBuffer += String.fromCharCode(ch);
    }
};
var $rt_packageData = null;
function $rt_packages(data) {
    var i = 0;
    var packages = new Array(data.length);
    for (var j = 0;j < data.length;++j) {
        var prefixIndex = data[i++];
        var prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
}
function $rt_metadata(data) {
    var packages = $rt_packageData;
    var i = 0;
    while (i < data.length) {
        var cls = data[i++];
        cls.$meta = {  };
        var m = cls.$meta;
        var className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            var packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        var superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        var flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        var innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            var enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            var declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            var simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        var clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        var virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (var j = 0;j < virtualMethods.length;j += 2) {
                var name = virtualMethods[j];
                var func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (var k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
        cls.$array = null;
    }
}
function $rt_wrapFunction0(f) {
    return function() {
        return f(this);
    };
}
function $rt_wrapFunction1(f) {
    return function(p1) {
        return f(this, p1);
    };
}
function $rt_wrapFunction2(f) {
    return function(p1, p2) {
        return f(this, p1, p2);
    };
}
function $rt_wrapFunction3(f) {
    return function(p1, p2, p3) {
        return f(this, p1, p2, p3, p3);
    };
}
function $rt_wrapFunction4(f) {
    return function(p1, p2, p3, p4) {
        return f(this, p1, p2, p3, p4);
    };
}
function $rt_threadStarter(f) {
    return function() {
        var args = Array.prototype.slice.apply(arguments);
        $rt_startThread(function() {
            f.apply(this, args);
        });
    };
}
function $rt_mainStarter(f) {
    return function(args, callback) {
        if (!args) {
            args = [];
        }
        var javaArgs = $rt_createArray($rt_objcls(), args.length);
        for (var i = 0;i < args.length;++i) {
            javaArgs.data[i] = $rt_str(args[i]);
        }
        $rt_startThread(function() {
            f.call(null, javaArgs);
        }, callback);
    };
}
var $rt_stringPool_instance;
function $rt_stringPool(strings) {
    $rt_stringPool_instance = new Array(strings.length);
    for (var i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
}
function $rt_s(index) {
    return $rt_stringPool_instance[index];
}
function $rt_eraseClinit(target) {
    return target.$clinit = function() {
    };
}
var $rt_numberConversionView = new DataView(new ArrayBuffer(8));
function $rt_doubleToLongBits(n) {
    $rt_numberConversionView.setFloat64(0, n, true);
    return new Long($rt_numberConversionView.getInt32(0, true), $rt_numberConversionView.getInt32(4, true));
}
function $rt_longBitsToDouble(n) {
    $rt_numberConversionView.setInt32(0, n.lo, true);
    $rt_numberConversionView.setInt32(4, n.hi, true);
    return $rt_numberConversionView.getFloat64(0, true);
}
function $rt_floatToIntBits(n) {
    $rt_numberConversionView.setFloat32(0, n);
    return $rt_numberConversionView.getInt32(0);
}
function $rt_intBitsToFloat(n) {
    $rt_numberConversionView.setInt32(0, n);
    return $rt_numberConversionView.getFloat32(0);
}
function $rt_javaException(e) {
    return e instanceof Error && typeof e.$javaException === 'object' ? e.$javaException : null;
}
function $rt_jsException(e) {
    return typeof e.$jsException === 'object' ? e.$jsException : null;
}
function $rt_wrapException(err) {
    var ex = err.$javaException;
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err.$javaException = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
}
function $dbg_class(obj) {
    var cls = obj.constructor;
    var arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    var clsName = "";
    if (cls === $rt_booleancls()) {
        clsName = "boolean";
    } else if (cls === $rt_bytecls()) {
        clsName = "byte";
    } else if (cls === $rt_shortcls()) {
        clsName = "short";
    } else if (cls === $rt_charcls()) {
        clsName = "char";
    } else if (cls === $rt_intcls()) {
        clsName = "int";
    } else if (cls === $rt_longcls()) {
        clsName = "long";
    } else if (cls === $rt_floatcls()) {
        clsName = "float";
    } else if (cls === $rt_doublecls()) {
        clsName = "double";
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
}
function Long(lo, hi) {
    this.lo = lo | 0;
    this.hi = hi | 0;
}
Long.prototype.__teavm_class__ = function() {
    return "long";
};
Long.prototype.toString = function() {
    var result = [];
    var n = this;
    var positive = Long_isPositive(n);
    if (!positive) {
        n = Long_neg(n);
    }
    var radix = new Long(10, 0);
    do  {
        var divRem = Long_divRem(n, radix);
        result.push(String.fromCharCode(48 + divRem[1].lo));
        n = divRem[0];
    }while (n.lo !== 0 || n.hi !== 0);
    result = (result.reverse()).join('');
    return positive ? result : "-" + result;
};
Long.prototype.valueOf = function() {
    return Long_toNumber(this);
};
var Long_ZERO = new Long(0, 0);
var Long_MAX_NORMAL = 1 << 18;
function Long_fromInt(val) {
    return new Long(val,  -(val < 0) | 0);
}
function Long_fromNumber(val) {
    if (val >= 0) {
        return new Long(val | 0, val / 0x100000000 | 0);
    } else {
        return Long_neg(new Long( -val | 0,  -val / 0x100000000 | 0));
    }
}
function Long_toNumber(val) {
    return 0x100000000 * val.hi + (val.lo >>> 0);
}
var $rt_imul = Math.imul || function(a, b) {
    var ah = a >>> 16 & 0xFFFF;
    var al = a & 0xFFFF;
    var bh = b >>> 16 & 0xFFFF;
    var bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
};
var $rt_udiv = function(a, b) {
    return (a >>> 0) / (b >>> 0) >>> 0;
};
var $rt_umod = function(a, b) {
    return (a >>> 0) % (b >>> 0) >>> 0;
};
function $rt_checkBounds(index, array) {
    if (index < 0 || index >= array.length) {
        $rt_throwAIOOBE();
    }
    return index;
}
function $rt_checkUpperBound(index, array) {
    if (index >= array.length) {
        $rt_throwAIOOBE();
    }
    return index;
}
function $rt_checkLowerBound(index) {
    if (index < 0) {
        $rt_throwAIOOBE();
    }
    return index;
}
function $rt_classWithoutFields(superclass) {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
}
function $rt_setCloneMethod(target, f) {
    target.$clone = f;
}
function $rt_cls(cls) {
    return jl_Class_getClass(cls);
}
function $rt_str(str) {
    if (str === null) {
        return null;
    }
    var characters = $rt_createCharArray(str.length);
    var charsBuffer = characters.data;
    for (var i = 0; i < str.length; i = (i + 1) | 0) {
        charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;
    }
    return jl_String__init_(characters);
}
function $rt_ustr(str) {
    if (str === null) {
        return null;
    }
    var data = str.$characters.data;
    var result = "";
    for (var i = 0; i < data.length; i = (i + 1) | 0) {
        result += String.fromCharCode(data[i]);
    }
    return result;
}
function $rt_objcls() { return jl_Object; }
function $rt_nullCheck(val) {
    if (val === null) {
        $rt_throw(jl_NullPointerException__init_());
    }
    return val;
}
function $rt_intern(str) {
    return str;
}
function $rt_getThread() {
    return null;
}
function $rt_setThread(t) {
}
function $rt_createException(message) {
    return jl_RuntimeException__init_(message);
}
function $rt_createStackElement(className, methodName, fileName, lineNumber) {
    return null;
}
function $rt_setStack(e, stack) {
}
function $rt_throwAIOOBE() {
}
var $java = Object.create(null);
function jl_Object() {
    this.$id$ = 0;
}
function jl_Object_getClass($this) {
    return jl_Class_getClass($this.constructor);
}
function jl_Object_toString($this) {
    var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$1);
    var$2 = jl_Object_getClass($this);
    if (var$2.$name === null)
        var$2.$name = $rt_str(var$2.$platformClass.$meta.name);
    var$1 = jl_StringBuilder_append(jl_StringBuilder_append(var$1, var$2.$name), $rt_s(0));
    var$3 = jl_Object_identity($this);
    if (!var$3)
        var$2 = $rt_s(1);
    else {
        var$4 = (((32 - jl_Integer_numberOfLeadingZeros(var$3) | 0) + 4 | 0) - 1 | 0) / 4 | 0;
        var$5 = $rt_createCharArray(var$4);
        var$6 = var$5.data;
        var$4 = (var$4 - 1 | 0) * 4 | 0;
        var$7 = 0;
        while (var$4 >= 0) {
            var$8 = var$7 + 1 | 0;
            var$6[var$7] = jl_Character_forDigit(var$3 >>> var$4 & 15, 16);
            var$4 = var$4 - 4 | 0;
            var$7 = var$8;
        }
        var$2 = jl_String__init_(var$5);
    }
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append(var$1, var$2));
}
function jl_Object_identity($this) {
    var $platformThis, var$2;
    $platformThis = $this;
    if (!$platformThis.$id$) {
        var$2 = $rt_nextId();
        $platformThis.$id$ = var$2;
    }
    return $this.$id$;
}
function jl_Object_clone($this) {
    var $result, var$2, var$3;
    if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
        $result = new jl_CloneNotSupportedException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $result = otp_Platform_clone($this);
    var$2 = $result;
    var$3 = $rt_nextId();
    var$2.$id$ = var$3;
    return $result;
}
var gpb_Client = $rt_classWithoutFields();
function gpb_Client_main($args) {
    var $game, $document, $presentationPhase, $gameLoader, $body, var$7, var$8;
    jl_String__clinit_();
    jl_Integer__clinit_();
    jl_Character__clinit_();
    gpb_DownloadObserver$Item__clinit_();
    jl_Long__clinit_();
    jl_Double__clinit_();
    otcic_StderrOutputStream__clinit_();
    jnc_CodingErrorAction__clinit_();
    jnc_CoderResult__clinit_();
    jn_ByteOrder__clinit_();
    ja_Color__clinit_();
    otcic_StdoutOutputStream__clinit_();
    jur_AbstractSet__clinit_();
    jur_FSet__clinit_();
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
    jur_AbstractCharClass__clinit_();
    jl_AbstractStringBuilder$Constants__clinit_();
    otcit_DoubleAnalyzer__clinit_();
    (otjdh_HTMLDocument_current()).body.setAttribute("style", "margin: 0px; overflow: hidden");
    $game = new g_Game;
    $game.$objectTemplates = ju_ArrayList__init_();
    $game.$objects = ju_ArrayList__init_();
    $game.$playerPosition = gm_Vector__init_(7.0, 18.0);
    $game.$playerVelocity = gm_Vector__init_(0.0, 0.0);
    $document = new g_TileSet;
    $document.$tileList = ju_ArrayList__init_();
    $game.$tileSet = $document;
    $game.$tileMaps = ju_ArrayList__init_();
    $presentationPhase = new gpb_PresentationPhase;
    $presentationPhase.$game = $game;
    $gameLoader = new gpb_GameLoader;
    $gameLoader.$tileMapsLoaded = 0;
    $gameLoader.$tileSetsLoaded = 0;
    $gameLoader.$tileImages = null;
    $gameLoader.$game0 = $game;
    $gameLoader.$observer = $presentationPhase;
    $document = new gpb_TileSetLoader;
    $document.$tileSet0 = $game.$tileSet;
    $document.$observer0 = $gameLoader;
    $presentationPhase = new XMLHttpRequest();
    $document.$request = $presentationPhase;
    $presentationPhase.overrideMimeType("text/xml");
    $body = $document.$request;
    $presentationPhase = otji_JS_function($document, "stateChanged");
    $body.onreadystatechange = $presentationPhase;
    $document.$request.open("GET", "WEB-INF/classes/tiles.tsx", !!1);
    $document.$request.send();
    $game = ju_AbstractList_iterator(g_Game_getMapFileNames($gameLoader.$game0));
    while (ju_AbstractList$1_hasNext($game)) {
        $body = ju_AbstractList$1_next($game);
        $document = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($document);
        var$7 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append($document, $rt_s(2)), $body));
        $document = new g_TileMap;
        $document.$layers = ju_ArrayList__init_();
        $body = new gpb_TileMapLoader;
        $body.$tileMap = $document;
        $body.$observer1 = $gameLoader;
        var$8 = new XMLHttpRequest();
        $body.$request0 = var$8;
        var$8.overrideMimeType("text/xml");
        $presentationPhase = $body.$request0;
        var$8 = otji_JS_function($body, "stateChanged");
        $presentationPhase.onreadystatechange = var$8;
        $body.$request0.open("GET", $rt_ustr(var$7), !!1);
        $body.$request0.send();
        ju_ArrayList_add($gameLoader.$game0.$tileMaps, $document);
    }
}
var jlr_AnnotatedElement = $rt_classWithoutFields(0);
var jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    var a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
function jl_Class_getClass($cls) {
    var $result, var$3;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null) {
        $result = new jl_Class;
        $result.$platformClass = $cls;
        var$3 = $result;
        $cls.classObject = var$3;
    }
    return $result;
}
function jl_Class_isPrimitive($this) {
    return $this.$platformClass.$meta.primitive ? 1 : 0;
}
function jl_Class_getComponentType($this) {
    return jl_Class_getClass($this.$platformClass.$meta.item);
}
var otji_JS = $rt_classWithoutFields();
function otji_JS_function(var$1, var$2) {
    var name = 'jso$functor$' + var$2;
    if (!var$1[name]) {
        var fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        var$1[name] = function() {
            return fn;
        };
    }
    return var$1[name]();
}
function otji_JS_functionAsObject(var$1, var$2) {
    if (typeof var$1 !== "function") return var$1;
    var result = {};
    result[var$2] = var$1;
    return result;
}
var otp_Platform = $rt_classWithoutFields();
function otp_Platform_clone(var$1) {
    var copy = new var$1.constructor();
    for (var field in var$1) {
        if (!var$1.hasOwnProperty(field)) {
            continue;
        }
        copy[field] = var$1[field];
    }
    return copy;
}
function otp_Platform_isAssignable($from, $to) {
    var $supertypes, $i;
    if ($from === $to)
        return 1;
    $supertypes = $from.$meta.supertypes;
    $i = 0;
    while ($i < $supertypes.length) {
        if (otp_Platform_isAssignable($supertypes[$i], $to))
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
}
function otp_Platform_stringFromCharCode($charCode) {
    return String.fromCharCode($charCode);
}
var ji_Serializable = $rt_classWithoutFields(0);
var jl_Comparable = $rt_classWithoutFields(0);
var jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    var a = this; jl_Object.call(a);
    a.$characters = null;
    a.$hashCode = 0;
}
var jl_String_CASE_INSENSITIVE_ORDER = null;
function jl_String__init_(var_0) {
    var var_1 = new jl_String();
    jl_String__init_0(var_1, var_0);
    return var_1;
}
function jl_String__init_1(var_0, var_1, var_2) {
    var var_3 = new jl_String();
    jl_String__init_2(var_3, var_0, var_1, var_2);
    return var_3;
}
function jl_String__init_0($this, $characters) {
    var var$2, var$3, var$4, $i;
    $characters = $characters.data;
    var$2 = $characters.length;
    var$3 = $rt_createCharArray(var$2);
    var$4 = var$3.data;
    $this.$characters = var$3;
    $i = 0;
    while ($i < var$2) {
        var$4[$i] = $characters[$i];
        $i = $i + 1 | 0;
    }
}
function jl_String__init_2($this, $value, $offset, $count) {
    var var$4, var$5, $i;
    var$4 = $rt_createCharArray($count);
    var$5 = var$4.data;
    $this.$characters = var$4;
    $i = 0;
    while ($i < $count) {
        var$5[$i] = $value.data[$i + $offset | 0];
        $i = $i + 1 | 0;
    }
}
function jl_String_charAt($this, $index) {
    var var$2, var$3;
    if ($index >= 0) {
        var$2 = $this.$characters.data;
        if ($index < var$2.length)
            return var$2[$index];
    }
    var$3 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$3);
    $rt_throw(var$3);
}
function jl_String_length($this) {
    return $this.$characters.data.length;
}
function jl_String_isEmpty($this) {
    return $this.$characters.data.length ? 0 : 1;
}
function jl_String_startsWith($this, $prefix, $toffset) {
    var $i, var$4, var$5;
    if (($toffset + jl_String_length($prefix) | 0) > jl_String_length($this))
        return 0;
    $i = 0;
    while ($i < jl_String_length($prefix)) {
        var$4 = jl_String_charAt($prefix, $i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != jl_String_charAt($this, $toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
}
function jl_String_startsWith0($this, $prefix) {
    if ($this === $prefix)
        return 1;
    return jl_String_startsWith($this, $prefix, 0);
}
function jl_String_indexOf($this, $ch, $fromIndex) {
    var $i, $bmpChar, var$5, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            var$5 = $this.$characters.data;
            if ($i >= var$5.length)
                return (-1);
            if (var$5[$i] == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        var$5 = $this.$characters.data;
        if ($i >= (var$5.length - 1 | 0))
            return (-1);
        if (var$5[$i] == $hi && var$5[$i + 1 | 0] == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
}
function jl_String_lastIndexOf($this, $ch, $fromIndex) {
    var $i, $bmpChar, $hi, $lo, var$7;
    $i = jl_Math_min($fromIndex, jl_String_length($this) - 1 | 0);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i < 0)
                return (-1);
            if ($this.$characters.data[$i] == $bmpChar)
                break;
            $i = $i + (-1) | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i < 1)
            return (-1);
        var$7 = $this.$characters.data;
        if (var$7[$i] == $lo) {
            $ch = $i - 1 | 0;
            if (var$7[$ch] == $hi)
                break;
        }
        $i = $i + (-1) | 0;
    }
    return $ch;
}
function jl_String_indexOf0($this, $str, $fromIndex) {
    var $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = jl_String_length($this) - jl_String_length($str) | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= jl_String_length($str))
                break a;
            if (jl_String_charAt($this, $i + $j | 0) != jl_String_charAt($str, $j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
}
function jl_String_substring($this, $beginIndex, $endIndex) {
    var var$3;
    if ($beginIndex <= $endIndex)
        return jl_String__init_1($this.$characters, $beginIndex, $endIndex - $beginIndex | 0);
    var$3 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$3);
    $rt_throw(var$3);
}
function jl_String_substring0($this, $beginIndex) {
    return jl_String_substring($this, $beginIndex, jl_String_length($this));
}
function jl_String_subSequence($this, $beginIndex, $endIndex) {
    return jl_String_substring($this, $beginIndex, $endIndex);
}
function jl_String_toString($this) {
    return $this;
}
function jl_String_toCharArray($this) {
    var var$1, $array, var$3, $i, var$5;
    var$1 = $this.$characters.data;
    $array = $rt_createCharArray(var$1.length);
    var$3 = $array.data;
    $i = 0;
    var$5 = var$3.length;
    while ($i < var$5) {
        var$3[$i] = var$1[$i];
        $i = $i + 1 | 0;
    }
    return $array;
}
function jl_String_valueOf($i) {
    var var$2;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(var$2, $i));
}
function jl_String_equals($this, $other) {
    var $str, $i;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    if (jl_String_length($str) != jl_String_length($this))
        return 0;
    $i = 0;
    while ($i < jl_String_length($str)) {
        if (jl_String_charAt($this, $i) != jl_String_charAt($str, $i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
}
function jl_String_hashCode($this) {
    var var$1, var$2, var$3, $c;
    a: {
        if (!$this.$hashCode) {
            var$1 = $this.$characters.data;
            var$2 = var$1.length;
            var$3 = 0;
            while (true) {
                if (var$3 >= var$2)
                    break a;
                $c = var$1[var$3];
                $this.$hashCode = (31 * $this.$hashCode | 0) + $c | 0;
                var$3 = var$3 + 1 | 0;
            }
        }
    }
    return $this.$hashCode;
}
function jl_String_split($this, $regex) {
    var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14;
    if ($regex === null) {
        $regex = new jl_NullPointerException;
        jl_Throwable__init_($regex, $rt_s(3));
        $rt_throw($regex);
    }
    jur_AbstractSet_counter = 1;
    var$2 = new jur_Pattern;
    var$2.$backRefs = $rt_createArray(jur_FSet, 10);
    var$2.$globalGroupIndex = (-1);
    var$2.$compCount = (-1);
    var$2.$consCount = (-1);
    var$3 = new jur_Lexer;
    var$3.$mode = 1;
    var$3.$orig = $regex;
    var$3.$pattern = $rt_createCharArray(jl_String_length($regex) + 2 | 0);
    jl_System_arraycopy(jl_String_toCharArray($regex), 0, var$3.$pattern, 0, jl_String_length($regex));
    var$4 = var$3.$pattern.data;
    var$5 = var$4.length;
    var$4[var$5 - 1 | 0] = 0;
    var$4[var$5 - 2 | 0] = 0;
    var$3.$patternFullLength = var$5;
    var$3.$flags = 0;
    jur_Lexer_movePointer(var$3);
    jur_Lexer_movePointer(var$3);
    var$2.$lexemes = var$3;
    var$2.$flags0 = 0;
    var$2.$start = jur_Pattern_processExpression(var$2, (-1), 0, null);
    if (!jur_Lexer_isEmpty(var$2.$lexemes)) {
        $regex = new jur_PatternSyntaxException;
        var$2 = var$2.$lexemes;
        jur_PatternSyntaxException__init_($regex, $rt_s(4), var$2.$orig, var$2.$curToc);
        $rt_throw($regex);
    }
    if (var$2.$needsBackRefReplacement)
        var$2.$start.$processSecondPass();
    var$6 = $this;
    $regex = ju_ArrayList__init_();
    var$3 = new jur_Matcher;
    var$3.$leftBound = (-1);
    var$3.$rightBound = (-1);
    var$3.$pat = var$2;
    var$3.$start0 = var$2.$start;
    var$3.$string = var$6;
    var$3.$leftBound = 0;
    var$5 = jl_String_length(var$6);
    var$3.$rightBound = var$5;
    var$7 = new jur_MatchResultImpl;
    var$8 = var$3.$leftBound;
    var$9 = var$2.$globalGroupIndex;
    var$10 = var$2.$compCount + 1 | 0;
    var$11 = var$2.$consCount + 1 | 0;
    var$7.$previousMatch = (-1);
    var$12 = var$9 + 1 | 0;
    var$7.$groupCount = var$12;
    var$7.$groupBounds = $rt_createIntArray(var$12 * 2 | 0);
    var$4 = $rt_createIntArray(var$11);
    var$7.$consumers = var$4;
    ju_Arrays_fill(var$4, (-1));
    if (var$10 > 0)
        var$7.$compQuantCounters = $rt_createIntArray(var$10);
    ju_Arrays_fill(var$7.$groupBounds, (-1));
    jur_MatchResultImpl_reset(var$7, var$6, var$8, var$5);
    var$3.$matchResult = var$7;
    var$13 = 0;
    var$12 = 0;
    if (!jl_String_length(var$6)) {
        var$4 = $rt_createArray(jl_String, 1);
        var$4.data[0] = $rt_s(4);
    } else {
        while (true) {
            var$8 = jl_String_length(var$3.$string);
            var$2 = var$3.$matchResult;
            if (!var$2.$transparentBounds)
                var$8 = var$3.$rightBound;
            if (var$2.$startIndex >= 0 && jur_MatchResultImpl_mode(var$2) == 1) {
                var$2 = var$3.$matchResult;
                var$2.$startIndex = jur_MatchResultImpl_end(var$2);
                if (jur_MatchResultImpl_end(var$3.$matchResult) == jur_MatchResultImpl_start(var$3.$matchResult)) {
                    var$2 = var$3.$matchResult;
                    var$2.$startIndex = var$2.$startIndex + 1 | 0;
                }
                var$5 = var$3.$matchResult.$startIndex;
                var$5 = var$5 <= var$8 && jur_Matcher_find(var$3, var$5) ? 1 : 0;
            } else
                var$5 = jur_Matcher_find(var$3, var$3.$leftBound);
            if (!var$5)
                break;
            var$13 = var$13 + 1 | 0;
            ju_ArrayList_add($regex, jl_String_toString(jl_String_subSequence(var$6, var$12, jur_Matcher_start(var$3))));
            var$12 = jur_Matcher_end(var$3);
        }
        ju_ArrayList_add($regex, jl_String_toString(jl_String_subSequence(var$6, var$12, jl_String_length(var$6))));
        var$14 = var$13 + 1 | 0;
        a: {
            while (true) {
                var$14 = var$14 + (-1) | 0;
                if (var$14 < 0)
                    break;
                if (jl_String_length(jl_String_toString(ju_ArrayList_get($regex, var$14))))
                    break a;
                ju_ArrayList_remove($regex, var$14);
            }
        }
        if (var$14 < 0)
            var$14 = 0;
        var$4 = ju_AbstractCollection_toArray($regex, $rt_createArray(jl_String, var$14));
    }
    return var$4;
}
function jl_String__clinit_() {
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_81_0;
}
function jl_Throwable() {
    var a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
function jl_Throwable__init_0(var_0) {
    var var_1 = new jl_Throwable();
    jl_Throwable__init_(var_1, var_0);
    return var_1;
}
function jl_Throwable__init_1(var_0) {
    var var_1 = new jl_Throwable();
    jl_Throwable__init_2(var_1, var_0);
    return var_1;
}
function jl_Throwable__init_($this, $message) {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
}
function jl_Throwable__init_2($this, $cause) {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$cause = $cause;
}
function jl_Throwable_fillInStackTrace($this) {
    return $this;
}
var jl_Error = $rt_classWithoutFields(jl_Throwable);
var jl_LinkageError = $rt_classWithoutFields(jl_Error);
var jl_NoClassDefFoundError = $rt_classWithoutFields(jl_LinkageError);
function jl_AbstractStringBuilder() {
    var a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
function jl_AbstractStringBuilder__init_0() {
    var var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
}
function jl_AbstractStringBuilder__init_1(var_0) {
    var var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_2(var_1, var_0);
    return var_1;
}
function jl_AbstractStringBuilder__init_($this) {
    jl_AbstractStringBuilder__init_2($this, 16);
}
function jl_AbstractStringBuilder__init_2($this, $capacity) {
    $this.$buffer = $rt_createCharArray($capacity);
}
function jl_AbstractStringBuilder_append($this, $value, $radix) {
    return jl_AbstractStringBuilder_insert($this, $this.$length0, $value, $radix);
}
function jl_AbstractStringBuilder_insert($this, $target, $value, $radix) {
    var $positive, var$5, var$6, $pos, $sz, $posLimit, var$10;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value;
    }
    a: {
        if ($value < $radix) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = 2147483647 / $radix | 0;
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if (var$10 > $value) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if (var$10 > $posLimit)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                $positive = $target;
            else {
                var$5 = $this.$buffer.data;
                $positive = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (var$10 <= 0)
                    break a;
                var$5 = $this.$buffer.data;
                $target = $positive + 1 | 0;
                var$5[$positive] = jl_Character_forDigit($value / var$10 | 0, $radix);
                $value = $value % var$10 | 0;
                var$10 = var$10 / $radix | 0;
                $positive = $target;
            }
        }
    }
    return $this;
}
function jl_AbstractStringBuilder_insert0($this, $target, $value) {
    var $intDigit, var$4, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $pos, $i;
    $intDigit = $rt_compare($value, 0.0);
    if (!$intDigit) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 48;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 46;
        var$4[$target] = 48;
        return $this;
    }
    if (!$intDigit) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 45;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 48;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 46;
        var$4[$intDigit] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 78;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 97;
        var$4[$target] = 78;
        return $this;
    }
    if (!isFinite($value) ? 1 : 0) {
        if ($intDigit > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            $intDigit = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            $intDigit = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 73;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 110;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 102;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 110;
        $intDigit = $target + 1 | 0;
        var$4[$target] = 105;
        $target = $intDigit + 1 | 0;
        var$4[$intDigit] = 116;
        var$4[$target] = 121;
        return $this;
    }
    $number = jl_AbstractStringBuilder$Constants_doubleAnalysisResult;
    otcit_DoubleAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent;
    $negative = $number.$sign;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 18;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $mantissa = Long_div($mantissa, jl_AbstractStringBuilder$Constants_longPowersOfTen.data[ -$exp]);
            $digits = $digits - $exp | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if (!($exp > (-100) && $exp < 100))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + ($sz + $digits | 0) | 0);
    if (!$negative)
        $sz = $target;
    else {
        var$4 = $this.$buffer.data;
        $sz = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = new Long(1569325056, 23283064);
    $i = 0;
    while ($i < $digits) {
        if (Long_le($pos, Long_ZERO))
            $intDigit = 0;
        else {
            $intDigit = Long_div($mantissa, $pos).lo;
            $mantissa = Long_rem($mantissa, $pos);
        }
        var$4 = $this.$buffer.data;
        $target = $sz + 1 | 0;
        var$4[$sz] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            $sz = $target;
        else {
            $sz = $target + 1 | 0;
            var$4[$target] = 46;
        }
        $pos = Long_div($pos, Long_fromInt(10));
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        $intDigit = $sz + 1 | 0;
        var$4[$sz] = 69;
        if ($exp >= 0)
            $intPart = $intDigit;
        else {
            $exp =  -$exp;
            $intPart = $intDigit + 1 | 0;
            var$4[$intDigit] = 45;
        }
        if ($exp >= 100) {
            $target = $intPart + 1 | 0;
            var$4[$intPart] = (48 + ($exp / 100 | 0) | 0) & 65535;
            $exp = $exp % 100 | 0;
            $digits = $target + 1 | 0;
            var$4[$target] = (48 + ($exp / 10 | 0) | 0) & 65535;
        } else if ($exp < 10)
            $digits = $intPart;
        else {
            $digits = $intPart + 1 | 0;
            var$4[$intPart] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        var$4[$digits] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
}
function jl_AbstractStringBuilder_trailingDecimalZeros($n) {
    var $zeros, $result, $bit, var$5, $i;
    $zeros = Long_fromInt(1);
    $result = 0;
    $bit = 16;
    var$5 = jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data;
    $i = var$5.length - 1 | 0;
    while ($i >= 0) {
        if (Long_eq(Long_rem($n, Long_mul($zeros, var$5[$i])), Long_ZERO)) {
            $result = $result | $bit;
            $zeros = Long_mul($zeros, var$5[$i]);
        }
        $bit = $bit >>> 1;
        $i = $i + (-1) | 0;
    }
    return $result;
}
function jl_AbstractStringBuilder_append0($this, $c) {
    return $this.$insert0($this.$length0, $c);
}
function jl_AbstractStringBuilder_insert1($this, $index, $c) {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
}
function jl_AbstractStringBuilder_ensureCapacity($this, $capacity) {
    var var$2, $newLength, var$4, var$5, var$6;
    var$2 = $this.$buffer.data.length;
    if (var$2 >= $capacity)
        return;
    $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max(var$2 * 2 | 0, 5));
    var$4 = $this.$buffer.data;
    var$5 = $rt_createCharArray($newLength);
    var$6 = var$5.data;
    $capacity = jl_Math_min($newLength, var$4.length);
    var$2 = 0;
    while (var$2 < $capacity) {
        var$6[var$2] = var$4[var$2];
        var$2 = var$2 + 1 | 0;
    }
    $this.$buffer = var$5;
}
function jl_AbstractStringBuilder_toString($this) {
    return jl_String__init_1($this.$buffer, 0, $this.$length0);
}
function jl_AbstractStringBuilder_append1($this, $chars, $offset, $len) {
    return $this.$insert1($this.$length0, $chars, $offset, $len);
}
function jl_AbstractStringBuilder_insert2($this, $index, $chars, $offset, $len) {
    var var$5, var$6, var$7, var$8;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        $len = $index + 1 | 0;
        var$8 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = $len;
        $offset = var$8;
    }
    return $this;
}
function jl_AbstractStringBuilder_append2($this, $chars) {
    return $this.$append1($chars, 0, $chars.data.length);
}
function jl_AbstractStringBuilder_insertSpace($this, $start, $end) {
    var var$3, $sz, $i, var$6;
    var$3 = $this.$length0;
    $sz = var$3 - $start | 0;
    $this.$ensureCapacity((var$3 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
}
var jl_Appendable = $rt_classWithoutFields(0);
var jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder);
function jl_StringBuilder__init_() {
    var var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
}
function jl_StringBuilder__init_0($this) {
    jl_AbstractStringBuilder__init_($this);
}
function jl_StringBuilder_append($this, $string) {
    var var$2, var$3, var$4, var$5;
    var$2 = $this.$length0;
    if (var$2 >= 0 && var$2 <= var$2) {
        a: {
            if ($string === null)
                $string = $rt_s(5);
            else if (jl_String_isEmpty($string))
                break a;
            jl_AbstractStringBuilder_ensureCapacity($this, $this.$length0 + jl_String_length($string) | 0);
            var$3 = $this.$length0 - 1 | 0;
            while (var$3 >= var$2) {
                $this.$buffer.data[var$3 + jl_String_length($string) | 0] = $this.$buffer.data[var$3];
                var$3 = var$3 + (-1) | 0;
            }
            $this.$length0 = $this.$length0 + jl_String_length($string) | 0;
            var$3 = 0;
            while (var$3 < jl_String_length($string)) {
                var$4 = $this.$buffer.data;
                var$5 = var$2 + 1 | 0;
                var$4[var$2] = jl_String_charAt($string, var$3);
                var$3 = var$3 + 1 | 0;
                var$2 = var$5;
            }
        }
        return $this;
    }
    $string = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_($string);
    $rt_throw($string);
}
function jl_StringBuilder_append0($this, $value) {
    jl_AbstractStringBuilder_append($this, $value, 10);
    return $this;
}
function jl_StringBuilder_append1($this, $value) {
    jl_AbstractStringBuilder_insert0($this, $this.$length0, $value);
    return $this;
}
function jl_StringBuilder_delete($this, $start, $end) {
    var var$3, var$4, var$5, var$6, var$7, var$8;
    var$3 = $rt_compare($start, $end);
    if (var$3 <= 0) {
        var$4 = $this.$length0;
        if ($start <= var$4) {
            if (var$3) {
                var$5 = var$4 - $end | 0;
                $this.$length0 = var$4 - ($end - $start | 0) | 0;
                var$6 = 0;
                while (var$6 < var$5) {
                    var$7 = $this.$buffer.data;
                    var$4 = $start + 1 | 0;
                    var$3 = $end + 1 | 0;
                    var$7[$start] = var$7[$end];
                    var$6 = var$6 + 1 | 0;
                    $start = var$4;
                    $end = var$3;
                }
            }
            return $this;
        }
    }
    var$8 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$8);
    $rt_throw(var$8);
}
function jl_StringBuilder_deleteCharAt($this, $index) {
    var var$2, var$3, var$4, var$5;
    if ($index >= 0) {
        var$2 = $this.$length0;
        if ($index < var$2) {
            var$2 = var$2 - 1 | 0;
            $this.$length0 = var$2;
            while ($index < var$2) {
                var$3 = $this.$buffer.data;
                var$4 = $index + 1 | 0;
                var$3[$index] = var$3[var$4];
                $index = var$4;
            }
            return $this;
        }
    }
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_Exception__init_(var$5);
    $rt_throw(var$5);
}
function jl_StringBuilder_setLength($this, var$1) {
    $this.$length0 = var$1;
}
function jl_StringBuilder_insert($this, var$1, var$2, var$3, var$4) {
    jl_AbstractStringBuilder_insert2($this, var$1, var$2, var$3, var$4);
    return $this;
}
function jl_StringBuilder_append2($this, var$1, var$2, var$3) {
    jl_AbstractStringBuilder_append1($this, var$1, var$2, var$3);
    return $this;
}
function jl_StringBuilder_length($this) {
    return $this.$length0;
}
function jl_StringBuilder_toString($this) {
    return jl_AbstractStringBuilder_toString($this);
}
function jl_StringBuilder_ensureCapacity($this, var$1) {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
}
function jl_StringBuilder_insert0($this, var$1, var$2) {
    jl_AbstractStringBuilder_insert1($this, var$1, var$2);
    return $this;
}
var jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value = 0;
}
var jl_Integer_TYPE = null;
var jl_Integer_integerCache = null;
function jl_Integer__init_(var_0) {
    var var_1 = new jl_Integer();
    jl_Integer__init_0(var_1, var_0);
    return var_1;
}
function jl_Integer__init_0($this, $value) {
    $this.$value = $value;
}
function jl_Integer_parseInt($s, $radix) {
    var $negative, $index, $value, var$6, $digit, var$8, var$9;
    if ($radix >= 2 && $radix <= 36) {
        if ($s !== null && !jl_String_isEmpty($s)) {
            a: {
                $negative = 0;
                $index = 0;
                switch (jl_String_charAt($s, 0)) {
                    case 43:
                        $index = 1;
                        break a;
                    case 45:
                        $negative = 1;
                        $index = 1;
                        break a;
                    default:
                }
            }
            $value = 0;
            if ($index == jl_String_length($s)) {
                $s = new jl_NumberFormatException;
                jl_Exception__init_($s);
                $rt_throw($s);
            }
            while ($index < jl_String_length($s)) {
                var$6 = $index + 1 | 0;
                $digit = jl_Character_getNumericValue(jl_String_charAt($s, $index));
                if ($digit < 0) {
                    var$8 = new jl_NumberFormatException;
                    var$9 = new jl_StringBuilder;
                    jl_AbstractStringBuilder__init_(var$9);
                    jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(6)), $s)));
                    $rt_throw(var$8);
                }
                if ($digit >= $radix) {
                    var$8 = new jl_NumberFormatException;
                    var$9 = new jl_StringBuilder;
                    jl_AbstractStringBuilder__init_(var$9);
                    jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$9, $rt_s(7)), $radix), $rt_s(8)), $s)));
                    $rt_throw(var$8);
                }
                $value = $rt_imul($radix, $value) + $digit | 0;
                if ($value < 0) {
                    if (var$6 == jl_String_length($s) && $value == (-2147483648) && $negative)
                        return (-2147483648);
                    var$8 = new jl_NumberFormatException;
                    var$9 = new jl_StringBuilder;
                    jl_AbstractStringBuilder__init_(var$9);
                    jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$9, $rt_s(9)), $s)));
                    $rt_throw(var$8);
                }
                $index = var$6;
            }
            if ($negative)
                $value =  -$value;
            return $value;
        }
        $s = new jl_NumberFormatException;
        jl_Throwable__init_($s, $rt_s(10));
        $rt_throw($s);
    }
    var$8 = new jl_NumberFormatException;
    $s = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($s);
    jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append($s, $rt_s(11)), $radix)));
    $rt_throw(var$8);
}
function jl_Integer_parseInt0($s) {
    return jl_Integer_parseInt($s, 10);
}
function jl_Integer_valueOf($i) {
    var var$2, var$3;
    if ($i >= (-128) && $i <= 127) {
        a: {
            if (jl_Integer_integerCache === null) {
                jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                var$2 = 0;
                while (true) {
                    var$3 = jl_Integer_integerCache.data;
                    if (var$2 >= var$3.length)
                        break a;
                    var$3[var$2] = jl_Integer__init_(var$2 - 128 | 0);
                    var$2 = var$2 + 1 | 0;
                }
            }
        }
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_($i);
}
function jl_Integer_toString($this) {
    var var$1;
    var$1 = $this.$value;
    return (jl_AbstractStringBuilder_append(jl_AbstractStringBuilder__init_1(20), var$1, 10)).$toString();
}
function jl_Integer_numberOfLeadingZeros($i) {
    var $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 >>> 8;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i >>> 4;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 >>> 2;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i >>> 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
}
function jl_Integer_numberOfTrailingZeros($i) {
    var $n, var$3;
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 << 8;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i << 4;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 << 2;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
}
function jl_Integer_compareTo($this, var$1) {
    var$1 = var$1;
    return $rt_compare($this.$value, var$1.$value);
}
function jl_Integer__clinit_() {
    jl_Integer_TYPE = $rt_cls($rt_intcls());
}
var jl_IncompatibleClassChangeError = $rt_classWithoutFields(jl_LinkageError);
var jl_NoSuchFieldError = $rt_classWithoutFields(jl_IncompatibleClassChangeError);
function jl_NoSuchFieldError__init_(var_0) {
    var var_1 = new jl_NoSuchFieldError();
    jl_NoSuchFieldError__init_0(var_1, var_0);
    return var_1;
}
function jl_NoSuchFieldError__init_0($this, $message) {
    jl_Throwable__init_($this, $message);
}
var jl_NoSuchMethodError = $rt_classWithoutFields(jl_IncompatibleClassChangeError);
function jl_NoSuchMethodError__init_(var_0) {
    var var_1 = new jl_NoSuchMethodError();
    jl_NoSuchMethodError__init_0(var_1, var_0);
    return var_1;
}
function jl_NoSuchMethodError__init_0($this, $message) {
    jl_Throwable__init_($this, $message);
}
var jl_Exception = $rt_classWithoutFields(jl_Throwable);
function jl_Exception__init_0() {
    var var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
}
function jl_Exception__init_1(var_0) {
    var var_1 = new jl_Exception();
    jl_Exception__init_2(var_1, var_0);
    return var_1;
}
function jl_Exception__init_($this) {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
}
function jl_Exception__init_2($this, $message) {
    jl_Throwable__init_($this, $message);
}
var jl_RuntimeException = $rt_classWithoutFields(jl_Exception);
function jl_RuntimeException__init_(var_0) {
    var var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
}
function jl_RuntimeException__init_0($this, $message) {
    jl_Throwable__init_($this, $message);
}
var otj_JSObject = $rt_classWithoutFields(0);
var otjdx_Node = $rt_classWithoutFields(0);
var otjdx_Document = $rt_classWithoutFields(0);
var otjde_EventTarget = $rt_classWithoutFields(0);
var otjdh_HTMLDocument = $rt_classWithoutFields(0);
function otjdh_HTMLDocument_current() {
    return window.document;
}
function g_Game() {
    var a = this; jl_Object.call(a);
    a.$playerPosition = null;
    a.$playerVelocity = null;
    a.$tileSet = null;
    a.$tileMaps = null;
    a.$objectTemplates = null;
    a.$objects = null;
}
function g_Game_getMapFileNames($this) {
    var $fileNames;
    $fileNames = ju_ArrayList__init_();
    ju_ArrayList_add($fileNames, $rt_s(12));
    ju_ArrayList_add($fileNames, $rt_s(13));
    ju_ArrayList_add($fileNames, $rt_s(14));
    return $fileNames;
}
var gpb_GameLoader$Observer = $rt_classWithoutFields(0);
function gpb_PresentationPhase() {
    jl_Object.call(this);
    this.$game = null;
}
function gpb_PresentationPhase_onFailure($this, $msg) {
    if (jl_System_errCache === null)
        jl_System_errCache = ji_PrintStream__init_(otcic_StderrOutputStream_INSTANCE, 0);
    ji_PrintStream_println(jl_System_errCache, $msg);
}
var gpb_DownloadObserver = $rt_classWithoutFields(0);
var gpb_TileImageLoader$Observer = $rt_classWithoutFields(0);
function gpb_GameLoader() {
    var a = this; jl_Object.call(a);
    a.$game0 = null;
    a.$observer = null;
    a.$tileMapsLoaded = 0;
    a.$tileSetsLoaded = 0;
    a.$tileImages = null;
}
function gpb_GameLoader_checkCompletion($this) {
    var var$1, var$2, var$3, var$4, var$5, var$6, var$7;
    if ($this.$tileSetsLoaded != 1)
        return;
    if ($this.$tileMapsLoaded != (g_Game_getMapFileNames($this.$game0)).$size)
        return;
    var$1 = $this.$tileImages;
    if (var$1 === null)
        return;
    var$2 = $this.$observer;
    var$3 = otjdh_HTMLDocument_current();
    window;
    var$4 = new gpb_GameView;
    var$2 = var$2.$game;
    var$4.$game1 = var$2;
    var$5 = new gpb_ControlAxis;
    var$5.$x = 0.0;
    var$5.$y = 0.0;
    var$4.$controlAxis = var$5;
    var$4.$keyReleaseListener = gpb_KeyListener__init_(var$2, var$5, 0);
    var$4.$keyPressListener = gpb_KeyListener__init_(var$2, var$4.$controlAxis, 1);
    var$6 = var$3.body;
    var$5 = var$4.$keyPressListener;
    var$6.addEventListener("keydown", otji_JS_function(var$5, "handleEvent"));
    var$6 = var$3.body;
    var$5 = var$4.$keyReleaseListener;
    var$6.addEventListener("keyup", otji_JS_function(var$5, "handleEvent"));
    var$6 = window;
    var$7 = var$3.createElement("canvas");
    var$4.$canvas = var$7;
    var$2 = var$6.innerWidth;
    var$7.width = var$2;
    var$7 = var$4.$canvas;
    var$2 = var$6.innerHeight;
    var$7.height = var$2;
    var$4.$context = var$4.$canvas.getContext("2d");
    var$4.$images = var$1;
    var$1 = new g_GameRenderer;
    var$1.$xRes = 100;
    var$1.$yRes = 100;
    var$4.$gameRenderer = var$1;
    var$2 = new g_RenderCommandQueue;
    var$2.$commands = ju_ArrayList__init_();
    var$4.$renderCmdQueue = var$2;
    var$1 = var$3.body;
    var$3 = var$4.$canvas;
    var$1.appendChild(var$3);
    var$4.$lastTimestamp = (-1.0);
    requestAnimationFrame(otji_JS_function(var$4, "onAnimationFrame"));
}
function gpb_GameLoader_loaded($this, $item) {
    var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    a: {
        gpb_GameLoader$1_$callClinit();
        switch (gpb_GameLoader$1_$SwitchMap$game$platforms$browser$DownloadObserver$Item.data[$item.$ordinal]) {
            case 1:
                break;
            case 2:
                $this.$tileSetsLoaded = $this.$tileSetsLoaded + 1 | 0;
                var$2 = $this.$game0.$tileSet;
                $item = ju_TreeMap__init_();
                var$3 = 0;
                while (true) {
                    var$4 = var$2.$tileList;
                    if (var$3 >= var$4.$size)
                        break;
                    var$5 = ju_ArrayList_get(var$4, var$3);
                    var$4 = (jl_String_split(var$5.$imagePath, $rt_s(15))).data[1];
                    var$6 = new jl_StringBuilder;
                    jl_AbstractStringBuilder__init_(var$6);
                    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$6, $rt_s(2)), var$4));
                    ju_TreeMap_put($item, jl_Integer_valueOf(var$5.$id.lo), var$4);
                    var$3 = var$3 + 1 | 0;
                }
                var$4 = new gpb_TileImageLoader;
                var$5 = otjdh_HTMLDocument_current();
                var$4.$observer2 = $this;
                var$4.$loadedCount = 0;
                var$6 = $item.$root;
                var$4.$required = var$6 === null ? 0 : var$6.$size0;
                var$4.$elements = ju_TreeMap__init_();
                if ($item.$cachedEntrySet === null) {
                    var$2 = new ju_TreeMap$EntrySet;
                    var$7 = null;
                    var$6 = null;
                    var$2.$modCount = (-1);
                    var$2.$owner = $item;
                    var$2.$from = var$7;
                    var$2.$fromIncluded = 1;
                    var$2.$fromChecked = 0;
                    var$2.$to = var$6;
                    var$2.$toIncluded = 1;
                    var$2.$toChecked = 0;
                    var$2.$reverse = 0;
                    $item.$cachedEntrySet = var$2;
                }
                $item = $item.$cachedEntrySet;
                if ($item.$reverse) {
                    var$8 = !$item.$toChecked ? ju_TreeMap_pathToFirst($item.$owner, 1) : !$item.$toIncluded ? ju_TreeMap_pathToNext($item.$owner, $item.$to, 1) : ju_TreeMap_pathToExactOrNext($item.$owner, $item.$to, 1);
                    var$2 = !$item.$fromChecked ? ju_TreeMap_access$100($item.$owner, 0) : !$item.$fromIncluded ? ju_TreeMap_findNext($item.$owner, $item.$to, 0) : ju_TreeMap_findExactOrNext($item.$owner, $item.$to, 0);
                    var$6 = ju_TreeMap$EntryIterator__init_($item.$owner, var$8, var$2, 1);
                } else {
                    var$8 = !$item.$fromChecked ? ju_TreeMap_pathToFirst($item.$owner, 0) : !$item.$fromIncluded ? ju_TreeMap_pathToNext($item.$owner, $item.$from, 0) : ju_TreeMap_pathToExactOrNext($item.$owner, $item.$from, 0);
                    var$2 = !$item.$toChecked ? ju_TreeMap_access$100($item.$owner, 1) : !$item.$toIncluded ? ju_TreeMap_findNext($item.$owner, $item.$to, 1) : ju_TreeMap_findExactOrNext($item.$owner, $item.$to, 1);
                    var$6 = ju_TreeMap$EntryIterator__init_($item.$owner, var$8, var$2, 0);
                }
                while (true) {
                    var$3 = var$6.$depth;
                    if (!(var$3 <= 0 ? 0 : 1))
                        break;
                    if (var$6.$modCount0 != var$6.$owner0.$modCount1) {
                        $item = new ju_ConcurrentModificationException;
                        jl_Exception__init_($item);
                        $rt_throw($item);
                    }
                    if (!var$3) {
                        $item = new ju_NoSuchElementException;
                        jl_Exception__init_($item);
                        $rt_throw($item);
                    }
                    b: {
                        var$8 = var$6.$path.data;
                        var$3 = var$3 - 1 | 0;
                        var$6.$depth = var$3;
                        $item = var$8[var$3];
                        var$6.$last = $item;
                        $item = ju_TreeMap$TreeNode_down($item, var$6.$reverse0);
                        if ($item !== null)
                            while (true) {
                                if ($item === null)
                                    break b;
                                var$8 = var$6.$path.data;
                                var$9 = var$6.$depth;
                                var$6.$depth = var$9 + 1 | 0;
                                var$8[var$9] = $item;
                                $item = ju_TreeMap$TreeNode_forward($item, var$6.$reverse0);
                            }
                    }
                    $item = var$6.$last;
                    if ($item === var$6.$to0)
                        var$6.$depth = 0;
                    $item = $item;
                    var$2 = var$5.createElement("img");
                    var$2.addEventListener("load", otji_JS_function(var$4, "handleEvent"));
                    var$7 = $rt_ustr($item.$value0);
                    var$2.src = var$7;
                    ju_TreeMap_put(var$4.$elements, $item.$key, var$2);
                }
                break a;
            default:
                break a;
        }
        $this.$tileMapsLoaded = $this.$tileMapsLoaded + 1 | 0;
    }
    gpb_GameLoader_checkCompletion($this);
}
function gpb_GameLoader_failed($this, $item, $message) {
    var var$3;
    a: {
        gpb_GameLoader$1_$callClinit();
        switch (gpb_GameLoader$1_$SwitchMap$game$platforms$browser$DownloadObserver$Item.data[$item.$ordinal]) {
            case 1:
                break;
            case 2:
                $item = $this.$observer;
                var$3 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$3);
                gpb_PresentationPhase_onFailure($item, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(16)), $message), $rt_s(17))));
                break a;
            default:
                break a;
        }
        $item = $this.$observer;
        var$3 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$3);
        gpb_PresentationPhase_onFailure($item, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(18)), $message), $rt_s(17))));
    }
}
var otci_IntegerUtil = $rt_classWithoutFields();
var otjde_FocusEventTarget = $rt_classWithoutFields(0);
var otjde_MouseEventTarget = $rt_classWithoutFields(0);
var otjde_KeyboardEventTarget = $rt_classWithoutFields(0);
var otjde_LoadEventTarget = $rt_classWithoutFields(0);
var otjde_GamepadEventTarget = $rt_classWithoutFields(0);
var otjb_WindowEventTarget = $rt_classWithoutFields(0);
var otjb_StorageProvider = $rt_classWithoutFields(0);
var otjc_JSArrayReader = $rt_classWithoutFields(0);
var otjb_Window = $rt_classWithoutFields();
function otjb_Window_addEventListener$exported$0(var$0, var$1, var$2) {
    var$0.$addEventListener($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
}
function otjb_Window_removeEventListener$exported$1(var$0, var$1, var$2) {
    var$0.$removeEventListener($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
}
function otjb_Window_get$exported$2(var$0, var$1) {
    return var$0.$get0(var$1);
}
function otjb_Window_removeEventListener$exported$3(var$0, var$1, var$2, var$3) {
    var$0.$removeEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
}
function otjb_Window_dispatchEvent$exported$4(var$0, var$1) {
    return !!var$0.$dispatchEvent(var$1);
}
function otjb_Window_getLength$exported$5(var$0) {
    return var$0.$getLength();
}
function otjb_Window_addEventListener$exported$6(var$0, var$1, var$2, var$3) {
    var$0.$addEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
}
var jl_Iterable = $rt_classWithoutFields(0);
var ju_Collection = $rt_classWithoutFields(0);
var ju_AbstractCollection = $rt_classWithoutFields();
function ju_AbstractCollection_toArray($this, $a) {
    var var$2, $i, $i_0, $iter, var$6;
    var$2 = $a.data;
    $i = $this.$size;
    $i_0 = var$2.length;
    if ($i_0 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < $i_0) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i_0 = 0;
    $iter = ju_AbstractList_iterator($this);
    while (ju_AbstractList$1_hasNext($iter)) {
        var$2 = $a.data;
        var$6 = $i_0 + 1 | 0;
        var$2[$i_0] = ju_AbstractList$1_next($iter);
        $i_0 = var$6;
    }
    return $a;
}
var ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount2 = 0;
}
function ju_AbstractList_iterator($this) {
    var var$1;
    var$1 = new ju_AbstractList$1;
    var$1.$this$0 = $this;
    var$1.$modCount3 = $this.$modCount2;
    var$1.$size1 = $this.$size;
    var$1.$removeIndex = (-1);
    return var$1;
}
var jl_Cloneable = $rt_classWithoutFields(0);
var ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    var a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size = 0;
}
function ju_ArrayList__init_() {
    var var_0 = new ju_ArrayList();
    ju_ArrayList__init_0(var_0);
    return var_0;
}
function ju_ArrayList__init_0($this) {
    $this.$array = $rt_createArray(jl_Object, 10);
}
function ju_ArrayList_ensureCapacity($this, $minCapacity) {
    var var$2, $newLength;
    var$2 = $this.$array.data.length;
    if (var$2 < $minCapacity) {
        $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max(var$2 * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf($this.$array, $newLength);
    }
}
function ju_ArrayList_get($this, $index) {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
}
function ju_ArrayList_add($this, $element) {
    var var$2, var$3;
    ju_ArrayList_ensureCapacity($this, $this.$size + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size;
    $this.$size = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount2 = $this.$modCount2 + 1 | 0;
    return 1;
}
function ju_ArrayList_remove($this, $i) {
    var var$2, $old, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    var$2 = $this.$array.data;
    $old = var$2[$i];
    var$4 = $this.$size - 1 | 0;
    $this.$size = var$4;
    while ($i < var$4) {
        $i_0 = $i + 1 | 0;
        var$2[$i] = var$2[$i_0];
        $i = $i_0;
    }
    var$2[var$4] = null;
    $this.$modCount2 = $this.$modCount2 + 1 | 0;
    return $old;
}
function ju_ArrayList_checkIndex($this, $index) {
    var var$2;
    if ($index >= 0 && $index < $this.$size)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Exception__init_(var$2);
    $rt_throw(var$2);
}
function gm_Vector() {
    var a = this; jl_Object.call(a);
    a.$x0 = 0.0;
    a.$y0 = 0.0;
}
function gm_Vector__init_(var_0, var_1) {
    var var_2 = new gm_Vector();
    gm_Vector__init_0(var_2, var_0, var_1);
    return var_2;
}
function gm_Vector_diff($a, $b) {
    return gm_Vector__init_($a.$x0 - $b.$x0, $a.$y0 - $b.$y0);
}
function gm_Vector_sum($a, $b) {
    return gm_Vector__init_($a.$x0 + $b.$x0, $a.$y0 + $b.$y0);
}
function gm_Vector__init_0($this, $x, $y) {
    $this.$x0 = $x;
    $this.$y0 = $y;
}
function g_TileSet() {
    jl_Object.call(this);
    this.$tileList = null;
}
var ju_Comparator = $rt_classWithoutFields(0);
var jl_String$_clinit_$lambda$_81_0 = $rt_classWithoutFields();
var jl_Character = $rt_classWithoutFields();
var jl_Character_TYPE = null;
var jl_Character_digitMapping = null;
var jl_Character_classMapping = null;
var jl_Character_characterCache = null;
var jl_Character_$$metadata$$0 = null;
var jl_Character_$$metadata$$1 = null;
function jl_Character_toString($c) {
    var var$2, var$3;
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_0(var$2, var$3);
    return var$2;
}
function jl_Character_isSupplementaryCodePoint($codePoint) {
    return $codePoint >= 65536 && $codePoint <= 1114111 ? 1 : 0;
}
function jl_Character_isHighSurrogate($ch) {
    return ($ch & 64512) != 55296 ? 0 : 1;
}
function jl_Character_isLowSurrogate($ch) {
    return ($ch & 64512) != 56320 ? 0 : 1;
}
function jl_Character_isSurrogate($ch) {
    return !jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1;
}
function jl_Character_isSurrogatePair($high, $low) {
    return jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low) ? 1 : 0;
}
function jl_Character_toCodePoint($high, $low) {
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
}
function jl_Character_highSurrogate($codePoint) {
    return (55296 | ($codePoint - 65536 | 0) >> 10 & 1023) & 65535;
}
function jl_Character_lowSurrogate($codePoint) {
    return (56320 | $codePoint & 1023) & 65535;
}
function jl_Character_toLowerCase($ch) {
    return jl_Character_toLowerCase0($ch) & 65535;
}
function jl_Character_toLowerCase0($ch) {
    return (otp_Platform_stringFromCharCode($ch)).toLowerCase().charCodeAt(0);
}
function jl_Character_toUpperCase($ch) {
    return jl_Character_toUpperCase0($ch) & 65535;
}
function jl_Character_toUpperCase0($codePoint) {
    return (otp_Platform_stringFromCharCode($codePoint)).toUpperCase().charCodeAt(0);
}
function jl_Character_digit($ch, $radix) {
    if ($radix >= 2 && $radix <= 36) {
        $ch = jl_Character_getNumericValue($ch);
        if ($ch >= $radix)
            $ch = (-1);
    } else
        $ch = (-1);
    return $ch;
}
function jl_Character_getNumericValue($codePoint) {
    var var$2, var$3, var$4, $digitMapping, var$6, $l, $u, $idx, $val;
    if (jl_Character_digitMapping === null) {
        if (jl_Character_$$metadata$$0 === null)
            jl_Character_$$metadata$$0 = jl_Character_obtainDigitMapping$$create();
        var$2 = (jl_Character_$$metadata$$0.value !== null ? $rt_str(jl_Character_$$metadata$$0.value) : null);
        var$3 = new otci_CharFlow;
        var$3.$characters0 = jl_String_toCharArray(var$2);
        var$4 = otci_Base46_decode(var$3);
        $digitMapping = $rt_createIntArray(var$4);
        var$6 = $digitMapping.data;
        $l = 0;
        while ($l < var$4) {
            var$6[$l] = otci_Base46_decode(var$3);
            $l = $l + 1 | 0;
        }
        jl_Character_digitMapping = $digitMapping;
    }
    $digitMapping = jl_Character_digitMapping.data;
    $l = 0;
    $u = ($digitMapping.length / 2 | 0) - 1 | 0;
    while ($u >= $l) {
        $idx = ($l + $u | 0) / 2 | 0;
        var$4 = $idx * 2 | 0;
        $val = $rt_compare($codePoint, $digitMapping[var$4]);
        if ($val > 0)
            $l = $idx + 1 | 0;
        else {
            if ($val >= 0)
                return $digitMapping[var$4 + 1 | 0];
            $u = $idx - 1 | 0;
        }
    }
    return (-1);
}
function jl_Character_forDigit($digit, $radix) {
    if ($radix >= 2 && $radix <= 36 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
}
function jl_Character_toChars($codePoint) {
    var var$2;
    if ($codePoint < 65536) {
        var$2 = $rt_createCharArray(1);
        var$2.data[0] = $codePoint & 65535;
        return var$2;
    }
    return $rt_createCharArrayFromData([jl_Character_highSurrogate($codePoint), jl_Character_lowSurrogate($codePoint)]);
}
function jl_Character_getType($codePoint) {
    var $u, $range, $classes, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, $l, $i;
    $u = $codePoint > 0 && $codePoint <= 65535 ? 1 : 0;
    if ($u && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    if (jl_Character_classMapping === null) {
        if (jl_Character_$$metadata$$1 === null)
            jl_Character_$$metadata$$1 = jl_Character_obtainClasses$$create();
        $range = (jl_Character_$$metadata$$1.value !== null ? $rt_str(jl_Character_$$metadata$$1.value) : null);
        $classes = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
        var$5 = $classes.data;
        var$6 = $rt_createByteArray(16384);
        var$7 = var$6.data;
        var$8 = 0;
        var$9 = 0;
        var$10 = 0;
        var$11 = 0;
        while (var$11 < jl_String_length($range)) {
            var$12 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
            if (var$12 == 64) {
                var$11 = var$11 + 1 | 0;
                var$12 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
                var$13 = 0;
                $u = 1;
                $l = 0;
                while ($l < 3) {
                    var$11 = var$11 + 1 | 0;
                    var$13 = var$13 | $rt_imul($u, otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11)));
                    $u = $u * 64 | 0;
                    $l = $l + 1 | 0;
                }
            } else if (var$12 < 32)
                var$13 = 1;
            else {
                var$12 = (var$12 - 32 | 0) << 24 >> 24;
                var$11 = var$11 + 1 | 0;
                var$13 = otciu_UnicodeHelper_decodeByte(jl_String_charAt($range, var$11));
            }
            if (!var$12 && var$13 >= 128) {
                if (var$8 > 0) {
                    $u = var$9 + 1 | 0;
                    var$5[var$9] = otciu_UnicodeHelper$Range__init_(var$10, var$10 + var$8 | 0, ju_Arrays_copyOf0(var$6, var$8));
                    var$9 = $u;
                }
                var$10 = var$10 + (var$8 + var$13 | 0) | 0;
                var$8 = 0;
            } else {
                $u = var$8 + var$13 | 0;
                if ($u < var$7.length)
                    $l = var$9;
                else {
                    $l = var$9 + 1 | 0;
                    var$5[var$9] = otciu_UnicodeHelper$Range__init_(var$10, var$10 + var$8 | 0, ju_Arrays_copyOf0(var$6, var$8));
                    var$10 = var$10 + $u | 0;
                    var$8 = 0;
                }
                while (true) {
                    $u = var$13 + (-1) | 0;
                    if (var$13 <= 0)
                        break;
                    $i = var$8 + 1 | 0;
                    var$7[var$8] = var$12;
                    var$8 = $i;
                    var$13 = $u;
                }
                var$9 = $l;
            }
            var$11 = var$11 + 1 | 0;
        }
        jl_Character_classMapping = ju_Arrays_copyOf($classes, var$9);
    }
    $classes = jl_Character_classMapping.data;
    $l = 0;
    $u = $classes.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = $classes[$i];
        if ($codePoint >= $range.$end0)
            $l = $i + 1 | 0;
        else {
            $u = $range.$start2;
            if ($codePoint >= $u)
                return $range.$data.data[$codePoint - $u | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
}
function jl_Character_isLetterOrDigit($codePoint) {
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
}
function jl_Character_isIdentifierIgnorable($codePoint) {
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
}
function jl_Character_isSpaceChar($codePoint) {
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
}
function jl_Character_isWhitespace($codePoint) {
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
}
function jl_Character__clinit_() {
    jl_Character_TYPE = $rt_cls($rt_charcls());
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
}
function jl_Character_obtainDigitMapping$$create() {
    return {"value" : "oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
    + "i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
    + ",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
    + "4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
    + "H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
    + "%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
    + "4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};
}
function jl_Character_obtainClasses$$create() {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
    + "!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
    + "I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
    + "I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
    + "J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
    + "!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
    + "596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
    + "SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
    + "A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
    + "9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
    + "@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
    + "L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};
}
var jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException);
var jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
var otja_ReadyStateChangeHandler = $rt_classWithoutFields(0);
function gpb_TileSetLoader() {
    var a = this; jl_Object.call(a);
    a.$tileSet0 = null;
    a.$request = null;
    a.$observer0 = null;
}
function gpb_TileSetLoader_stateChanged$exported$0(var$0) {
    var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    if (var$0.$request.readyState == 4) {
        if (var$0.$request.status != 200)
            gpb_GameLoader_failed(var$0.$observer0, gpb_DownloadObserver$Item_TILE_SET, $rt_str(var$0.$request.statusText));
        else {
            var$1 = var$0.$request.responseXML;
            if (var$1 === null)
                gpb_GameLoader_failed(var$0.$observer0, gpb_DownloadObserver$Item_TILE_SET, $rt_s(19));
            else {
                var$2 = new g_TileSetReader;
                var$2.$tileSet1 = var$0.$tileSet0;
                var$1 = gpb_XmlElement_getElementsByTag(gpb_XmlElement__init_(var$1.documentElement), $rt_s(20));
                var$3 = 0;
                while (var$3 < gx_ElementList_getCount(var$1)) {
                    var$4 = gx_ElementList_getElement(var$1, var$3);
                    var$5 = $rt_s(4);
                    var$6 = gpb_XmlElement_getElementsByTag(var$4, $rt_s(21));
                    if (gx_ElementList_getCount(var$6) > 0)
                        var$5 = gpb_XmlElement_getAttribute(gx_ElementList_getElement(var$6, 0), $rt_s(22));
                    var$6 = gpb_XmlElement_getElementsByTag(var$4, $rt_s(23));
                    var$7 = gpb_XmlElement_getAttribute(var$4, $rt_s(24));
                    var$4 = new g_Tile;
                    var$4.$id = jl_Long_parseLong(var$7);
                    var$4.$imagePath = var$5;
                    var$4.$polygons = ju_ArrayList__init_();
                    var$8 = 0;
                    while (var$8 < gx_ElementList_getCount(var$6)) {
                        var$7 = gpb_XmlElement_getElementsByTag(gx_ElementList_getElement(var$6, var$8), $rt_s(25));
                        var$9 = 0;
                        while (var$9 < gx_ElementList_getCount(var$7)) {
                            var$5 = gpb_XmlElement_getElementsByTag(gx_ElementList_getElement(var$7, var$9), $rt_s(26));
                            var$10 = 0;
                            while (var$10 < gx_ElementList_getCount(var$5)) {
                                g_TileSetReader_readTilePolygon(var$2, var$4, gx_ElementList_getElement(var$5, var$10));
                                var$10 = var$10 + 1 | 0;
                            }
                            var$9 = var$9 + 1 | 0;
                        }
                        var$8 = var$8 + 1 | 0;
                    }
                    ju_ArrayList_add(var$2.$tileSet1.$tileList, var$4);
                    var$3 = var$3 + 1 | 0;
                }
                gpb_GameLoader_loaded(var$0.$observer0, gpb_DownloadObserver$Item_TILE_SET);
            }
        }
    }
}
function g_TileMap() {
    jl_Object.call(this);
    this.$layers = null;
}
function gpb_TileMapLoader() {
    var a = this; jl_Object.call(a);
    a.$tileMap = null;
    a.$request0 = null;
    a.$observer1 = null;
}
function gpb_TileMapLoader_stateChanged$exported$0(var$0) {
    var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18;
    if (var$0.$request0.readyState == 4) {
        if (var$0.$request0.status != 200)
            gpb_GameLoader_failed(var$0.$observer1, gpb_DownloadObserver$Item_TILE_MAP, $rt_str(var$0.$request0.statusText));
        else
            a: {
                var$1 = var$0.$request0.responseXML;
                if (var$1 === null)
                    gpb_GameLoader_failed(var$0.$observer1, gpb_DownloadObserver$Item_TILE_MAP, $rt_s(27));
                else {
                    var$2 = new g_TileMapReader;
                    var$2.$tileMap0 = var$0.$tileMap;
                    var$1 = gpb_XmlElement_getElementsByTag(gpb_XmlElement__init_(var$1.documentElement), $rt_s(28));
                    var$3 = 0;
                    b: while (true) {
                        if (var$3 >= gx_ElementList_getCount(var$1)) {
                            gpb_GameLoader_loaded(var$0.$observer1, gpb_DownloadObserver$Item_TILE_MAP);
                            break a;
                        }
                        var$4 = gx_ElementList_getElement(var$1, var$3);
                        var$5 = new g_IrregularTileLayer;
                        var$5.$chunks = ju_ArrayList__init_();
                        var$6 = gpb_XmlElement_getElementsByTag(var$4, $rt_s(29));
                        var$7 = 0;
                        while (var$7 < gx_ElementList_getCount(var$6)) {
                            var$4 = gx_ElementList_getElement(var$6, var$7);
                            if (!jl_String_equals(gpb_XmlElement_getAttribute(var$4, $rt_s(30)), $rt_s(31)))
                                break b;
                            var$8 = gpb_XmlElement_getElementsByTag(var$4, $rt_s(32));
                            var$9 = 0;
                            while (var$9 < gx_ElementList_getCount(var$8)) {
                                var$4 = gx_ElementList_getElement(var$8, var$9);
                                var$10 = gpb_XmlElement_getAttribute(var$4, $rt_s(33));
                                var$11 = gpb_XmlElement_getAttribute(var$4, $rt_s(34));
                                var$12 = gpb_XmlElement_getAttribute(var$4, $rt_s(35));
                                var$13 = gpb_XmlElement_getAttribute(var$4, $rt_s(36));
                                var$14 = jl_Integer_parseInt0(var$10);
                                var$15 = jl_Integer_parseInt0(var$11);
                                var$16 = jl_Integer_parseInt0(var$12);
                                var$17 = jl_Integer_parseInt0(var$13);
                                var$13 = gm_Vector__init_(var$14, var$15);
                                var$18 = gm_Matrix__init_(var$16, var$17);
                                var$12 = $rt_s(4);
                                var$10 = var$4.$element.childNodes;
                                var$15 = 0;
                                while (var$15 < var$10.length) {
                                    var$11 = var$10.item(var$15);
                                    if (var$11.nodeType == 3)
                                        var$12 = jl_StringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder__init_(), var$12), $rt_str(var$11.nodeValue)));
                                    var$15 = var$15 + 1 | 0;
                                }
                                g_TileMapReader_readChunkValues(var$2, var$18, var$12);
                                ju_ArrayList_add(var$5.$chunks, g_IrregularTileLayer$Chunk__init_(var$5, var$13, var$18));
                                var$9 = var$9 + 1 | 0;
                            }
                            var$7 = var$7 + 1 | 0;
                        }
                        var$6 = var$2.$tileMap0;
                        var$12 = gm_Vector__init_(2.147483647E9, 2.147483647E9);
                        var$4 = ju_AbstractList_iterator(var$5.$chunks);
                        while (ju_AbstractList$1_hasNext(var$4)) {
                            var$10 = (ju_AbstractList$1_next(var$4)).$position;
                            var$12 = gm_Vector__init_(jl_Math_min0(var$10.$x0, var$12.$x0), jl_Math_min0(var$10.$y0, var$12.$y0));
                        }
                        var$4 = gm_Vector__init_((-2.147483648E9), (-2.147483648E9));
                        var$10 = ju_AbstractList_iterator(var$5.$chunks);
                        while (ju_AbstractList$1_hasNext(var$10)) {
                            var$11 = ju_AbstractList$1_next(var$10);
                            var$14 = gm_Matrix_getWidth(var$11.$tiles);
                            var$7 = gm_Matrix_getHeight(var$11.$tiles);
                            var$11 = gm_Vector_sum(var$11.$position, gm_Vector__init_(var$14, var$7));
                            var$4 = gm_Vector__init_(jl_Math_max0(var$11.$x0, var$4.$x0), jl_Math_max0(var$11.$y0, var$4.$y0));
                        }
                        var$4 = gm_Vector_diff(var$4, var$12);
                        var$10 = gm_Matrix__init_(var$4.$x0 | 0, var$4.$y0 | 0);
                        var$5 = ju_AbstractList_iterator(var$5.$chunks);
                        while (ju_AbstractList$1_hasNext(var$5)) {
                            var$4 = ju_AbstractList$1_next(var$5);
                            var$11 = gm_Vector_diff(var$4.$position, var$12);
                            var$14 = var$11.$x0 | 0;
                            var$7 = var$11.$y0 | 0;
                            var$4 = var$4.$tiles;
                            var$9 = 0;
                            while (var$9 < var$4.$height) {
                                var$15 = 0;
                                while (var$15 < var$4.$width) {
                                    gm_Matrix_setValue(var$10, var$14 + var$15 | 0, var$7 + var$9 | 0, gm_Matrix_getValue(var$4, var$15, var$9));
                                    var$15 = var$15 + 1 | 0;
                                }
                                var$9 = var$9 + 1 | 0;
                            }
                        }
                        ju_ArrayList_add(var$6.$layers, var$10);
                        var$3 = var$3 + 1 | 0;
                    }
                    var$1 = new jl_IllegalArgumentException;
                    jl_Exception__init_2(var$1, $rt_s(37));
                    $rt_throw(var$1);
                }
            }
    }
}
var otja_XMLHttpRequest = $rt_classWithoutFields();
function jl_Enum() {
    var a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal = 0;
}
var gpb_DownloadObserver$Item = $rt_classWithoutFields(jl_Enum);
var gpb_DownloadObserver$Item_TILE_MAP = null;
var gpb_DownloadObserver$Item_TILE_SET = null;
var gpb_DownloadObserver$Item_$VALUES = null;
function gpb_DownloadObserver$Item__init_(var_0, var_1) {
    var var_2 = new gpb_DownloadObserver$Item();
    gpb_DownloadObserver$Item__init_0(var_2, var_0, var_1);
    return var_2;
}
function gpb_DownloadObserver$Item__init_0($this, var$1, var$2) {
    $this.$name0 = var$1;
    $this.$ordinal = var$2;
}
function gpb_DownloadObserver$Item__clinit_() {
    var var$1;
    gpb_DownloadObserver$Item_TILE_MAP = gpb_DownloadObserver$Item__init_($rt_s(38), 0);
    var$1 = gpb_DownloadObserver$Item__init_($rt_s(39), 1);
    gpb_DownloadObserver$Item_TILE_SET = var$1;
    gpb_DownloadObserver$Item_$VALUES = $rt_createArrayFromData(gpb_DownloadObserver$Item, [gpb_DownloadObserver$Item_TILE_MAP, var$1]);
}
function g_TileSetReader() {
    jl_Object.call(this);
    this.$tileSet1 = null;
}
function g_TileSetReader_readTilePolygon($this, $tile, $polygon) {
    var var$3, var$4, var$5, var$6, var$7, var$8;
    $polygon = gpb_XmlElement_getAttribute($polygon, $rt_s(40));
    var$3 = new gm_Polygon;
    var$3.$points = ju_ArrayList__init_();
    var$4 = jl_String_split($polygon, $rt_s(41));
    var$5 = 0;
    while (true) {
        var$6 = var$4.data;
        if (var$5 >= var$6.length)
            break;
        var$6 = (jl_String_split(var$6[var$5], $rt_s(42))).data;
        var$7 = jl_Double_parseDouble(var$6[0]);
        var$8 = jl_Double_parseDouble(var$6[1]);
        $polygon = gm_Vector__init_(var$7, var$8);
        ju_ArrayList_add(var$3.$points, $polygon);
        var$5 = var$5 + 1 | 0;
    }
    ju_ArrayList_add($tile.$polygons, var$3);
}
var gx_Element = $rt_classWithoutFields(0);
function gpb_XmlElement() {
    jl_Object.call(this);
    this.$element = null;
}
function gpb_XmlElement__init_(var_0) {
    var var_1 = new gpb_XmlElement();
    gpb_XmlElement__init_0(var_1, var_0);
    return var_1;
}
function gpb_XmlElement__init_0($this, $element) {
    $this.$element = $element;
}
function gpb_XmlElement_getElementsByTag($this, $name) {
    var $elements, $nodes, $i;
    $elements = new gx_ElementList;
    $elements.$elements0 = ju_ArrayList__init_();
    $nodes = $this.$element.getElementsByTagName($rt_ustr($name));
    $i = 0;
    while ($i < $nodes.length) {
        $name = gpb_XmlElement__init_($nodes.item($i));
        ju_ArrayList_add($elements.$elements0, $name);
        $i = $i + 1 | 0;
    }
    return $elements;
}
function gpb_XmlElement_getAttribute($this, $name) {
    return $rt_str($this.$element.getAttribute($rt_ustr($name)));
}
function g_TileMapReader() {
    jl_Object.call(this);
    this.$tileMap0 = null;
}
function g_TileMapReader_readChunkValues($this, $tiles, $valuesString) {
    var $valueStrings, $i, var$5, var$6, $y, var$8, $x;
    $valueStrings = jl_String_split($valuesString, $rt_s(42));
    $i = 0;
    while (true) {
        var$5 = $valueStrings.data;
        var$6 = var$5.length;
        if ($i >= var$6)
            break;
        $valuesString = var$5[$i];
        $y = 0;
        var$8 = jl_String_length($valuesString) - 1 | 0;
        a: {
            while ($y <= var$8) {
                if (jl_String_charAt($valuesString, $y) > 32)
                    break a;
                $y = $y + 1 | 0;
            }
        }
        while ($y <= var$8 && jl_String_charAt($valuesString, var$8) <= 32) {
            var$8 = var$8 + (-1) | 0;
        }
        var$5[$i] = jl_String_substring($valuesString, $y, var$8 + 1 | 0);
        $i = $i + 1 | 0;
    }
    $y = 0;
    while ($y < $tiles.$height) {
        $x = 0;
        while (true) {
            var$8 = $tiles.$width;
            if ($x >= var$8)
                break;
            $i = $rt_imul($y, var$8) + $x | 0;
            if ($i < var$6)
                gm_Matrix_setValue($tiles, $x, $y, jl_Long_parseLong(var$5[$i]));
            $x = $x + 1 | 0;
        }
        $y = $y + 1 | 0;
    }
}
var ju_Iterator = $rt_classWithoutFields(0);
function ju_AbstractList$1() {
    var a = this; jl_Object.call(a);
    a.$index = 0;
    a.$modCount3 = 0;
    a.$size1 = 0;
    a.$removeIndex = 0;
    a.$this$0 = null;
}
function ju_AbstractList$1_hasNext($this) {
    return $this.$index >= $this.$size1 ? 0 : 1;
}
function ju_AbstractList$1_next($this) {
    var var$1, var$2, var$3;
    var$1 = $this.$modCount3;
    var$2 = $this.$this$0;
    if (var$1 < var$2.$modCount2) {
        var$2 = new ju_ConcurrentModificationException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    var$3 = $this.$index;
    $this.$removeIndex = var$3;
    $this.$index = var$3 + 1 | 0;
    return ju_ArrayList_get(var$2, var$3);
}
var gpb_GameLoader$1 = $rt_classWithoutFields();
var gpb_GameLoader$1_$SwitchMap$game$platforms$browser$DownloadObserver$Item = null;
function gpb_GameLoader$1_$callClinit() {
    gpb_GameLoader$1_$callClinit = $rt_eraseClinit(gpb_GameLoader$1);
    gpb_GameLoader$1__clinit_();
}
function gpb_GameLoader$1__clinit_() {
    var var$1, var$2;
    var$1 = $rt_createIntArray((gpb_DownloadObserver$Item_$VALUES.$clone()).data.length);
    var$2 = var$1.data;
    gpb_GameLoader$1_$SwitchMap$game$platforms$browser$DownloadObserver$Item = var$1;
    var$2[gpb_DownloadObserver$Item_TILE_MAP.$ordinal] = 1;
    var$2[gpb_DownloadObserver$Item_TILE_SET.$ordinal] = 2;
}
function gx_ElementList() {
    jl_Object.call(this);
    this.$elements0 = null;
}
function gx_ElementList_getElement($this, $index) {
    return ju_ArrayList_get($this.$elements0, $index);
}
function gx_ElementList_getCount($this) {
    return $this.$elements0.$size;
}
function g_Tile() {
    var a = this; jl_Object.call(a);
    a.$id = Long_ZERO;
    a.$imagePath = null;
    a.$polygons = null;
}
var jl_Long = $rt_classWithoutFields(jl_Number);
var jl_Long_TYPE = null;
function jl_Long_parseLong($s) {
    var var$2, var$3, var$4, var$5, var$6, var$7;
    if ($s !== null && !jl_String_isEmpty($s)) {
        a: {
            var$2 = 0;
            var$3 = 0;
            switch (jl_String_charAt($s, 0)) {
                case 43:
                    var$3 = 1;
                    break a;
                case 45:
                    var$2 = 1;
                    var$3 = 1;
                    break a;
                default:
            }
        }
        var$4 = Long_ZERO;
        b: {
            c: {
                while (var$3 < jl_String_length($s)) {
                    var$5 = var$3 + 1 | 0;
                    var$3 = jl_Character_getNumericValue(jl_String_charAt($s, var$3));
                    if (var$3 < 0) {
                        var$6 = new jl_NumberFormatException;
                        var$7 = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_(var$7);
                        jl_Throwable__init_(var$6, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(6)), $s)));
                        $rt_throw(var$6);
                    }
                    if (var$3 >= 10) {
                        var$6 = new jl_NumberFormatException;
                        var$7 = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_(var$7);
                        jl_Throwable__init_(var$6, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$7, $rt_s(7)), 10), $rt_s(8)), $s)));
                        $rt_throw(var$6);
                    }
                    var$4 = Long_add(Long_mul(Long_fromInt(10), var$4), Long_fromInt(var$3));
                    if (Long_lt(var$4, Long_ZERO)) {
                        if (var$5 != jl_String_length($s))
                            break b;
                        if (Long_ne(var$4, new Long(0, 2147483648)))
                            break b;
                        if (!var$2)
                            break b;
                        var$4 = new Long(0, 2147483648);
                        break c;
                    }
                    var$3 = var$5;
                }
                if (var$2)
                    var$4 = Long_neg(var$4);
            }
            return var$4;
        }
        var$6 = new jl_NumberFormatException;
        var$7 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$7);
        jl_Throwable__init_(var$6, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(9)), $s)));
        $rt_throw(var$6);
    }
    $s = new jl_NumberFormatException;
    jl_Throwable__init_($s, $rt_s(10));
    $rt_throw($s);
}
function jl_Long_divideUnsigned(var$1, var$2) {
    return Long_udiv(var$1, var$2);
}
function jl_Long_remainderUnsigned(var$1, var$2) {
    return Long_urem(var$1, var$2);
}
function jl_Long__clinit_() {
    jl_Long_TYPE = $rt_cls($rt_longcls());
}
var ju_Map = $rt_classWithoutFields(0);
var ju_AbstractMap = $rt_classWithoutFields();
var ju_SortedMap = $rt_classWithoutFields(0);
var ju_NavigableMap = $rt_classWithoutFields(0);
function ju_TreeMap() {
    var a = this; ju_AbstractMap.call(a);
    a.$root = null;
    a.$comparator = null;
    a.$originalComparator = null;
    a.$modCount1 = 0;
    a.$cachedEntrySet = null;
}
function ju_TreeMap__init_() {
    var var_0 = new ju_TreeMap();
    ju_TreeMap__init_0(var_0);
    return var_0;
}
function ju_TreeMap__init_0($this) {
    var var$1;
    var$1 = null;
    $this.$originalComparator = var$1;
    if (var$1 === null) {
        var$1 = new ju_TreeMap$1;
        var$1.$this$00 = $this;
    }
    $this.$comparator = var$1;
}
function ju_TreeMap_put($this, $key, $value) {
    var $node, $old;
    $this.$root = ju_TreeMap_getOrCreateNode($this, $this.$root, $key);
    $node = ju_TreeMap_findExact($this, $key);
    $old = ju_AbstractMap$SimpleEntry_setValue($node, $value);
    ju_AbstractMap$SimpleEntry_setValue($node, $value);
    $this.$modCount1 = $this.$modCount1 + 1 | 0;
    return $old;
}
function ju_TreeMap_findExact($this, $key) {
    var $node, $cmp;
    $node = $this.$root;
    while (true) {
        if ($node === null)
            return null;
        $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $node.$key);
        if (!$cmp)
            break;
        $node = $cmp >= 0 ? $node.$right : $node.$left;
    }
    return $node;
}
function ju_TreeMap_findExactOrNext($this, $key, $reverse) {
    var $node, $lastForward, $cmp, var$6;
    $node = $this.$root;
    $lastForward = null;
    while ($node !== null) {
        $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $node.$key);
        if ($reverse)
            $cmp =  -$cmp;
        if (!$cmp)
            return $node;
        if ($cmp >= 0)
            var$6 = ju_TreeMap$TreeNode_down($node, $reverse);
        else {
            var$6 = ju_TreeMap$TreeNode_forward($node, $reverse);
            $lastForward = $node;
        }
        $node = var$6;
    }
    return $lastForward;
}
function ju_TreeMap_pathToExactOrNext($this, $key, $reverse) {
    var $path, var$4, $depth, $node, $cmp;
    $path = $rt_createArray(ju_TreeMap$TreeNode, ju_TreeMap_height($this));
    var$4 = $path.data;
    $depth = 0;
    $node = $this.$root;
    a: {
        while ($node !== null) {
            $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $node.$key);
            if ($reverse)
                $cmp =  -$cmp;
            if (!$cmp) {
                $reverse = $depth + 1 | 0;
                var$4[$depth] = $node;
                break a;
            }
            if ($cmp >= 0)
                $node = ju_TreeMap$TreeNode_down($node, $reverse);
            else {
                $cmp = $depth + 1 | 0;
                var$4[$depth] = $node;
                $node = ju_TreeMap$TreeNode_forward($node, $reverse);
                $depth = $cmp;
            }
        }
        $reverse = $depth;
    }
    return ju_Arrays_copyOf($path, $reverse);
}
function ju_TreeMap_findNext($this, $key, $reverse) {
    var $node, $lastForward, $cmp, var$6;
    $node = $this.$root;
    $lastForward = null;
    while ($node !== null) {
        $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $node.$key);
        if ($reverse)
            $cmp =  -$cmp;
        if ($cmp >= 0)
            var$6 = ju_TreeMap$TreeNode_down($node, $reverse);
        else {
            var$6 = ju_TreeMap$TreeNode_forward($node, $reverse);
            $lastForward = $node;
        }
        $node = var$6;
    }
    return $lastForward;
}
function ju_TreeMap_pathToNext($this, $key, $reverse) {
    var $path, var$4, $depth, $node, $cmp;
    $path = $rt_createArray(ju_TreeMap$TreeNode, ju_TreeMap_height($this));
    var$4 = $path.data;
    $depth = 0;
    $node = $this.$root;
    while ($node !== null) {
        $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $node.$key);
        if ($reverse)
            $cmp =  -$cmp;
        if ($cmp >= 0)
            $node = ju_TreeMap$TreeNode_down($node, $reverse);
        else {
            $cmp = $depth + 1 | 0;
            var$4[$depth] = $node;
            $node = ju_TreeMap$TreeNode_forward($node, $reverse);
            $depth = $cmp;
        }
    }
    return ju_Arrays_copyOf($path, $depth);
}
function ju_TreeMap_pathToFirst($this, $reverse) {
    var $path, var$3, $depth, $node, var$6;
    $path = $rt_createArray(ju_TreeMap$TreeNode, ju_TreeMap_height($this));
    var$3 = $path.data;
    $depth = 0;
    $node = $this.$root;
    while ($node !== null) {
        var$6 = $depth + 1 | 0;
        var$3[$depth] = $node;
        $node = ju_TreeMap$TreeNode_forward($node, $reverse);
        $depth = var$6;
    }
    return ju_Arrays_copyOf($path, $depth);
}
function ju_TreeMap_getOrCreateNode($this, $root, $key) {
    var var$3, $cmp, var$5;
    if ($root === null) {
        $root = new ju_TreeMap$TreeNode;
        var$3 = null;
        $root.$key = $key;
        $root.$value0 = var$3;
        $root.$height1 = 1;
        $root.$size0 = 1;
        return $root;
    }
    $cmp = ju_TreeMap$1_compare($this.$comparator, $key, $root.$key);
    if (!$cmp)
        return $root;
    if ($cmp >= 0)
        $root.$right = ju_TreeMap_getOrCreateNode($this, $root.$right, $key);
    else
        $root.$left = ju_TreeMap_getOrCreateNode($this, $root.$left, $key);
    ju_TreeMap$TreeNode_fix($root);
    var$5 = ju_TreeMap$TreeNode_factor($root);
    if (var$5 == 2) {
        if (ju_TreeMap$TreeNode_factor($root.$right) < 0)
            $root.$right = ju_TreeMap$TreeNode_rotateRight($root.$right);
        $root = ju_TreeMap$TreeNode_rotateLeft($root);
    } else if (var$5 == (-2)) {
        if (ju_TreeMap$TreeNode_factor($root.$left) > 0)
            $root.$left = ju_TreeMap$TreeNode_rotateLeft($root.$left);
        $root = ju_TreeMap$TreeNode_rotateRight($root);
    }
    return $root;
}
function ju_TreeMap_height($this) {
    var var$1;
    var$1 = $this.$root;
    return var$1 === null ? 0 : var$1.$height1;
}
function ju_TreeMap_access$100($x0, $x1) {
    var var$3, var$4;
    $x0 = $x0.$root;
    var$3 = null;
    while ($x0 !== null) {
        var$4 = ju_TreeMap$TreeNode_forward($x0, $x1);
        var$3 = $x0;
        $x0 = var$4;
    }
    return var$3;
}
var otjde_EventListener = $rt_classWithoutFields(0);
function gpb_TileImageLoader() {
    var a = this; jl_Object.call(a);
    a.$elements = null;
    a.$loadedCount = 0;
    a.$required = 0;
    a.$observer2 = null;
}
function gpb_TileImageLoader_handleEvent$exported$0(var$0, var$1) {
    var var$2;
    var$2 = var$0.$loadedCount + 1 | 0;
    var$0.$loadedCount = var$2;
    if (var$2 == var$0.$required) {
        var$1 = var$0.$observer2;
        var$1.$tileImages = var$0.$elements;
        gpb_GameLoader_checkCompletion(var$1);
    }
}
function g_IrregularTileLayer() {
    jl_Object.call(this);
    this.$chunks = null;
}
var jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException);
function jl_IllegalArgumentException__init_(var_0) {
    var var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_0(var_1, var_0);
    return var_1;
}
function jl_IllegalArgumentException__init_0($this, $message) {
    jl_Throwable__init_($this, $message);
}
var jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException);
function ju_TreeMap$1() {
    jl_Object.call(this);
    this.$this$00 = null;
}
function ju_TreeMap$1_compare($this, $o1, $o2) {
    return $o1 === null ? jl_Integer_compareTo($o2, $o1) : jl_Integer_compareTo($o1, $o2);
}
function gm_Matrix() {
    var a = this; jl_Object.call(a);
    a.$width = 0;
    a.$height = 0;
    a.$values = null;
}
function gm_Matrix__init_(var_0, var_1) {
    var var_2 = new gm_Matrix();
    gm_Matrix__init_0(var_2, var_0, var_1);
    return var_2;
}
function gm_Matrix__init_0($this, $w, $h) {
    $this.$width = $w;
    $this.$height = $h;
    $this.$values = $rt_createLongArray($rt_imul($w, $h));
}
function gm_Matrix_getHeight($this) {
    return $this.$height;
}
function gm_Matrix_getValue($this, $x, $y) {
    return !gm_Matrix_inBounds($this, $x, $y) ? Long_ZERO : $this.$values.data[gm_Matrix_indexOf($this, $x, $y)];
}
function gm_Matrix_getWidth($this) {
    return $this.$width;
}
function gm_Matrix_setValue($this, $x, $y, $value) {
    if (gm_Matrix_inBounds($this, $x, $y))
        $this.$values.data[gm_Matrix_indexOf($this, $x, $y)] = $value;
}
function gm_Matrix_inBounds($this, $x, $y) {
    return $x < $this.$width && $y < $this.$height ? 1 : 0;
}
function gm_Matrix_indexOf($this, $x, $y) {
    return $rt_imul($y, $this.$width) + $x | 0;
}
var jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception);
var otpp_ResourceAccessor = $rt_classWithoutFields();
var otciu_UnicodeHelper = $rt_classWithoutFields();
function otciu_UnicodeHelper_decodeByte($c) {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
}
function gm_Polygon() {
    jl_Object.call(this);
    this.$points = null;
}
var jl_Double = $rt_classWithoutFields(jl_Number);
var jl_Double_NaN = 0.0;
var jl_Double_TYPE = null;
function jl_Double_parseDouble($string) {
    var $start, $end, $negative, $c, $mantissa, $exp, $hasOneDigit, var$9, $negativeExp, $numExp, var$12, var$13, var$14;
    if (jl_String_isEmpty($string)) {
        $string = new jl_NumberFormatException;
        jl_Exception__init_($string);
        $rt_throw($string);
    }
    $start = 0;
    $end = jl_String_length($string);
    while (true) {
        if (jl_String_charAt($string, $start) > 32) {
            while (jl_String_charAt($string, $end - 1 | 0) <= 32) {
                $end = $end + (-1) | 0;
            }
            $negative = 0;
            if (jl_String_charAt($string, $start) == 45) {
                $start = $start + 1 | 0;
                $negative = 1;
            } else if (jl_String_charAt($string, $start) == 43)
                $start = $start + 1 | 0;
            if ($start == $end) {
                $string = new jl_NumberFormatException;
                jl_Exception__init_($string);
                $rt_throw($string);
            }
            a: {
                $c = jl_String_charAt($string, $start);
                $mantissa = Long_ZERO;
                $exp = 0;
                $hasOneDigit = 0;
                if ($c != 46) {
                    $hasOneDigit = 1;
                    if ($c >= 48 && $c <= 57) {
                        b: {
                            while ($start < $end) {
                                if (jl_String_charAt($string, $start) != 48)
                                    break b;
                                $start = $start + 1 | 0;
                            }
                        }
                        while ($start < $end) {
                            var$9 = jl_String_charAt($string, $start);
                            if (var$9 < 48)
                                break a;
                            if (var$9 > 57)
                                break a;
                            if (Long_toNumber($mantissa) >= 1.0E17)
                                $exp = $exp + 1 | 0;
                            else
                                $mantissa = Long_add(Long_mul($mantissa, Long_fromInt(10)), Long_fromInt(var$9 - 48 | 0));
                            $start = $start + 1 | 0;
                        }
                    } else {
                        $string = new jl_NumberFormatException;
                        jl_Exception__init_($string);
                        $rt_throw($string);
                    }
                }
            }
            if ($start < $end && jl_String_charAt($string, $start) == 46) {
                $start = $start + 1 | 0;
                c: {
                    while (true) {
                        if ($start >= $end)
                            break c;
                        $negativeExp = jl_String_charAt($string, $start);
                        if ($negativeExp < 48)
                            break c;
                        if ($negativeExp > 57)
                            break;
                        if (Long_toNumber($mantissa) < 1.0E17) {
                            $mantissa = Long_add(Long_mul($mantissa, Long_fromInt(10)), Long_fromInt($negativeExp - 48 | 0));
                            $exp = $exp + (-1) | 0;
                        }
                        $start = $start + 1 | 0;
                        $hasOneDigit = 1;
                    }
                }
                if (!$hasOneDigit) {
                    $string = new jl_NumberFormatException;
                    jl_Exception__init_($string);
                    $rt_throw($string);
                }
            }
            if ($start < $end) {
                $negativeExp = jl_String_charAt($string, $start);
                if ($negativeExp != 101 && $negativeExp != 69) {
                    $string = new jl_NumberFormatException;
                    jl_Exception__init_($string);
                    $rt_throw($string);
                }
                var$9 = $start + 1 | 0;
                $negativeExp = 0;
                if (var$9 == $end) {
                    $string = new jl_NumberFormatException;
                    jl_Exception__init_($string);
                    $rt_throw($string);
                }
                if (jl_String_charAt($string, var$9) == 45) {
                    var$9 = var$9 + 1 | 0;
                    $negativeExp = 1;
                } else if (jl_String_charAt($string, var$9) == 43)
                    var$9 = var$9 + 1 | 0;
                $numExp = 0;
                $start = 0;
                d: {
                    while (true) {
                        if (var$9 >= $end)
                            break d;
                        $hasOneDigit = jl_String_charAt($string, var$9);
                        if ($hasOneDigit < 48)
                            break d;
                        if ($hasOneDigit > 57)
                            break;
                        $numExp = (10 * $numExp | 0) + ($hasOneDigit - 48 | 0) | 0;
                        $start = 1;
                        var$9 = var$9 + 1 | 0;
                    }
                }
                if (!$start) {
                    $string = new jl_NumberFormatException;
                    jl_Exception__init_($string);
                    $rt_throw($string);
                }
                if ($negativeExp)
                    $numExp =  -$numExp;
                $exp = $exp + $numExp | 0;
            }
            e: {
                var$9 = $rt_compare($exp, 308);
                if (var$9 <= 0) {
                    if (var$9)
                        break e;
                    if (Long_le($mantissa, new Long(2133831477, 4185580)))
                        break e;
                }
                return $negative ? (-Infinity) : Infinity;
            }
            if ($negative)
                $mantissa = Long_neg($mantissa);
            var$12 = Long_toNumber($mantissa);
            if ($exp >= 0)
                var$13 = 10.0;
            else {
                var$13 = 0.1;
                $exp =  -$exp;
            }
            var$14 = 1.0;
            while ($exp) {
                if ($exp % 2 | 0)
                    var$14 = var$14 * var$13;
                var$13 = var$13 * var$13;
                $exp = $exp / 2 | 0;
            }
            return var$12 * var$14;
        }
        $start = $start + 1 | 0;
        if ($start == $end)
            break;
    }
    $string = new jl_NumberFormatException;
    jl_Exception__init_($string);
    $rt_throw($string);
}
function jl_Double__clinit_() {
    jl_Double_NaN = NaN;
    jl_Double_TYPE = $rt_cls($rt_doublecls());
}
function otci_CharFlow() {
    var a = this; jl_Object.call(a);
    a.$characters0 = null;
    a.$pointer = 0;
}
var otci_Base46 = $rt_classWithoutFields();
function otci_Base46_decode($seq) {
    var $number, var$3, var$4, var$5, var$6, $result;
    $number = 0;
    var$3 = 1;
    while (true) {
        var$4 = $seq.$characters0.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        var$5 = var$4[var$5];
        var$6 = var$5 < 34 ? var$5 - 32 | 0 : var$5 >= 92 ? (var$5 - 32 | 0) - 2 | 0 : (var$5 - 32 | 0) - 1 | 0;
        $result = (var$6 % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul(var$3, var$6 / 2 | 0) | 0;
        var$3 = var$3 * 46 | 0;
        if (!$result)
            break;
    }
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result;
    return $result;
}
var jl_Math = $rt_classWithoutFields();
function jl_Math_min($a, $b) {
    if ($a < $b)
        $b = $a;
    return $b;
}
function jl_Math_max($a, $b) {
    if ($a > $b)
        $b = $a;
    return $b;
}
function jl_Math_min0($a, $b) {
    if ($a < $b)
        $b = $a;
    return $b;
}
function jl_Math_max0($a, $b) {
    if ($a > $b)
        $b = $a;
    return $b;
}
var ju_Arrays = $rt_classWithoutFields();
function ju_Arrays_copyOf0($array, $length) {
    var $result, var$4, $sz, $i;
    $array = $array.data;
    $result = $rt_createByteArray($length);
    var$4 = $result.data;
    $sz = jl_Math_min($length, $array.length);
    $i = 0;
    while ($i < $sz) {
        var$4[$i] = $array[$i];
        $i = $i + 1 | 0;
    }
    return $result;
}
function ju_Arrays_copyOf($original, $newLength) {
    var var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
}
function ju_Arrays_fill($a, $val) {
    var var$3, var$4, var$5, var$6;
    $a = $a.data;
    var$3 = 0;
    var$4 = $a.length;
    if (var$3 > var$4) {
        var$5 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    while (var$3 < var$4) {
        var$6 = var$3 + 1 | 0;
        $a[var$3] = $val;
        var$3 = var$6;
    }
}
var jl_System = $rt_classWithoutFields();
var jl_System_outCache = null;
var jl_System_errCache = null;
function jl_System_arraycopy($src, $srcPos, $dest, $destPos, $length) {
    var $srcType, $targetType, $srcArray, $i, var$10, var$11, var$12, var$13, var$14;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
            a: {
                b: {
                    if ($src !== $dest) {
                        $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                        $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                        if ($srcType !== null && $targetType !== null) {
                            if ($srcType === $targetType)
                                break b;
                            if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                $srcArray = $src;
                                $i = 0;
                                var$10 = $srcPos;
                                while ($i < $length) {
                                    var$11 = $srcArray.data;
                                    var$12 = var$10 + 1 | 0;
                                    var$13 = var$11[var$10];
                                    var$14 = $targetType.$platformClass;
                                    if (!(var$13 !== null && !(typeof var$13.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable(var$13.constructor, var$14) ? 1 : 0)) {
                                        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                        $src = new jl_ArrayStoreException;
                                        jl_Exception__init_($src);
                                        $rt_throw($src);
                                    }
                                    $i = $i + 1 | 0;
                                    var$10 = var$12;
                                }
                                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                return;
                            }
                            if (!jl_Class_isPrimitive($srcType))
                                break a;
                            if (jl_Class_isPrimitive($targetType))
                                break b;
                            else
                                break a;
                        }
                        $src = new jl_ArrayStoreException;
                        jl_Exception__init_($src);
                        $rt_throw($src);
                    }
                }
                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                return;
            }
            $src = new jl_ArrayStoreException;
            jl_Exception__init_($src);
            $rt_throw($src);
        }
        $src = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($src);
        $rt_throw($src);
    }
    $dest = new jl_NullPointerException;
    jl_Throwable__init_($dest, $rt_s(43));
    $rt_throw($dest);
}
function jl_System_doArrayCopy(var$1, var$2, var$3, var$4, var$5) {
    if (var$1 !== var$3 || var$4 < var$2) {
        for (var i = 0; i < var$5; i = (i + 1) | 0) {
            var$3.data[var$4++] = var$1.data[var$2++];
        }
    } else {
        var$2 = (var$2 + var$5) | 0;
        var$4 = (var$4 + var$5) | 0;
        for (var i = 0; i < var$5; i = (i + 1) | 0) {
            var$3.data[--var$4] = var$1.data[--var$2];
        }
    }
}
var g_RenderCommandVisitor = $rt_classWithoutFields(0);
var otjb_AnimationFrameCallback = $rt_classWithoutFields(0);
function gpb_GameView() {
    var a = this; jl_Object.call(a);
    a.$game1 = null;
    a.$canvas = null;
    a.$context = null;
    a.$images = null;
    a.$gameRenderer = null;
    a.$renderCmdQueue = null;
    a.$controlAxis = null;
    a.$keyReleaseListener = null;
    a.$keyPressListener = null;
    a.$lastTimestamp = 0.0;
}
function gpb_GameView_visit($this, $drawTileCommand) {
    var $targetArea, $tileID, $tileIndex, var$5, var$6, var$7;
    $targetArea = $drawTileCommand.$rect;
    $tileID = $drawTileCommand.$tileID;
    $tileIndex = Long_and(Long_sub($tileID, Long_fromInt(1)), new Long(536870911, 4294967295)).lo;
    $this.$context.save();
    $drawTileCommand = $this.$context;
    var$5 = $targetArea.$x1.$value;
    var$6 = $targetArea.$y1.$value;
    $drawTileCommand.translate(var$5, var$6);
    if (g_TileID_isFlippedHorizontally($tileID)) {
        $this.$context.scale((-1.0), 1.0);
        $drawTileCommand = $this.$context;
        var$5 =  -$targetArea.$w.$value;
        $drawTileCommand.translate(var$5, 0.0);
    }
    if (g_TileID_isFlippedHorizontally($tileID)) {
        $this.$context.scale(1.0, (-1.0));
        $drawTileCommand = $this.$context;
        var$6 =  -$targetArea.$h.$value;
        $drawTileCommand.translate(0.0, var$6);
    }
    if (Long_eq(Long_and($tileID, Long_fromInt(536870912)), Long_ZERO) ? 0 : 1) {
        $this.$context.rotate((-1.5707963267948966));
        $drawTileCommand = $this.$context;
        var$5 =  -$targetArea.$w.$value;
        $drawTileCommand.translate(var$5, 0.0);
    }
    $drawTileCommand = $this.$context;
    var$7 = ju_TreeMap_findExact($this.$images, jl_Integer_valueOf($tileIndex));
    var$7 = var$7 === null ? null : var$7.$value0;
    $drawTileCommand.drawImage(var$7, 0.0, 0.0);
    $this.$context.restore();
}
function gpb_GameView_onAnimationFrame$exported$0(var$0, var$1) {
    var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, var$16, var$17, var$18, var$19, var$20, var$21, var$22, var$23, var$24, var$25, var$26;
    var$2 = var$1;
    var$3 = var$0.$lastTimestamp;
    if (var$3 >= 0.0) {
        var$1 = var$0.$game1;
        var$4 = var$2 - var$3 | 0;
        var$5 = var$1.$playerVelocity;
        var$6 = 1.5 * var$4 / 1000.0;
        var$7 = gm_Vector__init_(var$5.$x0 * var$6, var$5.$y0 * var$6);
        var$1.$playerPosition = gm_Vector_sum(var$1.$playerPosition, var$7);
    }
    var$0.$lastTimestamp = var$2;
    var$1 = var$0.$gameRenderer;
    var$4 = var$0.$canvas.width;
    var$8 = var$0.$canvas.height;
    var$1.$xRes = var$4;
    var$1.$yRes = var$8;
    var$1 = var$0.$renderCmdQueue;
    var$5 = var$1.$commands;
    var$9 = var$5.$array;
    var$4 = 0;
    var$8 = var$5.$size;
    var$7 = null;
    if (var$4 > var$8) {
        var$1 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$1);
        $rt_throw(var$1);
    }
    while (var$4 < var$8) {
        var$10 = var$9.data;
        var$11 = var$4 + 1 | 0;
        var$10[var$4] = var$7;
        var$4 = var$11;
    }
    var$5.$size = 0;
    var$5 = var$0.$gameRenderer;
    var$7 = var$0.$game1;
    var$12 = var$7.$playerPosition;
    var$13 = ju_ArrayList_get(var$7.$tileMaps, 1);
    var$7 = new g_FillRectCommand;
    var$14 = ja_Color__init_(0, 0, 0, 0);
    var$15 = gm_Rect__init_(jl_Integer_valueOf(0), jl_Integer_valueOf(0), jl_Integer_valueOf(var$5.$xRes), jl_Integer_valueOf(var$5.$yRes));
    var$7.$color = var$14;
    var$7.$rect0 = var$15;
    g_RenderCommandQueue_add(var$1, var$7);
    var$11 = 0;
    while (true) {
        var$7 = var$13.$layers;
        if (var$11 >= var$7.$size)
            break;
        var$16 = ju_ArrayList_get(var$7, var$11);
        var$3 = var$12.$x0;
        var$17 = var$3 | 0;
        var$6 = var$12.$y0;
        var$18 = var$6 | 0;
        var$19 = 100.0 * var$3 | 0;
        var$20 = 100.0 * var$6 | 0;
        var$21 = ((var$5.$xRes + 99 | 0) / 100 | 0) + 1 | 0;
        var$22 = ((var$5.$yRes + 99 | 0) / 100 | 0) + 1 | 0;
        var$23 = 0;
        var$19 = var$19 % 100 | 0;
        var$24 = var$20 % 100 | 0;
        while (var$23 < var$22) {
            var$25 = 0;
            while (var$25 < var$21) {
                var$26 = gm_Matrix_getValue(var$16, var$25 + var$17 | 0, var$23 + var$18 | 0);
                if (Long_lt(var$26, Long_fromInt(1)) ? 0 : 1) {
                    var$8 = (100 * var$25 | 0) - var$19 | 0;
                    var$20 = (100 * var$23 | 0) - var$24 | 0;
                    var$7 = gm_Rect__init_(jl_Integer_valueOf(var$8), jl_Integer_valueOf(var$20), jl_Integer_valueOf(100), jl_Integer_valueOf(100));
                    var$14 = new g_DrawTileCommand;
                    var$14.$tileID = var$26;
                    var$14.$rect = var$7;
                    g_RenderCommandQueue_add(var$1, var$14);
                }
                var$25 = var$25 + 1 | 0;
            }
            var$23 = var$23 + 1 | 0;
        }
        var$11 = var$11 + 1 | 0;
    }
    var$1 = ju_AbstractList_iterator(var$0.$renderCmdQueue.$commands);
    while (ju_AbstractList$1_hasNext(var$1)) {
        (ju_AbstractList$1_next(var$1)).$accept(var$0);
    }
    window;
    requestAnimationFrame(otji_JS_function(var$0, "onAnimationFrame"));
}
var ju_Map$Entry = $rt_classWithoutFields(0);
function ju_AbstractMap$SimpleEntry() {
    var a = this; jl_Object.call(a);
    a.$key = null;
    a.$value0 = null;
}
function ju_AbstractMap$SimpleEntry_setValue($this, $value) {
    var $old;
    $old = $this.$value0;
    $this.$value0 = $value;
    return $old;
}
function ju_TreeMap$TreeNode() {
    var a = this; ju_AbstractMap$SimpleEntry.call(a);
    a.$left = null;
    a.$right = null;
    a.$height1 = 0;
    a.$size0 = 0;
}
function ju_TreeMap$TreeNode_factor($this) {
    var var$1, var$2;
    var$1 = $this.$right;
    var$2 = var$1 === null ? 0 : var$1.$height1;
    var$1 = $this.$left;
    return var$2 - (var$1 === null ? 0 : var$1.$height1) | 0;
}
function ju_TreeMap$TreeNode_rotateRight($this) {
    var $left;
    $left = $this.$left;
    $this.$left = $left.$right;
    $left.$right = $this;
    ju_TreeMap$TreeNode_fix($this);
    ju_TreeMap$TreeNode_fix($left);
    return $left;
}
function ju_TreeMap$TreeNode_rotateLeft($this) {
    var $right;
    $right = $this.$right;
    $this.$right = $right.$left;
    $right.$left = $this;
    ju_TreeMap$TreeNode_fix($this);
    ju_TreeMap$TreeNode_fix($right);
    return $right;
}
function ju_TreeMap$TreeNode_fix($this) {
    var var$1, var$2, var$3;
    var$1 = $this.$right;
    var$2 = var$1 === null ? 0 : var$1.$height1;
    var$1 = $this.$left;
    var$3 = var$1 === null ? 0 : var$1.$height1;
    $this.$height1 = jl_Math_max(var$2, var$3) + 1 | 0;
    $this.$size0 = 1;
    var$1 = $this.$left;
    if (var$1 !== null)
        $this.$size0 = 1 + var$1.$size0 | 0;
    var$1 = $this.$right;
    if (var$1 !== null)
        $this.$size0 = $this.$size0 + var$1.$size0 | 0;
}
function ju_TreeMap$TreeNode_forward($this, $reverse) {
    return $reverse ? $this.$right : $this.$left;
}
function ju_TreeMap$TreeNode_down($this, $reverse) {
    return $reverse ? $this.$left : $this.$right;
}
var ju_Set = $rt_classWithoutFields(0);
var ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection);
function ju_TreeMap$EntrySet() {
    var a = this; ju_AbstractSet.call(a);
    a.$modCount = 0;
    a.$owner = null;
    a.$from = null;
    a.$fromIncluded = 0;
    a.$fromChecked = 0;
    a.$to = null;
    a.$toIncluded = 0;
    a.$toChecked = 0;
    a.$reverse = 0;
}
function g_IrregularTileLayer$Chunk() {
    var a = this; jl_Object.call(a);
    a.$position = null;
    a.$tiles = null;
    a.$this$01 = null;
}
function g_IrregularTileLayer$Chunk__init_(var_0, var_1, var_2) {
    var var_3 = new g_IrregularTileLayer$Chunk();
    g_IrregularTileLayer$Chunk__init_0(var_3, var_0, var_1, var_2);
    return var_3;
}
function g_IrregularTileLayer$Chunk__init_0($this, var$1, $position, $tiles) {
    $this.$this$01 = var$1;
    $this.$position = $position;
    $this.$tiles = $tiles;
}
var ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException);
var jlr_Array = $rt_classWithoutFields();
function jlr_Array_getLength(var$1) {
    if (var$1 === null || var$1.constructor.$meta.item === undefined) {
        $rt_throw(jl_IllegalArgumentException__init_1());
    }
    return var$1.data.length;
}
function jlr_Array_newInstance($componentType, $length) {
    if ($componentType === null) {
        $componentType = new jl_NullPointerException;
        jl_Exception__init_($componentType);
        $rt_throw($componentType);
    }
    if ($componentType === $rt_cls($rt_voidcls())) {
        $componentType = new jl_IllegalArgumentException;
        jl_Exception__init_($componentType);
        $rt_throw($componentType);
    }
    if ($length >= 0)
        return jlr_Array_newInstanceImpl($componentType.$platformClass, $length);
    $componentType = new jl_NegativeArraySizeException;
    jl_Exception__init_($componentType);
    $rt_throw($componentType);
}
function jlr_Array_newInstanceImpl(var$1, var$2) {
    if (var$1.$meta.primitive) {
        if (var$1 == $rt_bytecls()) {
            return $rt_createByteArray(var$2);
        }
        if (var$1 == $rt_shortcls()) {
            return $rt_createShortArray(var$2);
        }
        if (var$1 == $rt_charcls()) {
            return $rt_createCharArray(var$2);
        }
        if (var$1 == $rt_intcls()) {
            return $rt_createIntArray(var$2);
        }
        if (var$1 == $rt_longcls()) {
            return $rt_createLongArray(var$2);
        }
        if (var$1 == $rt_floatcls()) {
            return $rt_createFloatArray(var$2);
        }
        if (var$1 == $rt_doublecls()) {
            return $rt_createDoubleArray(var$2);
        }
        if (var$1 == $rt_booleancls()) {
            return $rt_createBooleanArray(var$2);
        }
    } else {
        return $rt_createArray(var$1, var$2)
    }
}
var jl_AutoCloseable = $rt_classWithoutFields(0);
var ji_Closeable = $rt_classWithoutFields(0);
var ji_Flushable = $rt_classWithoutFields(0);
var ji_OutputStream = $rt_classWithoutFields();
function ji_OutputStream_write($this, $b, $off, $len) {
    var $i, var$5, var$6;
    $i = 0;
    while ($i < $len) {
        var$5 = $b.data;
        var$6 = $off + 1 | 0;
        $this.$write(var$5[$off]);
        $i = $i + 1 | 0;
        $off = var$6;
    }
}
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out = null;
}
function ji_PrintStream() {
    var a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$errorState = 0;
    a.$sb = null;
    a.$buffer0 = null;
    a.$charset = null;
}
function ji_PrintStream__init_(var_0, var_1) {
    var var_2 = new ji_PrintStream();
    ji_PrintStream__init_0(var_2, var_0, var_1);
    return var_2;
}
function ji_PrintStream__init_0($this, $out, $autoFlush) {
    var var$3, var$4, var$5;
    $this.$out = $out;
    $out = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($out);
    $this.$sb = $out;
    $this.$buffer0 = $rt_createCharArray(32);
    $this.$autoFlush = $autoFlush;
    $out = new jnci_UTF8Charset;
    var$3 = $rt_createArray(jl_String, 0);
    var$4 = var$3.data;
    jnc_Charset_checkCanonicalName($rt_s(44));
    $autoFlush = var$4.length;
    var$5 = 0;
    while (var$5 < $autoFlush) {
        jnc_Charset_checkCanonicalName(var$4[var$5]);
        var$5 = var$5 + 1 | 0;
    }
    $out.$canonicalName = $rt_s(44);
    $out.$aliases = var$3.$clone();
    $this.$charset = $out;
}
function ji_PrintStream_write($this, $b, $off, $len) {
    var var$4, $$je;
    var$4 = $this.$out;
    if (var$4 === null)
        $this.$errorState = 1;
    if (!($this.$errorState ? 0 : 1))
        return;
    a: {
        try {
            ji_OutputStream_write(var$4, $b, $off, $len);
            break a;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
            } else {
                throw $$e;
            }
        }
        $this.$errorState = 1;
    }
}
function ji_PrintStream_println($this, $s) {
    var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, $$je;
    jl_AbstractStringBuilder_append0(jl_StringBuilder_append($this.$sb, $s), 10);
    $s = $this.$sb;
    var$2 = $s.$length0;
    var$3 = $this.$buffer0;
    if (var$2 > var$3.data.length)
        var$3 = $rt_createCharArray(var$2);
    var$4 = 0;
    var$5 = 0;
    if (var$4 > var$2) {
        $s = new jl_IndexOutOfBoundsException;
        jl_Throwable__init_($s, $rt_s(45));
        $rt_throw($s);
    }
    while (var$4 < var$2) {
        var$6 = var$3.data;
        var$7 = var$5 + 1 | 0;
        var$8 = $s.$buffer.data;
        var$9 = var$4 + 1 | 0;
        var$6[var$5] = var$8[var$4];
        var$5 = var$7;
        var$4 = var$9;
    }
    var$6 = var$3.data;
    var$4 = var$2 - 0 | 0;
    var$10 = new jn_CharBufferOverArray;
    var$2 = var$6.length;
    var$4 = 0 + var$4 | 0;
    jn_Buffer__init_(var$10, var$2);
    var$10.$position0 = 0;
    var$10.$limit = var$4;
    var$10.$start3 = 0;
    var$10.$readOnly = 0;
    var$10.$array0 = var$3;
    var$3 = $rt_createByteArray(jl_Math_max(16, jl_Math_min(var$2, 1024)));
    var$4 = var$3.data.length;
    $s = new jn_ByteBufferImpl;
    var$7 = 0 + var$4 | 0;
    jn_Buffer__init_($s, var$4);
    $s.$order = jn_ByteOrder_BIG_ENDIAN;
    $s.$start4 = 0;
    $s.$array1 = var$3;
    $s.$position0 = 0;
    $s.$limit = var$7;
    $s.$direct = 0;
    $s.$readOnly0 = 0;
    var$11 = $this.$charset;
    var$12 = new jnci_UTF8Encoder;
    var$8 = $rt_createByteArray(1);
    var$6 = var$8.data;
    var$6[0] = 63;
    var$13 = jnc_CodingErrorAction_REPORT;
    var$12.$malformedAction = var$13;
    var$12.$unmappableAction = var$13;
    var$5 = var$6.length;
    if (var$5 && var$5 >= var$12.$maxBytesPerChar) {
        var$12.$charset0 = var$11;
        var$12.$replacement = var$8.$clone();
        var$12.$averageBytesPerChar = 2.0;
        var$12.$maxBytesPerChar = 4.0;
        var$11 = jnc_CodingErrorAction_REPLACE;
        if (var$11 === null) {
            var$11 = new jl_IllegalArgumentException;
            jl_Throwable__init_(var$11, $rt_s(46));
            $rt_throw(var$11);
        }
        var$12.$malformedAction = var$11;
        var$12.$unmappableAction = var$11;
        while (var$12.$status != 3) {
            var$12.$status = 2;
            a: {
                while (true) {
                    try {
                        var$11 = jnci_BufferedEncoder_encodeLoop(var$12, var$10, $s);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_RuntimeException) {
                            $s = $$je;
                            var$11 = new jnc_CoderMalfunctionError;
                            jl_Throwable__init_2(var$11, $s);
                            $rt_throw(var$11);
                        } else {
                            throw $$e;
                        }
                    }
                    if (var$11.$kind ? 0 : 1) {
                        var$4 = jn_Buffer_remaining(var$10);
                        if (var$4 <= 0)
                            break a;
                        var$11 = jnc_CoderResult_malformedForLength(var$4);
                    } else if (jnc_CoderResult_isOverflow(var$11))
                        break;
                    var$13 = !jnc_CoderResult_isUnmappable(var$11) ? var$12.$malformedAction : var$12.$unmappableAction;
                    b: {
                        if (var$13 !== jnc_CodingErrorAction_REPLACE) {
                            if (var$13 === jnc_CodingErrorAction_IGNORE)
                                break b;
                            else
                                break a;
                        }
                        var$4 = jn_Buffer_remaining($s);
                        var$6 = var$12.$replacement;
                        var$9 = var$6.data.length;
                        if (var$4 < var$9) {
                            var$11 = jnc_CoderResult_OVERFLOW;
                            break a;
                        }
                        jn_ByteBuffer_put($s, var$6, 0, var$9);
                    }
                    var$9 = var$10.$position0;
                    if (!(!jnc_CoderResult_isMalformed(var$11) && !jnc_CoderResult_isUnmappable(var$11) ? 0 : 1)) {
                        $s = new jl_UnsupportedOperationException;
                        jl_Exception__init_($s);
                        $rt_throw($s);
                    }
                    jn_CharBuffer_position(var$10, var$9 + var$11.$length1 | 0);
                }
            }
            var$4 = jnc_CoderResult_isOverflow(var$11);
            ji_PrintStream_write($this, var$3, 0, jn_Buffer_position($s));
            jn_ByteBuffer_clear($s);
            if (!var$4) {
                while (true) {
                    var$4 = var$12.$status;
                    if (var$4 != 2 && var$4 != 4) {
                        $s = new jl_IllegalStateException;
                        jl_Exception__init_($s);
                        $rt_throw($s);
                    }
                    var$11 = jnc_CoderResult_UNDERFLOW;
                    if (var$11 === var$11)
                        var$12.$status = 3;
                    var$5 = jnc_CoderResult_isOverflow(var$11);
                    ji_PrintStream_write($this, var$3, 0, $s.$position0);
                    jn_ByteBuffer_clear($s);
                    if (!var$5)
                        break;
                }
                jl_StringBuilder_setLength($this.$sb, 0);
                return;
            }
        }
        $s = new jl_IllegalStateException;
        jl_Exception__init_($s);
        $rt_throw($s);
    }
    $rt_throw(jl_IllegalArgumentException__init_($rt_s(47)));
}
var otcic_StderrOutputStream = $rt_classWithoutFields(ji_OutputStream);
var otcic_StderrOutputStream_INSTANCE = null;
function otcic_StderrOutputStream_write($this, $b) {
    $rt_putStderr($b);
}
function otcic_StderrOutputStream__clinit_() {
    otcic_StderrOutputStream_INSTANCE = new otcic_StderrOutputStream;
}
function gpb_ControlAxis() {
    var a = this; jl_Object.call(a);
    a.$x = 0.0;
    a.$y = 0.0;
}
function gpb_KeyListener() {
    var a = this; jl_Object.call(a);
    a.$game2 = null;
    a.$keyState = 0;
    a.$axis = null;
}
function gpb_KeyListener__init_(var_0, var_1, var_2) {
    var var_3 = new gpb_KeyListener();
    gpb_KeyListener__init_0(var_3, var_0, var_1, var_2);
    return var_3;
}
function gpb_KeyListener__init_0($this, $game, $axis, $keyState) {
    $this.$game2 = $game;
    $this.$keyState = $keyState;
    $this.$axis = $axis;
}
function gpb_KeyListener_handleEvent$exported$0(var$0, var$1) {
    var var$2, var$3, var$4, var$5;
    var$1 = var$1;
    a: {
        var$1 = var$1;
        var$2 = var$0.$axis;
        var$3 = var$2.$x;
        var$4 = var$2.$y;
        switch (var$1.keyCode) {
            case 37:
            case 65:
                var$3 = !var$0.$keyState ? 0.0 : (-1.0);
                break a;
            case 38:
            case 87:
                var$4 = !var$0.$keyState ? 0.0 : (-1.0);
                break a;
            case 39:
            case 68:
                var$3 = !var$0.$keyState ? 0.0 : 1.0;
                break a;
            case 40:
            case 83:
                var$4 = !var$0.$keyState ? 0.0 : 1.0;
                break a;
            default:
        }
    }
    var$1 = var$0.$axis;
    if (!(var$3 === var$1.$x && var$4 === var$1.$y)) {
        var$1.$x = var$3;
        var$1.$y = var$4;
        var$1 = var$0.$game2;
        if (jl_System_outCache === null)
            jl_System_outCache = ji_PrintStream__init_(otcic_StdoutOutputStream_INSTANCE, 0);
        var$5 = jl_System_outCache;
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        ji_PrintStream_println(var$5, jl_AbstractStringBuilder_toString(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(48)), var$3), $rt_s(49)), var$4)));
        var$1 = var$1.$playerVelocity;
        var$1.$x0 = var$3;
        var$1.$y0 = var$4;
    }
}
function g_GameRenderer() {
    var a = this; jl_Object.call(a);
    a.$xRes = 0;
    a.$yRes = 0;
}
function g_RenderCommandQueue() {
    jl_Object.call(this);
    this.$commands = null;
}
function g_RenderCommandQueue_add($this, $command) {
    ju_ArrayList_add($this.$commands, $command);
}
var jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException);
var jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException);
function jnc_Charset() {
    var a = this; jl_Object.call(a);
    a.$canonicalName = null;
    a.$aliases = null;
}
function jnc_Charset_checkCanonicalName($name) {
    var $i, $c;
    if (jl_String_isEmpty($name))
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    if (!jnc_Charset_isValidCharsetStart(jl_String_charAt($name, 0)))
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    $i = 1;
    while ($i < jl_String_length($name)) {
        a: {
            $c = jl_String_charAt($name, $i);
            switch ($c) {
                case 43:
                case 45:
                case 46:
                case 58:
                case 95:
                    break;
                default:
                    if (jnc_Charset_isValidCharsetStart($c))
                        break a;
                    else
                        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
            }
        }
        $i = $i + 1 | 0;
    }
}
function jnc_Charset_isValidCharsetStart($c) {
    a: {
        b: {
            if (!($c >= 48 && $c <= 57) && !($c >= 97 && $c <= 122)) {
                if ($c < 65)
                    break b;
                if ($c > 90)
                    break b;
            }
            $c = 1;
            break a;
        }
        $c = 0;
    }
    return $c;
}
var jnci_UTF8Charset = $rt_classWithoutFields(jnc_Charset);
function jnc_IllegalCharsetNameException() {
    jl_IllegalArgumentException.call(this);
    this.$charsetName = null;
}
function jnc_IllegalCharsetNameException__init_(var_0) {
    var var_1 = new jnc_IllegalCharsetNameException();
    jnc_IllegalCharsetNameException__init_0(var_1, var_0);
    return var_1;
}
function jnc_IllegalCharsetNameException__init_0($this, $charsetName) {
    jl_Exception__init_($this);
    $this.$charsetName = $charsetName;
}
function ju_TreeMap$EntryIterator() {
    var a = this; jl_Object.call(a);
    a.$modCount0 = 0;
    a.$owner0 = null;
    a.$path = null;
    a.$last = null;
    a.$to0 = null;
    a.$depth = 0;
    a.$reverse0 = 0;
}
function ju_TreeMap$EntryIterator__init_(var_0, var_1, var_2, var_3) {
    var var_4 = new ju_TreeMap$EntryIterator();
    ju_TreeMap$EntryIterator__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
}
function ju_TreeMap$EntryIterator__init_0($this, $owner, $path, $to, $reverse) {
    var var$5, var$6;
    $this.$owner0 = $owner;
    $this.$modCount0 = $owner.$modCount1;
    $owner = $owner.$root;
    var$5 = $owner !== null ? $owner.$height1 : 0;
    var$6 = $path.data;
    $this.$path = ju_Arrays_copyOf($path, var$5);
    $this.$depth = var$6.length;
    $this.$to0 = $to;
    $this.$reverse0 = $reverse;
}
function jn_Buffer() {
    var a = this; jl_Object.call(a);
    a.$capacity = 0;
    a.$position0 = 0;
    a.$limit = 0;
    a.$mark = 0;
}
function jn_Buffer__init_($this, $capacity) {
    $this.$mark = (-1);
    $this.$capacity = $capacity;
    $this.$limit = $capacity;
}
function jn_Buffer_position($this) {
    return $this.$position0;
}
function jn_Buffer_remaining($this) {
    return $this.$limit - $this.$position0 | 0;
}
function jn_Buffer_hasRemaining($this) {
    return $this.$position0 >= $this.$limit ? 0 : 1;
}
var jl_Readable = $rt_classWithoutFields(0);
var jn_CharBuffer = $rt_classWithoutFields(jn_Buffer);
function jn_CharBuffer_position($this, $newPosition) {
    var var$2, var$3;
    if ($newPosition >= 0 && $newPosition <= $this.$limit) {
        $this.$position0 = $newPosition;
        if ($newPosition < $this.$mark)
            $this.$mark = 0;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_Throwable__init_(var$2, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, $rt_s(50)), $newPosition), $rt_s(51)), $this.$limit), $rt_s(52))));
    $rt_throw(var$2);
}
function jn_ByteBuffer() {
    var a = this; jn_Buffer.call(a);
    a.$start4 = 0;
    a.$array1 = null;
    a.$order = null;
}
function jn_ByteBuffer_put($this, $src, $offset, $length) {
    var var$4, var$5, var$6, var$7, var$8, $pos, $i, var$11;
    if (!$length)
        return $this;
    if ($this.$readOnly0) {
        var$4 = new jn_ReadOnlyBufferException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if (jn_Buffer_remaining($this) < $length) {
        var$4 = new jn_BufferOverflowException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    if ($offset >= 0) {
        var$5 = $src.data;
        var$6 = var$5.length;
        if ($offset < var$6) {
            var$7 = $offset + $length | 0;
            if (var$7 > var$6) {
                var$8 = new jl_IndexOutOfBoundsException;
                var$4 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$4);
                jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(53)), var$7), $rt_s(54)), var$6)));
                $rt_throw(var$8);
            }
            if ($length < 0) {
                var$4 = new jl_IndexOutOfBoundsException;
                var$8 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$8);
                jl_Throwable__init_(var$4, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$8, $rt_s(55)), $length), $rt_s(56))));
                $rt_throw(var$4);
            }
            var$7 = $this.$position0;
            $pos = var$7 + $this.$start4 | 0;
            $i = 0;
            while ($i < $length) {
                $src = $this.$array1.data;
                var$11 = $pos + 1 | 0;
                var$6 = $offset + 1 | 0;
                $src[$pos] = var$5[$offset];
                $i = $i + 1 | 0;
                $pos = var$11;
                $offset = var$6;
            }
            $this.$position0 = var$7 + $length | 0;
            return $this;
        }
    }
    $src = $src.data;
    var$8 = new jl_IndexOutOfBoundsException;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_Throwable__init_(var$8, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(57)), $offset), $rt_s(51)), $src.length), $rt_s(17))));
    $rt_throw(var$8);
}
function jn_ByteBuffer_clear($this) {
    $this.$position0 = 0;
    $this.$limit = $this.$capacity;
    $this.$mark = (-1);
    return $this;
}
function jnc_CodingErrorAction() {
    jl_Object.call(this);
    this.$name1 = null;
}
var jnc_CodingErrorAction_IGNORE = null;
var jnc_CodingErrorAction_REPLACE = null;
var jnc_CodingErrorAction_REPORT = null;
function jnc_CodingErrorAction__init_(var_0) {
    var var_1 = new jnc_CodingErrorAction();
    jnc_CodingErrorAction__init_0(var_1, var_0);
    return var_1;
}
function jnc_CodingErrorAction__init_0($this, $name) {
    $this.$name1 = $name;
}
function jnc_CodingErrorAction__clinit_() {
    jnc_CodingErrorAction_IGNORE = jnc_CodingErrorAction__init_($rt_s(58));
    jnc_CodingErrorAction_REPLACE = jnc_CodingErrorAction__init_($rt_s(59));
    jnc_CodingErrorAction_REPORT = jnc_CodingErrorAction__init_($rt_s(60));
}
var jn_CharBufferImpl = $rt_classWithoutFields(jn_CharBuffer);
function jn_CharBufferOverArray() {
    var a = this; jn_CharBufferImpl.call(a);
    a.$readOnly = 0;
    a.$start3 = 0;
    a.$array0 = null;
}
function jnc_CharsetEncoder() {
    var a = this; jl_Object.call(a);
    a.$charset0 = null;
    a.$replacement = null;
    a.$averageBytesPerChar = 0.0;
    a.$maxBytesPerChar = 0.0;
    a.$malformedAction = null;
    a.$unmappableAction = null;
    a.$status = 0;
}
function jnc_CoderResult() {
    var a = this; jl_Object.call(a);
    a.$kind = 0;
    a.$length1 = 0;
}
var jnc_CoderResult_UNDERFLOW = null;
var jnc_CoderResult_OVERFLOW = null;
function jnc_CoderResult__init_(var_0, var_1) {
    var var_2 = new jnc_CoderResult();
    jnc_CoderResult__init_0(var_2, var_0, var_1);
    return var_2;
}
function jnc_CoderResult__init_0($this, $kind, $length) {
    $this.$kind = $kind;
    $this.$length1 = $length;
}
function jnc_CoderResult_isOverflow($this) {
    return $this.$kind != 1 ? 0 : 1;
}
function jnc_CoderResult_isMalformed($this) {
    return $this.$kind != 2 ? 0 : 1;
}
function jnc_CoderResult_isUnmappable($this) {
    return $this.$kind != 3 ? 0 : 1;
}
function jnc_CoderResult_malformedForLength($length) {
    return jnc_CoderResult__init_(2, $length);
}
function jnc_CoderResult__clinit_() {
    jnc_CoderResult_UNDERFLOW = jnc_CoderResult__init_(0, 0);
    jnc_CoderResult_OVERFLOW = jnc_CoderResult__init_(1, 0);
}
function jn_ByteBufferImpl() {
    var a = this; jn_ByteBuffer.call(a);
    a.$direct = 0;
    a.$readOnly0 = 0;
}
function jn_ByteOrder() {
    jl_Object.call(this);
    this.$name2 = null;
}
var jn_ByteOrder_BIG_ENDIAN = null;
var jn_ByteOrder_LITTLE_ENDIAN = null;
function jn_ByteOrder__init_(var_0) {
    var var_1 = new jn_ByteOrder();
    jn_ByteOrder__init_0(var_1, var_0);
    return var_1;
}
function jn_ByteOrder__init_0($this, $name) {
    $this.$name2 = $name;
}
function jn_ByteOrder__clinit_() {
    jn_ByteOrder_BIG_ENDIAN = jn_ByteOrder__init_($rt_s(61));
    jn_ByteOrder_LITTLE_ENDIAN = jn_ByteOrder__init_($rt_s(62));
}
var jnci_BufferedEncoder = $rt_classWithoutFields(jnc_CharsetEncoder);
function jnci_BufferedEncoder_encodeLoop($this, $in, $out) {
    var $inArray, var$4, $inPos, $inSize, $outArray, var$8, $i, $outSize, var$11, var$12, var$13, var$14, var$15, $controller;
    $inArray = $rt_createCharArray(jl_Math_min(jn_Buffer_remaining($in), 512));
    var$4 = $inArray.data;
    $inPos = 0;
    $inSize = 0;
    $outArray = $rt_createByteArray(jl_Math_min(jn_Buffer_remaining($out), 512));
    var$8 = $outArray.data;
    a: {
        b: {
            while (true) {
                if (($inPos + 32 | 0) > $inSize && jn_Buffer_hasRemaining($in)) {
                    $i = $inPos;
                    while ($i < $inSize) {
                        var$4[$i - $inPos | 0] = var$4[$i];
                        $i = $i + 1 | 0;
                    }
                    $outSize = $inSize - $inPos | 0;
                    $i = jn_Buffer_remaining($in) + $outSize | 0;
                    $inPos = var$4.length;
                    $inSize = jl_Math_min($i, $inPos);
                    var$11 = $inSize - $outSize | 0;
                    if ($outSize < 0)
                        break b;
                    if ($outSize >= $inPos)
                        break b;
                    $i = $outSize + var$11 | 0;
                    if ($i > $inPos) {
                        $in = new jl_IndexOutOfBoundsException;
                        $out = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_($out);
                        jl_Throwable__init_($in, jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append($out, $rt_s(63)), $i), $rt_s(54)), $inPos)));
                        $rt_throw($in);
                    }
                    if (jn_Buffer_remaining($in) < var$11)
                        break;
                    if (var$11 < 0) {
                        $in = new jl_IndexOutOfBoundsException;
                        $out = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_($out);
                        jl_Throwable__init_($in, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append($out, $rt_s(55)), var$11), $rt_s(56))));
                        $rt_throw($in);
                    }
                    $inPos = $in.$position0;
                    var$12 = 0;
                    var$13 = $inPos;
                    while (var$12 < var$11) {
                        var$14 = $outSize + 1 | 0;
                        $i = var$13 + 1 | 0;
                        var$4[$outSize] = $in.$array0.data[var$13 + $in.$start3 | 0];
                        var$12 = var$12 + 1 | 0;
                        $outSize = var$14;
                        var$13 = $i;
                    }
                    $in.$position0 = $inPos + var$11 | 0;
                    $inPos = 0;
                }
                if (!jn_Buffer_hasRemaining($out)) {
                    var$15 = !jn_Buffer_hasRemaining($in) && $inPos >= $inSize ? jnc_CoderResult_UNDERFLOW : jnc_CoderResult_OVERFLOW;
                    break a;
                }
                $outSize = jl_Math_min(jn_Buffer_remaining($out), var$8.length);
                $controller = new jnci_BufferedEncoder$Controller;
                $controller.$in = $in;
                $controller.$out0 = $out;
                var$15 = jnci_UTF8Encoder_arrayEncode($this, $inArray, $inPos, $inSize, $outArray, 0, $outSize, $controller);
                $inPos = $controller.$inPosition;
                if (var$15 === null && 0 == $controller.$outPosition)
                    var$15 = jnc_CoderResult_UNDERFLOW;
                jn_ByteBuffer_put($out, $outArray, 0, $controller.$outPosition);
                if (var$15 !== null)
                    break a;
            }
            $in = new jn_BufferUnderflowException;
            jl_Exception__init_($in);
            $rt_throw($in);
        }
        $out = new jl_IndexOutOfBoundsException;
        $in = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($in);
        jl_Throwable__init_($out, jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append($in, $rt_s(57)), $outSize), $rt_s(51)), $inPos), $rt_s(17))));
        $rt_throw($out);
    }
    jn_CharBuffer_position($in, $in.$position0 - ($inSize - $inPos | 0) | 0);
    return var$15;
}
var jnci_UTF8Encoder = $rt_classWithoutFields(jnci_BufferedEncoder);
function jnci_UTF8Encoder_arrayEncode($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) {
    var $result, var$9, var$10, $ch, $low, var$13, $codePoint;
    $result = null;
    a: {
        while ($inPos < $inSize) {
            if ($outPos >= $outSize) {
                var$9 = $inPos;
                break a;
            }
            var$10 = $inArray.data;
            var$9 = $inPos + 1 | 0;
            $ch = var$10[$inPos];
            if ($ch < 128) {
                var$10 = $outArray.data;
                $low = $outPos + 1 | 0;
                var$10[$outPos] = $ch << 24 >> 24;
            } else if ($ch < 2048) {
                if (($outPos + 2 | 0) > $outSize) {
                    var$9 = var$9 + (-1) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 2))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                $inPos = $outPos + 1 | 0;
                var$10[$outPos] = (192 | $ch >> 6) << 24 >> 24;
                $low = $inPos + 1 | 0;
                var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
            } else if (!jl_Character_isSurrogate($ch)) {
                if (($outPos + 3 | 0) > $outSize) {
                    var$9 = var$9 + (-1) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 3))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                var$13 = $outPos + 1 | 0;
                var$10[$outPos] = (224 | $ch >> 12) << 24 >> 24;
                $inPos = var$13 + 1 | 0;
                var$10[var$13] = (128 | $ch >> 6 & 63) << 24 >> 24;
                $low = $inPos + 1 | 0;
                var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
            } else {
                if (!jl_Character_isHighSurrogate($ch)) {
                    $result = jnc_CoderResult_malformedForLength(1);
                    break a;
                }
                if (var$9 >= $inSize) {
                    if (jn_Buffer_hasRemaining($controller.$in))
                        break a;
                    $result = jnc_CoderResult_UNDERFLOW;
                    break a;
                }
                $inPos = var$9 + 1 | 0;
                $low = var$10[var$9];
                if (!jl_Character_isLowSurrogate($low)) {
                    var$9 = $inPos + (-2) | 0;
                    $result = jnc_CoderResult_malformedForLength(1);
                    break a;
                }
                if (($outPos + 4 | 0) > $outSize) {
                    var$9 = $inPos + (-2) | 0;
                    if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 4))
                        break a;
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$10 = $outArray.data;
                $codePoint = jl_Character_toCodePoint($ch, $low);
                $low = $outPos + 1 | 0;
                var$10[$outPos] = (240 | $codePoint >> 18) << 24 >> 24;
                var$13 = $low + 1 | 0;
                var$10[$low] = (128 | $codePoint >> 12 & 63) << 24 >> 24;
                $outPos = var$13 + 1 | 0;
                var$10[var$13] = (128 | $codePoint >> 6 & 63) << 24 >> 24;
                $low = $outPos + 1 | 0;
                var$10[$outPos] = (128 | $codePoint & 63) << 24 >> 24;
                var$9 = $inPos;
            }
            $inPos = var$9;
            $outPos = $low;
        }
        var$9 = $inPos;
    }
    $controller.$inPosition = var$9;
    $controller.$outPosition = $outPos;
    return $result;
}
var ji_IOException = $rt_classWithoutFields(jl_Exception);
function jur_Pattern() {
    var a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags0 = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount = 0;
    a.$consCount = 0;
    a.$start = null;
}
function jur_Pattern_pattern($this) {
    return $this.$lexemes.$orig;
}
function jur_Pattern_processExpression($this, $ch, $newFlags, $last) {
    var $children, $saveFlags, $saveChangedFlags, $fSet, $child, var$9;
    $children = ju_ArrayList__init_();
    $saveFlags = $this.$flags0;
    $saveChangedFlags = 0;
    if ($newFlags != $saveFlags)
        $this.$flags0 = $newFlags;
    a: {
        switch ($ch) {
            case -1073741784:
                $fSet = new jur_NonCapFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -536870872:
            case -268435416:
                break;
            case -134217688:
            case -67108824:
                $fSet = new jur_BehindFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -33554392:
                $fSet = new jur_AtomicFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            default:
                $newFlags = $this.$globalGroupIndex + 1 | 0;
                $this.$globalGroupIndex = $newFlags;
                if ($last !== null)
                    $fSet = jur_FSet__init_0($newFlags);
                else {
                    $fSet = new jur_FinalSet;
                    jur_FSet__init_($fSet, 0);
                    $saveChangedFlags = 1;
                }
                $newFlags = $this.$globalGroupIndex;
                if ($newFlags <= (-1))
                    break a;
                if ($newFlags >= 10)
                    break a;
                $this.$backRefs.data[$newFlags] = $fSet;
                break a;
        }
        $fSet = new jur_AheadFSet;
        jur_FSet__init_($fSet, (-1));
    }
    while (true) {
        if (jur_Lexer_isLetter($this.$lexemes) && $this.$lexemes.$lookAhead == (-536870788)) {
            $last = jur_CharClass__init_(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
                $child = $this.$lexemes;
                var$9 = $child.$lookAhead;
                if (var$9 && var$9 != (-536870788) && var$9 != (-536870871))
                    break;
                jur_CharClass_add($last, jur_Lexer_next($child));
                $child = $this.$lexemes;
                if ($child.$ch != (-536870788))
                    continue;
                jur_Lexer_next($child);
            }
            $child = jur_Pattern_processRangeSet($this, $last);
            $child.$setNext($fSet);
        } else if ($this.$lexemes.$ch == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            jur_Lexer_next($this.$lexemes);
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            $last = $this.$lexemes;
            if ($last.$ch == (-536870788))
                jur_Lexer_next($last);
        }
        if ($child !== null)
            ju_ArrayList_add($children, $child);
        if (jur_Lexer_isEmpty($this.$lexemes))
            break;
        if ($this.$lexemes.$ch == (-536870871))
            break;
    }
    if ($this.$lexemes.$lookBack == (-536870788))
        ju_ArrayList_add($children, jur_EmptySet__init_($fSet));
    if ($this.$flags0 != $saveFlags && !$saveChangedFlags) {
        $this.$flags0 = $saveFlags;
        $last = $this.$lexemes;
        $last.$flags = $saveFlags;
        $last.$lookAhead = $last.$ch;
        $last.$lookAheadST = $last.$curST;
        var$9 = $last.$curToc;
        $last.$index0 = var$9 + 1 | 0;
        $last.$lookAheadToc = var$9;
        jur_Lexer_movePointer($last);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            $last = new jur_PositiveLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -268435416:
            $last = new jur_NegativeLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -134217688:
            $last = new jur_PositiveLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -67108824:
            $last = new jur_NegativeLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -33554392:
            $last = new jur_AtomicJointSet;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        default:
            switch ($children.$size) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_(ju_ArrayList_get($children, 0), $fSet);
                default:
                    return jur_JointSet__init_0($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    $last = new jur_NonCapJointSet;
    jur_JointSet__init_($last, $children, $fSet);
    return $last;
}
function jur_Pattern_processDecomposedChar($this) {
    var $codePoints, $curSymb, $curSymbIndex, $codePointsHangul, var$5, var$6, $readCodePoints;
    $codePoints = $rt_createIntArray(4);
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $codePointsHangul = $codePoints.data;
        $curSymb = jur_Lexer_next($this.$lexemes);
        $codePointsHangul[0] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        $codePoints = $codePointsHangul.data;
        $codePoints[0] = $curSymb & 65535;
        var$5 = $this.$lexemes;
        var$6 = var$5.$ch;
        $readCodePoints = var$6 - 4449 | 0;
        if ($readCodePoints >= 0 && $readCodePoints < 21) {
            $codePoints[1] = var$6 & 65535;
            jur_Lexer_next(var$5);
            var$5 = $this.$lexemes;
            var$6 = var$5.$ch;
            $curSymb = var$6 - 4519 | 0;
            if ($curSymb >= 0 && $curSymb < 28) {
                $codePoints[2] = var$6 & 65535;
                jur_Lexer_next(var$5);
                return jur_HangulDecomposedCharSet__init_($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_($codePointsHangul, 2);
        }
        if (!jur_Pattern_hasFlag($this, 2))
            return jur_CharSet__init_($codePoints[0]);
        if (jur_Pattern_hasFlag($this, 64))
            return jur_UCICharSet__init_($codePoints[0]);
        return jur_CICharSet__init_($codePoints[0]);
    }
    $codePointsHangul = $codePoints.data;
    $curSymb = 1;
    while ($curSymb < 4 && !jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $readCodePoints = $curSymb + 1 | 0;
        $codePointsHangul[$curSymb] = jur_Lexer_next($this.$lexemes);
        $curSymb = $readCodePoints;
    }
    if ($curSymb == 1) {
        $readCodePoints = $codePointsHangul[0];
        if (!(jur_Lexer_singleDecompTable.$get1($readCodePoints) == jur_Lexer_singleDecompTableSize ? 0 : 1))
            return jur_Pattern_processCharSet($this, $codePointsHangul[0]);
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_DecomposedCharSet__init_($codePoints, $curSymb);
    if (jur_Pattern_hasFlag($this, 64)) {
        var$5 = new jur_UCIDecomposedCharSet;
        jur_DecomposedCharSet__init_0(var$5, $codePoints, $curSymb);
        return var$5;
    }
    var$5 = new jur_CIDecomposedCharSet;
    jur_DecomposedCharSet__init_0(var$5, $codePoints, $curSymb);
    return var$5;
}
function jur_Pattern_processSubExpression($this, $last) {
    var $cur, $term, var$4, $next, var$6, var$7, var$8;
    if (jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead)) {
        if (jur_Pattern_hasFlag($this, 128)) {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!jur_Lexer_isEmpty($this.$lexemes)) {
                $term = $this.$lexemes;
                var$4 = $term.$ch;
                if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788) && !jur_Lexer_isLetter($term))
                    $cur = jur_Pattern_processQuantifier($this, $last, $cur);
            }
        } else if (!jur_Lexer_isHighSurrogate($this.$lexemes) && !jur_Lexer_isLowSurrogate($this.$lexemes)) {
            $next = new jl_StringBuffer;
            jl_AbstractStringBuilder__init_($next);
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isHighSurrogate($this.$lexemes) && !jur_Lexer_isLowSurrogate($this.$lexemes)) {
                if (!(!jur_Lexer_isNextSpecial($this.$lexemes) && !$this.$lexemes.$lookAhead) && !(!jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead))) {
                    var$6 = $this.$lexemes.$lookAhead;
                    if (var$6 != (-536870871) && (var$6 & (-2147418113)) != (-2147483608) && var$6 != (-536870788) && var$6 != (-536870876))
                        break;
                }
                var$4 = jur_Lexer_next($this.$lexemes);
                if (!jl_Character_isSupplementaryCodePoint(var$4))
                    jl_AbstractStringBuilder_append0($next, var$4 & 65535);
                else
                    jl_AbstractStringBuilder_append2($next, jl_Character_toChars(var$4));
            }
            if (!jur_Pattern_hasFlag($this, 2)) {
                $cur = new jur_SequenceSet;
                jur_LeafSet__init_($cur);
                $cur.$string0 = jl_AbstractStringBuilder_toString($next);
                var$4 = $next.$length0;
                $cur.$charCount = var$4;
                $cur.$leftToRight = jur_SequenceSet$IntHash__init_(var$4);
                $cur.$rightToLeft = jur_SequenceSet$IntHash__init_($cur.$charCount);
                var$7 = 0;
                while (var$7 < ($cur.$charCount - 1 | 0)) {
                    jur_SequenceSet$IntHash_put($cur.$leftToRight, jl_String_charAt($cur.$string0, var$7), ($cur.$charCount - var$7 | 0) - 1 | 0);
                    jur_SequenceSet$IntHash_put($cur.$rightToLeft, jl_String_charAt($cur.$string0, ($cur.$charCount - var$7 | 0) - 1 | 0), ($cur.$charCount - var$7 | 0) - 1 | 0);
                    var$7 = var$7 + 1 | 0;
                }
            } else if (jur_Pattern_hasFlag($this, 64))
                $cur = jur_UCISequenceSet__init_($next);
            else {
                $cur = new jur_CISequenceSet;
                jur_LeafSet__init_($cur);
                $cur.$string1 = jl_AbstractStringBuilder_toString($next);
                $cur.$charCount = $next.$length0;
            }
        } else
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
    } else {
        $term = $this.$lexemes;
        if ($term.$ch != (-536870871))
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
        else {
            if ($last instanceof jur_FinalSet)
                $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $term.$orig, jur_Lexer_getIndex($term)));
            $cur = jur_EmptySet__init_($last);
        }
    }
    a: {
        if (!jur_Lexer_isEmpty($this.$lexemes)) {
            var$4 = $this.$lexemes.$ch;
            if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788)) {
                $next = jur_Pattern_processSubExpression($this, $last);
                if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
                    var$8 = $cur;
                    if (!$next.$first(var$8.$innerSet)) {
                        $cur = new jur_UnifiedQuantifierSet;
                        jur_LeafQuantifierSet__init_($cur, var$8.$innerSet, var$8.$next1, var$8.$type);
                        $cur.$innerSet.$setNext($cur);
                    }
                }
                if (($next.$getType0() & 65535) != 43)
                    $cur.$setNext($next);
                else
                    $cur.$setNext($next.$innerSet);
                break a;
            }
        }
        if ($cur === null)
            return null;
        $cur.$setNext($last);
    }
    if (($cur.$getType0() & 65535) != 43)
        return $cur;
    return $cur.$innerSet;
}
function jur_Pattern_processQuantifier($this, $last, $term) {
    var $q, $quant, $leaf, var$6, $q_0;
    $q = $this.$lexemes;
    $quant = $q.$ch;
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                jur_Lexer_next($q);
                $q = new jur_PossessiveGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483605:
                jur_Lexer_next($q);
                $q = new jur_PosPlusGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-2147483606));
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483585:
                jur_Lexer_next($q);
                $q = new jur_PosAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483525:
                $leaf = new jur_PosCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                var$6 = $this.$compCount + 1 | 0;
                $this.$compCount = var$6;
                jur_CompositeGroupQuantifierSet__init_($leaf, $q, $term, $last, (-536870849), var$6);
                $term.$setNext(jur_FSet_posFSet);
                return $leaf;
            case -1073741782:
            case -1073741781:
                jur_Lexer_next($q);
                $q = new jur_ReluctantGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                jur_Lexer_next($q);
                $q = new jur_RelAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q_0 = new jur_RelCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            case -536870870:
            case -536870869:
                jur_Lexer_next($q);
                if ($term.$getType0() != (-2147483602)) {
                    $q = new jur_GroupQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else if (jur_Pattern_hasFlag($this, 32)) {
                    $q = new jur_DotAllQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else {
                    $q = new jur_DotQuantifierSet;
                    $leaf = jur_AbstractLineTerminator_getInstance($this.$flags0);
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                    $q.$lt = $leaf;
                }
                $term.$setNext($q);
                return $q;
            case -536870849:
                jur_Lexer_next($q);
                $q = new jur_AltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q_0 = new jur_CompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            jur_Lexer_next($q);
            $q = new jur_PossessiveQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -2147483585:
            jur_Lexer_next($q);
            $term = new jur_PossessiveAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-2147483585));
            return $term;
        case -2147483525:
            $term = new jur_PossessiveCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-2147483525));
            return $term;
        case -1073741782:
        case -1073741781:
            jur_Lexer_next($q);
            $q = new jur_ReluctantQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -1073741761:
            jur_Lexer_next($q);
            $term = new jur_ReluctantAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-1073741761));
            return $term;
        case -1073741701:
            $term = new jur_ReluctantCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-1073741701));
            return $term;
        case -536870870:
        case -536870869:
            jur_Lexer_next($q);
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -536870849:
            jur_Lexer_next($q);
            $term = new jur_AltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-536870849));
            return $term;
        case -536870789:
            return jur_CompositeQuantifierSet__init_0(jur_Lexer_nextSpecial($q), $leaf, $last, (-536870789));
        default:
    }
    return $term;
}
function jur_Pattern_processTerminal($this, $last) {
    var $term, var$3, var$4, $ch, $newFlags, $number, $negative, $cc;
    $term = null;
    var$3 = $last instanceof jur_FinalSet;
    while (true) {
        a: {
            var$4 = $this.$lexemes;
            $ch = var$4.$ch;
            if (($ch & (-2147418113)) == (-2147483608)) {
                jur_Lexer_next(var$4);
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags0 = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags0;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    var$4 = $this.$lexemes;
                    if (var$4.$ch != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), var$4.$orig, var$4.$curToc));
                    jur_Lexer_next(var$4);
                }
            } else {
                b: {
                    c: {
                        switch ($ch) {
                            case -2147483599:
                            case -2147483598:
                            case -2147483597:
                            case -2147483596:
                            case -2147483595:
                            case -2147483594:
                            case -2147483593:
                            case -2147483592:
                            case -2147483591:
                                break c;
                            case -2147483583:
                                break;
                            case -2147483582:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(0);
                                break a;
                            case -2147483577:
                                jur_Lexer_next(var$4);
                                $term = new jur_PreviousMatch;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -2147483558:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOLSet;
                                $number = $this.$consCount + 1 | 0;
                                $this.$consCount = $number;
                                jur_EOLSet__init_($term, $number);
                                break a;
                            case -2147483550:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(1);
                                break a;
                            case -2147483526:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOISet;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -536870876:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (jur_Pattern_hasFlag($this, 8)) {
                                    if (jur_Pattern_hasFlag($this, 1)) {
                                        $term = jur_UMultiLineEOLSet__init_($this.$consCount);
                                        break a;
                                    }
                                    $term = jur_MultiLineEOLSet__init_($this.$consCount);
                                    break a;
                                }
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UEOLSet__init_($this.$consCount);
                                    break a;
                                }
                                $term = jur_EOLSet__init_0($this.$consCount);
                                break a;
                            case -536870866:
                                jur_Lexer_next(var$4);
                                if (jur_Pattern_hasFlag($this, 32)) {
                                    $term = jur_DotAllSet__init_();
                                    break a;
                                }
                                $term = jur_DotSet__init_(jur_AbstractLineTerminator_getInstance($this.$flags0));
                                break a;
                            case -536870821:
                                jur_Lexer_next(var$4);
                                $negative = 0;
                                $term = $this.$lexemes;
                                if ($term.$ch == (-536870818)) {
                                    $negative = 1;
                                    jur_Lexer_next($term);
                                }
                                $term = jur_Pattern_processRangeSet($this, jur_Pattern_processRangeExpression($this, $negative));
                                $term.$setNext($last);
                                var$4 = $this.$lexemes;
                                if (var$4.$ch != (-536870819))
                                    $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), var$4.$orig, var$4.$curToc));
                                jur_Lexer_setMode(var$4, 1);
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            case -536870818:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (!jur_Pattern_hasFlag($this, 8)) {
                                    $term = new jur_SOLSet;
                                    jur_AbstractSet__init_($term);
                                    break a;
                                }
                                $term = new jur_MultiLineSOLSet;
                                var$4 = jur_AbstractLineTerminator_getInstance($this.$flags0);
                                jur_AbstractSet__init_($term);
                                $term.$lt0 = var$4;
                                break a;
                            case 0:
                                $cc = var$4.$curST;
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if (jur_Lexer_isEmpty(var$4)) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            default:
                                break b;
                        }
                        jur_Lexer_next(var$4);
                        $term = new jur_SOLSet;
                        jur_AbstractSet__init_($term);
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString(var$4), jur_Lexer_getIndex($this.$lexemes)));
                    jur_Lexer_next(var$4);
                    $this.$consCount = $this.$consCount + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_($number, $this.$consCount) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_($number, $this.$consCount) : jur_CIBackReferenceSet__init_($number, $this.$consCount);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !jur_Lexer_isSpecial(var$4)) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    jur_Lexer_next($this.$lexemes);
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        $last = new jur_PatternSyntaxException;
                        $term = !jur_Lexer_isSpecial($this.$lexemes) ? jl_Character_toString($ch & 65535) : $this.$lexemes.$curST.$toString();
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_($last, $term, var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    if (var$3) {
                        $last = new jur_PatternSyntaxException;
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_($last, $rt_s(4), var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
}
function jur_Pattern_processRangeExpression($this, $alt) {
    var $res, $buffer, $intersection, $notClosed, $firstInClass, $cs, $cur, $negative, $$je;
    $res = jur_CharClass__init_(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    jur_AbstractCharClass_setNegative($res, $alt);
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: while (true) {
                if (jur_Lexer_isEmpty($this.$lexemes))
                    break a;
                $cs = $this.$lexemes;
                $alt = $cs.$ch;
                $notClosed = $alt == (-536870819) && !$firstInClass ? 0 : 1;
                if (!$notClosed)
                    break a;
                d: {
                    switch ($alt) {
                        case -536870874:
                            if ($buffer >= 0)
                                jur_CharClass_add($res, $buffer);
                            $buffer = jur_Lexer_next($this.$lexemes);
                            $cs = $this.$lexemes;
                            if ($cs.$ch != (-536870874)) {
                                $buffer = 38;
                                break d;
                            }
                            if ($cs.$lookAhead == (-536870821)) {
                                jur_Lexer_next($cs);
                                $intersection = 1;
                                $buffer = (-1);
                                break d;
                            }
                            jur_Lexer_next($cs);
                            if ($firstInClass) {
                                $res = jur_Pattern_processRangeExpression($this, 0);
                                break d;
                            }
                            if ($this.$lexemes.$ch == (-536870819))
                                break d;
                            jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, 0));
                            break d;
                        case -536870867:
                            if (!$firstInClass) {
                                $alt = $cs.$lookAhead;
                                if ($alt != (-536870819) && $alt != (-536870821) && $buffer >= 0) {
                                    jur_Lexer_next($cs);
                                    $cs = $this.$lexemes;
                                    $cur = $cs.$ch;
                                    if (jur_Lexer_isSpecial($cs))
                                        break c;
                                    if ($cur < 0) {
                                        $negative = $this.$lexemes.$lookAhead;
                                        if ($negative != (-536870819) && $negative != (-536870821) && $buffer >= 0)
                                            break c;
                                    }
                                    e: {
                                        try {
                                            if (jur_Lexer_isLetter0($cur))
                                                break e;
                                            $cur = $cur & 65535;
                                            break e;
                                        } catch ($$e) {
                                            $$je = $rt_wrapException($$e);
                                            if ($$je instanceof jl_Exception) {
                                                break b;
                                            } else {
                                                throw $$e;
                                            }
                                        }
                                    }
                                    try {
                                        jur_CharClass_add0($res, $buffer, $cur);
                                    } catch ($$e) {
                                        $$je = $rt_wrapException($$e);
                                        if ($$je instanceof jl_Exception) {
                                            break b;
                                        } else {
                                            throw $$e;
                                        }
                                    }
                                    jur_Lexer_next($this.$lexemes);
                                    $buffer = (-1);
                                    break d;
                                }
                            }
                            if ($buffer >= 0)
                                jur_CharClass_add($res, $buffer);
                            $buffer = 45;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870821:
                            if ($buffer >= 0) {
                                jur_CharClass_add($res, $buffer);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            $negative = 0;
                            $cs = $this.$lexemes;
                            if ($cs.$ch == (-536870818)) {
                                jur_Lexer_next($cs);
                                $negative = 1;
                            }
                            if (!$intersection)
                                jur_CharClass_union($res, jur_Pattern_processRangeExpression($this, $negative));
                            else
                                jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870819:
                            if ($buffer >= 0)
                                jur_CharClass_add($res, $buffer);
                            $buffer = 93;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870818:
                            if ($buffer >= 0)
                                jur_CharClass_add($res, $buffer);
                            $buffer = 94;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case 0:
                            if ($buffer >= 0)
                                jur_CharClass_add($res, $buffer);
                            $cs = $this.$lexemes.$curST;
                            if ($cs === null)
                                $buffer = 0;
                            else {
                                jur_CharClass_add1($res, $cs);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        default:
                    }
                    if ($buffer >= 0)
                        jur_CharClass_add($res, $buffer);
                    $buffer = jur_Lexer_next($this.$lexemes);
                }
                $firstInClass = 0;
            }
            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
        }
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
    }
    if (!$notClosed) {
        if ($buffer >= 0)
            jur_CharClass_add($res, $buffer);
        return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Pattern_pattern($this), $this.$lexemes.$curToc - 1 | 0));
}
function jur_Pattern_processCharSet($this, $ch) {
    var $isSupplCodePoint, var$3, var$4;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if ($isSupplCodePoint) {
                var$3 = new jur_UCISupplCharSet;
                jur_LeafSet__init_(var$3);
                var$3.$charCount = 2;
                var$3.$ch0 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
                return var$3;
            }
            if (jur_Lexer_isLowSurrogate0($ch))
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            if (!jur_Lexer_isHighSurrogate0($ch))
                return jur_UCICharSet__init_($ch & 65535);
            return jur_HighSurrogateCharSet__init_($ch & 65535);
        }
    }
    if (!$isSupplCodePoint) {
        if (jur_Lexer_isLowSurrogate0($ch))
            return jur_LowSurrogateCharSet__init_($ch & 65535);
        if (!jur_Lexer_isHighSurrogate0($ch))
            return jur_CharSet__init_($ch & 65535);
        return jur_HighSurrogateCharSet__init_($ch & 65535);
    }
    var$3 = new jur_SupplCharSet;
    jur_LeafSet__init_(var$3);
    var$3.$charCount = 2;
    var$3.$ch1 = $ch;
    var$4 = (jl_Character_toChars($ch)).data;
    var$3.$high = var$4[0];
    var$3.$low = var$4[1];
    return var$3;
}
function jur_Pattern_processRangeSet($this, $charClass) {
    var $surrogates, $lowHighSurrRangeSet, var$4;
    if (!jur_AbstractCharClass_hasLowHighSurrogates($charClass)) {
        if (!$charClass.$mayContainSupplCodepoints) {
            if ($charClass.$hasUCI())
                return jur_UCIRangeSet__init_($charClass);
            return jur_RangeSet__init_($charClass);
        }
        if (!$charClass.$hasUCI())
            return jur_SupplRangeSet__init_($charClass);
        $surrogates = new jur_UCISupplRangeSet;
        jur_SupplRangeSet__init_0($surrogates, $charClass);
        return $surrogates;
    }
    $surrogates = jur_AbstractCharClass_getSurrogates($charClass);
    $lowHighSurrRangeSet = new jur_LowHighSurrogateRangeSet;
    jur_AbstractSet__init_($lowHighSurrRangeSet);
    $lowHighSurrRangeSet.$surrChars = $surrogates;
    $lowHighSurrRangeSet.$alt = $surrogates.$alt0;
    if (!$charClass.$mayContainSupplCodepoints) {
        if ($charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_RangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    }
    if (!$charClass.$hasUCI())
        return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    $surrogates = new jur_CompositeRangeSet;
    var$4 = new jur_UCISupplRangeSet;
    jur_SupplRangeSet__init_0(var$4, jur_AbstractCharClass_getWithoutSurrogates($charClass));
    jur_CompositeRangeSet__init_0($surrogates, var$4, $lowHighSurrRangeSet);
    return $surrogates;
}
function jur_Pattern_getSupplement($ch) {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
}
function jur_Pattern_hasFlag($this, $flag) {
    return ($this.$flags0 & $flag) != $flag ? 0 : 1;
}
var ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException);
var g_RenderCommand = $rt_classWithoutFields(0);
function g_FillRectCommand() {
    var a = this; jl_Object.call(a);
    a.$color = null;
    a.$rect0 = null;
}
function g_FillRectCommand_accept($this, $visitor) {
    var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$2 = $this.$color;
    var$3 = $this.$rect0;
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(var$4, $rt_s(64)), var$2.$r));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$4), $rt_s(49)));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, var$4), var$2.$g));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$4), $rt_s(49)));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, var$4), var$2.$b));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$4 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$5, var$4), $rt_s(49)));
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    var$5 = jl_AbstractStringBuilder_toString(jl_StringBuilder_append0(jl_StringBuilder_append(var$5, var$4), var$2.$a));
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$2, var$5), $rt_s(17)));
    $visitor = $visitor.$context;
    var$6 = var$3.$x1.$value;
    var$7 = var$3.$y1.$value;
    var$8 = var$3.$w.$value;
    var$9 = var$3.$h.$value;
    $visitor.fillRect(var$6, var$7, var$8, var$9);
}
function ja_Color() {
    var a = this; jl_Object.call(a);
    a.$r = 0;
    a.$g = 0;
    a.$b = 0;
    a.$a = 0;
}
var ja_Color_BLACK = null;
var ja_Color_WHITE = null;
function ja_Color__init_0(var_0, var_1, var_2) {
    var var_3 = new ja_Color();
    ja_Color__init_1(var_3, var_0, var_1, var_2);
    return var_3;
}
function ja_Color__init_(var_0, var_1, var_2, var_3) {
    var var_4 = new ja_Color();
    ja_Color__init_2(var_4, var_0, var_1, var_2, var_3);
    return var_4;
}
function ja_Color__init_1($this, $r, $g, $b) {
    ja_Color__init_2($this, $r, $g, $b, 255);
}
function ja_Color__init_2($this, $r, $g, $b, $a) {
    $this.$r = $r;
    $this.$g = $g;
    $this.$b = $b;
    $this.$a = $a;
}
function ja_Color__clinit_() {
    ja_Color_BLACK = ja_Color__init_0(0, 0, 0);
    ja_Color_WHITE = ja_Color__init_0(255, 255, 255);
}
function gm_Rect() {
    var a = this; jl_Object.call(a);
    a.$x1 = null;
    a.$y1 = null;
    a.$w = null;
    a.$h = null;
}
function gm_Rect__init_(var_0, var_1, var_2, var_3) {
    var var_4 = new gm_Rect();
    gm_Rect__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
}
function gm_Rect__init_0($this, $x, $y, $w, $h) {
    $this.$x1 = $x;
    $this.$y1 = $y;
    $this.$w = $w;
    $this.$h = $h;
}
var g_TileID = $rt_classWithoutFields();
function g_TileID_isFlippedHorizontally($tileID) {
    return Long_eq(Long_and($tileID, new Long(2147483648, 0)), Long_ZERO) ? 0 : 1;
}
function g_DrawTileCommand() {
    var a = this; jl_Object.call(a);
    a.$tileID = Long_ZERO;
    a.$rect = null;
}
function g_DrawTileCommand_accept($this, $visitor) {
    gpb_GameView_visit($visitor, $this);
}
var otcic_StdoutOutputStream = $rt_classWithoutFields(ji_OutputStream);
var otcic_StdoutOutputStream_INSTANCE = null;
function otcic_StdoutOutputStream_write($this, $b) {
    $rt_putStdout($b);
}
function otcic_StdoutOutputStream__clinit_() {
    otcic_StdoutOutputStream_INSTANCE = new otcic_StdoutOutputStream;
}
function jur_AbstractSet() {
    var a = this; jl_Object.call(a);
    a.$next1 = null;
    a.$isSecondPassVisited = 0;
    a.$index1 = null;
    a.$type = 0;
}
var jur_AbstractSet_counter = 0;
function jur_AbstractSet__init_($this) {
    var var$1, var$2;
    var$1 = new jl_Integer;
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    jl_Integer__init_0(var$1, var$2);
    $this.$index1 = jl_Integer_toString(var$1);
}
function jur_AbstractSet__init_0($this, $n) {
    var var$2, var$3;
    var$2 = new jl_Integer;
    var$3 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$3 + 1 | 0;
    jl_Integer__init_0(var$2, var$3);
    $this.$index1 = jl_Integer_toString(var$2);
    $this.$next1 = $n;
}
function jur_AbstractSet_find($this, $stringIndex, $testString, $matchResult) {
    var $length;
    $length = $matchResult.$rightBound0;
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
}
function jur_AbstractSet_findBack($this, $stringIndex, $startSearch, $testString, $matchResult) {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
}
function jur_AbstractSet_setType($this, $type) {
    $this.$type = $type;
}
function jur_AbstractSet_getType($this) {
    return $this.$type;
}
function jur_AbstractSet_getNext($this) {
    return $this.$next1;
}
function jur_AbstractSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_AbstractSet_first($this, $set) {
    return 1;
}
function jur_AbstractSet_processBackRefReplacement($this) {
    return null;
}
function jur_AbstractSet_processSecondPass($this) {
    var $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next1.$isSecondPassVisited = 1;
                $this.$next1 = $set;
            }
            $this.$next1.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$next1 = $set.$next1;
    }
}
function jur_AbstractSet__clinit_() {
    jur_AbstractSet_counter = 1;
}
function jur_FSet() {
    var a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex = 0;
}
var jur_FSet_posFSet = null;
function jur_FSet__init_0(var_0) {
    var var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
}
function jur_FSet__init_($this, $groupIndex) {
    jur_AbstractSet__init_($this);
    $this.$groupIndex = $groupIndex;
}
function jur_FSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $end, $shift;
    $end = jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex, $stringIndex);
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex, $end);
    return $shift;
}
function jur_FSet_getGroupIndex($this) {
    return $this.$groupIndex;
}
function jur_FSet_hasConsumed($this, $mr) {
    return 0;
}
function jur_FSet__clinit_() {
    var var$1;
    var$1 = new jur_FSet$PossessiveFSet;
    jur_AbstractSet__init_(var$1);
    jur_FSet_posFSet = var$1;
}
function jur_Lexer() {
    var a = this; jl_Object.call(a);
    a.$pattern = null;
    a.$flags = 0;
    a.$mode = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead = 0;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index0 = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
var jur_Lexer_decompTable = null;
var jur_Lexer_singleDecompTable = null;
var jur_Lexer_singleDecompTableSize = 0;
function jur_Lexer_setMode($this, $mode) {
    if ($mode > 0 && $mode < 3)
        $this.$mode = $mode;
    if ($mode == 1) {
        $this.$lookAhead = $this.$ch;
        $this.$lookAheadST = $this.$curST;
        $this.$index0 = $this.$lookAheadToc;
        $this.$lookAheadToc = $this.$curToc;
        jur_Lexer_movePointer($this);
    }
}
function jur_Lexer_isSpecial($this) {
    return $this.$curST === null ? 0 : 1;
}
function jur_Lexer_isNextSpecial($this) {
    return $this.$lookAheadST === null ? 0 : 1;
}
function jur_Lexer_next($this) {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
}
function jur_Lexer_nextSpecial($this) {
    var $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
}
function jur_Lexer_movePointer($this) {
    var $reread, $nonCap, var$3, $behind, $mod, $cs, $negative, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index0;
    while (true) {
        $reread = 0;
        $nonCap = $this.$index0 >= $this.$pattern.data.length ? 0 : jur_Lexer_nextCodePoint($this);
        $this.$lookAhead = $nonCap;
        $this.$lookAheadST = null;
        if ($this.$mode == 4) {
            if ($nonCap != 92)
                return;
            $nonCap = $this.$index0;
            var$3 = $this.$pattern.data;
            $nonCap = $nonCap >= var$3.length ? 0 : var$3[jur_Lexer_nextIndex($this)];
            $this.$lookAhead = $nonCap;
            switch ($nonCap) {
                case 69:
                    break;
                default:
                    $this.$lookAhead = 92;
                    $this.$index0 = $this.$prevNW;
                    return;
            }
            $this.$mode = $this.$savedMode;
            $this.$lookAhead = $this.$index0 > ($this.$pattern.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
        }
        a: {
            $nonCap = $this.$lookAhead;
            if ($nonCap != 92) {
                $behind = $this.$mode;
                if ($behind == 1)
                    switch ($nonCap) {
                        case 36:
                            $this.$lookAhead = (-536870876);
                            break a;
                        case 40:
                            if ($this.$pattern.data[$this.$index0] != 63) {
                                $this.$lookAhead = (-2147483608);
                                break a;
                            }
                            jur_Lexer_nextIndex($this);
                            $nonCap = $this.$pattern.data[$this.$index0];
                            $behind = 0;
                            while (true) {
                                b: {
                                    if ($behind) {
                                        $behind = 0;
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 61:
                                                $this.$lookAhead = (-134217688);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString($this), $this.$index0));
                                        }
                                        $this.$lookAhead = (-67108824);
                                        jur_Lexer_nextIndex($this);
                                    } else {
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 60:
                                                jur_Lexer_nextIndex($this);
                                                $nonCap = $this.$pattern.data[$this.$index0];
                                                $behind = 1;
                                                break b;
                                            case 61:
                                                $this.$lookAhead = (-536870872);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            case 62:
                                                $this.$lookAhead = (-33554392);
                                                jur_Lexer_nextIndex($this);
                                                break b;
                                            default:
                                                $mod = jur_Lexer_readFlags($this);
                                                $this.$lookAhead = $mod;
                                                if ($mod < 256) {
                                                    $this.$flags = $mod;
                                                    $mod = $mod << 16;
                                                    $this.$lookAhead = $mod;
                                                    $this.$lookAhead = (-1073741784) | $mod;
                                                    break b;
                                                }
                                                $mod = $mod & 255;
                                                $this.$lookAhead = $mod;
                                                $this.$flags = $mod;
                                                $mod = $mod << 16;
                                                $this.$lookAhead = $mod;
                                                $this.$lookAhead = (-16777176) | $mod;
                                                break b;
                                        }
                                        $this.$lookAhead = (-268435416);
                                        jur_Lexer_nextIndex($this);
                                    }
                                }
                                if (!$behind)
                                    break;
                            }
                            break a;
                        case 41:
                            $this.$lookAhead = (-536870871);
                            break a;
                        case 42:
                        case 43:
                        case 63:
                            $behind = $this.$index0;
                            var$3 = $this.$pattern.data;
                            switch ($behind >= var$3.length ? 42 : var$3[$behind]) {
                                case 43:
                                    $this.$lookAhead = $nonCap | (-2147483648);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                case 63:
                                    $this.$lookAhead = $nonCap | (-1073741824);
                                    jur_Lexer_nextIndex($this);
                                    break a;
                                default:
                            }
                            $this.$lookAhead = $nonCap | (-536870912);
                            break a;
                        case 46:
                            $this.$lookAhead = (-536870866);
                            break a;
                        case 91:
                            $this.$lookAhead = (-536870821);
                            jur_Lexer_setMode($this, 2);
                            break a;
                        case 93:
                            if ($behind != 2)
                                break a;
                            $this.$lookAhead = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead = (-536870818);
                            break a;
                        case 123:
                            $this.$lookAheadST = jur_Lexer_processQuantifier($this, $nonCap);
                            break a;
                        case 124:
                            $this.$lookAhead = (-536870788);
                            break a;
                        default:
                    }
                else if ($behind == 2)
                    switch ($nonCap) {
                        case 38:
                            $this.$lookAhead = (-536870874);
                            break a;
                        case 45:
                            $this.$lookAhead = (-536870867);
                            break a;
                        case 91:
                            $this.$lookAhead = (-536870821);
                            break a;
                        case 93:
                            $this.$lookAhead = (-536870819);
                            break a;
                        case 94:
                            $this.$lookAhead = (-536870818);
                            break a;
                        default:
                    }
            } else {
                $nonCap = $this.$index0 >= ($this.$pattern.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                c: {
                    $this.$lookAhead = $nonCap;
                    switch ($nonCap) {
                        case -1:
                            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString($this), $this.$index0));
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                        case 41:
                        case 42:
                        case 43:
                        case 44:
                        case 45:
                        case 46:
                        case 47:
                        case 58:
                        case 59:
                        case 60:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 91:
                        case 92:
                        case 93:
                        case 94:
                        case 95:
                        case 96:
                        case 118:
                            break;
                        case 48:
                            $this.$lookAhead = jur_Lexer_readOctals($this);
                            break a;
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            if ($this.$mode != 1)
                                break a;
                            $this.$lookAhead = (-2147483648) | $nonCap;
                            break a;
                        case 65:
                            $this.$lookAhead = (-2147483583);
                            break a;
                        case 66:
                            $this.$lookAhead = (-2147483582);
                            break a;
                        case 67:
                        case 69:
                        case 70:
                        case 72:
                        case 73:
                        case 74:
                        case 75:
                        case 76:
                        case 77:
                        case 78:
                        case 79:
                        case 82:
                        case 84:
                        case 85:
                        case 86:
                        case 88:
                        case 89:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 107:
                        case 108:
                        case 109:
                        case 111:
                        case 113:
                        case 121:
                            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString($this), $this.$index0));
                        case 68:
                        case 83:
                        case 87:
                        case 100:
                        case 115:
                        case 119:
                            $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_1($this.$pattern, $this.$prevNW, 1), 0);
                            $this.$lookAhead = 0;
                            break a;
                        case 71:
                            $this.$lookAhead = (-2147483577);
                            break a;
                        case 80:
                        case 112:
                            break c;
                        case 81:
                            $this.$savedMode = $this.$mode;
                            $this.$mode = 4;
                            $reread = 1;
                            break a;
                        case 90:
                            $this.$lookAhead = (-2147483558);
                            break a;
                        case 97:
                            $this.$lookAhead = 7;
                            break a;
                        case 98:
                            $this.$lookAhead = (-2147483550);
                            break a;
                        case 99:
                            $nonCap = $this.$index0;
                            var$3 = $this.$pattern.data;
                            if ($nonCap >= (var$3.length - 2 | 0))
                                $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString($this), $this.$index0));
                            $this.$lookAhead = var$3[jur_Lexer_nextIndex($this)] & 31;
                            break a;
                        case 101:
                            $this.$lookAhead = 27;
                            break a;
                        case 102:
                            $this.$lookAhead = 12;
                            break a;
                        case 110:
                            $this.$lookAhead = 10;
                            break a;
                        case 114:
                            $this.$lookAhead = 13;
                            break a;
                        case 116:
                            $this.$lookAhead = 9;
                            break a;
                        case 117:
                            $this.$lookAhead = jur_Lexer_readHex($this, 4);
                            break a;
                        case 120:
                            $this.$lookAhead = jur_Lexer_readHex($this, 2);
                            break a;
                        case 122:
                            $this.$lookAhead = (-2147483526);
                            break a;
                        default:
                    }
                    break a;
                }
                $cs = jur_Lexer_parseCharClassName($this);
                $negative = 0;
                if ($this.$lookAhead == 80)
                    $negative = 1;
                try {
                    $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof ju_MissingResourceException) {
                        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), jur_Lexer_toString($this), $this.$index0));
                    } else {
                        throw $$e;
                    }
                }
                $this.$lookAhead = 0;
            }
        }
        if ($reread)
            continue;
        else
            break;
    }
}
function jur_Lexer_parseCharClassName($this) {
    var $sb, $ch, var$3, var$4, $res;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_2($sb, 10);
    $ch = $this.$index0;
    var$3 = $this.$pattern.data;
    if ($ch < (var$3.length - 2 | 0)) {
        if (var$3[$ch] != 123) {
            $sb = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($sb);
            return jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append($sb, $rt_s(65)), jl_String__init_1($this.$pattern, jur_Lexer_nextIndex($this), 1)));
        }
        jur_Lexer_nextIndex($this);
        $ch = 0;
        a: {
            while (true) {
                var$4 = $this.$index0;
                var$3 = $this.$pattern.data;
                if (var$4 >= (var$3.length - 2 | 0))
                    break;
                $ch = var$3[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break a;
                jl_AbstractStringBuilder_append0($sb, $ch);
            }
        }
        if ($ch != 125)
            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    }
    if (!$sb.$length0)
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    $res = jl_AbstractStringBuilder_toString($sb);
    if (jl_String_length($res) == 1) {
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        return jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append($sb, $rt_s(65)), $res));
    }
    b: {
        c: {
            if (jl_String_length($res) > 3) {
                if (jl_String_startsWith0($res, $rt_s(65)))
                    break c;
                if (jl_String_startsWith0($res, $rt_s(66)))
                    break c;
            }
            break b;
        }
        $res = jl_String_substring0($res, 2);
    }
    return $res;
}
function jur_Lexer_processQuantifier($this, $ch) {
    var $sb, $min, $max, $mod, var$6, $$je;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_2($sb, 4);
    $min = (-1);
    $max = 2147483647;
    a: {
        while (true) {
            $mod = $this.$index0;
            var$6 = $this.$pattern.data;
            if ($mod >= var$6.length)
                break a;
            $ch = var$6[jur_Lexer_nextIndex($this)];
            if ($ch == 125)
                break a;
            if ($ch == 44 && $min < 0)
                try {
                    $min = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                    jl_StringBuilder_delete($sb, 0, jl_StringBuilder_length($sb));
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            jl_AbstractStringBuilder_append0($sb, $ch & 65535);
        }
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    }
    if ($ch != 125)
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    if ($sb.$length0 > 0)
        b: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                if ($min >= 0)
                    break b;
                $min = $max;
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                } else {
                    throw $$e;
                }
            }
            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
        }
    else if ($min < 0)
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    if (($min | $max | ($max - $min | 0)) < 0)
        $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
    $ch = $this.$index0;
    var$6 = $this.$pattern.data;
    $mod = $ch >= var$6.length ? 42 : var$6[$ch];
    c: {
        switch ($mod) {
            case 43:
                $this.$lookAhead = (-2147483525);
                jur_Lexer_nextIndex($this);
                break c;
            case 63:
                $this.$lookAhead = (-1073741701);
                jur_Lexer_nextIndex($this);
                break c;
            default:
        }
        $this.$lookAhead = (-536870789);
    }
    $sb = new jur_Quantifier;
    $sb.$min1 = $min;
    $sb.$max1 = $max;
    return $sb;
}
function jur_Lexer_toString($this) {
    return $this.$orig;
}
function jur_Lexer_isEmpty($this) {
    return !$this.$ch && !$this.$lookAhead && $this.$index0 == $this.$patternFullLength && !jur_Lexer_isSpecial($this) ? 1 : 0;
}
function jur_Lexer_isLetter0($ch) {
    return $ch < 0 ? 0 : 1;
}
function jur_Lexer_isLetter($this) {
    return !jur_Lexer_isEmpty($this) && !jur_Lexer_isSpecial($this) && jur_Lexer_isLetter0($this.$ch) ? 1 : 0;
}
function jur_Lexer_isHighSurrogate($this) {
    var var$1;
    var$1 = $this.$ch;
    return var$1 <= 56319 && var$1 >= 55296 ? 1 : 0;
}
function jur_Lexer_isLowSurrogate($this) {
    var var$1;
    var$1 = $this.$ch;
    return var$1 <= 57343 && var$1 >= 56320 ? 1 : 0;
}
function jur_Lexer_isHighSurrogate0($ch) {
    return $ch <= 56319 && $ch >= 55296 ? 1 : 0;
}
function jur_Lexer_isLowSurrogate0($ch) {
    return $ch <= 57343 && $ch >= 56320 ? 1 : 0;
}
function jur_Lexer_readHex($this, $max) {
    var $st, $length, $i, var$5, $$je;
    $st = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_2($st, $max);
    $length = $this.$pattern.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index0 >= $length)
            break;
        jl_AbstractStringBuilder_append0($st, $this.$pattern.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    if (!var$5)
        a: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($st), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return $max;
        }
    $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
}
function jur_Lexer_readOctals($this) {
    var $max, $i, var$3, $length, $res, var$6;
    $max = 3;
    $i = 1;
    var$3 = $this.$pattern.data;
    $length = var$3.length - 2 | 0;
    $res = jl_Character_digit(var$3[$this.$index0], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    var$6 = $this.$index0;
                    if (var$6 >= $length)
                        break a;
                    var$6 = jl_Character_digit($this.$pattern.data[var$6], 8);
                    if (var$6 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$6 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, $this.$index0));
}
function jur_Lexer_readFlags($this) {
    var $pos, $res, var$3, var$4;
    $pos = 1;
    $res = $this.$flags;
    a: while (true) {
        var$3 = $this.$index0;
        var$4 = $this.$pattern.data;
        if (var$3 >= var$4.length)
            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, var$3));
        b: {
            c: {
                switch (var$4[var$3]) {
                    case 41:
                        jur_Lexer_nextIndex($this);
                        return $res | 256;
                    case 45:
                        if (!$pos)
                            $rt_throw(jur_PatternSyntaxException__init_0($rt_s(4), $this.$orig, var$3));
                        $pos = 0;
                        break b;
                    case 58:
                        break a;
                    case 100:
                        break c;
                    case 105:
                        $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                        break b;
                    case 109:
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    case 115:
                        $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                        break b;
                    case 117:
                        $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                        break b;
                    case 120:
                        $res = $pos ? $res | 4 : ($res ^ 4) & $res;
                        break b;
                    default:
                }
                break b;
            }
            $res = $pos ? $res | 1 : ($res ^ 1) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
}
function jur_Lexer_nextIndex($this) {
    var var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$index0;
    $this.$prevNW = var$1;
    if (!($this.$flags & 4))
        $this.$index0 = var$1 + 1 | 0;
    else {
        var$2 = $this.$pattern.data.length - 2 | 0;
        $this.$index0 = var$1 + 1 | 0;
        a: while (true) {
            var$3 = $this.$index0;
            if (var$3 < var$2 && jl_Character_isWhitespace($this.$pattern.data[var$3])) {
                $this.$index0 = $this.$index0 + 1 | 0;
                continue;
            }
            var$3 = $this.$index0;
            if (var$3 >= var$2)
                break;
            var$4 = $this.$pattern.data;
            if (var$4[var$3] != 35)
                break;
            $this.$index0 = var$3 + 1 | 0;
            while (true) {
                var$5 = $this.$index0;
                if (var$5 >= var$2)
                    continue a;
                var$1 = var$4[var$5];
                if (var$1 != 10 && var$1 != 13 && var$1 != 133 && (var$1 | 1) != 8233 ? 0 : 1)
                    continue a;
                $this.$index0 = var$5 + 1 | 0;
            }
        }
    }
    return $this.$prevNW;
}
function jur_Lexer_getDecomposition($ch) {
    return jur_Lexer_decompTable.$get2($ch);
}
function jur_Lexer_nextCodePoint($this) {
    var $high, $lowExpectedIndex, var$3, $low;
    $high = $this.$pattern.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        var$3 = $this.$pattern.data;
        if ($lowExpectedIndex < var$3.length) {
            $low = var$3[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
}
function jur_Lexer_getIndex($this) {
    return $this.$curToc;
}
function jur_PatternSyntaxException() {
    var a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index2 = 0;
}
function jur_PatternSyntaxException__init_0(var_0, var_1, var_2) {
    var var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_(var_3, var_0, var_1, var_2);
    return var_3;
}
function jur_PatternSyntaxException__init_($this, $description, $pattern, $index) {
    jl_Exception__init_($this);
    $this.$index2 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index2 = $index;
}
var jur_NonCapFSet = $rt_classWithoutFields(jur_FSet);
function jur_NonCapFSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $gr;
    $gr = $this.$groupIndex;
    jur_MatchResultImpl_setConsumed($matchResult, $gr, $stringIndex - jur_MatchResultImpl_getConsumed($matchResult, $gr) | 0);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_NonCapFSet_hasConsumed($this, $mr) {
    return 0;
}
var jur_AheadFSet = $rt_classWithoutFields(jur_FSet);
function jur_AheadFSet_matches($this, $stringIndex, $testString, $matchResult) {
    return $stringIndex;
}
var jur_BehindFSet = $rt_classWithoutFields(jur_FSet);
function jur_BehindFSet_matches($this, $stringIndex, $testString, $matchResult) {
    if (jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex) != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
}
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index3 = 0;
}
function jur_AtomicFSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $gr;
    $gr = $this.$groupIndex;
    jur_MatchResultImpl_setConsumed($matchResult, $gr, $stringIndex - jur_MatchResultImpl_getConsumed($matchResult, $gr) | 0);
    $this.$index3 = $stringIndex;
    return $stringIndex;
}
function jur_AtomicFSet_hasConsumed($this, $mr) {
    return 0;
}
var jur_FinalSet = $rt_classWithoutFields(jur_FSet);
function jur_FinalSet_matches($this, $stringIndex, $testString, $matchResult) {
    if ($matchResult.$mode1 != 1 && $stringIndex != $matchResult.$rightBound0)
        return (-1);
    $matchResult.$valid = 1;
    jur_MatchResultImpl_setEnd($matchResult, 0, $stringIndex);
    return $stringIndex;
}
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount = 0;
}
function jur_LeafSet__init_($this) {
    jur_AbstractSet__init_($this);
    $this.$charCount = 1;
}
function jur_LeafSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $shift;
    if (($stringIndex + $this.$charCount0() | 0) > $matchResult.$rightBound0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $shift = $this.$accepts($stringIndex, $testString);
    if ($shift < 0)
        return (-1);
    return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
}
function jur_LeafSet_charCount($this) {
    return $this.$charCount;
}
function jur_LeafSet_hasConsumed($this, $mr) {
    return 1;
}
var jur_EmptySet = $rt_classWithoutFields(jur_LeafSet);
function jur_EmptySet__init_(var_0) {
    var var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
}
function jur_EmptySet__init_0($this, $next) {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount = 1;
    $this.$type = 1;
    $this.$charCount = 0;
}
function jur_EmptySet_accepts($this, $stringIndex, $testString) {
    return 0;
}
function jur_EmptySet_find($this, $stringIndex, $testString, $matchResult) {
    var $strLength, $startStr, $high;
    $strLength = $matchResult.$rightBound0;
    $startStr = $matchResult.$leftBound0;
    while (true) {
        $high = $rt_compare($stringIndex, $strLength);
        if ($high > 0)
            return (-1);
        if ($high < 0 && jl_Character_isLowSurrogate(jl_String_charAt($testString, $stringIndex)) && $stringIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testString, $stringIndex - 1 | 0))) {
            $stringIndex = $stringIndex + 1 | 0;
            continue;
        }
        if ($this.$next1.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
}
function jur_EmptySet_findBack($this, $stringIndex, $startSearch, $testString, $matchResult) {
    var $strLength, $startStr;
    $strLength = $matchResult.$rightBound0;
    $startStr = $matchResult.$leftBound0;
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testString, $startSearch)) && $startSearch > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testString, $startSearch - 1 | 0))) {
            $startSearch = $startSearch + (-1) | 0;
            continue;
        }
        if ($this.$next1.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
}
function jur_EmptySet_hasConsumed($this, $mr) {
    return 0;
}
function jur_JointSet() {
    var a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex0 = 0;
}
function jur_JointSet__init_0(var_0, var_1) {
    var var_2 = new jur_JointSet();
    jur_JointSet__init_(var_2, var_0, var_1);
    return var_2;
}
function jur_JointSet__init_($this, $children, $fSet) {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex0 = $fSet.$groupIndex;
}
function jur_JointSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $start, $size, $i, $shift;
    if ($this.$children === null)
        return (-1);
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
}
function jur_JointSet_setNext($this, $next) {
    $this.$fSet.$next1 = $next;
}
function jur_JointSet_first($this, $set) {
    var $i;
    a: {
        $i = $this.$children;
        if ($i !== null) {
            $i = ju_AbstractList_iterator($i);
            while (true) {
                if (!ju_AbstractList$1_hasNext($i))
                    break a;
                if (!(ju_AbstractList$1_next($i)).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
}
function jur_JointSet_hasConsumed($this, $matchResult) {
    return jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex0) >= 0 && jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex0) == jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex0) ? 0 : 1;
}
function jur_JointSet_processSecondPass($this) {
    var $child, $childrenSize, $i, $set, var$5, var$6, var$7, var$8, var$9;
    $this.$isSecondPassVisited = 1;
    $child = $this.$fSet;
    if ($child !== null && !$child.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($child);
    a: {
        $child = $this.$children;
        if ($child !== null) {
            $childrenSize = $child.$size;
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = ju_ArrayList_get($this.$children, $i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    ju_ArrayList_remove($this.$children, $i);
                    var$5 = $this.$children;
                    if ($i < 0)
                        break;
                    var$6 = var$5.$size;
                    if ($i > var$6)
                        break;
                    ju_ArrayList_ensureCapacity(var$5, var$6 + 1 | 0);
                    var$7 = var$5.$size;
                    var$8 = var$7;
                    while (var$8 > $i) {
                        var$9 = var$5.$array.data;
                        var$9[var$8] = var$9[var$8 - 1 | 0];
                        var$8 = var$8 + (-1) | 0;
                    }
                    var$5.$array.data[$i] = $set;
                    var$5.$size = var$7 + 1 | 0;
                    var$5.$modCount2 = var$5.$modCount2 + 1 | 0;
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
            $child = new jl_IndexOutOfBoundsException;
            jl_Exception__init_($child);
            $rt_throw($child);
        }
    }
    if ($this.$next1 !== null)
        jur_AbstractSet_processSecondPass($this);
}
var jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet);
function jur_NonCapJointSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $start, $size, $i, $shift;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
}
function jur_NonCapJointSet_hasConsumed($this, $matchResult) {
    return !jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex0) ? 0 : 1;
}
var jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet);
function jur_AtomicJointSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $start, $size, $i;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($this.$fSet.$index3, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $start);
    return (-1);
}
function jur_AtomicJointSet_setNext($this, $next) {
    $this.$next1 = $next;
}
var jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet);
function jur_PositiveLookAhead_matches($this, $stringIndex, $testString, $matchResult) {
    var $size, $i;
    $size = $this.$children.$size;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
}
function jur_PositiveLookAhead_hasConsumed($this, $matchResult) {
    return 0;
}
var jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet);
function jur_NegativeLookAhead_matches($this, $stringIndex, $testString, $matchResult) {
    var $size, $i;
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
}
function jur_NegativeLookAhead_hasConsumed($this, $matchResult) {
    return 0;
}
var jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet);
function jur_PositiveLookBehind_matches($this, $stringIndex, $testString, $matchResult) {
    var $size, $leftBound, $shift, $i;
    $size = $this.$children.$size;
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound0;
    a: {
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                if ((ju_ArrayList_get($this.$children, $i)).$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
}
function jur_PositiveLookBehind_hasConsumed($this, $matchResult) {
    return 0;
}
var jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet);
function jur_NegativeLookBehind_matches($this, $stringIndex, $testString, $matchResult) {
    var $size, $i;
    $size = $this.$children.$size;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex0, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$findBack(0, $stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
}
function jur_NegativeLookBehind_hasConsumed($this, $matchResult) {
    return 0;
}
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
function jur_SingleSet__init_(var_0, var_1) {
    var var_2 = new jur_SingleSet();
    jur_SingleSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_SingleSet__init_0($this, $child, $fSet) {
    jur_AbstractSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex0 = $fSet.$groupIndex;
}
function jur_SingleSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $start, $shift;
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $start);
    return (-1);
}
function jur_SingleSet_find($this, $stringIndex, $testString, $matchResult) {
    var $res;
    $res = $this.$kid.$find0($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $res);
    return $res;
}
function jur_SingleSet_findBack($this, $stringIndex, $lastIndex, $testString, $matchResult) {
    var $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $res);
    return $res;
}
function jur_SingleSet_first($this, $set) {
    return $this.$kid.$first($set);
}
function jur_SingleSet_processBackRefReplacement($this) {
    var $set;
    $set = new jur_BackReferencedSingleSet;
    jur_SingleSet__init_0($set, $this.$kid, $this.$fSet);
    $this.$next1 = $set;
    return $set;
}
function jur_SingleSet_processSecondPass($this) {
    var $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$fSet;
    if ($set !== null && !$set.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($set);
    $set = $this.$kid;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
}
var jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException);
var jur_SpecialToken = $rt_classWithoutFields();
function jur_AbstractCharClass() {
    var a = this; jur_SpecialToken.call(a);
    a.$alt0 = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints = 0;
}
var jur_AbstractCharClass_charClasses = null;
function jur_AbstractCharClass__init_($this) {
    var var$1;
    var$1 = new ju_BitSet;
    var$1.$data0 = $rt_createIntArray(64);
    $this.$lowHighSurrogates = var$1;
}
function jur_AbstractCharClass_getBits($this) {
    return null;
}
function jur_AbstractCharClass_getLowHighSurrogates($this) {
    return $this.$lowHighSurrogates;
}
function jur_AbstractCharClass_hasLowHighSurrogates($this) {
    var var$1, var$2, var$3, var$4, var$5;
    if (!$this.$altSurrogates)
        var$1 = ju_BitSet_nextSetBit($this.$lowHighSurrogates, 0) >= 2048 ? 0 : 1;
    else {
        a: {
            var$2 = $this.$lowHighSurrogates;
            var$1 = 0;
            var$3 = var$2.$length2;
            if (var$1 < var$3) {
                var$4 = var$2.$data0.data;
                var$5 = (var$4[0] ^ (-1)) >>> 0;
                if (var$5)
                    var$1 = jl_Integer_numberOfTrailingZeros(var$5) + var$1 | 0;
                else {
                    var$1 = (var$3 + 31 | 0) / 32 | 0;
                    var$5 = 1;
                    while (var$5 < var$1) {
                        if (var$4[var$5] != (-1)) {
                            var$1 = (var$5 * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$4[var$5] ^ (-1)) | 0;
                            break a;
                        }
                        var$5 = var$5 + 1 | 0;
                    }
                    var$1 = var$3;
                }
            }
        }
        var$1 = var$1 >= 2048 ? 0 : 1;
    }
    return var$1;
}
function jur_AbstractCharClass_mayContainSupplCodepoints($this) {
    return $this.$mayContainSupplCodepoints;
}
function jur_AbstractCharClass_getInstance($this) {
    return $this;
}
function jur_AbstractCharClass_getSurrogates($this) {
    var $lHS, var$2;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$1;
        var$2.$this$02 = $this;
        var$2.$val$lHS = $lHS;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
}
function jur_AbstractCharClass_getWithoutSurrogates($this) {
    var $lHS, var$2;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$2;
        var$2.$this$03 = $this;
        var$2.$val$lHS0 = $lHS;
        var$2.$val$thisClass = $this;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithoutSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$alt0);
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints;
    }
    return $this.$charClassWithoutSurrogates;
}
function jur_AbstractCharClass_hasUCI($this) {
    return 0;
}
function jur_AbstractCharClass_setNegative($this, $value) {
    var var$2;
    var$2 = $this.$alt0;
    if (var$2 ^ $value) {
        $this.$alt0 = var$2 ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    return $this;
}
function jur_AbstractCharClass_isNegative($this) {
    return $this.$alt0;
}
function jur_AbstractCharClass_intersects($cc1, $cc2) {
    var var$3, var$4;
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null) {
        $cc1 = $cc1.$getBits();
        $cc2 = $cc2.$getBits();
        var$3 = jl_Math_min($cc1.$data0.data.length, $cc2.$data0.data.length);
        var$4 = 0;
        a: {
            while (var$4 < var$3) {
                if ($cc1.$data0.data[var$4] & $cc2.$data0.data[var$4]) {
                    var$3 = 1;
                    break a;
                }
                var$4 = var$4 + 1 | 0;
            }
            var$3 = 0;
        }
        return var$3;
    }
    return 1;
}
function jur_AbstractCharClass_getPredefinedClass($name, $negative) {
    var var$3, var$4, var$5;
    var$3 = 0;
    while (true) {
        var$4 = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data;
        if (var$3 >= var$4.length) {
            var$5 = new ju_MissingResourceException;
            jl_Throwable__init_(var$5, $rt_s(4));
            var$5.$className = $rt_s(4);
            var$5.$key0 = $name;
            $rt_throw(var$5);
        }
        var$4 = var$4[var$3].data;
        if (jl_String_equals($name, var$4[0]))
            break;
        var$3 = var$3 + 1 | 0;
    }
    return jur_AbstractCharClass$LazyCharClass_getValue(var$4[1], $negative);
}
function jur_AbstractCharClass__clinit_() {
    jur_AbstractCharClass_charClasses = new jur_AbstractCharClass$PredefinedCharacterClasses;
}
function jur_CharClass() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
function jur_CharClass__init_0() {
    var var_0 = new jur_CharClass();
    jur_CharClass__init_1(var_0);
    return var_0;
}
function jur_CharClass__init_(var_0, var_1) {
    var var_2 = new jur_CharClass();
    jur_CharClass__init_2(var_2, var_0, var_1);
    return var_2;
}
function jur_CharClass__init_1($this) {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
}
function jur_CharClass__init_2($this, $ci, $uci) {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
    $this.$ci = $ci;
    $this.$uci = $uci;
}
function jur_CharClass_add($this, $ch) {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    ju_BitSet_clear($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                ju_BitSet_set($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate0($ch) && !jur_Lexer_isLowSurrogate0($ch))) {
        if ($this.$invertedSurrogates)
            ju_BitSet_clear($this.$lowHighSurrogates, $ch - 55296 | 0);
        else
            ju_BitSet_set($this.$lowHighSurrogates, $ch - 55296 | 0);
    }
    if ($this.$inverted)
        ju_BitSet_clear($this.$bits, $ch);
    else
        ju_BitSet_set($this.$bits, $ch);
    if (!$this.$mayContainSupplCodepoints && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints = 1;
    return $this;
}
function jur_CharClass_add1($this, $cc) {
    var $curAlt, $nb, var$4;
    if (!$this.$mayContainSupplCodepoints && $cc.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            ju_BitSet_andNot($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        else
            ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        ju_BitSet_or($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$alt0)
                ju_BitSet_andNot($this.$bits, $cc.$getBits());
            else
                ju_BitSet_and($this.$bits, $cc.$getBits());
        } else if (!$cc.$alt0)
            ju_BitSet_or($this.$bits, $cc.$getBits());
        else {
            ju_BitSet_xor($this.$bits, $cc.$getBits());
            ju_BitSet_and($this.$bits, $cc.$getBits());
            $this.$alt0 = $this.$alt0 ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt0;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$4 = new jur_CharClass$5;
                var$4.$this$04 = $this;
                var$4.$val$curAlt = $curAlt;
                var$4.$val$nb = $nb;
                var$4.$val$cc = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            } else {
                var$4 = new jur_CharClass$4;
                var$4.$this$05 = $this;
                var$4.$val$curAlt0 = $curAlt;
                var$4.$val$nb0 = $nb;
                var$4.$val$cc0 = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            }
        } else {
            if ($curAlt && !$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                $nb = new jur_CharClass$1;
                $nb.$this$06 = $this;
                $nb.$val$cc1 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else if (!$curAlt) {
                $nb = new jur_CharClass$3;
                $nb.$this$07 = $this;
                $nb.$val$curAlt1 = $curAlt;
                $nb.$val$cc2 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$2;
                $nb.$this$08 = $this;
                $nb.$val$curAlt2 = $curAlt;
                $nb.$val$cc3 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
    return $this;
}
function jur_CharClass_add0($this, $i, $end) {
    var var$3, var$4, var$5, var$6;
    if ($i > $end) {
        var$3 = new jl_IllegalArgumentException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    a: {
        b: {
            if (!$this.$ci) {
                if ($end < 55296)
                    break b;
                if ($i > 57343)
                    break b;
            }
            $end = $end + 1 | 0;
            while (true) {
                if ($i >= $end)
                    break a;
                jur_CharClass_add($this, $i);
                $i = $i + 1 | 0;
            }
        }
        if (!$this.$inverted)
            ju_BitSet_set0($this.$bits, $i, $end + 1 | 0);
        else {
            var$3 = $this.$bits;
            $end = $end + 1 | 0;
            if ($i > $end) {
                var$3 = new jl_IndexOutOfBoundsException;
                jl_Exception__init_(var$3);
                $rt_throw(var$3);
            }
            var$4 = var$3.$length2;
            if ($i < var$4) {
                var$4 = jl_Math_min(var$4, $end);
                var$5 = $i / 32 | 0;
                $end = var$4 / 32 | 0;
                if (var$5 == $end) {
                    var$6 = var$3.$data0.data;
                    var$6[var$5] = var$6[var$5] & (ju_BitSet_trailingOneBits(var$3, $i) | ju_BitSet_trailingZeroBits(var$3, var$4));
                } else {
                    var$6 = var$3.$data0.data;
                    var$6[var$5] = var$6[var$5] & ju_BitSet_trailingOneBits(var$3, $i);
                    var$5 = var$5 + 1 | 0;
                    while (var$5 < $end) {
                        var$3.$data0.data[var$5] = 0;
                        var$5 = var$5 + 1 | 0;
                    }
                    if (var$4 & 31) {
                        var$6 = var$3.$data0.data;
                        var$6[$end] = var$6[$end] & ju_BitSet_trailingZeroBits(var$3, var$4);
                    }
                }
                ju_BitSet_recalculateLength(var$3);
            }
        }
    }
    return $this;
}
function jur_CharClass_union($this, $clazz) {
    var $curAlt, $nb, var$4;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    if ($clazz.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_or($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        else
            ju_BitSet_and($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
    } else if ($curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && jur_CharClass_getBits($clazz) !== null) {
        $curAlt = $this.$alt0;
        if (!($curAlt ^ $clazz.$alt0)) {
            if (!$curAlt)
                ju_BitSet_or($this.$bits, jur_CharClass_getBits($clazz));
            else
                ju_BitSet_and($this.$bits, jur_CharClass_getBits($clazz));
        } else if ($curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits($clazz));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits($clazz));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits($clazz));
            $this.$alt0 = 1;
        }
    } else {
        $curAlt = $this.$alt0;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$4 = new jur_CharClass$11;
                var$4.$this$09 = $this;
                var$4.$val$curAlt3 = $curAlt;
                var$4.$val$nb1 = $nb;
                var$4.$val$clazz = $clazz;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            } else {
                var$4 = new jur_CharClass$10;
                var$4.$this$010 = $this;
                var$4.$val$curAlt4 = $curAlt;
                var$4.$val$nb2 = $nb;
                var$4.$val$clazz0 = $clazz;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$7;
                    $nb.$this$011 = $this;
                    $nb.$val$clazz1 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$6;
                    $nb.$this$012 = $this;
                    $nb.$val$clazz2 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$9;
                $nb.$this$013 = $this;
                $nb.$val$clazz3 = $clazz;
                $nb.$val$curAlt5 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$8;
                $nb.$this$014 = $this;
                $nb.$val$clazz4 = $clazz;
                $nb.$val$curAlt6 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
}
function jur_CharClass_intersection($this, $clazz) {
    var $curAlt, $nb, var$4;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    if ($clazz.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_and($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        else
            ju_BitSet_or($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
    } else if (!$curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, $clazz.$lowHighSurrogates);
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && jur_CharClass_getBits($clazz) !== null) {
        $curAlt = $this.$alt0;
        if (!($curAlt ^ $clazz.$alt0)) {
            if (!$curAlt)
                ju_BitSet_and($this.$bits, jur_CharClass_getBits($clazz));
            else
                ju_BitSet_or($this.$bits, jur_CharClass_getBits($clazz));
        } else if (!$curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits($clazz));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits($clazz));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits($clazz));
            $this.$alt0 = 0;
        }
    } else {
        $curAlt = $this.$alt0;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$4 = new jur_CharClass$17;
                var$4.$this$015 = $this;
                var$4.$val$curAlt7 = $curAlt;
                var$4.$val$nb3 = $nb;
                var$4.$val$clazz5 = $clazz;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            } else {
                var$4 = new jur_CharClass$16;
                var$4.$this$016 = $this;
                var$4.$val$curAlt8 = $curAlt;
                var$4.$val$nb4 = $nb;
                var$4.$val$clazz6 = $clazz;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$13;
                    $nb.$this$017 = $this;
                    $nb.$val$clazz7 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$12;
                    $nb.$this$018 = $this;
                    $nb.$val$clazz8 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$15;
                $nb.$this$019 = $this;
                $nb.$val$clazz9 = $clazz;
                $nb.$val$curAlt9 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$14;
                $nb.$this$020 = $this;
                $nb.$val$clazz10 = $clazz;
                $nb.$val$curAlt10 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
}
function jur_CharClass_contains($this, $ch) {
    var var$2;
    var$2 = $this.$nonBitSet;
    if (var$2 !== null)
        return $this.$alt0 ^ var$2.$contains($ch);
    return $this.$alt0 ^ ju_BitSet_get($this.$bits, $ch);
}
function jur_CharClass_getBits($this) {
    if (!$this.$hideBits)
        return $this.$bits;
    return null;
}
function jur_CharClass_getLowHighSurrogates($this) {
    return $this.$lowHighSurrogates;
}
function jur_CharClass_getInstance($this) {
    var $bs, $res;
    if ($this.$nonBitSet !== null)
        return $this;
    $bs = jur_CharClass_getBits($this);
    $res = new jur_CharClass$18;
    $res.$this$021 = $this;
    $res.$val$bs = $bs;
    jur_AbstractCharClass__init_($res);
    return jur_AbstractCharClass_setNegative($res, $this.$alt0);
}
function jur_CharClass_toString($this) {
    var $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$bits, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append2($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append0($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$bits, $i + 1 | 0);
    }
    var$3 = $temp.$length0;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
}
function jur_CharClass_hasUCI($this) {
    return $this.$hasUCI0;
}
function ju_MissingResourceException() {
    var a = this; jl_RuntimeException.call(a);
    a.$className = null;
    a.$key0 = null;
}
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
function jur_QuantifierSet__init_($this, $innerSet, $next, $type) {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$type = $type;
}
function jur_QuantifierSet_getInnerSet($this) {
    return $this.$innerSet;
}
function jur_QuantifierSet_first($this, $set) {
    return !$this.$innerSet.$first($set) && !$this.$next1.$first($set) ? 0 : 1;
}
function jur_QuantifierSet_hasConsumed($this, $mr) {
    return 1;
}
function jur_QuantifierSet_processSecondPass($this) {
    var $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next1.$isSecondPassVisited = 1;
            $this.$next1 = $set;
        }
        $this.$next1.$processSecondPass();
    }
    $set = $this.$innerSet;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$innerSet = $set.$next1;
    }
}
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
function jur_LeafQuantifierSet__init_0(var_0, var_1, var_2) {
    var var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
}
function jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type) {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
}
function jur_LeafQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $i, var$5;
    $i = 0;
    a: {
        while (($stringIndex + $this.$leaf.$charCount0() | 0) <= $matchResult.$rightBound0) {
            var$5 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$5 <= 0)
                break a;
            $stringIndex = $stringIndex + var$5 | 0;
            $i = $i + 1 | 0;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount0() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
}
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier = null;
}
function jur_CompositeQuantifierSet__init_0(var_0, var_1, var_2, var_3) {
    var var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
}
function jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type) {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
}
function jur_CompositeQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while ($i < $max) {
                    if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break a;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount0() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
}
var jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet);
function jur_GroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet);
function jur_AltQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    return $shift;
}
function jur_AltQuantifierSet_setNext($this, $next) {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
}
var jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet);
function jur_UnifiedQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    while (($stringIndex + $this.$leaf.$charCount0() | 0) <= $matchResult.$rightBound0 && $this.$leaf.$accepts($stringIndex, $testString) > 0) {
        $stringIndex = $stringIndex + $this.$leaf.$charCount0() | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_UnifiedQuantifierSet_find($this, $stringIndex, $testString, $matchResult) {
    var $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($startSearch < 0)
        return (-1);
    $newSearch = $startSearch - $this.$leaf.$charCount0() | 0;
    while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
        $newSearch_0 = $newSearch - $this.$leaf.$charCount0() | 0;
        $startSearch = $newSearch;
        $newSearch = $newSearch_0;
    }
    return $startSearch;
}
function jur_Quantifier() {
    var a = this; jur_SpecialToken.call(a);
    a.$min1 = 0;
    a.$max1 = 0;
}
function jur_Quantifier_toString($this) {
    var var$1, var$2;
    var$1 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$1);
    var$1 = jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$1, $rt_s(67)), $this.$min1), $rt_s(42));
    var$2 = $this.$max1;
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append(jl_StringBuilder_append(var$1, var$2 == 2147483647 ? $rt_s(4) : jl_Integer_toString(jl_Integer__init_(var$2))), $rt_s(68)));
}
var jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet);
function jur_FSet$PossessiveFSet_matches($this, $stringIndex, $testString, $matchResult) {
    return $stringIndex;
}
function jur_FSet$PossessiveFSet_hasConsumed($this, $mr) {
    return 0;
}
function ju_BitSet() {
    var a = this; jl_Object.call(a);
    a.$data0 = null;
    a.$length2 = 0;
}
function ju_BitSet__init_() {
    var var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
}
function ju_BitSet__init_0($this) {
    $this.$data0 = $rt_createIntArray(0);
}
function ju_BitSet_set($this, $bitIndex) {
    var $index, var$3;
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length2) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length2 = $bitIndex + 1 | 0;
    }
    var$3 = $this.$data0.data;
    var$3[$index] = var$3[$index] | 1 << ($bitIndex % 32 | 0);
}
function ju_BitSet_set0($this, $fromIndex, $toIndex) {
    var var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex > $toIndex) {
        var$3 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    $fromDataIndex = $fromIndex / 32 | 0;
    $toDataIndex = $toIndex / 32 | 0;
    if ($toIndex > $this.$length2) {
        ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
        $this.$length2 = $toIndex;
    }
    if ($fromDataIndex == $toDataIndex) {
        var$6 = $this.$data0.data;
        var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
    } else {
        var$6 = $this.$data0.data;
        var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
        $i = $fromDataIndex + 1 | 0;
        while ($i < $toDataIndex) {
            $this.$data0.data[$i] = (-1);
            $i = $i + 1 | 0;
        }
        if ($toIndex & 31) {
            var$6 = $this.$data0.data;
            var$6[$toDataIndex] = var$6[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
        }
    }
}
function ju_BitSet_trailingZeroBits($this, $num) {
    return (-1) << ($num % 32 | 0);
}
function ju_BitSet_trailingOneBits($this, $num) {
    $num = $num % 32 | 0;
    return !$num ? 0 : (-1) >>> (32 - $num | 0);
}
function ju_BitSet_clear($this, $bitIndex) {
    var $index, var$3, var$4, var$5;
    $index = $bitIndex / 32 | 0;
    var$3 = $this.$data0.data;
    if ($index < var$3.length) {
        var$4 = var$3[$index];
        var$5 = ($bitIndex % 32 | 0) & 31;
        var$3[$index] = var$4 & ((-2) << var$5 | (-2) >>> (32 - var$5 | 0));
        if ($bitIndex == ($this.$length2 - 1 | 0))
            ju_BitSet_recalculateLength($this);
    }
}
function ju_BitSet_get($this, $bitIndex) {
    var $index, var$3;
    $index = $bitIndex / 32 | 0;
    var$3 = $this.$data0.data;
    return $index < var$3.length && var$3[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
}
function ju_BitSet_nextSetBit($this, $fromIndex) {
    var $top, $index, var$4, $i;
    $top = $this.$length2;
    if ($fromIndex >= $top)
        return (-1);
    $index = $fromIndex / 32 | 0;
    var$4 = $this.$data0.data;
    $i = var$4[$index] >>> ($fromIndex % 32 | 0);
    if ($i)
        return jl_Integer_numberOfTrailingZeros($i) + $fromIndex | 0;
    $top = ($top + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if (var$4[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$4[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
}
function ju_BitSet_ensureCapacity($this, $capacity) {
    var $newArrayLength, var$3, var$4, var$5;
    $newArrayLength = $this.$data0.data.length;
    if ($newArrayLength >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($newArrayLength * 2 | 0) + 1 | 0);
    var$3 = $this.$data0.data;
    var$4 = $rt_createIntArray($newArrayLength);
    var$5 = var$4.data;
    $capacity = jl_Math_min($newArrayLength, var$3.length);
    $newArrayLength = 0;
    while ($newArrayLength < $capacity) {
        var$5[$newArrayLength] = var$3[$newArrayLength];
        $newArrayLength = $newArrayLength + 1 | 0;
    }
    $this.$data0 = var$4;
}
function ju_BitSet_recalculateLength($this) {
    var $top, $i, $sz;
    $top = ($this.$length2 + 31 | 0) / 32 | 0;
    $this.$length2 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data0.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length2 = $this.$length2 - 32 | 0;
        }
        $this.$length2 = $this.$length2 - $sz | 0;
    }
}
function ju_BitSet_and($this, $set) {
    var $i, $i_0, var$4, var$5;
    $i = jl_Math_min($this.$data0.data.length, $set.$data0.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data0.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data0.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while (true) {
        var$5 = $this.$data0.data;
        if ($i >= var$5.length)
            break;
        var$5[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length2 = jl_Math_min($this.$length2, $set.$length2);
    ju_BitSet_recalculateLength($this);
}
function ju_BitSet_andNot($this, $set) {
    var $sz, $i, var$4;
    $sz = jl_Math_min($this.$data0.data.length, $set.$data0.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data0.data;
        var$4[$i] = var$4[$i] & ($set.$data0.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
}
function ju_BitSet_or($this, $set) {
    var $sz, $i, var$4;
    $sz = jl_Math_max($this.$length2, $set.$length2);
    $this.$length2 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data0.data.length, $set.$data0.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data0.data;
        var$4[$i] = var$4[$i] | $set.$data0.data[$i];
        $i = $i + 1 | 0;
    }
}
function ju_BitSet_xor($this, $set) {
    var $sz, $i, var$4;
    $sz = jl_Math_max($this.$length2, $set.$length2);
    $this.$length2 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data0.data.length, $set.$data0.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data0.data;
        var$4[$i] = var$4[$i] ^ $set.$data0.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
}
function ju_BitSet_isEmpty($this) {
    return $this.$length2 ? 0 : 1;
}
function jur_LowHighSurrogateRangeSet() {
    var a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt = 0;
}
function jur_CompositeRangeSet() {
    var a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
function jur_CompositeRangeSet__init_(var_0, var_1) {
    var var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_CompositeRangeSet__init_0($this, $withoutSurrogates, $withSurrogates) {
    jur_AbstractSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
}
function jur_CompositeRangeSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $shift, var$5, var$6, var$7, var$8;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        a: {
            var$5 = $this.$withSurrogates;
            var$6 = $matchResult.$leftBound0;
            $shift = $matchResult.$rightBound0;
            var$7 = $stringIndex + 1 | 0;
            $shift = $rt_compare(var$7, $shift);
            if ($shift > 0) {
                $matchResult.$hitEnd = 1;
                $shift = (-1);
            } else {
                var$8 = jl_String_charAt($testString, $stringIndex);
                if (!var$5.$surrChars.$contains(var$8))
                    $shift = (-1);
                else {
                    if (jl_Character_isHighSurrogate(var$8)) {
                        if ($shift < 0 && jl_Character_isLowSurrogate(jl_String_charAt($testString, var$7))) {
                            $shift = (-1);
                            break a;
                        }
                    } else if (jl_Character_isLowSurrogate(var$8) && $stringIndex > var$6 && jl_Character_isHighSurrogate(jl_String_charAt($testString, $stringIndex - 1 | 0))) {
                        $shift = (-1);
                        break a;
                    }
                    $shift = var$5.$next1.$matches(var$7, $testString, $matchResult);
                }
            }
        }
    if ($shift >= 0)
        return $shift;
    return (-1);
}
function jur_CompositeRangeSet_setNext($this, $next) {
    $this.$next1 = $next;
    $this.$withSurrogates.$next1 = $next;
    $this.$withoutSurrogates.$setNext($next);
}
function jur_CompositeRangeSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_CompositeRangeSet_first($this, $set) {
    return 1;
}
function jur_SupplRangeSet() {
    var a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt1 = 0;
}
function jur_SupplRangeSet__init_(var_0) {
    var var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_0(var_1, var_0);
    return var_1;
}
function jur_SupplRangeSet__init_0($this, $cc) {
    jur_AbstractSet__init_($this);
    $this.$chars = $cc.$getInstance0();
    $this.$alt1 = $cc.$alt0;
}
function jur_SupplRangeSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength, $low, $high, $offset;
    $strLength = $matchResult.$rightBound0;
    if ($stringIndex < $strLength) {
        $low = $stringIndex + 1 | 0;
        $high = jl_String_charAt($testString, $stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next1.$matches($low, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if ($low < $strLength) {
            $stringIndex = $low + 1 | 0;
            $low = jl_String_charAt($testString, $low);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return (-1);
}
function jur_SupplRangeSet_contains($this, $ch) {
    return $this.$chars.$contains($ch);
}
function jur_SupplRangeSet_first($this, $set) {
    if ($set instanceof jur_SupplCharSet)
        return $this.$chars.$contains($set.$ch1);
    if ($set instanceof jur_CharSet)
        return $this.$chars.$contains($set.$ch2);
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
    if (!($set instanceof jur_RangeSet))
        return 1;
    return jur_AbstractCharClass_intersects($this.$chars, $set.$chars0);
}
function jur_SupplRangeSet_getChars($this) {
    return $this.$chars;
}
function jur_SupplRangeSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_SupplRangeSet_hasConsumed($this, $mr) {
    return 1;
}
var jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet);
function jur_UCISupplRangeSet_contains($this, $ch) {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
}
function jur_UCIRangeSet() {
    var a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt2 = 0;
}
function jur_UCIRangeSet__init_(var_0) {
    var var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_0(var_1, var_0);
    return var_1;
}
function jur_UCIRangeSet__init_0($this, $cc) {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance0();
    $this.$alt2 = $cc.$alt0;
}
function jur_UCIRangeSet_accepts($this, $strIndex, $testString) {
    return !$this.$chars1.$contains(jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex)))) ? (-1) : 1;
}
function jur_RangeSet() {
    var a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt3 = 0;
}
function jur_RangeSet__init_(var_0) {
    var var_1 = new jur_RangeSet();
    jur_RangeSet__init_0(var_1, var_0);
    return var_1;
}
function jur_RangeSet__init_0($this, $cc) {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance0();
    $this.$alt3 = $cc.$alt0;
}
function jur_RangeSet_accepts($this, $strIndex, $testString) {
    return !$this.$chars0.$contains(jl_String_charAt($testString, $strIndex)) ? (-1) : 1;
}
function jur_RangeSet_first($this, $set) {
    if ($set instanceof jur_CharSet)
        return $this.$chars0.$contains($set.$ch2);
    if ($set instanceof jur_RangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars);
}
function jur_HangulDecomposedCharSet() {
    var a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF16 = null;
    a.$decomposedCharLength = 0;
}
function jur_HangulDecomposedCharSet__init_(var_0, var_1) {
    var var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_HangulDecomposedCharSet__init_0($this, $decomposedChar, $decomposedCharLength) {
    jur_AbstractSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
}
function jur_HangulDecomposedCharSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_HangulDecomposedCharSet_getDecomposedChar($this) {
    if ($this.$decomposedCharUTF16 === null)
        $this.$decomposedCharUTF16 = jl_String__init_($this.$decomposedChar);
    return $this.$decomposedCharUTF16;
}
function jur_HangulDecomposedCharSet_matches($this, $strIndex, $testString, $matchResult) {
    var $rightBound, $decompSyllable, $vIndex, $tIndex, var$8, $curSymb, $lIndex, $i, $decompCurSymb, $syllIndex;
    $rightBound = $matchResult.$rightBound0;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex >= $rightBound)
        return (-1);
    var$8 = $strIndex + 1 | 0;
    $curSymb = jl_String_charAt($testString, $strIndex);
    $strIndex = $curSymb - 44032 | 0;
    if ($strIndex >= 0 && $strIndex < 11172) {
        $lIndex = 4352 + ($strIndex / 588 | 0) | 0;
        $i = 4449 + (($strIndex % 588 | 0) / 28 | 0) | 0;
        $strIndex = $strIndex % 28 | 0;
        $decompCurSymb = !$strIndex ? $rt_createIntArrayFromData([$lIndex, $i]) : $rt_createIntArrayFromData([$lIndex, $i, 4519 + $strIndex | 0]);
    } else
        $decompCurSymb = null;
    if ($decompCurSymb !== null) {
        $decompCurSymb = $decompCurSymb.data;
        $i = 0;
        $strIndex = $decompCurSymb.length;
        $syllIndex = $this.$decomposedCharLength;
        if ($strIndex != $syllIndex)
            return (-1);
        while (true) {
            if ($i >= $syllIndex)
                return $this.$next1.$matches(var$8, $testString, $matchResult);
            if ($decompCurSymb[$i] != $this.$decomposedChar.data[$i])
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    $decompSyllable = $decompSyllable.data;
    $decompSyllable[0] = $curSymb;
    $lIndex = $curSymb - 4352 | 0;
    if ($lIndex >= 0 && $lIndex < 19) {
        if (var$8 < $rightBound) {
            $curSymb = jl_String_charAt($testString, var$8);
            $vIndex = $curSymb - 4449 | 0;
        }
        if ($vIndex >= 0 && $vIndex < 21) {
            $lIndex = var$8 + 1 | 0;
            $decompSyllable[1] = $curSymb;
            if ($lIndex < $rightBound) {
                $curSymb = jl_String_charAt($testString, $lIndex);
                $tIndex = $curSymb - 4519 | 0;
            }
            if ($tIndex >= 0 && $tIndex < 28) {
                a: {
                    $strIndex = $lIndex + 1 | 0;
                    $decompSyllable[2] = $curSymb;
                    if ($this.$decomposedCharLength == 3) {
                        $lIndex = $decompSyllable[0];
                        $decompCurSymb = $this.$decomposedChar.data;
                        if ($lIndex == $decompCurSymb[0] && $decompSyllable[1] == $decompCurSymb[1] && $decompSyllable[2] == $decompCurSymb[2]) {
                            $strIndex = $this.$next1.$matches($strIndex, $testString, $matchResult);
                            break a;
                        }
                    }
                    $strIndex = (-1);
                }
                return $strIndex;
            }
            b: {
                if ($this.$decomposedCharLength == 2) {
                    $strIndex = $decompSyllable[0];
                    $decompCurSymb = $this.$decomposedChar.data;
                    if ($strIndex == $decompCurSymb[0] && $decompSyllable[1] == $decompCurSymb[1]) {
                        $strIndex = $this.$next1.$matches($lIndex, $testString, $matchResult);
                        break b;
                    }
                }
                $strIndex = (-1);
            }
            return $strIndex;
        }
        return (-1);
    }
    return (-1);
}
function jur_HangulDecomposedCharSet_first($this, $set) {
    return $set instanceof jur_HangulDecomposedCharSet && !jl_String_equals(jur_HangulDecomposedCharSet_getDecomposedChar($set), jur_HangulDecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
}
function jur_HangulDecomposedCharSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
function jur_CharSet__init_(var_0) {
    var var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
}
function jur_CharSet__init_0($this, $ch) {
    jur_LeafSet__init_($this);
    $this.$ch2 = $ch;
}
function jur_CharSet_charCount($this) {
    return 1;
}
function jur_CharSet_accepts($this, $strIndex, $testString) {
    return $this.$ch2 != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
}
function jur_CharSet_find($this, $strIndex, $testString, $matchResult) {
    var $testStr, $strLength, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound0;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf($testStr, $this.$ch2, $strIndex);
        if (var$6 < 0)
            return (-1);
        var$7 = $this.$next1;
        $strIndex = var$6 + 1 | 0;
        if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
}
function jur_CharSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var $testStr, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = jl_String_lastIndexOf($testStr, $this.$ch2, $lastIndex);
            if (var$6 < 0)
                break a;
            if (var$6 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$6 + (-1) | 0;
        }
        return var$6;
    }
    return (-1);
}
function jur_CharSet_first($this, $set) {
    if ($set instanceof jur_CharSet)
        return $set.$ch2 != $this.$ch2 ? 0 : 1;
    if (!($set instanceof jur_RangeSet)) {
        if ($set instanceof jur_SupplRangeSet)
            return $set.$contains($this.$ch2);
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_RangeSet_accepts($set, 0, jl_Character_toString($this.$ch2)) <= 0 ? 0 : 1;
}
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch3 = 0;
}
function jur_UCICharSet__init_(var_0) {
    var var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_0(var_1, var_0);
    return var_1;
}
function jur_UCICharSet__init_0($this, $ch) {
    jur_LeafSet__init_($this);
    $this.$ch3 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
}
function jur_UCICharSet_accepts($this, $strIndex, $testString) {
    return $this.$ch3 != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex))) ? (-1) : 1;
}
function jur_CICharSet() {
    var a = this; jur_LeafSet.call(a);
    a.$ch4 = 0;
    a.$supplement = 0;
}
function jur_CICharSet__init_(var_0) {
    var var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
}
function jur_CICharSet__init_0($this, $ch) {
    jur_LeafSet__init_($this);
    $this.$ch4 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
}
function jur_CICharSet_accepts($this, $strIndex, $testString) {
    return $this.$ch4 != jl_String_charAt($testString, $strIndex) && $this.$supplement != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
}
function jur_DecomposedCharSet() {
    var a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF160 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
function jur_DecomposedCharSet__init_(var_0, var_1) {
    var var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_DecomposedCharSet__init_0($this, $decomposedChar, $decomposedCharLength) {
    jur_AbstractSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
}
function jur_DecomposedCharSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_DecomposedCharSet_matches($this, $strIndex, $testString, $matchResult) {
    var $decCodePoint, $rightBound, $curChar, var$7, $decCurCodePoint, var$9, var$10, $readCodePoints;
    $decCodePoint = $rt_createIntArray(4);
    $rightBound = $matchResult.$rightBound0;
    if ($strIndex >= $rightBound)
        return (-1);
    $curChar = jur_DecomposedCharSet_codePointAt($this, $strIndex, $testString, $rightBound);
    var$7 = $strIndex + $this.$readCharsForCodePoint | 0;
    $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
    if ($decCurCodePoint === null) {
        $decCurCodePoint = $decCodePoint.data;
        $strIndex = 1;
        $decCurCodePoint[0] = $curChar;
    } else {
        $strIndex = $decCurCodePoint.data.length;
        jl_System_arraycopy($decCurCodePoint, 0, $decCodePoint, 0, $strIndex);
        $strIndex = 0 + $strIndex | 0;
    }
    a: {
        if (var$7 < $rightBound) {
            var$9 = $decCodePoint.data;
            $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
            while ($strIndex < 4) {
                if (!(($curChar != 832 ? 0 : 1) | ($curChar != 833 ? 0 : 1) | ($curChar != 835 ? 0 : 1) | ($curChar != 836 ? 0 : 1))) {
                    var$10 = $strIndex + 1 | 0;
                    var$9[$strIndex] = $curChar;
                } else {
                    $decCurCodePoint = (jur_Lexer_getDecomposition($curChar)).data;
                    if ($decCurCodePoint.length != 2) {
                        var$10 = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                    } else {
                        $readCodePoints = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                        var$10 = $readCodePoints + 1 | 0;
                        var$9[$readCodePoints] = $decCurCodePoint[1];
                    }
                }
                var$7 = var$7 + $this.$readCharsForCodePoint | 0;
                if (var$7 >= $rightBound) {
                    $strIndex = var$10;
                    break a;
                }
                $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
                $strIndex = var$10;
            }
        }
    }
    if ($strIndex != $this.$decomposedCharLength0)
        return (-1);
    $decCurCodePoint = $decCodePoint.data;
    $curChar = 0;
    while (true) {
        if ($curChar >= $strIndex)
            return $this.$next1.$matches(var$7, $testString, $matchResult);
        if ($decCurCodePoint[$curChar] != $this.$decomposedChar0.data[$curChar])
            break;
        $curChar = $curChar + 1 | 0;
    }
    return (-1);
}
function jur_DecomposedCharSet_getDecomposedChar($this) {
    var $strBuff, $i;
    if ($this.$decomposedCharUTF160 === null) {
        $strBuff = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($strBuff);
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            jl_AbstractStringBuilder_append2($strBuff, jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF160 = jl_AbstractStringBuilder_toString($strBuff);
    }
    return $this.$decomposedCharUTF160;
}
function jur_DecomposedCharSet_codePointAt($this, $strIndex, $testString, $rightBound) {
    var $curChar, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = jl_String_charAt($testString, $strIndex);
    else {
        $rightBound = $strIndex + 1 | 0;
        $curChar = jl_String_charAt($testString, $strIndex);
        $low = jl_String_charAt($testString, $rightBound);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArray(2).data;
            $curCodePointUTF16[0] = $curChar;
            $curCodePointUTF16[1] = $low;
            $curChar = 0 < ($curCodePointUTF16.length - 1 | 0) && jl_Character_isHighSurrogate($curCodePointUTF16[0]) && jl_Character_isLowSurrogate($curCodePointUTF16[1]) ? jl_Character_toCodePoint($curCodePointUTF16[0], $curCodePointUTF16[1]) : $curCodePointUTF16[0];
            $this.$readCharsForCodePoint = 2;
        }
    }
    return $curChar;
}
function jur_DecomposedCharSet_first($this, $set) {
    return $set instanceof jur_DecomposedCharSet && !jl_String_equals(jur_DecomposedCharSet_getDecomposedChar($set), jur_DecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
}
function jur_DecomposedCharSet_hasConsumed($this, $matchResult) {
    return 1;
}
var jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet);
var jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet);
var jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet);
function jur_PossessiveGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet);
function jur_PosPlusGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        return (-1);
    if ($nextIndex > $stringIndex) {
        while (true) {
            $stringIndex = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
            if ($stringIndex <= $nextIndex)
                break;
            $nextIndex = $stringIndex;
        }
        $stringIndex = $nextIndex;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet);
function jur_AltGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_AltGroupQuantifierSet_setNext($this, $next) {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
}
var jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet);
function jur_PosAltGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next1.$matches($nextIndex, $testString, $matchResult);
}
function jur_PosAltGroupQuantifierSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_CompositeGroupQuantifierSet() {
    var a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier0 = null;
    a.$setCounter = 0;
}
function jur_CompositeGroupQuantifierSet__init_0(var_0, var_1, var_2, var_3, var_4) {
    var var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
}
function jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter) {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
    $this.$setCounter = $setCounter;
}
function jur_CompositeGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $enterCounter, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier0.$max1)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + 1 | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $nextIndex;
    }
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + (-1) | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    if ($enterCounter >= $this.$quantifier0.$min1)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
    return (-1);
}
var jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet);
function jur_PosCompositeGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier0.$max1;
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier0.$min1)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet);
function jur_ReluctantGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $res;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $res = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        return $res;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
}
var jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet);
function jur_RelAltGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $nextIndex;
}
var jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet);
function jur_RelCompositeGroupQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $enterCounter, var$5, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    var$5 = $this.$quantifier0;
    if ($enterCounter >= var$5.$max1) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    if ($enterCounter < var$5.$min1) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    } else {
        $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex >= 0) {
            jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
            return $nextIndex;
        }
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    }
    return $nextIndex;
}
var jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet);
function jur_DotAllQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength;
    $strLength = $matchResult.$rightBound0;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_DotAllQuantifierSet_find($this, $stringIndex, $testString, $matchResult) {
    var $strLength;
    $strLength = $matchResult.$rightBound0;
    if ($this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult) >= 0)
        return $stringIndex;
    return (-1);
}
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
function jur_DotQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength, $startSearch;
    $strLength = $matchResult.$rightBound0;
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_DotQuantifierSet_find($this, $stringIndex, $testString, $matchResult) {
    var $strLength, $res, $nextSearch, $leftBound;
    $strLength = $matchResult.$rightBound0;
    $res = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($res < 0)
        return (-1);
    $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
    if ($nextSearch >= 0)
        $strLength = $nextSearch;
    $nextSearch = jl_Math_max($res, $this.$next1.$findBack($res, $strLength, $testString, $matchResult));
    if ($nextSearch <= 0)
        $leftBound = $nextSearch ? (-1) : 0;
    else {
        $leftBound = $nextSearch - 1 | 0;
        a: {
            while (true) {
                if ($leftBound < $stringIndex) {
                    $leftBound = (-1);
                    break a;
                }
                if ($this.$lt.$isLineTerminator(jl_String_charAt($testString, $leftBound)))
                    break;
                $leftBound = $leftBound + (-1) | 0;
            }
        }
    }
    if ($leftBound >= $stringIndex)
        $stringIndex = $leftBound >= $nextSearch ? $leftBound : $leftBound + 1 | 0;
    return $stringIndex;
}
function jur_DotQuantifierSet_findLineTerminator($this, $i, $to, $testString) {
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator(jl_String_charAt($testString, $i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
}
var jur_AbstractLineTerminator = $rt_classWithoutFields();
var jur_AbstractLineTerminator_unixLT = null;
var jur_AbstractLineTerminator_unicodeLT = null;
function jur_AbstractLineTerminator_getInstance($flag) {
    var var$2;
    if (!($flag & 1)) {
        var$2 = jur_AbstractLineTerminator_unicodeLT;
        if (var$2 !== null)
            return var$2;
        var$2 = new jur_AbstractLineTerminator$2;
        jur_AbstractLineTerminator_unicodeLT = var$2;
        return var$2;
    }
    var$2 = jur_AbstractLineTerminator_unixLT;
    if (var$2 !== null)
        return var$2;
    var$2 = new jur_AbstractLineTerminator$1;
    jur_AbstractLineTerminator_unixLT = var$2;
    return var$2;
}
var jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet);
function jur_PossessiveQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0)
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet);
function jur_PossessiveAltQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4;
    if (($stringIndex + $this.$leaf.$charCount0() | 0) <= $matchResult.$rightBound0) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
var jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet);
function jur_PossessiveCompositeQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
}
var jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet);
function jur_ReluctantQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4;
    while (true) {
        var$4 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount0() | 0) <= $matchResult.$rightBound0) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
}
var jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet);
function jur_ReluctantAltQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $shift;
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
}
var jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet);
function jur_ReluctantCompositeQuantifierSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4, $min, $max, $i, var$8, var$9;
    var$4 = $this.$quantifier;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$8 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                    if (var$8 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount0() | 0) <= $matchResult.$rightBound0) {
                        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$8 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$8 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$8;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount0() | 0) > $matchResult.$rightBound0) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$9 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$9 < 1)
            break;
        $stringIndex = $stringIndex + var$9 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
}
var jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet);
function jur_SOLSet_matches($this, $strIndex, $testString, $matchResult) {
    if ($strIndex && !($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound0))
        return (-1);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
}
function jur_SOLSet_hasConsumed($this, $matchResult) {
    return 0;
}
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
function jur_WordBoundary__init_(var_0) {
    var var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
}
function jur_WordBoundary__init_0($this, $positive) {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
}
function jur_WordBoundary_matches($this, $stringIndex, $testString, $matchResult) {
    var $ch1, $ch2, $leftBound;
    $ch1 = $stringIndex < $matchResult.$rightBound0 ? jl_String_charAt($testString, $stringIndex) : 32;
    $ch2 = !$stringIndex ? 32 : jl_String_charAt($testString, $stringIndex - 1 | 0);
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound0;
    return ($ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString) ? 0 : 1) ^ ($ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString) ? 0 : 1) ^ $this.$positive ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_WordBoundary_hasConsumed($this, $matchResult) {
    return 0;
}
function jur_WordBoundary_isSpace($this, $ch, $index, $leftBound, $testString) {
    var var$5;
    if (!jl_Character_isLetterOrDigit($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType($ch) == 6)
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    var$5 = jl_String_charAt($testString, $index);
                    if (jl_Character_isLetterOrDigit(var$5))
                        return 0;
                    if (jl_Character_getType(var$5) != 6)
                        return 1;
                }
        }
        return 1;
    }
    return 0;
}
var jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet);
function jur_PreviousMatch_matches($this, $stringIndex, $testString, $matchResult) {
    if ($stringIndex != $matchResult.$previousMatch)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_PreviousMatch_hasConsumed($this, $matchResult) {
    return 0;
}
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
function jur_EOLSet__init_0(var_0) {
    var var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
}
function jur_EOLSet__init_($this, $counter) {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
}
function jur_EOLSet_matches($this, $strIndex, $testString, $matchResult) {
    var $rightBound, var$5, $ch;
    $rightBound = !$matchResult.$anchoringBounds ? jl_String_length($testString) : $matchResult.$rightBound0;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    var$5 = $rightBound - $strIndex | 0;
    if (var$5 == 2 && jl_String_charAt($testString, $strIndex) == 13 && jl_String_charAt($testString, $strIndex + 1 | 0) == 10) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    a: {
        if (var$5 == 1) {
            $ch = jl_String_charAt($testString, $strIndex);
            if ($ch == 10)
                break a;
            if ($ch == 13)
                break a;
            if ($ch == 133)
                break a;
            if (($ch | 1) == 8233)
                break a;
        }
        return (-1);
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
}
function jur_EOLSet_hasConsumed($this, $matchResult) {
    var $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, (-1));
    return $res;
}
var jur_EOISet = $rt_classWithoutFields(jur_AbstractSet);
function jur_EOISet_matches($this, $stringIndex, $testString, $matchResult) {
    if ($stringIndex < ($matchResult.$transparentBounds ? jl_String_length($testString) : $matchResult.$rightBound0))
        return (-1);
    $matchResult.$hitEnd = 1;
    $matchResult.$requireEnd = 1;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
}
function jur_EOISet_hasConsumed($this, $matchResult) {
    return 0;
}
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt0 = null;
}
function jur_MultiLineSOLSet_matches($this, $strIndex, $testString, $matchResult) {
    a: {
        if ($strIndex != $matchResult.$rightBound0) {
            if (!$strIndex)
                break a;
            if ($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound0)
                break a;
            if ($this.$lt0.$isAfterLineTerminator(jl_String_charAt($testString, $strIndex - 1 | 0), jl_String_charAt($testString, $strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
}
function jur_MultiLineSOLSet_hasConsumed($this, $matchResult) {
    return 0;
}
var jur_DotAllSet = $rt_classWithoutFields(jur_JointSet);
function jur_DotAllSet__init_() {
    var var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_0(var_0);
    return var_0;
}
function jur_DotAllSet__init_0($this) {
    jur_AbstractSet__init_($this);
}
function jur_DotAllSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength, var$5, $high, var$7;
    $strLength = $matchResult.$rightBound0;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = jl_String_charAt($testString, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        var$7 = $stringIndex + 2 | 0;
        if (var$7 <= $strLength && jl_Character_isSurrogatePair($high, jl_String_charAt($testString, var$5)))
            return $this.$next1.$matches(var$7, $testString, $matchResult);
    }
    return $this.$next1.$matches(var$5, $testString, $matchResult);
}
function jur_DotAllSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_DotAllSet_getType($this) {
    return (-2147483602);
}
function jur_DotAllSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt1 = null;
}
function jur_DotSet__init_(var_0) {
    var var_1 = new jur_DotSet();
    jur_DotSet__init_0(var_1, var_0);
    return var_1;
}
function jur_DotSet__init_0($this, $lt) {
    jur_AbstractSet__init_($this);
    $this.$lt1 = $lt;
}
function jur_DotSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength, var$5, $high, $low;
    $strLength = $matchResult.$rightBound0;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = jl_String_charAt($testString, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        $stringIndex = $stringIndex + 2 | 0;
        if ($stringIndex <= $strLength) {
            $low = jl_String_charAt($testString, var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$lt1.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return $this.$lt1.$isLineTerminator($high) ? (-1) : $this.$next1.$matches(var$5, $testString, $matchResult);
}
function jur_DotSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_DotSet_getType($this) {
    return (-2147483602);
}
function jur_DotSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
function jur_UEOLSet__init_(var_0) {
    var var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_0(var_1, var_0);
    return var_1;
}
function jur_UEOLSet__init_0($this, $counter) {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
}
function jur_UEOLSet_matches($this, $strIndex, $testString, $matchResult) {
    var $rightBound;
    $rightBound = !$matchResult.$anchoringBounds ? jl_String_length($testString) : $matchResult.$rightBound0;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (($rightBound - $strIndex | 0) == 1 && jl_String_charAt($testString, $strIndex) == 10) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 1);
        return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
    }
    return (-1);
}
function jur_UEOLSet_hasConsumed($this, $matchResult) {
    var $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter0) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, (-1));
    return $res;
}
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter1 = 0;
}
function jur_UMultiLineEOLSet__init_(var_0) {
    var var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_0(var_1, var_0);
    return var_1;
}
function jur_UMultiLineEOLSet__init_0($this, $counter) {
    jur_AbstractSet__init_($this);
    $this.$consCounter1 = $counter;
}
function jur_UMultiLineEOLSet_matches($this, $strIndex, $testString, $matchResult) {
    if ((!$matchResult.$anchoringBounds ? jl_String_length($testString) - $strIndex | 0 : $matchResult.$rightBound0 - $strIndex | 0) <= 0) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (jl_String_charAt($testString, $strIndex) != 10)
        return (-1);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, 1);
    return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
}
function jur_UMultiLineEOLSet_hasConsumed($this, $matchResult) {
    var $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter1) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, (-1));
    return $res;
}
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
function jur_MultiLineEOLSet__init_(var_0) {
    var var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_0(var_1, var_0);
    return var_1;
}
function jur_MultiLineEOLSet__init_0($this, $counter) {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
}
function jur_MultiLineEOLSet_matches($this, $strIndex, $testString, $matchResult) {
    var $strDif, $ch1, $ch2;
    $strDif = !$matchResult.$anchoringBounds ? jl_String_length($testString) - $strIndex | 0 : $matchResult.$leftBound0 - $strIndex | 0;
    if (!$strDif) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($strDif < 2) {
        $ch1 = jl_String_charAt($testString, $strIndex);
        $ch2 = 97;
    } else {
        $ch1 = jl_String_charAt($testString, $strIndex);
        $ch2 = jl_String_charAt($testString, $strIndex + 1 | 0);
    }
    switch ($ch1) {
        case 10:
        case 133:
        case 8232:
        case 8233:
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        case 13:
            if ($ch2 != 10) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
                return $this.$next1.$matches($strIndex, $testString, $matchResult);
            }
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        default:
    }
    return (-1);
}
function jur_MultiLineEOLSet_hasConsumed($this, $matchResult) {
    var $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter2) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, (-1));
    return $res;
}
function jur_CIBackReferenceSet() {
    var a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter3 = 0;
}
function jur_CIBackReferenceSet__init_(var_0, var_1) {
    var var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_CIBackReferenceSet__init_0($this, $groupIndex, $consCounter) {
    jur_AbstractSet__init_($this);
    $this.$referencedGroup = $groupIndex;
    $this.$consCounter3 = $consCounter;
}
function jur_CIBackReferenceSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $group, $i, var$6, var$7;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$rightBound0) {
        $i = 0;
        while (true) {
            if ($i >= jl_String_length($group)) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, jl_String_length($group));
                return $this.$next1.$matches($stringIndex + jl_String_length($group) | 0, $testString, $matchResult);
            }
            var$6 = jl_String_charAt($group, $i);
            var$7 = $stringIndex + $i | 0;
            if (var$6 != jl_String_charAt($testString, var$7) && jur_Pattern_getSupplement(jl_String_charAt($group, $i)) != jl_String_charAt($testString, var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
}
function jur_CIBackReferenceSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_CIBackReferenceSet_getString($this, $matchResult) {
    var var$2, var$3;
    var$2 = $this.$referencedGroup;
    var$3 = jur_MatchResultImpl_getStart($matchResult, var$2);
    var$2 = jur_MatchResultImpl_getEnd($matchResult, var$2);
    return (var$2 | var$3 | (var$2 - var$3 | 0)) >= 0 && var$2 <= jl_String_length($matchResult.$string2) ? jl_String_substring($matchResult.$string2, var$3, var$2) : null;
}
function jur_CIBackReferenceSet_hasConsumed($this, $matchResult) {
    var $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter3) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, (-1));
    return $res;
}
var jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet);
function jur_BackReferenceSet__init_(var_0, var_1) {
    var var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_BackReferenceSet__init_0($this, $groupIndex, $consCounter) {
    jur_CIBackReferenceSet__init_0($this, $groupIndex, $consCounter);
}
function jur_BackReferenceSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $group, $shift;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$rightBound0) {
        $shift = !jl_String_startsWith($testString, $group, $stringIndex) ? (-1) : jl_String_length($group);
        if ($shift < 0)
            return (-1);
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, $shift);
        return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
    }
    return (-1);
}
function jur_BackReferenceSet_find($this, $strIndex, $testString, $matchResult) {
    var $group, $strLength, $testStr;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    $strLength = $matchResult.$leftBound0;
    if ($group !== null && ($strIndex + jl_String_length($group) | 0) <= $strLength) {
        $testStr = $testString;
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            $strIndex = jl_String_indexOf0($testStr, $group, $strIndex);
            if ($strIndex < 0)
                return (-1);
            if ($this.$next1.$matches($strIndex + jl_String_length($group) | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = $strIndex + 1 | 0;
        }
        return $strIndex;
    }
    return (-1);
}
function jur_BackReferenceSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var $group, $testStr, var$7;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group === null)
        return (-1);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = jl_Math_min($lastIndex, jl_String_length($testStr) - jl_String_length($group) | 0);
            b: {
                c: while (true) {
                    if (var$7 < 0) {
                        var$7 = (-1);
                        break b;
                    }
                    $lastIndex = 0;
                    while (true) {
                        if ($lastIndex >= jl_String_length($group))
                            break c;
                        if (jl_String_charAt($testStr, var$7 + $lastIndex | 0) != jl_String_charAt($group, $lastIndex))
                            break;
                        $lastIndex = $lastIndex + 1 | 0;
                    }
                    var$7 = var$7 + (-1) | 0;
                }
            }
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$7 + jl_String_length($group) | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
}
function jur_BackReferenceSet_first($this, $set) {
    return 1;
}
var jur_UCIBackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet);
function jur_UCIBackReferenceSet__init_(var_0, var_1) {
    var var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_UCIBackReferenceSet__init_0($this, $groupIndex, $consCounter) {
    jur_CIBackReferenceSet__init_0($this, $groupIndex, $consCounter);
}
function jur_UCIBackReferenceSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $group, $i;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + jl_String_length($group) | 0) <= $matchResult.$rightBound0) {
        $i = 0;
        while (true) {
            if ($i >= jl_String_length($group)) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, jl_String_length($group));
                return $this.$next1.$matches($stringIndex + jl_String_length($group) | 0, $testString, $matchResult);
            }
            if (jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($group, $i))) != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $stringIndex + $i | 0))))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
}
var jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder);
function jl_StringBuffer_insert($this, var$1, var$2, var$3, var$4) {
    jl_AbstractStringBuilder_insert2($this, var$1, var$2, var$3, var$4);
    return $this;
}
function jl_StringBuffer_append($this, var$1, var$2, var$3) {
    jl_AbstractStringBuilder_append1($this, var$1, var$2, var$3);
    return $this;
}
function jl_StringBuffer_ensureCapacity($this, var$1) {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
}
function jl_StringBuffer_insert0($this, var$1, var$2) {
    jl_AbstractStringBuilder_insert1($this, var$1, var$2);
    return $this;
}
function jur_SequenceSet() {
    var a = this; jur_LeafSet.call(a);
    a.$string0 = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
function jur_SequenceSet_accepts($this, $strIndex, $testString) {
    return !jur_SequenceSet_startsWith($this, $testString, $strIndex) ? (-1) : $this.$charCount;
}
function jur_SequenceSet_find($this, $strIndex, $testString, $matchResult) {
    var $strLength, var$5, var$6;
    $strLength = $matchResult.$rightBound0;
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$5 = jl_String_charAt($this.$string0, $this.$charCount - 1 | 0);
        a: {
            while (true) {
                var$6 = $this.$charCount;
                if ($strIndex > ($strLength - var$6 | 0)) {
                    $strIndex = (-1);
                    break a;
                }
                var$6 = jl_String_charAt($testString, ($strIndex + var$6 | 0) - 1 | 0);
                if (var$6 == var$5 && jur_SequenceSet_startsWith($this, $testString, $strIndex))
                    break;
                $strIndex = $strIndex + jur_SequenceSet$IntHash_get($this.$leftToRight, var$6) | 0;
            }
        }
        if ($strIndex < 0)
            return (-1);
        if ($this.$next1.$matches($strIndex + $this.$charCount | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = $strIndex + 1 | 0;
    }
    return $strIndex;
}
function jur_SequenceSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var var$5, var$6;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$5 = jl_String_charAt($this.$string0, 0);
        var$6 = (jl_String_length($testString) - $lastIndex | 0) - $this.$charCount | 0;
        if (var$6 <= 0)
            $lastIndex = $lastIndex + var$6 | 0;
        a: {
            while (true) {
                if ($lastIndex < $strIndex) {
                    $lastIndex = (-1);
                    break a;
                }
                var$6 = jl_String_charAt($testString, $lastIndex);
                if (var$6 == var$5 && jur_SequenceSet_startsWith($this, $testString, $lastIndex))
                    break;
                $lastIndex = $lastIndex - jur_SequenceSet$IntHash_get($this.$rightToLeft, var$6) | 0;
            }
        }
        if ($lastIndex < 0)
            return (-1);
        if ($this.$next1.$matches($lastIndex + $this.$charCount | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = $lastIndex + (-1) | 0;
    }
    return $lastIndex;
}
function jur_SequenceSet_first($this, $set) {
    var var$2;
    if ($set instanceof jur_CharSet)
        return $set.$ch2 != jl_String_charAt($this.$string0, 0) ? 0 : 1;
    if ($set instanceof jur_RangeSet)
        return jur_RangeSet_accepts($set, 0, jl_String_substring($this.$string0, 0, 1)) <= 0 ? 0 : 1;
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return jl_String_length($this.$string0) > 1 && $set.$ch1 == jl_Character_toCodePoint(jl_String_charAt($this.$string0, 0), jl_String_charAt($this.$string0, 1)) ? 1 : 0;
    }
    a: {
        b: {
            $set = $set;
            if (!$set.$contains(jl_String_charAt($this.$string0, 0))) {
                if (jl_String_length($this.$string0) <= 1)
                    break b;
                if (!$set.$contains(jl_Character_toCodePoint(jl_String_charAt($this.$string0, 0), jl_String_charAt($this.$string0, 1))))
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
}
function jur_SequenceSet_startsWith($this, $str, $from) {
    var $i;
    $i = 0;
    while ($i < $this.$charCount) {
        if (jl_String_charAt($str, $i + $from | 0) != jl_String_charAt($this.$string0, $i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
}
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string3 = null;
}
function jur_UCISequenceSet__init_(var_0) {
    var var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_0(var_1, var_0);
    return var_1;
}
function jur_UCISequenceSet__init_0($this, $substring) {
    var $res, $i, var$4;
    jur_LeafSet__init_($this);
    $res = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($res);
    $i = 0;
    while (true) {
        var$4 = $rt_compare($i, $substring.$length0);
        if (var$4 >= 0) {
            $this.$string3 = jl_AbstractStringBuilder_toString($res);
            $this.$charCount = $res.$length0;
            return;
        }
        if ($i < 0)
            break;
        if (var$4 >= 0)
            break;
        jl_AbstractStringBuilder_append0($res, jl_Character_toLowerCase(jl_Character_toUpperCase($substring.$buffer.data[$i])));
        $i = $i + 1 | 0;
    }
    $substring = new jl_IndexOutOfBoundsException;
    jl_Exception__init_($substring);
    $rt_throw($substring);
}
function jur_UCISequenceSet_accepts($this, $strIndex, $testString) {
    var $i;
    $i = 0;
    while (true) {
        if ($i >= jl_String_length($this.$string3))
            return jl_String_length($this.$string3);
        if (jl_String_charAt($this.$string3, $i) != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex + $i | 0))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
}
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
function jur_CISequenceSet_accepts($this, $strIndex, $testString) {
    var $i, var$4, var$5;
    $i = 0;
    while (true) {
        if ($i >= jl_String_length($this.$string1))
            return jl_String_length($this.$string1);
        var$4 = jl_String_charAt($this.$string1, $i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != jl_String_charAt($testString, var$5) && jur_Pattern_getSupplement(jl_String_charAt($this.$string1, $i)) != jl_String_charAt($testString, var$5))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
}
var jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields();
var jur_AbstractCharClass$PredefinedCharacterClasses_space = null;
var jur_AbstractCharClass$PredefinedCharacterClasses_digit = null;
var jur_AbstractCharClass$PredefinedCharacterClasses_contents = null;
function jur_AbstractCharClass$PredefinedCharacterClasses__clinit_() {
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_();
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = $rt_createArrayFromData($rt_arraycls(jl_Object), [$rt_createArrayFromData(jl_Object, [$rt_s(69), jur_AbstractCharClass$LazyLower__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(70), jur_AbstractCharClass$LazyUpper__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(71), jur_AbstractCharClass$LazyASCII__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(72), jur_AbstractCharClass$LazyAlpha__init_()]), $rt_createArrayFromData(jl_Object,
    [$rt_s(73), jur_AbstractCharClass$PredefinedCharacterClasses_digit]), $rt_createArrayFromData(jl_Object, [$rt_s(74), jur_AbstractCharClass$LazyAlnum__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(75), jur_AbstractCharClass$LazyPunct__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(76), jur_AbstractCharClass$LazyGraph__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(77), jur_AbstractCharClass$LazyPrint__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(78), jur_AbstractCharClass$LazyBlank__init_()]),
    $rt_createArrayFromData(jl_Object, [$rt_s(79), jur_AbstractCharClass$LazyCntrl__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(80), jur_AbstractCharClass$LazyXDigit__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(81), jur_AbstractCharClass$LazyJavaLowerCase__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(82), jur_AbstractCharClass$LazyJavaUpperCase__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(83), jur_AbstractCharClass$LazyJavaWhitespace__init_()]), $rt_createArrayFromData(jl_Object,
    [$rt_s(84), jur_AbstractCharClass$LazyJavaMirrored__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(85), jur_AbstractCharClass$LazyJavaDefined__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(86), jur_AbstractCharClass$LazyJavaDigit__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(87), jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(88), jur_AbstractCharClass$LazyJavaISOControl__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(89),
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(90), jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(91), jur_AbstractCharClass$LazyJavaLetter__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(92), jur_AbstractCharClass$LazyJavaLetterOrDigit__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(93), jur_AbstractCharClass$LazyJavaSpaceChar__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(94),
    jur_AbstractCharClass$LazyJavaTitleCase__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(95), jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(96), jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(97), jur_AbstractCharClass$PredefinedCharacterClasses_space]), $rt_createArrayFromData(jl_Object, [$rt_s(98), jur_AbstractCharClass$LazyWord__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(99),
    jur_AbstractCharClass$LazyNonWord__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(100), jur_AbstractCharClass$PredefinedCharacterClasses_space]), $rt_createArrayFromData(jl_Object, [$rt_s(101), jur_AbstractCharClass$LazyNonSpace__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(102), jur_AbstractCharClass$PredefinedCharacterClasses_digit]), $rt_createArrayFromData(jl_Object, [$rt_s(103), jur_AbstractCharClass$LazyNonDigit__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(104), jur_AbstractCharClass$LazyRange__init_(0,
    127)]), $rt_createArrayFromData(jl_Object, [$rt_s(105), jur_AbstractCharClass$LazyRange__init_(128, 255)]), $rt_createArrayFromData(jl_Object, [$rt_s(106), jur_AbstractCharClass$LazyRange__init_(256, 383)]), $rt_createArrayFromData(jl_Object, [$rt_s(107), jur_AbstractCharClass$LazyRange__init_(384, 591)]), $rt_createArrayFromData(jl_Object, [$rt_s(108), jur_AbstractCharClass$LazyRange__init_(592, 687)]), $rt_createArrayFromData(jl_Object, [$rt_s(109), jur_AbstractCharClass$LazyRange__init_(688, 767)]), $rt_createArrayFromData(jl_Object,
    [$rt_s(110), jur_AbstractCharClass$LazyRange__init_(768, 879)]), $rt_createArrayFromData(jl_Object, [$rt_s(111), jur_AbstractCharClass$LazyRange__init_(880, 1023)]), $rt_createArrayFromData(jl_Object, [$rt_s(112), jur_AbstractCharClass$LazyRange__init_(1024, 1279)]), $rt_createArrayFromData(jl_Object, [$rt_s(113), jur_AbstractCharClass$LazyRange__init_(1280, 1327)]), $rt_createArrayFromData(jl_Object, [$rt_s(114), jur_AbstractCharClass$LazyRange__init_(1328, 1423)]), $rt_createArrayFromData(jl_Object, [$rt_s(115),
    jur_AbstractCharClass$LazyRange__init_(1424, 1535)]), $rt_createArrayFromData(jl_Object, [$rt_s(116), jur_AbstractCharClass$LazyRange__init_(1536, 1791)]), $rt_createArrayFromData(jl_Object, [$rt_s(117), jur_AbstractCharClass$LazyRange__init_(1792, 1871)]), $rt_createArrayFromData(jl_Object, [$rt_s(118), jur_AbstractCharClass$LazyRange__init_(1872, 1919)]), $rt_createArrayFromData(jl_Object, [$rt_s(119), jur_AbstractCharClass$LazyRange__init_(1920, 1983)]), $rt_createArrayFromData(jl_Object, [$rt_s(120),
    jur_AbstractCharClass$LazyRange__init_(2304, 2431)]), $rt_createArrayFromData(jl_Object, [$rt_s(121), jur_AbstractCharClass$LazyRange__init_(2432, 2559)]), $rt_createArrayFromData(jl_Object, [$rt_s(122), jur_AbstractCharClass$LazyRange__init_(2560, 2687)]), $rt_createArrayFromData(jl_Object, [$rt_s(123), jur_AbstractCharClass$LazyRange__init_(2688, 2815)]), $rt_createArrayFromData(jl_Object, [$rt_s(124), jur_AbstractCharClass$LazyRange__init_(2816, 2943)]), $rt_createArrayFromData(jl_Object, [$rt_s(125),
    jur_AbstractCharClass$LazyRange__init_(2944, 3071)]), $rt_createArrayFromData(jl_Object, [$rt_s(126), jur_AbstractCharClass$LazyRange__init_(3072, 3199)]), $rt_createArrayFromData(jl_Object, [$rt_s(127), jur_AbstractCharClass$LazyRange__init_(3200, 3327)]), $rt_createArrayFromData(jl_Object, [$rt_s(128), jur_AbstractCharClass$LazyRange__init_(3328, 3455)]), $rt_createArrayFromData(jl_Object, [$rt_s(129), jur_AbstractCharClass$LazyRange__init_(3456, 3583)]), $rt_createArrayFromData(jl_Object, [$rt_s(130),
    jur_AbstractCharClass$LazyRange__init_(3584, 3711)]), $rt_createArrayFromData(jl_Object, [$rt_s(131), jur_AbstractCharClass$LazyRange__init_(3712, 3839)]), $rt_createArrayFromData(jl_Object, [$rt_s(132), jur_AbstractCharClass$LazyRange__init_(3840, 4095)]), $rt_createArrayFromData(jl_Object, [$rt_s(133), jur_AbstractCharClass$LazyRange__init_(4096, 4255)]), $rt_createArrayFromData(jl_Object, [$rt_s(134), jur_AbstractCharClass$LazyRange__init_(4256, 4351)]), $rt_createArrayFromData(jl_Object, [$rt_s(135),
    jur_AbstractCharClass$LazyRange__init_(4352, 4607)]), $rt_createArrayFromData(jl_Object, [$rt_s(136), jur_AbstractCharClass$LazyRange__init_(4608, 4991)]), $rt_createArrayFromData(jl_Object, [$rt_s(137), jur_AbstractCharClass$LazyRange__init_(4992, 5023)]), $rt_createArrayFromData(jl_Object, [$rt_s(138), jur_AbstractCharClass$LazyRange__init_(5024, 5119)]), $rt_createArrayFromData(jl_Object, [$rt_s(139), jur_AbstractCharClass$LazyRange__init_(5120, 5759)]), $rt_createArrayFromData(jl_Object, [$rt_s(140),
    jur_AbstractCharClass$LazyRange__init_(5760, 5791)]), $rt_createArrayFromData(jl_Object, [$rt_s(141), jur_AbstractCharClass$LazyRange__init_(5792, 5887)]), $rt_createArrayFromData(jl_Object, [$rt_s(142), jur_AbstractCharClass$LazyRange__init_(5888, 5919)]), $rt_createArrayFromData(jl_Object, [$rt_s(143), jur_AbstractCharClass$LazyRange__init_(5920, 5951)]), $rt_createArrayFromData(jl_Object, [$rt_s(144), jur_AbstractCharClass$LazyRange__init_(5952, 5983)]), $rt_createArrayFromData(jl_Object, [$rt_s(145),
    jur_AbstractCharClass$LazyRange__init_(5984, 6015)]), $rt_createArrayFromData(jl_Object, [$rt_s(146), jur_AbstractCharClass$LazyRange__init_(6016, 6143)]), $rt_createArrayFromData(jl_Object, [$rt_s(147), jur_AbstractCharClass$LazyRange__init_(6144, 6319)]), $rt_createArrayFromData(jl_Object, [$rt_s(148), jur_AbstractCharClass$LazyRange__init_(6400, 6479)]), $rt_createArrayFromData(jl_Object, [$rt_s(149), jur_AbstractCharClass$LazyRange__init_(6480, 6527)]), $rt_createArrayFromData(jl_Object, [$rt_s(150),
    jur_AbstractCharClass$LazyRange__init_(6528, 6623)]), $rt_createArrayFromData(jl_Object, [$rt_s(151), jur_AbstractCharClass$LazyRange__init_(6624, 6655)]), $rt_createArrayFromData(jl_Object, [$rt_s(152), jur_AbstractCharClass$LazyRange__init_(6656, 6687)]), $rt_createArrayFromData(jl_Object, [$rt_s(153), jur_AbstractCharClass$LazyRange__init_(7424, 7551)]), $rt_createArrayFromData(jl_Object, [$rt_s(154), jur_AbstractCharClass$LazyRange__init_(7552, 7615)]), $rt_createArrayFromData(jl_Object, [$rt_s(155),
    jur_AbstractCharClass$LazyRange__init_(7616, 7679)]), $rt_createArrayFromData(jl_Object, [$rt_s(156), jur_AbstractCharClass$LazyRange__init_(7680, 7935)]), $rt_createArrayFromData(jl_Object, [$rt_s(157), jur_AbstractCharClass$LazyRange__init_(7936, 8191)]), $rt_createArrayFromData(jl_Object, [$rt_s(158), jur_AbstractCharClass$LazyRange__init_(8192, 8303)]), $rt_createArrayFromData(jl_Object, [$rt_s(159), jur_AbstractCharClass$LazyRange__init_(8304, 8351)]), $rt_createArrayFromData(jl_Object, [$rt_s(160),
    jur_AbstractCharClass$LazyRange__init_(8352, 8399)]), $rt_createArrayFromData(jl_Object, [$rt_s(161), jur_AbstractCharClass$LazyRange__init_(8400, 8447)]), $rt_createArrayFromData(jl_Object, [$rt_s(162), jur_AbstractCharClass$LazyRange__init_(8448, 8527)]), $rt_createArrayFromData(jl_Object, [$rt_s(163), jur_AbstractCharClass$LazyRange__init_(8528, 8591)]), $rt_createArrayFromData(jl_Object, [$rt_s(164), jur_AbstractCharClass$LazyRange__init_(8592, 8703)]), $rt_createArrayFromData(jl_Object, [$rt_s(165),
    jur_AbstractCharClass$LazyRange__init_(8704, 8959)]), $rt_createArrayFromData(jl_Object, [$rt_s(166), jur_AbstractCharClass$LazyRange__init_(8960, 9215)]), $rt_createArrayFromData(jl_Object, [$rt_s(167), jur_AbstractCharClass$LazyRange__init_(9216, 9279)]), $rt_createArrayFromData(jl_Object, [$rt_s(168), jur_AbstractCharClass$LazyRange__init_(9280, 9311)]), $rt_createArrayFromData(jl_Object, [$rt_s(169), jur_AbstractCharClass$LazyRange__init_(9312, 9471)]), $rt_createArrayFromData(jl_Object, [$rt_s(170),
    jur_AbstractCharClass$LazyRange__init_(9472, 9599)]), $rt_createArrayFromData(jl_Object, [$rt_s(171), jur_AbstractCharClass$LazyRange__init_(9600, 9631)]), $rt_createArrayFromData(jl_Object, [$rt_s(172), jur_AbstractCharClass$LazyRange__init_(9632, 9727)]), $rt_createArrayFromData(jl_Object, [$rt_s(173), jur_AbstractCharClass$LazyRange__init_(9728, 9983)]), $rt_createArrayFromData(jl_Object, [$rt_s(174), jur_AbstractCharClass$LazyRange__init_(9984, 10175)]), $rt_createArrayFromData(jl_Object, [$rt_s(175),
    jur_AbstractCharClass$LazyRange__init_(10176, 10223)]), $rt_createArrayFromData(jl_Object, [$rt_s(176), jur_AbstractCharClass$LazyRange__init_(10224, 10239)]), $rt_createArrayFromData(jl_Object, [$rt_s(177), jur_AbstractCharClass$LazyRange__init_(10240, 10495)]), $rt_createArrayFromData(jl_Object, [$rt_s(178), jur_AbstractCharClass$LazyRange__init_(10496, 10623)]), $rt_createArrayFromData(jl_Object, [$rt_s(179), jur_AbstractCharClass$LazyRange__init_(10624, 10751)]), $rt_createArrayFromData(jl_Object, [$rt_s(180),
    jur_AbstractCharClass$LazyRange__init_(10752, 11007)]), $rt_createArrayFromData(jl_Object, [$rt_s(181), jur_AbstractCharClass$LazyRange__init_(11008, 11263)]), $rt_createArrayFromData(jl_Object, [$rt_s(182), jur_AbstractCharClass$LazyRange__init_(11264, 11359)]), $rt_createArrayFromData(jl_Object, [$rt_s(183), jur_AbstractCharClass$LazyRange__init_(11392, 11519)]), $rt_createArrayFromData(jl_Object, [$rt_s(184), jur_AbstractCharClass$LazyRange__init_(11520, 11567)]), $rt_createArrayFromData(jl_Object, [$rt_s(185),
    jur_AbstractCharClass$LazyRange__init_(11568, 11647)]), $rt_createArrayFromData(jl_Object, [$rt_s(186), jur_AbstractCharClass$LazyRange__init_(11648, 11743)]), $rt_createArrayFromData(jl_Object, [$rt_s(187), jur_AbstractCharClass$LazyRange__init_(11776, 11903)]), $rt_createArrayFromData(jl_Object, [$rt_s(188), jur_AbstractCharClass$LazyRange__init_(11904, 12031)]), $rt_createArrayFromData(jl_Object, [$rt_s(189), jur_AbstractCharClass$LazyRange__init_(12032, 12255)]), $rt_createArrayFromData(jl_Object, [$rt_s(190),
    jur_AbstractCharClass$LazyRange__init_(12272, 12287)]), $rt_createArrayFromData(jl_Object, [$rt_s(191), jur_AbstractCharClass$LazyRange__init_(12288, 12351)]), $rt_createArrayFromData(jl_Object, [$rt_s(192), jur_AbstractCharClass$LazyRange__init_(12352, 12447)]), $rt_createArrayFromData(jl_Object, [$rt_s(193), jur_AbstractCharClass$LazyRange__init_(12448, 12543)]), $rt_createArrayFromData(jl_Object, [$rt_s(194), jur_AbstractCharClass$LazyRange__init_(12544, 12591)]), $rt_createArrayFromData(jl_Object, [$rt_s(195),
    jur_AbstractCharClass$LazyRange__init_(12592, 12687)]), $rt_createArrayFromData(jl_Object, [$rt_s(196), jur_AbstractCharClass$LazyRange__init_(12688, 12703)]), $rt_createArrayFromData(jl_Object, [$rt_s(197), jur_AbstractCharClass$LazyRange__init_(12704, 12735)]), $rt_createArrayFromData(jl_Object, [$rt_s(198), jur_AbstractCharClass$LazyRange__init_(12736, 12783)]), $rt_createArrayFromData(jl_Object, [$rt_s(199), jur_AbstractCharClass$LazyRange__init_(12784, 12799)]), $rt_createArrayFromData(jl_Object, [$rt_s(200),
    jur_AbstractCharClass$LazyRange__init_(12800, 13055)]), $rt_createArrayFromData(jl_Object, [$rt_s(201), jur_AbstractCharClass$LazyRange__init_(13056, 13311)]), $rt_createArrayFromData(jl_Object, [$rt_s(202), jur_AbstractCharClass$LazyRange__init_(13312, 19893)]), $rt_createArrayFromData(jl_Object, [$rt_s(203), jur_AbstractCharClass$LazyRange__init_(19904, 19967)]), $rt_createArrayFromData(jl_Object, [$rt_s(204), jur_AbstractCharClass$LazyRange__init_(19968, 40959)]), $rt_createArrayFromData(jl_Object, [$rt_s(205),
    jur_AbstractCharClass$LazyRange__init_(40960, 42127)]), $rt_createArrayFromData(jl_Object, [$rt_s(206), jur_AbstractCharClass$LazyRange__init_(42128, 42191)]), $rt_createArrayFromData(jl_Object, [$rt_s(207), jur_AbstractCharClass$LazyRange__init_(42752, 42783)]), $rt_createArrayFromData(jl_Object, [$rt_s(208), jur_AbstractCharClass$LazyRange__init_(43008, 43055)]), $rt_createArrayFromData(jl_Object, [$rt_s(209), jur_AbstractCharClass$LazyRange__init_(44032, 55203)]), $rt_createArrayFromData(jl_Object, [$rt_s(210),
    jur_AbstractCharClass$LazyRange__init_(55296, 56191)]), $rt_createArrayFromData(jl_Object, [$rt_s(211), jur_AbstractCharClass$LazyRange__init_(56192, 56319)]), $rt_createArrayFromData(jl_Object, [$rt_s(212), jur_AbstractCharClass$LazyRange__init_(56320, 57343)]), $rt_createArrayFromData(jl_Object, [$rt_s(213), jur_AbstractCharClass$LazyRange__init_(57344, 63743)]), $rt_createArrayFromData(jl_Object, [$rt_s(214), jur_AbstractCharClass$LazyRange__init_(63744, 64255)]), $rt_createArrayFromData(jl_Object, [$rt_s(215),
    jur_AbstractCharClass$LazyRange__init_(64256, 64335)]), $rt_createArrayFromData(jl_Object, [$rt_s(216), jur_AbstractCharClass$LazyRange__init_(64336, 65023)]), $rt_createArrayFromData(jl_Object, [$rt_s(217), jur_AbstractCharClass$LazyRange__init_(65024, 65039)]), $rt_createArrayFromData(jl_Object, [$rt_s(218), jur_AbstractCharClass$LazyRange__init_(65040, 65055)]), $rt_createArrayFromData(jl_Object, [$rt_s(219), jur_AbstractCharClass$LazyRange__init_(65056, 65071)]), $rt_createArrayFromData(jl_Object, [$rt_s(220),
    jur_AbstractCharClass$LazyRange__init_(65072, 65103)]), $rt_createArrayFromData(jl_Object, [$rt_s(221), jur_AbstractCharClass$LazyRange__init_(65104, 65135)]), $rt_createArrayFromData(jl_Object, [$rt_s(222), jur_AbstractCharClass$LazyRange__init_(65136, 65279)]), $rt_createArrayFromData(jl_Object, [$rt_s(223), jur_AbstractCharClass$LazyRange__init_(65280, 65519)]), $rt_createArrayFromData(jl_Object, [$rt_s(224), jur_AbstractCharClass$LazyRange__init_(0, 1114111)]), $rt_createArrayFromData(jl_Object, [$rt_s(225),
    jur_AbstractCharClass$LazySpecialsBlock__init_()]), $rt_createArrayFromData(jl_Object, [$rt_s(226), jur_AbstractCharClass$LazyCategory__init_(0, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(227), jur_AbstractCharClass$LazyCategoryScope__init_(62, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(228), jur_AbstractCharClass$LazyCategory__init_(1, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(229), jur_AbstractCharClass$LazyCategory__init_(2, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(230), jur_AbstractCharClass$LazyCategory__init_(3,
    0)]), $rt_createArrayFromData(jl_Object, [$rt_s(231), jur_AbstractCharClass$LazyCategory__init_(4, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(232), jur_AbstractCharClass$LazyCategory__init_(5, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(233), jur_AbstractCharClass$LazyCategoryScope__init_(448, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(234), jur_AbstractCharClass$LazyCategory__init_(6, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(235), jur_AbstractCharClass$LazyCategory__init_(7, 0)]), $rt_createArrayFromData(jl_Object,
    [$rt_s(236), jur_AbstractCharClass$LazyCategory__init_(8, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(237), jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(238), jur_AbstractCharClass$LazyCategory__init_(9, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(239), jur_AbstractCharClass$LazyCategory__init_(10, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(240), jur_AbstractCharClass$LazyCategory__init_(11, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(241),
    jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(242), jur_AbstractCharClass$LazyCategory__init_(12, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(243), jur_AbstractCharClass$LazyCategory__init_(13, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(244), jur_AbstractCharClass$LazyCategory__init_(14, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(245), jur_AbstractCharClass$LazyCategoryScope__init_0(983040, 1, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(246),
    jur_AbstractCharClass$LazyCategory__init_(15, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(247), jur_AbstractCharClass$LazyCategory__init_(16, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(248), jur_AbstractCharClass$LazyCategory__init_(18, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(249), jur_AbstractCharClass$LazyCategory__init_0(19, 0, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(250), jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(251),
    jur_AbstractCharClass$LazyCategory__init_(20, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(252), jur_AbstractCharClass$LazyCategory__init_(21, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(253), jur_AbstractCharClass$LazyCategory__init_(22, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(254), jur_AbstractCharClass$LazyCategory__init_(23, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(255), jur_AbstractCharClass$LazyCategory__init_(24, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(256), jur_AbstractCharClass$LazyCategoryScope__init_(2113929216,
    1)]), $rt_createArrayFromData(jl_Object, [$rt_s(257), jur_AbstractCharClass$LazyCategory__init_(25, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(258), jur_AbstractCharClass$LazyCategory__init_(26, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(259), jur_AbstractCharClass$LazyCategory__init_(27, 0)]), $rt_createArrayFromData(jl_Object, [$rt_s(260), jur_AbstractCharClass$LazyCategory__init_(28, 1)]), $rt_createArrayFromData(jl_Object, [$rt_s(261), jur_AbstractCharClass$LazyCategory__init_(29, 0)]), $rt_createArrayFromData(jl_Object,
    [$rt_s(262), jur_AbstractCharClass$LazyCategory__init_(30, 0)])]);
}
function jur_AbstractCharClass$LazyCharClass() {
    var a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
function jur_AbstractCharClass$LazyCharClass_getValue($this, $negative) {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = jur_AbstractCharClass_setNegative($this.$computeValue(), 1);
    if ($negative)
        return $this.$negValue;
    return $this.$posValue;
}
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
function jur_UCISupplCharSet_accepts($this, $strIndex, $testString) {
    var $low, $high;
    $low = $strIndex + 1 | 0;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$ch0 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
}
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low0 = 0;
}
function jur_LowSurrogateCharSet__init_(var_0) {
    var var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
}
function jur_LowSurrogateCharSet__init_0($this, $low) {
    jur_AbstractSet__init_($this);
    $this.$low0 = $low;
}
function jur_LowSurrogateCharSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_LowSurrogateCharSet_matches($this, $stringIndex, $testString, $matchResult) {
    var var$4, $low;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 > $matchResult.$rightBound0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $low = jl_String_charAt($testString, $stringIndex);
    if ($stringIndex > $matchResult.$leftBound0 && jl_Character_isHighSurrogate(jl_String_charAt($testString, $stringIndex - 1 | 0)))
        return (-1);
    if ($this.$low0 != $low)
        return (-1);
    return $this.$next1.$matches(var$4, $testString, $matchResult);
}
function jur_LowSurrogateCharSet_find($this, $strIndex, $testString, $matchResult) {
    var $testStr, $startStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $startStr = $matchResult.$leftBound0;
    $strLength = $matchResult.$rightBound0;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$7 = jl_String_indexOf($testStr, $this.$low0, $strIndex);
        if (var$7 < 0)
            return (-1);
        if (var$7 > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, var$7 - 1 | 0))) {
            $strIndex = var$7 + 1 | 0;
            continue;
        }
        var$8 = $this.$next1;
        $strIndex = var$7 + 1 | 0;
        if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$7;
}
function jur_LowSurrogateCharSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var $startStr, $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $startStr = $matchResult.$leftBound0;
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low0, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($lastIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, $lastIndex - 1 | 0))) {
                $lastIndex = $lastIndex + (-2) | 0;
                continue;
            }
            if ($this.$next1.$matches($lastIndex + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
}
function jur_LowSurrogateCharSet_first($this, $set) {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_HighSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_LowSurrogateCharSet))
        return 1;
    return $set.$low0 != $this.$low0 ? 0 : 1;
}
function jur_LowSurrogateCharSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high0 = 0;
}
function jur_HighSurrogateCharSet__init_(var_0) {
    var var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
}
function jur_HighSurrogateCharSet__init_0($this, $high) {
    jur_AbstractSet__init_($this);
    $this.$high0 = $high;
}
function jur_HighSurrogateCharSet_setNext($this, $next) {
    $this.$next1 = $next;
}
function jur_HighSurrogateCharSet_matches($this, $stringIndex, $testString, $matchResult) {
    var $strLength, var$5, $low, $high;
    $strLength = $matchResult.$rightBound0;
    var$5 = $stringIndex + 1 | 0;
    $low = $rt_compare(var$5, $strLength);
    if ($low > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = jl_String_charAt($testString, $stringIndex);
    if ($low < 0 && jl_Character_isLowSurrogate(jl_String_charAt($testString, var$5)))
        return (-1);
    if ($this.$high0 != $high)
        return (-1);
    return $this.$next1.$matches(var$5, $testString, $matchResult);
}
function jur_HighSurrogateCharSet_find($this, $strIndex, $testString, $matchResult) {
    var $testStr, $strLength, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound0;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf($testStr, $this.$high0, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, $strIndex))) {
            $strIndex = var$6 + 2 | 0;
            continue;
        }
        if ($this.$next1.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
}
function jur_HighSurrogateCharSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var $testStr, $strLength, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound0;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$high0, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            var$7 = $lastIndex + 1 | 0;
            if (var$7 < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, var$7))) {
                $lastIndex = $lastIndex + (-1) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$7, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
}
function jur_HighSurrogateCharSet_first($this, $set) {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_LowSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_HighSurrogateCharSet))
        return 1;
    return $set.$high0 != $this.$high0 ? 0 : 1;
}
function jur_HighSurrogateCharSet_hasConsumed($this, $matchResult) {
    return 1;
}
function jur_SupplCharSet() {
    var a = this; jur_LeafSet.call(a);
    a.$high = 0;
    a.$low = 0;
    a.$ch1 = 0;
}
function jur_SupplCharSet_accepts($this, $strIndex, $testString) {
    var $low, $high;
    $low = $strIndex + 1 | 0;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$high == $high && $this.$low == $low ? 2 : (-1);
}
function jur_SupplCharSet_find($this, $strIndex, $testString, $matchResult) {
    var $testStr, $strLength, $ch;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound0;
    while ($strIndex < $strLength) {
        $strIndex = jl_String_indexOf($testStr, $this.$high, $strIndex);
        if ($strIndex < 0)
            return (-1);
        $strIndex = $strIndex + 1 | 0;
        if ($strIndex >= $strLength)
            continue;
        $ch = jl_String_charAt($testStr, $strIndex);
        if ($this.$low == $ch && $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
            return $strIndex + (-1) | 0;
        $strIndex = $strIndex + 1 | 0;
    }
    return (-1);
}
function jur_SupplCharSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult) {
    var $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low, $lastIndex) + (-1) | 0;
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($this.$high == jl_String_charAt($testStr, $lastIndex) && $this.$next1.$matches($lastIndex + 2 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
}
function jur_SupplCharSet_first($this, $set) {
    if ($set instanceof jur_SupplCharSet)
        return $set.$ch1 != $this.$ch1 ? 0 : 1;
    if ($set instanceof jur_SupplRangeSet)
        return $set.$contains($this.$ch1);
    if ($set instanceof jur_CharSet)
        return 0;
    if (!($set instanceof jur_RangeSet))
        return 1;
    return 0;
}
var jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator);
function jur_AbstractLineTerminator$1_isLineTerminator($this, $ch) {
    return $ch != 10 ? 0 : 1;
}
function jur_AbstractLineTerminator$1_isAfterLineTerminator($this, $ch, $ch2) {
    return $ch != 10 ? 0 : 1;
}
var jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator);
function jur_AbstractLineTerminator$2_isLineTerminator($this, $ch) {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
}
function jur_AbstractLineTerminator$2_isAfterLineTerminator($this, $ch, $ch2) {
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
}
function jur_SequenceSet$IntHash() {
    var a = this; jl_Object.call(a);
    a.$table = null;
    a.$values0 = null;
    a.$mask = 0;
    a.$size2 = 0;
}
function jur_SequenceSet$IntHash__init_(var_0) {
    var var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
}
function jur_SequenceSet$IntHash__init_0($this, $size) {
    var var$2, var$3;
    while (true) {
        var$2 = $this.$mask;
        if ($size < var$2)
            break;
        $this.$mask = var$2 << 1 | 1;
    }
    var$3 = var$2 << 1 | 1;
    $this.$mask = var$3;
    var$3 = var$3 + 1 | 0;
    $this.$table = $rt_createIntArray(var$3);
    $this.$values0 = $rt_createIntArray(var$3);
    $this.$size2 = $size;
}
function jur_SequenceSet$IntHash_put($this, $key, $value) {
    var $i, var$4, $hashCode, var$6;
    $i = 0;
    var$4 = $this.$mask;
    $hashCode = $key & var$4;
    while (true) {
        var$6 = $this.$table.data;
        if (!var$6[$hashCode])
            break;
        if (var$6[$hashCode] == $key)
            break;
        $i = ($i + 1 | 0) & var$4;
        $hashCode = ($hashCode + $i | 0) & var$4;
    }
    var$6[$hashCode] = $key;
    $this.$values0.data[$hashCode] = $value;
}
function jur_SequenceSet$IntHash_get($this, $key) {
    var var$2, $hashCode, $i, $storedKey;
    var$2 = $this.$mask;
    $hashCode = $key & var$2;
    $i = 0;
    while (true) {
        $storedKey = $this.$table.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values0.data[$hashCode];
        $i = ($i + 1 | 0) & var$2;
        $hashCode = ($hashCode + $i | 0) & var$2;
    }
    return $this.$size2;
}
var jur_IntHash = $rt_classWithoutFields();
var jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazySpace__init_() {
    var var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazySpace__init_0($this) {}
function jur_AbstractCharClass$LazySpace_computeValue($this) {
    return jur_CharClass_add(jur_CharClass_add0(jur_CharClass__init_0(), 9, 13), 32);
}
var jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyDigit__init_() {
    var var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyDigit__init_0($this) {}
function jur_AbstractCharClass$LazyDigit_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass__init_0(), 48, 57);
}
var jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyLower__init_() {
    var var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyLower__init_0($this) {}
function jur_AbstractCharClass$LazyLower_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass__init_0(), 97, 122);
}
var jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyUpper__init_() {
    var var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyUpper__init_0($this) {}
function jur_AbstractCharClass$LazyUpper_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass__init_0(), 65, 90);
}
var jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyASCII__init_() {
    var var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyASCII__init_0($this) {}
function jur_AbstractCharClass$LazyASCII_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass__init_0(), 0, 127);
}
var jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyAlpha__init_() {
    var var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyAlpha__init_0($this) {}
function jur_AbstractCharClass$LazyAlpha_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_0(), 97, 122), 65, 90);
}
var jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha);
function jur_AbstractCharClass$LazyAlnum__init_() {
    var var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyAlnum__init_0($this) {}
function jur_AbstractCharClass$LazyAlnum_computeValue($this) {
    return jur_CharClass_add0(jur_AbstractCharClass$LazyAlpha_computeValue($this), 48, 57);
}
var jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyPunct__init_() {
    var var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyPunct__init_0($this) {}
function jur_AbstractCharClass$LazyPunct_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_0(), 33, 64), 91, 96), 123, 126);
}
var jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum);
function jur_AbstractCharClass$LazyGraph__init_() {
    var var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyGraph__init_0($this) {}
function jur_AbstractCharClass$LazyGraph_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass_add0(jur_AbstractCharClass$LazyAlnum_computeValue($this), 33, 64), 91, 96), 123, 126);
}
var jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph);
function jur_AbstractCharClass$LazyPrint__init_() {
    var var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyPrint__init_0($this) {}
function jur_AbstractCharClass$LazyPrint_computeValue($this) {
    return jur_CharClass_add(jur_AbstractCharClass$LazyGraph_computeValue($this), 32);
}
var jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyBlank__init_() {
    var var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyBlank__init_0($this) {}
function jur_AbstractCharClass$LazyBlank_computeValue($this) {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_0(), 32), 9);
}
var jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyCntrl__init_() {
    var var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyCntrl__init_0($this) {}
function jur_AbstractCharClass$LazyCntrl_computeValue($this) {
    return jur_CharClass_add(jur_CharClass_add0(jur_CharClass__init_0(), 0, 31), 127);
}
var jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyXDigit__init_() {
    var var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyXDigit__init_0($this) {}
function jur_AbstractCharClass$LazyXDigit_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_0(), 48, 57), 97, 102), 65, 70);
}
var jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaLowerCase__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaLowerCase__init_0($this) {}
function jur_AbstractCharClass$LazyJavaLowerCase_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLowerCase$1;
    $chCl.$this$022 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaUpperCase__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaUpperCase__init_0($this) {}
function jur_AbstractCharClass$LazyJavaUpperCase_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUpperCase$1;
    $chCl.$this$023 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaWhitespace__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaWhitespace__init_0($this) {}
function jur_AbstractCharClass$LazyJavaWhitespace_computeValue($this) {
    var var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaWhitespace$1;
    var$1.$this$024 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
}
var jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaMirrored__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaMirrored__init_0($this) {}
function jur_AbstractCharClass$LazyJavaMirrored_computeValue($this) {
    var var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaMirrored$1;
    var$1.$this$025 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
}
var jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaDefined__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaDefined__init_0($this) {}
function jur_AbstractCharClass$LazyJavaDefined_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDefined$1;
    $chCl.$this$026 = $this;
    jur_AbstractCharClass__init_($chCl);
    ju_BitSet_set0($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaDigit__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaDigit__init_0($this) {}
function jur_AbstractCharClass$LazyJavaDigit_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDigit$1;
    $chCl.$this$027 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0($this) {}
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1;
    $chCl.$this$028 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaISOControl__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaISOControl__init_0($this) {}
function jur_AbstractCharClass$LazyJavaISOControl_computeValue($this) {
    var var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaISOControl$1;
    var$1.$this$029 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
}
var jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0($this) {}
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1;
    $chCl.$this$030 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0($this) {}
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1;
    $chCl.$this$031 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaLetter__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaLetter__init_0($this) {}
function jur_AbstractCharClass$LazyJavaLetter_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetter$1;
    $chCl.$this$032 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaLetterOrDigit__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0($this) {}
function jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1;
    $chCl.$this$033 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaSpaceChar__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaSpaceChar__init_0($this) {}
function jur_AbstractCharClass$LazyJavaSpaceChar_computeValue($this) {
    var var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1;
    var$1.$this$034 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
}
var jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaTitleCase__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaTitleCase__init_0($this) {}
function jur_AbstractCharClass$LazyJavaTitleCase_computeValue($this) {
    var var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaTitleCase$1;
    var$1.$this$035 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
}
var jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0($this) {}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1;
    $chCl.$this$036 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_() {
    var var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0($this) {}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue($this) {
    var $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1;
    $chCl.$this$037 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazyWord__init_() {
    var var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyWord__init_0($this) {}
function jur_AbstractCharClass$LazyWord_computeValue($this) {
    return jur_CharClass_add(jur_CharClass_add0(jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_0(), 97, 122), 65, 90), 48, 57), 95);
}
var jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord);
function jur_AbstractCharClass$LazyNonWord__init_() {
    var var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyNonWord__init_0($this) {}
function jur_AbstractCharClass$LazyNonWord_computeValue($this) {
    var $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyWord_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace);
function jur_AbstractCharClass$LazyNonSpace__init_() {
    var var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyNonSpace__init_0($this) {}
function jur_AbstractCharClass$LazyNonSpace_computeValue($this) {
    var $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazySpace_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
var jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit);
function jur_AbstractCharClass$LazyNonDigit__init_() {
    var var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazyNonDigit__init_0($this) {}
function jur_AbstractCharClass$LazyNonDigit_computeValue($this) {
    var $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyDigit_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
}
function jur_AbstractCharClass$LazyRange() {
    var a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start5 = 0;
    a.$end1 = 0;
}
function jur_AbstractCharClass$LazyRange__init_(var_0, var_1) {
    var var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
}
function jur_AbstractCharClass$LazyRange__init_0($this, $start, $end) {
    $this.$start5 = $start;
    $this.$end1 = $end;
}
function jur_AbstractCharClass$LazyRange_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass__init_0(), $this.$start5, $this.$end1);
}
var jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass);
function jur_AbstractCharClass$LazySpecialsBlock__init_() {
    var var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_0(var_0);
    return var_0;
}
function jur_AbstractCharClass$LazySpecialsBlock__init_0($this) {}
function jur_AbstractCharClass$LazySpecialsBlock_computeValue($this) {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_0(), 65279, 65279), 65520, 65533);
}
function jur_AbstractCharClass$LazyCategory() {
    var a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category = 0;
    a.$mayContainSupplCodepoints0 = 0;
    a.$containsAllSurrogates = 0;
}
function jur_AbstractCharClass$LazyCategory__init_(var_0, var_1) {
    var var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_1(var_2, var_0, var_1);
    return var_2;
}
function jur_AbstractCharClass$LazyCategory__init_0(var_0, var_1, var_2) {
    var var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_2(var_3, var_0, var_1, var_2);
    return var_3;
}
function jur_AbstractCharClass$LazyCategory__init_1($this, $cat, $mayContainSupplCodepoints) {
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category = $cat;
}
function jur_AbstractCharClass$LazyCategory__init_2($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) {
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category = $cat;
}
function jur_AbstractCharClass$LazyCategory_computeValue($this) {
    var $chCl;
    $chCl = jur_UnicodeCategory__init_($this.$category);
    if ($this.$containsAllSurrogates)
        ju_BitSet_set0($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints0;
    return $chCl;
}
function jur_AbstractCharClass$LazyCategoryScope() {
    var a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates0 = 0;
}
function jur_AbstractCharClass$LazyCategoryScope__init_(var_0, var_1) {
    var var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
}
function jur_AbstractCharClass$LazyCategoryScope__init_0(var_0, var_1, var_2) {
    var var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_2(var_3, var_0, var_1, var_2);
    return var_3;
}
function jur_AbstractCharClass$LazyCategoryScope__init_1($this, $cat, $mayContainSupplCodepoints) {
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
}
function jur_AbstractCharClass$LazyCategoryScope__init_2($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) {
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
}
function jur_AbstractCharClass$LazyCategoryScope_computeValue($this) {
    var $chCl;
    $chCl = new jur_UnicodeCategoryScope;
    jur_UnicodeCategory__init_0($chCl, $this.$category0);
    if ($this.$containsAllSurrogates0)
        ju_BitSet_set0($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints1;
    return $chCl;
}
var otjc_JSString = $rt_classWithoutFields();
function otciu_UnicodeHelper$Range() {
    var a = this; jl_Object.call(a);
    a.$start2 = 0;
    a.$end0 = 0;
    a.$data = null;
}
function otciu_UnicodeHelper$Range__init_(var_0, var_1, var_2) {
    var var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_0(var_3, var_0, var_1, var_2);
    return var_3;
}
function otciu_UnicodeHelper$Range__init_0($this, $start, $end, $data) {
    $this.$start2 = $start;
    $this.$end0 = $end;
    $this.$data = $data;
}
var otcic_Console = $rt_classWithoutFields();
function jur_AbstractCharClass$1() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$02 = null;
}
function jur_AbstractCharClass$1_contains($this, $ch) {
    var $index;
    $index = $ch - 55296 | 0;
    return $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS, $index) : 0;
}
function jur_AbstractCharClass$2() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$03 = null;
}
function jur_AbstractCharClass$2_contains($this, $ch) {
    var $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS0, $index) : 0;
    return $this.$val$thisClass.$contains($ch) && !$containslHS ? 1 : 0;
}
function jur_CharClass$18() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$021 = null;
}
function jur_CharClass$18_contains($this, $ch) {
    return $this.$alt0 ^ ju_BitSet_get($this.$val$bs, $ch);
}
function jur_CharClass$18_toString($this) {
    var $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$val$bs, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append2($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append0($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$val$bs, $i + 1 | 0);
    }
    var$3 = $temp.$length0;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
}
function jur_CharClass$1() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$cc1 = null;
    a.$this$06 = null;
}
function jur_CharClass$1_contains($this, $ch) {
    return $this.$val$cc1.$contains($ch);
}
function jur_CharClass$3() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt1 = 0;
    a.$val$cc2 = null;
    a.$this$07 = null;
}
function jur_CharClass$3_contains($this, $ch) {
    return !($this.$val$curAlt1 ^ ju_BitSet_get($this.$this$07.$bits, $ch)) && !($this.$val$curAlt1 ^ $this.$this$07.$inverted ^ $this.$val$cc2.$contains($ch)) ? 0 : 1;
}
function jur_CharClass$2() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt2 = 0;
    a.$val$cc3 = null;
    a.$this$08 = null;
}
function jur_CharClass$2_contains($this, $ch) {
    return !($this.$val$curAlt2 ^ ju_BitSet_get($this.$this$08.$bits, $ch)) && !($this.$val$curAlt2 ^ $this.$this$08.$inverted ^ $this.$val$cc3.$contains($ch)) ? 1 : 0;
}
function jur_CharClass$5() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$nb = null;
    a.$val$cc = null;
    a.$this$04 = null;
}
function jur_CharClass$5_contains($this, $ch) {
    return $this.$val$curAlt ^ (!$this.$val$nb.$contains($ch) && !$this.$val$cc.$contains($ch) ? 0 : 1);
}
function jur_CharClass$4() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$nb0 = null;
    a.$val$cc0 = null;
    a.$this$05 = null;
}
function jur_CharClass$4_contains($this, $ch) {
    return $this.$val$curAlt0 ^ (!$this.$val$nb0.$contains($ch) && !$this.$val$cc0.$contains($ch) ? 0 : 1) ? 0 : 1;
}
function jur_CharClass$7() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$this$011 = null;
}
function jur_CharClass$7_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz1, $ch);
}
function jur_CharClass$6() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$this$012 = null;
}
function jur_CharClass$6_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz2, $ch) ? 0 : 1;
}
function jur_CharClass$9() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz3 = null;
    a.$val$curAlt5 = 0;
    a.$this$013 = null;
}
function jur_CharClass$9_contains($this, $ch) {
    return !jur_CharClass_contains($this.$val$clazz3, $ch) && !($this.$val$curAlt5 ^ ju_BitSet_get($this.$this$013.$bits, $ch)) ? 0 : 1;
}
function jur_CharClass$8() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$val$curAlt6 = 0;
    a.$this$014 = null;
}
function jur_CharClass$8_contains($this, $ch) {
    return !jur_CharClass_contains($this.$val$clazz4, $ch) && !($this.$val$curAlt6 ^ ju_BitSet_get($this.$this$014.$bits, $ch)) ? 1 : 0;
}
function jur_CharClass$11() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt3 = 0;
    a.$val$nb1 = null;
    a.$val$clazz = null;
    a.$this$09 = null;
}
function jur_CharClass$11_contains($this, $ch) {
    return !($this.$val$curAlt3 ^ $this.$val$nb1.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz, $ch) ? 0 : 1;
}
function jur_CharClass$10() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt4 = 0;
    a.$val$nb2 = null;
    a.$val$clazz0 = null;
    a.$this$010 = null;
}
function jur_CharClass$10_contains($this, $ch) {
    return !($this.$val$curAlt4 ^ $this.$val$nb2.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz0, $ch) ? 1 : 0;
}
function jur_CharClass$13() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz7 = null;
    a.$this$017 = null;
}
function jur_CharClass$13_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz7, $ch);
}
function jur_CharClass$12() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz8 = null;
    a.$this$018 = null;
}
function jur_CharClass$12_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz8, $ch) ? 0 : 1;
}
function jur_CharClass$15() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz9 = null;
    a.$val$curAlt9 = 0;
    a.$this$019 = null;
}
function jur_CharClass$15_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz9, $ch) && $this.$val$curAlt9 ^ ju_BitSet_get($this.$this$019.$bits, $ch) ? 1 : 0;
}
function jur_CharClass$14() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz10 = null;
    a.$val$curAlt10 = 0;
    a.$this$020 = null;
}
function jur_CharClass$14_contains($this, $ch) {
    return jur_CharClass_contains($this.$val$clazz10, $ch) && $this.$val$curAlt10 ^ ju_BitSet_get($this.$this$020.$bits, $ch) ? 0 : 1;
}
function jur_CharClass$17() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$clazz5 = null;
    a.$this$015 = null;
}
function jur_CharClass$17_contains($this, $ch) {
    return $this.$val$curAlt7 ^ $this.$val$nb3.$contains($ch) && jur_CharClass_contains($this.$val$clazz5, $ch) ? 1 : 0;
}
function jur_CharClass$16() {
    var a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt8 = 0;
    a.$val$nb4 = null;
    a.$val$clazz6 = null;
    a.$this$016 = null;
}
function jur_CharClass$16_contains($this, $ch) {
    return $this.$val$curAlt8 ^ $this.$val$nb4.$contains($ch) && jur_CharClass_contains($this.$val$clazz6, $ch) ? 0 : 1;
}
var jl_IllegalStateException = $rt_classWithoutFields(jl_Exception);
var jnc_CoderMalfunctionError = $rt_classWithoutFields(jl_Error);
var jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet);
function jur_BackReferencedSingleSet_find($this, $startSearch, $testString, $matchResult) {
    var $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$rightBound0;
    a: {
        while (true) {
            if ($startSearch > $lastIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex0);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $saveStart);
            $startSearch = $startSearch + 1 | 0;
        }
    }
    return $startSearch;
}
function jur_BackReferencedSingleSet_findBack($this, $stringIndex, $startSearch, $testString, $matchResult) {
    var $res, $saveStart;
    $res = 0;
    a: {
        while (true) {
            if ($startSearch < $stringIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex0);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex0, $saveStart);
            $startSearch = $startSearch + (-1) | 0;
        }
    }
    return $startSearch;
}
function jur_BackReferencedSingleSet_processBackRefReplacement($this) {
    return null;
}
var jur_MatchResult = $rt_classWithoutFields(0);
function jur_Matcher() {
    var a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start0 = null;
    a.$string = null;
    a.$matchResult = null;
    a.$leftBound = 0;
    a.$rightBound = 0;
}
function jur_Matcher_find($this, $start) {
    var $stringLength, var$3, var$4;
    $stringLength = jl_String_length($this.$string);
    if ($start >= 0 && $start <= $stringLength) {
        jur_MatchResultImpl_reset($this.$matchResult, null, (-1), (-1));
        var$3 = $this.$matchResult;
        var$3.$mode1 = 1;
        var$3.$startIndex = $start;
        $stringLength = var$3.$previousMatch;
        if ($stringLength < 0)
            $stringLength = $start;
        var$3.$previousMatch = $stringLength;
        $start = $this.$start0.$find0($start, $this.$string, var$3);
        if ($start == (-1))
            $this.$matchResult.$hitEnd = 1;
        if ($start >= 0) {
            var$3 = $this.$matchResult;
            if (var$3.$valid) {
                var$4 = var$3.$groupBounds.data;
                if (var$4[0] == (-1)) {
                    $stringLength = var$3.$startIndex;
                    var$4[0] = $stringLength;
                    var$4[1] = $stringLength;
                }
                var$3.$previousMatch = jur_MatchResultImpl_end(var$3);
                return 1;
            }
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    jl_Throwable__init_(var$3, jl_String_valueOf($start));
    $rt_throw(var$3);
}
function jur_Matcher_start($this) {
    return jur_MatchResultImpl_start0($this.$matchResult, 0);
}
function jur_Matcher_end($this) {
    return jur_MatchResultImpl_end0($this.$matchResult, 0);
}
var jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException);
function jnci_BufferedEncoder$Controller() {
    var a = this; jl_Object.call(a);
    a.$in = null;
    a.$out0 = null;
    a.$inPosition = 0;
    a.$outPosition = 0;
}
function jnci_BufferedEncoder$Controller_hasMoreOutput($this, $sz) {
    return jn_Buffer_remaining($this.$out0) < $sz ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$022 = null;
}
function jur_AbstractCharClass$LazyJavaLowerCase$1_contains($this, $ch) {
    return jl_Character_getType($ch) != 2 ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$023 = null;
}
function jur_AbstractCharClass$LazyJavaUpperCase$1_contains($this, $ch) {
    return jl_Character_getType($ch) != 1 ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$024 = null;
}
function jur_AbstractCharClass$LazyJavaWhitespace$1_contains($this, $ch) {
    return jl_Character_isWhitespace($ch);
}
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$025 = null;
}
function jur_AbstractCharClass$LazyJavaMirrored$1_contains($this, $ch) {
    return 0;
}
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$026 = null;
}
function jur_AbstractCharClass$LazyJavaDefined$1_contains($this, $ch) {
    return !jl_Character_getType($ch) ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
function jur_AbstractCharClass$LazyJavaDigit$1_contains($this, $ch) {
    return jl_Character_getType($ch) != 9 ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$028 = null;
}
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains($this, $ch) {
    return jl_Character_isIdentifierIgnorable($ch);
}
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$029 = null;
}
function jur_AbstractCharClass$LazyJavaISOControl$1_contains($this, $ch) {
    a: {
        b: {
            if (!($ch >= 0 && $ch <= 31)) {
                if ($ch < 127)
                    break b;
                if ($ch > 159)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$030 = null;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains($this, $ch) {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                case 26:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$031 = null;
}
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains($this, $ch) {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                case 23:
                case 26:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
}
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$032 = null;
}
function jur_AbstractCharClass$LazyJavaLetter$1_contains($this, $ch) {
    a: {
        switch (jl_Character_getType($ch)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                $ch = 0;
                break a;
        }
        $ch = 1;
    }
    return $ch;
}
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$033 = null;
}
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains($this, $ch) {
    return jl_Character_isLetterOrDigit($ch);
}
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$034 = null;
}
function jur_AbstractCharClass$LazyJavaSpaceChar$1_contains($this, $ch) {
    return jl_Character_isSpaceChar($ch);
}
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$035 = null;
}
function jur_AbstractCharClass$LazyJavaTitleCase$1_contains($this, $ch) {
    return jl_Character_getType($ch) != 3 ? 0 : 1;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$036 = null;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains($this, $ch) {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$037 = null;
}
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains($this, $ch) {
    a: {
        b: {
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
}
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category1 = 0;
}
function jur_UnicodeCategory__init_(var_0) {
    var var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_0(var_1, var_0);
    return var_1;
}
function jur_UnicodeCategory__init_0($this, $category) {
    jur_AbstractCharClass__init_($this);
    $this.$category1 = $category;
}
function jur_UnicodeCategory_contains($this, $ch) {
    return $this.$alt0 ^ ($this.$category1 != jl_Character_getType($ch & 65535) ? 0 : 1);
}
var jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory);
function jur_UnicodeCategoryScope_contains($this, $ch) {
    return $this.$alt0 ^ (!($this.$category1 >> jl_Character_getType($ch & 65535) & 1) ? 0 : 1);
}
function jur_MatchResultImpl() {
    var a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string2 = null;
    a.$groupCount = 0;
    a.$valid = 0;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode1 = 0;
}
function jur_MatchResultImpl_setConsumed($this, $counter, $value) {
    $this.$consumers.data[$counter] = $value;
}
function jur_MatchResultImpl_getConsumed($this, $counter) {
    return $this.$consumers.data[$counter];
}
function jur_MatchResultImpl_end($this) {
    return jur_MatchResultImpl_end0($this, 0);
}
function jur_MatchResultImpl_end0($this, $group) {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
}
function jur_MatchResultImpl_setStart($this, $group, $offset) {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
}
function jur_MatchResultImpl_setEnd($this, $group, $offset) {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
}
function jur_MatchResultImpl_getStart($this, $group) {
    return $this.$groupBounds.data[$group * 2 | 0];
}
function jur_MatchResultImpl_getEnd($this, $group) {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
}
function jur_MatchResultImpl_start($this) {
    return jur_MatchResultImpl_start0($this, 0);
}
function jur_MatchResultImpl_start0($this, $group) {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
}
function jur_MatchResultImpl_getEnterCounter($this, $setCounter) {
    return $this.$compQuantCounters.data[$setCounter];
}
function jur_MatchResultImpl_setEnterCounter($this, $setCounter, $value) {
    $this.$compQuantCounters.data[$setCounter] = $value;
}
function jur_MatchResultImpl_checkGroup($this, $group) {
    var var$2;
    if (!$this.$valid) {
        var$2 = new jl_IllegalStateException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    if ($group >= 0 && $group < $this.$groupCount)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_Throwable__init_(var$2, jl_String_valueOf($group));
    $rt_throw(var$2);
}
function jur_MatchResultImpl_reset($this, $newSequence, $leftBound, $rightBound) {
    $this.$valid = 0;
    $this.$mode1 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string2 = $newSequence;
    if ($leftBound >= 0) {
        $this.$leftBound0 = $leftBound;
        $this.$rightBound0 = $rightBound;
    }
    $this.$startIndex = $this.$leftBound0;
}
function jur_MatchResultImpl_mode($this) {
    return $this.$mode1;
}
var jl_AbstractStringBuilder$Constants = $rt_classWithoutFields();
var jl_AbstractStringBuilder$Constants_intPowersOfTen = null;
var jl_AbstractStringBuilder$Constants_longPowersOfTen = null;
var jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null;
var jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null;
var jl_AbstractStringBuilder$Constants_floatAnalysisResult = null;
function jl_AbstractStringBuilder$Constants__clinit_() {
    jl_AbstractStringBuilder$Constants_intPowersOfTen = $rt_createIntArrayFromData([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    jl_AbstractStringBuilder$Constants_longPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(1000), Long_fromInt(10000), Long_fromInt(100000), Long_fromInt(1000000), Long_fromInt(10000000), Long_fromInt(100000000), Long_fromInt(1000000000), new Long(1410065408, 2), new Long(1215752192, 23), new Long(3567587328, 232), new Long(1316134912, 2328), new Long(276447232, 23283), new Long(2764472320, 232830), new Long(1874919424, 2328306), new Long(1569325056, 23283064),
    new Long(2808348672, 232830643)]);
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), new Long(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = new otcit_DoubleAnalyzer$Result;
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = new otcit_FloatAnalyzer$Result;
}
var otcit_DoubleAnalyzer = $rt_classWithoutFields();
var otcit_DoubleAnalyzer_mantissa10Table = null;
var otcit_DoubleAnalyzer_exp10Table = null;
function otcit_DoubleAnalyzer_analyze($d, $result) {
    var $bits, $mantissa, $exponent, $errorShift, var$7, $mantissaShift, $binExponentCorrection, $decExponent, var$11, $decMantissa, $error, $upError, $downError, $lowerPos, $upperPos;
    $bits = $rt_doubleToLongBits($d);
    $result.$sign = Long_eq(Long_and($bits, new Long(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, new Long(4294967295, 1048575));
    $exponent = Long_shr($bits, 52).lo & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent = 0;
        return;
    }
    $errorShift = 0;
    if ($exponent)
        $mantissa = Long_or($mantissa, new Long(0, 1048576));
    else {
        $mantissa = Long_shl($mantissa, 1);
        while (Long_eq(Long_and($mantissa, new Long(0, 1048576)), Long_ZERO)) {
            $mantissa = Long_shl($mantissa, 1);
            $exponent = $exponent + (-1) | 0;
            $errorShift = $errorShift + 1 | 0;
        }
    }
    var$7 = otcit_DoubleAnalyzer_exp10Table.data;
    $mantissaShift = 0;
    $binExponentCorrection = var$7.length;
    if ($mantissaShift > $binExponentCorrection) {
        $result = new jl_IllegalArgumentException;
        jl_Exception__init_($result);
        $rt_throw($result);
    }
    $binExponentCorrection = $binExponentCorrection - 1 | 0;
    a: {
        while (true) {
            $decExponent = ($mantissaShift + $binExponentCorrection | 0) / 2 | 0;
            var$11 = var$7[$decExponent];
            if (var$11 == $exponent)
                break;
            if ($exponent >= var$11) {
                $mantissaShift = $decExponent + 1 | 0;
                if ($mantissaShift > $binExponentCorrection) {
                    $decExponent =  -$decExponent - 2 | 0;
                    break a;
                }
            } else {
                $binExponentCorrection = $decExponent - 1 | 0;
                if ($binExponentCorrection < $mantissaShift) {
                    $decExponent =  -$decExponent - 1 | 0;
                    break a;
                }
            }
        }
    }
    if ($decExponent < 0)
        $decExponent =  -$decExponent - 2 | 0;
    $mantissaShift = 12 + ($exponent - var$7[$decExponent] | 0) | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$decExponent], $mantissaShift);
    if (Long_ge($decMantissa, new Long(2808348672, 232830643))) {
        $decExponent = $decExponent + 1 | 0;
        $mantissaShift = 12 + ($exponent - otcit_DoubleAnalyzer_exp10Table.data[$decExponent] | 0) | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight($mantissa, otcit_DoubleAnalyzer_mantissa10Table.data[$decExponent], $mantissaShift);
    }
    $error = Long_shru(otcit_DoubleAnalyzer_mantissa10Table.data[$decExponent], (63 - $mantissaShift | 0) - $errorShift | 0);
    $upError = Long_shr(Long_add($error, Long_fromInt(1)), 1);
    $downError = Long_shr($error, 1);
    if (Long_eq($mantissa, new Long(0, 1048576)))
        $downError = Long_shr($downError, 2);
    $lowerPos = Long_fromInt(10);
    while (Long_le($lowerPos, $downError)) {
        $lowerPos = Long_mul($lowerPos, Long_fromInt(10));
    }
    if (Long_ge(Long_rem($decMantissa, $lowerPos), Long_div($downError, Long_fromInt(2))))
        $lowerPos = Long_div($lowerPos, Long_fromInt(10));
    $upperPos = Long_fromInt(1);
    while (Long_le($upperPos, $upError)) {
        $upperPos = Long_mul($upperPos, Long_fromInt(10));
    }
    if (Long_gt(Long_sub($upperPos, Long_rem($decMantissa, $upperPos)), Long_div($upError, Long_fromInt(2))))
        $upperPos = Long_div($upperPos, Long_fromInt(10));
    $exponent = Long_compare($lowerPos, $upperPos);
    $mantissa = $exponent > 0 ? Long_mul(Long_div($decMantissa, $lowerPos), $lowerPos) : $exponent < 0 ? Long_add(Long_mul(Long_div($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(Long_div(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (Long_ge($mantissa, new Long(2808348672, 232830643))) {
        $decExponent = $decExponent + 1 | 0;
        $mantissa = Long_div($mantissa, Long_fromInt(10));
    } else if (Long_lt($mantissa, new Long(1569325056, 23283064))) {
        $decExponent = $decExponent + (-1) | 0;
        $mantissa = Long_mul($mantissa, Long_fromInt(10));
    }
    $result.$mantissa = $mantissa;
    $result.$exponent = $decExponent - 330 | 0;
}
function otcit_DoubleAnalyzer_mulAndShiftRight($a, $b, $shift) {
    var $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4, $cm, $c0, $c;
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    $cm = Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3));
    $c0 = Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4));
    $c = Long_add(Long_add(Long_shl(Long_mul($b4, $a4), 32 + $shift | 0), Long_shl(Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4)), 16 + $shift | 0)), Long_shl(Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4)), $shift));
    return Long_add($shift > 16 ? Long_add($c, Long_shl($c0, $shift - 16 | 0)) : Long_add($c, Long_shru($c0, 16 - $shift | 0)), Long_shru($cm, 32 - $shift | 0));
}
function otcit_DoubleAnalyzer__clinit_() {
    var $decimalMantissaOne, $exponent, $i, $shiftedOffPart, var$5, var$6, $maxMantissa, $i_0, $shift, var$10;
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArray(660);
    otcit_DoubleAnalyzer_exp10Table = $rt_createIntArray(660);
    $decimalMantissaOne = new Long(991952896, 1862645149);
    $exponent = 1023;
    $i = 0;
    $shiftedOffPart = $decimalMantissaOne;
    while ($i < 330) {
        var$5 = otcit_DoubleAnalyzer_mantissa10Table.data;
        var$6 = $i + 330 | 0;
        var$5[var$6] = jl_Long_divideUnsigned($shiftedOffPart, Long_fromInt(80));
        otcit_DoubleAnalyzer_exp10Table.data[var$6] = $exponent;
        $shiftedOffPart = jl_Long_divideUnsigned($shiftedOffPart, Long_fromInt(10));
        $maxMantissa = jl_Long_remainderUnsigned($shiftedOffPart, Long_fromInt(10));
        while (Long_le($shiftedOffPart, $decimalMantissaOne) && Long_eq(Long_and($shiftedOffPart, new Long(0, 2147483648)), Long_ZERO)) {
            $shiftedOffPart = Long_shl($shiftedOffPart, 1);
            $exponent = $exponent + 1 | 0;
            $maxMantissa = Long_shl($maxMantissa, 1);
        }
        $shiftedOffPart = Long_add($shiftedOffPart, Long_div($maxMantissa, Long_fromInt(10)));
        $i = $i + 1 | 0;
    }
    $i = 1023;
    $i_0 = 0;
    while ($i_0 < 330) {
        $shift = 0;
        $shiftedOffPart = $decimalMantissaOne;
        while (Long_gt($shiftedOffPart, new Long(3435973836, 214748364))) {
            $shiftedOffPart = Long_shr($shiftedOffPart, 1);
            $shift = $shift + 1 | 0;
            $i = $i + (-1) | 0;
        }
        var$10 = Long_mul($shiftedOffPart, Long_fromInt(10));
        $decimalMantissaOne = $shift <= 0 ? var$10 : Long_add(var$10, Long_shr(Long_mul(Long_and($decimalMantissaOne, Long_fromInt((1 << $shift) - 1 | 0)), Long_fromInt(10)), $shift));
        var$5 = otcit_DoubleAnalyzer_mantissa10Table.data;
        var$6 = (330 - $i_0 | 0) - 1 | 0;
        var$5[var$6] = jl_Long_divideUnsigned($decimalMantissaOne, Long_fromInt(80));
        otcit_DoubleAnalyzer_exp10Table.data[var$6] = $i;
        $i_0 = $i_0 + 1 | 0;
    }
}
function otcit_DoubleAnalyzer$Result() {
    var a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent = 0;
    a.$sign = 0;
}
var otcit_FloatAnalyzer$Result = $rt_classWithoutFields();
var jn_ReadOnlyBufferException = $rt_classWithoutFields(jl_UnsupportedOperationException);
var jn_BufferOverflowException = $rt_classWithoutFields(jl_RuntimeException);
var jn_BufferUnderflowException = $rt_classWithoutFields(jl_RuntimeException);
var jur_IntArrHash = $rt_classWithoutFields();
$rt_packages([-1, "java", 0, "util", 1, "regex", 0, "lang"
]);
$rt_metadata([jl_Object, "Object", 3, 0, [], 0, 3, 0, 0, ["$toString", $rt_wrapFunction0(jl_Object_toString)],
gpb_Client, 0, jl_Object, [], 0, 3, 0, 0, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 0, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 0, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Error, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_LinkageError, 0, jl_Error, [], 0, 3, 0, 0, 0,
jl_NoClassDefFoundError, 0, jl_LinkageError, [], 0, 3, 0, 0, 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$insert1", $rt_wrapFunction4(jl_StringBuilder_insert), "$append1", $rt_wrapFunction3(jl_StringBuilder_append2), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert0)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
jl_IncompatibleClassChangeError, 0, jl_LinkageError, [], 0, 3, 0, 0, 0,
jl_NoSuchFieldError, 0, jl_IncompatibleClassChangeError, [], 0, 3, 0, 0, 0,
jl_NoSuchMethodError, 0, jl_IncompatibleClassChangeError, [], 0, 3, 0, 0, 0,
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 3, 3, 0, 0, 0,
g_Game, 0, jl_Object, [], 0, 3, 0, 0, 0,
gpb_GameLoader$Observer, 0, jl_Object, [], 3, 3, 0, 0, 0,
gpb_PresentationPhase, 0, jl_Object, [gpb_GameLoader$Observer], 0, 3, 0, 0, 0,
gpb_DownloadObserver, 0, jl_Object, [], 3, 3, 0, 0, 0,
gpb_TileImageLoader$Observer, 0, jl_Object, [], 3, 3, 0, 0, 0,
gpb_GameLoader, 0, jl_Object, [gpb_DownloadObserver, gpb_TileImageLoader$Observer], 0, 3, 0, 0, 0,
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
otjde_FocusEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_MouseEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_KeyboardEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_LoadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjde_GamepadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
otjb_WindowEventTarget, 0, jl_Object, [otjde_EventTarget, otjde_FocusEventTarget, otjde_MouseEventTarget, otjde_KeyboardEventTarget, otjde_LoadEventTarget, otjde_GamepadEventTarget], 3, 3, 0, 0, 0,
otjb_StorageProvider, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjc_JSArrayReader, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
otjb_Window, 0, jl_Object, [otj_JSObject, otjb_WindowEventTarget, otjb_StorageProvider, otjc_JSArrayReader], 1, 3, 0, 0, ["$addEventListener$exported$0", $rt_wrapFunction2(otjb_Window_addEventListener$exported$0), "$removeEventListener$exported$1", $rt_wrapFunction2(otjb_Window_removeEventListener$exported$1), "$get$exported$2", $rt_wrapFunction1(otjb_Window_get$exported$2), "$removeEventListener$exported$3", $rt_wrapFunction3(otjb_Window_removeEventListener$exported$3), "$dispatchEvent$exported$4", $rt_wrapFunction1(otjb_Window_dispatchEvent$exported$4),
"$getLength$exported$5", $rt_wrapFunction0(otjb_Window_getLength$exported$5), "$addEventListener$exported$6", $rt_wrapFunction3(otjb_Window_addEventListener$exported$6)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0]);
$rt_metadata([ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, 0,
gm_Vector, 0, jl_Object, [], 0, 3, 0, 0, 0,
g_TileSet, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_81_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
otja_ReadyStateChangeHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gpb_TileSetLoader, 0, jl_Object, [otja_ReadyStateChangeHandler], 0, 3, 0, 0, ["$stateChanged$exported$0", $rt_wrapFunction0(gpb_TileSetLoader_stateChanged$exported$0)],
g_TileMap, 0, jl_Object, [], 0, 3, 0, 0, 0,
gpb_TileMapLoader, 0, jl_Object, [otja_ReadyStateChangeHandler], 0, 3, 0, 0, ["$stateChanged$exported$0", $rt_wrapFunction0(gpb_TileMapLoader_stateChanged$exported$0)],
otja_XMLHttpRequest, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1, 3, 0, 0, 0,
gpb_DownloadObserver$Item, 0, jl_Enum, [], 12, 3, 0, 0, 0,
g_TileSetReader, 0, jl_Object, [], 0, 3, 0, 0, 0,
gx_Element, 0, jl_Object, [], 3, 3, 0, 0, 0,
gpb_XmlElement, 0, jl_Object, [gx_Element], 0, 3, 0, 0, 0,
g_TileMapReader, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_Iterator, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
gpb_GameLoader$1, 0, jl_Object, [], 32, 0, 0, gpb_GameLoader$1_$callClinit, 0,
gx_ElementList, 0, jl_Object, [], 0, 3, 0, 0, 0,
g_Tile, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, 0,
ju_SortedMap, 0, jl_Object, [ju_Map], 3, 3, 0, 0, 0,
ju_NavigableMap, 0, jl_Object, [ju_SortedMap], 3, 3, 0, 0, 0,
ju_TreeMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable, ju_NavigableMap], 0, 3, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gpb_TileImageLoader, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(gpb_TileImageLoader_handleEvent$exported$0)],
g_IrregularTileLayer, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
ju_TreeMap$1, 0, jl_Object, [ju_Comparator], 0, 0, 0, 0, 0,
gm_Matrix, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_CloneNotSupportedException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0,
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
gm_Polygon, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_Double, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, 0,
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0]);
$rt_metadata([g_RenderCommandVisitor, 0, jl_Object, [], 3, 3, 0, 0, 0,
otjb_AnimationFrameCallback, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
gpb_GameView, 0, jl_Object, [g_RenderCommandVisitor, otjb_AnimationFrameCallback], 0, 3, 0, 0, ["$onAnimationFrame$exported$0", $rt_wrapFunction1(gpb_GameView_onAnimationFrame$exported$0)],
ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap$SimpleEntry, 0, jl_Object, [ju_Map$Entry, ji_Serializable], 0, 3, 0, 0, 0,
ju_TreeMap$TreeNode, 0, ju_AbstractMap$SimpleEntry, [], 0, 0, 0, 0, 0,
ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, 0,
ju_TreeMap$EntrySet, 0, ju_AbstractSet, [], 0, 0, 0, 0, 0,
g_IrregularTileLayer$Chunk, 0, jl_Object, [], 0, 0, 0, 0, 0,
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, 0,
ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
ji_PrintStream, 0, ji_FilterOutputStream, [], 0, 3, 0, 0, 0,
otcic_StderrOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, ["$write", $rt_wrapFunction1(otcic_StderrOutputStream_write)],
gpb_ControlAxis, 0, jl_Object, [], 0, 0, 0, 0, 0,
gpb_KeyListener, 0, jl_Object, [otjde_EventListener], 0, 0, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(gpb_KeyListener_handleEvent$exported$0)],
g_GameRenderer, 0, jl_Object, [], 0, 3, 0, 0, 0,
g_RenderCommandQueue, 0, jl_Object, [], 0, 3, 0, 0, 0,
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
jnci_UTF8Charset, 0, jnc_Charset, [], 0, 3, 0, 0, 0,
jnc_IllegalCharsetNameException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
ju_TreeMap$EntryIterator, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0, 0,
jn_Buffer, 0, jl_Object, [], 1, 3, 0, 0, 0,
jl_Readable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jn_CharBuffer, 0, jn_Buffer, [jl_Comparable, jl_Appendable, jl_CharSequence, jl_Readable], 1, 3, 0, 0, 0,
jn_ByteBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, 0,
jnc_CodingErrorAction, 0, jl_Object, [], 0, 3, 0, 0, 0,
jn_CharBufferImpl, 0, jn_CharBuffer, [], 1, 0, 0, 0, 0,
jn_CharBufferOverArray, 0, jn_CharBufferImpl, [], 0, 0, 0, 0, 0,
jnc_CharsetEncoder, 0, jl_Object, [], 1, 3, 0, 0, 0,
jnc_CoderResult, 0, jl_Object, [], 0, 3, 0, 0, 0,
jn_ByteBufferImpl, 0, jn_ByteBuffer, [], 0, 0, 0, 0, 0,
jn_ByteOrder, 0, jl_Object, [], 4, 3, 0, 0, 0,
jnci_BufferedEncoder, 0, jnc_CharsetEncoder, [], 1, 3, 0, 0, 0,
jnci_UTF8Encoder, 0, jnci_BufferedEncoder, [], 0, 3, 0, 0, 0,
ji_IOException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jur_Pattern, 0, jl_Object, [ji_Serializable], 4, 3, 0, 0, 0,
ju_NoSuchElementException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
g_RenderCommand, 0, jl_Object, [], 3, 3, 0, 0, 0,
g_FillRectCommand, 0, jl_Object, [g_RenderCommand], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(g_FillRectCommand_accept)],
ja_Color, 0, jl_Object, [], 0, 3, 0, 0, 0,
gm_Rect, 0, jl_Object, [], 0, 3, 0, 0, 0,
g_TileID, 0, jl_Object, [], 0, 3, 0, 0, 0]);
$rt_metadata([g_DrawTileCommand, 0, jl_Object, [g_RenderCommand], 0, 3, 0, 0, ["$accept", $rt_wrapFunction1(g_DrawTileCommand_accept)],
otcic_StdoutOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, ["$write", $rt_wrapFunction1(otcic_StdoutOutputStream_write)],
jur_AbstractSet, 0, jl_Object, [], 1, 0, 0, 0, ["$find0", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$getType0", $rt_wrapFunction0(jur_AbstractSet_getType), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext), "$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jur_FSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_Lexer, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_PatternSyntaxException, 0, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
jur_NonCapFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
jur_AheadFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AheadFSet_matches)],
jur_BehindFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BehindFSet_matches)],
jur_AtomicFSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)],
jur_FinalSet, 0, jur_FSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FinalSet_matches)],
jur_LeafSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount0", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_EmptySet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find0", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
jur_JointSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_NonCapJointSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, 0, jur_NonCapJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext)],
jur_PositiveLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed)],
jur_NegativeLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed)],
jur_PositiveLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed)],
jur_NegativeLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed)],
jur_SingleSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find0", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
jl_ArrayStoreException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_SpecialToken, 0, jl_Object, [], 1, 0, 0, 0, 0,
jur_AbstractCharClass, 0, jur_SpecialToken, [], 1, 0, 0, 0, ["$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_AbstractCharClass_getInstance), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI)],
jur_CharClass, "CharClass", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass_contains), "$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
ju_MissingResourceException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_QuantifierSet, 0, jur_AbstractSet, [], 1, 0, 0, 0, ["$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_LeafQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches)],
jur_CompositeQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches)],
jur_GroupQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches)],
jur_AltQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_UnifiedQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
jur_Quantifier, "Quantifier", 2, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, 0, ["$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_FSet$PossessiveFSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, 0,
jur_CompositeRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
jur_SupplRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_UCISupplRangeSet, 0, jur_SupplRangeSet, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains)],
jur_UCIRangeSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts)],
jur_RangeSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$first", $rt_wrapFunction1(jur_RangeSet_first)],
jur_HangulDecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_CharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$charCount0", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find0", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_UCICharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts)],
jur_CICharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CICharSet_accepts)],
jur_DecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_UCIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0, 0,
jur_CIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0, 0,
jur_PossessiveGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_PosPlusGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)]]);
$rt_metadata([jur_AltGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_PosAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
jur_CompositeGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches)],
jur_PosCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
jur_ReluctantGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jur_RelAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
jur_RelCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
jur_DotAllQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotAllQuantifierSet_find)],
jur_DotQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotQuantifierSet_find)],
jur_AbstractLineTerminator, 0, jl_Object, [], 1, 0, 0, 0, 0,
jur_PossessiveQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
jur_PossessiveAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
jur_PossessiveCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)],
jur_ReluctantQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
jur_ReluctantAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jur_ReluctantCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
jur_SOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed)],
jur_WordBoundary, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed)],
jur_PreviousMatch, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed)],
jur_EOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed)],
jur_EOISet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed)],
jur_MultiLineSOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed)],
jur_DotAllSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
jur_DotSet, 0, jur_JointSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotSet_matches), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
jur_UEOLSet, 0, jur_AbstractSet, [], 4, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed)],
jur_UMultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed)],
jur_MultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed)],
jur_CIBackReferenceSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_BackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find0", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first)],
jur_UCIBackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches)],
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, ["$insert1", $rt_wrapFunction4(jl_StringBuffer_insert), "$append1", $rt_wrapFunction3(jl_StringBuffer_append), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert0", $rt_wrapFunction2(jl_StringBuffer_insert0)],
jur_SequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find0", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$first", $rt_wrapFunction1(jur_SequenceSet_first)],
jur_UCISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts)],
jur_CISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts)],
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 4, 0, 0, 0, 0,
jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1, 0, 0, 0, 0,
jur_UCISupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts)],
jur_LowSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_HighSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
jur_SupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find0", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0, 0,
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)]]);
$rt_metadata([jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)],
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)],
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)],
jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)],
jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
otjc_JSString, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
otciu_UnicodeHelper$Range, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcic_Console, 0, jl_Object, [], 4, 3, 0, 0, 0,
jur_AbstractCharClass$1, "AbstractCharClass$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
jur_AbstractCharClass$2, "AbstractCharClass$2", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)],
jur_CharClass$18, "CharClass$18", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$12_contains)]]);
$rt_metadata([jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
jl_IllegalStateException, 0, jl_Exception, [], 0, 3, 0, 0, 0,
jnc_CoderMalfunctionError, 0, jl_Error, [], 0, 3, 0, 0, 0,
jur_BackReferencedSingleSet, 0, jur_SingleSet, [], 0, 0, 0, 0, ["$find0", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
jur_MatchResult, 0, jl_Object, [], 3, 3, 0, 0, 0,
jur_Matcher, 0, jl_Object, [jur_MatchResult], 4, 3, 0, 0, 0,
jl_UnsupportedOperationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jnci_BufferedEncoder$Controller, 0, jl_Object, [], 0, 3, 0, 0, 0,
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)],
jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
jur_UnicodeCategory, "UnicodeCategory", 2, jur_AbstractCharClass, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 2, jur_UnicodeCategory, [], 0, 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, 0, 0,
jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, 0, 0, 0,
otcit_DoubleAnalyzer, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 0, 3, 0, 0, 0,
jn_ReadOnlyBufferException, 0, jl_UnsupportedOperationException, [], 0, 3, 0, 0, 0,
jn_BufferOverflowException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jn_BufferUnderflowException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0, 0]);
function $rt_array(cls, data) {
    this.$monitor = null;
    this.$id$ = 0;
    this.type = cls;
    this.data = data;
    this.constructor = $rt_arraycls(cls);
}
$rt_array.prototype = Object.create(($rt_objcls()).prototype);
$rt_array.prototype.toString = function() {
    var str = "[";
    for (var i = 0;i < this.data.length;++i) {
        if (i > 0) {
            str += ", ";
        }
        str += this.data[i].toString();
    }
    str += "]";
    return str;
};
$rt_setCloneMethod($rt_array.prototype, function() {
    var dataCopy;
    if ('slice' in this.data) {
        dataCopy = this.data.slice();
    } else {
        dataCopy = new this.data.constructor(this.data.length);
        for (var i = 0;i < dataCopy.length;++i) {
            dataCopy[i] = this.data[i];
        }
    }
    return new $rt_array(this.type, dataCopy);
});
$rt_stringPool(["@", "0", "WEB-INF/classes/", "Patter is null", "", "null", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for int type: ", "String is null or empty", "Illegal radix: ", "grassy_plains.tmx", "house_interior.tmx", "village.tmx", "../textures/", "Failed to download tile set (", ")", "Failed to download tile map (", "Failed to get resposne XML", "tile", "image", "source", "objectgroup", "id", "object", "polygon", "Failed to get XML response",
"layer", "data", "encoding", "csv", "chunk", "x", "y", "width", "height", "Unsupported layer encoding", "TILE_MAP", "TILE_SET", "points", " ", ",", "Either src or dest is null", "UTF-8", "Index out of bounds", "Action must be non-null", "Replacement preconditions do not hold", "Axis updated: ", ", ", "New position ", " is outside of range [0;", "]", "The last byte in src ", " is outside of array of size ", "Length ", " must be non-negative", "Offset ", "IGNORE", "REPLACE", "REPORT", "BIG_ENDIAN", "LITTLE_ENDIAN",
"The last char in dst ", "rgba(", "Is", "In", "{", "}", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank", "Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl", "javaJavaIdentifierPart", "javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit", "javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart", "Space", "w", "W", "s", "S",
"d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks", "Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi", "Gujarati", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao", "Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee", "UnifiedCanadianAboriginalSyllabics",
"Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese", "PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation", "SuperscriptsandSubscripts", "CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols", "NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures", "OpticalCharacterRecognition",
"EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A", "SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators", "MiscellaneousSymbolsandArrows", "Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended", "SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters", "CJKSymbolsandPunctuation",
"Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions", "EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs", "YiSyllables", "YiRadicals", "ModifierToneLetters", "SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates", "LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms", "ArabicPresentationForms-A",
"VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B", "HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N", "Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC", "Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc", "Sk", "So", "Pi", "Pf"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
function Long_eq(a, b) {
    return a.hi === b.hi && a.lo === b.lo;
}
function Long_ne(a, b) {
    return a.hi !== b.hi || a.lo !== b.lo;
}
function Long_gt(a, b) {
    if (a.hi < b.hi) {
        return false;
    }
    if (a.hi > b.hi) {
        return true;
    }
    var x = a.lo >>> 1;
    var y = b.lo >>> 1;
    if (x !== y) {
        return x > y;
    }
    return (a.lo & 1) > (b.lo & 1);
}
function Long_ge(a, b) {
    if (a.hi < b.hi) {
        return false;
    }
    if (a.hi > b.hi) {
        return true;
    }
    var x = a.lo >>> 1;
    var y = b.lo >>> 1;
    if (x !== y) {
        return x >= y;
    }
    return (a.lo & 1) >= (b.lo & 1);
}
function Long_lt(a, b) {
    if (a.hi > b.hi) {
        return false;
    }
    if (a.hi < b.hi) {
        return true;
    }
    var x = a.lo >>> 1;
    var y = b.lo >>> 1;
    if (x !== y) {
        return x < y;
    }
    return (a.lo & 1) < (b.lo & 1);
}
function Long_le(a, b) {
    if (a.hi > b.hi) {
        return false;
    }
    if (a.hi < b.hi) {
        return true;
    }
    var x = a.lo >>> 1;
    var y = b.lo >>> 1;
    if (x !== y) {
        return x <= y;
    }
    return (a.lo & 1) <= (b.lo & 1);
}
function Long_add(a, b) {
    if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
        return Long_fromNumber(a.lo + b.lo);
    } else if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
        return Long_fromNumber(Long_toNumber(a) + Long_toNumber(b));
    }
    var a_lolo = a.lo & 0xFFFF;
    var a_lohi = a.lo >>> 16;
    var a_hilo = a.hi & 0xFFFF;
    var a_hihi = a.hi >>> 16;
    var b_lolo = b.lo & 0xFFFF;
    var b_lohi = b.lo >>> 16;
    var b_hilo = b.hi & 0xFFFF;
    var b_hihi = b.hi >>> 16;
    var lolo = a_lolo + b_lolo | 0;
    var lohi = a_lohi + b_lohi + (lolo >> 16) | 0;
    var hilo = a_hilo + b_hilo + (lohi >> 16) | 0;
    var hihi = a_hihi + b_hihi + (hilo >> 16) | 0;
    return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
}
function Long_inc(a) {
    var lo = a.lo + 1 | 0;
    var hi = a.hi;
    if (lo === 0) {
        hi = hi + 1 | 0;
    }
    return new Long(lo, hi);
}
function Long_dec(a) {
    var lo = a.lo - 1 | 0;
    var hi = a.hi;
    if (lo ===  -1) {
        hi = hi - 1 | 0;
    }
    return new Long(lo, hi);
}
function Long_neg(a) {
    return Long_inc(new Long(a.lo ^ 0xFFFFFFFF, a.hi ^ 0xFFFFFFFF));
}
function Long_sub(a, b) {
    if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
        return Long_fromNumber(a.lo - b.lo);
    }
    var a_lolo = a.lo & 0xFFFF;
    var a_lohi = a.lo >>> 16;
    var a_hilo = a.hi & 0xFFFF;
    var a_hihi = a.hi >>> 16;
    var b_lolo = b.lo & 0xFFFF;
    var b_lohi = b.lo >>> 16;
    var b_hilo = b.hi & 0xFFFF;
    var b_hihi = b.hi >>> 16;
    var lolo = a_lolo - b_lolo | 0;
    var lohi = a_lohi - b_lohi + (lolo >> 16) | 0;
    var hilo = a_hilo - b_hilo + (lohi >> 16) | 0;
    var hihi = a_hihi - b_hihi + (hilo >> 16) | 0;
    return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
}
function Long_compare(a, b) {
    var r = a.hi - b.hi;
    if (r !== 0) {
        return r;
    }
    r = (a.lo >>> 1) - (b.lo >>> 1);
    if (r !== 0) {
        return r;
    }
    return (a.lo & 1) - (b.lo & 1);
}
function Long_isPositive(a) {
    return (a.hi & 0x80000000) === 0;
}
function Long_isNegative(a) {
    return (a.hi & 0x80000000) !== 0;
}
function Long_mul(a, b) {
    var positive = Long_isNegative(a) === Long_isNegative(b);
    if (Long_isNegative(a)) {
        a = Long_neg(a);
    }
    if (Long_isNegative(b)) {
        b = Long_neg(b);
    }
    var a_lolo = a.lo & 0xFFFF;
    var a_lohi = a.lo >>> 16;
    var a_hilo = a.hi & 0xFFFF;
    var a_hihi = a.hi >>> 16;
    var b_lolo = b.lo & 0xFFFF;
    var b_lohi = b.lo >>> 16;
    var b_hilo = b.hi & 0xFFFF;
    var b_hihi = b.hi >>> 16;
    var lolo = 0;
    var lohi = 0;
    var hilo = 0;
    var hihi = 0;
    lolo = a_lolo * b_lolo | 0;
    lohi = lolo >>> 16;
    lohi = (lohi & 0xFFFF) + a_lohi * b_lolo | 0;
    hilo = hilo + (lohi >>> 16) | 0;
    lohi = (lohi & 0xFFFF) + a_lolo * b_lohi | 0;
    hilo = hilo + (lohi >>> 16) | 0;
    hihi = hilo >>> 16;
    hilo = (hilo & 0xFFFF) + a_hilo * b_lolo | 0;
    hihi = hihi + (hilo >>> 16) | 0;
    hilo = (hilo & 0xFFFF) + a_lohi * b_lohi | 0;
    hihi = hihi + (hilo >>> 16) | 0;
    hilo = (hilo & 0xFFFF) + a_lolo * b_hilo | 0;
    hihi = hihi + (hilo >>> 16) | 0;
    hihi = hihi + a_hihi * b_lolo + a_hilo * b_lohi + a_lohi * b_hilo + a_lolo * b_hihi | 0;
    var result = new Long(lolo & 0xFFFF | lohi << 16, hilo & 0xFFFF | hihi << 16);
    return positive ? result : Long_neg(result);
}
function Long_div(a, b) {
    if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
        return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
    }
    return (Long_divRem(a, b))[0];
}
function Long_udiv(a, b) {
    if (a.hi >= 0 && a.hi < Long_MAX_NORMAL && b.hi >= 0 && b.hi < Long_MAX_NORMAL) {
        return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
    }
    return (Long_udivRem(a, b))[0];
}
function Long_rem(a, b) {
    if (Math.abs(a.hi) < Long_MAX_NORMAL && Math.abs(b.hi) < Long_MAX_NORMAL) {
        return Long_fromNumber(Long_toNumber(a) % Long_toNumber(b));
    }
    return (Long_divRem(a, b))[1];
}
function Long_urem(a, b) {
    if (a.hi >= 0 && a.hi < Long_MAX_NORMAL && b.hi >= 0 && b.hi < Long_MAX_NORMAL) {
        return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
    }
    return (Long_udivRem(a, b))[1];
}
function Long_divRem(a, b) {
    if (b.lo === 0 && b.hi === 0) {
        throw new Error("Division by zero");
    }
    var positive = Long_isNegative(a) === Long_isNegative(b);
    if (Long_isNegative(a)) {
        a = Long_neg(a);
    }
    if (Long_isNegative(b)) {
        b = Long_neg(b);
    }
    a = new LongInt(a.lo, a.hi, 0);
    b = new LongInt(b.lo, b.hi, 0);
    var q = LongInt_div(a, b);
    a = new Long(a.lo, a.hi);
    q = new Long(q.lo, q.hi);
    return positive ? [q, a] : [Long_neg(q), Long_neg(a)];
}
function Long_udivRem(a, b) {
    if (b.lo === 0 && b.hi === 0) {
        throw new Error("Division by zero");
    }
    a = new LongInt(a.lo, a.hi, 0);
    b = new LongInt(b.lo, b.hi, 0);
    var q = LongInt_div(a, b);
    a = new Long(a.lo, a.hi);
    q = new Long(q.lo, q.hi);
    return [q, a];
}
function Long_shiftLeft16(a) {
    return new Long(a.lo << 16, a.lo >>> 16 | a.hi << 16);
}
function Long_shiftRight16(a) {
    return new Long(a.lo >>> 16 | a.hi << 16, a.hi >>> 16);
}
function Long_and(a, b) {
    return new Long(a.lo & b.lo, a.hi & b.hi);
}
function Long_or(a, b) {
    return new Long(a.lo | b.lo, a.hi | b.hi);
}
function Long_xor(a, b) {
    return new Long(a.lo ^ b.lo, a.hi ^ b.hi);
}
function Long_shl(a, b) {
    b &= 63;
    if (b === 0) {
        return a;
    } else if (b < 32) {
        return new Long(a.lo << b, a.lo >>> 32 - b | a.hi << b);
    } else if (b === 32) {
        return new Long(0, a.lo);
    } else {
        return new Long(0, a.lo << b - 32);
    }
}
function Long_shr(a, b) {
    b &= 63;
    if (b === 0) {
        return a;
    } else if (b < 32) {
        return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >> b);
    } else if (b === 32) {
        return new Long(a.hi, a.hi >> 31);
    } else {
        return new Long(a.hi >> b - 32, a.hi >> 31);
    }
}
function Long_shru(a, b) {
    b &= 63;
    if (b === 0) {
        return a;
    } else if (b < 32) {
        return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >>> b);
    } else if (b === 32) {
        return new Long(a.hi, 0);
    } else {
        return new Long(a.hi >>> b - 32, 0);
    }
}
function Long_not(a) {
    return new Long(~a.hi, ~a.lo);
}
function LongInt(lo, hi, sup) {
    this.lo = lo;
    this.hi = hi;
    this.sup = sup;
}
function LongInt_mul(a, b) {
    var a_lolo = (a.lo & 0xFFFF) * b | 0;
    var a_lohi = (a.lo >>> 16) * b | 0;
    var a_hilo = (a.hi & 0xFFFF) * b | 0;
    var a_hihi = (a.hi >>> 16) * b | 0;
    var sup = a.sup * b | 0;
    a_lohi = a_lohi + (a_lolo >>> 16) | 0;
    a_hilo = a_hilo + (a_lohi >>> 16) | 0;
    a_hihi = a_hihi + (a_hilo >>> 16) | 0;
    sup = sup + (a_hihi >>> 16) | 0;
    a.lo = a_lolo & 0xFFFF | a_lohi << 16;
    a.hi = a_hilo & 0xFFFF | a_hihi << 16;
    a.sup = sup & 0xFFFF;
}
function LongInt_sub(a, b) {
    var a_lolo = a.lo & 0xFFFF;
    var a_lohi = a.lo >>> 16;
    var a_hilo = a.hi & 0xFFFF;
    var a_hihi = a.hi >>> 16;
    var b_lolo = b.lo & 0xFFFF;
    var b_lohi = b.lo >>> 16;
    var b_hilo = b.hi & 0xFFFF;
    var b_hihi = b.hi >>> 16;
    a_lolo = a_lolo - b_lolo | 0;
    a_lohi = a_lohi - b_lohi + (a_lolo >> 16) | 0;
    a_hilo = a_hilo - b_hilo + (a_lohi >> 16) | 0;
    a_hihi = a_hihi - b_hihi + (a_hilo >> 16) | 0;
    var sup = a.sup - b.sup + (a_hihi >> 16) | 0;
    a.lo = a_lolo & 0xFFFF | a_lohi << 16;
    a.hi = a_hilo & 0xFFFF | a_hihi << 16;
    a.sup = sup;
}
function LongInt_add(a, b) {
    var a_lolo = a.lo & 0xFFFF;
    var a_lohi = a.lo >>> 16;
    var a_hilo = a.hi & 0xFFFF;
    var a_hihi = a.hi >>> 16;
    var b_lolo = b.lo & 0xFFFF;
    var b_lohi = b.lo >>> 16;
    var b_hilo = b.hi & 0xFFFF;
    var b_hihi = b.hi >>> 16;
    a_lolo = a_lolo + b_lolo | 0;
    a_lohi = a_lohi + b_lohi + (a_lolo >> 16) | 0;
    a_hilo = a_hilo + b_hilo + (a_lohi >> 16) | 0;
    a_hihi = a_hihi + b_hihi + (a_hilo >> 16) | 0;
    var sup = a.sup + b.sup + (a_hihi >> 16) | 0;
    a.lo = a_lolo & 0xFFFF | a_lohi << 16;
    a.hi = a_hilo & 0xFFFF | a_hihi << 16;
    a.sup = sup;
}
function LongInt_inc(a) {
    a.lo = a.lo + 1 | 0;
    if (a.lo === 0) {
        a.hi = a.hi + 1 | 0;
        if (a.hi === 0) {
            a.sup = a.sup + 1 & 0xFFFF;
        }
    }
}
function LongInt_dec(a) {
    a.lo = a.lo - 1 | 0;
    if (a.lo ===  -1) {
        a.hi = a.hi - 1 | 0;
        if (a.hi ===  -1) {
            a.sup = a.sup - 1 & 0xFFFF;
        }
    }
}
function LongInt_ucompare(a, b) {
    var r = a.sup - b.sup;
    if (r !== 0) {
        return r;
    }
    r = (a.hi >>> 1) - (b.hi >>> 1);
    if (r !== 0) {
        return r;
    }
    r = (a.hi & 1) - (b.hi & 1);
    if (r !== 0) {
        return r;
    }
    r = (a.lo >>> 1) - (b.lo >>> 1);
    if (r !== 0) {
        return r;
    }
    return (a.lo & 1) - (b.lo & 1);
}
function LongInt_numOfLeadingZeroBits(a) {
    var n = 0;
    var d = 16;
    while (d > 0) {
        if (a >>> d !== 0) {
            a >>>= d;
            n = n + d | 0;
        }
        d = d / 2 | 0;
    }
    return 31 - n;
}
function LongInt_shl(a, b) {
    if (b === 0) {
        return;
    }
    if (b < 32) {
        a.sup = (a.hi >>> 32 - b | a.sup << b) & 0xFFFF;
        a.hi = a.lo >>> 32 - b | a.hi << b;
        a.lo <<= b;
    } else if (b === 32) {
        a.sup = a.hi & 0xFFFF;
        a.hi = a.lo;
        a.lo = 0;
    } else if (b < 64) {
        a.sup = (a.lo >>> 64 - b | a.hi << b - 32) & 0xFFFF;
        a.hi = a.lo << b;
        a.lo = 0;
    } else if (b === 64) {
        a.sup = a.lo & 0xFFFF;
        a.hi = 0;
        a.lo = 0;
    } else {
        a.sup = a.lo << b - 64 & 0xFFFF;
        a.hi = 0;
        a.lo = 0;
    }
}
function LongInt_shr(a, b) {
    if (b === 0) {
        return;
    }
    if (b === 32) {
        a.lo = a.hi;
        a.hi = a.sup;
        a.sup = 0;
    } else if (b < 32) {
        a.lo = a.lo >>> b | a.hi << 32 - b;
        a.hi = a.hi >>> b | a.sup << 32 - b;
        a.sup >>>= b;
    } else if (b === 64) {
        a.lo = a.sup;
        a.hi = 0;
        a.sup = 0;
    } else if (b < 64) {
        a.lo = a.hi >>> b - 32 | a.sup << 64 - b;
        a.hi = a.sup >>> b - 32;
        a.sup = 0;
    } else {
        a.lo = a.sup >>> b - 64;
        a.hi = 0;
        a.sup = 0;
    }
}
function LongInt_copy(a) {
    return new LongInt(a.lo, a.hi, a.sup);
}
function LongInt_div(a, b) {
    var bits = b.hi !== 0 ? LongInt_numOfLeadingZeroBits(b.hi) : LongInt_numOfLeadingZeroBits(b.lo) + 32;
    var sz = 1 + (bits / 16 | 0);
    var dividentBits = bits % 16;
    LongInt_shl(b, bits);
    LongInt_shl(a, dividentBits);
    var q = new LongInt(0, 0, 0);
    while (sz-- > 0) {
        LongInt_shl(q, 16);
        var digitA = (a.hi >>> 16) + 0x10000 * a.sup;
        var digitB = b.hi >>> 16;
        var digit = digitA / digitB | 0;
        var t = LongInt_copy(b);
        LongInt_mul(t, digit);
        if (LongInt_ucompare(t, a) >= 0) {
            while (LongInt_ucompare(t, a) > 0) {
                LongInt_sub(t, b);
                 --digit;
            }
        } else {
            while (true) {
                var nextT = LongInt_copy(t);
                LongInt_add(nextT, b);
                if (LongInt_ucompare(nextT, a) > 0) {
                    break;
                }
                t = nextT;
                ++digit;
            }
        }
        LongInt_sub(a, t);
        q.lo |= digit;
        LongInt_shl(a, 16);
    }
    LongInt_shr(a, bits + 16);
    return q;
}
var Long_add = Long_add;

var Long_sub = Long_sub;

var Long_mul = Long_mul;

var Long_div = Long_div;

var Long_rem = Long_rem;

var Long_or = Long_or;

var Long_and = Long_and;

var Long_xor = Long_xor;

var Long_shl = Long_shl;

var Long_shr = Long_shr;

var Long_shru = Long_shru;

var Long_compare = Long_compare;

var Long_eq = Long_eq;

var Long_ne = Long_ne;

var Long_lt = Long_lt;

var Long_le = Long_le;

var Long_gt = Long_gt;

var Long_ge = Long_ge;

var Long_not = Long_not;

var Long_neg = Long_neg;

function $rt_startThread(runner, callback) {
    var result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
}
function $rt_suspending() {
    return false;
}
function $rt_resuming() {
    return false;
}
function $rt_nativeThread() {
    return null;
}
function $rt_invalidPointer() {
}
main = $rt_mainStarter(gpb_Client_main);
(function() {
    var c;
    c = otjb_Window.prototype;
    c.dispatchEvent = c.$dispatchEvent$exported$4;
    c.addEventListener = c.$addEventListener$exported$0;
    c.removeEventListener = c.$removeEventListener$exported$1;
    c.getLength = c.$getLength$exported$5;
    c.get = c.$get$exported$2;
    c.addEventListener = c.$addEventListener$exported$6;
    c.removeEventListener = c.$removeEventListener$exported$3;
    c = gpb_TileSetLoader.prototype;
    c.stateChanged = c.$stateChanged$exported$0;
    c = gpb_TileMapLoader.prototype;
    c.stateChanged = c.$stateChanged$exported$0;
    c = gpb_TileImageLoader.prototype;
    c.handleEvent = c.$handleEvent$exported$0;
    c = gpb_GameView.prototype;
    c.onAnimationFrame = c.$onAnimationFrame$exported$0;
    c = gpb_KeyListener.prototype;
    c.handleEvent = c.$handleEvent$exported$0;
})();
})();

//# sourceMappingURL=classes.js.map