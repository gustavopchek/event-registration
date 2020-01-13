/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/assets/js/admin.js":
/***/ (function(module, exports, __webpack_require__) {

window.$ = window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");

$(document).ready(function () {
    $(".button-collapse").sideNav();
    tinymce.suffix = '.min';
    tinymce.init({
        content_css: "/build/css/custom_content.css",
        selector: 'textarea',
        language: 'pt_BR',
        // height: 400,
        // min_height: 200,
        // max_height: 600,
        extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
        invalid_styles: 'color font-size font-family line-height letter-spacing',
        plugins: 'link autolink image media autoresize',
        image_caption: true,
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink',
        // file_browser_callback :
        //   function(field_name, url, type, win){
        //       var filebrowser = "filebrowser.php";
        //       filebrowser += (filebrowser.indexOf("?") < 0) ? "?type=" + type : "&type=" + type;
        //       tinymce.activeEditor.windowManager.open({
        //       title : "Inserir arquivo",
        //       width : 520,
        //       height : 400,
        //       url : filebrowser
        //     }, {
        //     window : win,
        //       input : field_name
        //     });
        //     return false;
        // },
        style_formats: [{ title: 'Headers', items: [{ title: 'Subtítulo', block: 'h2' }, { title: 'Título de seção', block: 'h3' }, { title: 'Subtítulo de seção', block: 'h4' }, { title: 'Título de subseção', block: 'h5' }] }, { title: 'Imagem', items: [{
                title: 'Alinhar à esquerda', inline: 'span', icon: 'alignleft',
                selector: 'figure',
                styles: {
                    'float': 'left',
                    'margin': '0 15px 15px 0px'
                }
            }, {
                title: 'Alinhar à direita', inline: 'span', icon: 'alignright',
                selector: 'figure',
                styles: {
                    'float': 'right',
                    'margin': '0 0 15px 15px'
                }
            }] }, { title: 'Inline', items: [{ title: 'Bold', inline: 'b', icon: 'bold' }, { title: 'Italic', inline: 'i', icon: 'italic' }, { title: 'Underline', inline: 'span', styles: { textDecoration: 'underline' }, icon: 'underline' }, { title: 'Strikethrough', inline: 'span', styles: { textDecoration: 'line-through' }, icon: 'strikethrough' }] }, { title: 'Blocks', items: [{ title: 'Paragraph', block: 'p' }, { title: 'Blockquote', block: 'blockquote' }] }, { title: 'Alignment', items: [{ title: 'Left', block: 'div', styles: { textAlign: 'left' }, icon: 'alignleft' }, { title: 'Center', block: 'div', styles: { textAlign: 'center' }, icon: 'aligncenter' }, { title: 'Right', block: 'div', styles: { textAlign: 'right' }, icon: 'alignright' }, { title: 'Justify', block: 'div', styles: { textAlign: 'justify' }, icon: 'alignjustify' }] }]
    });
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/admin.js");


/***/ })

/******/ });
/*!
 * Materialize v0.100.1 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();if(void 0===jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}!function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=t(require("jquery")):t(jQuery)}(function(t){function e(t){var e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375}t.easing.jswing=t.easing.swing;var i=Math.pow,n=Math.sqrt,o=Math.sin,a=Math.cos,r=Math.PI,s=1.70158,l=1.525*s,c=2*r/3,u=2*r/4.5;t.extend(t.easing,{def:"easeOutQuad",swing:function(e){return t.easing[t.easing.def](e)},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-i(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-i(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-i(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-i(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-i(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-i(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-i(-2*t+2,5)/2},easeInSine:function(t){return 1-a(t*r/2)},easeOutSine:function(t){return o(t*r/2)},easeInOutSine:function(t){return-(a(r*t)-1)/2},easeInExpo:function(t){return 0===t?0:i(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-i(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?i(2,20*t-10)/2:(2-i(2,-20*t+10))/2},easeInCirc:function(t){return 1-n(1-i(t,2))},easeOutCirc:function(t){return n(1-i(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-n(1-i(2*t,2)))/2:(n(1-i(-2*t+2,2))+1)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-i(2,10*t-10)*o((10*t-10.75)*c)},easeOutElastic:function(t){return 0===t?0:1===t?1:i(2,-10*t)*o((10*t-.75)*c)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-i(2,20*t-10)*o((20*t-11.125)*u)/2:i(2,-20*t+10)*o((20*t-11.125)*u)/2+1},easeInBack:function(t){return 2.70158*t*t*t-s*t*t},easeOutBack:function(t){return 1+2.70158*i(t-1,3)+s*i(t-1,2)},easeInOutBack:function(t){return t<.5?i(2*t,2)*(7.189819*t-l)/2:(i(2*t-2,2)*((l+1)*(2*t-2)+l)+2)/2},easeInBounce:function(t){return 1-e(1-t)},easeOutBounce:e,easeInOutBounce:function(t){return t<.5?(1-e(1-2*t))/2:(1+e(2*t-1))/2}})}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var o=0,a=t.length,r=e(t);if(n){if(r)for(;a>o&&!1!==i.apply(t[o],n);o++);else for(o in t)if(!1===i.apply(t[o],n))break}else if(r)for(;a>o&&!1!==i.call(t[o],o,t[o]);o++);else for(o in t)if(!1===i.call(t[o],o,t[o]))break;return t},i.data=function(t,e,o){if(void 0===o){var a=(r=t[i.expando])&&n[r];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=o,o}},i.removeData=function(t,e){var o=t[i.expando],a=o&&n[o];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(o in a)t=s[o],s!==(n=a[o])&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(u,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,n,o){if(t){n=(n||"fx")+"queue";var a=i.data(t,n);return o?(!a||i.isArray(o)?a=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,o=t.length;i>n;)t[o++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[o++]=e[n++];t.length=o}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(o)):a.push(o),a):a||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var o=i.queue(n,e),a=o.shift();"inprogress"===a&&(a=o.shift()),a&&("fx"===e&&o.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-o.top,left:n.left-o.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function o(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e];o&&n.push(o)}return n}function a(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function r(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,o){function a(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((a(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e,i){for(var o=0;v>o;++o){var a=c(i,t,n);if(0===a)return i;i-=(l(i,t,n)-e)/a}return i}function d(){for(var e=0;b>e;++e)C[e]=l(e*w,t,n)}function p(e,i,o){var a,r,s=0;do{(a=l(r=i+(o-i)/2,t,n)-e)>0?o=r:i=r}while(Math.abs(a)>g&&++s<y);return r}function h(e){for(var i=0,o=1,a=b-1;o!=a&&C[o]<=e;++o)i+=w;var r=i+(e-C[--o])/(C[o+1]-C[o])*w,s=c(r,t,n);return s>=m?u(e,r):0==s?r:p(e,i,i+w)}function f(){T=!0,(t!=i||n!=o)&&d()}var v=4,m=.001,g=1e-7,y=10,b=11,w=1/(b-1),k="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var C=k?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||f(),t===i&&n===o?e:0===e?0:1===e?1:l(h(e),i,o)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:o}]};var P="generateBezier("+[t,i,n,o]+")";return S.toString=function(){return P},S}function c(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):!(!v.isArray(t)||4!==t.length)&&l.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=o(b.State.calls));for(var a=0;i>a;a++)if(b.State.calls[a]){var s=b.State.calls[a],l=s[0],c=s[2],h=s[3],f=!!h,m=null;h||(h=b.State.calls[a][3]=e-16);for(var g=Math.min((e-h)/c.duration,1),y=0,w=l.length;w>y;y++){var x=l[y],T=x.element;if(r(T)){var S=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(P,function(t,e){k.setPropertyValue(T,"display",e)})}k.setPropertyValue(T,"display",c.display)}c.visibility!==n&&"hidden"!==c.visibility&&k.setPropertyValue(T,"visibility",c.visibility);for(var A in x)if("element"!==A){var O,_=x[A],E=v.isString(_.easing)?b.Easings[_.easing]:_.easing;if(1===g)O=_.endValue;else{var M=_.endValue-_.startValue;if(O=_.startValue+M*E(g,c,M),!f&&O===_.currentValue)continue}if(_.currentValue=O,"tween"===A)m=O;else{if(k.Hooks.registered[A]){var I=k.Hooks.getRoot(A),D=r(T).rootPropertyValueCache[I];D&&(_.rootPropertyValue=D)}var V=k.setPropertyValue(T,A,_.currentValue+(0===parseFloat(O)?"":_.unitType),_.rootPropertyValue,_.scrollData);k.Hooks.registered[A]&&(r(T).rootPropertyValueCache[I]=k.Normalizations.registered[I]?k.Normalizations.registered[I]("extract",null,V[1]):V[1]),"transform"===V[0]&&(S=!0)}}c.mobileHA&&r(T).transformCache.translate3d===n&&(r(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&k.flushTransformCache(T)}}c.display!==n&&"none"!==c.display&&(b.State.calls[a][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(b.State.calls[a][2].visibility=!1),c.progress&&c.progress.call(s[1],s[1],g,Math.max(0,h+c.duration-e),h,m),1===g&&d(a)}}b.State.isTicking&&C(u)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],o=b.State.calls[t][1],a=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,c=0,u=i.length;u>c;c++){var d=i[c].element;if(e||a.loop||("none"===a.display&&k.setPropertyValue(d,"display",a.display),"hidden"===a.visibility&&k.setPropertyValue(d,"visibility",a.visibility)),!0!==a.loop&&(p.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&r(d)){r(d).isAnimating=!1,r(d).rootPropertyValueCache={};var h=!1;p.each(k.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,o=r(d).transformCache[e];r(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(o)&&(h=!0,delete r(d).transformCache[e])}),a.mobileHA&&(h=!0,delete r(d).transformCache.translate3d),h&&k.flushTransformCache(d),k.Values.removeClass(d,"velocity-animating")}if(!e&&a.complete&&!a.loop&&c===u-1)try{a.complete.call(o,o)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==a.loop&&s(o),r(d)&&!0===a.loop&&!e&&(p.each(r(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:a.delay})),!1!==a.queue&&p.dequeue(d,a.queue)}b.State.calls[t]=!1;for(var f=0,v=b.State.calls.length;v>f;f++)if(!1!==b.State.calls[f]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,h=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},m=!1;if(t.fn&&t.fn.jquery?(p=t,m=!0):p=e.Velocity.Utilities,8>=h&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{if(!(7>=h)){var g=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:g,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var o={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:o.v,dv:t(o)}}function i(i,n){var o={dx:i.v,dv:t(i)},a=e(i,.5*n,o),r=e(i,.5*n,a),s=e(i,n,r),l=1/6*(o.dx+2*(a.dx+r.dx)+s.dx),c=1/6*(o.dv+2*(a.dv+r.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function t(e,n,o){var a,r,s,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,o=o||null,l.tension=e,l.friction=n,(a=null!==o)?(u=t(e,n),r=u/o*.016):r=.016;s=i(s||l,r),c.push(1+s.x),u+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(t){return c[t*(c.length-1)|0]}:u}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var k=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(a=0;a<k.Lists.colors.length;a++){var t="color"===k.Lists.colors[a]?"0 0 0 1":"255 255 255 1";k.Hooks.templates[k.Lists.colors[a]]=["Red Green Blue Alpha",t]}var e,i,n;if(h)for(e in k.Hooks.templates){n=(i=k.Hooks.templates[e])[0].split(" ");var o=i[1].match(k.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),k.Hooks.templates[e]=[n.join(" "),o.join(" ")])}for(e in k.Hooks.templates){n=(i=k.Hooks.templates[e])[0].split(" ");for(var a in n){var r=e+n[a],s=a;k.Hooks.registered[r]=[e,s]}}},getRoot:function(t){var e=k.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return k.RegEx.valueUnwrap.test(e)&&(e=e.match(k.RegEx.valueUnwrap)[1]),k.Values.isCSSNullValue(e)&&(e=k.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=k.Hooks.registered[t];if(i){var n=i[0],o=i[1];return(e=k.Hooks.cleanRootPropertyValue(n,e)).toString().match(k.RegEx.valueSplit)[o]}return e},injectValue:function(t,e,i){var n=k.Hooks.registered[t];if(n){var o,a=n[0],r=n[1];return i=k.Hooks.cleanRootPropertyValue(a,i),o=i.toString().match(k.RegEx.valueSplit),o[r]=e,o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return k.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(k.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var o=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=o?o[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=h)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=h||b.State.isGingerbread||(k.Lists.transformsBase=k.Lists.transformsBase.concat(k.Lists.transforms3D));for(t=0;t<k.Lists.transformsBase.length;t++)!function(){var e=k.Lists.transformsBase[t];k.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var a=!1;switch(e.substr(0,e.length-1)){case"translate":a=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&r(i).transformCache[e]===n&&1>o&&(o=1),a=!/(\d)$/i.test(o);break;case"skew":a=!/(deg|\d)$/i.test(o);break;case"rotate":a=!/(deg|\d)$/i.test(o)}return a||(r(i).transformCache[e]="("+o+")"),r(i).transformCache[e]}}}();for(var t=0;t<k.Lists.colors.length;t++)!function(){var e=k.Lists.colors[t];k.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return e;case"extract":var a;if(k.RegEx.wrappedValueAlreadyExtracted.test(o))a=o;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?r=s[o]!==n?s[o]:s.black:k.RegEx.isHex.test(o)?r="rgb("+k.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(r=s.black),a=(r||o).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=h?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=h?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var o;if(o=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[t]=o,[o,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,o,a){function s(t,i){function o(){c&&k.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=p.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===k.getPropertyValue(t,"display")&&(c=!0,k.setPropertyValue(t,"display",k.Values.getDisplayType(t))),!a){if("height"===i&&"border-box"!==k.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(k.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(k.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(k.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(k.getPropertyValue(t,"paddingBottom"))||0);return o(),u}if("width"===i&&"border-box"!==k.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(k.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(k.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(k.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(k.getPropertyValue(t,"paddingRight"))||0);return o(),d}}var f;f=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===h&&"filter"===i?f.getPropertyValue(i):f[i])||null===l)&&(l=t.style[i]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(k.Hooks.registered[i]){var c=i,u=k.Hooks.getRoot(c);o===n&&(o=k.getPropertyValue(t,k.Names.prefixCheck(u)[0])),k.Normalizations.registered[u]&&(o=k.Normalizations.registered[u]("extract",t,o)),l=k.Hooks.extractValue(c,o)}else if(k.Normalizations.registered[i]){var d,f;"transform"!==(d=k.Normalizations.registered[i]("name",t))&&(f=s(t,k.Names.prefixCheck(d)[0]),k.Values.isCSSNullValue(f)&&k.Hooks.templates[i]&&(f=k.Hooks.templates[i][1])),l=k.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&k.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,k.Names.prefixCheck(i)[0]);return k.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,o,a){var s=i;if("scroll"===i)a.container?a.container["scroll"+a.direction]=n:"Left"===a.direction?e.scrollTo(n,a.alternateValue):e.scrollTo(a.alternateValue,n);else if(k.Normalizations.registered[i]&&"transform"===k.Normalizations.registered[i]("name",t))k.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(k.Hooks.registered[i]){var l=i,c=k.Hooks.getRoot(i);o=o||k.getPropertyValue(t,c),n=k.Hooks.injectValue(l,n,o),i=c}if(k.Normalizations.registered[i]&&(n=k.Normalizations.registered[i]("inject",t,n),i=k.Normalizations.registered[i]("name",t)),s=k.Names.prefixCheck(i)[0],8>=h)try{t.style[s]=n}catch(t){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&k.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(k.getPropertyValue(t,e))}var i="";if((h||b.State.isAndroid&&!b.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var o,a;p.each(r(t).transformCache,function(e){return o=r(t).transformCache[e],"transformPerspective"===e?(a=o,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(i+=e+o+" "))}),a&&(i="perspective"+a+" "+i)}k.setPropertyValue(t,"transform",i)}};k.Hooks.register(),k.Normalizations.register(),b.hook=function(t,e,i){var o=n;return t=a(t),p.each(t,function(t,a){if(r(a)===n&&b.init(a),i===n)o===n&&(o=b.CSS.getPropertyValue(a,e));else{var s=b.CSS.setPropertyValue(a,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(a),o=s}}),o};var x=function(){function t(){return s?P.promise||null:l}function o(){function t(t){function d(t,e){var i=n,o=n,r=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\d-]/.test(t[1])||v.isFunction(t[1])||k.RegEx.isHex.test(t[1])?r=t[1]:(v.isString(t[1])&&!k.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(o=e?t[1]:c(t[1],s.duration),t[2]!==n&&(r=t[2]))):i=t,e||(o=o||s.easing),v.isFunction(i)&&(i=i.call(a,T,C)),v.isFunction(r)&&(r=r.call(a,T,C)),[i||0,o,r]}function h(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=k.Values.getUnitType(t)),[n,i]}if(s.begin&&0===T)try{s.begin.call(f,f)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===A){var g,w,x,S=/^x$/i.test(s.axis)?"Left":"Top",O=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,g=s.container["scroll"+S],x=g+p(a).position()[S.toLowerCase()]+O):s.container=null:(g=b.State.scrollAnchor[b.State["scrollProperty"+S]],w=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===S?"Top":"Left")]],x=p(a).offset()[S.toLowerCase()]+O),l={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:x,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:w}},element:a},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===A){if(!r(a).tweensContainer)return void p.dequeue(a,s.queue);"none"===r(a).opts.display&&(r(a).opts.display="auto"),"hidden"===r(a).opts.visibility&&(r(a).opts.visibility="visible"),r(a).opts.loop=!1,r(a).opts.begin=null,r(a).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},r(a).opts,s);M=p.extend(!0,{},r(a).tweensContainer);for(var _ in M)if("element"!==_){var E=M[_].startValue;M[_].startValue=M[_].currentValue=M[_].endValue,M[_].endValue=E,v.isEmptyObject(y)||(M[_].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+_+"): "+JSON.stringify(M[_]),a)}l=M}else if("start"===A){var M;r(a).tweensContainer&&!0===r(a).isAnimating&&(M=r(a).tweensContainer),p.each(m,function(t,e){if(RegExp("^"+k.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),o=i[0],a=i[1],r=i[2];if(k.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=k.Values.hexToRgb(o),c=r?k.Values.hexToRgb(r):n,u=0;u<s.length;u++){var p=[l[u]];a&&p.push(a),c!==n&&p.push(c[u]),m[t+s[u]]=p}delete m[t]}}});for(var V in m){var q=d(m[V]),z=q[0],H=q[1],L=q[2];V=k.Names.camelCase(V);var j=k.Hooks.getRoot(V),$=!1;if(r(a).isSVG||"tween"===j||!1!==k.Names.prefixCheck(j)[1]||k.Normalizations.registered[j]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(V)&&!L&&0!==z&&(L=0),s._cacheValues&&M&&M[V]?(L===n&&(L=M[V].endValue+M[V].unitType),$=r(a).rootPropertyValueCache[j]):k.Hooks.registered[V]?L===n?($=k.getPropertyValue(a,j),L=k.getPropertyValue(a,V,$)):$=k.Hooks.templates[j][1]:L===n&&(L=k.getPropertyValue(a,V));var N,W,F,Q=!1;if(N=h(V,L),L=N[0],F=N[1],N=h(V,z),z=N[0].replace(/^([+-\/*])=/,function(t,e){return Q=e,""}),W=N[1],L=parseFloat(L)||0,z=parseFloat(z)||0,"%"===W&&(/^(fontSize|lineHeight)$/.test(V)?(z/=100,W="em"):/^scale/.test(V)?(z/=100,W=""):/(Red|Green|Blue)$/i.test(V)&&(z=z/100*255,W="")),/[\/*]/.test(Q))W=F;else if(F!==W&&0!==L)if(0===z)W=F;else{o=o||function(){var t={myParent:a.parentNode||i.body,position:k.getPropertyValue(a,"position"),fontSize:k.getPropertyValue(a,"fontSize")},n=t.position===I.lastPosition&&t.myParent===I.lastParent,o=t.fontSize===I.lastFontSize;I.lastParent=t.myParent,I.lastPosition=t.position,I.lastFontSize=t.fontSize;var s=100,l={};if(o&&n)l.emToPx=I.lastEmToPx,l.percentToPxWidth=I.lastPercentToPxWidth,l.percentToPxHeight=I.lastPercentToPxHeight;else{var c=r(a).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(c,e,"hidden")}),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(c,e,s+"%")}),b.CSS.setPropertyValue(c,"paddingLeft",s+"em"),l.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(k.getPropertyValue(c,"width",null,!0))||1)/s,l.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(k.getPropertyValue(c,"height",null,!0))||1)/s,l.emToPx=I.lastEmToPx=(parseFloat(k.getPropertyValue(c,"paddingLeft"))||1)/s,t.myParent.removeChild(c)}return null===I.remToPx&&(I.remToPx=parseFloat(k.getPropertyValue(i.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(e.innerWidth)/100,I.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=I.remToPx,l.vwToPx=I.vwToPx,l.vhToPx=I.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),a),l}();var X=/margin|padding|left|right|width|text|word|letter/i.test(V)||/X$/.test(V)||"x"===V?"x":"y";switch(F){case"%":L*="x"===X?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:L*=o[F+"ToPx"]}switch(W){case"%":L*=1/("x"===X?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:L*=1/o[W+"ToPx"]}}switch(Q){case"+":z=L+z;break;case"-":z=L-z;break;case"*":z*=L;break;case"/":z=L/z}l[V]={rootPropertyValue:$,startValue:L,currentValue:L,endValue:z,unitType:W,easing:H},b.debug&&console.log("tweensContainer ("+V+"): "+JSON.stringify(l[V]),a)}else b.debug&&console.log("Skipping ["+j+"] due to a lack of browser support.")}l.element=a}l.element&&(k.Values.addClass(a,"velocity-animating"),D.push(l),""===s.queue&&(r(a).tweensContainer=l,r(a).opts=s),r(a).isAnimating=!0,T===C-1?(b.State.calls.push([D,f,s,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,u())):T++)}var o,a=this,s=p.extend({},b.defaults,y),l={};switch(r(a)===n&&b.init(a),parseFloat(s.delay)&&!1!==s.queue&&p.queue(a,s.queue,function(t){b.velocityQueueEntryFlag=!0,r(a).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=g;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=c(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(a))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():p.queue(a,s.queue,function(e,i){return!0===i?(P.promise&&P.resolver(f),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(a)[0]||p.dequeue(a)}var s,l,h,f,m,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,h=0,f=this,l=this):(s=!0,h=1,f=w?arguments[0].elements||arguments[0].e:arguments[0]),f=a(f)){w?(m=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(m=arguments[h],y=arguments[h+1]);var C=f.length,T=0;if(!/^(stop|finish)$/i.test(m)&&!p.isPlainObject(y)){y={};for(var S=h+1;S<arguments.length;S++)v.isArray(arguments[S])||!/^(fast|normal|slow)$/i.test(arguments[S])&&!/^\d/.test(arguments[S])?v.isString(arguments[S])||v.isArray(arguments[S])?y.easing=arguments[S]:v.isFunction(arguments[S])&&(y.complete=arguments[S]):y.duration=arguments[S]}var P={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var A;switch(m){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":p.each(f,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var O=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,o){var a=y===n?"":y;return!0!==a&&e[2].queue!==a&&(y!==n||!1!==e[2].queue)||void p.each(f,function(i,n){n===o&&((!0===y||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===m?(r(n)&&r(n).tweensContainer&&!1!==a&&p.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),O.push(t)):"finish"===m&&(e[2].duration=1))})})}),"stop"===m&&(p.each(O,function(t,e){d(e,!0)}),P.promise&&P.resolver(f)),t();default:if(!p.isPlainObject(m)||v.isEmptyObject(m)){if(v.isString(m)&&b.Redirects[m]){var _=(q=p.extend({},y)).duration,E=q.delay||0;return!0===q.backwards&&(f=p.extend(!0,[],f).reverse()),p.each(f,function(t,e){parseFloat(q.stagger)?q.delay=E+parseFloat(q.stagger)*t:v.isFunction(q.stagger)&&(q.delay=E+q.stagger.call(e,t,C)),q.drag&&(q.duration=parseFloat(_)||(/^(callout|transition)/.test(m)?1e3:g),q.duration=Math.max(q.duration*(q.backwards?1-t/C:(t+1)/C),.75*q.duration,200)),b.Redirects[m].call(e,e,q||{},t,C,f,P.promise?P:n)}),t()}var M="Velocity: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(M)):console.log(M),t()}A="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},D=[];p.each(f,function(t,e){v.isNode(e)&&o.call(e)});var V,q=p.extend({},b.defaults,y);if(q.loop=parseInt(q.loop),V=2*q.loop-1,q.loop)for(var z=0;V>z;z++){var H={delay:q.delay,progress:q.progress};z===V-1&&(H.display=q.display,H.visibility=q.visibility,H.complete=q.complete),x(f,"reverse",H)}return t()}};(b=p.extend(x,b)).animate=x;var C=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(C=function(t){return setTimeout(function(){t(!0)},16)},u()):C=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=x,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c=l.begin,u=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(r,r);for(var i in d){h[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];u&&u.call(r,r),s&&s.resolver(r)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;l.complete=o!==a-1?l.begin=null:function(){u&&u.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,c,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}}(window.jQuery||window.Zepto||window,window,document)})),function(t,e,i,n){"use strict";function o(t,e,i){return setTimeout(u(t,i),e)}function a(t,e,i){return!!Array.isArray(t)&&(r(t,i[e],i),!0)}function r(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function s(t,e,i){for(var o=Object.keys(e),a=0;a<o.length;)(!i||i&&t[o[a]]===n)&&(t[o[a]]=e[o[a]]),a++;return t}function l(t,e){return s(t,e,!0)}function c(t,e,i){var n,o=e.prototype;(n=t.prototype=Object.create(o)).constructor=t,n._super=o,i&&s(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function h(t,e,i){r(g(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){r(g(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],o=[],a=0;a<t.length;){var r=e?t[a][e]:t[a];y(o,r)<0&&n.push(t[a]),o[a]=r,a++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function k(t,e){for(var i,o,a=e[0].toUpperCase()+e.slice(1),r=0;r<lt.length;){if(i=lt[r],(o=i?i+a:e)in t)return o;r++}return n}function x(){return ft++}function C(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e=t.options.inputClass;return new(e||(gt?j:yt?W:mt?Q:L))(t,P)}function P(t,e,i){var n=i.pointers.length,o=i.changedPointers.length,a=e&xt&&0==n-o,r=e&(Tt|St)&&0==n-o;i.isFirst=!!a,i.isFinal=!!r,a&&(t.session={}),i.eventType=e,A(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function A(t,e){var i=t.session,n=e.pointers,o=n.length;i.firstInput||(i.firstInput=E(e)),o>1&&!i.firstMultiple?i.firstMultiple=E(e):1===o&&(i.firstMultiple=!1);var a=i.firstInput,r=i.firstMultiple,s=r?r.center:a.center,l=e.center=M(n);e.timeStamp=ht(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=q(s,l),e.distance=V(s,l),O(i,e),e.offsetDirection=D(e.deltaX,e.deltaY),e.scale=r?H(r.pointers,n):1,e.rotation=r?z(r.pointers,n):0,_(i,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function O(t,e){var i=e.center,n=t.offsetDelta||{},o=t.prevDelta||{},a=t.prevInput||{};(e.eventType===xt||a.eventType===Tt)&&(o=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=o.x+(i.x-n.x),e.deltaY=o.y+(i.y-n.y)}function _(t,e){var i,o,a,r,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=St&&(l>kt||s.velocity===n)){var c=s.deltaX-e.deltaX,u=s.deltaY-e.deltaY,d=I(l,c,u);o=d.x,a=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,r=D(c,u),t.lastInterval=e}else i=s.velocity,o=s.velocityX,a=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=a,e.direction=r}function E(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ht(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,o=0;e>o;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:dt(i/e),y:dt(n/e)}}function I(t,e,i){return{x:e/t||0,y:i/t||0}}function D(t,e){return t===e?Pt:pt(t)>=pt(e)?t>0?At:Ot:e>0?_t:Et}function V(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function q(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}function z(t,e){return q(e[1],e[0],qt)-q(t[1],t[0],qt)}function H(t,e){return V(e[0],e[1],qt)/V(t[0],t[1],qt)}function L(){this.evEl=Ht,this.evWin=Lt,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function j(){this.evEl=Nt,this.evWin=Wt,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function $(){this.evTarget=Qt,this.evWin=Xt,this.started=!1,T.apply(this,arguments)}function N(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Tt|St)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function W(){this.evTarget=Yt,this.targetIds={},T.apply(this,arguments)}function F(t,e){var i=b(t.touches),n=this.targetIds;if(e&(xt|Ct)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var o,a,r=b(t.changedTouches),s=[],l=this.target;if(a=i.filter(function(t){return v(t.target,l)}),e===xt)for(o=0;o<a.length;)n[a[o].identifier]=!0,o++;for(o=0;o<r.length;)n[r[o].identifier]&&s.push(r[o]),e&(Tt|St)&&delete n[r[o].identifier],o++;return s.length?[w(a.concat(s),"identifier",!0),s]:void 0}function Q(){T.apply(this,arguments);var t=u(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new L(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function R(t){if(m(t,Kt))return Kt;var e=m(t,te),i=m(t,ee);return e&&i?te+" "+ee:e||i?e?te:ee:m(t,Jt)?Jt:Zt}function Y(t){this.id=x(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ie,this.simultaneous={},this.requireFail=[]}function B(t){return t&se?"cancel":t&ae?"end":t&oe?"move":t&ne?"start":""}function U(t){return t==Et?"down":t==_t?"up":t==At?"left":t==Ot?"right":""}function G(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ot(t,e){return e=e||{},e.recognizers=p(e.recognizers,ot.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,ot.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),rt(this,!0),r(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function rt(t,e){var i=t.element;r(t.options.cssProps,function(t,n){i.style[k(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ct=e.createElement("div"),ut="function",dt=Math.round,pt=Math.abs,ht=Date.now,ft=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,mt="ontouchstart"in t,gt=k(t,"PointerEvent")!==n,yt=mt&&vt.test(navigator.userAgent),bt="touch",wt="mouse",kt=25,xt=1,Ct=2,Tt=4,St=8,Pt=1,At=2,Ot=4,_t=8,Et=16,Mt=At|Ot,It=_t|Et,Dt=Mt|It,Vt=["x","y"],qt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(C(this.element),this.evWin,this.domHandler)}};var zt={mousedown:xt,mousemove:Ct,mouseup:Tt},Ht="mousedown",Lt="mousemove mouseup";c(L,T,{handler:function(t){var e=zt[t.type];e&xt&&0===t.button&&(this.pressed=!0),e&Ct&&1!==t.which&&(e=Tt),this.pressed&&this.allow&&(e&Tt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:wt,srcEvent:t}))}});var jt={pointerdown:xt,pointermove:Ct,pointerup:Tt,pointercancel:St,pointerout:St},$t={2:bt,3:"pen",4:wt,5:"kinect"},Nt="pointerdown",Wt="pointermove pointerup pointercancel";t.MSPointerEvent&&(Nt="MSPointerDown",Wt="MSPointerMove MSPointerUp MSPointerCancel"),c(j,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=jt[n],a=$t[t.pointerType]||t.pointerType,r=a==bt,s=y(e,t.pointerId,"pointerId");o&xt&&(0===t.button||r)?0>s&&(e.push(t),s=e.length-1):o&(Tt|St)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),i&&e.splice(s,1))}});var Ft={touchstart:xt,touchmove:Ct,touchend:Tt,touchcancel:St},Qt="touchstart",Xt="touchstart touchmove touchend touchcancel";c($,T,{handler:function(t){var e=Ft[t.type];if(e===xt&&(this.started=!0),this.started){var i=N.call(this,t,e);e&(Tt|St)&&0==i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Rt={touchstart:xt,touchmove:Ct,touchend:Tt,touchcancel:St},Yt="touchstart touchmove touchend touchcancel";c(W,T,{handler:function(t){var e=Rt[t.type],i=F.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),c(Q,T,{handler:function(t,e,i){var n=i.pointerType==bt,o=i.pointerType==wt;if(n)this.mouse.allow=!1;else if(o&&!this.mouse.allow)return;e&(Tt|St)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Bt=k(ct.style,"touchAction"),Ut=Bt!==n,Gt="compute",Zt="auto",Jt="manipulation",Kt="none",te="pan-x",ee="pan-y";X.prototype={set:function(t){t==Gt&&(t=this.compute()),Ut&&(this.manager.element.style[Bt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return r(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),R(t.join(" "))},preventDefaults:function(t){if(!Ut){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,o=m(n,Kt),a=m(n,ee),r=m(n,te);return o||a&&i&Mt||r&&i&It?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ie=1,ne=2,oe=4,ae=8,re=ae,se=16;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=G(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=G(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=G(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=G(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;ae>n&&e(!0),e(),n>=ae&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ie)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(re|se|32)&&(this.state=ie),this.state=this.process(e),void(this.state&(ne|oe|ae|se)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ne|oe),o=this.attrTest(t);return n&&(i&St||!o)?e|se:n||o?i&Tt?e|ae:e&ne?e|oe:ne:32}}),c(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Dt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Mt&&e.push(ee),t&It&&e.push(te),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,a=t.deltaX,r=t.deltaY;return o&e.direction||(e.direction&Mt?(o=0===a?Pt:0>a?At:Ot,i=a!=this.pX,n=Math.abs(t.deltaX)):(o=0===r?Pt:0>r?_t:Et,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&ne||!(this.state&ne)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ne)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Tt|St)&&!a)this.reset();else if(t.eventType&xt)this.reset(),this._timer=o(function(){this.state=re,this.tryEmit()},e.time,this);else if(t.eventType&Tt)return re;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===re&&(t&&t.eventType&Tt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ht(),this.manager.emit(this.options.event,this._input)))}}),c(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ne)}}),c(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Mt|It,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Mt|It)?e=t.velocity:i&Mt?e=t.velocityX:i&It&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Tt},emit:function(t){var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Jt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime<e.time;if(this.reset(),t.eventType&xt&&0===this.count)return this.failTimeout();if(n&&a&&i){if(t.eventType!=Tt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=o(function(){this.state=re,this.tryEmit()},e.interval,this),ne):re}return 32},failTimeout:function(){return this._timer=o(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==re&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ot.VERSION="2.0.4",ot.defaults={domEvents:!1,touchAction:Gt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:Mt}],[J,{direction:Mt},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&re)&&(o=e.curRecognizer=null);for(var a=0;a<n.length;)i=n[a],2===e.stopped||o&&i!=o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&i.state&(ne|oe|ae)&&(o=e.curRecognizer=i),a++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return r(g(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return r(g(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&rt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(ot,{INPUT_START:xt,INPUT_MOVE:Ct,INPUT_END:Tt,INPUT_CANCEL:St,STATE_POSSIBLE:ie,STATE_BEGAN:ne,STATE_CHANGED:oe,STATE_ENDED:ae,STATE_RECOGNIZED:re,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:At,DIRECTION_RIGHT:Ot,DIRECTION_UP:_t,DIRECTION_DOWN:Et,DIRECTION_HORIZONTAL:Mt,DIRECTION_VERTICAL:It,DIRECTION_ALL:Dt,Manager:at,Input:T,TouchAction:X,TouchInput:W,MouseInput:L,PointerEventInput:j,TouchMouseInput:Q,SingleTouchInput:$,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:h,off:f,each:r,merge:l,extend:s,inherit:c,bindFn:u,prefixed:k}),typeof define==ut&&define.amd?define(function(){return ot}):"undefined"!=typeof module&&module.exports?module.exports=ot:t.Hammer=ot}(window,document),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var o=t(i);o.data("hammer")||o.data("hammer",new e(o[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),function(t){for(var e=0,i=["webkit","moz"],n=t.requestAnimationFrame,o=t.cancelAnimationFrame,a=i.length;--a>=0&&!n;)n=t[i[a]+"RequestAnimationFrame"],o=t[i[a]+"CancelRequestAnimationFrame"];n&&o||(n=function(t){var i=+Date.now(),n=Math.max(e+16,i);return setTimeout(function(){t(e=n)},n-i)},o=clearTimeout),t.requestAnimationFrame=n,t.cancelAnimationFrame=o}(window),Materialize.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=!1;return e.add(e.parents()).each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(t,e,i){var n,o,a,r=null,s=0;i||(i={});var l=function(){s=!1===i.leading?0:getTime(),r=null,a=t.apply(n,o),n=o=null};return function(){var c=getTime();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,o=arguments,u<=0?(clearTimeout(r),r=null,s=c,a=t.apply(n,o),n=o=null):r||!1===i.trailing||(r=setTimeout(l,u)),a}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,function(t){t.fn.collapsible=function(e,i){var n={accordion:void 0,onOpen:void 0,onClose:void 0},o=e;return e=t.extend(n,e),this.each(function(){function n(e){p=d.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),p.not(e).removeClass("active").parent().removeClass("active"),p.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){t(this).is(":visible")&&t(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height",""),s(t(this).siblings(".collapsible-header"))}})})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function r(t,i){i||t.toggleClass("active"),e.accordion||"accordion"===h||void 0===h?n(t):a(t),s(t)}function s(t){t.hasClass("active")?"function"==typeof e.onOpen&&e.onOpen.call(this,t.parent()):"function"==typeof e.onClose&&e.onClose.call(this,t.parent())}function l(t){return c(t).length>0}function c(t){return t.closest("li > .collapsible-header")}function u(){d.off("click.collapse","> li > .collapsible-header")}var d=t(this),p=t(this).find("> li > .collapsible-header"),h=d.data("collapsible");if("destroy"!==o)if(i>=0&&i<p.length){var f=p.eq(i);f.length&&("open"===o||"close"===o&&f.hasClass("active"))&&r(f)}else u(),d.on("click.collapse","> li > .collapsible-header",function(e){var i=t(e.target);l(i)&&(i=c(i)),r(i)}),e.accordion||"accordion"===h||void 0===h?r(p.filter(".active").first(),!0):p.filter(".active").each(function(){r(t(this),!0)});else u()})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrainWidth:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===e?(this.each(function(){t(this).trigger("open")}),!1):"close"===e?(this.each(function(){t(this).trigger("close")}),!1):void this.each(function(){function n(){void 0!==r.data("induration")&&(s.inDuration=r.data("induration")),void 0!==r.data("outduration")&&(s.outDuration=r.data("outduration")),void 0!==r.data("constrainwidth")&&(s.constrainWidth=r.data("constrainwidth")),void 0!==r.data("hover")&&(s.hover=r.data("hover")),void 0!==r.data("gutter")&&(s.gutter=r.data("gutter")),void 0!==r.data("beloworigin")&&(s.belowOrigin=r.data("beloworigin")),void 0!==r.data("alignment")&&(s.alignment=r.data("alignment")),void 0!==r.data("stoppropagation")&&(s.stopPropagation=r.data("stoppropagation"))}function o(e){"focus"===e&&(l=!0),n(),c.addClass("active"),r.addClass("active");var i=r[0].getBoundingClientRect().width;!0===s.constrainWidth?c.css("width",i):c.css("white-space","nowrap");var o=window.innerHeight,u=r.innerHeight(),d=r.offset().left,p=r.offset().top-t(window).scrollTop(),h=s.alignment,f=0,v=0,m=0;!0===s.belowOrigin&&(m=u);var g=0,y=0,b=r.parent();if(b.is("body")||(b[0].scrollHeight>b[0].clientHeight&&(g=b[0].scrollTop),b[0].scrollWidth>b[0].clientWidth&&(y=b[0].scrollLeft)),d+c.innerWidth()>t(window).width()?h="right":d-c.innerWidth()+r.innerWidth()<0&&(h="left"),p+c.innerHeight()>o)if(p+u-c.innerHeight()<0){var w=o-p-m;c.css("max-height",w)}else m||(m+=u),m-=c.innerHeight();"left"===h?(f=s.gutter,v=r.position().left+f):"right"===h&&(c.stop(!0,!0).css({opacity:0,left:0}),v=r.position().left+i-c.width()+(f=-s.gutter)),c.css({position:"absolute",top:r.position().top+m+g,left:v+y}),c.slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"}),setTimeout(function(){t(document).on("click."+c.attr("id"),function(e){a(),t(document).off("click."+c.attr("id"))})},0)}function a(){l=!1,c.fadeOut(s.outDuration),c.removeClass("active"),r.removeClass("active"),t(document).off("click."+c.attr("id")),setTimeout(function(){c.css("max-height","")},s.outDuration)}var r=t(this),s=t.extend({},i,e),l=!1,c=t("#"+r.attr("data-activates"));if(n(),r.after(c),s.hover){var u=!1;r.off("click."+r.attr("id")),r.on("mouseenter",function(t){!1===u&&(o(),u=!0)}),r.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(c)||(c.stop(!0,!0),a(),u=!1)}),c.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(r)||(c.stop(!0,!0),a(),u=!1)})}else r.off("click."+r.attr("id")),r.on("click."+r.attr("id"),function(e){l||(r[0]!=e.currentTarget||r.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?r.hasClass("active")&&(a(),t(document).off("click."+c.attr("id"))):(e.preventDefault(),s.stopPropagation&&e.stopPropagation(),o("click")))});r.on("open",function(t,e){o(e)}),r.on("close",a)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t){"use strict";var e={opacity:.5,inDuration:250,outDuration:250,ready:void 0,complete:void 0,dismissible:!0,startingTop:"4%",endingTop:"10%"},i=function(){function i(e,n){_classCallCheck(this,i),e[0].M_Modal&&e[0].M_Modal.destroy(),this.$el=e,this.options=t.extend({},i.defaults,n),this.isOpen=!1,this.$el[0].M_Modal=this,this.id=e.attr("id"),this.openingTrigger=void 0,this.$overlay=t('<div class="modal-overlay"></div>'),i._increment++,i._count++,this.$overlay[0].style.zIndex=1e3+2*i._increment,this.$el[0].style.zIndex=1e3+2*i._increment+1,this.setupEventHandlers()}return _createClass(i,[{key:"getInstance",value:function(){return this}},{key:"destroy",value:function(){this.removeEventHandlers(),this.$el[0].removeAttribute("style"),this.$overlay[0].parentNode&&this.$overlay[0].parentNode.removeChild(this.$overlay[0]),this.$el[0].M_Modal=void 0,i._count--}},{key:"setupEventHandlers",value:function(){this.handleOverlayClickBound=this.handleOverlayClick.bind(this),this.handleModalCloseClickBound=this.handleModalCloseClick.bind(this),1===i._count&&document.addEventListener("click",this.handleTriggerClick),this.$overlay[0].addEventListener("click",this.handleOverlayClickBound),this.$el[0].addEventListener("click",this.handleModalCloseClickBound)}},{key:"removeEventHandlers",value:function(){0===i._count&&document.removeEventListener("click",this.handleTriggerClick),this.$overlay[0].removeEventListener("click",this.handleOverlayClickBound),this.$el[0].removeEventListener("click",this.handleModalCloseClickBound)}},{key:"handleTriggerClick",value:function(e){var i=t(e.target).closest(".modal-trigger");if(e.target&&i.length){var n=i[0].getAttribute("href");n=n?n.slice(1):i[0].getAttribute("data-target");var o=document.getElementById(n).M_Modal;o&&o.open(i),e.preventDefault()}}},{key:"handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"handleModalCloseClick",value:function(e){var i=t(e.target).closest(".modal-close");e.target&&i.length&&this.close()}},{key:"handleKeydown",value:function(t){27===t.keyCode&&this.options.dismissible&&this.close()}},{key:"animateIn",value:function(){var e=this;t.extend(this.$el[0].style,{display:"block",opacity:0}),t.extend(this.$overlay[0].style,{display:"block",opacity:0}),Vel(this.$overlay[0],{opacity:this.options.opacity},{duration:this.options.inDuration,queue:!1,ease:"easeOutCubic"});var i={duration:this.options.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof e.options.ready&&e.options.ready.call(e,e.$el,e.openingTrigger)}};this.$el[0].classList.contains("bottom-sheet")?Vel(this.$el[0],{bottom:0,opacity:1},i):(Vel.hook(this.$el[0],"scaleX",.7),this.$el[0].style.top=this.options.startingTop,Vel(this.$el[0],{top:this.options.endingTop,opacity:1,scaleX:1},i))}},{key:"animateOut",value:function(){var t=this;Vel(this.$overlay[0],{opacity:0},{duration:this.options.outDuration,queue:!1,ease:"easeOutQuart"});var e={duration:this.options.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){t.$el[0].style.display="none","function"==typeof t.options.complete&&t.options.complete.call(t,t.$el),t.$overlay[0].remove()}};this.$el[0].classList.contains("bottom-sheet")?Vel(this.$el[0],{bottom:"-100%",opacity:0},e):Vel(this.$el[0],{top:this.options.startingTop,opacity:0,scaleX:.7},e)}},{key:"open",value:function(t){if(!this.isOpen){this.isOpen=!0;var e=document.body;return e.style.overflow="hidden",this.$el[0].classList.add("open"),e.appendChild(this.$overlay[0]),this.openingTrigger=t||void 0,this.options.dismissible&&(this.handleKeydownBound=this.handleKeydown.bind(this),document.addEventListener("keydown",this.handleKeydownBound)),this.animateIn(),this}}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,this.$el[0].classList.remove("open"),document.body.style.overflow=null,this.options.dismissible&&document.removeEventListener("keydown",this.handleKeydownBound),this.animateOut(),this}}],[{key:"init",value:function(e,n){var o=[];return e.each(function(){o.push(new i(t(this),n))}),o}},{key:"defaults",get:function(){return e}}]),i}();i._increment=0,i._count=0,window.Materialize.Modal=i,t.fn.modal=function(e){return i.prototype[e]?"get"===e.slice(0,3)?this.first()[0].M_Modal[e]():this.each(function(){this.M_Modal[e]()}):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.modal"):(i.init(this,arguments[0]),this)}}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){a=!1;var e=s.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,s.data("width")),l=s.data("height");s.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t(window).off("scroll.materialbox"),t(document).off("keyup.materialbox"),t(window).off("resize.materialbox"),t("#materialbox-overlay").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){o=!1,t(this).remove()}}),s.velocity({width:n,height:l,left:0,top:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),s.removeAttr("style"),s.attr("style",c),s.removeClass("active"),a=!0,i&&i.css("overflow","")}}),t(".materialbox-caption").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var i,n,o=!1,a=!0,r=200,s=t(this),l=t("<div></div>").addClass("material-placeholder"),c=s.attr("style");s.wrap(l),s.on("click",function(){var r=s.parent(".material-placeholder"),l=window.innerWidth,c=window.innerHeight,u=s.width(),d=s.height();if(!1===a)return e(),!1;if(o&&!0===a)return e(),!1;a=!1,s.addClass("active"),o=!0,r.css({width:r[0].getBoundingClientRect().width,height:r[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=r[0].parentNode;for(;null!==n&&!t(n).is(document);){var p=t(n);"visible"!==p.css("overflow")&&(p.css("overflow","visible"),i=void 0===i?p:i.add(p)),n=n.parentNode}s.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}).data("width",u).data("height",d);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){!0===a&&e()});s.before(h);var f=h[0].getBoundingClientRect();if(h.css({width:l,height:c,left:-1*f.left,top:-1*f.top}),h.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"}),""!==s.data("caption")){var v=t('<div class="materialbox-caption"></div>');v.text(s.data("caption")),t("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"})}var m=0,g=0;u/l>d/c?(m=.9*l,g=.9*l*(d/u)):(m=.9*c*(u/d),g=.9*c),s.hasClass("responsive-img")?s.velocity({"max-width":m,width:u},{duration:0,queue:!1,complete:function(){s.css({left:0,top:0}).velocity({height:g,width:m,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-m/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}})}}):s.css("left",0).css("top",0).velocity({height:g,width:m,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-m/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-g/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}}),t(window).on("scroll.materialbox",function(){o&&e()}),t(window).on("resize.materialbox",function(){o&&e()}),t(document).on("keyup.materialbox",function(t){27===t.keyCode&&!0===a&&o&&e()})})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(i){function n(i){var n;n=e<601?o.height()>0?o.height():o.children("img").height():o.height()>0?o.height():500;var a=o.children("img").first(),r=a.height()-n,s=o.offset().top+n,l=o.offset().top,c=t(window).scrollTop(),u=window.innerHeight,d=(c+u-l)/(n+u),p=Math.round(r*d);i&&a.css("display","block"),s>c&&l<c+u&&a.css("transform","translate3D(-50%,"+p+"px, 0)")}var o=t(this);o.addClass("parallax"),o.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&t(this).trigger("load")}),t(window).scroll(function(){e=t(window).width(),n(!1)}),t(window).resize(function(){e=t(window).width(),n(!1)})})}}(jQuery),function(t){var e={init:function(e){var i={onShow:null,swipeable:!1,responsiveThreshold:1/0};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){var o,a,r,s,l,c=n+i,u=t(this),d=t(window).width(),p=u.find("li.tab a"),h=u.width(),f=t(),v=Math.max(h,u[0].scrollWidth)/p.length,m=prev_index=0,g=!1,y=function(t){return Math.ceil(h-t.position().left-t[0].getBoundingClientRect().width-u.scrollLeft())},b=function(t){return Math.floor(t.position().left+u.scrollLeft())},w=function(t){m-t>=0?(s.velocity({right:y(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({left:b(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(s.velocity({left:b(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({right:y(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90}))};e.swipeable&&d>e.responsiveThreshold&&(e.swipeable=!1),0===(o=t(p.filter('[href="'+location.hash+'"]'))).length&&(o=t(this).find("li.tab a.active").first()),0===o.length&&(o=t(this).find("li.tab a").first()),o.addClass("active"),(m=p.index(o))<0&&(m=0),void 0!==o[0]&&(a=t(o[0].hash)).addClass("active"),u.find(".indicator").length||u.append('<li class="indicator"></li>'),s=u.find(".indicator"),u.append(s),u.is(":visible")&&setTimeout(function(){s.css({right:y(o)}),s.css({left:b(o)})},0),t(window).off("resize.tabs-"+c).on("resize.tabs-"+c,function(){h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,m<0&&(m=0),0!==v&&0!==h&&(s.css({right:y(o)}),s.css({left:b(o)}))}),e.swipeable?(p.each(function(){var e=t(Materialize.escapeHash(this.hash));e.addClass("carousel-item"),f=f.add(e)}),r=f.wrapAll('<div class="tabs-content carousel"></div>'),f.css("display",""),t(".tabs-content.carousel").carousel({fullWidth:!0,noWrap:!0,onCycleTo:function(t){if(!g){var i=m;m=r.index(t),o.removeClass("active"),(o=p.eq(m)).addClass("active"),w(i),"function"==typeof e.onShow&&e.onShow.call(u[0],a)}}})):p.not(o).each(function(){t(Materialize.escapeHash(this.hash)).hide()}),u.off("click.tabs").on("click.tabs","a",function(i){if(t(this).parent().hasClass("disabled"))i.preventDefault();else if(!t(this).attr("target")){g=!0,h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,o.removeClass("active");var n=a;o=t(this),a=t(Materialize.escapeHash(this.hash)),p=u.find("li.tab a");o.position();o.addClass("active"),prev_index=m,(m=p.index(t(this)))<0&&(m=0),e.swipeable?f.length&&f.carousel("set",m,function(){"function"==typeof e.onShow&&e.onShow.call(u[0],a)}):(void 0!==a&&(a.show(),a.addClass("active"),"function"==typeof e.onShow&&e.onShow.call(this,a)),void 0===n||n.is(a)||(n.hide(),n.removeClass("active"))),l=setTimeout(function(){g=!1},300),w(prev_index),i.preventDefault()}})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tabs"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery),function(t){t.fn.tooltip=function(i){var n={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).removeAttr("data-tooltip-id"),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(n,i),this.each(function(){var n=Materialize.guid(),o=t(this);o.attr("data-tooltip-id")&&t("#"+o.attr("data-tooltip-id")).remove(),o.attr("data-tooltip-id",n);var a,r,s,l,c,u,d=function(){a=o.attr("data-html")?"true"===o.attr("data-html"):i.html,r=o.attr("data-delay"),r=void 0===r||""===r?i.delay:r,s=o.attr("data-position"),s=void 0===s||""===s?i.position:s,l=o.attr("data-tooltip"),l=void 0===l||""===l?i.tooltip:l};d();c=function(){var e=t('<div class="material-tooltip"></div>');return l=a?t("<span></span>").html(l):t("<span></span>").text(l),e.append(l).appendTo(t("body")).attr("id",n),(u=t('<div class="backdrop"></div>')).appendTo(e),e}(),o.off("mouseenter.tooltip mouseleave.tooltip");var p,h=!1;o.on({"mouseenter.tooltip":function(t){p=setTimeout(function(){d(),h=!0,c.velocity("stop"),u.velocity("stop"),c.css({visibility:"visible",left:"0px",top:"0px"});var t,i,n,a=o.outerWidth(),r=o.outerHeight(),l=c.outerHeight(),p=c.outerWidth(),f="0px",v="0px",m=u[0].offsetWidth,g=u[0].offsetHeight,y=8,b=8,w=0;"top"===s?(t=o.offset().top-l-5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="-10px",u.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:l,marginLeft:p/2-m/2})):"left"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left-p-5,n=e(i,t,p,l),v="-10px",u.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:l/2,marginLeft:p})):"right"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left+a+5,n=e(i,t,p,l),v="+10px",u.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:l/2,marginLeft:"0px"})):(t=o.offset().top+o.outerHeight()+5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="+10px",u.css({top:0,left:0,marginLeft:p/2-m/2})),c.css({top:n.y,left:n.x}),y=Math.SQRT2*p/parseInt(m),b=Math.SQRT2*l/parseInt(g),w=Math.max(y,b),c.velocity({translateY:f,translateX:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),u.css({visibility:"visible"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:w,scaleY:w},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},r)},"mouseleave.tooltip":function(){h=!1,clearTimeout(p),setTimeout(function(){!0!==h&&(c.velocity({opacity:0,translateY:0,translateX:0},{duration:225,queue:!1}),u.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){u.css({visibility:"hidden"}),c.css({visibility:"hidden"}),h=!1}}))},225)}})}))};var e=function(e,i,n,o){var a=e,r=i;return a<0?a=4:a+n>window.innerWidth&&(a-=a+n-window.innerWidth),r<0?r=4:r+o>window.innerHeight+t(window).scrollTop&&(r-=r+o-window.innerHeight),{x:a,y:r}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,o={top:0,left:0},a=t&&t.ownerDocument;return e=a.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),n=i(a),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}}function o(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function a(t){if(!1===u.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentNode;){if(!(i instanceof SVGElement)&&-1!==i.className.indexOf("waves-effect")){e=i;break}i=i.parentNode}return e}function r(e){var i=a(e);null!==i&&(c.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",c.hide,!1),i.addEventListener("touchcancel",c.hide,!1)),i.addEventListener("mouseup",c.hide,!1),i.addEventListener("mouseleave",c.hide,!1),i.addEventListener("dragend",c.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,a=document.createElement("div");a.className="waves-ripple",i.appendChild(a);var r=n(i),s=t.pageY-r.top,l=t.pageX-r.left,u="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,l=t.touches[0].pageX-r.left),a.setAttribute("data-hold",Date.now()),a.setAttribute("data-scale",u),a.setAttribute("data-x",l),a.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};a.className=a.className+" waves-notransition",a.setAttribute("style",o(d)),a.className=a.className.replace("waves-notransition",""),d["-webkit-transform"]=u,d["-moz-transform"]=u,d["-ms-transform"]=u,d["-o-transform"]=u,d.transform=u,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",a.setAttribute("style",o(d))},hide:function(t){u.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;var a=(i=n[n.length-1]).getAttribute("data-x"),r=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=350-(Date.now()-Number(i.getAttribute("data-hold")));l<0&&(l=0),setTimeout(function(){var t={top:r+"px",left:a+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",o(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var o=document.createElement("i");o.className=i.className+" waves-input-wrapper";var a=i.getAttribute("style");a||(a=""),o.setAttribute("style",a),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(o,i),o.appendChild(i)}}}},u={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?u.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){u.touches>0&&(u.touches-=1)},500):"mousedown"===t.type&&u.touches>0&&(e=!1),e},touchup:function(t){u.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentNode),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),function(t){"use strict";var e={displayLength:1/0,inDuration:300,outDuration:375,className:void 0,completeCallback:void 0,activationPercent:.8},i=function(){function i(e,n,o,a){if(_classCallCheck(this,i),e){this.options={displayLength:n,className:o,completeCallback:a},this.options=t.extend({},i.defaults,this.options),this.message=e,this.panning=!1,this.timeRemaining=this.options.displayLength,0===i._toasts.length&&i._createContainer(),i._toasts.push(this);var r=this.createToast();r.M_Toast=this,this.el=r,this._animateIn(),this.setTimer()}}return _createClass(i,[{key:"createToast",value:function(){var e=document.createElement("div");if(e.classList.add("toast"),this.options.className){var n=this.options.className.split(" "),o=void 0,a=void 0;for(o=0,a=n.length;o<a;o++)e.classList.add(n[o])}return("object"==typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"==typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"==typeof this.message.nodeName)?e.appendChild(this.message):this.message instanceof jQuery?t(e).append(this.message):e.innerHTML=this.message,i._container.appendChild(e),e}},{key:"_animateIn",value:function(){Vel(this.el,{top:0,opacity:1},{duration:300,easing:"easeOutCubic",queue:!1})}},{key:"setTimer",value:function(){var t=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval(function(){t.panning||(t.timeRemaining-=20),t.timeRemaining<=0&&t.remove()},20))}},{key:"remove",value:function(){var t=this;window.clearInterval(this.counterInterval);var e=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+e+"px)",this.el.style.opacity=0),Vel(this.el,{opacity:0,marginTop:"-40px"},{duration:this.options.outDuration,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof t.options.completeCallback&&t.options.completeCallback(),t.el.parentNode.removeChild(t.el),i._toasts.splice(i._toasts.indexOf(t),1),0===i._toasts.length&&i._removeContainer()}})}}],[{key:"_createContainer",value:function(){var t=document.createElement("div");t.setAttribute("id","toast-container"),t.addEventListener("touchstart",i._onDragStart),t.addEventListener("touchmove",i._onDragMove),t.addEventListener("touchend",i._onDragEnd),t.addEventListener("mousedown",i._onDragStart),document.addEventListener("mousemove",i._onDragMove),document.addEventListener("mouseup",i._onDragEnd),document.body.appendChild(t),i._container=t}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",i._onDragMove),document.removeEventListener("mouseup",i._onDragEnd),i._container.parentNode.removeChild(i._container),i._container=null}},{key:"_onDragStart",value:function(e){if(e.target&&t(e.target).closest(".toast").length){var n=t(e.target).closest(".toast")[0].M_Toast;n.panning=!0,i._draggedToast=n,n.el.classList.add("panning"),n.el.style.transition=null,n.startingXPos=i._xPos(e),n.time=Date.now(),n.xPos=i._xPos(e)}}},{key:"_onDragMove",value:function(t){if(i._draggedToast){t.preventDefault();var e=i._draggedToast;e.deltaX=Math.abs(e.xPos-i._xPos(t)),e.xPos=i._xPos(t),e.velocityX=e.deltaX/(Date.now()-e.time),e.time=Date.now();var n=e.xPos-e.startingXPos,o=e.el.offsetWidth*e.options.activationPercent;e.el.style.transform="translateX("+n+"px)",e.el.style.opacity=1-Math.abs(n/o)}}},{key:"_onDragEnd",value:function(t){if(i._draggedToast){var e=i._draggedToast;e.panning=!1,e.el.classList.remove("panning");var n=e.xPos-e.startingXPos,o=e.el.offsetWidth*e.options.activationPercent;Math.abs(n)>o||e.velocityX>1?(e.wasSwiped=!0,e.remove()):(e.el.style.transition="transform .2s, opacity .2s",e.el.style.transform=null,e.el.style.opacity=null),i._draggedToast=null}}},{key:"_xPos",value:function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}},{key:"removeAll",value:function(){for(var t in i._toasts)i._toasts[t].remove()}},{key:"defaults",get:function(){return e}}]),i}();i._toasts=[],i._container=null,i._draggedToast=null,window.Materialize.Toast=i,window.Materialize.toast=function(t,e,n,o){return new i(t,e,n,o)}}(jQuery),function(t){var e={init:function(e){var i={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0,onOpen:null,onClose:null};e=t.extend(i,e),t(this).each(function(){var i=t(this),n=i.attr("data-activates"),o=t("#"+n);300!=e.menuWidth&&o.css("width",e.menuWidth);var a=t('.drag-target[data-sidenav="'+n+'"]');e.draggable?(a.length&&a.remove(),a=t('<div class="drag-target"></div>').attr("data-sidenav",n),t("body").append(a)):a=t(),"left"==e.edge?(o.css("transform","translateX(-100%)"),a.css({left:0})):(o.addClass("right-aligned").css("transform","translateX(100%)"),a.css({right:0})),o.hasClass("fixed")&&window.innerWidth>992&&o.css("transform","translateX(0)"),o.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").length&&l?r(!0):o.css("transform","translateX(0%)"):!1===l&&("left"===e.edge?o.css("transform","translateX(-100%)"):o.css("transform","translateX(100%)"))}),!0===e.closeOnClick&&o.on("click.itemclick","a:not(.collapsible-header)",function(){window.innerWidth>992&&o.hasClass("fixed")||r()});var r=function(i){s=!1,l=!1,t("body").css({overflow:"",width:""}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(a.css({width:"",right:"",left:"0"}),o.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})):(a.css({width:"",right:"0",left:""}),o.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})),"function"==typeof e.onClose&&e.onClose.call(this,o)},s=!1,l=!1;e.draggable&&(a.on("click",function(){l&&r()}),a.hammer({prevent_default:!1}).on("pan",function(i){if("touch"==i.gesture.pointerType){i.gesture.direction;var n=i.gesture.center.x,a=i.gesture.center.y;i.gesture.velocityX;if(0===n&&0===a)return;var s=t("body"),c=t("#sidenav-overlay"),u=s.innerWidth();if(s.css("overflow","hidden"),s.width(u),0===c.length&&((c=t('<div id="sidenav-overlay"></div>')).css("opacity",0).click(function(){r()}),"function"==typeof e.onOpen&&e.onOpen.call(this,o),t("body").append(c)),"left"===e.edge&&(n>e.menuWidth?n=e.menuWidth:n<0&&(n=0)),"left"===e.edge)n<e.menuWidth/2?l=!1:n>=e.menuWidth/2&&(l=!0),o.css("transform","translateX("+(n-e.menuWidth)+"px)");else{n<window.innerWidth-e.menuWidth/2?l=!0:n>=window.innerWidth-e.menuWidth/2&&(l=!1);var d=n-e.menuWidth/2;d<0&&(d=0),o.css("transform","translateX("+d+"px)")}var p;"left"===e.edge?(p=n/e.menuWidth,c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"})):(p=Math.abs((n-window.innerWidth)/e.menuWidth),c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(i){if("touch"==i.gesture.pointerType){var n=t("#sidenav-overlay"),r=i.gesture.velocityX,c=i.gesture.center.x,u=c-e.menuWidth,d=c-e.menuWidth/2;u>0&&(u=0),d<0&&(d=0),s=!1,"left"===e.edge?l&&r<=.3||r<-.5?(0!==u&&o.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:0,left:""}),l=!0):(!l||r>.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[-1*e.menuWidth-10,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){"function"==typeof e.onClose&&e.onClose.call(this,o),t(this).remove()}}),a.css({width:"10px",right:"",left:0})):l&&r>=-.3||r>.5?(0!==d&&o.velocity({translateX:[0,d]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:"",left:0}),l=!0):(!l||r<-.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[e.menuWidth+10,d]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){"function"==typeof e.onClose&&e.onClose.call(this,o),t(this).remove()}}),a.css({width:"10px",right:0,left:""}))}})),i.off("click.sidenav").on("click.sidenav",function(){if(!0===l)l=!1,s=!1,r();else{var i=t("body"),n=t('<div id="sidenav-overlay"></div>'),c=i.innerWidth();i.css("overflow","hidden"),i.width(c),t("body").append(a),"left"===e.edge?(a.css({width:"50%",right:0,left:""}),o.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(a.css({width:"50%",right:"",left:0}),o.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),n.css("opacity",0).click(function(){l=!1,s=!1,r(),n.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(n),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){l=!0,s=!1}}),"function"==typeof e.onOpen&&e.onOpen.call(this,o)}return!1})})},destroy:function(){var e=t("#sidenav-overlay"),i=t('.drag-target[data-sidenav="'+t(this).attr("data-activates")+'"]');e.trigger("click"),i.remove(),t(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,o){var r=t();return t.each(a,function(t,a){if(a.height()>0){var s=a.offset().top,l=a.offset().left,c=l+a.width(),u=s+a.height();!(l>i||c<o||s>n||u<e)&&r.push(a)}}),r}function i(i){++l;var n=o.scrollTop(),a=o.scrollLeft(),s=a+o.width(),u=n+o.height(),d=e(n+c.top+i||200,s+c.right,u+c.bottom,a+c.left);t.each(d,function(t,e){"number"!=typeof e.data("scrollSpy:ticks")&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",l)}),t.each(r,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==l&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),r=d}function n(){o.trigger("scrollSpy:winSize")}var o=t(window),a=[],r=[],s=!1,l=0,c={top:0,right:0,bottom:0,left:0};t.scrollSpy=function(e,n){var r={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}};n=t.extend(r,n);var l=[];(e=t(e)).each(function(e,i){a.push(t(i)),t(i).data("scrollSpy:id",e),t('a[href="#'+t(i).attr("id")+'"]').click(function(e){e.preventDefault();var i=t(Materialize.escapeHash(this.hash)).offset().top+1;t("html, body").animate({scrollTop:i-n.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),c.top=n.offsetTop||0,c.right=n.offsetRight||0,c.bottom=n.offsetBottom||0,c.left=n.offsetLeft||0;var u=Materialize.throttle(function(){i(n.scrollOffset)},n.throttle||100),d=function(){t(document).ready(u)};return s||(o.on("scroll",d),o.on("resize",d),s=!0),setTimeout(d,0),e.on("scrollSpy:enter",function(){l=t.grep(l,function(t){return 0!=t.height()});var e=t(this);l[0]?(t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass),e.data("scrollSpy:id")<l[0].data("scrollSpy:id")?l.unshift(t(this)):l.push(t(this))):l.push(t(this)),t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}),e.on("scrollSpy:exit",function(){if((l=t.grep(l,function(t){return 0!=t.height()}))[0]){t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass);var e=t(this);(l=t.grep(l,function(t){return t.attr("id")!=e.attr("id")}))[0]&&t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return o},e=e||{throttle:100},o.on("resize",Materialize.throttle(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),o=e.css("font-size"),a=e.css("line-height"),r=e.css("padding");o&&n.css("font-size",o),i&&n.css("font-family",i),a&&n.css("line-height",a),r&&n.css("padding",r),e.data("original-height")||e.data("original-height",e.height()),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var s=n.html().replace(/\n/g,"<br>");n.html(s),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.data("original-height")<=n.height()?e.css("height",n.height()):e.val().length<e.data("previous-length")&&e.css("height",e.data("original-height")),e.data("previous-length",e.val().length)}Materialize.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e,i){var n=t(this);t(i).val().length>0||t(i).is(":focus")||i.autofocus||void 0!==n.attr("placeholder")?n.siblings("label").addClass("active"):t(i)[0].validity?n.siblings("label").toggleClass("active",!0===t(i)[0].validity.badInput):n.siblings("label").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",i,function(){var e=t(this),i=".prefix";0===e.val().length&&!0!==e[0].validity.badInput&&void 0===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("data-length"),i=parseInt(t.attr("data-length")),n=t.val().length;0!==t.val().length||!1!==t[0].validity.badInput||t.is(":required")?t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid"))):t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid"))};t(document).on("keyup.radio","input[type=radio], input[type=checkbox]",function(e){if(9===e.which)return t(this).addClass("tabbed"),void t(this).one("blur",function(e){t(this).removeClass("tabbed")})});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));t(".materialize-textarea").each(function(){var e=t(this);e.data("original-height",e.height()),e.data("previous-length",e.val().length)}),t("body").on("keyup keydown autoresize",".materialize-textarea",function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field").find("input.file-path"),i=t(this)[0].files,n=[],o=0;o<i.length;o++)n.push(i[o].name);e.val(n.join(", ")),e.trigger("change")});var o="input[type=range]",a=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var r=function(t){var e=-7+parseInt(t.parent().css("padding-left"))+"px";t.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:e},{duration:300,easing:"easeOutExpo"})},s=function(t){var e=t.width()-15,i=parseFloat(t.attr("max")),n=parseFloat(t.attr("min"));return(parseFloat(t.val())-n)/(i-n)*e};t(document).on("change",o,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val()),i.hasClass("active")||r(i);var n=s(t(this));i.addClass("active").css("left",n)}),t(document).on("mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb");if(i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html(t(this).val()),a=!0,t(this).addClass("active"),i.hasClass("active")||r(i),"input"!==e.type){var n=s(t(this));i.addClass("active").css("left",n)}}),t(document).on("mouseup touchend",".range-field",function(){a=!1,t(this).removeClass("active")}),t(document).on("input mousemove touchmove",".range-field",function(e){var i=t(this).children(".thumb"),n=t(this).find(o);if(a){i.hasClass("active")||r(i);var l=s(n);i.addClass("active").css("left",l),i.find(".value").html(i.siblings(o).val())}}),t(document).on("mouseout touchleave",".range-field",function(){if(!a){var e=t(this).children(".thumb"),i=7+parseInt(t(this).css("padding-left"))+"px";e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:i},{duration:100}),e.removeClass("active")}}),t.fn.autocomplete=function(e){var i={data:{},limit:1/0,onAutocomplete:null,minLength:1};return e=t.extend(i,e),this.each(function(){var i,n=t(this),o=e.data,a=0,r=-1,s=n.closest(".input-field");if(t.isEmptyObject(o))n.off("keyup.autocomplete focus.autocomplete");else{var l,c=t('<ul class="autocomplete-content dropdown-content"></ul>');s.length?(l=s.children(".autocomplete-content.dropdown-content").first()).length||s.append(c):(l=n.next(".autocomplete-content.dropdown-content")).length||n.after(c),l.length&&(c=l);var u=function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),o=n+t.length-1,a=e.text().slice(0,n),r=e.text().slice(n,o+1),s=e.text().slice(o+1);e.html("<span>"+a+"<span class='highlight'>"+r+"</span>"+s+"</span>"),i.length&&e.prepend(i)},d=function(){r=-1,c.find(".active").removeClass("active")},p=function(){c.empty(),d(),i=void 0};n.off("blur.autocomplete").on("blur.autocomplete",function(){p()}),n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(r){a=0;var s=n.val().toLowerCase();if(13!==r.which&&38!==r.which&&40!==r.which){if(i!==s&&(p(),s.length>=e.minLength))for(var l in o)if(o.hasOwnProperty(l)&&-1!==l.toLowerCase().indexOf(s)){if(a>=e.limit)break;var d=t("<li></li>");o[l]?d.append('<img src="'+o[l]+'" class="right circle"><span>'+l+"</span>"):d.append("<span>"+l+"</span>"),c.append(d),u(s,d),a++}i=s}}),n.off("keydown.autocomplete").on("keydown.autocomplete",function(t){var e,i=t.which,n=c.children("li").length,o=c.children(".active").first();13===i&&r>=0?(e=c.children("li").eq(r)).length&&(e.trigger("mousedown.autocomplete"),t.preventDefault()):38!==i&&40!==i||(t.preventDefault(),38===i&&r>0&&r--,40===i&&r<n-1&&r++,o.removeClass("active"),r>=0&&c.children("li").eq(r).addClass("active"))}),c.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete","li",function(){var i=t(this).text().trim();n.val(i),n.trigger("change"),p(),"function"==typeof e.onAutocomplete&&e.onAutocomplete.call(this,i)})}})}}),t.fn.material_select=function(e){function i(t,e,i){var o=t.indexOf(e),a=-1===o;return a?t.push(e):t.splice(o,1),i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",a),n(t,i),a}function n(t,e){for(var i="",n=0,o=t.length;n<o;n++){var a=e.find("option").eq(t[n]).text();i+=0===n?a:", "+a}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var o=!!n.attr("multiple"),a=n.attr("data-select-id");if(a&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+a).remove()),"destroy"===e)return n.removeAttr("data-select-id").removeClass("initialized"),void t(window).off("click.select");var r=Materialize.guid();n.attr("data-select-id",r);var s=t('<div class="select-wrapper"></div>');s.addClass(n.attr("class")),n.is(":disabled")&&s.addClass("disabled");var l=t('<ul id="select-options-'+r+'" class="dropdown-content select-dropdown '+(o?"multiple-select-dropdown":"")+'"></ul>'),c=n.children("option, optgroup"),u=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",h=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",r="optgroup-option"===n?"optgroup-option ":"",s=o?'<input type="checkbox"'+a+"/><label></label>":"",c=i.data("icon"),u=i.attr("class");if(c){var d="";return u&&(d=' class="'+u+'"'),l.append(t('<li class="'+a+r+'"><img alt="" src="'+c+'"'+d+"><span>"+s+i.html()+"</span></li>")),!0}l.append(t('<li class="'+a+r+'"><span>'+s+i.html()+"</span></li>"))};c.length&&c.each(function(){if(t(this).is("option"))o?h(0,t(this),"multiple"):h(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){h(0,t(this),"optgroup-option")})}}),l.find("li:not(.optgroup)").each(function(a){t(this).click(function(r){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;o?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(u,a,n),m.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),m.val(t(this).text())),g(l,t(this)),n.find("option").eq(a).prop("selected",s),n.trigger("change"),void 0!==e&&e()}r.stopPropagation()})}),n.wrap(s);var f=t('<span class="caret">&#9660;</span>'),v=p.replace(/"/g,"&quot;"),m=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+r+'" value="'+v+'"/>');n.before(m),m.before(f),m.after(l),n.is(":disabled")||m.dropdown({hover:!1}),n.attr("tabindex")&&t(m[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),m.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&(t("input.select-dropdown").trigger("close"),t(window).off("click.select")),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val();o&&e.indexOf(",")>=0&&(e=e.split(",")[0]);var i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];g(l,i,!0),t(window).off("click.select").on("click.select",function(){o&&(d||m.trigger("close")),t(window).off("click.select")})}},click:function(t){t.stopPropagation()}}),m.on("blur",function(){o||(t(this).trigger("close"),t(window).off("click.select")),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),o&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(u,e,n),l.find("li").eq(e).find(":checkbox").prop("checked",!0)});var g=function(e,i,n){if(i){e.find("li.selected").removeClass("selected");var a=t(i);a.addClass("selected"),o&&!n||l.scrollTo(a)}},y=[];m.on("keydown",function(e){if(9!=e.which)if(40!=e.which||l.is(":visible")){if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){y.push(i);var a=y.join(""),r=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(a)})[0];r&&g(l,r)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),o||m.trigger("close"))}40==e.which&&(r=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],g(l,r)),27==e.which&&m.trigger("close"),38==e.which&&(r=l.find("li.selected").prev("li:not(.disabled)")[0])&&g(l,r),setTimeout(function(){y=[]},1e3)}}else m.trigger("open");else m.trigger("close")})}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=c.length?t=0:t<0&&(t=c.length-1),(u=l.find(".active").index())!=t&&(o=c.eq(u),$caption=o.find(".caption"),o.removeClass("active"),o.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){c.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&a.eq(u).removeClass("active"),c.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).addClass("active"),e.indicators&&a.eq(t).addClass("active"))}var o,a,r,s=t(this),l=s.find("ul.slides").first(),c=l.find("> li"),u=l.find(".active").index();-1!=u&&(o=c.eq(u)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),c.find(".caption").each(function(){i(t(this),0)}),c.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src")!==e&&(t(this).css("background-image",'url("'+t(this).attr("src")+'")'),t(this).attr("src",e))}),e.indicators&&(a=t('<ul class="indicators"></ul>'),c.each(function(i){var o=t('<li class="indicator-item"></li>');o.click(function(){n(l.parent().find(t(this)).index()),clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),a.append(o)}),s.append(a),a=s.find("ul.indicators").find("li.indicator-item")),o?o.show():(c.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u=0,o=c.eq(u),e.indicators&&a.eq(u).addClass("active")),o.find("img").each(function(){o.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),r=setInterval(function(){n((u=l.find(".active").index())+1)},e.transition+e.interval);var d=!1,p=!1,h=!1;s.hammer({prevent_default:!1}).on("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(r);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX,o=t.gesture.velocityY;$curr_slide=l.find(".active"),Math.abs(n)>Math.abs(o)&&$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||n<-.65)?h=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(0===(a=$curr_slide.next()).length&&(a=c.first()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),h&&(0===(a=$curr_slide.prev()).length&&(a=c.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),!h&&!p||c.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):h&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),p=!1,h=!1,clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(r)}),s.on("sliderStart",function(){clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),s.on("sliderNext",function(){n((u=l.find(".active").index())+1)}),s.on("sliderPrev",function(){n((u=l.find(".active").index())-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){if(t(this).find("> .card-reveal").length){var i=t(e.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow")),t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(i.css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))}})})}(jQuery),function(t){var e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};t(document).ready(function(){t(document).on("click",".chip .close",function(e){t(this).closest(".chips").attr("data-initialized")||t(this).closest(".chip").remove()})}),t.fn.material_chip=function(i){var n=this;if(this.$el=t(this),this.$document=t(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===i)return this.$el.data("chips");var o=t.extend({},e,i);n.hasAutocomplete=!t.isEmptyObject(o.autocompleteOptions.data),this.init=function(){var e=0;n.$el.each(function(){var i=t(this),a=Materialize.guid();n.chipId=a,o.data&&o.data instanceof Array||(o.data=[]),i.data("chips",o.data),i.attr("data-index",e),i.attr("data-initialized",!0),i.hasClass(n.SELS.CHIPS)||i.addClass("chips"),n.chips(i,a),e++})},this.handleEvents=function(){var e=n.SELS;n.$document.off("click.chips-focus",e.CHIPS).on("click.chips-focus",e.CHIPS,function(i){t(i.target).find(e.INPUT).focus()}),n.$document.off("click.chips-select",e.CHIP).on("click.chips-select",e.CHIP,function(i){var o=t(i.target);if(o.length){var a=o.hasClass("selected"),r=o.closest(e.CHIPS);t(e.CHIP).removeClass("selected"),a||n.selectChip(o.index(),r)}}),n.$document.off("keydown.chips").on("keydown.chips",function(i){if(!t(i.target).is("input, textarea")){var o,a=n.$document.find(e.CHIP+e.SELECTED_CHIP),r=a.closest(e.CHIPS),s=a.siblings(e.CHIP).length;if(a.length)if(8===i.which||46===i.which){i.preventDefault(),o=a.index(),n.deleteChip(o,r);var l=null;o+1<s?l=o:o!==s&&o+1!==s||(l=s-1),l<0&&(l=null),null!==l&&n.selectChip(l,r),s||r.find("input").focus()}else if(37===i.which){if((o=a.index()-1)<0)return;t(e.CHIP).removeClass("selected"),n.selectChip(o,r)}else if(39===i.which){if(o=a.index()+1,t(e.CHIP).removeClass("selected"),o>s)return void r.find("input").focus();n.selectChip(o,r)}}}),n.$document.off("focusin.chips",e.CHIPS+" "+e.INPUT).on("focusin.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.addClass("focus"),n.siblings("label, .prefix").addClass("active"),t(e.CHIP).removeClass("selected")}),n.$document.off("focusout.chips",e.CHIPS+" "+e.INPUT).on("focusout.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.removeClass("focus"),void 0!==n.data("chips")&&n.data("chips").length||n.siblings("label").removeClass("active"),n.siblings(".prefix").removeClass("active")}),n.$document.off("keydown.chips-add",e.CHIPS+" "+e.INPUT).on("keydown.chips-add",e.CHIPS+" "+e.INPUT,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=a.children(e.CHIP).length;if(13===i.which){if(n.hasAutocomplete&&a.find(".autocomplete-content.dropdown-content").length&&a.find(".autocomplete-content.dropdown-content").children().length)return;return i.preventDefault(),n.addChip({tag:o.val()},a),void o.val("")}if((8===i.keyCode||37===i.keyCode)&&""===o.val()&&r)return i.preventDefault(),n.selectChip(r-1,a),void o.blur()}),n.$document.off("click.chips-delete",e.CHIPS+" "+e.DELETE).on("click.chips-delete",e.CHIPS+" "+e.DELETE,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=o.closest(e.CHIP);i.stopPropagation(),n.deleteChip(r.index(),a),a.find("input").focus()})},this.chips=function(e,i){e.empty(),e.data("chips").forEach(function(t){e.append(n.renderChip(t))}),e.append(t('<input id="'+i+'" class="input" placeholder="">')),n.setPlaceholder(e);var a=e.next("label");a.length&&(a.attr("for",i),void 0!==e.data("chips")&&e.data("chips").length&&a.addClass("active"));var r=t("#"+i);n.hasAutocomplete&&(o.autocompleteOptions.onAutocomplete=function(t){n.addChip({tag:t},e),r.val(""),r.focus()},r.autocomplete(o.autocompleteOptions))},this.renderChip=function(e){if(e.tag){var i=t('<div class="chip"></div>');return i.text(e.tag),e.image&&i.prepend(t("<img />").attr("src",e.image)),i.append(t('<i class="material-icons close">close</i>')),i}},this.setPlaceholder=function(t){void 0!==t.data("chips")&&!t.data("chips").length&&o.placeholder?t.find("input").prop("placeholder",o.placeholder):(void 0===t.data("chips")||t.data("chips").length)&&o.secondaryPlaceholder&&t.find("input").prop("placeholder",o.secondaryPlaceholder)},this.isValid=function(t,e){for(var i=t.data("chips"),n=!1,o=0;o<i.length;o++)if(i[o].tag===e.tag)return void(n=!0);return""!==e.tag&&!n},this.addChip=function(t,e){if(n.isValid(e,t)){for(var i=n.renderChip(t),o=[],a=e.data("chips"),r=0;r<a.length;r++)o.push(a[r]);o.push(t),e.data("chips",o),i.insertBefore(e.find("input")),e.trigger("chip.add",t),n.setPlaceholder(e)}},this.deleteChip=function(t,e){var i=e.data("chips")[t];e.find(".chip").eq(t).remove();for(var o=[],a=e.data("chips"),r=0;r<a.length;r++)r!==t&&o.push(a[r]);e.data("chips",o),e.trigger("chip.delete",i),n.setPlaceholder(e)},this.selectChip=function(t,e){var i=e.find(".chip").eq(t);i&&!1===i.hasClass("selected")&&(i.addClass("selected"),e.trigger("chip.select",e.data("chips")[t]))},this.getChipsElement=function(t,e){return e.eq(t)},this.init(),this.handleEvents()}}(jQuery),function(t){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return"remove"===e?(this.each(function(){(id=t(this).data("pushpin-id"))&&(t(window).off("scroll."+id),t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,o){n.each(function(){e.top<=o&&e.bottom>=o&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),o<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),o>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-r))})}var o=Materialize.guid(),a=t(this),r=t(this).offset().top;t(this).data("pushpin-id",o),n(a,t(window).scrollTop()),t(window).on("scroll."+o,function(){var i=t(window).scrollTop()+e.offset;n(a,i)})}))}}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(e){var n=t(this);i(n)}),t(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(n){var o=t(this).parent();o.hasClass("active")?i(o):e(o)}),t(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(e){var i=t(this).parent();n(i)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))},openToolbar:function(){n(t(this))},closeToolbar:function(){o(t(this))}});var e=function(e){var i=e;if(!1===i.hasClass("active")){var n,o;!0===i.hasClass("horizontal")?o=40:n=40,i.addClass("active"),i.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:n+"px",translateX:o+"px"},{duration:0});var a=0;i.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:a}),a+=40})}},i=function(t){var e,i,n=t;!0===n.hasClass("horizontal")?i=40:e=40,n.removeClass("active");n.find("ul .btn-floating").velocity("stop",!0),n.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})},n=function(e){if("true"!==e.attr("data-open")){var i,n,a,r=window.innerWidth,s=window.innerHeight,l=e[0].getBoundingClientRect(),c=e.find("> a").first(),u=e.find("> ul").first(),d=t('<div class="fab-backdrop"></div>'),p=c.css("background-color");c.append(d),i=l.left-r/2+l.width/2,n=s-l.bottom,a=r/d.width(),e.attr("data-origin-bottom",l.bottom),e.attr("data-origin-left",l.left),e.attr("data-origin-width",l.width),e.addClass("active"),e.attr("data-open",!0),e.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+i+"px)",transition:"none"}),c.css({transform:"translateY("+-n+"px)",transition:"none"}),d.css({"background-color":p}),setTimeout(function(){e.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),c.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){e.css({overflow:"hidden","background-color":p}),d.css({transform:"scale("+a+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),u.find("> li > a").css({opacity:1}),t(window).on("scroll.fabToolbarClose",function(){o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose")}),t(document).on("click.fabToolbarClose",function(i){t(i.target).closest(u).length||(o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose"))})},100)},0)}},o=function(t){if("true"===t.attr("data-open")){var e,i,n=window.innerWidth,o=window.innerHeight,a=t.attr("data-origin-width"),r=t.attr("data-origin-bottom"),s=t.attr("data-origin-left"),l=t.find("> .btn-floating").first(),c=t.find("> ul").first(),u=t.find(".fab-backdrop"),d=l.css("background-color");e=s-n/2+a/2,i=o-r,n/u.width(),t.removeClass("active"),t.attr("data-open",!1),t.css({"background-color":"transparent",transition:"none"}),l.css({transition:"none"}),u.css({transform:"scale(0)","background-color":d}),c.find("> li > a").css({opacity:""}),setTimeout(function(){u.remove(),t.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-e+"px,0,0)"}),l.css({overflow:"",transform:"translate3d(0,"+i+"px,0)"}),setTimeout(function(){t.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),l.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,o=150-(100-e)/1.75;o<100&&(o=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+o+"%)",filter:"grayscale("+n+")brightness("+o+"%)"})}})},Materialize.showStaggeredList=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}var n=0;i.find("li").velocity({translateX:"-100px"},{duration:0}),i.find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:n,easing:[60,10]}),n+=120})},t(document).ready(function(){var e=!1,i=!1;t(".dismissable").each(function(){t(this).hammer({prevent_default:!1}).on("pan",function(n){if("touch"===n.gesture.pointerType){var o=t(this),a=n.gesture.direction,r=n.gesture.deltaX,s=n.gesture.velocityX;o.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===a&&(r>o.innerWidth()/2||s<-.75)&&(e=!0),2===a&&(r<-1*o.innerWidth()/2||s>.75)&&(i=!0)}}).on("panend",function(n){if(Math.abs(n.gesture.deltaX)<t(this).innerWidth()/2&&(i=!1,e=!1),"touch"===n.gesture.pointerType){var o=t(this);if(e||i){var a;a=e?o.innerWidth():-1*o.innerWidth(),o.velocity({translateX:a},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){o.css("border","none"),o.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){o.remove()}})}})}else o.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,i=!1}})})})}(jQuery),function(t){var e=!1;Materialize.scrollFire=function(t){var i=function(){for(var e=window.pageYOffset+window.innerHeight,i=0;i<t.length;i++){var n=t[i],o=n.selector,a=n.offset,r=n.callback,s=document.querySelector(o);null!==s&&e>s.getBoundingClientRect().top+window.pageYOffset+a&&!0!==n.done&&("function"==typeof r?r.call(this,s):"string"==typeof r&&new Function(r)(s),n.done=!0)}},n=Materialize.throttle(function(){i()},t.throttle||100);e||(window.addEventListener("scroll",n),window.addEventListener("resize",n),e=!0),setTimeout(n,0)}}(),function(t){Materialize.Picker=t(jQuery)}(function(t){function e(a,s,u,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),k.box),k.wrap),k.frame),k.holder)}function h(){x.data(s,T).addClass(k.input).attr("tabindex",-1).val(x.data("value")?T.get("select",w.format):a.value),w.editable||x.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root.eq(0).focus()}).on("keydown."+b.id,m),o(a,{haspopup:!0,expanded:!1,readonly:!1,owns:a.id+"_root"})}function f(){T.$root.on({keydown:m,focusin:function(t){T.$root.removeClass(k.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root.eq(0).focus()))}}).on({focus:function(){x.addClass(k.target)},blur:function(){x.removeClass(k.target)}}).on("focus.toOpen",g).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(k.navDisabled)||e.hasClass(k.disabled),o=r();o=o&&(o.type||o.href),(n||o&&!t.contains(T.$root[0],o))&&T.$root.eq(0).focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?(T.set("select",i.pick),w.closeOnSelect&&T.close(!0)):i.clear?(T.clear(),w.closeOnSelect&&T.close(!0)):i.close&&T.close(!0)}),o(T.$root[0],"hidden",!0)}function v(){var e;!0===w.hiddenName?(e=a.name,a.name=""):e=(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"])[0]+a.name+e[1],T._hidden=t('<input type=hidden name="'+e+'"'+(x.data("value")||a.value?' value="'+T.get("select",w.formatSubmit)+'"':"")+">")[0],x.on("change."+b.id,function(){T._hidden.value=a.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):x.before(T._hidden)}function m(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return T.close(),!1;(32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open())}function g(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(k.focused),T.open()}if(!a)return e;var y=!1,b={id:a.id||"P"+Math.abs(~~(Math.random()*new Date))},w=u?t.extend(!0,{},u.defaults,d):d||{},k=t.extend({},e.klasses(),w.klass),x=t(a),C=function(){return this.start()},T=C.prototype={constructor:C,$node:x,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=a.type,a.autofocus=a==r(),a.readOnly=!w.editable,a.id=a.id||b.id,"text"!=a.type&&(a.type="text"),T.component=new u(T,w),T.$root=t(e._.node("div",p(),k.picker,'id="'+a.id+'_root" tabindex="0"')),f(),w.formatSubmit&&v(),h(),w.container?t(w.container).append(T.$root):x.before(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),a.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+k.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),x.removeClass(k.input).removeData(s),setTimeout(function(){x.off("."+b.id)},0),a.type=b.type,a.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(x.addClass(k.active),o(a,"expanded",!0),setTimeout(function(){T.$root.addClass(k.opened),o(T.$root[0],"hidden",!1)},0),!1!==i&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root.eq(0).focus(),l.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=a&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,o=T.component.key[n],a=i.target;27==n?T.close(!0):a!=T.$root[0]||!o&&13!=n?t.contains(T.$root[0],a)&&13==n&&(i.preventDefault(),a.click()):(i.preventDefault(),o?e._.trigger(T.component.key.go,T,[e._.trigger(o)]):T.$root.find("."+k.highlighted).hasClass(k.disabled)||(T.set("select",T.component.item.highlight),w.closeOnSelect&&T.close(!0)))})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){T.$root.on("focus.toOpen",g)},0)),x.removeClass(k.active),o(a,"expanded",!1),setTimeout(function(){T.$root.removeClass(k.opened+" "+k.focused),o(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),l.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){r||(s[e]=i);for(o in s)a=s[o],o in T.component.item&&(void 0===a&&(a=null),T.component.set(o,a,n)),"select"!=o&&"clear"!=o||x.val("clear"==o?"":T.get(o,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return a.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(e){r||(s[e]=i);for(o in s)a=s[o],n&&(o="_"+o),b.methods[o]=b.methods[o]||[],b.methods[o].push(a)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new C}function i(t){var e;return t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position),"fixed"==e}function n(){if(c.height()<=s.height())return 0;var e=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),i-n}function o(e,i,n){if(t.isPlainObject(i))for(var o in i)a(e,o,i[o]);else a(e,i,n)}function a(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function r(){try{return document.activeElement}catch(t){}}var s=t(window),l=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",o=e._.trigger(t.min,t);o<=e._.trigger(t.max,t,[o]);o+=t.i)i=e._.trigger(t.item,t,[o]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,o){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",o=o?" "+o:"","<"+e+n+o+">"+i+"</"+e+">"):""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var o=("role"==n?"":"aria-")+n;i+=null==e[n]?"":o+'="'+e[n]+'"'}return i}},e.extend=function(i,n){t.fn[i]=function(o,a){var r=this.data(i);return"picker"==o?r:r&&"string"==typeof o?e._.trigger(r[o],r,[a]):this.each(function(){t(this).data(i)||new e(this,i,n,o)})},t.fn[i].defaults=n.defaults},e}),function(t){t(Materialize.Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],o=n.value,a=t.$node.data("value"),r=a||o,s=a?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return!0===t[0]?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),r?i.set("select",r,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=t._;i.prototype.set=function(t,e,i){var n=this,o=n.item;return null===e?("clear"==t&&(t="select"),o[t]=e,n):(o["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(o){return e=n[o](t,e,i)}).pop(),"select"==t?n.set("highlight",o.select,i):"highlight"==t?n.set("view",o.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&n.disabled(o.select)&&n.set("select",o.select,i),o.highlight&&n.disabled(o.highlight)&&n.set("highlight",o.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,o){var a,r=this;return i=void 0===i?t:i,i==-1/0||i==1/0?a=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:r.create().obj):i=n.isInteger(i)||n.isDate(i)?r.normalize(new Date(i),o):r.now(t,i,o),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},i.prototype.createRange=function(t,i){var o=this,a=function(t){return!0===t||e.isArray(t)||n.isDate(t)?o.create(t):t};return n.isInteger(t)||(t=a(t)),n.isInteger(i)||(i=a(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var o,a,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,r=i.month,s=i.date):(a=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(a=u.year,r=u.month),a=(o=new Date(a,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=o.getMonth();new Date(a,r,s).getMonth()!==r;)s-=1;i=[a,r,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):n.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,o){var a,r,s,l,c=this,u=i,d=o&&o.interval?o.interval:1,p=-1===c.item.enable,h=c.item.min,f=c.item.max,v=p&&c.item.disable.filter(function(t){if(e.isArray(t)){var o=c.create(t).pick;o<i.pick?a=!0:o>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!o||!o.nav)&&(!p&&c.disabled(i)||p&&c.disabled(i)&&(v||a||r)||!p&&(i.pick<=h.pick||i.pick>=f.pick)))for(p&&!v&&(!r&&d>0||!a&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=h.pick?(s=!0,d=1,i=c.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,o=i.item.disable.filter(function(o){return n.isInteger(o)?t.day===(i.settings.firstDay?o:o-1)%7:e.isArray(o)||n.isDate(o)?t.pick===i.create(o).pick:e.isPlainObject(o)?i.withinRange(o,t):void 0});return o=o.length&&!o.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!o:o||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var o=this,a={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=o.settings.format),o.formats.toArray(i.format).map(function(t){var i=o.formats[t],r=i?n.trigger(i,o,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,r)),e=e.substr(r)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var o=this;return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?o.create(t).pick===o.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(o.isDateExact(t.from,i.from)&&o.isDateExact(t.to,i.to))},i.prototype.isDateOverlap=function(t,i){var o=this,a=o.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+a)===o.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+a)===o.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&o.overlapRanges(t,i)},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var o=this,a=o.item.disable.slice(0);return"flip"==i?o.flipEnable():!1===i?(o.flipEnable(1),a=[]):!0===i?(o.flipEnable(-1),a=[]):i.map(function(t){for(var i,r=0;r<a.length;r+=1)if(o.isDateExact(t,a[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},i.prototype.activate=function(t,i){var o=this,a=o.item.disable,r=a.length;return"flip"==i?o.flipEnable():!0===i?(o.flipEnable(1),a=[]):!1===i?(o.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=a[l],o.isDateExact(s,t)){i=a[l]=null,c=!0;break}if(o.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(o.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;l<r;l+=1)if(o.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,o=e.item,a=o.now,r=o.select,s=o.highlight,l=o.view,c=o.disable,u=o.min,d=o.max,p=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,'scope=col title="'+e[n]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),h=function(t){return n.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&l.year>=d.year&&l.month>=d.month||!t&&l.year<=u.year&&l.month<=u.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?i.labelMonthNext:i.labelMonthPrev)+'"')},f=function(o){var a=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==o&&(a=i.monthsShort),i.selectMonths&&void 0==o?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[a[t],0,"value="+t+(l.month==t?" selected":"")+(l.year==u.year&&t<u.month||l.year==d.year&&t>d.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==o?null!=r?a[r.month]:a[l.month]:n.node("div",a[l.month],i.klass.month)},v=function(o){var a=l.year,r=!0===i.selectYears?5:~~(i.selectYears/2);if(r){var s=u.year,c=d.year,p=a-r,h=a+r;if(s>p&&(h+=s-p,p=s),c<h){var f=p-s,v=h-c;p-=f>v?v:f,h=c}if(i.selectYears&&void 0==o)return n.node("select",n.group({min:p,max:h,i:1,node:"option",item:function(t){return[t,0,"value="+t+(a==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"==o?n.node("div",a):n.node("div",a,i.klass.year)};return createDayLabel=function(){return null!=r?r.date:a.date},createWeekdayLabel=function(){var t;return t=null!=r?r.day:a.day,i.weekdaysShort[t]},n.node("div",n.node("div",v("raw"),i.klass.year_display)+n.node("span",createWeekdayLabel()+", ","picker__weekday-display")+n.node("span",f("short_months")+" ",i.klass.month_display)+n.node("span",createDayLabel(),i.klass.day_display),i.klass.date_display)+n.node("div",n.node("div",n.node("div",(i.selectYears,f()+v()+h()+h(1)),i.klass.header)+n.node("table",p+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var o=i.firstDay&&0===e.create([l.year,l.month,1]).day?-7:0;return[n.group({min:7*t-l.day+o+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=e.create([l.year,l.month,t+(i.firstDay?1:0)]);var o=r&&r.pick==t.pick,p=s&&s.pick==t.pick,h=c&&e.disabled(t)||t.pick<u.pick||t.pick>d.pick,f=n.trigger(e.formats.toString,e,[i.format,t]);return[n.node("div",t.date,function(e){return e.push(l.month==t.month?i.klass.infocus:i.klass.outfocus),a.pick==t.pick&&e.push(i.klass.now),o&&e.push(i.klass.selected),p&&e.push(i.klass.highlighted),h&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:f,selected:!(!o||e.$node.val()!==f)||null,activedescendant:!!p||null,disabled:!!h||null})+" "+(h?"":'tabindex="0"')),"",n.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+e.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+n.node("div",n.node("button",i.today,"btn-flat picker__today waves-effect","type=button data-pick="+a.pick+(t&&!e.disabled(a)?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.clear,"btn-flat picker__clear waves-effect","type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.close,"btn-flat picker__close waves-effect","type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id})),i.klass.footer),"picker__container__wrapper")},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Ok",closeOnSelect:!1,format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(){function t(t){return document.createElementNS(l,t)}function e(t){return(t<10?"0":"")+t}function i(t){var e=++m+"";return t?t+e:e}function n(n,r){function l(t,e){var i=d.offset(),n=/^touch/.test(t.type),o=i.left+g,a=i.top+g,l=(n?t.originalEvent.touches[0]:t).pageX-o,c=(n?t.originalEvent.touches[0]:t).pageY-a,u=Math.sqrt(l*l+c*c),p=!1;if(!e||!(u<y-w||u>y+w)){t.preventDefault();var v=setTimeout(function(){_.popover.addClass("clockpicker-moving")},200);_.setHand(l,c,!e,!0),s.off(h).on(h,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-o,n=(e?t.originalEvent.touches[0]:t).pageY-a;(p||i!==l||n!==c)&&(p=!0,_.setHand(i,n,!1,!0))}),s.off(f).on(f,function(t){s.off(f),t.preventDefault();var i=/^touch/.test(t.type),n=(i?t.originalEvent.changedTouches[0]:t).pageX-o,u=(i?t.originalEvent.changedTouches[0]:t).pageY-a;(e||p)&&n===l&&u===c&&_.setHand(n,u),"hours"===_.currentView?_.toggleView("minutes",x/2):r.autoclose&&(_.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){_.done()},x/2)),d.prepend(q),clearTimeout(v),_.popover.removeClass("clockpicker-moving"),s.off(h)})}}var u=a(C),d=u.find(".clockpicker-plate"),v=u.find(".picker__holder"),m=u.find(".clockpicker-hours"),T=u.find(".clockpicker-minutes"),S=u.find(".clockpicker-am-pm-block"),P="INPUT"===n.prop("tagName"),A=P?n:n.find("input"),O=a("label[for="+A.attr("id")+"]"),_=this;this.id=i("cp"),this.element=n,this.holder=v,this.options=r,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=P,this.input=A,this.label=O,this.popover=u,this.plate=d,this.hoursView=m,this.minutesView=T,this.amPmBlock=S,this.spanHours=u.find(".clockpicker-span-hours"),this.spanMinutes=u.find(".clockpicker-span-minutes"),this.spanAmPm=u.find(".clockpicker-span-am-pm"),this.footer=u.find(".picker__footer"),this.amOrPm="PM",r.twelvehour&&(r.ampmclickable?(this.spanAmPm.empty(),a('<div id="click-am">AM</div>').on("click",function(){_.spanAmPm.children("#click-am").addClass("text-primary"),_.spanAmPm.children("#click-pm").removeClass("text-primary"),_.amOrPm="AM"}).appendTo(this.spanAmPm),a('<div id="click-pm">PM</div>').on("click",function(){_.spanAmPm.children("#click-pm").addClass("text-primary"),_.spanAmPm.children("#click-am").removeClass("text-primary"),_.amOrPm="PM"}).appendTo(this.spanAmPm)):(this.spanAmPm.empty(),a('<div id="click-am">AM</div>').appendTo(this.spanAmPm),a('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))),a('<button type="button" class="btn-flat picker__clear" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.cleartext+"</button>").click(a.proxy(this.clear,this)).appendTo(this.footer),a('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.canceltext+"</button>").click(a.proxy(this.hide,this)).appendTo(this.footer),a('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.donetext+"</button>").click(a.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(a.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(a.proxy(this.toggleView,this,"minutes")),A.on("focus.clockpicker click.clockpicker",a.proxy(this.show,this));var E,M,I,D,V=a('<div class="clockpicker-tick"></div>');if(r.twelvehour)for(E=1;E<13;E+=1)M=V.clone(),I=E/6*Math.PI,D=y,M.css({left:g+Math.sin(I)*D-w,top:g-Math.cos(I)*D-w}),M.html(0===E?"00":E),m.append(M),M.on(p,l);else for(E=0;E<24;E+=1)M=V.clone(),I=E/6*Math.PI,D=E>0&&E<13?b:y,M.css({left:g+Math.sin(I)*D-w,top:g-Math.cos(I)*D-w}),M.html(0===E?"00":E),m.append(M),M.on(p,l);for(E=0;E<60;E+=5)M=V.clone(),I=E/30*Math.PI,M.css({left:g+Math.sin(I)*y-w,top:g-Math.cos(I)*y-w}),M.html(e(E)),T.append(M),M.on(p,l);if(d.on(p,function(t){0===a(t.target).closest(".clockpicker-tick").length&&l(t,!0)}),c){var q=u.find(".clockpicker-canvas"),z=t("svg");z.setAttribute("class","clockpicker-svg"),z.setAttribute("width",k),z.setAttribute("height",k);var H=t("g");H.setAttribute("transform","translate("+g+","+g+")");var L=t("circle");L.setAttribute("class","clockpicker-canvas-bearing"),L.setAttribute("cx",0),L.setAttribute("cy",0),L.setAttribute("r",4);var j=t("line");j.setAttribute("x1",0),j.setAttribute("y1",0);var $=t("circle");$.setAttribute("class","clockpicker-canvas-bg"),$.setAttribute("r",w),H.appendChild(j),H.appendChild($),H.appendChild(L),z.appendChild(H),q.append(z),this.hand=j,this.bg=$,this.bearing=L,this.g=H,this.canvas=q}o(this.options.init)}function o(t){t&&"function"==typeof t&&t()}var a=window.jQuery,r=a(window),s=a(document),l="http://www.w3.org/2000/svg",c="SVGAngle"in window&&function(){var t,e=document.createElement("div");return e.innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==l,e.innerHTML="",t}(),u=function(){var t=document.createElement("div").style;return"transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t}(),d="ontouchstart"in window,p="mousedown"+(d?" touchstart":""),h="mousemove.clockpicker"+(d?" touchmove.clockpicker":""),f="mouseup.clockpicker"+(d?" touchend.clockpicker":""),v=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,m=0,g=135,y=105,b=80,w=20,k=2*g,x=u?350:1,C=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__container__wrapper">','<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>","</div>"].join("");n.DEFAULTS={default:"",fromnow:0,donetext:"Ok",cleartext:"Clear",canceltext:"Cancel",autoclose:!1,ampmclickable:!0,darktheme:!1,twelvehour:!0,vibrate:!0},n.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},n.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},n.prototype.show=function(t){if(!this.isShown){o(this.options.beforeShow),a(":input").each(function(){a(this).attr("tabindex",-1)});var i=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),a(document.body).css("overflow","hidden");var n=((this.input.prop("value")||this.options.default||"")+"").split(":");if(this.options.twelvehour&&void 0!==n[1]&&(n[1].indexOf("AM")>0?this.amOrPm="AM":this.amOrPm="PM",n[1]=n[1].replace("AM","").replace("PM","")),"now"===n[0]){var l=new Date(+new Date+this.options.fromnow);n=[l.getHours(),l.getMinutes()],this.options.twelvehour&&(this.amOrPm=n[0]>=12&&n[0]<24?"PM":"AM")}this.hours=+n[0]||0,this.minutes=+n[1]||0,this.spanHours.html(this.hours),this.spanMinutes.html(e(this.minutes)),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&("PM"===this.amOrPm?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.spanAmPm.children("#click-am").addClass("text-primary"),this.spanAmPm.children("#click-pm").removeClass("text-primary"))),r.on("resize.clockpicker"+this.id,function(){i.isShown&&i.locate()}),this.isAppended=!0),this.toggleView("hours"),this.locate(),this.isShown=!0,s.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(t){var e=a(t.target);0===e.closest(i.popover.find(".picker__wrap")).length&&0===e.closest(i.input).length&&i.hide()}),s.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&i.hide()}),o(this.options.afterShow)}},n.prototype.hide=function(){o(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),a(document.body).css("overflow","visible"),this.isShown=!1,a(":input").each(function(t){a(this).attr("tabindex",t+1)}),s.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),s.off("keyup.clockpicker."+this.id),this.popover.hide(),o(this.options.afterHide)},n.prototype.toggleView=function(t,e){var i=!1;"minutes"===t&&"visible"===a(this.hoursView).css("visibility")&&(o(this.options.beforeHourSelect),i=!0);var n="hours"===t,r=n?this.hoursView:this.minutesView,s=n?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",n),this.spanMinutes.toggleClass("text-primary",!n),s.addClass("clockpicker-dial-out"),r.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){s.css("visibility","hidden")},x),i&&o(this.options.afterHourSelect)},n.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,o=i*(Math.PI/(n?6:30)),a=n&&i>0&&i<13?b:y,r=Math.sin(o)*a,s=-Math.cos(o)*a,l=this;c&&t?(l.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){l.canvas.removeClass("clockpicker-canvas-out"),l.setHand(r,s)},t)):this.setHand(r,s)},n.prototype.setHand=function(t,i,n,o){var r,s=Math.atan2(t,-i),l="hours"===this.currentView,u=Math.PI/(l||n?6:30),d=Math.sqrt(t*t+i*i),p=this.options,h=l&&d<(y+b)/2,f=h?b:y;if(p.twelvehour&&(f=y),s<0&&(s=2*Math.PI+s),r=Math.round(s/u),s=r*u,p.twelvehour?l?0===r&&(r=12):(n&&(r*=5),60===r&&(r=0)):l?(12===r&&(r=0),r=h?0===r?12:r:0===r?0:r+12):(n&&(r*=5),60===r&&(r=0)),this[this.currentView]!==r&&v&&this.options.vibrate&&(this.vibrateTimer||(navigator[v](10),this.vibrateTimer=setTimeout(a.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=r,l?this.spanHours.html(r):this.spanMinutes.html(e(r)),c){var m=Math.sin(s)*(f-w),g=-Math.cos(s)*(f-w),k=Math.sin(s)*f,x=-Math.cos(s)*f;this.hand.setAttribute("x2",m),this.hand.setAttribute("y2",g),this.bg.setAttribute("cx",k),this.bg.setAttribute("cy",x)}else this[l?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=a(this);t.toggleClass("active",r===+t.html())})},n.prototype.done=function(){o(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),i=e(this.hours)+":"+e(this.minutes);this.options.twelvehour&&(i+=this.amOrPm),this.input.prop("value",i),i!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),o(this.options.afterDone)},n.prototype.clear=function(){this.hide(),this.label.removeClass("active");var t=this.input.prop("value");this.input.prop("value",""),""!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur")},n.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(r.off("resize.clockpicker"+this.id),this.popover.remove())},a.fn.pickatime=function(t){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=a(this),o=i.data("clockpicker");if(o)"function"==typeof o[t]&&o[t].apply(o,e);else{var r=a.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t);i.data("clockpicker",new n(i,r))}})}}(),function(t){function e(){var e=+t(this).attr("data-length"),i=+t(this).val().length,n=i<=e;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),o(n,t(this))}function i(e){var i=e.parent().find('span[class="character-counter"]');i.length||(i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),e.parent().append(i))}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function o(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var o=t(this);o.parent().find('span[class="character-counter"]').length||void 0!==o.attr("data-length")&&(o.on("input",e),o.on("focus",e),o.on("blur",n),i(o))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){var e={init:function(e){var i={duration:200,dist:-100,shift:0,padding:0,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){function o(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function a(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function r(t){return t>=C?t%C:t<0?r(C+t%C):t}function s(i){_=!0,j.hasClass("scrolling")||j.addClass("scrolling"),null!=H&&window.clearTimeout(H),H=window.setTimeout(function(){_=!1,j.removeClass("scrolling")},e.duration);var n,o,a,s,l,c,u,d=w;if(b="number"==typeof i?i:b,w=Math.floor((b+x/2)/x),a=b-w*x,s=a<0?1:-1,l=-s*a*2/x,o=C>>1,e.fullWidth?u="translateX(0)":(u="translateX("+(j[0].clientWidth-m)/2+"px) ",u+="translateY("+(j[0].clientHeight-g)/2+"px)"),N){var p=w%C,h=z.find(".indicator-item.active");h.index()!==p&&(h.removeClass("active"),z.find(".indicator-item").eq(p).addClass("active"))}for((!W||w>=0&&w<C)&&(c=v[r(w)],t(c).hasClass("active")||(j.find(".carousel-item").removeClass("active"),t(c).addClass("active")),c.style[E]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l*n+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),n=1;n<=o;++n)e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a<0?1-l:1):(zTranslation=e.dist*(2*n+l*s),tweenedOpacity=1-.2*(2*n+l*s)),(!W||w+n<C)&&((c=v[r(w+n)]).style[E]=u+" translateX("+(e.shift+(x*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block"),e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a>0?1-l:1):(zTranslation=e.dist*(2*n-l*s),tweenedOpacity=1-.2*(2*n-l*s)),(!W||w-n>=0)&&((c=v[r(w-n)]).style[E]=u+" translateX("+(-e.shift+(-x*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block");if((!W||w>=0&&w<C)&&((c=v[r(w)]).style[E]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),d!==w&&"function"==typeof e.onCycleTo){var f=j.find(".carousel-item").eq(r(w));e.onCycleTo.call(this,f,V)}"function"==typeof L&&(L.call(this,f,V),L=null)}function l(){var t,e,i;e=(t=Date.now())-I,I=t,i=b-M,M=b,O=.8*(1e3*i/(1+e))+.2*O}function c(){var t,i;P&&(t=Date.now()-I,(i=P*Math.exp(-t/e.duration))>2||i<-2?(s(A-i),requestAnimationFrame(c)):s(A))}function u(i){if(V)return i.preventDefault(),i.stopPropagation(),!1;if(!e.fullWidth){var n=t(i.target).closest(".carousel-item").index();0!==r(w)-n&&(i.preventDefault(),i.stopPropagation()),d(n)}}function d(t){var e=w%C-t;W||(e<0?Math.abs(e+C)<Math.abs(e)&&(e+=C):e>0&&Math.abs(e-C)<e&&(e-=C)),e<0?j.trigger("carouselNext",[Math.abs(e)]):e>0&&j.trigger("carouselPrev",[e])}function p(e){"mousedown"===e.type&&t(e.target).is("img")&&e.preventDefault(),k=!0,V=!1,q=!1,T=o(e),S=a(e),O=P=0,M=b,I=Date.now(),clearInterval(D),D=setInterval(l,100)}function h(t){var e,i;if(k)if(e=o(t),y=a(t),i=T-e,Math.abs(S-y)<30&&!q)(i>2||i<-2)&&(V=!0,T=e,s(b+i));else{if(V)return t.preventDefault(),t.stopPropagation(),!1;q=!0}if(V)return t.preventDefault(),t.stopPropagation(),!1}function f(t){if(k)return k=!1,clearInterval(D),A=b,(O>10||O<-10)&&(A=b+(P=.9*O)),A=Math.round(A/x)*x,W&&(A>=x*(C-1)?A=x*(C-1):A<0&&(A=0)),P=A-b,I=Date.now(),requestAnimationFrame(c),V&&(t.preventDefault(),t.stopPropagation()),!1}var v,m,g,b,w,k,x,C,T,S,P,A,O,_,E,M,I,D,V,q,z=t('<ul class="indicators"></ul>'),H=null,L=null,j=t(this),$=j.find(".carousel-item").length>1,N=(j.attr("data-indicators")||e.indicators)&&$,W=j.attr("data-no-wrap")||e.noWrap||!$,F=j.attr("data-namespace")||n+i;j.attr("data-namespace",F);var Q=function(e){var i=j.find(".carousel-item.active").length?j.find(".carousel-item.active").first():j.find(".carousel-item").first(),n=i.find("img").first();if(n.length)if(n[0].complete)if(n.height()>0)j.css("height",n.height());else{var o=n[0].naturalWidth,a=n[0].naturalHeight,r=j.width()/o*a;j.css("height",r)}else n.on("load",function(){j.css("height",t(this).height())});else if(!e){var s=i.height();j.css("height",s)}};if(e.fullWidth&&(e.dist=0,Q(),N&&j.find(".carousel-fixed-item").addClass("with-indicators")),j.hasClass("initialized"))return t(window).trigger("resize"),j.trigger("carouselNext",[1e-6]),!0;j.addClass("initialized"),k=!1,b=A=0,v=[],m=j.find(".carousel-item").first().innerWidth(),g=j.find(".carousel-item").first().innerHeight(),x=2*m+e.padding,j.find(".carousel-item").each(function(e){if(v.push(t(this)[0]),N){var i=t('<li class="indicator-item"></li>');0===e&&i.addClass("active"),i.click(function(e){e.stopPropagation(),d(t(this).index())}),z.append(i)}}),N&&j.append(z),C=v.length,E="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(E=e,!1)});var X=Materialize.throttle(function(){if(e.fullWidth){m=j.find(".carousel-item").first().innerWidth();j.find(".carousel-item.active").height();x=2*m+e.padding,A=b=2*w*m,Q(!0)}else s()},200);t(window).off("resize.carousel-"+F).on("resize.carousel-"+F,X),void 0!==window.ontouchstart&&(j.on("touchstart.carousel",p),j.on("touchmove.carousel",h),j.on("touchend.carousel",f)),j.on("mousedown.carousel",p),j.on("mousemove.carousel",h),j.on("mouseup.carousel",f),j.on("mouseleave.carousel",f),j.on("click.carousel",u),s(b),t(this).on("carouselNext",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=x*Math.round(b/x)+x*e,b!==A&&(P=A-b,I=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselPrev",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=x*Math.round(b/x)-x*e,b!==A&&(P=A-b,I=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselSet",function(t,e,i){void 0===e&&(e=0),"function"==typeof i&&(L=i),d(e)})})},next:function(e,i){t(this).trigger("carouselNext",[e,i])},prev:function(e,i){t(this).trigger("carouselPrev",[e,i])},set:function(e,i){t(this).trigger("carouselSet",[e,i])},destroy:function(){var e=t(this).attr("data-namespace");t(this).removeAttr("data-namespace"),t(this).removeClass("initialized"),t(this).find(".indicators").remove(),t(this).off("carouselNext carouselPrev carouselSet"),t(window).off("resize.carousel-"+e),void 0!==window.ontouchstart&&t(this).off("touchstart.carousel touchmove.carousel touchend.carousel"),t(this).off("mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel")}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery),function(t){var e={init:function(e){return this.each(function(){var i=t("#"+t(this).attr("data-activates")),n=(t("body"),t(this)),o=n.parent(".tap-target-wrapper"),a=o.find(".tap-target-wave"),r=o.find(".tap-target-origin"),s=n.find(".tap-target-content");o.length||(o=n.wrap(t('<div class="tap-target-wrapper"></div>')).parent()),s.length||(s=t('<div class="tap-target-content"></div>'),n.append(s)),a.length||(a=t('<div class="tap-target-wave"></div>'),r.length||((r=i.clone(!0,!0)).addClass("tap-target-origin"),r.removeAttr("id"),r.removeAttr("style"),a.append(r)),o.append(a));var l=function(){o.is(".open")&&(o.removeClass("open"),r.off("click.tapTarget"),t(document).off("click.tapTarget"),t(window).off("resize.tapTarget"))},c=function(){var e="fixed"===i.css("position");if(!e)for(var r=i.parents(),l=0;l<r.length&&!(e="fixed"==t(r[l]).css("position"));l++);var c=i.outerWidth(),u=i.outerHeight(),d=e?i.offset().top-t(document).scrollTop():i.offset().top,p=e?i.offset().left-t(document).scrollLeft():i.offset().left,h=t(window).width(),f=t(window).height(),v=h/2,m=f/2,g=p<=v,y=p>v,b=d<=m,w=d>m,k=p>=.25*h&&p<=.75*h,x=n.outerWidth(),C=n.outerHeight(),T=d+u/2-C/2,S=p+c/2-x/2,P=e?"fixed":"absolute",A=k?x:x/2+c,O=C/2,_=b?C/2:0,E=g&&!k?x/2-c:0,M=c,I=w?"bottom":"top",D=2*c,V=D,q=C/2-V/2,z=x/2-D/2,H={};H.top=b?T:"",H.right=y?h-S-x:"",H.bottom=w?f-T-C:"",H.left=g?S:"",H.position=P,o.css(H),s.css({width:A,height:O,top:_,right:0,bottom:0,left:E,padding:M,verticalAlign:I}),a.css({top:q,left:z,width:D,height:V})};"open"==e&&(c(),o.is(".open")||(o.addClass("open"),setTimeout(function(){r.off("click.tapTarget").on("click.tapTarget",function(t){l(),r.off("click.tapTarget")}),t(document).off("click.tapTarget").on("click.tapTarget",function(e){l(),t(document).off("click.tapTarget")});var e=Materialize.throttle(function(){c()},200);t(window).off("resize.tapTarget").on("resize.tapTarget",e)},0))),"close"==e&&l()})},open:function(){},close:function(){}};t.fn.tapTarget=function(i){if(e[i]||"object"==typeof i)return e.init.apply(this,arguments);t.error("Method "+i+" does not exist on jQuery.tap-target")}}(jQuery);
// 4.7.2 (2017-11-07)
!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("4",Array),h("5",Error),g("1",["4","5"],function(a,b){var c=function(){},d=function(a,b){return function(){return a(b.apply(null,arguments))}},e=function(a){return function(){return a}},f=function(a){return a},g=function(a,b){return a===b},h=function(b){for(var c=new a(arguments.length-1),d=1;d<arguments.length;d++)c[d-1]=arguments[d];return function(){for(var d=new a(arguments.length),e=0;e<d.length;e++)d[e]=arguments[e];var f=c.concat(d);return b.apply(null,f)}},i=function(a){return function(){return!a.apply(null,arguments)}},j=function(a){return function(){throw new b(a)}},k=function(a){return a()},l=function(a){a()},m=e(!1),n=e(!0);return{noop:c,compose:d,constant:e,identity:f,tripleEquals:g,curry:h,not:i,die:j,apply:k,call:l,never:m,always:n}}),h("2",window),h("39",Object),g("2m",["1","39"],function(a,b){var c=a.never,d=a.always,e=function(){return f},f=function(){var f=function(a){return a.isNone()},g=function(a){return a()},h=function(a){return a},i=function(){},j={fold:function(a,b){return a()},is:c,isSome:c,isNone:d,getOr:h,getOrThunk:g,getOrDie:function(a){throw new Error(a||"error: getOrDie called on none.")},or:h,orThunk:g,map:e,ap:e,each:i,bind:e,flatten:e,exists:c,forall:d,filter:e,equals:f,equals_:f,toArray:function(){return[]},toString:a.constant("none()")};return b.freeze&&b.freeze(j),j}(),g=function(a){var b=function(){return a},h=function(){return k},i=function(b){return g(b(a))},j=function(b){return b(a)},k={fold:function(b,c){return c(a)},is:function(b){return a===b},isSome:d,isNone:c,getOr:b,getOrThunk:b,getOrDie:b,or:h,orThunk:h,map:i,ap:function(b){return b.fold(e,function(b){return g(b(a))})},each:function(b){b(a)},bind:j,flatten:b,exists:j,forall:j,filter:function(b){return b(a)?k:f},equals:function(b){return b.is(a)},equals_:function(b,d){return b.fold(c,function(b){return d(a,b)})},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return k},h=function(a){return null===a||void 0===a?f:g(a)};return{some:g,none:e,from:h}}),h("3a",String),g("1i",["2m","4","5","3a"],function(a,b,c,d){var e=function(){var a=b.prototype.indexOf,c=function(b,c){return a.call(b,c)},d=function(a,b){return u(a,b)};return void 0===a?d:c}(),f=function(b,c){var d=e(b,c);return d===-1?a.none():a.some(d)},g=function(a,b){return e(a,b)>-1},h=function(a,b){return t(a,b).isSome()},i=function(a,b){for(var c=[],d=0;d<a;d++)c.push(b(d));return c},j=function(a,b){for(var c=[],d=0;d<a.length;d+=b){var e=a.slice(d,d+b);c.push(e)}return c},k=function(a,c){for(var d=a.length,e=new b(d),f=0;f<d;f++){var g=a[f];e[f]=c(g,f,a)}return e},l=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];b(e,c,a)}},m=function(a,b){for(var c=a.length-1;c>=0;c--){var d=a[c];b(d,c,a)}},n=function(a,b){for(var c=[],d=[],e=0,f=a.length;e<f;e++){var g=a[e],h=b(g,e,a)?c:d;h.push(g)}return{pass:c,fail:d}},o=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++){var f=a[d];b(f,d,a)&&c.push(f)}return c},p=function(a,b){if(0===a.length)return[];for(var c=b(a[0]),d=[],e=[],f=0,g=a.length;f<g;f++){var h=a[f],i=b(h);i!==c&&(d.push(e),e=[]),c=i,e.push(h)}return 0!==e.length&&d.push(e),d},q=function(a,b,c){return m(a,function(a){c=b(c,a)}),c},r=function(a,b,c){return l(a,function(a){c=b(c,a)}),c},s=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(f)}return a.none()},t=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(d)}return a.none()},u=function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return c;return-1},v=b.prototype.push,w=function(a){for(var d=[],e=0,f=a.length;e<f;++e){if(!b.prototype.isPrototypeOf(a[e]))throw new c("Arr.flatten item "+e+" was not an array, input: "+a);v.apply(d,a[e])}return d},x=function(a,b){var c=k(a,b);return w(c)},y=function(a,b){for(var c=0,d=a.length;c<d;++c){var e=a[c];if(b(e,c,a)!==!0)return!1}return!0},z=function(a,b){return a.length===b.length&&y(a,function(a,c){return a===b[c]})},A=b.prototype.slice,B=function(a){var b=A.call(a,0);return b.reverse(),b},C=function(a,b){return o(a,function(a){return!g(b,a)})},D=function(a,b){for(var c={},e=0,f=a.length;e<f;e++){var g=a[e];c[d(g)]=b(g,e)}return c},E=function(a){return[a]},F=function(a,b){var c=A.call(a,0);return c.sort(b),c},G=function(b){return 0===b.length?a.none():a.some(b[0])},H=function(b){return 0===b.length?a.none():a.some(b[b.length-1])};return{map:k,each:l,eachr:m,partition:n,filter:o,groupBy:p,indexOf:f,foldr:q,foldl:r,find:s,findIndex:t,flatten:w,bind:x,forall:y,exists:h,contains:g,equal:z,reverse:B,chunk:j,difference:C,mapToObject:D,pure:E,sort:F,range:i,head:G,last:H}}),h("1j",document),g("5x",[],function(){return"undefined"!=typeof window?window:Function("return this;")()}),g("4q",["5x"],function(a){var b=function(b,c){for(var d=void 0!==c?c:a,e=0;e<b.length&&void 0!==d&&null!==d;++e)d=d[b[e]];return d},c=function(a,c){var d=a.split(".");return b(d,c)},d=function(a,b){return void 0!==a[b]&&null!==a[b]||(a[b]={}),a[b]},e=function(b,c){for(var e=void 0!==c?c:a,f=0;f<b.length;++f)e=d(e,b[f]);return e},f=function(a,b){var c=a.split(".");return e(c,b)};return{path:b,resolve:c,forge:e,namespace:f}}),g("3b",["4q"],function(a){var b=function(b,c){return a.resolve(b,c)},c=function(a,c){var d=b(a,c);if(void 0===d)throw a+" not available on this browser";return d};return{getOrDie:c}}),g("1k",["3b"],function(a){var b=function(){return a.getOrDie("URL")},c=function(a){return b().createObjectURL(a)},d=function(a){b().revokeObjectURL(a)};return{createObjectURL:c,revokeObjectURL:d}}),h("1l",matchMedia),h("1m",navigator),g("b",["1k","1j","1l","1m","2"],function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=d,t=s.userAgent,u=function(a){return"matchMedia"in e&&c(a).matches};f=e.opera&&e.opera.buildNumber,n=/Android/.test(t),g=/WebKit/.test(t),h=!g&&!f&&/MSIE/gi.test(t)&&/Explorer/gi.test(s.appName),h=h&&/MSIE (\w+)\./.exec(t)[1],i=t.indexOf("Trident/")!=-1&&(t.indexOf("rv:")!=-1||s.appName.indexOf("Netscape")!=-1)&&11,j=t.indexOf("Edge/")!=-1&&!h&&!i&&12,h=h||i||j,k=!g&&!i&&/Gecko/.test(t),l=t.indexOf("Mac")!=-1,m=/(iPad|iPhone)/.test(t),o="FormData"in e&&"FileReader"in e&&"URL"in e&&!!a.createObjectURL,p=u("only screen and (max-device-width: 480px)")&&(n||m),q=u("only screen and (min-width: 800px)")&&(n||m),r=t.indexOf("Windows Phone")!=-1,j&&(g=!1);var v=!m||o||t.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:f,webkit:g,ie:h,gecko:k,mac:l,iOS:m,android:n,contentEditable:v,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=h,range:e.getSelection&&"Range"in e,documentMode:h&&!j?b.documentMode||7:10,fileApi:o,ceFalse:h===!1||h>8,canHaveCSP:h===!1||h>11,desktop:!p&&!q,windowsPhone:r}}),h("1n",clearInterval),h("1o",clearTimeout),h("1p",setInterval),h("1q",setTimeout),g("1d",[],function(){function a(a,b){return function(){a.apply(b,arguments)}}function b(b){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof b)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],h(b,a(d,this),a(e,this))}function c(a){var b=this;return null===this._state?void this._deferreds.push(a):void i(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(b){return void a.reject(b)}a.resolve(d)})}function d(b){try{if(b===this)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"==typeof b||"function"==typeof b)){var c=b.then;if("function"==typeof c)return void h(a(c,b),a(d,this),a(e,this))}this._state=!0,this._value=b,f.call(this)}catch(a){e.call(this,a)}}function e(a){this._state=!1,this._value=a,f.call(this)}function f(){for(var a=0,b=this._deferreds.length;a<b;a++)c.call(this,this._deferreds[a]);this._deferreds=null}function g(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function h(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(a){if(d)return;d=!0,c(a)}}if(window.Promise)return window.Promise;var i=b.immediateFn||"function"==typeof setImmediate&&setImmediate||function(a){setTimeout(a,1)},j=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};return b.prototype["catch"]=function(a){return this.then(null,a)},b.prototype.then=function(a,d){var e=this;return new b(function(b,f){c.call(e,new g(a,d,b,f))})},b.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&j(arguments[0])?arguments[0]:arguments);return new b(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(a){c(a)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},b.resolve=function(a){return a&&"object"==typeof a&&a.constructor===b?a:new b(function(b){b(a)})},b.reject=function(a){return new b(function(b,c){c(a)})},b.race=function(a){return new b(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})},b}),g("15",["1n","1o","1j","1p","1q","2","1d"],function(a,b,c,d,e,f,g){var h,i=function(a,b){var c,d=f.requestAnimationFrame,e=["ms","moz","webkit"],g=function(a){f.setTimeout(a,0)};for(c=0;c<e.length&&!d;c++)d=f[e[c]+"RequestAnimationFrame"];d||(d=g),d(a,b)},j=function(a,b){return"number"!=typeof b&&(b=0),e(a,b)},k=function(a,b){return"number"!=typeof b&&(b=1),d(a,b)},l=function(a){return b(a)},m=function(b){return a(b)},n=function(a,c){var d,e;return e=function(){var e=arguments;b(d),d=j(function(){a.apply(this,e)},c)},e.stop=function(){b(d)},e};return{requestAnimationFrame:function(a,b){return h?void h.then(a):void(h=new g(function(a){b||(b=c.body),i(a,b)}).then(a))},setTimeout:j,setInterval:k,setEditorTimeout:function(a,b,c){return j(function(){a.removed||b()},c)},setEditorInterval:function(b,c,d){var e;return e=k(function(){b.removed?a(e):c()},d)},debounce:n,throttle:n,clearInterval:m,clearTimeout:l}}),g("n",["1j","2","b","15"],function(a,b,c,d){"use strict";var e="mce-data-",f=/^(?:mouse|contextmenu)|click/,g={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1},h=function(a){return a.isDefaultPrevented===j||a.isDefaultPrevented===i},i=function(){return!1},j=function(){return!0},k=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},l=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d||!1):a.detachEvent&&a.detachEvent("on"+b,c)},m=function(a,b){var c,d=b;return c=a.path,c&&c.length>0&&(d=c[0]),a.deepPath&&(c=a.deepPath(),c&&c.length>0&&(d=c[0])),d},n=function(b,d){var e,k,l=d||{};for(e in b)g[e]||(l[e]=b[e]);if(l.target||(l.target=l.srcElement||a),c.experimentalShadowDom&&(l.target=m(b,l.target)),b&&f.test(b.type)&&b.pageX===k&&b.clientX!==k){var n=l.target.ownerDocument||a,o=n.documentElement,p=n.body;l.pageX=b.clientX+(o&&o.scrollLeft||p&&p.scrollLeft||0)-(o&&o.clientLeft||p&&p.clientLeft||0),l.pageY=b.clientY+(o&&o.scrollTop||p&&p.scrollTop||0)-(o&&o.clientTop||p&&p.clientTop||0)}return l.preventDefault=function(){l.isDefaultPrevented=j,b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)},l.stopPropagation=function(){l.isPropagationStopped=j,b&&(b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)},l.stopImmediatePropagation=function(){l.isImmediatePropagationStopped=j,l.stopPropagation()},h(l)===!1&&(l.isDefaultPrevented=i,l.isPropagationStopped=i,l.isImmediatePropagationStopped=i),"undefined"==typeof l.metaKey&&(l.metaKey=!1),l},o=function(a,b,e){var f=a.document,g={type:"ready"};if(e.domLoaded)return void b(g);var h=function(){return"complete"===f.readyState||"interactive"===f.readyState&&f.body},i=function(){e.domLoaded||(e.domLoaded=!0,b(g))},j=function(){h()&&(l(f,"readystatechange",j),i())},m=function(){try{f.documentElement.doScroll("left")}catch(a){return void d.setTimeout(m)}i()};!f.addEventListener||c.ie&&c.ie<11?(k(f,"readystatechange",j),f.documentElement.doScroll&&a.self===a.top&&m()):h()?i():k(a,"DOMContentLoaded",i),k(a,"load",i)},p=function(){var c,d,f,g,h,i=this,j={};d=e+(+new Date).toString(32),g="onmouseenter"in a.documentElement,f="onfocusin"in a.documentElement,h={mouseenter:"mouseover",mouseleave:"mouseout"},c=1,i.domLoaded=!1,i.events=j;var m=function(a,b){var c,d,e,f,g=j[b];if(c=g&&g[a.type])for(d=0,e=c.length;d<e;d++)if(f=c[d],f&&f.func.call(f.scope,a)===!1&&a.preventDefault(),a.isImmediatePropagationStopped())return};i.bind=function(a,e,l,p){var q,r,s,t,u,v,w,x=b,y=function(a){m(n(a||x.event),q)};if(a&&3!==a.nodeType&&8!==a.nodeType){for(a[d]?q=a[d]:(q=c++,a[d]=q,j[q]={}),p=p||a,e=e.split(" "),s=e.length;s--;)t=e[s],v=y,u=w=!1,"DOMContentLoaded"===t&&(t="ready"),i.domLoaded&&"ready"===t&&"complete"==a.readyState?l.call(p,n({type:t})):(g||(u=h[t],u&&(v=function(a){var b,c;if(b=a.currentTarget,c=a.relatedTarget,c&&b.contains)c=b.contains(c);else for(;c&&c!==b;)c=c.parentNode;c||(a=n(a||x.event),a.type="mouseout"===a.type?"mouseleave":"mouseenter",a.target=b,m(a,q))})),f||"focusin"!==t&&"focusout"!==t||(w=!0,u="focusin"===t?"focus":"blur",v=function(a){a=n(a||x.event),a.type="focus"===a.type?"focusin":"focusout",m(a,q)}),r=j[q][t],r?"ready"===t&&i.domLoaded?l({type:t}):r.push({func:l,scope:p}):(j[q][t]=r=[{func:l,scope:p}],r.fakeName=u,r.capture=w,r.nativeHandler=v,"ready"===t?o(a,v,i):k(a,u||t,v,w)));return a=r=0,l}},i.unbind=function(a,b,c){var e,f,g,h,k,m;if(!a||3===a.nodeType||8===a.nodeType)return i;if(e=a[d]){if(m=j[e],b){for(b=b.split(" "),g=b.length;g--;)if(k=b[g],f=m[k]){if(c)for(h=f.length;h--;)if(f[h].func===c){var n=f.nativeHandler,o=f.fakeName,p=f.capture;f=f.slice(0,h).concat(f.slice(h+1)),f.nativeHandler=n,f.fakeName=o,f.capture=p,m[k]=f}c&&0!==f.length||(delete m[k],l(a,f.fakeName||k,f.nativeHandler,f.capture))}}else{for(k in m)f=m[k],l(a,f.fakeName||k,f.nativeHandler,f.capture);m={}}for(k in m)return i;delete j[e];try{delete a[d]}catch(b){a[d]=null}}return i},i.fire=function(a,b,c){var e;if(!a||3===a.nodeType||8===a.nodeType)return i;c=n(null,c),c.type=b,c.target=a;do e=a[d],e&&m(c,e),a=a.parentNode||a.ownerDocument||a.defaultView||a.parentWindow;while(a&&!c.isPropagationStopped());return i},i.clean=function(a){var b,c,e=i.unbind;if(!a||3===a.nodeType||8===a.nodeType)return i;if(a[d]&&e(a),a.getElementsByTagName||(a=a.document),a&&a.getElementsByTagName)for(e(a),c=a.getElementsByTagName("*"),b=c.length;b--;)a=c[b],a[d]&&e(a);return i},i.destroy=function(){j={}},i.cancel=function(a){return a&&(a.preventDefault(),a.stopImmediatePropagation()),!1}};return p.Event=new p,p.Event.bind(b,"ready",function(){}),p}),g("r",[],function(){function a(a,b,c,d){var e,f,g,i,k,l,m,n,o,p;if((b?b.ownerDocument||b:L)!==D&&C(b),b=b||D,c=c||[],!a||"string"!=typeof a)return c;if(1!==(i=b.nodeType)&&9!==i)return[];if(F&&!d){if(e=oa.exec(a))if(g=e[1]){if(9===i){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&J(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return Y.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&s.getElementsByClassName)return Y.apply(c,b.getElementsByClassName(g)),c}if(s.qsa&&(!G||!G.test(a))){if(n=m=K,o=b,p=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){for(l=w(a),(m=b.getAttribute("id"))?n=m.replace(qa,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",k=l.length;k--;)l[k]=n+j(l[k]);o=pa.test(a)&&h(b.parentNode)||b,p=l.join(",")}if(p)try{return Y.apply(c,o.querySelectorAll(p)),c}catch(a){}finally{m||b.removeAttribute("id")}}}return y(a.replace(ea,"$1"),b,c,d)}function b(){function a(c,d){return b.push(c+" ")>t.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function c(a){return a[K]=!0,a}function d(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||T)-(~a.sourceIndex||T);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function e(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function f(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function g(a){return c(function(b){return b=+b,c(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function h(a){return a&&typeof a.getElementsByTagName!==S&&a}function i(){}function j(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function k(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=N++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[M,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[K]||(b[K]={}),(h=i[d])&&h[0]===M&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function l(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function m(b,c,d){for(var e=0,f=c.length;e<f;e++)a(b,c[e],d);return d}function n(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function o(a,b,d,e,f,g){return e&&!e[K]&&(e=o(e)),f&&!f[K]&&(f=o(f,g)),c(function(c,g,h,i){var j,k,l,o=[],p=[],q=g.length,r=c||m(b||"*",h.nodeType?[h]:h,[]),s=!a||!c&&b?r:n(r,o,a,h,i),t=d?f||(c?a:q||e)?[]:g:s;if(d&&d(s,t,h,i),e)for(j=n(t,p),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[p[k]]=!(s[p[k]]=l));if(c){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?$.call(c,l):o[k])>-1&&(c[j]=!(g[j]=l))}}else t=n(t===g?t.splice(q,t.length):t),f?f(null,g,t,i):Y.apply(g,t)})}function p(a){for(var b,c,d,e=a.length,f=t.relative[a[0].type],g=f||t.relative[" "],h=f?1:0,i=k(function(a){return a===b},g,!0),m=k(function(a){return $.call(b,a)>-1},g,!0),n=[function(a,c,d){return!f&&(d||c!==z)||((b=c).nodeType?i(a,c,d):m(a,c,d))}];h<e;h++)if(c=t.relative[a[h].type])n=[k(l(n),c)];else{if(c=t.filter[a[h].type].apply(null,a[h].matches),c[K]){for(d=++h;d<e&&!t.relative[a[d].type];d++);return o(h>1&&l(n),h>1&&j(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ea,"$1"),c,h<d&&p(a.slice(h,d)),d<e&&p(a=a.slice(d)),d<e&&j(a))}n.push(c)}return l(n)}function q(b,d){var e=d.length>0,f=b.length>0,g=function(c,g,h,i,j){var k,l,m,o=0,p="0",q=c&&[],r=[],s=z,u=c||f&&t.find.TAG("*",j),v=M+=null==s?1:Math.random()||.1,w=u.length;for(j&&(z=g!==D&&g);p!==w&&null!=(k=u[p]);p++){if(f&&k){for(l=0;m=b[l++];)if(m(k,g,h)){i.push(k);break}j&&(M=v)}e&&((k=!m&&k)&&o--,c&&q.push(k))}if(o+=p,e&&p!==o){for(l=0;m=d[l++];)m(q,r,g,h);if(c){if(o>0)for(;p--;)q[p]||r[p]||(r[p]=W.call(i));r=n(r)}Y.apply(i,r),j&&!c&&r.length>0&&o+d.length>1&&a.uniqueSort(i)}return j&&(M=v,z=s),q};return e?c(g):g}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K="sizzle"+-new Date,L=window.document,M=0,N=0,O=b(),P=b(),Q=b(),R=function(a,b){return a===b&&(B=!0),0},S="undefined",T=1<<31,U={}.hasOwnProperty,V=[],W=V.pop,X=V.push,Y=V.push,Z=V.slice,$=V.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",aa="[\\x20\\t\\r\\n\\f]",ba="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ca="\\["+aa+"*("+ba+")(?:"+aa+"*([*^$|!~]?=)"+aa+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ba+"))|)"+aa+"*\\]",da=":("+ba+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ca+")*)|.*)\\)|)",ea=new RegExp("^"+aa+"+|((?:^|[^\\\\])(?:\\\\.)*)"+aa+"+$","g"),fa=new RegExp("^"+aa+"*,"+aa+"*"),ga=new RegExp("^"+aa+"*([>+~]|"+aa+")"+aa+"*"),ha=new RegExp("="+aa+"*([^\\]'\"]*?)"+aa+"*\\]","g"),ia=new RegExp(da),ja=new RegExp("^"+ba+"$"),ka={ID:new RegExp("^#("+ba+")"),CLASS:new RegExp("^\\.("+ba+")"),TAG:new RegExp("^("+ba+"|[*])"),ATTR:new RegExp("^"+ca),PSEUDO:new RegExp("^"+da),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+aa+"*(even|odd|(([+-]|)(\\d*)n|)"+aa+"*(?:([+-]|)"+aa+"*(\\d+)|))"+aa+"*\\)|)","i"),bool:new RegExp("^(?:"+_+")$","i"),needsContext:new RegExp("^"+aa+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+aa+"*((?:-\\d)?\\d*)"+aa+"*\\)|)(?=[^-]|$)","i")},la=/^(?:input|select|textarea|button)$/i,ma=/^h\d$/i,na=/^[^{]+\{\s*\[native \w/,oa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,pa=/[+~]/,qa=/'|\\/g,ra=new RegExp("\\\\([\\da-f]{1,6}"+aa+"?|("+aa+")|.)","ig"),sa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{Y.apply(V=Z.call(L.childNodes),L.childNodes),V[L.childNodes.length].nodeType}catch(a){Y={apply:V.length?function(a,b){X.apply(a,Z.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}s=a.support={},v=a.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},C=a.setDocument=function(a){function b(a){try{return a.top}catch(a){}return null}var c,e=a?a.ownerDocument||a:L,f=e.defaultView;return e!==D&&9===e.nodeType&&e.documentElement?(D=e,E=e.documentElement,F=!v(e),f&&f!==b(f)&&(f.addEventListener?f.addEventListener("unload",function(){C()},!1):f.attachEvent&&f.attachEvent("onunload",function(){C()})),s.attributes=!0,s.getElementsByTagName=!0,s.getElementsByClassName=na.test(e.getElementsByClassName),s.getById=!0,t.find.ID=function(a,b){if(typeof b.getElementById!==S&&F){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},t.filter.ID=function(a){var b=a.replace(ra,sa);return function(a){return a.getAttribute("id")===b}},t.find.TAG=s.getElementsByTagName?function(a,b){if(typeof b.getElementsByTagName!==S)return b.getElementsByTagName(a)}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},t.find.CLASS=s.getElementsByClassName&&function(a,b){if(F)return b.getElementsByClassName(a)},H=[],G=[],s.disconnectedMatch=!0,G=G.length&&new RegExp(G.join("|")),H=H.length&&new RegExp(H.join("|")),c=na.test(E.compareDocumentPosition),J=c||na.test(E.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},R=c?function(a,b){if(a===b)return B=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!s.sortDetached&&b.compareDocumentPosition(a)===c?a===e||a.ownerDocument===L&&J(L,a)?-1:b===e||b.ownerDocument===L&&J(L,b)?1:A?$.call(A,a)-$.call(A,b):0:4&c?-1:1)}:function(a,b){if(a===b)return B=!0,0;var c,f=0,g=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!g||!h)return a===e?-1:b===e?1:g?-1:h?1:A?$.call(A,a)-$.call(A,b):0;if(g===h)return d(a,b);for(c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);for(;i[f]===j[f];)f++;return f?d(i[f],j[f]):i[f]===L?-1:j[f]===L?1:0},e):D},a.matches=function(b,c){return a(b,null,null,c)},a.matchesSelector=function(b,c){if((b.ownerDocument||b)!==D&&C(b),c=c.replace(ha,"='$1']"),s.matchesSelector&&F&&(!H||!H.test(c))&&(!G||!G.test(c)))try{var d=I.call(b,c);if(d||s.disconnectedMatch||b.document&&11!==b.document.nodeType)return d}catch(a){}return a(c,D,null,[b]).length>0},a.contains=function(a,b){return(a.ownerDocument||a)!==D&&C(a),J(a,b)},a.attr=function(a,b){(a.ownerDocument||a)!==D&&C(a);var c=t.attrHandle[b.toLowerCase()],d=c&&U.call(t.attrHandle,b.toLowerCase())?c(a,b,!F):void 0;return void 0!==d?d:s.attributes||!F?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},a.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},a.uniqueSort=function(a){var b,c=[],d=0,e=0;if(B=!s.detectDuplicates,A=!s.sortStable&&a.slice(0),a.sort(R),B){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return A=null,a},u=a.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=u(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=u(b);return c},t=a.selectors={cacheLength:50,createPseudo:c,match:ka,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ra,sa),a[3]=(a[3]||a[4]||a[5]||"").replace(ra,sa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(b){return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||a.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&a.error(b[0]),b},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ka.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ia.test(c)&&(b=w(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ra,sa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=O[a+" "];return b||(b=new RegExp("(^|"+aa+")"+a+"("+aa+"|$)"))&&O(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==S&&a.getAttribute("class")||"")})},ATTR:function(b,c,d){return function(e){var f=a.attr(e,b);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[K]||(q[K]={}),j=k[a]||[],n=j[0]===M&&j[1],m=j[0]===M&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[M,n,m];break}}else if(s&&(j=(b[K]||(b[K]={}))[a])&&j[0]===M)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[K]||(l[K]={}))[a]=[M,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(b,d){var e,f=t.pseudos[b]||t.setFilters[b.toLowerCase()]||a.error("unsupported pseudo: "+b);return f[K]?f(d):f.length>1?(e=[b,b,"",d],t.setFilters.hasOwnProperty(b.toLowerCase())?c(function(a,b){for(var c,e=f(a,d),g=e.length;g--;)c=$.call(a,e[g]),a[c]=!(b[c]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:c(function(a){var b=[],d=[],e=x(a.replace(ea,"$1"));return e[K]?c(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,c,f){return b[0]=a,e(b,null,f,d),!d.pop()}}),has:c(function(b){return function(c){return a(b,c).length>0}}),contains:c(function(a){return a=a.replace(ra,sa),function(b){return(b.textContent||b.innerText||u(b)).indexOf(a)>-1}}),lang:c(function(b){return ja.test(b||"")||a.error("unsupported lang: "+b),b=b.replace(ra,sa).toLowerCase(),function(a){var c;do if(c=F?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return c=c.toLowerCase(),c===b||0===c.indexOf(b+"-");while((a=a.parentNode)&&1===a.nodeType);return!1}}),target:function(a){var b=window.location&&window.location.hash;return b&&b.slice(1)===a.id},root:function(a){return a===E},focus:function(a){return a===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!t.pseudos.empty(a)},header:function(a){return ma.test(a.nodeName)},input:function(a){return la.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:g(function(){return[0]}),last:g(function(a,b){return[b-1]}),eq:g(function(a,b,c){return[c<0?c+b:c]}),even:g(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:g(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:g(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:g(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},t.pseudos.nth=t.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[r]=e(r);for(r in{submit:!0,reset:!0})t.pseudos[r]=f(r);return i.prototype=t.filters=t.pseudos,t.setFilters=new i,w=a.tokenize=function(b,c){var d,e,f,g,h,i,j,k=P[b+" "];if(k)return c?0:k.slice(0);for(h=b,i=[],j=t.preFilter;h;){d&&!(e=fa.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ga.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ea," ")}),h=h.slice(d.length));for(g in t.filter)!(e=ka[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?a.error(b):P(b,i).slice(0)},x=a.compile=function(a,b){var c,d=[],e=[],f=Q[a+" "];if(!f){for(b||(b=w(a)),c=b.length;c--;)f=p(b[c]),f[K]?d.push(f):e.push(f);f=Q(a,q(e,d)),f.selector=a}return f},y=a.select=function(a,b,c,d){var e,f,g,i,k,l="function"==typeof a&&a,m=!d&&w(a=l.selector||a);if(c=c||[],1===m.length){if(f=m[0]=m[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&s.getById&&9===b.nodeType&&F&&t.relative[f[1].type]){if(b=(t.find.ID(g.matches[0].replace(ra,sa),b)||[])[0],!b)return c;l&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ka.needsContext.test(a)?0:f.length;e--&&(g=f[e],!t.relative[i=g.type]);)if((k=t.find[i])&&(d=k(g.matches[0].replace(ra,sa),pa.test(f[0].type)&&h(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&j(f),!a)return Y.apply(c,d),c;break}}return(l||x(a,m))(d,b,!F,c,pa.test(a)&&h(b.parentNode)||b),c},s.sortStable=K.split("").sort(R).join("")===K,s.detectDuplicates=!!B,C(),s.sortDetached=!0,a}),g("1r",[],function(){var a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},b=function(b){var c,d,e=b;if(!a(b))for(e=[],c=0,d=b.length;c<d;c++)e[c]=b[c];return e},c=function(a,b,c){var d,e;if(!a)return 0;if(c=c||a,void 0!==a.length){for(d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a)===!1)return 0}else for(d in a)if(a.hasOwnProperty(d)&&b.call(c,a[d],d,a)===!1)return 0;return 1},d=function(a,b){var d=[];return c(a,function(c,e){d.push(b(c,e,a))}),d},e=function(a,b){var d=[];return c(a,function(c,e){b&&!b(c,e,a)||d.push(c)}),d},f=function(a,b){var c,d;if(a)for(c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},g=function(a,b,c,d){
var e=0;for(arguments.length<3&&(c=a[0]);e<a.length;e++)c=b.call(d,c,a[e],e);return c},h=function(a,b,c){var d,e;for(d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return d;return-1},i=function(a,b,c){var d=h(a,b,c);if(d!==-1)return a[d]},j=function(a){return a[a.length-1]};return{isArray:a,toArray:b,each:c,map:d,filter:e,indexOf:f,reduce:g,findIndex:h,find:i,last:j}}),g("1e",["2","b","1r"],function(a,b,c){var d=/^\s*|\s*$/g,e=function(a){return null===a||void 0===a?"":(""+a).replace(d,"")},f=function(a,b){return b?!("array"!=b||!c.isArray(a))||typeof a==b:void 0!==a},g=function(a,b,c){var d;for(a=a||[],b=b||",","string"==typeof a&&(a=a.split(b)),c=c||{},d=a.length;d--;)c[a[d]]={};return c},h=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},i=function(a,b,c){var d,e,f,g,h,i=this,j=0;if(a=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(a),f=a[3].match(/(^|\.)(\w+)$/i)[2],e=i.createNS(a[3].replace(/\.\w+$/,""),c),!e[f]){if("static"==a[2])return e[f]=b,void(this.onCreate&&this.onCreate(a[2],a[3],e[f]));b[f]||(b[f]=function(){},j=1),e[f]=b[f],i.extend(e[f].prototype,b),a[5]&&(d=i.resolve(a[5]).prototype,g=a[5].match(/\.(\w+)$/i)[1],h=e[f],j?e[f]=function(){return d[g].apply(this,arguments)}:e[f]=function(){return this.parent=d[g],h.apply(this,arguments)},e[f].prototype[f]=e[f],i.each(d,function(a,b){e[f].prototype[b]=d[b]}),i.each(b,function(a,b){d[b]?e[f].prototype[b]=function(){return this.parent=d[b],a.apply(this,arguments)}:b!=f&&(e[f].prototype[b]=a)})),i.each(b["static"],function(a,b){e[f][b]=a})}},j=function(a,b){var c,d,e,f,g=arguments;for(c=1,d=g.length;c<d;c++){b=g[c];for(e in b)b.hasOwnProperty(e)&&(f=b[e],void 0!==f&&(a[e]=f))}return a},k=function(a,b,d,e){e=e||this,a&&(d&&(a=a[d]),c.each(a,function(a,c){return b.call(e,a,c,d)!==!1&&void k(a,b,d,e)}))},l=function(b,c){var d,e;for(c=c||a,b=b.split("."),d=0;d<b.length;d++)e=b[d],c[e]||(c[e]={}),c=c[e];return c},m=function(b,c){var d,e;for(c=c||a,b=b.split("."),d=0,e=b.length;d<e&&(c=c[b[d]],c);d++);return c},n=function(a,b){return!a||f(a,"array")?a:c.map(a.split(b||","),e)},o=function(a){var c=b.cacheSuffix;return c&&(a+=(a.indexOf("?")===-1?"?":"&")+c),a};return{trim:e,isArray:c.isArray,is:f,toArray:c.toArray,makeMap:g,each:c.each,map:c.map,grep:c.filter,inArray:c.indexOf,hasOwn:h,extend:j,create:i,walk:k,createNS:l,resolve:m,explode:n,_addCacheSuffix:o}}),g("m",["1j","n","r","b","1e"],function(a,b,c,d,e){var f,g=a,h=Array.prototype.push,i=Array.prototype.slice,j=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,k=b.Event,l=e.makeMap("children,contents,next,prev"),m=function(a){return"undefined"!=typeof a},n=function(a){return"string"==typeof a},o=function(a){return a&&a==a.window},p=function(a,b){var c,d,e;for(b=b||g,e=b.createElement("div"),c=b.createDocumentFragment(),e.innerHTML=a;d=e.firstChild;)c.appendChild(d);return c},q=function(a,b,c,d){var e;if(n(b))b=p(b,F(a[0]));else if(b.length&&!b.nodeType){if(b=z.makeArray(b),d)for(e=b.length-1;e>=0;e--)q(a,b[e],c,d);else for(e=0;e<b.length;e++)q(a,b[e],c,d);return a}if(b.nodeType)for(e=a.length;e--;)c.call(a[e],b);return a},r=function(a,b){return a&&b&&(" "+a.className+" ").indexOf(" "+b+" ")!==-1},s=function(a,b,c){var d,e;return b=z(b)[0],a.each(function(){var a=this;c&&d==a.parentNode?e.appendChild(a):(d=a.parentNode,e=b.cloneNode(!1),a.parentNode.insertBefore(e,a),e.appendChild(a))}),a},t=e.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),u=e.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),v={"for":"htmlFor","class":"className",readonly:"readOnly"},w={"float":"cssFloat"},x={},y={},z=function(a,b){return new z.fn.init(a,b)},A=function(a,b){var c;if(b.indexOf)return b.indexOf(a);for(c=b.length;c--;)if(b[c]===a)return c;return-1},B=/^\s*|\s*$/g,C=function(a){return null===a||a===f?"":(""+a).replace(B,"")},D=function(a,b){var c,d,e,f,g;if(a)if(c=a.length,c===f){for(d in a)if(a.hasOwnProperty(d)&&(g=a[d],b.call(g,d,g)===!1))break}else for(e=0;e<c&&(g=a[e],b.call(g,e,g)!==!1);e++);return a},E=function(a,b){var c=[];return D(a,function(a,d){b(d,a)&&c.push(d)}),c},F=function(a){return a?9==a.nodeType?a:a.ownerDocument:g};z.fn=z.prototype={constructor:z,selector:"",context:null,length:0,init:function(b,c){var d,e,f=this;if(!b)return f;if(b.nodeType)return f.context=f[0]=b,f.length=1,f;if(c&&c.nodeType)f.context=c;else{if(c)return z(b).attr(c);f.context=c=a}if(n(b)){if(f.selector=b,d="<"===b.charAt(0)&&">"===b.charAt(b.length-1)&&b.length>=3?[null,b,null]:j.exec(b),!d)return z(c).find(b);if(d[1])for(e=p(b,F(c)).firstChild;e;)h.call(f,e),e=e.nextSibling;else{if(e=F(c).getElementById(d[2]),!e)return f;if(e.id!==d[2])return f.find(b);f.length=1,f[0]=e}}else this.add(b,!1);return f},toArray:function(){return e.toArray(this)},add:function(a,b){var c,d,e=this;if(n(a))return e.add(z(a));if(b!==!1)for(c=z.unique(e.toArray().concat(z.makeArray(a))),e.length=c.length,d=0;d<c.length;d++)e[d]=c[d];else h.apply(e,z.makeArray(a));return e},attr:function(a,b){var c,d=this;if("object"==typeof a)D(a,function(a,b){d.attr(a,b)});else{if(!m(b)){if(d[0]&&1===d[0].nodeType){if(c=x[a],c&&c.get)return c.get(d[0],a);if(u[a])return d.prop(a)?a:f;b=d[0].getAttribute(a,2),null===b&&(b=f)}return b}this.each(function(){var c;if(1===this.nodeType){if(c=x[a],c&&c.set)return void c.set(this,b);null===b?this.removeAttribute(a,2):this.setAttribute(a,b,2)}})}return d},removeAttr:function(a){return this.attr(a,null)},prop:function(a,b){var c=this;if(a=v[a]||a,"object"==typeof a)D(a,function(a,b){c.prop(a,b)});else{if(!m(b))return c[0]&&c[0].nodeType&&a in c[0]?c[0][a]:b;this.each(function(){1==this.nodeType&&(this[a]=b)})}return c},css:function(a,b){var c,d,e=this,g=function(a){return a.replace(/-(\D)/g,function(a,b){return b.toUpperCase()})},h=function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a})};if("object"==typeof a)D(a,function(a,b){e.css(a,b)});else if(m(b))a=g(a),"number"!=typeof b||t[a]||(b+="px"),e.each(function(){var c=this.style;if(d=y[a],d&&d.set)return void d.set(this,b);try{this.style[w[a]||a]=b}catch(a){}null!==b&&""!==b||(c.removeProperty?c.removeProperty(h(a)):c.removeAttribute(a))});else{if(c=e[0],d=y[a],d&&d.get)return d.get(c);if(c.ownerDocument.defaultView)try{return c.ownerDocument.defaultView.getComputedStyle(c,null).getPropertyValue(h(a))}catch(a){return f}else if(c.currentStyle)return c.currentStyle[g(a)]}return e},remove:function(){for(var a,b=this,c=this.length;c--;)a=b[c],k.clean(a),a.parentNode&&a.parentNode.removeChild(a);return this},empty:function(){for(var a,b=this,c=this.length;c--;)for(a=b[c];a.firstChild;)a.removeChild(a.firstChild);return this},html:function(a){var b,c=this;if(m(a)){b=c.length;try{for(;b--;)c[b].innerHTML=a}catch(d){z(c[b]).empty().append(a)}return c}return c[0]?c[0].innerHTML:""},text:function(a){var b,c=this;if(m(a)){for(b=c.length;b--;)"innerText"in c[b]?c[b].innerText=a:c[0].textContent=a;return c}return c[0]?c[0].innerText||c[0].textContent:""},append:function(){return q(this,arguments,function(a){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(a)})},prepend:function(){return q(this,arguments,function(a){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(a,this.firstChild)},!0)},before:function(){var a=this;return a[0]&&a[0].parentNode?q(a,arguments,function(a){this.parentNode.insertBefore(a,this)}):a},after:function(){var a=this;return a[0]&&a[0].parentNode?q(a,arguments,function(a){this.parentNode.insertBefore(a,this.nextSibling)},!0):a},appendTo:function(a){return z(a).append(this),this},prependTo:function(a){return z(a).prepend(this),this},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return s(this,a)},wrapAll:function(a){return s(this,a,!0)},wrapInner:function(a){return this.each(function(){z(this).contents().wrapAll(a)}),this},unwrap:function(){return this.parent().each(function(){z(this).replaceWith(this.childNodes)})},clone:function(){var a=[];return this.each(function(){a.push(this.cloneNode(!0))}),z(a)},addClass:function(a){return this.toggleClass(a,!0)},removeClass:function(a){return this.toggleClass(a,!1)},toggleClass:function(a,b){var c=this;return"string"!=typeof a?c:(a.indexOf(" ")!==-1?D(a.split(" "),function(){c.toggleClass(this,b)}):c.each(function(c,d){var e,f;f=r(d,a),f!==b&&(e=d.className,f?d.className=C((" "+e+" ").replace(" "+a+" "," ")):d.className+=e?" "+a:a)}),c)},hasClass:function(a){return r(this[0],a)},each:function(a){return D(this,a)},on:function(a,b){return this.each(function(){k.bind(this,a,b)})},off:function(a,b){return this.each(function(){k.unbind(this,a,b)})},trigger:function(a){return this.each(function(){"object"==typeof a?k.fire(this,a.type,a):k.fire(this,a)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new z(i.apply(this,arguments))},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(a){var b,c,d=[];for(b=0,c=this.length;b<c;b++)z.find(a,this[b],d);return z(d)},filter:function(a){return z("function"==typeof a?E(this.toArray(),function(b,c){return a(c,b)}):z.filter(a,this.toArray()))},closest:function(a){var b=[];return a instanceof z&&(a=a[0]),this.each(function(c,d){for(;d;){if("string"==typeof a&&z(d).is(a)){b.push(d);break}if(d==a){b.push(d);break}d=d.parentNode}}),z(b)},offset:function(a){var b,c,d,e,f=0,g=0;return a?this.css(a):(b=this[0],b&&(c=b.ownerDocument,d=c.documentElement,b.getBoundingClientRect&&(e=b.getBoundingClientRect(),f=e.left+(d.scrollLeft||c.body.scrollLeft)-d.clientLeft,g=e.top+(d.scrollTop||c.body.scrollTop)-d.clientTop)),{left:f,top:g})},push:h,sort:[].sort,splice:[].splice},e.extend(z,{extend:e.extend,makeArray:function(a){return o(a)||a.nodeType?[a]:e.toArray(a)},inArray:A,isArray:e.isArray,each:D,trim:C,grep:E,find:c,expr:c.selectors,unique:c.uniqueSort,text:c.getText,contains:c.contains,filter:function(a,b,c){var d=b.length;for(c&&(a=":not("+a+")");d--;)1!=b[d].nodeType&&b.splice(d,1);return b=1===b.length?z.find.matchesSelector(b[0],a)?[b[0]]:[]:z.find.matches(a,b)}});var G=function(a,b,c){var d=[],e=a[b];for("string"!=typeof c&&c instanceof z&&(c=c[0]);e&&9!==e.nodeType;){if(void 0!==c){if(e===c)break;if("string"==typeof c&&z(e).is(c))break}1===e.nodeType&&d.push(e),e=e[b]}return d},H=function(a,b,c,d){var e=[];for(d instanceof z&&(d=d[0]);a;a=a[b])if(!c||a.nodeType===c){if(void 0!==d){if(a===d)break;if("string"==typeof d&&z(a).is(d))break}e.push(a)}return e},I=function(a,b,c){for(a=a[b];a;a=a[b])if(a.nodeType==c)return a;return null};D({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return G(a,"parentNode")},next:function(a){return I(a,"nextSibling",1)},prev:function(a){return I(a,"previousSibling",1)},children:function(a){return H(a.firstChild,"nextSibling",1)},contents:function(a){return e.toArray(("iframe"===a.nodeName?a.contentDocument||a.contentWindow.document:a).childNodes)}},function(a,b){z.fn[a]=function(c){var d=this,e=[];return d.each(function(){var a=b.call(e,this,c,e);a&&(z.isArray(a)?e.push.apply(e,a):e.push(a))}),this.length>1&&(l[a]||(e=z.unique(e)),0===a.indexOf("parents")&&(e=e.reverse())),e=z(e),c?e.filter(c):e}}),D({parentsUntil:function(a,b){return G(a,"parentNode",b)},nextUntil:function(a,b){return H(a,"nextSibling",1,b).slice(1)},prevUntil:function(a,b){return H(a,"previousSibling",1,b).slice(1)}},function(a,b){z.fn[a]=function(c,d){var e=this,f=[];return e.each(function(){var a=b.call(f,this,c,f);a&&(z.isArray(a)?f.push.apply(f,a):f.push(a))}),this.length>1&&(f=z.unique(f),0!==a.indexOf("parents")&&"prevUntil"!==a||(f=f.reverse())),f=z(f),d?f.filter(d):f}}),z.fn.is=function(a){return!!a&&this.filter(a).length>0},z.fn.init.prototype=z.fn,z.overrideDefaults=function(a){var b,c=function(d,e){return b=b||a(),0===arguments.length&&(d=b.element),e||(e=b.context),new c.fn.init(d,e)};return z.extend(c,this),c};var J=function(a,b,c){D(c,function(c,d){a[c]=a[c]||{},a[c][b]=d})};return d.ie&&d.ie<8&&(J(x,"get",{maxlength:function(a){var b=a.maxLength;return 2147483647===b?f:b},size:function(a){var b=a.size;return 20===b?f:b},"class":function(a){return a.className},style:function(a){var b=a.style.cssText;return 0===b.length?f:b}}),J(x,"set",{"class":function(a,b){a.className=b},style:function(a,b){a.style.cssText=b}})),d.ie&&d.ie<9&&(w["float"]="styleFloat",J(y,"set",{opacity:function(a,b){var c=a.style;null===b||""===b?c.removeAttribute("filter"):(c.zoom=1,c.filter="alpha(opacity="+100*b+")")}})),z.attrHooks=x,z.cssHooks=y,z}),g("4r",[],function(){var a=function(a){var b,c=!1;return function(){return c||(c=!0,b=a.apply(null,arguments)),b}};return{cached:a}}),h("6v",Number),g("6h",["1i","6v","3a"],function(a,b,c){var d=function(a,b){for(var c=0;c<a.length;c++){var d=a[c];if(d.test(b))return d}},e=function(a,c){var e=d(a,c);if(!e)return{major:0,minor:0};var f=function(a){return b(c.replace(e,"$"+a))};return h(f(1),f(2))},f=function(a,b){var d=c(b).toLowerCase();return 0===a.length?g():e(a,d)},g=function(){return h(0,0)},h=function(a,b){return{major:a,minor:b}};return{nu:h,detect:f,unknown:g}}),g("5y",["1","6h"],function(a,b){var c="Edge",d="Chrome",e="IE",f="Opera",g="Firefox",h="Safari",i=function(a,b){return function(){return b===a}},j=function(){return k({current:void 0,version:b.unknown()})},k=function(a){var b=a.current,j=a.version;return{current:b,version:j,isEdge:i(c,b),isChrome:i(d,b),isIE:i(e,b),isOpera:i(f,b),isFirefox:i(g,b),isSafari:i(h,b)}};return{unknown:j,nu:k,edge:a.constant(c),chrome:a.constant(d),ie:a.constant(e),opera:a.constant(f),firefox:a.constant(g),safari:a.constant(h)}}),g("5z",["1","6h"],function(a,b){var c="Windows",d="iOS",e="Android",f="Linux",g="OSX",h="Solaris",i="FreeBSD",j=function(a,b){return function(){return b===a}},k=function(){return l({current:void 0,version:b.unknown()})},l=function(a){var b=a.current,k=a.version;return{current:b,version:k,isWindows:j(c,b),isiOS:j(d,b),isAndroid:j(e,b),isOSX:j(g,b),isLinux:j(f,b),isSolaris:j(h,b),isFreeBSD:j(i,b)}};return{unknown:k,nu:l,windows:a.constant(c),ios:a.constant(d),android:a.constant(e),linux:a.constant(f),osx:a.constant(g),solaris:a.constant(h),freebsd:a.constant(i)}}),g("60",["1"],function(a){return function(b,c,d){var e=b.isiOS()&&/ipad/i.test(d)===!0,f=b.isiOS()&&!e,g=b.isAndroid()&&3===b.version.major,h=b.isAndroid()&&4===b.version.major,i=e||g||h&&/mobile/i.test(d)===!0,j=b.isiOS()||b.isAndroid(),k=j&&!i,l=c.isSafari()&&b.isiOS()&&/safari/i.test(d)===!1;return{isiPad:a.constant(e),isiPhone:a.constant(f),isTablet:a.constant(i),isPhone:a.constant(k),isTouch:a.constant(j),isAndroid:b.isAndroid,isiOS:b.isiOS,isWebView:a.constant(l)}}}),g("61",["1i","6h","3a"],function(a,b,c){var d=function(b,d){var e=c(d).toLowerCase();return a.find(b,function(a){return a.search(e)})},e=function(a,c){return d(a,c).map(function(a){var d=b.detect(a.versionRegexes,c);return{current:a.name,version:d}})},f=function(a,c){return d(a,c).map(function(a){var d=b.detect(a.versionRegexes,c);return{current:a.name,version:d}})};return{detectBrowser:e,detectOs:f}}),g("4v",[],function(){var a=function(a,b){return b+a},b=function(a,b){return a+b},c=function(a,b){return a.substring(b)},d=function(a,b){return a.substring(0,a.length-b)};return{addToStart:a,addToEnd:b,removeFromStart:c,removeFromEnd:d}}),g("4w",["2m","5"],function(a,b){var c=function(a,b){return a.substr(0,b)},d=function(a,b){return a.substr(a.length-b,a.length)},e=function(b){return""===b?a.none():a.some(b.substr(0,1))},f=function(b){return""===b?a.none():a.some(b.substring(1))};return{first:c,last:d,head:e,tail:f}}),g("4f",["4v","4w","5"],function(a,b,c){var d=function(a,b,c){if(""===b)return!0;if(a.length<b.length)return!1;var d=a.substr(c,c+b.length);return d===b},e=function(a,b){var c=function(a){var b=typeof a;return"string"===b||"number"===b};return a.replace(/\${([^{}]*)}/g,function(a,d){var e=b[d];return c(e)?e:a})},f=function(b,c){return l(b,c)?a.removeFromStart(b,c.length):b},g=function(b,c){return m(b,c)?a.removeFromEnd(b,c.length):b},h=function(b,c){return l(b,c)?b:a.addToStart(b,c)},i=function(b,c){return m(b,c)?b:a.addToEnd(b,c)},j=function(a,b){return a.indexOf(b)!==-1},k=function(a){return b.head(a).bind(function(c){return b.tail(a).map(function(a){return c.toUpperCase()+a})}).getOr(a)},l=function(a,b){return d(a,b,0)},m=function(a,b){return d(a,b,a.length-b.length)},n=function(a){return a.replace(/^\s+|\s+$/g,"")},o=function(a){return a.replace(/^\s+/g,"")},p=function(a){return a.replace(/\s+$/g,"")};return{supplant:e,startsWith:l,removeLeading:f,removeTrailing:g,ensureLeading:h,ensureTrailing:i,endsWith:m,contains:j,trim:n,lTrim:o,rTrim:p,capitalize:k}}),g("62",["1","4f"],function(a,b){var c=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,d=function(a){return function(c){return b.contains(c,a)}},e=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(a){var c=b.contains(a,"edge/")&&b.contains(a,"chrome")&&b.contains(a,"safari")&&b.contains(a,"applewebkit");return c}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,c],search:function(a){return b.contains(a,"chrome")&&!b.contains(a,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(a){return b.contains(a,"msie")||b.contains(a,"trident")}},{name:"Opera",versionRegexes:[c,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:d("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:d("firefox")},{name:"Safari",versionRegexes:[c,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(a){return(b.contains(a,"safari")||b.contains(a,"mobile/"))&&b.contains(a,"applewebkit")}}],f=[{name:"Windows",search:d("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(a){return b.contains(a,"iphone")||b.contains(a,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:d("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:d("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:d("linux"),versionRegexes:[]},{name:"Solaris",search:d("sunos"),versionRegexes:[]},{name:"FreeBSD",search:d("freebsd"),versionRegexes:[]}];return{browsers:a.constant(e),oses:a.constant(f)}}),g("4s",["5y","5z","60","61","62"],function(a,b,c,d,e){var f=function(f){var g=e.browsers(),h=e.oses(),i=d.detectBrowser(g,f).fold(a.unknown,a.nu),j=d.detectOs(h,f).fold(b.unknown,b.nu),k=c(j,i,f);return{browser:i,os:j,deviceType:k}};return{detect:f}}),g("3c",["4r","4s","1m"],function(a,b,c){var d=a.cached(function(){var a=c.userAgent;return b.detect(a)});return{detect:d}}),g("3d",[],function(){return"undefined"==typeof console&&(console={log:function(){}}),console}),g("1v",["1","5","3d","1j"],function(a,b,c,d){var e=function(a,b){var e=b||d,f=e.createElement("div");if(f.innerHTML=a,!f.hasChildNodes()||f.childNodes.length>1)throw c.error("HTML does not have a single root node",a),"HTML must have a single root node";return h(f.childNodes[0])},f=function(a,b){var c=b||d,e=c.createElement(a);return h(e)},g=function(a,b){var c=b||d,e=c.createTextNode(a);return h(e)},h=function(c){if(null===c||void 0===c)throw new b("Node cannot be null or undefined");return{dom:a.constant(c)}};return{fromHtml:e,fromTag:f,fromText:g,fromDom:h}}),g("4b",[],function(){return{ATTRIBUTE:2,CDATA_SECTION:4,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,ELEMENT:1,TEXT:3,PROCESSING_INSTRUCTION:7,ENTITY_REFERENCE:5,ENTITY:6,NOTATION:12}}),g("3e",["4b"],function(a){var b=function(a){var b=a.dom().nodeName;return b.toLowerCase()},c=function(a){return a.dom().nodeType},d=function(a){return a.dom().nodeValue},e=function(a){return function(b){return c(b)===a}},f=function(d){return c(d)===a.COMMENT||"#comment"===b(d)},g=e(a.ELEMENT),h=e(a.TEXT),i=e(a.DOCUMENT);return{name:b,type:c,value:d,isElement:g,isText:h,isDocument:i,isComment:f}}),g("27",["4","3a"],function(a,b){var c=function(c){if(null===c)return"null";var d=typeof c;return"object"===d&&a.prototype.isPrototypeOf(c)?"array":"object"===d&&b.prototype.isPrototypeOf(c)?"string":d},d=function(a){return function(b){return c(b)===a}};return{isString:d("string"),isObject:d("object"),isArray:d("array"),isNull:d("null"),isBoolean:d("boolean"),isUndefined:d("undefined"),isFunction:d("function"),isNumber:d("number")}}),g("4e",["2m","39"],function(a,b){var c=function(){var a=b.keys,c=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b};return void 0===a?c:a}(),d=function(a,b){for(var d=c(a),e=0,f=d.length;e<f;e++){var g=d[e],h=a[g];b(h,g,a)}},e=function(a,b){return f(a,function(a,c,d){return{k:c,v:b(a,c,d)}})},f=function(a,b){var c={};return d(a,function(d,e){var f=b(d,e,a);c[f.k]=f.v}),c},g=function(a,b){var c={},e={};return d(a,function(a,d){var f=b(a,d)?c:e;f[d]=a}),{t:c,f:e}},h=function(a,b){var c=[];return d(a,function(a,d){c.push(b(a,d))}),c},i=function(b,d){for(var e=c(b),f=0,g=e.length;f<g;f++){var h=e[f],i=b[h];if(d(i,h,b))return a.some(i)}return a.none()},j=function(a){return h(a,function(a){return a})},k=function(a){return j(a).length};return{bifilter:g,each:d,map:e,mapToArray:h,tupleMap:f,find:i,keys:c,values:j,size:k}}),g("46",["27","1i","4e","3e","5","3d"],function(a,b,c,d,e,f){var g=function(b,c,d){if(!(a.isString(d)||a.isBoolean(d)||a.isNumber(d)))throw f.error("Invalid call to Attr.set. Key ",c,":: Value ",d,":: Element ",b),new e("Attribute value was not simple");b.setAttribute(c,d+"")},h=function(a,b,c){g(a.dom(),b,c)},i=function(a,b){var d=a.dom();c.each(b,function(a,b){g(d,b,a)})},j=function(a,b){var c=a.dom().getAttribute(b);return null===c?void 0:c},k=function(a,b){var c=a.dom();return!(!c||!c.hasAttribute)&&c.hasAttribute(b)},l=function(a,b){a.dom().removeAttribute(b)},m=function(a){var b=a.dom().attributes;return void 0===b||null===b||0===b.length},n=function(a){return b.foldl(a.dom().attributes,function(a,b){return a[b.name]=b.value,a},{})},o=function(a,b,c){k(a,c)&&!k(b,c)&&h(b,c,j(a,c))},p=function(a,c,e){d.isElement(a)&&d.isElement(c)&&b.each(e,function(b){o(a,c,b)})};return{clone:n,set:h,setAll:i,get:j,has:k,remove:l,hasNone:m,transfer:p}}),g("4t",["4r","1v","3e","1j"],function(a,b,c,d){var e=function(a){var b=c.isText(a)?a.dom().parentNode:a.dom();return void 0!==b&&null!==b&&b.ownerDocument.body.contains(b)},f=a.cached(function(){return g(b.fromDom(d))}),g=function(a){var c=a.dom().body;if(null===c||void 0===c)throw"Body is not available yet";return b.fromDom(c)};return{body:f,getBody:g,inBody:e}}),g("4u",[],function(){var a=function(a){return void 0!==a.style};return{isSupported:a}}),g("3f",["27","1i","4e","2m","46","4t","1v","3e","4u","4f","5","3d","2"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=function(b,c,d){if(!a.isString(d))throw l.error("Invalid call to CSS.set. Property ",c,":: Value ",d,":: Element ",b),new k("CSS value must be a string: "+d);i.isSupported(b)&&b.style.setProperty(c,d)},o=function(a,b){i.isSupported(a)&&a.style.removeProperty(b)},p=function(a,b,c){var d=a.dom();n(d,b,c)},q=function(a,b){var d=a.dom();c.each(b,function(a,b){n(d,b,a)})},r=function(a,b){var d=a.dom();c.each(b,function(a,b){a.fold(function(){o(d,b)},function(a){n(d,b,a)})})},s=function(a,b){var c=a.dom(),d=m.getComputedStyle(c),e=d.getPropertyValue(b),g=""!==e||f.inBody(a)?e:t(c,b);return null===g?void 0:g},t=function(a,b){return i.isSupported(a)?a.style.getPropertyValue(b):""},u=function(a,b){var c=a.dom(),e=t(c,b);return d.from(e).filter(function(a){return a.length>0})},v=function(a){var b={},c=a.dom();if(i.isSupported(c))for(var d=0;d<c.style.length;d++){var e=c.style.item(d);b[e]=c.style[e]}return b},w=function(a,b,c){var d=g.fromTag(a);p(d,b,c);var e=u(d,b);return e.isSome()},x=function(a,b){var c=a.dom();o(c,b),e.has(a,"style")&&""===j.trim(e.get(a,"style"))&&e.remove(a,"style")},y=function(a,b){var c=e.get(a,"style"),d=b(a),f=void 0===c?e.remove:e.set;return f(a,"style",c),d},z=function(a,b){var c=a.dom(),d=b.dom();i.isSupported(c)&&i.isSupported(d)&&(d.style.cssText=c.style.cssText)},A=function(a){return a.dom().offsetWidth},B=function(a,b,c){u(a,c).each(function(a){u(b,c).isNone()&&p(b,c,a)})},C=function(a,c,d){h.isElement(a)&&h.isElement(c)&&b.each(d,function(b){B(a,c,b)})};return{copy:z,set:p,preserve:y,setAll:q,setOptions:r,remove:x,get:s,getRaw:u,getAllRaw:v,isValidValue:w,reflow:A,transfer:C}}),g("4x",["1i","1","4","5"],function(a,b,c,d){return function(){var e=arguments;return function(){for(var f=new c(arguments.length),g=0;g<f.length;g++)f[g]=arguments[g];if(e.length!==f.length)throw new d('Wrong number of arguments to struct. Expected "['+e.length+']", got '+f.length+" arguments");var h={};return a.each(e,function(a,c){h[a]=b.constant(f[c])}),h}}}),g("63",["1i","27","5"],function(a,b,c){var d=function(a){return a.slice(0).sort()},e=function(a,b){throw new c("All required keys ("+d(a).join(", ")+") were not specified. Specified keys were: "+d(b).join(", ")+".")},f=function(a){throw new c("Unsupported keys for object: "+d(a).join(", "))},g=function(d,e){if(!b.isArray(e))throw new c("The "+d+" fields must be an array. Was: "+e+".");a.each(e,function(a){if(!b.isString(a))throw new c("The value "+a+" in the "+d+" fields was not a string.")})},h=function(a,b){throw new c("All values need to be of type: "+b+". Keys ("+d(a).join(", ")+") were not.")},i=function(b){var e=d(b),f=a.find(e,function(a,b){return b<e.length-1&&a===e[b+1]});f.each(function(a){throw new c("The field: "+a+" occurs more than once in the combined fields: ["+e.join(", ")+"].")})};return{sort:d,reqMessage:e,unsuppMessage:f,validateStrArr:g,invalidTypeMessage:h,checkDupes:i}}),g("4y",["1i","1","4e","2m","63","5","39"],function(a,b,c,d,e,f,g){return function(h,i){var j=h.concat(i);if(0===j.length)throw new f("You must specify at least one required or optional field.");return e.validateStrArr("required",h),e.validateStrArr("optional",i),e.checkDupes(j),function(f){var k=c.keys(f),l=a.forall(h,function(b){return a.contains(k,b)});l||e.reqMessage(h,k);var m=a.filter(k,function(b){return!a.contains(j,b)});m.length>0&&e.unsuppMessage(m);var n={};return a.each(h,function(a){n[a]=b.constant(f[a])}),a.each(i,function(a){n[a]=b.constant(g.prototype.hasOwnProperty.call(f,a)?d.some(f[a]):d.none())}),n}}}),g("44",["4x","4y"],function(a,b){return{immutable:a,immutableBag:b}}),g("4z",[],function(){var a=function(a,b){var c=[],d=function(a){return c.push(a),b(a)},e=b(a);do e=e.bind(d);while(e.isSome());return c};return{toArray:a}}),g("4a",["3b"],function(a){var b=function(){var b=a.getOrDie("Node");return b},c=function(a,b,c){return 0!==(a.compareDocumentPosition(b)&c)},d=function(a,d){return c(a,d,b().DOCUMENT_POSITION_PRECEDING)},e=function(a,d){return c(a,d,b().DOCUMENT_POSITION_CONTAINED_BY)};return{documentPositionPreceding:d,documentPositionContainedBy:e}}),g("30",["1i","2m","1v","4b","5","1j"],function(a,b,c,d,e,f){var g=0,h=1,i=2,j=3,k=function(){var a=f.createElement("span");return void 0!==a.matches?g:void 0!==a.msMatchesSelector?h:void 0!==a.webkitMatchesSelector?i:void 0!==a.mozMatchesSelector?j:-1}(),l=d.ELEMENT,m=d.DOCUMENT,n=function(a,b){var c=a.dom();if(c.nodeType!==l)return!1;if(k===g)return c.matches(b);if(k===h)return c.msMatchesSelector(b);if(k===i)return c.webkitMatchesSelector(b);if(k===j)return c.mozMatchesSelector(b);throw new e("Browser lacks native selectors")},o=function(a){return a.nodeType!==l&&a.nodeType!==m||0===a.childElementCount},p=function(b,d){var e=void 0===d?f:d.dom();return o(e)?[]:a.map(e.querySelectorAll(b),c.fromDom)},q=function(a,d){var e=void 0===d?f:d.dom();return o(e)?b.none():b.from(e.querySelector(a)).map(c.fromDom)};return{all:p,is:n,one:q}}),g("32",["1i","1","4a","3c","30"],function(a,b,c,d,e){var f=function(a,b){return a.dom()===b.dom()},g=function(a,b){return a.dom().isEqualNode(b.dom())},h=function(c,d){return a.exists(d,b.curry(f,c))},i=function(a,b){var c=a.dom(),d=b.dom();return c!==d&&c.contains(d)},j=function(a,b){return c.documentPositionContainedBy(a.dom(),b.dom())},k=d.detect().browser,l=k.isIE()?j:i;return{eq:f,isEqualNode:g,member:h,contains:l,is:e.is}}),g("3g",["27","1i","1","2m","44","4z","32","1v"],function(a,b,c,d,e,f,g,h){var i=function(a){return h.fromDom(a.dom().ownerDocument)},j=function(a){var b=i(a);return h.fromDom(b.dom().documentElement)},k=function(a){var b=a.dom(),c=b.ownerDocument.defaultView;return h.fromDom(c)},l=function(a){var b=a.dom();return d.from(b.parentNode).map(h.fromDom)},m=function(a){return l(a).bind(function(c){var d=u(c);return b.findIndex(d,function(b){return g.eq(a,b)})})},n=function(b,d){for(var e=a.isFunction(d)?d:c.constant(!1),f=b.dom(),g=[];null!==f.parentNode&&void 0!==f.parentNode;){var i=f.parentNode,j=h.fromDom(i);if(g.push(j),e(j)===!0)break;f=i}return g},o=function(a){var c=function(c){return b.filter(c,function(b){return!g.eq(a,b)})};return l(a).map(u).map(c).getOr([])},p=function(a){var b=a.dom();return d.from(b.offsetParent).map(h.fromDom)},q=function(a){var b=a.dom();return d.from(b.previousSibling).map(h.fromDom)},r=function(a){var b=a.dom();return d.from(b.nextSibling).map(h.fromDom)},s=function(a){return b.reverse(f.toArray(a,q))},t=function(a){return f.toArray(a,r)},u=function(a){var c=a.dom();return b.map(c.childNodes,h.fromDom)},v=function(a,b){var c=a.dom().childNodes;return d.from(c[b]).map(h.fromDom)},w=function(a){return v(a,0)},x=function(a){return v(a,a.dom().childNodes.length-1)},y=function(a,b){return a.dom().childNodes.length},z=e.immutable("element","offset"),A=function(a,b){var c=u(a);return c.length>0&&b<c.length?z(c[b],0):z(a,b)};return{owner:i,defaultView:k,documentElement:j,parent:l,findIndex:m,parents:n,siblings:o,prevSibling:q,offsetParent:p,prevSiblings:s,nextSibling:r,nextSiblings:t,children:u,child:v,firstChild:w,lastChild:x,childNodesCount:y,leaf:A}}),g("1s",["1i","3c","1v","3e","3f","3g"],function(a,b,c,d,e,f){var g=b.detect().browser,h=function(b){return a.find(b,d.isElement)},i=function(a){return g.isFirefox()&&"table"===d.name(a)?h(f.children(a)).filter(function(a){return"caption"===d.name(a)}).bind(function(a){return h(f.nextSiblings(a)).map(function(b){var c=b.dom().offsetTop,d=a.dom().offsetTop,e=a.dom().offsetHeight;return c<=d?-e:0})}).getOr(0):0},j=function(a,b,d){var f,g,h=0,j=0,k=a.ownerDocument;if(d=d?d:a,b){if(d===a&&b.getBoundingClientRect&&"static"===e.get(c.fromDom(a),"position"))return g=b.getBoundingClientRect(),h=g.left+(k.documentElement.scrollLeft||a.scrollLeft)-k.documentElement.clientLeft,j=g.top+(k.documentElement.scrollTop||a.scrollTop)-k.documentElement.clientTop,{x:h,y:j};for(f=b;f&&f!==d&&f.nodeType;)h+=f.offsetLeft||0,j+=f.offsetTop||0,f=f.offsetParent;for(f=b.parentNode;f&&f!==d&&f.nodeType;)h-=f.scrollLeft||0,j-=f.scrollTop||0,f=f.parentNode;j+=i(c.fromDom(b))}return{x:h,y:j}};return{getPos:j}}),g("50",["1i","2m","1q"],function(a,b,c){var d=function(e){var f=b.none(),g=[],h=function(a){return d(function(b){i(function(c){b(a(c))})})},i=function(a){k()?m(a):g.push(a)},j=function(a){f=b.some(a),l(g),g=[]},k=function(){return f.isSome()},l=function(b){a.each(b,m)},m=function(a){f.each(function(b){c(function(){a(b)},0)})};return e(j),{get:i,map:h,isReady:k}},e=function(a){return d(function(b){b(a)})};return{nu:d,pure:e}}),g("51",["4","1q"],function(a,b){var c=function(c){return function(){var d=a.prototype.slice.call(arguments),e=this;b(function(){c.apply(e,d)},0)}};return{bounce:c}}),g("3h",["50","51"],function(a,b){var c=function(d){var e=function(a){d(b.bounce(a))},f=function(a){return c(function(b){e(function(c){var d=a(c);b(d)})})},g=function(a){return c(function(b){e(function(c){a(c).get(b)})})},h=function(a){return c(function(b){e(function(c){a.get(b)})})},i=function(){return a.nu(e)};return{map:f,bind:g,anonBind:h,toLazy:i,get:e}},d=function(a){return c(function(b){
b(a)})};return{nu:c,pure:d}}),g("52",["1i"],function(a){var b=function(b,c){return c(function(c){var d=[],e=0,f=function(a){return function(f){d[a]=f,e++,e>=b.length&&c(d)}};0===b.length?c([]):a.each(b,function(a,b){a.get(f(b))})})};return{par:b}}),g("3i",["1i","3h","52"],function(a,b,c){var d=function(a){return c.par(a,b.nu)},e=function(b,c){var e=a.map(b,c);return d(e)},f=function(a,b){return function(c){return b(c).bind(a)}};return{par:d,mapM:e,compose:f}}),g("3j",["1","2m"],function(a,b){var c=function(d){var e=function(a){return d===a},f=function(a){return c(d)},g=function(a){return c(d)},h=function(a){return c(a(d))},i=function(a){a(d)},j=function(a){return a(d)},k=function(a,b){return b(d)},l=function(a){return a(d)},m=function(a){return a(d)},n=function(){return b.some(d)};return{is:e,isValue:a.constant(!0),isError:a.constant(!1),getOr:a.constant(d),getOrThunk:a.constant(d),getOrDie:a.constant(d),or:f,orThunk:g,fold:k,map:h,each:i,bind:j,exists:l,forall:m,toOption:n}},d=function(c){var e=function(a){return a()},f=function(){return a.die(c)()},g=function(a){return a},h=function(a){return a()},i=function(a){return d(c)},j=function(a){return d(c)},k=function(a,b){return a(c)};return{is:a.constant(!1),isValue:a.constant(!1),isError:a.constant(!0),getOr:a.identity,getOrThunk:e,getOrDie:f,or:g,orThunk:h,fold:k,map:i,each:a.noop,bind:j,exists:a.constant(!1),forall:a.constant(!0),toOption:b.none}};return{value:c,error:d}}),g("1t",["1i","1","3h","3i","3j","1m","15","1e"],function(a,b,c,d,e,f,g,h){"use strict";return function(i,j){var k,l=0,m={};j=j||{},k=j.maxLoadTime||5e3;var n=function(a){i.getElementsByTagName("head")[0].appendChild(a)},o=function(a,b,c){var d,e,j,o,p=function(){for(var a=o.passed,b=a.length;b--;)a[b]();o.status=2,o.passed=[],o.failed=[]},q=function(){for(var a=o.failed,b=a.length;b--;)a[b]();o.status=3,o.passed=[],o.failed=[]},r=function(){var a=f.userAgent.match(/WebKit\/(\d*)/);return!!(a&&a[1]<536)},s=function(a,b){a()||((new Date).getTime()-j<k?g.setTimeout(b):q())},t=function(){s(function(){for(var a,b,c=i.styleSheets,e=c.length;e--;)if(a=c[e],b=a.ownerNode?a.ownerNode:a.owningElement,b&&b.id===d.id)return p(),!0},t)},u=function(){s(function(){try{var a=e.sheet.cssRules;return p(),!!a}catch(a){}},u)};if(a=h._addCacheSuffix(a),m[a]?o=m[a]:(o={passed:[],failed:[]},m[a]=o),b&&o.passed.push(b),c&&o.failed.push(c),1!=o.status){if(2==o.status)return void p();if(3==o.status)return void q();if(o.status=1,d=i.createElement("link"),d.rel="stylesheet",d.type="text/css",d.id="u"+l++,d.async=!1,d.defer=!1,j=(new Date).getTime(),"onload"in d&&!r())d.onload=t,d.onerror=q;else{if(f.userAgent.indexOf("Firefox")>0)return e=i.createElement("style"),e.textContent='@import "'+a+'"',u(),void n(e);t()}n(d),d.href=a}},p=function(a){return c.nu(function(c){o(a,b.compose(c,b.constant(e.value(a))),b.compose(c,b.constant(e.error(a))))})},q=function(a){return a.fold(b.identity,b.identity)},r=function(b,c,e){d.par(a.map(b,p)).get(function(b){var d=a.partition(b,function(a){return a.isValue()});d.fail.length>0?e(d.fail.map(q)):c(d.pass.map(q))})};return{load:o,loadAll:r}}}),g("s",[],function(){return function(a,b){var c=a,d=function(a,c,d,e){var f,g;if(a){if(!e&&a[c])return a[c];if(a!=b){if(f=a[d])return f;for(g=a.parentNode;g&&g!=b;g=g.parentNode)if(f=g[d])return f}}},e=function(a,c,d,e){var f,g,h;if(a){if(f=a[d],b&&f===b)return;if(f){if(!e)for(h=f[c];h;h=h[c])if(!h[c])return h;return f}if(g=a.parentNode,g&&g!==b)return g}};this.current=function(){return c},this.next=function(a){return c=d(c,"firstChild","nextSibling",a)},this.prev=function(a){return c=d(c,"lastChild","previousSibling",a)},this.prev2=function(a){return c=e(c,"lastChild","previousSibling",a)}}}),g("3k",["1i","1","3e"],function(a,b,c){var d=["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"],e=["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed","source","wbr","track"],f=["td","th"],g=["thead","tbody","tfoot"],h=["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"],i=["h1","h2","h3","h4","h5","h6"],j=["li","dd","dt"],k=["ul","ol","dl"],l=function(d){var e;return function(f){return e=e?e:a.mapToObject(d,b.constant(!0)),e.hasOwnProperty(c.name(f))}},m=l(i),n=l(d),o=function(a){return c.isElement(a)&&!n(a)},p=function(a){return c.isElement(a)&&"br"===c.name(a)};return{isBlock:n,isInline:o,isHeading:m,isTextBlock:l(h),isList:l(k),isListItem:l(j),isVoid:l(e),isTableSection:l(g),isTableCell:l(f),isBr:p}}),g("1y",[],function(){var a=function(a){return function(b){return!!b&&b.nodeType==a}},b=a(1),c=function(a){return a=a.toLowerCase().split(" "),function(b){var c,d;if(b&&b.nodeType)for(d=b.nodeName.toLowerCase(),c=0;c<a.length;c++)if(d===a[c])return!0;return!1}},d=function(a,c){return c=c.toLowerCase().split(" "),function(d){var e,f;if(b(d))for(e=0;e<c.length;e++)if(f=d.ownerDocument.defaultView.getComputedStyle(d,null).getPropertyValue(a),f===c[e])return!0;return!1}},e=function(a,c){return function(d){return b(d)&&d[a]===c}},f=function(a,c){return function(c){return b(c)&&c.hasAttribute(a)}},g=function(a,c){return function(d){return b(d)&&d.getAttribute(a)===c}},h=function(a){return b(a)&&a.hasAttribute("data-mce-bogus")},i=function(a){return function(c){if(b(c)){if(c.contentEditable===a)return!0;if(c.getAttribute("data-mce-contenteditable")===a)return!0}return!1}};return{isText:a(3),isElement:b,isComment:a(8),isDocument:a(9),isBr:c("br"),isContentEditableTrue:i("true"),isContentEditableFalse:i("false"),matchNodeNames:c,hasPropValue:e,hasAttribute:f,hasAttributeValue:g,matchStyleValues:d,isBogus:h}}),g("1u",["1v","3k","1y","1e"],function(a,b,c,d){var e=function(a){var b=a.previousSibling&&"SPAN"===a.previousSibling.nodeName,c=a.nextSibling&&"SPAN"===a.nextSibling.nodeName;return b&&c},f=function(a){return a&&"SPAN"===a.tagName&&"bookmark"===a.getAttribute("data-mce-type")},g=function(h,i){var j,k=i.childNodes;if(!c.isElement(i)||!f(i)){for(j=k.length-1;j>=0;j--)g(h,k[j]);if(c.isDocument(i)===!1){if(c.isText(i)&&i.nodeValue.length>0){var l=d.trim(i.nodeValue).length;if(h.isBlock(i.parentNode)||l>0)return;if(0===l&&e(i))return}else if(c.isElement(i)&&(k=i.childNodes,1===k.length&&f(k[0])&&i.parentNode.insertBefore(k[0],i),k.length||b.isVoid(a.fromDom(i))))return;h.remove(i)}return i}};return{trimNode:g}}),g("v",["1v","1e"],function(a,b){var c,d,e,f=b.makeMap,g=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,i=/[<>&\"\']/g,j=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,k={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};d={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},e={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"};var l=function(b){var c;return c=a.fromTag("div").dom(),c.innerHTML=b,c.textContent||c.innerText||b},m=function(a,b){var c,e,f,g={};if(a){for(a=a.split(","),b=b||10,c=0;c<a.length;c+=2)e=String.fromCharCode(parseInt(a[c],b)),d[e]||(f="&"+a[c+1]+";",g[e]=f,g[f]=e);return g}};c=m("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var n={encodeRaw:function(a,b){return a.replace(b?g:h,function(a){return d[a]||a})},encodeAllRaw:function(a){return(""+a).replace(i,function(a){return d[a]||a})},encodeNumeric:function(a,b){return a.replace(b?g:h,function(a){return a.length>1?"&#"+(1024*(a.charCodeAt(0)-55296)+(a.charCodeAt(1)-56320)+65536)+";":d[a]||"&#"+a.charCodeAt(0)+";"})},encodeNamed:function(a,b,e){return e=e||c,a.replace(b?g:h,function(a){return d[a]||e[a]||a})},getEncodeFunc:function(a,b){b=m(b)||c;var e=function(a,c){return a.replace(c?g:h,function(a){return void 0!==d[a]?d[a]:void 0!==b[a]?b[a]:a.length>1?"&#"+(1024*(a.charCodeAt(0)-55296)+(a.charCodeAt(1)-56320)+65536)+";":"&#"+a.charCodeAt(0)+";"})},i=function(a,c){return n.encodeNamed(a,c,b)};return a=f(a.replace(/\+/g,",")),a.named&&a.numeric?e:a.named?b?i:n.encodeNamed:a.numeric?n.encodeNumeric:n.encodeRaw},decode:function(a){return a.replace(j,function(a,b){return b?(b="x"===b.charAt(0).toLowerCase()?parseInt(b.substr(1),16):parseInt(b,10),b>65535?(b-=65536,String.fromCharCode(55296+(b>>10),56320+(1023&b))):k[b]||String.fromCharCode(b)):e[a]||c[a]||l(a)})}};return n}),g("y",["1e"],function(a){var b={},c={},d=a.makeMap,e=a.each,f=a.extend,g=a.explode,h=a.inArray,i=function(b,c){return b=a.trim(b),b?b.split(c||" "):[]},j=function(a){var d,f,g,h,j,k,l={},m=function(a,b,e){var f,g,h,j=function(a,b){var c,d,e={};for(c=0,d=a.length;c<d;c++)e[a[c]]=b||{};return e};for(e=e||[],b=b||"","string"==typeof e&&(e=i(e)),a=i(a),f=a.length;f--;)g=i([d,b].join(" ")),h={attributes:j(g),attributesOrder:g,children:j(e,c)},l[a[f]]=h},n=function(a,b){var c,d,e,f;for(a=i(a),c=a.length,b=i(b);c--;)for(d=l[a[c]],e=0,f=b.length;e<f;e++)d.attributes[b[e]]={},d.attributesOrder.push(b[e])};return b[a]?b[a]:(d="id accesskey class dir lang style tabindex title role",f="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",g="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!=a&&(d+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",f+=" article aside details dialog figure header footer hgroup section nav",g+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!=a&&(d+=" xml:lang",k="acronym applet basefont big font strike tt",g=[g,k].join(" "),e(i(k),function(a){m(a,"",g)}),j="center dir isindex noframes",f=[f,j].join(" "),h=[f,g].join(" "),e(i(j),function(a){m(a,"",h)})),h=h||[f,g].join(" "),m("html","manifest","head body"),m("head","","base command link meta noscript script style title"),m("title hr noscript br"),m("base","href target"),m("link","href rel media hreflang type sizes hreflang"),m("meta","name http-equiv content charset"),m("style","media type scoped"),m("script","src async defer type charset"),m("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",h),m("address dt dd div caption","",h),m("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",g),m("blockquote","cite",h),m("ol","reversed start type","li"),m("ul","","li"),m("li","value",h),m("dl","","dt dd"),m("a","href target rel media hreflang type",g),m("q","cite",g),m("ins del","cite datetime",h),m("img","src sizes srcset alt usemap ismap width height"),m("iframe","src name width height",h),m("embed","src type width height"),m("object","data type typemustmatch name usemap form width height",[h,"param"].join(" ")),m("param","name value"),m("map","name",[h,"area"].join(" ")),m("area","alt coords shape href target rel media hreflang type"),m("table","border","caption colgroup thead tfoot tbody tr"+("html4"==a?" col":"")),m("colgroup","span","col"),m("col","span"),m("tbody thead tfoot","","tr"),m("tr","","td th"),m("td","colspan rowspan headers",h),m("th","colspan rowspan headers scope abbr",h),m("form","accept-charset action autocomplete enctype method name novalidate target",h),m("fieldset","disabled form name",[h,"legend"].join(" ")),m("label","form for",g),m("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),m("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==a?h:g),m("select","disabled form multiple name required size","option optgroup"),m("optgroup","disabled label","option"),m("option","disabled label selected value"),m("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),m("menu","type label",[h,"li"].join(" ")),m("noscript","",h),"html4"!=a&&(m("wbr"),m("ruby","",[g,"rt rp"].join(" ")),m("figcaption","",h),m("mark rt rp summary bdi","",g),m("canvas","width height",h),m("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[h,"track source"].join(" ")),m("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[h,"track source"].join(" ")),m("picture","","img source"),m("source","src srcset type media sizes"),m("track","kind src srclang label default"),m("datalist","",[g,"option"].join(" ")),m("article section nav aside header footer","",h),m("hgroup","","h1 h2 h3 h4 h5 h6"),m("figure","",[h,"figcaption"].join(" ")),m("time","datetime",g),m("dialog","open",h),m("command","type label icon disabled checked radiogroup command"),m("output","for form name",g),m("progress","value max",g),m("meter","value min max low high optimum",g),m("details","open",[h,"summary"].join(" ")),m("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=a&&(n("script","language xml:space"),n("style","xml:space"),n("object","declare classid code codebase codetype archive standby align border hspace vspace"),n("embed","align name hspace vspace"),n("param","valuetype type"),n("a","charset name rev shape coords"),n("br","clear"),n("applet","codebase archive code object alt name width height align hspace vspace"),n("img","name longdesc align border hspace vspace"),n("iframe","longdesc frameborder marginwidth marginheight scrolling align"),n("font basefont","size color face"),n("input","usemap align"),n("select","onchange"),n("textarea"),n("h1 h2 h3 h4 h5 h6 div p legend caption","align"),n("ul","type compact"),n("li","type"),n("ol dl menu dir","compact"),n("pre","width xml:space"),n("hr","align noshade size width"),n("isindex","prompt"),n("table","summary width frame rules cellspacing cellpadding align bgcolor"),n("col","width align char charoff valign"),n("colgroup","width align char charoff valign"),n("thead","align char charoff valign"),n("tr","align char charoff valign bgcolor"),n("th","axis align char charoff valign nowrap bgcolor width height"),n("form","accept"),n("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),n("tfoot","align char charoff valign"),n("tbody","align char charoff valign"),n("area","nohref"),n("body","background bgcolor text link vlink alink")),"html4"!=a&&(n("input button select textarea","autofocus"),n("input textarea","placeholder"),n("a","download"),n("link script img","crossorigin"),n("iframe","sandbox seamless allowfullscreen")),e(i("a form meter progress dfn"),function(a){l[a]&&delete l[a].children[a]}),delete l.caption.children.table,delete l.script,b[a]=l,l)},k=function(a,b){var c;return a&&(c={},"string"==typeof a&&(a={"*":a}),e(a,function(a,e){c[e]=c[e.toUpperCase()]="map"==b?d(a,/[, ]/):g(a,/[, ]/)})),c};return function(a){var c,l,m,n,o,p,q,r,s,t,u,v,w,x=this,y={},z={},A=[],B={},C={},D=function(c,e,g){var h=a[c];return h?h=d(h,/[, ]/,d(h.toUpperCase(),/[, ]/)):(h=b[c],h||(h=d(e," ",d(e.toUpperCase()," ")),h=f(h,g),b[c]=h)),h};a=a||{},m=j(a.schema),a.verify_html===!1&&(a.valid_elements="*[*]"),c=k(a.valid_styles),l=k(a.invalid_styles,"map"),r=k(a.valid_classes,"map"),n=D("whitespace_elements","pre script noscript style textarea video audio iframe object code"),o=D("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),p=D("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),q=D("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),t=D("non_empty_elements","td th iframe video audio object script pre code",p),u=D("move_caret_before_on_enter_elements","table",t),v=D("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),s=D("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption",v),w=D("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),e((a.special||"script noscript noframes noembed title style textarea xmp").split(" "),function(a){C[a]=new RegExp("</"+a+"[^>]*>","gi")});var E=function(a){return new RegExp("^"+a.replace(/([?+*])/g,".$1")+"$")},F=function(a){var b,c,e,f,g,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,z=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,B=/[*?+]/;if(a)for(a=i(a,","),y["@"]&&(t=y["@"].attributes,u=y["@"].attributesOrder),b=0,c=a.length;b<c;b++)if(g=x.exec(a[b])){if(r=g[1],m=g[2],s=g[3],l=g[5],p={},q=[],j={attributes:p,attributesOrder:q},"#"===r&&(j.paddEmpty=!0),"-"===r&&(j.removeEmpty=!0),"!"===g[4]&&(j.removeEmptyAttrs=!0),t){for(v in t)p[v]=t[v];q.push.apply(q,u)}if(l)for(l=i(l,"|"),e=0,f=l.length;e<f;e++)if(g=z.exec(l[e])){if(k={},o=g[1],n=g[2].replace(/[\\:]:/g,":"),r=g[3],w=g[4],"!"===o&&(j.attributesRequired=j.attributesRequired||[],j.attributesRequired.push(n),k.required=!0),"-"===o){delete p[n],q.splice(h(q,n),1);continue}r&&("="===r&&(j.attributesDefault=j.attributesDefault||[],j.attributesDefault.push({name:n,value:w}),k.defaultValue=w),":"===r&&(j.attributesForced=j.attributesForced||[],j.attributesForced.push({name:n,value:w}),k.forcedValue=w),"<"===r&&(k.validValues=d(w,"?"))),B.test(n)?(j.attributePatterns=j.attributePatterns||[],k.pattern=E(n),j.attributePatterns.push(k)):(p[n]||q.push(n),p[n]=k)}t||"@"!=m||(t=p,u=q),s&&(j.outputName=m,y[s]=j),B.test(m)?(j.pattern=E(m),A.push(j)):y[m]=j}},G=function(a){y={},A=[],F(a),e(m,function(a,b){z[b]=a.children})},H=function(a){var c=/^(~)?(.+)$/;a&&(b.text_block_elements=b.block_elements=null,e(i(a,","),function(a){var b=c.exec(a),d="~"===b[1],g=d?"span":"div",h=b[2];if(z[h]=z[g],B[h]=g,d||(s[h.toUpperCase()]={},s[h]={}),!y[h]){var i=y[g];i=f({},i),delete i.removeEmptyAttrs,delete i.removeEmpty,y[h]=i}e(z,function(a,b){a[g]&&(z[b]=a=f({},z[b]),a[h]=a[g])})}))},I=function(c){var d=/^([+\-]?)(\w+)\[([^\]]+)\]$/;b[a.schema]=null,c&&e(i(c,","),function(a){var b,c,f=d.exec(a);f&&(c=f[1],b=c?z[f[2]]:z[f[2]]={"#comment":{}},b=z[f[2]],e(i(f[3],"|"),function(a){"-"===c?delete b[a]:b[a]={}}))})},J=function(a){var b,c=y[a];if(c)return c;for(b=A.length;b--;)if(c=A[b],c.pattern.test(a))return c};a.valid_elements?G(a.valid_elements):(e(m,function(a,b){y[b]={attributes:a.attributes,attributesOrder:a.attributesOrder},z[b]=a.children}),"html5"!=a.schema&&e(i("strong/b em/i"),function(a){a=i(a,"/"),y[a[1]].outputName=a[0]}),e(i("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(a){y[a]&&(y[a].removeEmpty=!0)}),e(i("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),function(a){y[a].paddEmpty=!0}),e(i("span"),function(a){y[a].removeEmptyAttrs=!0})),H(a.custom_elements),I(a.valid_children),F(a.extended_valid_elements),I("+ol[ul|ol],+ul[ul|ol]"),e({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(a,b){y[b]&&(y[b].parentsRequired=i(a))}),a.invalid_elements&&e(g(a.invalid_elements),function(a){y[a]&&delete y[a]}),J("span")||F("span[!data-mce-type|*]"),x.children=z,x.getValidStyles=function(){return c},x.getInvalidStyles=function(){return l},x.getValidClasses=function(){return r},x.getBoolAttrs=function(){return q},x.getBlockElements=function(){return s},x.getTextBlockElements=function(){return v},x.getTextInlineElements=function(){return w},x.getShortEndedElements=function(){return p},x.getSelfClosingElements=function(){return o},x.getNonEmptyElements=function(){return t},x.getMoveCaretBeforeOnEnterElements=function(){return u},x.getWhiteSpaceElements=function(){return n},x.getSpecialElements=function(){return C},x.isValidChild=function(a,b){var c=z[a.toLowerCase()];return!(!c||!c[b.toLowerCase()])},x.isValid=function(a,b){var c,d,e=J(a);if(e){if(!b)return!0;if(e.attributes[b])return!0;if(c=e.attributePatterns)for(d=c.length;d--;)if(c[d].pattern.test(a))return!0}return!1},x.getElementRule=J,x.getCustomElements=function(){return B},x.addValidElements=F,x.setValidElements=G,x.addCustomElements=H,x.addValidChildren=I,x.elements=y}}),g("10",[],function(){return function(a,b){var c,d,e,f,g=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,h=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,i=/\s*([^:]+):\s*([^;]+);?/g,j=/\s+$/,k={},l="\ufeff";for(a=a||{},b&&(e=b.getValidStyles(),f=b.getInvalidStyles()),d=("\\\" \\' \\; \\: ; : "+l).split(" "),c=0;c<d.length;c++)k[d[c]]=l+c,k[l+c]=d[c];var m=function(a,b,c,d){var e=function(a){return a=parseInt(a,10).toString(16),a.length>1?a:"0"+a};return"#"+e(b)+e(c)+e(d)};return{toHex:function(a){return a.replace(g,m)},parse:function(b){var d,e,f,n,o={},p=a.url_converter,q=a.url_converter_scope||this,r=function(a,b,d){var e,f,g,h;if(e=o[a+"-top"+b],e&&(f=o[a+"-right"+b],f&&(g=o[a+"-bottom"+b],g&&(h=o[a+"-left"+b])))){var i=[e,f,g,h];for(c=i.length-1;c--&&i[c]===i[c+1];);c>-1&&d||(o[a+b]=c==-1?i[0]:i.join(" "),delete o[a+"-top"+b],delete o[a+"-right"+b],delete o[a+"-bottom"+b],delete o[a+"-left"+b])}},s=function(a){var b,c=o[a];if(c){for(c=c.split(" "),b=c.length;b--;)if(c[b]!==c[0])return!1;return o[a]=c[0],!0}},t=function(a,b,c,d){s(b)&&s(c)&&s(d)&&(o[a]=o[b]+" "+o[c]+" "+o[d],delete o[b],delete o[c],delete o[d])},u=function(a){return n=!0,k[a]},v=function(a,b){return n&&(a=a.replace(/\uFEFF[0-9]/g,function(a){return k[a]})),b||(a=a.replace(/\\([\'\";:])/g,"$1")),a},w=function(a){return String.fromCharCode(parseInt(a.slice(1),16))},x=function(a){return a.replace(/\\[0-9a-f]+/gi,w)},y=function(b,c,d,e,f,g){if(f=f||g)return f=v(f),"'"+f.replace(/\'/g,"\\'")+"'";if(c=v(c||d||e),!a.allow_script_urls){var h=c.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(h))return"";if(!a.allow_svg_data_urls&&/^data:image\/svg/i.test(h))return""}return p&&(c=p.call(q,c,"style")),"url('"+c.replace(/\'/g,"\\'")+"')"};if(b){for(b=b.replace(/[\u0000-\u001F]/g,""),b=b.replace(/\\[\"\';:\uFEFF]/g,u).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(a){return a.replace(/[;:]/g,u)});d=i.exec(b);)if(i.lastIndex=d.index+d[0].length,e=d[1].replace(j,"").toLowerCase(),f=d[2].replace(j,""),e&&f){if(e=x(e),f=x(f),e.indexOf(l)!==-1||e.indexOf('"')!==-1)continue;if(!a.allow_script_urls&&("behavior"==e||/expression\s*\(|\/\*|\*\//.test(f)))continue;"font-weight"===e&&"700"===f?f="bold":"color"!==e&&"background-color"!==e||(f=f.toLowerCase()),f=f.replace(g,m),f=f.replace(h,y),o[e]=n?v(f,!0):f}r("border","",!0),r("border","-width"),r("border","-color"),r("border","-style"),r("padding",""),r("margin",""),t("border","border-width","border-style","border-color"),"medium none"===o.border&&delete o.border,"none"===o["border-image"]&&delete o["border-image"]}return o},serialize:function(a,b){var c,d,g="",h=function(b){var c,d,f,h;if(c=e[b])for(d=0,f=c.length;d<f;d++)b=c[d],h=a[b],h&&(g+=(g.length>0?" ":"")+b+": "+h+";")},i=function(a,b){var c;return c=f["*"],(!c||!c[a])&&(c=f[b],!c||!c[a])};if(b&&e)h("*"),h(b);else for(c in a)d=a[c],!d||f&&!i(c,b)||(g+=(g.length>0?" ":"")+c+": "+d+";");return g}}}}),g("l",["1j","2","b","m","n","1s","r","1t","s","1u","v","y","10","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=n.each,p=n.is,q=n.grep,r=c.ie,s=/^([a-z0-9],?)+$/i,t=/^[ \t\r\n]*$/,u=function(a,b){var c,d={},e=b.keep_values;return c={set:function(c,d,e){b.url_converter&&(d=b.url_converter.call(b.url_converter_scope||a,d,e,c[0])),c.attr("data-mce-"+e,d).attr(e,d)},get:function(a,b){return a.attr("data-mce-"+b)||a.attr(b)}},d={style:{set:function(a,b){return null!==b&&"object"==typeof b?void a.css(b):(e&&a.attr("data-mce-style",b),void a.attr("style",b))},get:function(b){var c=b.attr("data-mce-style")||b.attr("style");return c=a.serializeStyle(a.parseStyle(c),b[0].nodeName)}}},e&&(d.href=d.src=c),d},v=function(a,b){var c=b.attr("style");c=a.serializeStyle(a.parseStyle(c),b[0].nodeName),c||(c=null),b.attr("data-mce-style",c)},w=function(a,b){var c,d,e=0;if(a)for(c=a.nodeType,a=a.previousSibling;a;a=a.previousSibling)d=a.nodeType,(!b||3!=d||d!=c&&a.nodeValue.length)&&(e++,c=d);return e},x=function(a,c){var f,g=this;g.doc=a,g.win=b,g.files={},g.counter=0,g.stdMode=!r||a.documentMode>=8,g.boxModel=!r||"CSS1Compat"==a.compatMode||g.stdMode,g.styleSheetLoader=new h(a),g.boundEvents=[],g.settings=c=c||{},g.schema=c.schema?c.schema:new l({}),g.styles=new m({url_converter:c.url_converter,url_converter_scope:c.url_converter_scope},c.schema),g.fixDoc(a),g.events=c.ownEvents?new e(c.proxy):e.Event,g.attrHooks=u(g,c),f=g.schema.getBlockElements(),g.$=d.overrideDefaults(function(){return{context:a,element:g.getRoot()}}),g.isBlock=function(a){if(!a)return!1;var b=a.nodeType;return b?!(1!==b||!f[a.nodeName]):!!f[a]}};return x.prototype={$$:function(a){return"string"==typeof a&&(a=this.get(a)),this.$(a)},root:null,fixDoc:function(a){var b,c=this.settings;if(r&&c.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(b){a.createElement(b)});for(b in c.schema.getCustomElements())a.createElement(b)}},clone:function(a,b){var c,d,e=this;return!r||1!==a.nodeType||b?a.cloneNode(b):(d=e.doc,b?c.firstChild:(c=d.createElement(a.nodeName),o(e.getAttribs(a),function(b){e.setAttrib(c,b.nodeName,e.getAttrib(a,b.nodeName))}),c))},getRoot:function(){var a=this;return a.settings.root_element||a.doc.body},getViewPort:function(a){var b,c;return a=a?a:this.win,b=a.document,c=this.boxModel?b.documentElement:b.body,{x:a.pageXOffset||c.scrollLeft,y:a.pageYOffset||c.scrollTop,w:a.innerWidth||c.clientWidth,h:a.innerHeight||c.clientHeight}},getRect:function(a){var b,c,d=this;return a=d.get(a),b=d.getPos(a),c=d.getSize(a),{x:b.x,y:b.y,w:c.w,h:c.h}},getSize:function(a){var b,c,d=this;return a=d.get(a),b=d.getStyle(a,"width"),c=d.getStyle(a,"height"),b.indexOf("px")===-1&&(b=0),c.indexOf("px")===-1&&(c=0),{w:parseInt(b,10)||a.offsetWidth||a.clientWidth,h:parseInt(c,10)||a.offsetHeight||a.clientHeight}},getParent:function(a,b,c){return this.getParents(a,b,c,!1)},getParents:function(a,b,c,d){var e,f=this,g=[];for(a=f.get(a),d=void 0===d,c=c||("BODY"!=f.getRoot().nodeName?f.getRoot().parentNode:null),p(b,"string")&&(e=b,b="*"===b?function(a){return 1==a.nodeType}:function(a){return f.is(a,e)});a&&a!=c&&a.nodeType&&9!==a.nodeType;){if(!b||b(a)){if(!d)return a;g.push(a)}a=a.parentNode}return d?g:null},get:function(a){var b;return a&&this.doc&&"string"==typeof a&&(b=a,a=this.doc.getElementById(a),a&&a.id!==b)?this.doc.getElementsByName(b)[1]:a},getNext:function(a,b){return this._findSib(a,b,"nextSibling")},getPrev:function(a,b){return this._findSib(a,b,"previousSibling")},select:function(a,b){var c=this;return g(a,c.get(b)||c.settings.root_element||c.doc,[])},is:function(a,b){var c;if(!a)return!1;if(void 0===a.length){if("*"===b)return 1==a.nodeType;if(s.test(b)){for(b=b.toLowerCase().split(/,/),a=a.nodeName.toLowerCase(),c=b.length-1;c>=0;c--)if(b[c]==a)return!0;return!1}}if(a.nodeType&&1!=a.nodeType)return!1;var d=a.nodeType?[a]:a;return g(b,d[0].ownerDocument||d[0],null,d).length>0},add:function(a,b,c,d,e){var f=this;return this.run(a,function(a){var g;return g=p(b,"string")?f.doc.createElement(b):b,f.setAttribs(g,c),d&&(d.nodeType?g.appendChild(d):f.setHTML(g,d)),e?g:a.appendChild(g)})},create:function(a,b,c){return this.add(this.doc.createElement(a),a,b,c,1)},createHTML:function(a,b,c){var d,e="";e+="<"+a;for(d in b)b.hasOwnProperty(d)&&null!==b[d]&&"undefined"!=typeof b[d]&&(e+=" "+d+'="'+this.encode(b[d])+'"');return"undefined"!=typeof c?e+">"+c+"</"+a+">":e+" />"},createFragment:function(a){var b,c,d,e=this.doc;for(d=e.createElement("div"),b=e.createDocumentFragment(),a&&(d.innerHTML=a);c=d.firstChild;)b.appendChild(c);return b},remove:function(a,b){return a=this.$$(a),b?a.each(function(){for(var a;a=this.firstChild;)3==a.nodeType&&0===a.data.length?this.removeChild(a):this.parentNode.insertBefore(a,this)}).remove():a.remove(),a.length>1?a.toArray():a[0]},setStyle:function(a,b,c){a=this.$$(a).css(b,c),this.settings.update_styles&&v(this,a)},getStyle:function(a,b,d){return a=this.$$(a),d?a.css(b):(b=b.replace(/-(\D)/g,function(a,b){return b.toUpperCase()}),"float"==b&&(b=c.ie&&c.ie<12?"styleFloat":"cssFloat"),a[0]&&a[0].style?a[0].style[b]:void 0)},setStyles:function(a,b){a=this.$$(a).css(b),this.settings.update_styles&&v(this,a)},removeAllAttribs:function(a){return this.run(a,function(a){var b,c=a.attributes;for(b=c.length-1;b>=0;b--)a.removeAttributeNode(c.item(b))})},setAttrib:function(a,b,c){var d,e,f=this,g=f.settings;""===c&&(c=null),a=f.$$(a),d=a.attr(b),a.length&&(e=f.attrHooks[b],e&&e.set?e.set(a,c,b):a.attr(b,c),d!=c&&g.onSetAttrib&&g.onSetAttrib({attrElm:a,attrName:b,attrValue:c}))},setAttribs:function(a,b){var c=this;c.$$(a).each(function(a,d){
o(b,function(a,b){c.setAttrib(d,b,a)})})},getAttrib:function(a,b,c){var d,e,f=this;return a=f.$$(a),a.length&&(d=f.attrHooks[b],e=d&&d.get?d.get(a,b):a.attr(b)),"undefined"==typeof e&&(e=c||""),e},getPos:function(a,b){return f.getPos(this.doc.body,this.get(a),b)},parseStyle:function(a){return this.styles.parse(a)},serializeStyle:function(a,b){return this.styles.serialize(a,b)},addStyle:function(b){var c,d,e=this,f=e.doc;if(e!==x.DOM&&f===a){var g=x.DOM.addedStyles;if(g=g||[],g[b])return;g[b]=!0,x.DOM.addedStyles=g}d=f.getElementById("mceDefaultStyles"),d||(d=f.createElement("style"),d.id="mceDefaultStyles",d.type="text/css",c=f.getElementsByTagName("head")[0],c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d)),d.styleSheet?d.styleSheet.cssText+=b:d.appendChild(f.createTextNode(b))},loadCSS:function(b){var c,d=this,e=d.doc;return d!==x.DOM&&e===a?void x.DOM.loadCSS(b):(b||(b=""),c=e.getElementsByTagName("head")[0],void o(b.split(","),function(a){var b;a=n._addCacheSuffix(a),d.files[a]||(d.files[a]=!0,b=d.create("link",{rel:"stylesheet",href:a}),r&&e.documentMode&&e.recalc&&(b.onload=function(){e.recalc&&e.recalc(),b.onload=null}),c.appendChild(b))}))},addClass:function(a,b){this.$$(a).addClass(b)},removeClass:function(a,b){this.toggleClass(a,b,!1)},hasClass:function(a,b){return this.$$(a).hasClass(b)},toggleClass:function(a,b,c){this.$$(a).toggleClass(b,c).each(function(){""===this.className&&d(this).attr("class",null)})},show:function(a){this.$$(a).show()},hide:function(a){this.$$(a).hide()},isHidden:function(a){return"none"==this.$$(a).css("display")},uniqueId:function(a){return(a?a:"mce_")+this.counter++},setHTML:function(a,b){a=this.$$(a),r?a.each(function(a,c){if(c.canHaveHTML!==!1){for(;c.firstChild;)c.removeChild(c.firstChild);try{c.innerHTML="<br>"+b,c.removeChild(c.firstChild)}catch(a){d("<div></div>").html("<br>"+b).contents().slice(1).appendTo(c)}return b}}):a.html(b)},getOuterHTML:function(a){return a=this.get(a),1==a.nodeType&&"outerHTML"in a?a.outerHTML:d("<div></div>").append(d(a).clone()).html()},setOuterHTML:function(a,b){var c=this;c.$$(a).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=b)}catch(a){}c.remove(d(this).html(b),!0)})},decode:k.decode,encode:k.encodeAllRaw,insertAfter:function(a,b){return b=this.get(b),this.run(a,function(a){var c,d;return c=b.parentNode,d=b.nextSibling,d?c.insertBefore(a,d):c.appendChild(a),a})},replace:function(a,b,c){var d=this;return d.run(b,function(b){return p(b,"array")&&(a=a.cloneNode(!0)),c&&o(q(b.childNodes),function(b){a.appendChild(b)}),b.parentNode.replaceChild(a,b)})},rename:function(a,b){var c,d=this;return a.nodeName!=b.toUpperCase()&&(c=d.create(b),o(d.getAttribs(a),function(b){d.setAttrib(c,b.nodeName,d.getAttrib(a,b.nodeName))}),d.replace(c,a,1)),c||a},findCommonAncestor:function(a,b){for(var c,d=a;d;){for(c=b;c&&d!=c;)c=c.parentNode;if(d==c)break;d=d.parentNode}return!d&&a.ownerDocument?a.ownerDocument.documentElement:d},toHex:function(a){return this.styles.toHex(n.trim(a))},run:function(a,b,c){var d,e=this;return"string"==typeof a&&(a=e.get(a)),!!a&&(c=c||this,a.nodeType||!a.length&&0!==a.length?b.call(c,a):(d=[],o(a,function(a,f){a&&("string"==typeof a&&(a=e.get(a)),d.push(b.call(c,a,f)))}),d))},getAttribs:function(a){var b;if(a=this.get(a),!a)return[];if(r){if(b=[],"OBJECT"==a.nodeName)return a.attributes;"OPTION"===a.nodeName&&this.getAttrib(a,"selected")&&b.push({specified:1,nodeName:"selected"});var c=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return a.cloneNode(!1).outerHTML.replace(c,"").replace(/[\w:\-]+/gi,function(a){b.push({specified:1,nodeName:a})}),b}return a.attributes},isEmpty:function(a,b){var c,d,e,f,g,h,j=this,k=0;if(a=a.firstChild){g=new i(a,a.parentNode),b=b||(j.schema?j.schema.getNonEmptyElements():null),f=j.schema?j.schema.getWhiteSpaceElements():{};do{if(e=a.nodeType,1===e){var l=a.getAttribute("data-mce-bogus");if(l){a=g.next("all"===l);continue}if(h=a.nodeName.toLowerCase(),b&&b[h]){if("br"===h){k++,a=g.next();continue}return!1}for(d=j.getAttribs(a),c=d.length;c--;)if(h=d[c].nodeName,"name"===h||"data-mce-bookmark"===h)return!1}if(8==e)return!1;if(3===e&&!t.test(a.nodeValue))return!1;if(3===e&&a.parentNode&&f[a.parentNode.nodeName]&&t.test(a.nodeValue))return!1;a=g.next()}while(a)}return k<=1},createRng:function(){return this.doc.createRange()},nodeIndex:w,split:function(a,b,c){var d,e,f,g=this,h=g.createRng();if(a&&b)return h.setStart(a.parentNode,g.nodeIndex(a)),h.setEnd(b.parentNode,g.nodeIndex(b)),d=h.extractContents(),h=g.createRng(),h.setStart(b.parentNode,g.nodeIndex(b)+1),h.setEnd(a.parentNode,g.nodeIndex(a)+1),e=h.extractContents(),f=a.parentNode,f.insertBefore(j.trimNode(g,d),a),c?f.insertBefore(c,a):f.insertBefore(b,a),f.insertBefore(j.trimNode(g,e),a),g.remove(a),c||b},bind:function(a,b,c,d){var e=this;if(n.isArray(a)){for(var f=a.length;f--;)a[f]=e.bind(a[f],b,c,d);return a}return!e.settings.collect||a!==e.doc&&a!==e.win||e.boundEvents.push([a,b,c,d]),e.events.bind(a,b,c,d||e)},unbind:function(a,b,c){var d,e=this;if(n.isArray(a)){for(d=a.length;d--;)a[d]=e.unbind(a[d],b,c);return a}if(e.boundEvents&&(a===e.doc||a===e.win))for(d=e.boundEvents.length;d--;){var f=e.boundEvents[d];a!=f[0]||b&&b!=f[1]||c&&c!=f[2]||this.events.unbind(f[0],f[1],f[2])}return this.events.unbind(a,b,c)},fire:function(a,b,c){return this.events.fire(a,b,c)},getContentEditable:function(a){var b;return a&&1==a.nodeType?(b=a.getAttribute("data-mce-contenteditable"),b&&"inherit"!==b?b:"inherit"!==a.contentEditable?a.contentEditable:null):null},getContentEditableParent:function(a){for(var b=this.getRoot(),c=null;a&&a!==b&&(c=this.getContentEditable(a),null===c);a=a.parentNode);return c},destroy:function(){var a=this;if(a.boundEvents){for(var b=a.boundEvents.length;b--;){var c=a.boundEvents[b];this.events.unbind(c[0],c[1],c[2])}a.boundEvents=null}g.setDocument&&g.setDocument(),a.win=a.doc=a.root=a.events=a.frag=null},isChildOf:function(a,b){for(;a;){if(b===a)return!0;a=a.parentNode}return!1},dumpRng:function(a){return"startContainer: "+a.startContainer.nodeName+", startOffset: "+a.startOffset+", endContainer: "+a.endContainer.nodeName+", endOffset: "+a.endOffset},_findSib:function(a,b,c){var d=this,e=b;if(a)for("string"==typeof e&&(e=function(a){return d.is(a,b)}),a=a[c];a;a=a[c])if(e(a))return a;return null}},x.DOM=new x(a),x.nodeIndex=w,x}),g("o",["1j","l","1e"],function(a,b,c){var d=b.DOM,e=c.each,f=c.grep,g=function(a){return"function"==typeof a},h=function(){var b,h=0,i=1,j=2,k=3,l={},m=[],n={},o=[],p=0,q=function(b,e,f){var h,i,j=d,k=function(){j.remove(i),h&&(h.onreadystatechange=h.onload=h=null),e()},l=function(){g(f)?f():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+b)};i=j.uniqueId(),h=a.createElement("script"),h.id=i,h.type="text/javascript",h.src=c._addCacheSuffix(b),"onreadystatechange"in h?h.onreadystatechange=function(){/loaded|complete/.test(h.readyState)&&k()}:h.onload=k,h.onerror=l,(a.getElementsByTagName("head")[0]||a.body).appendChild(h)};this.isDone=function(a){return l[a]==j},this.markDone=function(a){l[a]=j},this.add=this.load=function(a,c,d,e){var f=l[a];f==b&&(m.push(a),l[a]=h),c&&(n[a]||(n[a]=[]),n[a].push({success:c,failure:e,scope:d||this}))},this.remove=function(a){delete l[a],delete n[a]},this.loadQueue=function(a,b,c){this.loadScripts(m,a,b,c)},this.loadScripts=function(a,c,d,h){var m,r=[],s=function(a,c){e(n[c],function(b){g(b[a])&&b[a].call(b.scope)}),n[c]=b};o.push({success:c,failure:h,scope:d||this}),(m=function(){var b=f(a);if(a.length=0,e(b,function(a){return l[a]===j?void s("success",a):l[a]===k?void s("failure",a):void(l[a]!==i&&(l[a]=i,p++,q(a,function(){l[a]=j,p--,s("success",a),m()},function(){l[a]=k,p--,r.push(a),s("failure",a),m()})))}),!p){var c=o.slice(0);o.length=0,e(c,function(a){0===r.length?g(a.success)&&a.success.call(a.scope):g(a.failure)&&a.failure.call(a.scope,r)})}})()}};return h.ScriptLoader=new h,h}),g("6",["1i","o","1e"],function(a,b,c){var d=c.each,e=function(){var a=this;a.items=[],a.urls={},a.lookup={},a._listeners=[]};return e.prototype={get:function(a){if(this.lookup[a])return this.lookup[a].instance},dependencies:function(a){var b;return this.lookup[a]&&(b=this.lookup[a].dependencies),b||[]},requireLangPack:function(a,c){var d=e.language;if(d&&e.languageLoad!==!1){if(c)if(c=","+c+",",c.indexOf(","+d.substr(0,2)+",")!=-1)d=d.substr(0,2);else if(c.indexOf(","+d+",")==-1)return;b.ScriptLoader.add(this.urls[a]+"/langs/"+d+".js")}},add:function(b,c,e){this.items.push(c),this.lookup[b]={instance:c,dependencies:e};var f=a.partition(this._listeners,function(a){return a.name===b});return this._listeners=f.fail,d(f.pass,function(a){a.callback()}),c},remove:function(a){delete this.urls[a],delete this.lookup[a]},createUrl:function(a,b){return"object"==typeof b?b:{prefix:a.prefix,resource:b,suffix:a.suffix}},addComponents:function(a,c){var e=this.urls[a];d(c,function(a){b.ScriptLoader.add(e+"/"+a)})},load:function(a,c,f,g,h){var i=this,j=c,k=function(){var e=i.dependencies(a);d(e,function(a){var b=i.createUrl(c,a);i.load(b.resource,b,void 0,void 0)}),f&&(g?f.call(g):f.call(b))};i.urls[a]||("object"==typeof c&&(j=c.prefix+c.resource+c.suffix),0!==j.indexOf("/")&&j.indexOf("://")==-1&&(j=e.baseURL+"/"+j),i.urls[a]=j.substring(0,j.lastIndexOf("/")),i.lookup[a]?k():b.ScriptLoader.add(j,k,g,h))},waitFor:function(a,b){this.lookup.hasOwnProperty(a)?b():this._listeners.push({name:a,callback:b})}},e.PluginManager=new e,e.ThemeManager=new e,e}),g("2z",[],function(){var a="\ufeff",b=function(b){return b===a},c=function(b){return b.replace(new RegExp(a,"g"),"")};return{isZwsp:b,ZWSP:a,trim:c}}),g("2x",["1j","1y","2z"],function(a,b,c){var d=b.isElement,e=b.isText,f=function(a){return e(a)&&(a=a.parentNode),d(a)&&a.hasAttribute("data-mce-caret")},g=function(a){return e(a)&&c.isZwsp(a.data)},h=function(a){return f(a)||g(a)},i=function(a){return a.firstChild!==a.lastChild||!b.isBr(a.firstChild)},j=function(a,b){var d,f,g,i;if(d=a.ownerDocument,g=d.createTextNode(c.ZWSP),i=a.parentNode,b){if(f=a.previousSibling,e(f)){if(h(f))return f;if(r(f))return f.splitText(f.data.length-1)}i.insertBefore(g,a)}else{if(f=a.nextSibling,e(f)){if(h(f))return f;if(q(f))return f.splitText(1),f}a.nextSibling?i.insertBefore(g,a.nextSibling):i.appendChild(g)}return g},k=function(a){if(b.isText(a)){var d=a.data;return d.length>0&&d.charAt(0)!==c.ZWSP&&a.insertData(0,c.ZWSP),a}return null},l=function(a){if(b.isText(a)){var d=a.data;return d.length>0&&d.charAt(d.length-1)!==c.ZWSP&&a.insertData(d.length,c.ZWSP),a}return null},m=function(a){return a&&b.isText(a.container())&&a.container().data.charAt(a.offset())===c.ZWSP},n=function(a){return a&&b.isText(a.container())&&a.container().data.charAt(a.offset()-1)===c.ZWSP},o=function(){var b=a.createElement("br");return b.setAttribute("data-mce-bogus","1"),b},p=function(a,b,c){var d,e,f;return d=b.ownerDocument,e=d.createElement(a),e.setAttribute("data-mce-caret",c?"before":"after"),e.setAttribute("data-mce-bogus","all"),e.appendChild(o()),f=b.parentNode,c?f.insertBefore(e,b):b.nextSibling?f.insertBefore(e,b.nextSibling):f.appendChild(e),e},q=function(a){return e(a)&&a.data[0]==c.ZWSP},r=function(a){return e(a)&&a.data[a.data.length-1]==c.ZWSP},s=function(a){var c=a.getElementsByTagName("br"),d=c[c.length-1];b.isBogus(d)&&d.parentNode.removeChild(d)},t=function(a){return a&&a.hasAttribute("data-mce-caret")?(s(a),a.removeAttribute("data-mce-caret"),a.removeAttribute("data-mce-bogus"),a.removeAttribute("style"),a.removeAttribute("_moz_abspos"),a):null};return{isCaretContainer:h,isCaretContainerBlock:f,isCaretContainerInline:g,showCaretContainerBlock:t,insertInline:j,prependInline:k,appendInline:l,isBeforeInline:m,isAfterInline:n,insertBlock:p,hasContent:i,startsWithCaretContainer:q,endsWithCaretContainer:r}}),g("3m",["1y","1r","2x"],function(a,b,c){var d=a.isContentEditableTrue,e=a.isContentEditableFalse,f=a.isBr,g=a.isText,h=a.matchNodeNames("script style textarea"),i=a.matchNodeNames("img input textarea hr iframe video audio object"),j=a.matchNodeNames("table"),k=c.isCaretContainer,l=function(a){return!k(a)&&(g(a)?!h(a.parentNode):i(a)||f(a)||j(a)||e(a))},m=function(a,b){for(a=a.parentNode;a&&a!=b;a=a.parentNode){if(e(a))return!1;if(d(a))return!0}return!0},n=function(a){return!!e(a)&&b.reduce(a.getElementsByTagName("*"),function(a,b){return a||d(b)},!1)!==!0},o=function(a){return i(a)||n(a)},p=function(a,b){return l(a)&&m(a,b)};return{isCaretCandidate:l,isInEditable:m,isAtomic:o,isEditableCaretCandidate:p}}),g("3n",[],function(){var a=Math.round,b=function(b){return b?{left:a(b.left),top:a(b.top),bottom:a(b.bottom),right:a(b.right),width:a(b.width),height:a(b.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},c=function(a,c){return a=b(a),c?a.right=a.left:(a.left=a.left+a.width,a.right=a.left),a.width=0,a},d=function(a,b){return a.left===b.left&&a.top===b.top&&a.bottom===b.bottom&&a.right===b.right},e=function(a,b,c){return a>=0&&a<=Math.min(b.height,c.height)/2},f=function(a,b){return a.bottom-a.height/2<b.top||!(a.top>b.bottom)&&e(b.top-a.bottom,a,b)},g=function(a,b){return a.top>b.bottom||!(a.bottom<b.top)&&e(b.bottom-a.top,a,b)},h=function(a,b){return a.left<b.left},i=function(a,b){return a.right>b.right},j=function(a,b){return f(a,b)?-1:g(a,b)?1:h(a,b)?-1:i(a,b)?1:0},k=function(a,b,c){return b>=a.left&&b<=a.right&&c>=a.top&&c<=a.bottom};return{clone:b,collapse:c,isEqual:d,isAbove:f,isBelow:g,isLeft:h,isRight:i,compare:j,containsXY:k}}),g("2t",[],function(){var a=function(a){var b=a.startContainer,c=a.startOffset;return b.hasChildNodes()&&a.endOffset==c+1?b.childNodes[c]:null},b=function(a,b){return 1===a.nodeType&&a.hasChildNodes()&&(b>=a.childNodes.length&&(b=a.childNodes.length-1),a=a.childNodes[b]),a};return{getSelectedNode:a,getNode:b}}),g("3o",[],function(){var a=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),b=function(b){return"string"==typeof b&&b.charCodeAt(0)>=768&&a.test(b)};return{isExtendingChar:b}}),g("3p",[],function(){var a=[].slice,b=function(a){return function(){return a}},c=function(a){return function(b){return!a(b)}},d=function(a,b){return function(c){return a(b(c))}},e=function(){var b=a.call(arguments);return function(a){for(var c=0;c<b.length;c++)if(b[c](a))return!0;return!1}},f=function(){var b=a.call(arguments);return function(a){for(var c=0;c<b.length;c++)if(!b[c](a))return!1;return!0}},g=function(b){var c=a.call(arguments);return c.length-1>=b.length?b.apply(this,c.slice(1)):function(){var a=c.concat([].slice.call(arguments));return g.apply(this,a)}},h=function(){};return{constant:b,negate:c,and:f,or:e,curry:g,compose:d,noop:h}}),g("2y",["3m","l","1y","3n","2t","3o","3p"],function(a,b,c,d,e,f,g){var h=c.isElement,i=a.isCaretCandidate,j=c.matchStyleValues("display","block table"),k=c.matchStyleValues("float","left right"),l=g.and(h,i,g.negate(k)),m=g.negate(c.matchStyleValues("white-space","pre pre-line pre-wrap")),n=c.isText,o=c.isBr,p=b.nodeIndex,q=e.getNode,r=function(a){return"createRange"in a?a.createRange():b.DOM.createRng()},s=function(a){return a&&/[\r\n\t ]/.test(a)},t=function(a){var b,c=a.startContainer,d=a.startOffset;return!!(s(a.toString())&&m(c.parentNode)&&(b=c.data,s(b[d-1])||s(b[d+1])))},u=function(a){var b,c,e=[],g=function(a){var b,c=a.ownerDocument,e=r(c),f=c.createTextNode("\xa0"),g=a.parentNode;return g.insertBefore(f,a),e.setStart(f,0),e.setEnd(f,1),b=d.clone(e.getBoundingClientRect()),g.removeChild(f),b},i=function(a){var b,c;return c=a.getClientRects(),b=c.length>0?d.clone(c[0]):d.clone(a.getBoundingClientRect()),o(a)&&0===b.left?g(a):b},k=function(a,b){return a=d.collapse(a,b),a.width=1,a.right=a.left+1,a},m=function(a){0!==a.height&&(e.length>0&&d.isEqual(a,e[e.length-1])||e.push(a))},p=function(a,b){var c=r(a.ownerDocument);if(b<a.data.length){if(f.isExtendingChar(a.data[b]))return e;if(f.isExtendingChar(a.data[b-1])&&(c.setStart(a,b),c.setEnd(a,b+1),!t(c)))return m(k(i(c),!1)),e}b>0&&(c.setStart(a,b-1),c.setEnd(a,b),t(c)||m(k(i(c),!1))),b<a.data.length&&(c.setStart(a,b),c.setEnd(a,b+1),t(c)||m(k(i(c),!0)))};if(n(a.container()))return p(a.container(),a.offset()),e;if(h(a.container()))if(a.isAtEnd())c=q(a.container(),a.offset()),n(c)&&p(c,c.data.length),l(c)&&!o(c)&&m(k(i(c),!1));else{if(c=q(a.container(),a.offset()),n(c)&&p(c,0),l(c)&&a.isAtEnd())return m(k(i(c),!1)),e;b=q(a.container(),a.offset()-1),l(b)&&!o(b)&&(j(b)||j(c)||!l(c))&&m(k(i(b),!1)),l(c)&&m(k(i(c),!0))}return e},v=function(a,b,c){var d=function(){return n(a)?0===b:0===b},e=function(){return n(a)?b>=a.data.length:b>=a.childNodes.length},f=function(){var c;return c=r(a.ownerDocument),c.setStart(a,b),c.setEnd(a,b),c},h=function(){return c||(c=u(new v(a,b))),c},i=function(){return h().length>0},j=function(c){return c&&a===c.container()&&b===c.offset()},k=function(c){return q(a,c?b-1:b)};return{container:g.constant(a),offset:g.constant(b),toRange:f,getClientRects:h,isVisible:i,isAtStart:d,isAtEnd:e,isEqual:j,getNode:k}};return v.fromRangeStart=function(a){return new v(a.startContainer,a.startOffset)},v.fromRangeEnd=function(a){return new v(a.endContainer,a.endOffset)},v.after=function(a){return new v(a.parentNode,p(a)+1)},v.before=function(a){return new v(a.parentNode,p(a))},v.isAtStart=function(a){return!!a&&a.isAtStart()},v.isAtEnd=function(a){return!!a&&a.isAtEnd()},v.isTextPosition=function(a){return!!a&&c.isText(a.container())},v}),g("53",["3p","s","1y","2y","2x","3m"],function(a,b,c,d,e,f){var g=c.isContentEditableTrue,h=c.isContentEditableFalse,i=c.matchStyleValues("display","block table table-cell table-caption list-item"),j=e.isCaretContainer,k=e.isCaretContainerBlock,l=a.curry,m=c.isElement,n=f.isCaretCandidate,o=function(a){return a>0},p=function(a){return a<0},q=function(a,b){for(var c;c=a(b);)if(!k(c))return c;return null},r=function(a,c,d,e,f){var g=new b(a,e);if(p(c)){if((h(a)||k(a))&&(a=q(g.prev,!0),d(a)))return a;for(;a=q(g.prev,f);)if(d(a))return a}if(o(c)){if((h(a)||k(a))&&(a=q(g.next,!0),d(a)))return a;for(;a=q(g.next,f);)if(d(a))return a}return null},s=function(a,b){for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(g(a))return a;return b},t=function(a,b){for(;a&&a!=b;){if(i(a))return a;a=a.parentNode}return null},u=function(a,b,c){return t(a.container(),c)==t(b.container(),c)},v=function(a,b,c){return s(a.container(),c)==s(b.container(),c)},w=function(a,b){var c,d;return b?(c=b.container(),d=b.offset(),m(c)?c.childNodes[d+a]:null):null},x=function(a,b){var c=b.ownerDocument.createRange();return a?(c.setStartBefore(b),c.setEndBefore(b)):(c.setStartAfter(b),c.setEndAfter(b)),c},y=function(a,b,c){return t(b,a)==t(c,a)},z=function(a,b,c){var d,e;for(e=a?"previousSibling":"nextSibling";c&&c!=b;){if(d=c[e],j(d)&&(d=d[e]),h(d)){if(y(b,d,c))return d;break}if(n(d))break;c=c.parentNode}return null},A=l(x,!0),B=l(x,!1),C=function(a,b,d){var f,g,i,k,n=l(z,!0,b),o=l(z,!1,b);if(g=d.startContainer,i=d.startOffset,e.isCaretContainerBlock(g)){if(m(g)||(g=g.parentNode),k=g.getAttribute("data-mce-caret"),"before"==k&&(f=g.nextSibling,h(f)))return A(f);if("after"==k&&(f=g.previousSibling,h(f)))return B(f)}if(!d.collapsed)return d;if(c.isText(g)){if(j(g)){if(1===a){if(f=o(g))return A(f);if(f=n(g))return B(f)}if(a===-1){if(f=n(g))return B(f);if(f=o(g))return A(f)}return d}if(e.endsWithCaretContainer(g)&&i>=g.data.length-1)return 1===a&&(f=o(g))?A(f):d;if(e.startsWithCaretContainer(g)&&i<=1)return a===-1&&(f=n(g))?B(f):d;if(i===g.data.length)return f=o(g),f?A(f):d;if(0===i)return f=n(g),f?B(f):d}return d},D=function(a,b){return h(w(a,b))};return{isForwards:o,isBackwards:p,findNode:r,getEditingHost:s,getParentBlock:t,isInSameBlock:u,isInSameEditingHost:v,isBeforeContentEditableFalse:l(D,0),isAfterContentEditableFalse:l(D,-1),normalizeRange:C}}),g("3q",["1y","3m","2y","53","1r","3p"],function(a,b,c,d,e,f){var g=a.isContentEditableFalse,h=a.isText,i=a.isElement,j=a.isBr,k=d.isForwards,l=d.isBackwards,m=b.isCaretCandidate,n=b.isAtomic,o=b.isEditableCaretCandidate,p=function(a,b){for(var c=[];a&&a!=b;)c.push(a),a=a.parentNode;return c},q=function(a,b){return a.hasChildNodes()&&b<a.childNodes.length?a.childNodes[b]:null},r=function(a,b){if(k(a)){if(m(b.previousSibling)&&!h(b.previousSibling))return c.before(b);if(h(b))return c(b,0)}if(l(a)){if(m(b.nextSibling)&&!h(b.nextSibling))return c.after(b);if(h(b))return c(b,b.data.length)}return l(a)?j(b)?c.before(b):c.after(b):c.before(b)},s=function(b,e){var f;return!!a.isBr(b)&&(f=t(1,c.after(b),e),!!f&&!d.isInSameBlock(c.before(b),c.before(f),e))},t=function(a,b,u){var v,w,x,y,z,A,B;if(!i(u)||!b)return null;if(b.isEqual(c.after(u))&&u.lastChild){if(B=c.after(u.lastChild),l(a)&&m(u.lastChild)&&i(u.lastChild))return j(u.lastChild)?c.before(u.lastChild):B}else B=b;if(v=B.container(),w=B.offset(),h(v)){if(l(a)&&w>0)return c(v,--w);if(k(a)&&w<v.length)return c(v,++w);x=v}else{if(l(a)&&w>0&&(y=q(v,w-1),m(y)))return!n(y)&&(z=d.findNode(y,a,o,y))?h(z)?c(z,z.data.length):c.after(z):h(y)?c(y,y.data.length):c.before(y);if(k(a)&&w<v.childNodes.length&&(y=q(v,w),m(y)))return s(y,u)?t(a,c.after(y),u):!n(y)&&(z=d.findNode(y,a,o,y))?h(z)?c(z,0):c.before(z):h(y)?c(y,0):c.after(y);x=B.getNode()}return(k(a)&&B.isAtEnd()||l(a)&&B.isAtStart())&&(x=d.findNode(x,a,f.constant(!0),u,!0),o(x))?r(a,x):(y=d.findNode(x,a,o,u),A=e.last(e.filter(p(v,u),g)),!A||y&&A.contains(y)?y?r(a,y):null:B=k(a)?c.after(A):c.before(A))};return function(a){return{next:function(b){return t(1,b,a)},prev:function(b){return t(-1,b,a)}}}}),g("3l",["2y","3q","1y","1e"],function(a,b,c,d){var e=function(a){return a.firstChild&&a.firstChild===a.lastChild},f=function(a){return"br"===a.name||"\xa0"===a.value},g=function(a,b){var c=a.getBlockElements();return c[b.name]&&e(b)&&f(b.firstChild)},h=function(a,b){var c=a.getNonEmptyElements();return b&&(b.isEmpty(c)||g(a,b))},i=function(a,b){var c=b.firstChild,d=b.lastChild;return c&&"meta"===c.name&&(c=c.next),d&&"mce_marker"===d.attr("id")&&(d=d.prev),h(a,d)&&(d=d.prev),!(!c||c!==d)&&("ul"===c.name||"ol"===c.name)},j=function(a){var b=a.firstChild,c=a.lastChild;return b&&"META"===b.nodeName&&b.parentNode.removeChild(b),c&&"mce_marker"===c.id&&c.parentNode.removeChild(c),a},k=function(a,b,c){var d=b.serialize(c),e=a.createFragment(d);return j(e)},l=function(a){return d.grep(a.childNodes,function(a){return"LI"===a.nodeName})},m=function(a){return"\xa0"===a.data||c.isBr(a)},n=function(a){return a&&a.firstChild&&a.firstChild===a.lastChild&&m(a.firstChild)},o=function(a){return!a.firstChild||n(a)},p=function(a){return a.length>0&&o(a[a.length-1])?a.slice(0,-1):a},q=function(a,b){var c=a.getParent(b,a.isBlock);return c&&"LI"===c.nodeName?c:null},r=function(a,b){return!!q(a,b)},s=function(a,b){var c=b.cloneRange(),d=b.cloneRange();return c.setStartBefore(a),d.setEndAfter(a),[c.cloneContents(),d.cloneContents()]},t=function(c,d){var e=a.before(c),f=new b(d),g=f.next(e);return g?g.toRange():null},u=function(c,d){var e=a.after(c),f=new b(d),g=f.prev(e);return g?g.toRange():null},v=function(a,b,c,e){var f=s(a,e),g=a.parentNode;return g.insertBefore(f[0],a),d.each(b,function(b){g.insertBefore(b,a)}),g.insertBefore(f[1],a),g.removeChild(a),u(b[b.length-1],c)},w=function(a,b,c){var e=a.parentNode;return d.each(b,function(b){e.insertBefore(b,a)}),t(a,c)},x=function(a,b,c,d){return d.insertAfter(b.reverse(),a),u(b[0],c)},y=function(c,d,e,f){var g=k(d,c,f),h=q(d,e.startContainer),i=p(l(g.firstChild)),j=1,m=2,n=d.getRoot(),o=function(c){var f=a.fromRangeStart(e),g=new b(d.getRoot()),i=c===j?g.prev(f):g.next(f);return!i||q(d,i.getNode())!==h};return o(j)?w(h,i,n):o(m)?x(h,i,n,d):v(h,i,n,e)};return{isListFragment:i,insertAtCaret:y,isParentBlockLi:r,trimListItems:p,listItems:l}}),g("2w",["1y","l","3p","1r","2y"],function(a,b,c,d,e){var f=a.isText,g=a.isBogus,h=b.nodeIndex,i=function(a){var b=a.parentNode;return g(b)?i(b):b},j=function(a){return a?d.reduce(a.childNodes,function(a,b){return g(b)&&"BR"!=b.nodeName?a=a.concat(j(b)):a.push(b),a},[]):[]},k=function(a,b){for(;(a=a.previousSibling)&&f(a);)b+=a.data.length;return b},l=function(a){return function(b){return a===b}},m=function(b){var c,e,g;return c=j(i(b)),e=d.findIndex(c,l(b),b),c=c.slice(0,e+1),g=d.reduce(c,function(a,b,d){return f(b)&&f(c[d-1])&&a++,a},0),c=d.filter(c,a.matchNodeNames(b.nodeName)),e=d.findIndex(c,l(b),b),e-g},n=function(a){var b;return b=f(a)?"text()":a.nodeName.toLowerCase(),b+"["+m(a)+"]"},o=function(a,b,c){var d=[];for(b=b.parentNode;b!=a&&(!c||!c(b));b=b.parentNode)d.push(b);return d},p=function(b,e){var g,h,i,j,l,m=[];return g=e.container(),h=e.offset(),f(g)?i=k(g,h):(j=g.childNodes,h>=j.length?(i="after",h=j.length-1):i="before",g=j[h]),m.push(n(g)),l=o(b,g),l=d.filter(l,c.negate(a.isBogus)),m=m.concat(d.map(l,function(a){return n(a)})),m.reverse().join("/")+","+i},q=function(b,c,e){var g=j(b);return g=d.filter(g,function(a,b){return!f(a)||!f(g[b-1])}),g=d.filter(g,a.matchNodeNames(c)),g[e]},r=function(a,b){for(var c,d=a,g=0;f(d);){if(c=d.data.length,b>=g&&b<=g+c){a=d,b-=g;break}if(!f(d.nextSibling)){a=d,b=c;break}g+=c,d=d.nextSibling}return b>a.data.length&&(b=a.data.length),new e(a,b)},s=function(a,b){var c,g,i;return b?(c=b.split(","),b=c[0].split("/"),i=c.length>1?c[1]:"before",g=d.reduce(b,function(a,b){return(b=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(b))?("text()"===b[1]&&(b[1]="#text"),q(a,b[1],parseInt(b[2],10))):null},a),g?f(g)?r(g,parseInt(i,10)):(i="after"===i?h(g)+1:h(g),new e(g.parentNode,i)):null):null};return{create:p,resolve:s}}),g("j",["b","2w","2x","2y","1y","2t","2z","1e"],function(a,b,c,d,e,f,g,h){var i=e.isContentEditableFalse,j=function(a,b){var c,d;for(d=g.trim(a.data.slice(0,b)).length,c=a.previousSibling;c&&3===c.nodeType;c=c.previousSibling)d+=g.trim(c.data).length;return d},k=function(a){e.isText(a)&&0===a.data.length&&a.parentNode.removeChild(a)},l=function(g){var l=g.dom;this.getBookmark=function(a,m){var n,o,p,q,r,s,t,u="&#xFEFF;",v=function(a,b){var c=0;return h.each(l.select(a),function(a){if("all"!==a.getAttribute("data-mce-bogus"))return a!=b&&void c++}),c},w=function(a){var b=function(b){var c,d,e,f=b?"start":"end";c=a[f+"Container"],d=a[f+"Offset"],1==c.nodeType&&"TR"==c.nodeName&&(e=c.childNodes,c=e[Math.min(b?d:d-1,e.length-1)],c&&(d=b?0:c.childNodes.length,a["set"+(b?"Start":"End")](c,d)))};return b(!0),b(),a},x=function(a){var b=l.getRoot(),c={},d=function(a,c){var d,e=a[c?"startContainer":"endContainer"],f=a[c?"startOffset":"endOffset"],g=[],h=0;for(3===e.nodeType?g.push(m?j(e,f):f):(d=e.childNodes,f>=d.length&&d.length&&(h=1,f=Math.max(0,d.length-1)),g.push(l.nodeIndex(d[f],m)+h));e&&e!=b;e=e.parentNode)g.push(l.nodeIndex(e,m));return g};return c.start=d(a,!0),g.isCollapsed()||(c.end=d(a)),c},y=function(a){var b=function(a,b){var d;if(e.isElement(a)&&(a=f.getNode(a,b),i(a)))return a;if(c.isCaretContainer(a)){if(e.isText(a)&&c.isCaretContainerBlock(a)&&(a=a.parentNode),d=a.previousSibling,i(d))return d;if(d=a.nextSibling,i(d))return d}};return b(a.startContainer,a.startOffset)||b(a.endContainer,a.endOffset)};if(2==a)return s=g.getNode(),r=s?s.nodeName:null,n=g.getRng(),i(s)||"IMG"==r?{name:r,index:v(r,s)}:(s=y(n),s?(r=s.tagName,{name:r,index:v(r,s)}):x(n));if(3==a)return n=g.getRng(),{start:b.create(l.getRoot(),d.fromRangeStart(n)),end:b.create(l.getRoot(),d.fromRangeEnd(n))};if(a)return{rng:g.getRng()};if(n=g.getRng(),p=l.uniqueId(),q=g.isCollapsed(),t="overflow:hidden;line-height:0px",s=g.getNode(),r=s.nodeName,"IMG"==r)return{name:r,index:v(r,s)};if(o=w(n.cloneRange()),!q){o.collapse(!1);var z=l.create("span",{"data-mce-type":"bookmark",id:p+"_end",style:t},u);o.insertNode(z),k(z.nextSibling)}n=w(n),n.collapse(!0);var A=l.create("span",{"data-mce-type":"bookmark",id:p+"_start",style:t},u);return n.insertNode(A),k(A.previousSibling),g.moveToBookmark({id:p,keep:1}),{id:p}},this.moveToBookmark=function(c){var d,e,f,i,j,k,m=function(a){var b,f,g,h,i=c[a?"start":"end"];if(i){for(g=i[0],f=e,b=i.length-1;b>=1;b--){if(h=f.childNodes,i[b]>h.length-1)return;f=h[i[b]]}3===f.nodeType&&(g=Math.min(i[0],f.nodeValue.length)),1===f.nodeType&&(g=Math.min(i[0],f.childNodes.length)),a?d.setStart(f,g):d.setEnd(f,g)}return!0},n=function(b){var d,e,g,m,n=l.get(c.id+"_"+b),o=c.keep;if(n&&(d=n.parentNode,"start"==b?(o?(d=n.firstChild,e=1):e=l.nodeIndex(n),f=i=d,j=k=e):(o?(d=n.firstChild,e=1):e=l.nodeIndex(n),i=d,k=e),!o)){for(m=n.previousSibling,g=n.nextSibling,h.each(h.grep(n.childNodes),function(a){3==a.nodeType&&(a.nodeValue=a.nodeValue.replace(/\uFEFF/g,""))});n=l.get(c.id+"_"+b);)l.remove(n,1);m&&g&&m.nodeType==g.nodeType&&3==m.nodeType&&!a.opera&&(e=m.nodeValue.length,m.appendData(g.nodeValue),l.remove(g),"start"==b?(f=i=m,j=k=e):(i=m,k=e))}},o=function(b){return!l.isBlock(b)||b.innerHTML||a.ie||(b.innerHTML='<br data-mce-bogus="1" />'),b},p=function(){var a,d;return a=l.createRng(),d=b.resolve(l.getRoot(),c.start),a.setStart(d.container(),d.offset()),d=b.resolve(l.getRoot(),c.end),a.setEnd(d.container(),d.offset()),a};c&&(h.isArray(c.start)?(d=l.createRng(),e=l.getRoot(),m(!0)&&m()&&g.setRng(d)):"string"==typeof c.start?g.setRng(p(c)):c.id?(n("start"),n("end"),f&&(d=l.createRng(),d.setStart(o(f),j),d.setEnd(o(i),k),g.setRng(d))):c.name?g.select(l.select(c.name)[c.index]):c.rng&&g.setRng(c.rng))}};return l.isBookmarkNode=function(a){return a&&"SPAN"===a.tagName&&"bookmark"===a.getAttribute("data-mce-type")},l}),g("3r",["j","1e"],function(a,b){var c=b.each,d=function(b){this.compare=function(d,e){if(d.nodeName!=e.nodeName)return!1;var f=function(a){var d={};return c(b.getAttribs(a),function(c){var e=c.nodeName.toLowerCase();0!==e.indexOf("_")&&"style"!==e&&0!==e.indexOf("data-")&&(d[e]=b.getAttrib(a,e))}),d},g=function(a,b){var c,d;for(d in a)if(a.hasOwnProperty(d)){if(c=b[d],"undefined"==typeof c)return!1;if(a[d]!=c)return!1;delete b[d]}for(d in b)if(b.hasOwnProperty(d))return!1;return!0};return!!g(f(d),f(e))&&(!!g(b.parseStyle(b.getAttrib(d,"style")),b.parseStyle(b.getAttrib(e,"style")))&&(!a.isBookmarkNode(d)&&!a.isBookmarkNode(e)));
}};return d}),g("40",["3g"],function(a){var b=function(b,c){var d=a.parent(b);d.each(function(a){a.dom().insertBefore(c.dom(),b.dom())})},c=function(c,d){var f=a.nextSibling(c);f.fold(function(){var b=a.parent(c);b.each(function(a){e(a,d)})},function(a){b(a,d)})},d=function(b,c){var d=a.firstChild(b);d.fold(function(){e(b,c)},function(a){b.dom().insertBefore(c.dom(),a.dom())})},e=function(a,b){a.dom().appendChild(b.dom())},f=function(c,d,f){a.child(c,f).fold(function(){e(c,d)},function(a){b(a,d)})},g=function(a,c){b(a,c),e(c,a)};return{before:b,after:c,prepend:d,append:e,appendAt:f,wrap:g}}),g("54",["1i","40"],function(a,b){var c=function(c,d){a.each(d,function(a){b.before(c,a)})},d=function(c,d){a.each(d,function(a,e){var f=0===e?c:d[e-1];b.after(f,a)})},e=function(c,d){a.each(d.slice().reverse(),function(a){b.prepend(c,a)})},f=function(c,d){a.each(d,function(a){b.append(c,a)})};return{before:c,after:d,prepend:e,append:f}}),g("45",["1i","54","3g"],function(a,b,c){var d=function(b){b.dom().textContent="",a.each(c.children(b),function(a){e(a)})},e=function(a){var b=a.dom();null!==b.parentNode&&b.parentNode.removeChild(b)},f=function(a){var d=c.children(a);d.length>0&&b.before(a,d),e(a)};return{empty:d,remove:e,unwrap:f}}),g("55",["3c","2m","5"],function(a,b,c){return function(d,e){var f=function(a){if(!d(a))throw new c("Can only get "+e+" value of a "+e+" node");return j(a).getOr("")},g=function(a){try{return h(a)}catch(a){return b.none()}},h=function(a){return d(a)?b.from(a.dom().nodeValue):b.none()},i=a.detect().browser,j=i.isIE()&&10===i.version.major?g:h,k=function(a,b){if(!d(a))throw new c("Can only set raw "+e+" value of a "+e+" node");a.dom().nodeValue=b};return{get:f,getOption:j,set:k}}}),g("4c",["3e","55"],function(a,b){var c=b(a.isText,"text"),d=function(a){return c.get(a)},e=function(a){return c.getOption(a)},f=function(a,b){c.set(a,b)};return{get:d,getOption:e,set:f}}),g("64",["1i","4t","3g"],function(a,b,c){var d=function(a){return h(b.body(),a)},e=function(b,d,e){return a.filter(c.parents(b,e),d)},f=function(b,d){return a.filter(c.siblings(b),d)},g=function(b,d){return a.filter(c.children(b),d)},h=function(b,d){var e=[];return a.each(c.children(b),function(a){d(a)&&(e=e.concat([a])),e=e.concat(h(a,d))}),e};return{all:d,ancestors:e,siblings:f,children:g,descendants:h}}),g("56",["64","30"],function(a,b){var c=function(a){return b.all(a)},d=function(c,d,e){return a.ancestors(c,function(a){return b.is(a,d)},e)},e=function(c,d){return a.siblings(c,function(a){return b.is(a,d)})},f=function(c,d){return a.children(c,function(a){return b.is(a,d)})},g=function(a,c){return b.all(c,a)};return{all:c,ancestors:d,siblings:e,children:f,descendants:g}}),g("3s",["1i","40","45","1v","3e","4c","56","3g","3k"],function(a,b,c,d,e,f,g,h,i){var j=function(a){for(var b=[],c=a.dom();c;)b.push(d.fromDom(c)),c=c.lastChild;return b},k=function(b){var d=g.descendants(b,"br"),e=a.filter(j(b).slice(-1),i.isBr);d.length===e.length&&a.each(e,c.remove)},l=function(a){c.empty(a),b.append(a,d.fromHtml('<br data-mce-bogus="1">'))},m=function(a){return e.isText(a)?"\xa0"===f.get(a):i.isBr(a)},n=function(b){return 1===a.filter(h.children(b),m).length},o=function(a){h.lastChild(a).each(function(b){h.prevSibling(b).each(function(d){i.isBlock(a)&&i.isBr(b)&&i.isBlock(d)&&c.remove(b)})})};return{removeTrailingBr:k,fillWithPaddingBr:l,isPaddedElement:n,trimBlockTrailingBr:o}}),g("11",["v","1e"],function(a,b){var c=b.makeMap;return function(b){var d,e,f,g,h,i=[];return b=b||{},d=b.indent,e=c(b.indent_before||""),f=c(b.indent_after||""),g=a.getEncodeFunc(b.entity_encoding||"raw",b.entities),h="html"==b.element_format,{start:function(a,b,c){var j,k,l,m;if(d&&e[a]&&i.length>0&&(m=i[i.length-1],m.length>0&&"\n"!==m&&i.push("\n")),i.push("<",a),b)for(j=0,k=b.length;j<k;j++)l=b[j],i.push(" ",l.name,'="',g(l.value,!0),'"');!c||h?i[i.length]=">":i[i.length]=" />",c&&d&&f[a]&&i.length>0&&(m=i[i.length-1],m.length>0&&"\n"!==m&&i.push("\n"))},end:function(a){var b;i.push("</",a,">"),d&&f[a]&&i.length>0&&(b=i[i.length-1],b.length>0&&"\n"!==b&&i.push("\n"))},text:function(a,b){a.length>0&&(i[i.length]=b?a:g(a))},cdata:function(a){i.push("<![CDATA[",a,"]]>")},comment:function(a){i.push("<!--",a,"-->")},pi:function(a,b){b?i.push("<?",a," ",g(b),"?>"):i.push("<?",a,"?>"),d&&i.push("\n")},doctype:function(a){i.push("<!DOCTYPE",a,">",d?"\n":"")},reset:function(){i.length=0},getContent:function(){return i.join("").replace(/\n$/,"")}}}}),g("z",["11","y"],function(a,b){return function(c,d){var e=this,f=new a(c);c=c||{},c.validate=!("validate"in c)||c.validate,e.schema=d=d||new b,e.writer=f,e.serialize=function(a){var b,e;e=c.validate,b={3:function(a){f.text(a.value,a.raw)},8:function(a){f.comment(a.value)},7:function(a){f.pi(a.name,a.value)},10:function(a){f.doctype(a.value)},4:function(a){f.cdata(a.value)},11:function(a){if(a=a.firstChild)do g(a);while(a=a.next)}},f.reset();var g=function(a){var c,h,i,j,k,l,m,n,o,p=b[a.type];if(p)p(a);else{if(c=a.name,h=a.shortEnded,i=a.attributes,e&&i&&i.length>1&&(l=[],l.map={},o=d.getElementRule(a.name))){for(m=0,n=o.attributesOrder.length;m<n;m++)j=o.attributesOrder[m],j in i.map&&(k=i.map[j],l.map[j]=k,l.push({name:j,value:k}));for(m=0,n=i.length;m<n;m++)j=i[m].name,j in l.map||(k=i.map[j],l.map[j]=k,l.push({name:j,value:k}));i=l}if(f.start(a.name,i,h),!h){if(a=a.firstChild)do g(a);while(a=a.next);f.end(c)}}};return 1!=a.type||c.inner?b[11](a):g(a),f.getContent()}}}),g("41",["1","2m","3m","2y","53","3q","1y"],function(a,b,c,d,e,f,g){var h=function(a,b,c){var e=a?d.before(c):d.after(c);return o(a,b,e)},i=function(a){return g.isBr(a)?d.before(a):d.after(a)},j=function(a){return d.isTextPosition(a)?0===a.offset():c.isCaretCandidate(a.getNode())},k=function(a){return d.isTextPosition(a)?a.offset()===a.container().data.length:c.isCaretCandidate(a.getNode(!0))},l=function(a,b){return!d.isTextPosition(a)&&!d.isTextPosition(b)&&a.getNode()===b.getNode(!0)},m=function(a){return!d.isTextPosition(a)&&g.isBr(a.getNode())},n=function(a,b,c){return a?!l(b,c)&&!m(b)&&k(b)&&j(c):!l(c,b)&&j(b)&&k(c)},o=function(a,c,d){var e=new f(c);return b.from(a?e.next(d):e.prev(d))},p=function(a,c,d){return o(a,c,d).bind(function(f){return e.isInSameBlock(d,f,c)&&n(a,d,f)?o(a,c,f):b.some(f)})},q=function(a,e){var f=a?e.firstChild:e.lastChild;return g.isText(f)?b.some(new d(f,a?0:f.data.length)):f?c.isCaretCandidate(f)?b.some(a?d.before(f):i(f)):h(a,e,f):b.none()};return{fromPosition:o,nextPosition:a.curry(o,!0),prevPosition:a.curry(o,!1),navigate:p,positionIn:q,firstPositionIn:a.curry(q,!0),lastPositionIn:a.curry(q,!1)}}),g("3t",["1j","41","2y","53"],function(a,b,c,d){var e=function(b,c,d,e){var f=a.createRange();return f.setStart(b,c),f.setEnd(d,e),f},f=function(a){var f=c.fromRangeStart(a),g=c.fromRangeEnd(a),h=a.commonAncestorContainer;return b.fromPosition(!1,h,g).map(function(b){return!d.isInSameBlock(f,g,h)&&d.isInSameBlock(f,b,h)?e(f.container(),f.offset(),b.container(),b.offset()):a}).getOr(a)},g=function(a){return a.collapsed?a:f(a)},h=function(a){return g(a)};return{normalize:h}}),g("1w",["2m","1v","b","3l","2y","3q","3r","1y","3s","z","3t","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=h.matchNodeNames("td th"),n=function(a,b,c){if("all"===c.getAttribute("data-mce-bogus"))c.parentNode.insertBefore(a.dom.createFragment(b),c);else{var d=c.firstChild,e=c.lastChild;!d||d===e&&"BR"===d.nodeName?a.dom.setHTML(c,b):a.selection.setContent(b)}},o=function(c,d){a.from(c.getParent(d,"td,th")).map(b.fromDom).each(i.trimBlockTrailingBr)},p=function(a,b,h){var i,p,q,r,s,t,u,v,w,x,y,z,A=a.schema.getTextInlineElements(),B=a.selection,C=a.dom,D=function(a){var b,c,d;b=B.getRng(!0),c=b.startContainer,d=b.startOffset;var e=function(a){return c[a]&&3==c[a].nodeType};return 3==c.nodeType&&(d>0?a=a.replace(/^&nbsp;/," "):e("previousSibling")||(a=a.replace(/^ /,"&nbsp;")),d<c.length?a=a.replace(/&nbsp;(<br>|)$/," "):e("nextSibling")||(a=a.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),a},E=function(){var a,c,d;a=B.getRng(!0),c=a.startContainer,d=a.startOffset,3==c.nodeType&&a.collapsed&&("\xa0"===c.data[d]?(c.deleteData(d,1),/[\u00a0| ]$/.test(b)||(b+=" ")):"\xa0"===c.data[d-1]&&(c.deleteData(d-1,1),/[\u00a0| ]$/.test(b)||(b=" "+b)))},F=function(){if(z){var b=a.getBody(),c=new g(C);l.each(C.select("*[data-mce-fragment]"),function(a){for(var d=a.parentNode;d&&d!=b;d=d.parentNode)A[a.nodeName.toLowerCase()]&&c.compare(d,a)&&C.remove(a,!0)})}},G=function(a){for(var b=a;b=b.walk();)1===b.type&&b.attr("data-mce-fragment","1")},H=function(a){l.each(a.getElementsByTagName("*"),function(a){a.removeAttribute("data-mce-fragment")})},I=function(a){return!!a.getAttribute("data-mce-fragment")},J=function(b){return b&&!a.schema.getShortEndedElements()[b.nodeName]},K=function(b){var d,g,h,i=function(b){for(var c=a.getBody();b&&b!==c;b=b.parentNode)if("false"===a.dom.getContentEditable(b))return b;return null};if(b){if(B.scrollIntoView(b),d=i(b))return C.remove(b),void B.select(d);v=C.createRng(),w=b.previousSibling,w&&3==w.nodeType?(v.setStart(w,w.nodeValue.length),c.ie||(x=b.nextSibling,x&&3==x.nodeType&&(w.appendData(x.data),x.parentNode.removeChild(x)))):(v.setStartBefore(b),v.setEndBefore(b));var j=function(b){var c=e.fromRangeStart(b),d=new f(a.getBody());if(c=d.next(c))return c.toRange()};g=C.getParent(b,C.isBlock),C.remove(b),g&&C.isEmpty(g)&&(a.$(g).empty(),v.setStart(g,0),v.setEnd(g,0),m(g)||I(g)||!(h=j(v))?C.add(g,C.create("br",{"data-mce-bogus":"1"})):(v=h,C.remove(g))),B.setRng(v)}};if(/^ | $/.test(b)&&(b=D(b)),i=a.parser,z=h.merge,p=new j({validate:a.settings.validate},a.schema),y='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',t={content:b,format:"html",selection:!0,paste:h.paste},t=a.fire("BeforeSetContent",t),t.isDefaultPrevented())return void a.fire("SetContent",{content:t.content,format:"html",selection:!0,paste:h.paste});b=t.content,b.indexOf("{$caret}")==-1&&(b+="{$caret}"),b=b.replace(/\{\$caret\}/,y),v=B.getRng();var L=v.startContainer||(v.parentElement?v.parentElement():null),M=a.getBody();L===M&&B.isCollapsed()&&C.isBlock(M.firstChild)&&J(M.firstChild)&&C.isEmpty(M.firstChild)&&(v=C.createRng(),v.setStart(M.firstChild,0),v.setEnd(M.firstChild,0),B.setRng(v)),B.isCollapsed()||(a.selection.setRng(k.normalize(a.selection.getRng())),a.getDoc().execCommand("Delete",!1,null),E()),q=B.getNode();var N={context:q.nodeName.toLowerCase(),data:h.data,insert:!0};if(s=i.parse(b,N),h.paste===!0&&d.isListFragment(a.schema,s)&&d.isParentBlockLi(C,q))return v=d.insertAtCaret(p,C,a.selection.getRng(!0),s),a.selection.setRng(v),void a.fire("SetContent",t);if(G(s),w=s.lastChild,"mce_marker"==w.attr("id"))for(u=w,w=w.prev;w;w=w.walk(!0))if(3==w.type||!C.isBlock(w.name)){a.schema.isValidChild(w.parent.name,"span")&&w.parent.insert(u,w,"br"===w.name);break}if(a._selectionOverrides.showBlockCaretContainer(q),N.invalid){for(B.setContent(y),q=B.getNode(),r=a.getBody(),9==q.nodeType?q=w=r:w=q;w!==r;)q=w,w=w.parentNode;b=q==r?r.innerHTML:C.getOuterHTML(q),b=p.serialize(i.parse(b.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return p.serialize(s)}))),q==r?C.setHTML(r,b):C.setOuterHTML(q,b)}else b=p.serialize(s),n(a,b,q);F(),K(C.get("mce_marker")),H(a.getBody()),o(a.dom,a.selection.getStart()),a.fire("SetContent",t),a.addVisual()},q=function(a){var b;return"string"!=typeof a?(b=l.extend({paste:a.paste,data:{paste:a.paste}},a),{content:a.content,details:b}):{content:a,details:{}}},r=function(a,b){var c=q(b);p(a,c.content,c.details)};return{insertAtCaret:r}}),g("59",["2m"],function(a){var b=function(a){for(var b=[],c=function(a){b.push(a)},d=0;d<a.length;d++)a[d].each(c);return b},c=function(b,c){for(var d=0;d<b.length;d++){var e=c(b[d],d);if(e.isSome())return e}return a.none()},d=function(b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e];if(!f.isSome())return a.none();d.push(f.getOrDie())}return a.some(c.apply(null,d))};return{cat:b,findMap:c,liftN:d}}),g("5g",["27","2m"],function(a,b){return function(c,d,e,f,g){return c(e,f)?b.some(e):a.isFunction(g)&&g(e)?b.none():d(e,f,g)}}),g("5a",["27","1i","1","2m","4t","32","1v","5g"],function(a,b,c,d,e,f,g,h){var i=function(a){return n(e.body(),a)},j=function(b,e,f){for(var h=b.dom(),i=a.isFunction(f)?f:c.constant(!1);h.parentNode;){h=h.parentNode;var j=g.fromDom(h);if(e(j))return d.some(j);if(i(j))break}return d.none()},k=function(a,b,c){var d=function(a){return b(a)};return h(d,j,a,b,c)},l=function(a,b){var c=a.dom();return c.parentNode?m(g.fromDom(c.parentNode),function(c){return!f.eq(a,c)&&b(c)}):d.none()},m=function(a,d){var e=b.find(a.dom().childNodes,c.compose(d,g.fromDom));return e.map(g.fromDom)},n=function(a,b){var c=function(a){for(var e=0;e<a.childNodes.length;e++){if(b(g.fromDom(a.childNodes[e])))return d.some(g.fromDom(a.childNodes[e]));var f=c(a.childNodes[e]);if(f.isSome())return f}return d.none()};return c(a.dom())};return{first:i,ancestor:j,closest:k,sibling:l,child:m,descendant:n}}),g("21",["1i","1","4e","2m","4f","44","27","3c","1e"],function(a,b,c,d,e,f,g,h,i){var j=f.immutable("sections","settings"),k=h.detect(),l=k.deviceType.isTouch(),m=["lists","autolink","autosave"],n={theme:"mobile"},o=function(b){var c=g.isArray(b)?b.join(" "):b,d=a.map(g.isString(c)?c.split(" "):[],e.trim);return a.filter(d,function(a){return a.length>0})},p=function(c){return a.filter(c,b.curry(a.contains,m))},q=function(b,d){var e=c.bifilter(d,function(c,d){return a.contains(b,d)});return j(e.t,e.f)},r=function(a,b,c){var d=a.sections(),e=d.hasOwnProperty(b)?d[b]:{};return i.extend({},c,e)},s=function(a,b){return a.sections().hasOwnProperty(b)},t=function(a,b,c){return{id:a,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:b,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:c.convertURL,url_converter_scope:c,ie7_compat:!0}},u=function(a,b){var c=b.external_plugins?b.external_plugins:{};return a&&a.external_plugins?i.extend({},a.external_plugins,c):c},v=function(a,b){return[].concat(o(a)).concat(o(b))},w=function(a,b,c,d){var e=o(c.forced_plugins),f=o(d.plugins),g=a&&s(b,"mobile")?p(f):f,h=v(e,g);return i.extend(d,{plugins:h.join(" ")})},x=function(a,b){var c=b.settings().inline;return a&&s(b,"mobile")&&!c},y=function(a,b,c,d){var e=q(["mobile"],d),f=i.extend(b,c,e.settings(),x(a,e)?r(e,"mobile",n):{},{validate:!0,content_editable:e.settings().inline,external_plugins:u(c,e.settings())});return w(a,e,c,f)},z=function(a,b,c,d,e){var f=t(b,c,a);return y(l,f,d,e)},A=function(a,b){return d.from(a.settings[b])},B=function(a,b,c){return d.from(b.settings[c]).filter(a)};return{getEditorSettings:z,get:A,getString:b.curry(B,g.isString),combineSettings:y}}),g("5b",[],function(){var a=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,b=function(b){return a.test(b)};return{hasStrongRtl:b}}),g("43",["1i","1","2m","1v","30","21","2x","2y","53","l","1y","5b"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=function(a,b){var c=f.getString(a,"inline_boundaries_selector").getOr("a[href],code");return e.is(d.fromDom(b),c)},n=function(a){return"rtl"===j.DOM.getStyle(a,"direction",!0)||l.hasStrongRtl(a.textContent)},o=function(b,c,d){return a.filter(j.DOM.getParents(d.container(),"*",c),b)},p=function(a,b,d){var e=o(a,b,d);return c.from(e[e.length-1])},q=function(a,b,c){var d=i.getParentBlock(b,a),e=i.getParentBlock(c,a);return d&&d===e},r=function(a){return g.isBeforeInline(a)||g.isAfterInline(a)},s=function(a,b){var c=b.container(),d=b.offset();return a?g.isCaretContainerInline(c)?k.isText(c.nextSibling)?new h(c.nextSibling,0):h.after(c):g.isBeforeInline(b)?new h(c,d+1):b:g.isCaretContainerInline(c)?k.isText(c.previousSibling)?new h(c.previousSibling,c.previousSibling.data.length):h.before(c):g.isAfterInline(b)?new h(c,d-1):b},t=b.curry(s,!0),u=b.curry(s,!1);return{isInlineTarget:m,findRootInline:p,isRtl:n,isAtZwsp:r,normalizePosition:s,normalizeForwards:t,normalizeBackwards:u,hasSameParentBlock:q}}),g("3x",["2m","59","32","1v","5a","41","3k","43"],function(a,b,c,d,e,f,g,h){var i=function(a){return function(b){return c.eq(a,d.fromDom(b.dom().parentNode))}},j=function(b,d){return c.contains(b,d)?e.closest(d,function(a){return g.isTextBlock(a)||g.isListItem(a)},i(b)):a.none()},k=function(a){var b=a.getBody(),c=b.firstChild&&a.dom.isBlock(b.firstChild)?b.firstChild:b;a.selection.setCursorLocation(c,0)},l=function(a){a.dom.isEmpty(a.getBody())&&(a.setContent(""),k(a))},m=function(a,c,d){return b.liftN([f.firstPositionIn(d),f.lastPositionIn(d)],function(b,e){var g=h.normalizePosition(!0,b),i=h.normalizePosition(!1,e),j=h.normalizePosition(!1,c);return a?f.nextPosition(d,j).map(function(a){return a.isEqual(i)&&c.isEqual(g)}).getOr(!1):f.prevPosition(d,j).map(function(a){return a.isEqual(g)&&c.isEqual(i)}).getOr(!1)}).getOr(!0)};return{getParentBlock:j,paddEmptyBody:l,willDeleteLastPositionInElement:m}}),g("47",["5a","30","5g"],function(a,b,c){var d=function(a){return b.one(a)},e=function(c,d,e){return a.ancestor(c,function(a){return b.is(a,d)},e)},f=function(c,d){return a.sibling(c,function(a){return b.is(a,d)})},g=function(c,d){return a.child(c,function(a){return b.is(a,d)})},h=function(a,c){return b.one(c,a)},i=function(a,d,f){return c(b.is,e,a,d,f)};return{first:d,ancestor:e,sibling:f,child:g,descendant:h,closest:i}}),g("65",["47"],function(a){var b=function(b){return a.first(b).isSome()},c=function(b,c,d){return a.ancestor(b,c,d).isSome()},d=function(b,c){return a.sibling(b,c).isSome()},e=function(b,c){return a.child(b,c).isSome()},f=function(b,c){return a.descendant(b,c).isSome()},g=function(b,c,d){return a.closest(b,c,d).isSome()};return{any:b,ancestor:c,sibling:d,child:e,descendant:f,closest:g}}),g("5k",["1","32","1v","65","3m","1y","s"],function(a,b,c,d,e,f,g){var h=function(e,f){var g=c.fromDom(e),h=c.fromDom(f);return d.ancestor(h,"pre,code",a.curry(b.eq,g))},i=function(a,b){return f.isText(b)&&/^[ \t\r\n]*$/.test(b.data)&&h(a,b)===!1},j=function(a){return f.isElement(a)&&"A"===a.nodeName&&a.hasAttribute("name")},k=function(a,b){return e.isCaretCandidate(b)&&i(a,b)===!1||j(b)||l(b)},l=f.hasAttribute("data-mce-bookmark"),m=f.hasAttribute("data-mce-bogus"),n=f.hasAttributeValue("data-mce-bogus","all"),o=function(a){var b,c,d=0;if(k(a,a))return!1;if(c=a.firstChild,!c)return!0;b=new g(c,a);do if(n(c))c=b.next(!0);else if(m(c))c=b.next();else if(f.isBr(c))d++,c=b.next();else{if(k(a,c))return!1;c=b.next()}while(c);return d<=1},p=function(a){return o(a.dom())};return{isEmpty:p}}),g("57",["1i","1","2m","59","44","32","1v","3e","5a","3g","41","2y","3x","5k","1y"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=e.immutable("block","position"),q=e.immutable("from","to"),r=function(a,b){var c=g.fromDom(a),d=g.fromDom(b.container());return m.getParentBlock(c,d).map(function(a){return p(a,b)})},s=function(a){return f.eq(a.from().block(),a.to().block())===!1},t=function(a){return j.parent(a.from().block()).bind(function(b){return j.parent(a.to().block()).filter(function(a){return f.eq(b,a)})}).isSome()},u=function(a){return o.isContentEditableFalse(a.from().block())===!1&&o.isContentEditableFalse(a.to().block())===!1},v=function(a,b,d){return o.isBr(d.position().getNode())&&n.isEmpty(d.block())===!1?k.positionIn(!1,d.block().dom()).bind(function(e){return e.isEqual(d.position())?k.fromPosition(b,a,e).bind(function(b){return r(a,b)}):c.some(d)}).getOr(d):d},w=function(a,b,c){var e=r(a,l.fromRangeStart(c)),f=e.bind(function(c){return k.fromPosition(b,a,c.position()).bind(function(c){return r(a,c).map(function(c){return v(a,b,c)})})});return d.liftN([e,f],q).filter(function(a){return s(a)&&t(a)&&u(a)})},x=function(a,b,d){return d.collapsed?w(a,b,d):c.none()};return{read:x}}),g("5l",["1","32","3g"],function(a,b,c){var d=function(a){return a.slice(0,-1)},e=function(a,e,f){return b.contains(e,a)?d(c.parents(a,function(a){return f(a)||b.eq(a,e)})):[]},f=function(b,c){return e(b,c,a.constant(!1))},g=function(a,b){return[a].concat(f(a,b))};return{parentsUntil:e,parents:f,parentsAndSelf:g}}),g("58",["1i","2m","32","40","45","1v","3g","41","2y","3k","5k","1y","5l"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=function(b){var c=g.children(b);return a.findIndex(c,j.isBlock).fold(function(){return c},function(a){return c.slice(0,a)})},o=function(b){var c=n(b);return a.each(c,function(a){e.remove(a)}),c},p=function(a,b){h.positionIn(a,b.dom()).each(function(a){var b=a.getNode();l.isBr(b)&&e.remove(f.fromDom(b))})},q=function(b,c){var d=m.parentsAndSelf(c,b);return a.find(d.reverse(),k.isEmpty).each(e.remove)},r=function(a,d){var e=g.parents(d,function(b){return c.eq(b,a)});return b.from(e[e.length-2])},s=function(a,d){return c.contains(d,a)?g.parent(a).bind(function(e){return c.eq(e,d)?b.some(a):r(d,a)}):b.none()},t=function(b,c,f){if(k.isEmpty(f))return e.remove(f),h.firstPositionIn(c.dom());p(!0,c),p(!1,f);var g=o(c);return s(c,f).fold(function(){q(b,c);var e=h.lastPositionIn(f.dom());return a.each(g,function(a){d.append(f,a)}),e},function(e){var j=h.prevPosition(f.dom(),i.before(e.dom()));return a.each(g,function(a){d.before(e,a)}),q(b,c),j})},u=function(a,b,c,d){return b?t(a,d,c):t(a,c,d)};return{mergeBlocks:u}}),g("3u",["1v","57","58"],function(a,b,c){var d=function(d,e){var f,g=a.fromDom(d.getBody());return f=b.read(g.dom(),e,d.selection.getRng()).bind(function(a){return c.mergeBlocks(g,e,a.from().block(),a.to().block())}),f.each(function(a){d.selection.setRng(a.toRange())}),f.isSome()};return{backspaceDelete:d}}),g("3v",["59","32","1v","41","2y","3x","58"],function(a,b,c,d,e,f,g){var h=function(d,e){var h=e.getRng();return a.liftN([f.getParentBlock(d,c.fromDom(h.startContainer)),f.getParentBlock(d,c.fromDom(h.endContainer))],function(a,c){return b.eq(a,c)===!1&&(h.deleteContents(),g.mergeBlocks(d,!0,a,c).each(function(a){e.setRng(a.toRange())}),!0)}).getOr(!1)},i=function(a,b){var c=d.prevPosition(a.dom(),e.fromRangeStart(b)).isNone(),f=d.nextPosition(a.dom(),e.fromRangeEnd(b)).isNone();return c&&f},j=function(a){return a.setContent(""),a.selection.setCursorLocation(),!0},k=function(a){var b=c.fromDom(a.getBody()),d=a.selection.getRng();return i(b,d)?j(a):h(b,a.selection)},l=function(a,b){return!a.selection.isCollapsed()&&k(a,a.selection.getRng())};return{backspaceDelete:l}}),g("5f",["1i","4e","27","4","5","3d"],function(a,b,c,d,e,f){var g=function(g){if(!c.isArray(g))throw new e("cases must be an array");if(0===g.length)throw new e("there must be at least one case");var h=[],i={};return a.each(g,function(j,k){var l=b.keys(j);if(1!==l.length)throw new e("one and only one name per case");var m=l[0],n=j[m];if(void 0!==i[m])throw new e("duplicate key detected:"+m);if("cata"===m)throw new e("cannot have a case named cata (sorry)");if(!c.isArray(n))throw new e("case arguments must be an array");h.push(m),i[m]=function(){var c=arguments.length;if(c!==n.length)throw new e("Wrong number of arguments to case "+m+". Expected "+n.length+" ("+n+"), got "+c);for(var i=new d(c),j=0;j<i.length;j++)i[j]=arguments[j];var l=function(c){var d=b.keys(c);if(h.length!==d.length)throw new e("Wrong number of arguments to match. Expected: "+h.join(",")+"\nActual: "+d.join(","));var f=a.forall(h,function(b){return a.contains(d,b)});if(!f)throw new e("Not all branches were specified when using match. Specified: "+d.join(", ")+"\nRequired: "+h.join(", "));return c[m].apply(null,i)};return{fold:function(){if(arguments.length!==g.length)throw new e("Wrong number of arguments to fold. Expected "+g.length+", got "+arguments.length);var a=arguments[k];return a.apply(null,i)},match:l,log:function(a){f.log(a,{constructors:h,constructor:m,params:i})}}}}),i};return{generate:g}}),g("5c",["5f","2m","1v","41","2y","53","3x","5k","1y"],function(a,b,c,d,e,f,g,h,i){var j=a.generate([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),k=function(a,b){var c=b.getNode(a===!1),d=a?"after":"before";return i.isElement(c)&&c.getAttribute("data-mce-caret")===d},l=function(a,d,e,f){var i=f.getNode(d===!1);return g.getParentBlock(c.fromDom(a),c.fromDom(e.getNode())).map(function(a){return h.isEmpty(a)?j.remove(a.dom()):j.moveToElement(i)}).orThunk(function(){return b.some(j.moveToElement(i))})},m=function(a,c,e){return d.fromPosition(c,a,e).bind(function(d){return c&&i.isContentEditableFalse(d.getNode())?l(a,c,e,d):c===!1&&i.isContentEditableFalse(d.getNode(!0))?l(a,c,e,d):c&&f.isAfterContentEditableFalse(e)?b.some(j.moveToPosition(d)):c===!1&&f.isBeforeContentEditableFalse(e)?b.some(j.moveToPosition(d)):b.none()})},n=function(a,c){return a&&i.isContentEditableFalse(c.nextSibling)?b.some(j.moveToElement(c.nextSibling)):a===!1&&i.isContentEditableFalse(c.previousSibling)?b.some(j.moveToElement(c.previousSibling)):b.none()},o=function(a,c,d){return k(c,d)?n(c,d.getNode(c===!1)).fold(function(){return m(a,c,d)},b.some):m(a,c,d)},p=function(a,c,d){var g=f.normalizeRange(c?1:-1,a,d),h=e.fromRangeStart(g);return c===!1&&f.isAfterContentEditableFalse(h)?b.some(j.remove(h.getNode(!0))):c&&f.isBeforeContentEditableFalse(h)?b.some(j.remove(h.getNode())):o(a,c,h)};return{read:p}}),g("5d",["1","2m","59","40","45","1v","3e","5a","3g","3m","41","2y","5k","1y"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=function(a,b){var c=a.container(),d=a.offset();return l.isTextPosition(a)===!1&&c===b.parentNode&&d>l.before(b).offset()},p=function(a,b){return o(b,a)?new l(b.container(),b.offset()-1):b},q=function(a){return n.isText(a)?new l(a,0):l.before(a)},r=function(a){return n.isText(a)?new l(a,a.data.length):l.after(a)},s=function(a){return j.isCaretCandidate(a.previousSibling)?b.some(r(a.previousSibling)):a.previousSibling?k.lastPositionIn(a.previousSibling):b.none()},t=function(a){return j.isCaretCandidate(a.nextSibling)?b.some(q(a.nextSibling)):a.nextSibling?k.firstPositionIn(a.nextSibling):b.none()},u=function(a,c){var d=l.before(c.previousSibling?c.previousSibling:c.parentNode);return k.prevPosition(a,d).fold(function(){return k.nextPosition(a,l.after(c))},b.some)},v=function(a,c){return k.nextPosition(a,l.after(c)).fold(function(){return k.prevPosition(a,l.before(c))},b.some)},w=function(a,b){return s(b).orThunk(function(){return t(b)}).orThunk(function(){return u(a,b)})},x=function(a,b){return t(b).orThunk(function(){return s(b)}).orThunk(function(){return v(a,b)})},y=function(a,b,c){return a?x(b,c):w(b,c)},z=function(b,c,d){return y(b,c,d).map(a.curry(p,d))},A=function(a,b,c){c.fold(function(){a.focus()},function(c){a.selection.setRng(c.toRange(),b)})},B=function(a){return function(b){return b.dom()===a}},C=function(a,b){return b&&a.schema.getBlockElements().hasOwnProperty(g.name(b))},D=function(a){if(m.isEmpty(a)){var c=f.fromHtml('<br data-mce-bogus="1">');return e.empty(a),d.append(a,c),b.some(l.before(c.dom()))}return b.none()},E=function(a,b){return c.liftN([i.prevSibling(a),i.nextSibling(a),b],function(b,c,d){var f,g=b.dom(),h=c.dom();return n.isText(g)&&n.isText(h)?(f=g.data.length,g.appendData(h.data),e.remove(c),e.remove(a),d.container()===h?new l(g,f):d):(e.remove(a),d)}).orThunk(function(){return e.remove(a),b})},F=function(c,d,e){var f=z(d,c.getBody(),e.dom()),g=h.ancestor(e,a.curry(C,c),B(c.getBody())),i=E(e,f);g.bind(D).fold(function(){A(c,d,i)},function(a){A(c,d,b.some(a))})};return{deleteElement:F}}),g("3w",["1i","45","1v","56","2y","5c","5d","3x","1y"],function(a,b,c,d,e,f,g,h,i){var j=function(a,b){return function(d){return g.deleteElement(a,b,c.fromDom(d)),!0}},k=function(a,b){return function(c){var d=b?e.before(c):e.after(c);return a.selection.setRng(d.toRange()),!0}},l=function(a){return function(b){return a.selection.setRng(b.toRange()),!0}},m=function(a,b){var c=f.read(a.getBody(),b,a.selection.getRng()).map(function(c){return c.fold(j(a,b),k(a,b),l(a))});return c.getOr(!1)},n=function(c){a.each(d.descendants(c,".mce-offscreen-selection"),b.remove)},o=function(a,b){var d=a.selection.getNode();return!!i.isContentEditableFalse(d)&&(n(c.fromDom(a.getBody())),g.deleteElement(a,b,c.fromDom(a.selection.getNode())),h.paddEmptyBody(a),!0)},p=function(a,b){for(;b&&b!==a;){if(i.isContentEditableTrue(b)||i.isContentEditableFalse(b))return b;b=b.parentNode}return null},q=function(a){var b,c=p(a.getBody(),a.selection.getNode());return i.isContentEditableTrue(c)&&a.dom.isBlock(c)&&a.dom.isEmpty(c)&&(b=a.dom.create("br",{"data-mce-bogus":"1"}),a.dom.setHTML(c,""),c.appendChild(b),a.selection.setRng(e.before(b).toRange())),!0},r=function(a,b){return a.selection.isCollapsed()?m(a,b):o(a,b)};return{backspaceDelete:r,paddEmptyElement:q}}),g("66",["1","1y","2z"],function(a,b,c){var d=b.isText,e=function(a){return d(a)&&a.data[0]===c.ZWSP},f=function(a){return d(a)&&a.data[a.data.length-1]===c.ZWSP},g=function(a){return a.ownerDocument.createTextNode(c.ZWSP)},h=function(a){if(d(a.previousSibling))return f(a.previousSibling)?a.previousSibling:(a.previousSibling.appendData(c.ZWSP),a.previousSibling);if(d(a))return e(a)?a:(a.insertData(0,c.ZWSP),a);var b=g(a);return a.parentNode.insertBefore(b,a),b},i=function(a){if(d(a.nextSibling))return e(a.nextSibling)?a.nextSibling:(a.nextSibling.insertData(0,c.ZWSP),a.nextSibling);if(d(a))return f(a)?a:(a.appendData(c.ZWSP),a);var b=g(a);return a.nextSibling?a.parentNode.insertBefore(b,a.nextSibling):a.parentNode.appendChild(b),b},j=function(a,b){return a?h(b):i(b)};return{insertInline:j,insertInlineBefore:a.curry(j,!0),insertInlineAfter:a.curry(j,!1)}}),g("67",["1i","2x","2y","1y","2z"],function(a,b,c,d,e){var f=d.isElement,g=d.isText,h=function(a){var b=a.parentNode;b&&b.removeChild(a)},i=function(a){try{return a.nodeValue}catch(a){return""}},j=function(a,b){0===b.length?h(a):a.nodeValue=b},k=function(a){var b=e.trim(a);return{count:a.length-b.length,text:b}},l=function(a,b){return r(a),b},m=function(a,b){var d=k(a.data.substr(0,b.offset())),e=k(a.data.substr(b.offset())),f=d.text+e.text;return f.length>0?(j(a,f),new c(a,b.offset()-d.count)):b},n=function(b,d){var e=d.container(),f=a.indexOf(e.childNodes,b).map(function(a){return a<d.offset()?new c(e,d.offset()-1):d}).getOr(d);return r(b),f},o=function(a,b){return b.container()===a?m(a,b):l(a,b)},p=function(a,b){return b.container()===a.parentNode?n(a,b):l(a,b)},q=function(a,b){return c.isTextPosition(b)?o(a,b):p(a,b)},r=function(a){if(f(a)&&b.isCaretContainer(a)&&(b.hasContent(a)?a.removeAttribute("data-mce-caret"):h(a)),g(a)){var c=e.trim(i(a));j(a,c)}};return{removeAndReposition:q,remove:r}}),g("5e",["2m","2x","66","67","41","2y","1y","43"],function(a,b,c,d,e,f,g,h){var i=function(a,b){return g.isText(a.container())?c.insertInline(b,a.container()):c.insertInline(b,a.getNode())},j=function(a,c){var d=c.get();return d&&a.container()===d&&b.isCaretContainerInline(d)},k=function(b,g){return g.fold(function(e){d.remove(b.get());var g=c.insertInlineBefore(e);return b.set(g),a.some(new f(g,g.length-1))},function(a){return e.firstPositionIn(a).map(function(a){if(j(a,b))return new f(b.get(),1);d.remove(b.get());var c=i(a,!0);return b.set(c),new f(c,1)})},function(a){return e.lastPositionIn(a).map(function(a){if(j(a,b))return new f(b.get(),b.get().length-1);d.remove(b.get());var c=i(a,!1);return b.set(c),new f(c,c.length-1)})},function(e){d.remove(b.get());var g=c.insertInlineAfter(e);return b.set(g),
a.some(new f(g,1))})};return{renderCaret:k}}),g("49",["s"],function(a){var b=function(a){return a&&/^(IMG)$/.test(a.nodeName)},c=function(c,d,e){var f,h,i,j=e.startContainer,k=e.startOffset;if((e.startContainer!==e.endContainer||!b(e.startContainer.childNodes[e.startOffset]))&&(3===j.nodeType&&k>=j.nodeValue.length&&(k=c.nodeIndex(j),j=j.parentNode),1===j.nodeType))for(i=j.childNodes,k<i.length?(j=i[k],f=new a(j,c.getParent(j,c.isBlock))):(j=i[i.length-1],f=new a(j,c.getParent(j,c.isBlock)),f.next(!0)),h=f.current();h;h=f.next())if(3===h.nodeType&&!g(h))return e.setStart(h,0),void d.setRng(e)},d=function(a,b,c){if(a)for(b=b?"nextSibling":"previousSibling",a=c?a:a[b];a;a=a[b])if(1===a.nodeType||!g(a))return a},e=function(a,b){return b.nodeType&&(b=b.nodeName),!!a.schema.getTextBlockElements()[b.toLowerCase()]},f=function(a,b,c){return a.schema.isValidChild(b,c)},g=function(a){return a&&3===a.nodeType&&/^([\t \r\n]+|)$/.test(a.nodeValue)},h=function(a,b){return"string"!=typeof a?a=a(b):b&&(a=a.replace(/%(\w+)/g,function(a,c){return b[c]||a})),a},i=function(a,b){return a=a||"",b=b||"",a=""+(a.nodeName||a),b=""+(b.nodeName||b),a.toLowerCase()===b.toLowerCase()},j=function(a,b,c){return"color"!==c&&"backgroundColor"!==c||(b=a.toHex(b)),"fontWeight"===c&&700===b&&(b="bold"),"fontFamily"===c&&(b=b.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+b},k=function(a,b,c){return j(a,a.getStyle(b,c),c)},l=function(a,b){var c;return a.getParent(b,function(b){return c=a.getStyle(b,"text-decoration"),c&&"none"!==c}),c},m=function(a,b,c){return a.getParents(b,c,a.getRoot())};return{isInlineBlock:b,moveStart:c,getNonWhiteSpaceSibling:d,isTextBlock:e,isValid:f,isWhiteSpaceNode:g,replaceVars:h,isEq:i,normalizeStyleValue:j,getStyle:k,getTextDecoration:l,getParents:m}}),g("48",["j","s","49","2t"],function(a,b,c,d){var e=a.isBookmarkNode,f=c.getParents,g=c.isWhiteSpaceNode,h=c.isTextBlock,i=function(a,b){for("undefined"==typeof b&&(b=3===a.nodeType?a.length:a.childNodes.length);a&&a.hasChildNodes();)a=a.childNodes[b],a&&(b=3===a.nodeType?a.length:a.childNodes.length);return{node:a,offset:b}},j=function(a,b){var c=i(a,b);if(c.node){for(;c.node&&0===c.offset&&c.node.previousSibling;)c=i(c.node.previousSibling);c.node&&c.offset>0&&3===c.node.nodeType&&" "===c.node.nodeValue.charAt(c.offset-1)&&c.offset>1&&(a=c.node,a.splitText(c.offset-1))}return a},k=function(a){return"BR"===a.nodeName&&a.getAttribute("data-mce-bogus")&&!a.nextSibling},l=function(a,b){for(var c=b;c;){if(1===c.nodeType&&a.getContentEditable(c))return"false"===a.getContentEditable(c)?c:b;c=c.parentNode}return b},m=function(a,b,c,d){var e,f,g=c.nodeValue;return"undefined"==typeof d&&(d=a?g.length:0),a?(e=g.lastIndexOf(" ",d),f=g.lastIndexOf("\xa0",d),e=e>f?e:f,e===-1||b||e++):(e=g.indexOf(" ",d),f=g.indexOf("\xa0",d),e=e!==-1&&(f===-1||e<f)?e:f),e},n=function(a,c,d,e,f,g){var h,i,j,k;if(3===d.nodeType){if(j=m(f,g,d,e),j!==-1)return{container:d,offset:j};k=d}for(h=new b(d,a.getParent(d,a.isBlock)||c);i=h[f?"prev":"next"]();)if(3===i.nodeType){if(k=i,j=m(f,g,i),j!==-1)return{container:i,offset:j}}else if(a.isBlock(i))break;if(k)return e=f?0:k.length,{container:k,offset:e}},o=function(a,b,c,d,e){var g,h,i,j;for(3===d.nodeType&&0===d.nodeValue.length&&d[e]&&(d=d[e]),g=f(a,d),h=0;h<g.length;h++)for(i=0;i<b.length;i++)if(j=b[i],!("collapsed"in j&&j.collapsed!==c.collapsed)&&a.is(g[h],j.selector))return g[h];return d},p=function(a,b,d,e){var g,i=a.dom,j=i.getRoot();if(b[0].wrapper||(g=i.getParent(d,b[0].block,j)),!g){var k=i.getParent(d,"LI,TD,TH");g=i.getParent(3===d.nodeType?d.parentNode:d,function(b){return b!==j&&h(a,b)},k)}if(g&&b[0].wrapper&&(g=f(i,g,"ul,ol").reverse()[0]||g),!g)for(g=d;g[e]&&!i.isBlock(g[e])&&(g=g[e],!c.isEq(g,"br")););return g||d},q=function(a,b,c,d,f,h,i){var j,l,m,n,o;if(j=l=i?c:f,n=i?"previousSibling":"nextSibling",o=a.getRoot(),3===j.nodeType&&!g(j)&&(i?d>0:h<j.nodeValue.length))return j;for(;;){if(!b[0].block_expand&&a.isBlock(l))return l;for(m=l[n];m;m=m[n])if(!e(m)&&!g(m)&&!k(m))return l;if(l===o||l.parentNode===o){j=l;break}l=l.parentNode}return j},r=function(a,b,c,f){var g,h=b.startContainer,i=b.startOffset,k=b.endContainer,m=b.endOffset,r=a.dom;return 1===h.nodeType&&h.hasChildNodes()&&(h=d.getNode(h,i),3===h.nodeType&&(i=0)),1===k.nodeType&&k.hasChildNodes()&&(k=d.getNode(k,b.collapsed?m:m-1),3===k.nodeType&&(m=k.nodeValue.length)),h=l(r,h),k=l(r,k),(e(h.parentNode)||e(h))&&(h=e(h)?h:h.parentNode,h=h.nextSibling||h,3===h.nodeType&&(i=0)),(e(k.parentNode)||e(k))&&(k=e(k)?k:k.parentNode,k=k.previousSibling||k,3===k.nodeType&&(m=k.length)),c[0].inline&&(b.collapsed&&(g=n(r,a.getBody(),h,i,!0,f),g&&(h=g.container,i=g.offset),g=n(r,a.getBody(),k,m,!1,f),g&&(k=g.container,m=g.offset)),k=f?k:j(k,m)),(c[0].inline||c[0].block_expand)&&(c[0].inline&&3===h.nodeType&&0!==i||(h=q(r,c,h,i,k,m,!0)),c[0].inline&&3===k.nodeType&&m!==k.nodeValue.length||(k=q(r,c,h,i,k,m,!1))),c[0].selector&&c[0].expand!==!1&&!c[0].inline&&(h=o(r,c,b,h,"previousSibling"),k=o(r,c,b,k,"nextSibling")),(c[0].block||c[0].selector)&&(h=p(a,c,h,"previousSibling"),k=p(a,c,k,"nextSibling"),c[0].block&&(r.isBlock(h)||(h=q(r,c,h,i,k,m,!0)),r.isBlock(k)||(k=q(r,c,h,i,k,m,!1)))),1===h.nodeType&&(i=r.nodeIndex(h),h=h.parentNode),1===k.nodeType&&(m=r.nodeIndex(k)+1,k=k.parentNode),{startContainer:h,startOffset:i,endContainer:k,endOffset:m}};return{expandRng:r}}),g("2h",["49"],function(a){var b=a.isEq,c=function(a,b,c){var d=a.formatter.get(c);if(d)for(var e=0;e<d.length;e++)if(d[e].inherit===!1&&a.dom.is(b,d[e].selector))return!0;return!1},d=function(a,b,d,e){var f=a.dom.getRoot();return b!==f&&(b=a.dom.getParent(b,function(b){return!!c(a,b,d)||(b.parentNode===f||!!g(a,b,d,e,!0))}),g(a,b,d,e))},e=function(a,c,d){return!!b(c,d.inline)||(!!b(c,d.block)||(d.selector?1===c.nodeType&&a.is(c,d.selector):void 0))},f=function(c,d,e,f,g,h){var i,j,k,l=e[f];if(e.onmatch)return e.onmatch(d,e,f);if(l)if("undefined"==typeof l.length){for(i in l)if(l.hasOwnProperty(i)){if(j="attributes"===f?c.getAttrib(d,i):a.getStyle(c,d,i),g&&!j&&!e.exact)return;if((!g||e.exact)&&!b(j,a.normalizeStyleValue(c,a.replaceVars(l[i],h),i)))return}}else for(k=0;k<l.length;k++)if("attributes"===f?c.getAttrib(d,l[k]):a.getStyle(c,d,l[k]))return e;return e},g=function(a,b,c,d,g){var h,i,j,k,l=a.formatter.get(c),m=a.dom;if(l&&b)for(i=0;i<l.length;i++)if(h=l[i],e(a.dom,b,h)&&f(m,b,h,"attributes",g,d)&&f(m,b,h,"styles",g,d)){if(k=h.classes)for(j=0;j<k.length;j++)if(!a.dom.hasClass(b,k[j]))return;return h}},h=function(a,b,c,e){var f;return e?d(a,e,b,c):(e=a.selection.getNode(),!!d(a,e,b,c)||(f=a.selection.getStart(),!(f===e||!d(a,f,b,c))))},i=function(a,b,c){var d,e=[],f={};return d=a.selection.getStart(),a.dom.getParent(d,function(d){var h,i;for(h=0;h<b.length;h++)i=b[h],!f[i]&&g(a,d,i,c)&&(f[i]=!0,e.push(i))},a.dom.getRoot()),e},j=function(b,c){var d,e,f,g,h,i=b.formatter.get(c),j=b.dom;if(i)for(d=b.selection.getStart(),e=a.getParents(j,d),g=i.length-1;g>=0;g--){if(h=i[g].selector,!h||i[g].defaultBlock)return!0;for(f=e.length-1;f>=0;f--)if(j.is(e[f],h))return!0}return!1};return{matchNode:g,matchName:e,match:h,matchAll:i,canApply:j,matchesUnInheritedFormatSelector:c}}),g("2v",["1y"],function(a){var b=function(a,b){return a.splitText(b)},c=function(c){var d=c.startContainer,e=c.startOffset,f=c.endContainer,g=c.endOffset;return d===f&&a.isText(d)?e>0&&e<d.nodeValue.length&&(f=b(d,e),d=f.previousSibling,g>e?(g-=e,d=f=b(f,g).previousSibling,g=f.nodeValue.length,e=0):g=0):(a.isText(d)&&e>0&&e<d.nodeValue.length&&(d=b(d,e),e=0),a.isText(f)&&g>0&&g<f.nodeValue.length&&(f=b(f,g).previousSibling,g=f.nodeValue.length)),{startContainer:d,startOffset:e,endContainer:f,endOffset:g}};return{split:c}}),g("2e",["1i","40","45","1v","3e","46","47","2y","1y","3s","s","48","49","2h","2v","2z","3p","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=p.ZWSP,t="_mce_caret",u=function(a,b){return a.importNode(b,!0)},v=function(a){return 1===a.nodeType&&a.id===t},w=function(a){for(var b=[];a;){if(3===a.nodeType&&a.nodeValue!==s||a.childNodes.length>1)return[];1===a.nodeType&&b.push(a),a=a.firstChild}return b},x=function(a){return w(a).length>0},y=function(a){var b;if(a)for(b=new k(a,a),a=b.current();a;a=b.next())if(3===a.nodeType)return a;return null},z=function(a){var c=d.fromTag("span");return f.setAll(c,{id:t,"data-mce-bogus":"1"}),a&&b.append(c,d.fromText(s)),c},A=function(a,b){for(;b&&b!==a;){if(b.id===t)return b;b=b.parentNode}return null},B=function(a,b,c){var d;d=A(a,c.getStart()),d&&!b.isEmpty(d)&&r.walk(d,function(a){1!==a.nodeType||a.id===t||b.isEmpty(a)||b.setAttrib(a,"data-mce-bogus",null)},"childNodes")},C=function(a){var b=y(a);return b&&b.nodeValue.charAt(0)===s&&b.deleteData(0,1),b},D=function(a,b,c,e){var f,g,h;f=b.getRng(!0),g=a.getParent(c,a.isBlock),x(c)?(e!==!1&&(f.setStartBefore(c),f.setEndBefore(c)),a.remove(c)):(h=C(c),f.startContainer===h&&f.startOffset>0&&f.setStart(h,f.startOffset-1),f.endContainer===h&&f.endOffset>0&&f.setEnd(h,f.endOffset-1),a.remove(c,!0)),g&&a.isEmpty(g)&&j.fillWithPaddingBr(d.fromDom(g)),b.setRng(f)},E=function(a,b,c,d,e){if(d)D(b,c,d,e);else if(d=A(a,c.getStart()),!d)for(;d=b.get(t);)D(b,c,d,!1)},F=function(a,b,c){var e=a.dom,f=e.getParent(c,q.curry(m.isTextBlock,a));f&&e.isEmpty(f)?c.parentNode.replaceChild(b,c):(j.removeTrailingBr(d.fromDom(c)),e.isEmpty(c)?c.parentNode.replaceChild(b,c):e.insertAfter(b,c))},G=function(a,b){return a.appendChild(b),b},H=function(b,c){var d=a.foldr(b,function(a,b){return G(a,b.cloneNode(!1))},c);return G(d,d.ownerDocument.createTextNode(s))},I=function(b,c){g.descendant(d.fromDom(c),"#"+t).each(function(c){a.each(w(c.dom()),function(a){b.setAttrib(a,"data-mce-bogus","1")})})},J=function(a,b,c){var d,e,f,g,h,i,j,k=a.selection;d=k.getRng(!0),g=d.startOffset,i=d.startContainer,j=i.nodeValue,e=A(a.getBody(),k.getStart()),e&&(f=y(e));var m=/[^\s\u00a0\u00ad\u200b\ufeff]/;j&&g>0&&g<j.length&&m.test(j.charAt(g))&&m.test(j.charAt(g-1))?(h=k.getBookmark(),d.collapse(!0),d=l.expandRng(a,d,a.formatter.get(b)),d=o.split(d),a.formatter.apply(b,c,d),k.moveToBookmark(h)):(e&&f.nodeValue===s?a.formatter.apply(b,c,e):(e=u(a.getDoc(),z(!0).dom()),f=e.firstChild,d.insertNode(e),g=1,a.formatter.apply(b,c,e)),k.setCursorLocation(f,g))},K=function(a,b,c,d){var e,f,g,h,i,j,k,m=a.dom,p=a.selection,q=p.getRng(!0),r=[];for(e=q.startContainer,f=q.startOffset,i=e,3===e.nodeType&&(f!==e.nodeValue.length&&(h=!0),i=i.parentNode);i;){if(n.matchNode(a,i,b,c,d)){j=i;break}i.nextSibling&&(h=!0),r.push(i),i=i.parentNode}if(j)if(h)g=p.getBookmark(),q.collapse(!0),q=l.expandRng(a,q,a.formatter.get(b),!0),q=o.split(q),a.formatter.remove(b,c,q),p.moveToBookmark(g);else{k=A(a.getBody(),j);var s=z(!1).dom(),t=H(r,s);k?F(a,s,k):F(a,s,j),D(m,p,k,!1),p.setCursorLocation(t,1),m.isEmpty(j)&&m.remove(j)}},L=function(a,b,c,d){E(a,b,c,null,!1),8===d&&c.isCollapsed()&&c.getStart().innerHTML===s&&E(a,b,c,A(a,c.getStart())),37!==d&&39!==d||E(a,b,c,A(a,c.getStart())),B(a,b,c)},M=function(a){var b=a.dom,c=a.selection,d=a.getBody();a.on("PreProcess",function(a){"raw"!==a.format&&I(b,a.node)}),a.on("mouseup keydown",function(a){L(d,b,c,a.keyCode)}),a.on("SetContent",function(a){a.selection&&B(d,b,c)})},N=function(a,e){var f=z(!1),g=H(e,f.dom());return b.before(d.fromDom(a),f),c.remove(d.fromDom(a)),h(g,0)},O=function(a,b){var c=a.schema.getTextInlineElements();return c.hasOwnProperty(e.name(b))&&!v(b.dom())&&!i.isBogus(b.dom())};return{setup:M,applyCaretFormat:J,removeCaretFormat:K,isCaretNode:v,getParentCaretContainer:A,replaceWithCaretFormat:N,isFormatElement:O}}),g("5h",["2m"],function(a){var b=function(b,c){for(var d=0;d<b.length;d++){var e=b[d].apply(null,c);if(e.isSome())return e}return a.none()};return{evaluateUntil:b}}),g("42",["5f","1","2m","59","41","53","2e","43","5h"],function(a,b,c,d,e,f,g,h,i){var j=a.generate([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),k=function(a,b){var c=f.getParentBlock(b,a);return c?c:a},l=function(a,d,f){var g=h.normalizeForwards(f),i=k(d,g.container());return h.findRootInline(a,i,g).fold(function(){return e.nextPosition(i,g).bind(b.curry(h.findRootInline,a,i)).map(function(a){return j.before(a)})},c.none)},m=function(a,b){return null===g.getParentCaretContainer(a,b)},n=function(a,c,d){return h.findRootInline(a,c,d).filter(b.curry(m,c))},o=function(a,b,d){var f=h.normalizeBackwards(d);return n(a,b,f).bind(function(a){var b=e.prevPosition(a,f);return b.isNone()?c.some(j.start(a)):c.none()})},p=function(a,b,d){var f=h.normalizeForwards(d);return n(a,b,f).bind(function(a){var b=e.nextPosition(a,f);return b.isNone()?c.some(j.end(a)):c.none()})},q=function(a,d,f){var g=h.normalizeBackwards(f),i=k(d,g.container());return h.findRootInline(a,i,g).fold(function(){return e.prevPosition(i,g).bind(b.curry(h.findRootInline,a,i)).map(function(a){return j.after(a)})},c.none)},r=function(a){return h.isRtl(t(a))===!1},s=function(a,b,c){var d=i.evaluateUntil([l,o,p,q],[a,b,c]);return d.filter(r)},t=function(a){return a.fold(b.identity,b.identity,b.identity,b.identity)},u=function(a){return a.fold(b.constant("before"),b.constant("start"),b.constant("end"),b.constant("after"))},v=function(a){return a.fold(j.before,j.before,j.after,j.after)},w=function(a){return a.fold(j.start,j.start,j.end,j.end)},x=function(a,b){return u(a)===u(b)&&t(a)===t(b)},y=function(a,b,c,e,f,g){return d.liftN([h.findRootInline(b,c,e),h.findRootInline(b,c,f)],function(b,d){return b!==d&&h.hasSameParentBlock(c,b,d)?j.after(a?b:d):g}).getOr(g)},z=function(a,c){return a.fold(b.constant(!0),function(a){return!x(a,c)})},A=function(a,c,d,f,g){var i=h.normalizePosition(a,g),j=e.fromPosition(a,d,i).map(b.curry(h.normalizePosition,a)),k=j.fold(function(){return f.map(v)},function(e){return s(c,d,e).map(b.curry(y,a,c,d,i,e)).filter(b.curry(z,f))});return k.filter(r)},B=function(a,d){return a?d.fold(b.compose(c.some,j.start),c.none,b.compose(c.some,j.after),c.none):d.fold(c.none,b.compose(c.some,j.before),c.none,b.compose(c.some,j.end))},C=function(a,c,d,e){var f=h.normalizePosition(a,e),g=s(c,d,f);return s(c,d,f).bind(b.curry(B,a)).orThunk(function(){return A(a,c,d,g,e)})};return{readLocation:s,findLocation:C,prevLocation:b.curry(C,!1),nextLocation:b.curry(C,!0),getElement:t,outside:v,inside:w}}),g("2c",[],function(){var a=function(b){var c=b,d=function(){return c},e=function(a){c=a},f=function(){return a(d())};return{get:d,set:e,clone:f}};return a}),g("68",["27","2x","2y"],function(a,b,c){var d=function(b){return a.isFunction(b.selection.getSel().modify)},e=function(a,b,d){var e=a?1:-1;return b.setRng(c(d.container(),d.offset()+e).toRange()),b.getSel().modify("move",a?"forward":"backward","word"),!0},f=function(a,f){var g=f.selection.getRng(),h=a?c.fromRangeEnd(g):c.fromRangeStart(g);return!!d(f)&&(a&&b.isBeforeInline(h)?e(!0,f.selection,h):!(a||!b.isAfterInline(h))&&e(!1,f.selection,h))};return{hasSelectionModifyApi:d,moveByWord:f}}),g("5i",["1i","2c","1","67","2y","5e","42","43","68"],function(a,b,c,d,e,f,g,h,i){var j=function(a,b){var c=a.dom.createRng();c.setStart(b.container(),b.offset()),c.setEnd(b.container(),b.offset()),a.selection.setRng(c)},k=function(a){return a.settings.inline_boundaries!==!1},l=function(a,b){a?b.setAttribute("data-mce-selected","inline-boundary"):b.removeAttribute("data-mce-selected")},m=function(a,b,c){return f.renderCaret(b,c).map(function(b){return j(a,b),c})},n=function(a,b,d){var f=a.getBody(),i=e.fromRangeStart(a.selection.getRng()),j=c.curry(h.isInlineTarget,a),k=g.findLocation(d,j,f,i);return k.bind(function(c){return m(a,b,c)})},o=function(b,d,e){var f=a.filter(d.select('*[data-mce-selected="inline-boundary"]'),b),g=a.filter(e,b);a.each(a.difference(f,g),c.curry(l,!1)),a.each(a.difference(g,f),c.curry(l,!0))},p=function(a,b){if(a.selection.isCollapsed()&&a.composing!==!0&&b.get()){var c=e.fromRangeStart(a.selection.getRng());e.isTextPosition(c)&&h.isAtZwsp(c)===!1&&(j(a,d.removeAndReposition(b.get(),c)),b.set(null))}},q=function(b,c,d,f){if(c.selection.isCollapsed()){var h=a.filter(f,b);a.each(h,function(a){var f=e.fromRangeStart(c.selection.getRng());g.readLocation(b,c.getBody(),f).bind(function(a){return m(c,d,a)})})}},r=function(a,b,c){return function(){return!!k(a)&&n(a,b,c).isSome()}},s=function(a,b,c){return function(){return!!k(b)&&i.moveByWord(a,b)}},t=function(a){var d=new b(null),e=c.curry(h.isInlineTarget,a);return a.on("NodeChange",function(b){k(a)&&(o(e,a.dom,b.parents),p(a,d),q(e,a,d,b.parents))}),d};return{move:r,moveNextWord:c.curry(s,!0),movePrevWord:c.curry(s,!1),setupSelectedState:t,setCaretPosition:j}}),g("3y",["1","2m","59","1v","1j","2x","41","2y","53","5d","5e","42","5i","43"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=function(a){return a.settings.inline_boundaries!==!1},p=function(a,b){var c=e.createRange();return c.setStart(a.container(),a.offset()),c.setEnd(b.container(),b.offset()),c},q=function(a){return c.liftN([g.firstPositionIn(a),g.lastPositionIn(a)],function(b,c){var d=n.normalizePosition(!0,b),e=n.normalizePosition(!1,c);return g.nextPosition(a,d).map(function(a){return a.isEqual(e)}).getOr(!0)}).getOr(!0)},r=function(a,b){return function(c){return k.renderCaret(b,c).map(function(b){return m.setCaretPosition(a,b),!0}).getOr(!1)}},s=function(b,c,d,e){var f=b.getBody(),g=a.curry(n.isInlineTarget,b);b.undoManager.ignore(function(){b.selection.setRng(p(d,e)),b.execCommand("Delete"),l.readLocation(g,f,h.fromRangeStart(b.selection.getRng())).map(l.inside).map(r(b,c))}),b.nodeChanged()},t=function(a,b){var c=i.getParentBlock(b,a);return c?c:a},u=function(c,e,f,h){var i=t(c.getBody(),h.container()),k=a.curry(n.isInlineTarget,c),m=l.readLocation(k,i,h);return m.bind(function(c){return f?c.fold(a.constant(b.some(l.inside(c))),b.none,a.constant(b.some(l.outside(c))),b.none):c.fold(b.none,a.constant(b.some(l.outside(c))),b.none,a.constant(b.some(l.inside(c))))}).map(r(c,e)).getOrThunk(function(){var a=g.navigate(f,i,h),b=a.bind(function(a){return l.readLocation(k,i,a)});return m.isSome()&&b.isSome()?n.findRootInline(k,i,h).map(function(a){return!!q(a)&&(j.deleteElement(c,f,d.fromDom(a)),!0)}).getOr(!1):b.bind(function(b){return a.map(function(a){return f?s(c,e,h,a):s(c,e,a,h),!0})}).getOr(!1)})},v=function(a,b,c){if(a.selection.isCollapsed()&&o(a)){var d=h.fromRangeStart(a.selection.getRng());return u(a,b,c,d)}return!1};return{backspaceDelete:v}}),g("5j",["5f","1i","1","2m","59","44","32","1v","56","47"],function(a,b,c,d,e,f,g,h,i,j){var k=f.immutable("start","end"),l=f.immutable("rng","table","cells"),m=a.generate([{removeTable:["element"]},{emptyCells:["cells"]}]),n=function(a,b){return j.closest(h.fromDom(a),"td,th",b)},o=function(a,b){return j.ancestor(a,"table",b)},p=function(a){return g.eq(a.start(),a.end())===!1},q=function(a,b){return o(a.start(),b).bind(function(c){return o(a.end(),b).bind(function(a){return g.eq(c,a)?d.some(c):d.none()})})},r=function(a,b){return e.liftN([n(a.startContainer,b),n(a.endContainer,b)],k).filter(p)},s=function(a,b){return q(a,b).bind(function(b){var c=i.descendants(b,"td,th");return l(a,b,c)})},t=function(a,b){var d=c.curry(g.eq,a);return r(b,d).map(function(a){return s(a,d)})},u=function(a,c){return b.findIndex(a,function(a){return g.eq(a,c)})},v=function(a){return e.liftN([u(a.cells(),a.rng().start()),u(a.cells(),a.rng().end())],function(b,c){return a.cells().slice(b,c+1)})},w=function(a){return v(a).bind(function(b){var c=a.cells();return b.length===c.length?m.removeTable(a.table()):m.emptyCells(b)})},x=function(a){return m.emptyCells(a)},y=function(a,b){return t(a,b).map(w)};return{getActionFromRange:y,getActionFromCells:x}}),g("36",["1i","1v","2t"],function(a,b,c){var d=function(a){for(var b=[],c=0;c<a.rangeCount;c++)b.push(a.getRangeAt(c));return b},e=function(d){return a.bind(d,function(a){var d=c.getSelectedNode(a);return d?[b.fromDom(d)]:[]})},f=function(a){return d(a).length>1};return{getRanges:d,getSelectedNodes:e,hasMultipleRanges:f}}),g("5m",["1i","1v","56","3k","36"],function(a,b,c,d,e){var f=function(b){return a.filter(e.getSelectedNodes(b),d.isTableCell)},g=function(a){var b=c.descendants(a,"td[data-mce-selected],th[data-mce-selected]");return b},h=function(a,b){var c=g(b),d=f(a);return c.length>0?c:d},i=function(a){return h(e.getRanges(a.selection.getSel()),b.fromDom(a.getBody()))};return{getCellsFromRanges:f,getCellsFromElement:g,getCellsFromElementOrRanges:h,getCellsFromEditor:i}}),g("3z",["1i","1","2m","32","1v","3e","41","2y","5d","5j","3k","5k","3s","5l","5m"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=function(b,c){return a.each(c,m.fillWithPaddingBr),b.selection.setCursorLocation(c[0].dom(),0),!0},q=function(a,b){return i.deleteElement(a,!1,b),!0},r=function(a,c,d){return j.getActionFromRange(c,d).map(function(c){return c.fold(b.curry(q,a),b.curry(p,a))})},s=function(a,b){return y(a,b)},t=function(a,b,c,d){return w(b,d).fold(function(){return r(a,b,c)},function(b){return s(a,b)}).getOr(!1)},u=function(a,b){var c=e.fromDom(a.getBody()),d=a.selection.getRng(),f=o.getCellsFromEditor(a);return 0!==f.length?p(a,f):t(a,c,d,b)},v=function(b,c){return a.find(n.parentsAndSelf(c,b),k.isTableCell)},w=function(b,c){return a.find(n.parentsAndSelf(c,b),function(a){return"caption"===f.name(a)})},x=function(a,b,c,f,h){return g.navigate(c,a.getBody(),h).bind(function(a){return v(b,e.fromDom(a.getNode())).map(function(a){return d.eq(a,f)===!1})})},y=function(a,b){return m.fillWithPaddingBr(b),a.selection.setCursorLocation(b.dom(),0),c.some(!0)},z=function(a,b,c,d){return g.firstPositionIn(a.dom()).bind(function(e){return g.lastPositionIn(a.dom()).map(function(a){return b?c.isEqual(e)&&d.isEqual(a):c.isEqual(a)&&d.isEqual(e)})}).getOr(!0)},A=function(a,b){return y(a,b)},B=function(a,b,c){return w(a,e.fromDom(c.getNode())).map(function(a){return d.eq(a,b)===!1})},C=function(a,b,d,e,f){return g.navigate(d,a.getBody(),f).bind(function(c){return z(e,d,f,c)?A(a,e):B(b,e,c)}).or(c.some(!0))},D=function(a,b,c,d){var e=h.fromRangeStart(a.selection.getRng());return v(c,d).bind(function(d){return l.isEmpty(d)?y(a,d):x(a,c,b,d,e)})},E=function(a,b,c,d){var e=h.fromRangeStart(a.selection.getRng());return l.isEmpty(d)?y(a,d):C(a,c,b,d,e)},F=function(a,b,c){var d=e.fromDom(a.getBody());return w(d,c).fold(function(){return D(a,b,d,c)},function(c){return E(a,b,d,c)}).getOr(!1)},G=function(a,b){var c=e.fromDom(a.selection.getStart(!0));return a.selection.isCollapsed()?F(a,b,c):u(a,c)};return{backspaceDelete:G}}),g("1x",["3u","3v","3w","3x","3y","3z"],function(a,b,c,d,e,f){var g=function(a,b){a.getDoc().execCommand(b,!1,null)},h=function(h){c.backspaceDelete(h,!1)||e.backspaceDelete(h,!1)||a.backspaceDelete(h,!1)||f.backspaceDelete(h)||b.backspaceDelete(h,!1)||(g(h,"Delete"),d.paddEmptyBody(h))},i=function(d){c.backspaceDelete(d,!0)||e.backspaceDelete(d,!0)||a.backspaceDelete(d,!0)||f.backspaceDelete(d)||b.backspaceDelete(d,!0)||g(d,"ForwardDelete")};return{deleteCommand:h,forwardDeleteCommand:i}}),g("2s",[],function(){var a=function(a,b){return a&&b&&a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset};return{isEq:a}}),g("2r",["2m","44","2x","1y","s","2e","2s"],function(a,b,c,d,e,f,g){var h=b.immutable("container","offset"),i=function(a,b,c){for(;a&&a!==b;){if(c(a))return a;a=a.parentNode}return null},j=function(a,b,c){return null!==i(a,b,c)},k=function(a,b,c){return j(a,b,function(a){return a.nodeName===c})},l=function(a){return a&&"TABLE"===a.nodeName},m=function(a){return a&&/^(TD|TH|CAPTION)$/.test(a.nodeName)},n=function(a,b){return c.isCaretContainer(a)&&j(a,b,f.isCaretNode)===!1},o=function(a,b,c){for(var f=new e(b,a.getParent(b.parentNode,a.isBlock)||a.getRoot());b=f[c?"prev":"next"]();)if(d.isBr(b))return!0},p=function(a,b){return a.previousSibling&&a.previousSibling.nodeName===b},q=function(a,b){for(;b&&b!==a;){if(d.isContentEditableFalse(b))return!0;b=b.parentNode}return!1},r=function(b,c,f,g,i){var j,l,m,o,p=b.getRoot(),q=b.schema.getNonEmptyElements();if(m=b.getParent(i.parentNode,b.isBlock)||p,g&&d.isBr(i)&&c&&b.isEmpty(m))return a.some(h(i.parentNode,b.nodeIndex(i)));for(j=new e(i,m);o=j[g?"prev":"next"]();){if("false"===b.getContentEditableParent(o)||n(o,p))return a.none();if(d.isText(o)&&o.nodeValue.length>0)return k(o,p,"A")===!1?a.some(h(o,g?o.nodeValue.length:0)):a.none();if(b.isBlock(o)||q[o.nodeName.toLowerCase()])return a.none();l=o}return f&&l?a.some(h(l,0)):a.none()},s=function(b,f,g,i){var j,k,n,s,t,u,v,w=b.getRoot(),x=!1;if(j=i[(g?"start":"end")+"Container"],k=i[(g?"start":"end")+"Offset"],v=d.isElement(j)&&k===j.childNodes.length,t=b.schema.getNonEmptyElements(),u=g,c.isCaretContainer(j))return a.none();if(d.isElement(j)&&k>j.childNodes.length-1&&(u=!1),d.isDocument(j)&&(j=w,k=0),j===w){if(u&&(s=j.childNodes[k>0?k-1:0])){if(c.isCaretContainer(s))return a.none();if(t[s.nodeName]||l(s))return a.none()}if(j.hasChildNodes()){if(k=Math.min(!u&&k>0?k-1:k,j.childNodes.length-1),j=j.childNodes[k],k=d.isText(j)&&v?j.data.length:0,!f&&j===w.lastChild&&l(j))return a.none();if(q(w,j)||c.isCaretContainer(j))return a.none();if(j.hasChildNodes()&&l(j)===!1){s=j,n=new e(j,w);do{if(d.isContentEditableFalse(s)||c.isCaretContainer(s)){x=!1;break}if(d.isText(s)&&s.nodeValue.length>0){k=u?0:s.nodeValue.length,j=s,x=!0;break}if(t[s.nodeName.toLowerCase()]&&!m(s)){k=b.nodeIndex(s),j=s.parentNode,"IMG"!==s.nodeName&&"PRE"!==s.nodeName||u||k++,x=!0;break}}while(s=u?n.next():n.prev())}}}return f&&(d.isText(j)&&0===k&&r(b,v,f,!0,j).each(function(a){j=a.container(),k=a.offset(),x=!0}),d.isElement(j)&&(s=j.childNodes[k],s||(s=j.childNodes[k-1]),!s||!d.isBr(s)||p(s,"A")||o(b,s,!1)||o(b,s,!0)||r(b,v,f,!0,s).each(function(a){j=a.container(),k=a.offset(),x=!0}))),u&&!f&&d.isText(j)&&k===j.nodeValue.length&&r(b,v,f,!1,j).each(function(a){j=a.container(),k=a.offset(),x=!0}),x?a.some(h(j,k)):a.none()},t=function(b,c){var d=c.collapsed,e=c.cloneRange();return s(b,d,!0,e).each(function(a){e.setStart(a.container(),a.offset())}),d||s(b,d,!1,e).each(function(a){e.setEnd(a.container(),a.offset())}),d&&e.collapse(!0),g.isEq(c,e)?a.none():a.some(e)};return{normalize:t}}),g("1z",["1","40","1v","41","2y","1y","s","42","43","2r"],function(a,b,c,d,e,f,g,h,i,j){var k=function(a,b,c){for(var d,e=new g(b,c),f=a.getNonEmptyElements();d=e.next();)if(f[d.nodeName.toLowerCase()]||d.length>0)return!0},l=function(a,b,c){var d=a.create("span",{},"&nbsp;");c.parentNode.insertBefore(d,c),b.scrollIntoView(d),a.remove(d)},m=function(a,b,c,d){var e=a.createRng();d?(e.setStartBefore(c),e.setEndBefore(c)):(e.setStartAfter(c),e.setEndAfter(c)),b.setRng(e)},n=function(a,b){var c,d,e=a.selection,f=a.dom,g=e.getRng(!0);j.normalize(f,g).each(function(a){g.setStart(a.startContainer,a.startOffset),g.setEnd(a.endContainer,a.endOffset)});var h=g.startOffset,i=g.startContainer;if(1===i.nodeType&&i.hasChildNodes()){var n=h>i.childNodes.length-1;i=i.childNodes[Math.min(h,i.childNodes.length-1)]||i,h=n&&3===i.nodeType?i.nodeValue.length:0}var o=f.getParent(i,f.isBlock),p=o?f.getParent(o.parentNode,f.isBlock):null,q=p?p.nodeName.toUpperCase():"",r=b&&b.ctrlKey;"LI"!==q||r||(o=p),i&&3===i.nodeType&&h>=i.nodeValue.length&&(k(a.schema,i,o)||(c=f.create("br"),g.insertNode(c),g.setStartAfter(c),g.setEndAfter(c),d=!0)),c=f.create("br"),g.insertNode(c),l(f,e,c),m(f,e,c,d),a.undoManager.add()},o=function(a,d){var e=c.fromTag("br");b.before(c.fromDom(d),e),a.undoManager.add()},p=function(a,d){r(a.getBody(),d)||b.after(c.fromDom(d),c.fromTag("br"));var e=c.fromTag("br");b.after(c.fromDom(d),e),l(a.dom,a.selection,e.dom()),m(a.dom,a.selection,e.dom(),!1),a.undoManager.add()},q=function(a){return f.isBr(a.getNode())},r=function(a,b){return!!q(e.after(b))||d.nextPosition(a,e.after(b)).map(function(a){return f.isBr(a.getNode())}).getOr(!1)},s=function(a){return a&&"A"===a.nodeName&&"href"in a},t=function(b){return b.fold(a.constant(!1),s,s,a.constant(!1))},u=function(b){var c=a.curry(i.isInlineTarget,b),d=e.fromRangeStart(b.selection.getRng());return h.readLocation(c,b.getBody(),d).filter(t)},v=function(b,c){c.fold(a.noop,a.curry(o,b),a.curry(p,b),a.noop)},w=function(b,c){var d=u(b);d.isSome()?d.each(a.curry(v,b)):n(b,c)};return{insertBr:w}}),g("5n",["5f","1"],function(a,b){var c=a.generate([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),d=function(a,b,c,d){return a.fold(b,c,d)},e=function(a){return a.fold(b.identity,b.identity,b.identity)};return{before:c.before,on:c.on,after:c.after,cata:d,getStart:e}}),g("4d",["5f","44","1v","3g","5n"],function(a,b,c,d,e){var f=a.generate([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),g=b.immutable("start","soffset","finish","foffset"),h=function(a){return f.exact(a.start(),a.soffset(),a.finish(),a.foffset())},i=function(a){return a.match({domRange:function(a){return c.fromDom(a.startContainer)},relative:function(a,b){return e.getStart(a)},exact:function(a,b,c,d){return a}})},j=function(a){var b=i(a);return d.defaultView(b)};return{domRange:f.domRange,relative:f.relative,exact:f.exact,exactFromRange:h,range:g,getWin:j}}),g("20",["1","2m","3c","32","1v","3e","4c","3g","4d","1j"],function(a,b,c,d,e,f,g,h,i,j){var k=c.detect().browser,l=function(a,b){var c=f.isText(b)?g.get(b).length:h.children(b).length+1;return a>c?c:a<0?0:a},m=function(a){return i.range(a.start(),l(a.soffset(),a.start()),a.finish(),l(a.foffset(),a.finish()))},n=function(a,b){return d.contains(a,b)||d.eq(a,b)},o=function(a){return function(b){return n(a,b.start())&&n(a,b.finish())}},p=function(a){return a.inline===!0||k.isIE()},q=function(a){return i.range(e.fromDom(a.startContainer),a.startOffset,e.fromDom(a.endContainer),a.endOffset)},r=function(a){var c=a.getSelection(),d=c&&0!==c.rangeCount?b.from(c.getRangeAt(0)):b.none();return d.map(q)},s=function(a){var b=h.defaultView(a);return r(b.dom()).filter(o(a))},t=function(a,c){return b.from(c).filter(o(a)).map(m)},u=function(a){var c=j.createRange();return c.setStart(a.start().dom(),a.soffset()),c.setEnd(a.finish().dom(),a.foffset()),b.some(c)},v=function(a){var c=p(a)?s(e.fromDom(a.getBody())):b.none();a.bookmark=c.isSome()?c:a.bookmark},w=function(a,c){var d=e.fromDom(a.getBody()),f=p(a)?b.from(c):b.none(),g=f.map(q).filter(o(d));a.bookmark=g.isSome()?g:a.bookmark},x=function(c){var d=c.bookmark?c.bookmark:b.none();return d.bind(a.curry(t,e.fromDom(c.getBody()))).bind(u)},y=function(a){x(a).each(function(b){a.selection.setRng(b)})};return{store:v,storeNative:w,readRange:r,restore:y,getRng:x,getBookmark:s,validate:t}}),g("8",["b","1w","1x","1y","1z","20","1e"],function(a,b,c,d,e,f,g){var h=g.each,i=g.extend,j=g.map,k=g.inArray,l=g.explode,m=!0,n=!1;return function(g){var o,p,q,r,s={state:{},exec:{},value:{}},t=g.settings;g.on("PreInit",function(){o=g.dom,p=g.selection,t=g.settings,q=g.formatter});var u=function(a,b,c,d){var e,i,j=0;if(!g.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(a)||d&&d.skip_focus?f.restore(g):g.focus(),d=g.fire("BeforeExecCommand",{command:a,ui:b,value:c}),d.isDefaultPrevented())return!1;if(i=a.toLowerCase(),e=s.exec[i])return e(i,b,c),g.fire("ExecCommand",{command:a,ui:b,value:c}),!0;if(h(g.plugins,function(d){if(d.execCommand&&d.execCommand(a,b,c))return g.fire("ExecCommand",{command:a,ui:b,value:c}),j=!0,!1}),j)return j;if(g.theme&&g.theme.execCommand&&g.theme.execCommand(a,b,c))return g.fire("ExecCommand",{command:a,ui:b,value:c}),!0;try{j=g.getDoc().execCommand(a,b,c)}catch(a){}return!!j&&(g.fire("ExecCommand",{command:a,ui:b,value:c}),!0)}},v=function(a){var b;if(!g.quirks.isHidden()&&!g.removed){if(a=a.toLowerCase(),b=s.state[a])return b(a);try{return g.getDoc().queryCommandState(a)}catch(a){}return!1}},w=function(a){var b;if(!g.quirks.isHidden()&&!g.removed){if(a=a.toLowerCase(),b=s.value[a])return b(a);try{return g.getDoc().queryCommandValue(a)}catch(a){}}},x=function(a,b){b=b||"exec",h(a,function(a,c){h(c.toLowerCase().split(","),function(c){s[b][c]=a})})},y=function(a,b,c){
a=a.toLowerCase(),s.exec[a]=function(a,d,e,f){return b.call(c||g,d,e,f)}},z=function(a){if(a=a.toLowerCase(),s.exec[a])return!0;try{return g.getDoc().queryCommandSupported(a)}catch(a){}return!1},A=function(a,b,c){a=a.toLowerCase(),s.state[a]=function(){return b.call(c||g)}},B=function(a,b,c){a=a.toLowerCase(),s.value[a]=function(){return b.call(c||g)}},C=function(a){return a=a.toLowerCase(),!!s.exec[a]};i(this,{execCommand:u,queryCommandState:v,queryCommandValue:w,queryCommandSupported:z,addCommands:x,addCommand:y,addQueryStateHandler:A,addQueryValueHandler:B,hasCustomCommand:C});var D=function(a,b,c){return void 0===b&&(b=n),void 0===c&&(c=null),g.getDoc().execCommand(a,b,c)},E=function(a){return q.match(a)},F=function(a,b){q.toggle(a,b?{value:b}:void 0),g.nodeChanged()},G=function(a){r=p.getBookmark(a)},H=function(){p.moveToBookmark(r)};x({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){g.undoManager.add()},"Cut,Copy,Paste":function(b){var c,d=g.getDoc();try{D(b)}catch(a){c=m}if("paste"!==b||d.queryCommandEnabled(b)||(c=!0),c||!d.queryCommandSupported(b)){var e=g.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");a.mac&&(e=e.replace(/Ctrl\+/g,"\u2318+")),g.notificationManager.open({text:e,type:"error"})}},unlink:function(){if(p.isCollapsed()){var a=g.dom.getParent(g.selection.getStart(),"a");return void(a&&g.dom.remove(a,!0))}q.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(a){var b=a.substring(7);"full"==b&&(b="justify"),h("left,center,right,justify".split(","),function(a){b!=a&&q.remove("align"+a)}),"none"!=b&&F("align"+b)},"InsertUnorderedList,InsertOrderedList":function(a){var b,c;D(a),b=o.getParent(p.getNode(),"ol,ul"),b&&(c=b.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(c.nodeName)&&(G(),o.split(c,b),H()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(a){F(a)},"ForeColor,HiliteColor,FontName":function(a,b,c){F(a,c)},FontSize:function(a,b,c){var d,e;c>=1&&c<=7&&(e=l(t.font_size_style_values),d=l(t.font_size_classes),c=d?d[c-1]||c:e[c-1]||c),F(a,c)},RemoveFormat:function(a){q.remove(a)},mceBlockQuote:function(){F("blockquote")},FormatBlock:function(a,b,c){return F(c||"p")},mceCleanup:function(){var a=p.getBookmark();g.setContent(g.getContent({cleanup:m}),{cleanup:m}),p.moveToBookmark(a)},mceRemoveNode:function(a,b,c){var d=c||p.getNode();d!=g.getBody()&&(G(),g.dom.remove(d,m),H())},mceSelectNodeDepth:function(a,b,c){var d=0;o.getParent(p.getNode(),function(a){if(1==a.nodeType&&d++==c)return p.select(a),n},g.getBody())},mceSelectNode:function(a,b,c){p.select(c)},mceInsertContent:function(a,c,d){b.insertAtCaret(g,d)},mceInsertRawHTML:function(a,b,c){p.setContent("tiny_mce_marker"),g.setContent(g.getContent().replace(/tiny_mce_marker/g,function(){return c}))},mceToggleFormat:function(a,b,c){F(c)},mceSetContent:function(a,b,c){g.setContent(c)},"Indent,Outdent":function(a){var b,c,d;b=t.indentation,c=/[a-z%]+$/i.exec(b),b=parseInt(b,10),v("InsertUnorderedList")||v("InsertOrderedList")?D(a):(t.forced_root_block||o.getParent(p.getNode(),o.isBlock)||q.apply("div"),h(p.getSelectedBlocks(),function(e){if("false"!==o.getContentEditable(e)&&"LI"!==e.nodeName){var f=g.getParam("indent_use_margin",!1)?"margin":"padding";f="TABLE"===e.nodeName?"margin":f,f+="rtl"==o.getStyle(e,"direction",!0)?"Right":"Left","outdent"==a?(d=Math.max(0,parseInt(e.style[f]||0,10)-b),o.setStyle(e,f,d?d+c:"")):(d=parseInt(e.style[f]||0,10)+b+c,o.setStyle(e,f,d))}}))},mceRepaint:function(){},InsertHorizontalRule:function(){g.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){g.hasVisual=!g.hasVisual,g.addVisual()},mceReplaceContent:function(a,b,c){g.execCommand("mceInsertContent",!1,c.replace(/\{\$selection\}/g,p.getContent({format:"text"})))},mceInsertLink:function(a,b,c){var d;"string"==typeof c&&(c={href:c}),d=o.getParent(p.getNode(),"a"),c.href=c.href.replace(" ","%20"),d&&c.href||q.remove("link"),c.href&&q.apply("link",c,d)},selectAll:function(){var a=o.getParent(p.getStart(),d.isContentEditableTrue);if(a){var b=o.createRng();b.selectNodeContents(a),p.setRng(b)}},"delete":function(){c.deleteCommand(g)},forwardDelete:function(){c.forwardDeleteCommand(g)},mceNewDocument:function(){g.setContent("")},InsertLineBreak:function(a,b,c){return e.insertBr(g,c),!0}}),x({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(a){var b="align"+a.substring(7),c=p.isCollapsed()?[o.getParent(p.getNode(),o.isBlock)]:p.getSelectedBlocks(),d=j(c,function(a){return!!q.matchNode(a,b)});return k(d,m)!==-1},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(a){return E(a)},mceBlockQuote:function(){return E("blockquote")},Outdent:function(){var a;if(t.inline_styles){if((a=o.getParent(p.getStart(),o.isBlock))&&parseInt(a.style.paddingLeft,10)>0)return m;if((a=o.getParent(p.getEnd(),o.isBlock))&&parseInt(a.style.paddingLeft,10)>0)return m}return v("InsertUnorderedList")||v("InsertOrderedList")||!t.inline_styles&&!!o.getParent(p.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(a){var b=o.getParent(p.getNode(),"ul,ol");return b&&("insertunorderedlist"===a&&"UL"===b.tagName||"insertorderedlist"===a&&"OL"===b.tagName)}},"state"),x({"FontSize,FontName":function(a){var b,c=0;return(b=o.getParent(p.getNode(),"span"))&&(c="fontsize"==a?b.style.fontSize:b.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),c}},"value"),x({Undo:function(){g.undoManager.undo()},Redo:function(){g.undoManager.redo()}})}}),g("16",["1e"],function(a){var b=a.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," "),c=function(b){var c,d,e=this,f={},g=function(){return!1},h=function(){return!0};b=b||{},c=b.scope||e,d=b.toggleEvent||g;var i=function(a,d){var e,i,j,l;if(a=a.toLowerCase(),d=d||{},d.type=a,d.target||(d.target=c),d.preventDefault||(d.preventDefault=function(){d.isDefaultPrevented=h},d.stopPropagation=function(){d.isPropagationStopped=h},d.stopImmediatePropagation=function(){d.isImmediatePropagationStopped=h},d.isDefaultPrevented=g,d.isPropagationStopped=g,d.isImmediatePropagationStopped=g),b.beforeFire&&b.beforeFire(d),e=f[a])for(i=0,j=e.length;i<j;i++){if(l=e[i],l.once&&k(a,l.func),d.isImmediatePropagationStopped())return d.stopPropagation(),d;if(l.func.call(c,d)===!1)return d.preventDefault(),d}return d},j=function(b,c,h,i){var j,k,l;if(c===!1&&(c=g),c)for(c={func:c},i&&a.extend(c,i),k=b.toLowerCase().split(" "),l=k.length;l--;)b=k[l],j=f[b],j||(j=f[b]=[],d(b,!0)),h?j.unshift(c):j.push(c);return e},k=function(a,b){var c,g,h,i,j;if(a)for(i=a.toLowerCase().split(" "),c=i.length;c--;){if(a=i[c],g=f[a],!a){for(h in f)d(h,!1),delete f[h];return e}if(g){if(b)for(j=g.length;j--;)g[j].func===b&&(g=g.slice(0,j).concat(g.slice(j+1)),f[a]=g);else g.length=0;g.length||(d(a,!1),delete f[a])}}else{for(a in f)d(a,!1);f={}}return e},l=function(a,b,c){return j(a,b,c,{once:!0})},m=function(a){return a=a.toLowerCase(),!(!f[a]||0===f[a].length)};e.fire=i,e.on=j,e.off=k,e.once=l,e.has=m};return c.isNative=function(a){return!!b[a.toLowerCase()]},c}),g("1c",["16"],function(a){var b=function(b){return b._eventDispatcher||(b._eventDispatcher=new a({scope:b,toggleEvent:function(c,d){a.isNative(c)&&b.toggleNativeEvent&&b.toggleNativeEvent(c,d)}})),b._eventDispatcher};return{fire:function(a,c,d){var e=this;if(e.removed&&"remove"!==a)return c;if(c=b(e).fire(a,c,d),d!==!1&&e.parent)for(var f=e.parent();f&&!c.isPropagationStopped();)f.fire(a,c,!1),f=f.parent();return c},on:function(a,c,d){return b(this).on(a,c,d)},off:function(a,c){return b(this).off(a,c)},once:function(a,c){return b(this).once(a,c)},hasEventListeners:function(a){return b(this).has(a)}}}),g("a",["1c","l","1e"],function(a,b,c){var d,e=b.DOM,f=function(a,b){return"selectionchange"==b?a.getDoc():!a.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(b)?a.getDoc().documentElement:a.settings.event_root?(a.eventRoot||(a.eventRoot=e.select(a.settings.event_root)[0]),a.eventRoot):a.getBody()},g=function(a,b){var c,g,h=function(a){return!a.hidden&&!a.readonly};if(a.delegates||(a.delegates={}),!a.delegates[b]&&!a.removed)if(c=f(a,b),a.settings.event_root){if(d||(d={},a.editorManager.on("removeEditor",function(){var b;if(!a.editorManager.activeEditor&&d){for(b in d)a.dom.unbind(f(a,b));d=null}})),d[b])return;g=function(c){for(var d=c.target,f=a.editorManager.get(),g=f.length;g--;){var i=f[g].getBody();(i===d||e.isChildOf(d,i))&&h(f[g])&&f[g].fire(b,c)}},d[b]=g,e.bind(c,b,g)}else g=function(c){h(a)&&a.fire(b,c)},e.bind(c,b,g),a.delegates[b]=g},h={bindPendingEventDelegates:function(){var a=this;c.each(a._pendingNativeEvents,function(b){g(a,b)})},toggleNativeEvent:function(a,b){var c=this;"focus"!=a&&"blur"!=a&&(b?c.initialized?g(c,a):c._pendingNativeEvents?c._pendingNativeEvents.push(a):c._pendingNativeEvents=[a]:c.initialized&&(c.dom.unbind(f(c,a),a,c.delegates[a]),delete c.delegates[a]))},unbindAllNativeEvents:function(){var a,b=this;if(b.delegates){for(a in b.delegates)b.dom.unbind(f(b,a),a,b.delegates[a]);delete b.delegates}b.inline||(b.getBody().onload=null,b.dom.unbind(b.getWin()),b.dom.unbind(b.getDoc())),b.dom.unbind(b.getBody()),b.dom.unbind(b.getContainer())}};return h=c.extend({},a,h)}),g("22",[],function(){var a=function(a,b,c){try{a.getDoc().execCommand(b,!1,c)}catch(a){}},b=function(a){var b,c;return b=a.getBody(),c=function(b){a.dom.getParents(b.target,"a").length>0&&b.preventDefault()},a.dom.bind(b,"click",c),{unbind:function(){a.dom.unbind(b,"click",c)}}},c=function(c,d){c._clickBlocker&&(c._clickBlocker.unbind(),c._clickBlocker=null),d?(c._clickBlocker=b(c),c.selection.controlSelection.hideResizeRect(),c.readonly=!0,c.getBody().contentEditable=!1):(c.readonly=!1,c.getBody().contentEditable=!0,a(c,"StyleWithCSS",!1),a(c,"enableInlineTableEditing",!1),a(c,"enableObjectResizing",!1),c.focus(),c.nodeChanged())},d=function(a,b){var d=a.readonly?"readonly":"design";b!=d&&(a.initialized?c(a,"readonly"==b):a.on("init",function(){c(a,"readonly"==b)}),a.fire("SwitchMode",{mode:b}))};return{setMode:d}}),g("c",["1e","b"],function(a,b){var c=a.each,d=a.explode,e={f9:120,f10:121,f11:122},f=a.makeMap("alt,ctrl,shift,meta,access");return function(g){var h=this,i={},j=[],k=function(a){var g,h,i={};c(d(a,"+"),function(a){a in f?i[a]=!0:/^[0-9]{2,}$/.test(a)?i.keyCode=parseInt(a,10):(i.charCode=a.charCodeAt(0),i.keyCode=e[a]||a.toUpperCase().charCodeAt(0))}),g=[i.keyCode];for(h in f)i[h]?g.push(h):i[h]=!1;return i.id=g.join(","),i.access&&(i.alt=!0,b.mac?i.ctrl=!0:i.shift=!0),i.meta&&(b.mac?i.meta=!0:(i.ctrl=!0,i.meta=!1)),i},l=function(b,c,e,f){var h;return h=a.map(d(b,">"),k),h[h.length-1]=a.extend(h[h.length-1],{func:e,scope:f||g}),a.extend(h[0],{desc:g.translate(c),subpatterns:h.slice(1)})},m=function(a){return a.altKey||a.ctrlKey||a.metaKey},n=function(a){return"keydown"===a.type&&a.keyCode>=112&&a.keyCode<=123},o=function(a,b){return!!b&&(b.ctrl==a.ctrlKey&&b.meta==a.metaKey&&(b.alt==a.altKey&&b.shift==a.shiftKey&&(!!(a.keyCode==b.keyCode||a.charCode&&a.charCode==b.charCode)&&(a.preventDefault(),!0))))},p=function(a){return a.func?a.func.call(a.scope):null};g.on("keyup keypress keydown",function(a){!m(a)&&!n(a)||a.isDefaultPrevented()||(c(i,function(b){if(o(a,b))return j=b.subpatterns.slice(0),"keydown"==a.type&&p(b),!0}),o(a,j[0])&&(1===j.length&&"keydown"==a.type&&p(j[0]),j.shift()))}),h.add=function(b,e,f,h){var j;return j=f,"string"==typeof f?f=function(){g.execCommand(j,!1,null)}:a.isArray(j)&&(f=function(){g.execCommand(j[0],j[1],j[2])}),c(d(a.trim(b.toLowerCase())),function(a){var b=l(a,e,f,h);i[b.id]=b}),!0},h.remove=function(a){var b=l(a);return!!i[b.id]&&(delete i[b.id],!0)}}}),g("5o",["5a"],function(a){var b=function(b){return a.first(b).isSome()},c=function(b,c,d){return a.ancestor(b,c,d).isSome()},d=function(b,c,d){return a.closest(b,c,d).isSome()},e=function(b,c){return a.sibling(b,c).isSome()},f=function(b,c){return a.child(b,c).isSome()},g=function(b,c){return a.descendant(b,c).isSome()};return{any:b,ancestor:c,closest:d,sibling:e,child:f,descendant:g}}),g("4g",["1","2m","32","1v","5o","3g","1j"],function(a,b,c,d,e,f,g){var h=function(a){a.dom().focus()},i=function(a){a.dom().blur()},j=function(a){var b=f.owner(a).dom();return a.dom()===b.activeElement},k=function(a){var c=void 0!==a?a.dom():g;return b.from(c.activeElement).map(d.fromDom)},l=function(b){var d=f.owner(b),g=k(d).filter(function(d){return e.closest(d,a.curry(c.eq,b))});g.fold(function(){h(b)},a.noop)},m=function(a){return k(f.owner(a)).filter(function(b){return a.dom().contains(b.dom())})};return{hasFocus:j,focus:h,blur:i,active:k,search:m,focusInside:l}}),g("23",["2m","32","4g","1v","b","41","3k","2t","20"],function(a,b,c,d,e,f,g,h,i){var j=function(a,b){return a.dom.getParent(b,function(b){return"true"===a.dom.getContentEditable(b)})},k=function(b){return b.collapsed?a.from(h.getNode(b.startContainer,b.startOffset)).map(d.fromDom):a.none()},l=function(c,d){return k(d).bind(function(d){return g.isTableSection(d)?a.some(d):b.contains(c,d)===!1?a.some(c):a.none()})},m=function(a,b){l(d.fromDom(a.getBody()),b).bind(function(a){return f.firstPositionIn(a.dom())}).fold(function(){a.selection.normalize()},function(b){a.selection.setRng(b.toRange())})},n=function(a){if(a.setActive)try{a.setActive()}catch(b){a.focus()}else a.focus()},o=function(a){return c.hasFocus(a)||c.search(a).isSome()},p=function(a){return a.iframeElement&&c.hasFocus(d.fromDom(a.iframeElement))},q=function(a){var b=a.getBody();return b&&o(d.fromDom(b))},r=function(a){return a.inline?q(a):p(a)},s=function(a){var b,c=a.selection,d=a.settings.content_editable,f=a.getBody(),g=c.getRng();return a.quirks.refreshContentEditable(),b=j(a,c.getNode()),a.$.contains(f,b)?(n(b),m(a,g),void t(a)):(void 0!==a.bookmark&&r(a)===!1&&i.getRng(a).each(function(b){a.selection.setRng(b),g=b}),d||(e.opera||n(f),a.getWin().focus()),(e.gecko||d)&&(n(f),m(a,g)),void t(a))},t=function(a){a.editorManager.setActive(a)},u=function(a,b){a.removed||(b?t(a):s(a))};return{focus:u,hasFocus:r}}),g("2n",["1","2m","32","1v","3f","3g"],function(a,b,c,d,e,f){var g=function(a,b){var c=b.dom();return c[a]},h=function(a,b){return parseInt(e.get(b,a),10)},i=a.curry(g,"clientWidth"),j=a.curry(g,"clientHeight"),k=a.curry(h,"margin-top"),l=a.curry(h,"margin-left"),m=function(a){return a.dom().getBoundingClientRect()},n=function(a,b,c){var d=i(a),e=j(a);return b>=0&&c>=0&&b<=d&&c<=e},o=function(a,b,c,d){var e=m(b),f=a?e.left+b.dom().clientLeft+l(b):0,g=a?e.top+b.dom().clientTop+k(b):0,h=c-f,i=d-g;return{x:h,y:i}},p=function(a,b,c){var e=d.fromDom(a.getBody()),g=a.inline?e:f.documentElement(e),h=o(a.inline,g,b,c);return n(g,h.x,h.y)},q=function(a){return b.from(a).map(d.fromDom)},r=function(a){var b=a.inline?a.getBody():a.getContentAreaContainer();return q(b).map(function(a){return c.contains(f.owner(a),a)}).getOr(!1)};return{isXYInContentArea:p,isEditorAttachedToDom:r}}),g("2o",[],function(){return function(){var a=function(){throw new Error("Theme did not provide a NotificationManager implementation.")};return{open:a,close:a,reposition:a,getArgs:a}}}),g("g",["1i","2m","2n","2o","15"],function(a,b,c,d,e){return function(f){var g=[],h=function(){var a=f.theme;return a&&a.getNotificationManagerImpl?a.getNotificationManagerImpl():d()},i=function(){return b.from(g[0])},j=function(a,b){return!(a.type!==b.type||a.text!==b.text||a.progressBar||a.timeout||b.progressBar||b.timeout)},k=function(){g.length>0&&h().reposition(g)},l=function(a){g.push(a)},m=function(b){a.findIndex(g,function(a){return a===b}).each(function(a){g.splice(a,1)})},n=function(b){if(!f.removed&&c.isEditorAttachedToDom(f))return a.find(g,function(a){return j(h().getArgs(a),b)}).getOrThunk(function(){f.editorManager.setActive(f);var a=h().open(b,function(){m(a),k()});return l(a),k(),a})},o=function(){i().each(function(a){h().close(a),m(a),k()})},p=function(){return g},q=function(b){b.on("SkinLoaded",function(){var a=b.settings.service_message;a&&n({text:a,type:"warning",timeout:0,icon:""})}),b.on("ResizeEditor ResizeWindow",function(){e.requestAnimationFrame(k)}),b.on("remove",function(){a.each(g,function(a){h().close(a)})})};return q(f),{open:n,close:o,getNotifications:p}}}),g("2p",[],function(){return function(){var a=function(){throw new Error("Theme did not provide a WindowManager implementation.")};return{open:a,alert:a,confirm:a,close:a,getParams:a,setParams:a}}}),g("h",["1i","2m","20","2p"],function(a,b,c,d){return function(e){var f=[],g=function(){var a=e.theme;return a&&a.getWindowManagerImpl?a.getWindowManagerImpl():d()},h=function(a,b){return function(){return b?b.apply(a,arguments):void 0}},i=function(a){e.fire("OpenWindow",{win:a})},j=function(a){e.fire("CloseWindow",{win:a})},k=function(a){f.push(a),i(a)},l=function(b){a.findIndex(f,function(a){return a===b}).each(function(a){f.splice(a,1),j(b),0===f.length&&e.focus()})},m=function(){return b.from(f[f.length-1])},n=function(a,b){e.editorManager.setActive(e),c.store(e);var d=g().open(a,b,l);return k(d),d},o=function(a,b,c){var d=g().alert(a,h(c?c:this,b),l);k(d)},p=function(a,b,c){var d=g().confirm(a,h(c?c:this,b),l);k(d)},q=function(){m().each(function(a){g().close(a),l(a)})},r=function(){return m().map(g().getParams).getOr(null)},s=function(a){m().each(function(b){g().setParams(b,a)})},t=function(){return f};return e.on("remove",function(){a.each(f.slice(0),function(a){g().close(a)})}),{windows:f,open:n,alert:o,confirm:p,close:q,getParams:r,setParams:s,getWindows:t}}}),g("28",["2","6"],function(a,b){var c=b.PluginManager,d=function(a,b){for(var d in c.urls){var e=c.urls[d]+"/plugin"+b+".js";if(e===a)return d}return null},e=function(a,b){var c=d(b,a.suffix);return c?"Failed to load plugin: "+c+" from url "+b:"Failed to load plugin url: "+b},f=function(a,b){a.notificationManager.open({type:"error",text:b})},g=function(a,b){a._skinLoaded?f(a,b):a.on("SkinLoaded",function(){f(a,b)})},h=function(a,b){g(a,"Failed to upload image: "+b)},i=function(a,b){g(a,e(a,b))},j=function(b){var c=a.console;c&&!a.test&&(c.error?c.error.apply(c,arguments):c.log.apply(c,arguments))};return{pluginLoadError:i,uploadError:h,displayError:g,initError:j}}),g("4i",["6"],function(a){return a.PluginManager}),g("4j",["6"],function(a){return a.ThemeManager}),g("4m",["1r","1y","m"],function(a,b,c){var d={},e=a.filter,f=a.each,g=function(a,b){var c=d[a];c||(d[a]=c=[]),d[a].push(b)},h=function(a,b){f(d[a],function(a){a(b)})};return g("pre",function(d){var g,h,i=d.selection.getRng(),j=function(b){return g(b.previousSibling)&&a.indexOf(h,b.previousSibling)!==-1},k=function(a,b){c(b).remove(),c(a).append("<br><br>").append(b.childNodes)};g=b.matchNodeNames("pre"),i.collapsed||(h=d.selection.getSelectedBlocks(),f(e(e(h,g),j),function(a){k(a.previousSibling,a)}))}),{postProcess:h}}),g("2u",["1e"],function(a){var b=a.each,c=function(a,b){var c=a.childNodes;return b--,b>c.length-1?b=c.length-1:b<0&&(b=0),c[b]||a},d=function(a,d,e){var f,g,h,i,j,k,l,m=d.startContainer,n=d.startOffset,o=d.endContainer,p=d.endOffset;if(l=a.select("td[data-mce-selected],th[data-mce-selected]"),l.length>0)return void b(l,function(a){e([a])});var q=function(a){var b;return b=a[0],3===b.nodeType&&b===m&&n>=b.nodeValue.length&&a.splice(0,1),b=a[a.length-1],0===p&&a.length>0&&b===o&&3===b.nodeType&&a.splice(a.length-1,1),a},r=function(a,b,c){for(var d=[];a&&a!=c;a=a[b])d.push(a);return d},s=function(a,b){do{if(a.parentNode===b)return a;a=a.parentNode}while(a)},t=function(a,b,c){var d=c?"nextSibling":"previousSibling";for(i=a,j=i.parentNode;i&&i!=b;i=j)j=i.parentNode,k=r(i===a?i:i[d],d),k.length&&(c||k.reverse(),e(q(k)))};if(1===m.nodeType&&m.hasChildNodes()&&(m=m.childNodes[n]),1===o.nodeType&&o.hasChildNodes()&&(o=c(o,p)),m===o)return e(q([m]));for(f=a.findCommonAncestor(m,o),i=m;i;i=i.parentNode){if(i===o)return t(m,f,!0);if(i===f)break}for(i=o;i;i=i.parentNode){if(i===m)return t(o,f);if(i===f)break}g=s(m,f)||m,h=s(o,f)||o,t(m,g,!0),k=r(g===m?g:g.nextSibling,"nextSibling",h===o?h.nextSibling:h),k.length&&e(q(k)),t(o,h)};return{walk:d}}),g("2j",["j","1y","s","2e","48","49","2h","2u","1e"],function(a,b,c,d,e,f,g,h,i){var j=/^(src|href|style)$/,k=i.each,l=f.isEq,m=function(a){return/^(TH|TD)$/.test(a.nodeName)},n=function(a,d,e){var f,g,h;return f=d[e?"startContainer":"endContainer"],g=d[e?"startOffset":"endOffset"],b.isElement(f)&&(h=f.childNodes.length-1,!e&&g&&g--,f=f.childNodes[g>h?h:g]),b.isText(f)&&e&&g>=f.nodeValue.length&&(f=new c(f,a.getBody()).next()||f),b.isText(f)&&!e&&0===g&&(f=new c(f,a.getBody()).prev()||f),f},o=function(a,b,c,d){var e=a.create(c,d);return b.parentNode.insertBefore(e,b),e.appendChild(b),e},p=function(a,c,d){return!!l(c,d.inline)||(!!l(c,d.block)||(d.selector?b.isElement(c)&&a.is(c,d.selector):void 0))},q=function(a,b){return b.links&&"A"===a.tagName},r=function(a,b,c,d){return b=f.getNonWhiteSpaceSibling(b,c,d),!b||"BR"===b.nodeName||a.isBlock(b)},s=function(a,b,c){var d,e=b.parentNode,g=a.dom,h=a.settings.forced_root_block;c.block&&(h?e===g.getRoot()&&(c.list_block&&l(b,c.list_block)||k(i.grep(b.childNodes),function(b){f.isValid(a,h,b.nodeName.toLowerCase())?d?d.appendChild(b):(d=o(g,b,h),g.setAttribs(d,a.settings.forced_root_block_attrs)):d=0})):g.isBlock(b)&&!g.isBlock(e)&&(r(g,b,!1)||r(g,b.firstChild,!0,1)||b.insertBefore(g.create("br"),b.firstChild),r(g,b,!0)||r(g,b.lastChild,!1,1)||b.appendChild(g.create("br")))),c.selector&&c.inline&&!l(c.inline,b)||g.remove(b,1)},t=function(a,b,c,d,e){var g,h,i,m=a.dom;if(!p(m,d,b)&&!q(d,b))return!1;if("all"!==b.remove)for(k(b.styles,function(a,g){a=f.normalizeStyleValue(m,f.replaceVars(a,c),g),"number"==typeof g&&(g=a,e=0),(b.remove_similar||!e||l(f.getStyle(m,e,g),a))&&m.setStyle(d,g,""),i=1}),i&&""===m.getAttrib(d,"style")&&(d.removeAttribute("style"),d.removeAttribute("data-mce-style")),k(b.attributes,function(a,b){var g;if(a=f.replaceVars(a,c),"number"==typeof b&&(b=a,e=0),!e||l(m.getAttrib(e,b),a)){if("class"===b&&(a=m.getAttrib(d,b),a&&(g="",k(a.split(/\s+/),function(a){/mce\-\w+/.test(a)&&(g+=(g?" ":"")+a)}),g)))return void m.setAttrib(d,b,g);"class"===b&&d.removeAttribute("className"),j.test(b)&&d.removeAttribute("data-mce-"+b),d.removeAttribute(b)}}),k(b.classes,function(a){a=f.replaceVars(a,c),e&&!m.hasClass(e,a)||m.removeClass(d,a)}),h=m.getAttribs(d),g=0;g<h.length;g++){var n=h[g].nodeName;if(0!==n.indexOf("_")&&0!==n.indexOf("data-"))return!1}return"none"!==b.remove?(s(a,d,b),!0):void 0},u=function(a,b,c,d,e){var h;return k(f.getParents(a.dom,b.parentNode).reverse(),function(b){var f;h||"_start"===b.id||"_end"===b.id||(f=g.matchNode(a,b,c,d,e),f&&f.split!==!1&&(h=b))}),h},v=function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o=a.dom;if(c){for(n=c.parentNode,i=d.parentNode;i&&i!==n;i=i.parentNode){for(j=o.clone(i,!1),m=0;m<b.length;m++)if(t(a,b[m],h,j,j)){j=0;break}j&&(k&&j.appendChild(k),l||(l=j),k=j)}!f||g.mixed&&o.isBlock(c)||(d=o.split(c,d)),k&&(e.parentNode.insertBefore(k,e),l.appendChild(e))}return d},w=function(c,j,l,p,q){var r,s,w=c.formatter.get(j),x=w[0],y=!0,z=c.dom,A=c.selection,B=function(a){var b=u(c,a,j,l,q);return v(c,w,b,a,a,!0,x,l)},C=function(a){var d,e,f,g,h;if(b.isElement(a)&&z.getContentEditable(a)&&(g=y,y="true"===z.getContentEditable(a),h=!0),d=i.grep(a.childNodes),y&&!h)for(e=0,f=w.length;e<f&&!t(c,w[e],l,a,a);e++);if(x.deep&&d.length){for(e=0,f=d.length;e<f;e++)C(d[e]);h&&(y=g)}},D=function(c){var d=z.get(c?"_start":"_end"),e=d[c?"firstChild":"lastChild"];return a.isBookmarkNode(e)&&(e=e[c?"firstChild":"lastChild"]),b.isText(e)&&0===e.data.length&&(e=c?d.previousSibling||d.nextSibling:d.nextSibling||d.previousSibling),z.remove(d,!0),e},E=function(a){var d,g,i=a.commonAncestorContainer;if(a=e.expandRng(c,a,w,!0),x.split){if(d=n(c,a,!0),g=n(c,a),d!==g){if(/^(TR|TH|TD)$/.test(d.nodeName)&&d.firstChild&&(d="TR"===d.nodeName?d.firstChild.firstChild||d:d.firstChild||d),i&&/^T(HEAD|BODY|FOOT|R)$/.test(i.nodeName)&&m(g)&&g.firstChild&&(g=g.firstChild||g),z.isChildOf(d,g)&&d!==g&&!z.isBlock(g)&&!m(d)&&!m(g))return d=o(z,d,"span",{id:"_start","data-mce-type":"bookmark"}),B(d),void(d=D(!0));d=o(z,d,"span",{id:"_start","data-mce-type":"bookmark"}),g=o(z,g,"span",{id:"_end","data-mce-type":"bookmark"}),B(d),B(g),d=D(!0),g=D()}else d=g=B(d);a.startContainer=d.parentNode?d.parentNode:d,a.startOffset=z.nodeIndex(d),a.endContainer=g.parentNode?g.parentNode:g,a.endOffset=z.nodeIndex(g)+1}h.walk(z,a,function(a){k(a,function(a){C(a),b.isElement(a)&&"underline"===c.dom.getStyle(a,"text-decoration")&&a.parentNode&&"underline"===f.getTextDecoration(z,a.parentNode)&&t(c,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,a)})})};if(p)return void(p.nodeType?(s=z.createRng(),s.setStartBefore(p),s.setEndAfter(p),E(s)):E(p));if("false"!==z.getContentEditable(A.getNode()))A.isCollapsed()&&x.inline&&!z.select("td[data-mce-selected],th[data-mce-selected]").length?d.removeCaretFormat(c,j,l,q):(r=A.getBookmark(),E(A.getRng(!0)),A.moveToBookmark(r),x.inline&&g.match(c,j,l,A.getStart())&&f.moveStart(z,A,A.getRng(!0)),c.nodeChanged());else{p=A.getNode();for(var F=0,G=w.length;F<G&&(!w[F].ceFalseOverride||!t(c,w[F],l,p,p));F++);}};return{removeFormat:t,remove:w}}),g("4n",["1","j","3r","1y","2e","49","2h","2j","1e"],function(a,b,c,d,e,f,g,h,i){var j=i.each,k=function(a){return a&&1===a.nodeType&&!b.isBookmarkNode(a)&&!e.isCaretNode(a)&&!d.isBogus(a)},l=function(a,c){var d;for(d=a;d;d=d[c]){if(3===d.nodeType&&0!==d.nodeValue.length)return a;if(1===d.nodeType&&!b.isBookmarkNode(d))return d}return a},m=function(a,b,d){var e,f,g=new c(a);if(b&&d&&(b=l(b,"previousSibling"),d=l(d,"nextSibling"),g.compare(b,d))){for(e=b.nextSibling;e&&e!==d;)f=e,e=e.nextSibling,b.appendChild(f);return a.remove(d),i.each(i.grep(d.childNodes),function(a){b.appendChild(a)}),b}return d},n=function(a,b,c){j(a.childNodes,function(a){k(a)&&(b(a)&&c(a),a.hasChildNodes()&&n(a,b,c))})},o=function(b,c){return a.curry(function(a,c){return!(!c||!f.getStyle(b,c,a))},c)},p=function(b,c,d){return a.curry(function(a,c,d){b.setStyle(d,a,c),""===d.getAttribute("style")&&d.removeAttribute("style"),q(b,d)},c,d)},q=function(a,b){"SPAN"===b.nodeName&&0===a.getAttribs(b).length&&a.remove(b,!0)},r=function(a,b){var c;1===b.nodeType&&b.parentNode&&1===b.parentNode.nodeType&&(c=f.getTextDecoration(a,b.parentNode),a.getStyle(b,"color")&&c?a.setStyle(b,"text-decoration",c):a.getStyle(b,"text-decoration")===c&&a.setStyle(b,"text-decoration",null))},s=function(b,c,d,e){(c.styles.color||c.styles.textDecoration)&&(i.walk(e,a.curry(r,b),"childNodes"),r(b,e))},t=function(a,b,c,d){b.styles&&b.styles.backgroundColor&&n(d,o(a,"fontSize"),p(a,"backgroundColor",f.replaceVars(b.styles.backgroundColor,c)))},u=function(a,b,c,d){"sub"!==b.inline&&"sup"!==b.inline||(n(d,o(a,"fontSize"),p(a,"fontSize","")),a.remove(a.select("sup"===b.inline?"sub":"sup",d),!0))},v=function(a,b,c,d){d&&b.merge_siblings!==!1&&(d=m(a,f.getNonWhiteSpaceSibling(d),d),d=m(a,d,f.getNonWhiteSpaceSibling(d,!0)))},w=function(a,b,c){if(b.clear_child_styles){var d=b.links?"*:not(a)":"*";j(a.select(d,c),function(c){k(c)&&j(b.styles,function(b,d){a.setStyle(c,d,"")})})}},x=function(a,b,c,d){j(b,function(b){j(a.dom.select(b.inline,d),function(d){k(d)&&h.removeFormat(a,b,c,d,b.exact?d:null)}),w(a.dom,b,d)})},y=function(a,b,c,d,e){g.matchNode(a,e.parentNode,c,d)&&h.removeFormat(a,b,d,e)||b.merge_with_parents&&a.dom.getParent(e.parentNode,function(f){if(g.matchNode(a,f,c,d))return h.removeFormat(a,b,d,e),!0})};return{mergeWithChildren:x,mergeUnderlineAndColor:s,mergeBackgroundColorAndFontSize:t,mergeSubSup:u,mergeSiblings:v,mergeWithParents:y}}),g("2d",["j","1y","2e","48","49","4m","2h","4n","3t","2u","1e"],function(a,b,c,d,e,f,g,h,i,j,k){var l=k.each,m=function(d){return d&&1===d.nodeType&&!a.isBookmarkNode(d)&&!c.isCaretNode(d)&&!b.isBogus(d)},n=function(b,o,p,q){var r,s,t=b.formatter.get(o),u=t[0],v=!q&&b.selection.isCollapsed(),w=b.dom,x=b.selection,y=function(a,b){if(b=b||u,a){if(b.onformat&&b.onformat(a,b,p,q),l(b.styles,function(b,c){w.setStyle(a,c,e.replaceVars(b,p))}),b.styles){var c=w.getAttrib(a,"style");c&&a.setAttribute("data-mce-style",c)}l(b.attributes,function(b,c){w.setAttrib(a,c,e.replaceVars(b,p))}),l(b.classes,function(b){b=e.replaceVars(b,p),w.hasClass(a,b)||w.addClass(a,b)})}},z=function(a,b){var d=!1;return!!u.selector&&(l(a,function(a){if(!("collapsed"in a&&a.collapsed!==v))return w.is(b,a.selector)&&!c.isCaretNode(b)?(y(b,a),d=!0,!1):void 0}),d)},A=function(d,f,i,n){var q,r,s=[],v=!0;q=u.inline||u.block,r=d.create(q),y(r),j.walk(d,f,function(a){var f,h=function(a){var i,j,m,w;if(w=v,i=a.nodeName.toLowerCase(),j=a.parentNode.nodeName.toLowerCase(),1===a.nodeType&&d.getContentEditable(a)&&(w=v,v="true"===d.getContentEditable(a),m=!0),e.isEq(i,"br"))return f=0,void(u.block&&d.remove(a));if(u.wrapper&&g.matchNode(b,a,o,p))return void(f=0);if(v&&!m&&u.block&&!u.wrapper&&e.isTextBlock(b,i)&&e.isValid(b,j,q))return a=d.rename(a,q),y(a),s.push(a),void(f=0);if(u.selector){var x=z(t,a);if(!u.inline||x)return void(f=0)}!v||m||!e.isValid(b,q,i)||!e.isValid(b,j,q)||!n&&3===a.nodeType&&1===a.nodeValue.length&&65279===a.nodeValue.charCodeAt(0)||c.isCaretNode(a)||u.inline&&d.isBlock(a)?(f=0,l(k.grep(a.childNodes),h),m&&(v=w),f=0):(f||(f=d.clone(r,!1),a.parentNode.insertBefore(f,a),s.push(f)),f.appendChild(a))};l(a,h)}),u.links===!0&&l(s,function(a){var b=function(a){"A"===a.nodeName&&y(a,u),l(k.grep(a.childNodes),b)};b(a)}),l(s,function(c){var f,i=function(b){var c=0;return l(b.childNodes,function(b){e.isWhiteSpaceNode(b)||a.isBookmarkNode(b)||c++}),c},j=function(a){var b=!1;return l(a.childNodes,function(a){if(m(a))return b=a,!1}),b},k=function(b){var c,e;return c=j(b),c&&!a.isBookmarkNode(c)&&g.matchName(d,c,u)&&(e=d.clone(c,!1),y(e),d.replace(e,b,!0),d.remove(c,1)),e||b};return f=i(c),(s.length>1||!d.isBlock(c))&&0===f?void d.remove(c,1):void((u.inline||u.wrapper)&&(u.exact||1!==f||(c=k(c)),h.mergeWithChildren(b,t,p,c),h.mergeWithParents(b,u,o,p,c),h.mergeBackgroundColorAndFontSize(d,u,p,c),h.mergeSubSup(d,u,p,c),h.mergeSiblings(d,u,p,c)))})};if("false"!==w.getContentEditable(x.getNode())){if(u){if(q)q.nodeType?z(t,q)||(s=w.createRng(),s.setStartBefore(q),s.setEndAfter(q),A(w,d.expandRng(b,s,t),null,!0)):A(w,q,null,!0);else if(v&&u.inline&&!w.select("td[data-mce-selected],th[data-mce-selected]").length)c.applyCaretFormat(b,o,p);else{var B=b.selection.getNode();b.settings.forced_root_block||!t[0].defaultBlock||w.getParent(B,w.isBlock)||n(b,t[0].defaultBlock),b.selection.setRng(i.normalize(b.selection.getRng())),r=x.getBookmark(),A(w,d.expandRng(b,x.getRng(!0),t),r),u.styles&&h.mergeUnderlineAndColor(w,u,p,B),x.moveToBookmark(r),e.moveStart(w,x,x.getRng(!0)),b.nodeChanged()}f.postProcess(o,b)}}else{q=x.getNode();for(var C=0,D=t.length;C<D;C++)if(t[C].ceFalseOverride&&w.is(q,t[C].selector))return void y(q,t[C])}};return{applyFormat:n}}),g("2f",["2c","49","2h","1e"],function(a,b,c,d){var e=d.each,f=function(a,f){var g={};a.set({}),f.on("NodeChange",function(h){var i=b.getParents(f.dom,h.element),j={};i=d.grep(i,function(a){return 1===a.nodeType&&!a.getAttribute("data-mce-bogus")}),e(a.get(),function(a,b){e(i,function(d){return f.formatter.matchNode(d,b,{},a.similar)?(g[b]||(e(a,function(a){a(!0,{node:d,format:b,parents:i})}),g[b]=a),j[b]=a,!1):!c.matchesUnInheritedFormatSelector(f,d,b)&&void 0})}),e(g,function(a,b){j[b]||(delete g[b],e(a,function(a){a(!1,{node:h.element,format:b,parents:i})}))})})},g=function(a,b,c,d){var f=a.get();e(b.split(","),function(a){f[a]||(f[a]=[],f[a].similar=d),f[a].push(c)}),a.set(f)},h=function(a,b,c,d,e){null===b.get()&&f(b,a),g(b,c,d,e)};return{formatChanged:h
}}),g("4o",["1e"],function(a){var b=function(b){var c={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",styles:{fontSize:"%value"},clear_child_styles:!0},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(c,d,e){a.each(e,function(a,d){b.setAttrib(c,d,a)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]};return a.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(a){c[a]={block:a,remove:"all"}}),c};return{get:b}}),g("2g",["4o","1e"],function(a,b){return function(c){var d={},e=function(a){return a?d[a]:d},f=function(a,c){a&&("string"!=typeof a?b.each(a,function(a,b){f(b,a)}):(c=c.length?c:[c],b.each(c,function(a){"undefined"==typeof a.deep&&(a.deep=!a.selector),"undefined"==typeof a.split&&(a.split=!a.selector||a.inline),"undefined"==typeof a.remove&&a.selector&&!a.inline&&(a.remove="none"),a.selector&&a.inline&&(a.mixed=!0,a.block_expand=!0),"string"==typeof a.classes&&(a.classes=a.classes.split(/\s+/))}),d[a]=c))},g=function(a){return a&&d[a]&&delete d[a],d};return f(a.get(c.dom)),f(c.settings.formats),{get:e,register:f,unregister:g}}}),g("2i",["l","1e","y"],function(a,b,c){var d=b.each,e=a.DOM,f=function(a,d){var f,g,h,i=d&&d.schema||new c({}),j=function(a,b){b.classes.length&&e.addClass(a,b.classes.join(" ")),e.setAttribs(a,b.attrs)},k=function(a){var b;return g="string"==typeof a?{name:a,classes:[],attrs:{}}:a,b=e.create(g.name),j(b,g),b},l=function(a,c){var d="string"!=typeof a?a.nodeName.toLowerCase():a,e=i.getElementRule(d),f=e&&e.parentsRequired;return!(!f||!f.length)&&(c&&b.inArray(f,c)!==-1?c:f[0])},m=function(a,c,d){var f,g,h,i=c.length>0&&c[0],j=i&&i.name;if(h=l(a,j))j===h?(g=c[0],c=c.slice(1)):g=h;else if(i)g=c[0],c=c.slice(1);else if(!d)return a;return g&&(f=k(g),f.appendChild(a)),d&&(f||(f=e.create("div"),f.appendChild(a)),b.each(d,function(b){var c=k(b);f.insertBefore(c,a)})),m(f,c,g&&g.siblings)};return a&&a.length?(g=a[0],f=k(g),h=e.create("div"),h.appendChild(m(f,a.slice(1),g.siblings)),h):""},g=function(a,b){return f(i(a),b)},h=function(a){var c,d={classes:[],attrs:{}};return a=d.selector=b.trim(a),"*"!==a&&(c=a.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(a,c,e,f,g){switch(c){case"#":d.attrs.id=e;break;case".":d.classes.push(e);break;case":":b.inArray("checked disabled enabled read-only required".split(" "),e)!==-1&&(d.attrs[e]=e)}if("["===f){var h=g.match(/([\w\-]+)(?:\=\"([^\"]+))?/);h&&(d.attrs[h[1]]=h[2])}return""})),d.name=c||"div",d},i=function(a){return a&&"string"==typeof a?(a=a.split(/\s*,\s*/)[0],a=a.replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),b.map(a.split(/(?:>|\s+(?![^\[\]]+\]))/),function(a){var c=b.map(a.split(/(?:~\+|~|\+)/),h),d=c.pop();return c.length&&(d.siblings=c),d}).reverse()):[]},j=function(a,b){var c,g,h,j,k,l,m="";if(l=a.settings.preview_styles,l===!1)return"";"string"!=typeof l&&(l="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");var n=function(a){return a.replace(/%(\w+)/g,"")};if("string"==typeof b){if(b=a.formatter.get(b),!b)return;b=b[0]}return"preview"in b&&(l=b.preview,l===!1)?"":(c=b.block||b.inline||"span",j=i(b.selector),j.length?(j[0].name||(j[0].name=c),c=b.selector,g=f(j,a)):g=f([c],a),h=e.select(c,g)[0]||g.firstChild,d(b.styles,function(a,b){a=n(a),a&&e.setStyle(h,b,a)}),d(b.attributes,function(a,b){a=n(a),a&&e.setAttrib(h,b,a)}),d(b.classes,function(a){a=n(a),e.hasClass(h,a)||e.addClass(h,a)}),a.fire("PreviewFormats"),e.setStyles(g,{position:"absolute",left:-65535}),a.getBody().appendChild(g),k=e.getStyle(a.getBody(),"fontSize",!0),k=/px$/.test(k)?parseInt(k,10):0,d(l.split(" "),function(b){var c=e.getStyle(h,b,!0);if(!("background-color"===b&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(c)&&(c=e.getStyle(a.getBody(),b,!0),"#ffffff"===e.toHex(c).toLowerCase())||"color"===b&&"#000000"===e.toHex(c).toLowerCase())){if("font-size"===b&&/em|%$/.test(c)){if(0===k)return;c=parseFloat(c,10)/(/%$/.test(c)?100:1),c=c*k+"px"}"border"===b&&c&&(m+="padding:0 2px;"),m+=b+":"+c+";"}}),a.fire("AfterPreviewFormats"),e.remove(g),m)};return{getCssText:j,parseSelector:i,selectorToHtml:g}}),g("2k",["2d","2h","2j"],function(a,b,c){var d=function(d,e,f,g,h){var i=e.get(f);!b.match(d,f,g,h)||"toggle"in i[0]&&!i[0].toggle?a.applyFormat(d,f,g,h):c.remove(d,f,g,h)};return{toggle:d}}),g("2l",[],function(){var a=function(a){a.addShortcut("meta+b","","Bold"),a.addShortcut("meta+i","","Italic"),a.addShortcut("meta+u","","Underline");for(var b=1;b<=6;b++)a.addShortcut("access+"+b,"",["FormatBlock",!1,"h"+b]);a.addShortcut("access+7","",["FormatBlock",!1,"p"]),a.addShortcut("access+8","",["FormatBlock",!1,"div"]),a.addShortcut("access+9","",["FormatBlock",!1,"address"])};return{setup:a}}),g("f",["2c","1","2d","2e","2f","2g","2h","2i","2j","2k","2l"],function(a,b,c,d,e,f,g,h,i,j,k){return function(l){var m=f(l),n=a(null);return k.setup(l),d.setup(l),{get:m.get,register:m.register,unregister:m.unregister,apply:b.curry(c.applyFormat,l),remove:b.curry(i.remove,l),toggle:b.curry(j.toggle,l,m),match:b.curry(g.match,l),matchAll:b.curry(g.matchAll,l),matchNode:b.curry(g.matchNode,l),canApply:b.curry(g.canApply,l),formatChanged:b.curry(e.formatChanged,l,n),getCssText:b.curry(h.getCssText,l)}}}),g("69",["1","1v","47","2x"],function(a,b,c,d){var e=function(d){return c.descendant(b.fromDom(d.getBody()),"*[data-mce-caret]").fold(a.constant(null),function(a){return a.dom()})},f=function(a){a.selection.setRng(a.selection.getRng())},g=function(a,b){b.hasAttribute("data-mce-caret")&&(d.showCaretContainerBlock(b),f(a),a.selection.scrollIntoView(b))},h=function(a,b){var c=e(a);if(c)return"compositionstart"===b.type?(b.preventDefault(),b.stopPropagation(),void g(c)):void(d.hasContent(c)&&g(a,c))},i=function(b){b.on("keyup compositionstart",a.curry(h,b))};return{setup:i}}),g("31",["1i","3n"],function(a,b){var c=function(c,d,e){return!e.collapsed&&a.foldl(e.getClientRects(),function(a,e){return a||b.containsXY(e,c,d)},!1)};return{isXYWithinRange:c}}),g("1g",["b"],function(a){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(a){return a.shiftKey||a.ctrlKey||a.altKey||this.metaKeyPressed(a)},metaKeyPressed:function(b){return a.mac?b.metaKey:b.ctrlKey&&!b.altKey}}}),g("k",["1","1v","30","1j","1y","31","b","15","1e","1g"],function(a,b,c,d,e,f,g,h,i,j){var k=e.isContentEditableFalse,l=e.isContentEditableTrue,m=function(a,b){for(;b&&b!=a;){if(l(b)||k(b))return b;b=b.parentNode}return null},n=function(a){return a&&"IMG"===a.nodeName},o=function(a,b){return n(a.target)&&!f.isXYWithinRange(a.clientX,a.clientY,b)},p=function(a,b){var c=b.target;o(b,a.selection.getRng())&&!b.isDefaultPrevented()&&(b.preventDefault(),a.selection.select(c))};return function(e,f){var l,n,o,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=f.dom,G=i.each,H=f.getDoc(),I=d,J=g.ie&&g.ie<11,K=Math.abs,L=Math.round,M=f.getBody();q={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var N=".mce-content-body";f.contentStyles.push(N+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+N+" .mce-resizehandle:hover {background: #000}"+N+" img[data-mce-selected],"+N+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+N+" .mce-clonedresizable {position: absolute;"+(g.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+N+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");var O=function(a){var d=f.settings.object_resizing;return d!==!1&&!g.iOS&&("string"!=typeof d&&(d="table,img,div"),"false"!==a.getAttribute("data-mce-resize")&&(a!=f.getBody()&&c.is(b.fromDom(a),d)))},P=function(a){var b,c,d,e,g;b=a.screenX-t,c=a.screenY-u,B=b*r[2]+x,C=c*r[3]+y,B=B<5?5:B,C=C<5?5:C,d="IMG"==l.nodeName&&f.settings.resize_img_proportional!==!1?!j.modifierPressed(a):j.modifierPressed(a)||"IMG"==l.nodeName&&r[2]*r[3]!==0,d&&(K(b)>K(c)?(C=L(B*z),B=L(C/z)):(B=L(C/z),C=L(B*z))),F.setStyles(n,{width:B,height:C}),e=r.startPos.x+b,g=r.startPos.y+c,e=e>0?e:0,g=g>0?g:0,F.setStyles(o,{left:e,top:g,display:"block"}),o.innerHTML=B+" &times; "+C,r[2]<0&&n.clientWidth<=B&&F.setStyle(n,"left",v+(x-B)),r[3]<0&&n.clientHeight<=C&&F.setStyle(n,"top",w+(y-C)),b=M.scrollWidth-D,c=M.scrollHeight-E,b+c!==0&&F.setStyles(o,{left:e-b,top:g-c}),A||(f.fire("ObjectResizeStart",{target:l,width:x,height:y}),A=!0)},Q=function(){A=!1;var a=function(a,b){b&&(l.style[a]||!f.schema.isValid(l.nodeName.toLowerCase(),a)?F.setStyle(l,a,b):F.setAttrib(l,a,b))};a("width",B),a("height",C),F.unbind(H,"mousemove",P),F.unbind(H,"mouseup",Q),I!=H&&(F.unbind(I,"mousemove",P),F.unbind(I,"mouseup",Q)),F.remove(n),F.remove(o),J&&"TABLE"!=l.nodeName||R(l),f.fire("ObjectResized",{target:l,width:B,height:C}),F.setAttrib(l,"style",F.getAttrib(l,"style")),f.nodeChanged()},R=function(a,b,c){var d,e,h,i,j;S(),_(),d=F.getPos(a,M),v=d.x,w=d.y,j=a.getBoundingClientRect(),e=j.width||j.right-j.left,h=j.height||j.bottom-j.top,l!=a&&($(),l=a,B=C=0),i=f.fire("ObjectSelected",{target:a}),O(a)&&!i.isDefaultPrevented()?G(q,function(a,d){var f,i=function(b){t=b.screenX,u=b.screenY,x=l.clientWidth,y=l.clientHeight,z=y/x,r=a,a.startPos={x:e*a[0]+v,y:h*a[1]+w},D=M.scrollWidth,E=M.scrollHeight,n=l.cloneNode(!0),F.addClass(n,"mce-clonedresizable"),F.setAttrib(n,"data-mce-bogus","all"),n.contentEditable=!1,n.unSelectabe=!0,F.setStyles(n,{left:v,top:w,margin:0}),n.removeAttribute("data-mce-selected"),M.appendChild(n),F.bind(H,"mousemove",P),F.bind(H,"mouseup",Q),I!=H&&(F.bind(I,"mousemove",P),F.bind(I,"mouseup",Q)),o=F.add(M,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},x+" &times; "+y)};return b?void(d==b&&i(c)):(f=F.get("mceResizeHandle"+d),f&&F.remove(f),f=F.add(M,"div",{id:"mceResizeHandle"+d,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+d+"-resize; margin:0; padding:0"}),g.ie&&(f.contentEditable=!1),F.bind(f,"mousedown",function(a){a.stopImmediatePropagation(),a.preventDefault(),i(a)}),a.elm=f,void F.setStyles(f,{left:e*a[0]+v-f.offsetWidth/2,top:h*a[1]+w-f.offsetHeight/2}))}):S(),l.setAttribute("data-mce-selected","1")},S=function(){var a,b;_(),l&&l.removeAttribute("data-mce-selected");for(a in q)b=F.get("mceResizeHandle"+a),b&&(F.unbind(b),F.remove(b))},T=function(a){var b,c,d=function(a,b){if(a)do if(a===b)return!0;while(a=a.parentNode)};if(!A&&!f.removed)return G(F.select("img[data-mce-selected],hr[data-mce-selected]"),function(a){a.removeAttribute("data-mce-selected")}),c="mousedown"==a.type?a.target:e.getNode(),c=F.$(c).closest(J?"table":"table,img,hr")[0],d(c,M)&&(aa(),b=e.getStart(!0),d(b,c)&&d(e.getEnd(!0),c)&&(!J||c!=b&&"IMG"!==b.nodeName))?void R(c):void S()},U=function(a,b,c){a&&a.attachEvent&&a.attachEvent("on"+b,c)},V=function(a,b,c){a&&a.detachEvent&&a.detachEvent("on"+b,c)},W=function(a){var b,c,d,e,g,h,i,j=a.srcElement;b=j.getBoundingClientRect(),h=s.clientX-b.left,i=s.clientY-b.top;for(c in q)if(d=q[c],e=j.offsetWidth*d[0],g=j.offsetHeight*d[1],K(e-h)<8&&K(g-i)<8){r=d;break}A=!0,f.fire("ObjectResizeStart",{target:l,width:l.clientWidth,height:l.clientHeight}),f.getDoc().selection.empty(),R(j,c,s)},X=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},Y=function(a){return k(m(f.getBody(),a))},Z=function(a){var b=a.srcElement;if(Y(b))return void X(a);if(b!=l){if(f.fire("ObjectSelected",{target:b}),$(),0===b.id.indexOf("mceResizeHandle"))return void(a.returnValue=!1);"IMG"!=b.nodeName&&"TABLE"!=b.nodeName||(S(),l=b,U(b,"resizestart",W))}},$=function(){V(l,"resizestart",W)},_=function(){for(var a in q){var b=q[a];b.elm&&(F.unbind(b.elm),delete b.elm)}},aa=function(){try{f.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(a){}},ba=function(a){var b;if(J){b=H.body.createControlRange();try{return b.addElement(a),b.select(),!0}catch(a){}}};f.on("init",function(){J?(f.on("ObjectResized",function(a){"TABLE"!=a.target.nodeName&&(S(),ba(a.target))}),U(M,"controlselect",Z),f.on("mousedown",function(a){s=a})):(aa(),g.ie>=11&&(f.on("mousedown click",function(a){var b=a.target,c=b.nodeName;A||!/^(TABLE|IMG|HR)$/.test(c)||Y(b)||(2!==a.button&&f.selection.select(b,"TABLE"==c),"mousedown"==a.type&&f.nodeChanged())}),f.dom.bind(M,"mscontrolselect",function(a){var b=function(a){h.setEditorTimeout(f,function(){f.selection.select(a)})};return Y(a.target)?(a.preventDefault(),void b(a.target)):void(/^(TABLE|IMG|HR)$/.test(a.target.nodeName)&&(a.preventDefault(),"IMG"==a.target.tagName&&b(a.target)))})));var b=h.throttle(function(a){f.composing||T(a)});f.on("nodechange ResizeEditor ResizeWindow drop",b),f.on("keyup compositionend",function(a){l&&"TABLE"==l.nodeName&&b(a)}),f.on("hide blur",S),f.on("contextmenu",a.curry(p,f))}),f.on("remove",_);var ca=function(){l=n=null,J&&($(),V(M,"controlselect",Z))};return{isResizable:O,showResizeRect:R,hideResizeRect:S,updateResizeRect:T,controlSelect:ba,destroy:ca}}}),g("33",["1y"],function(a){var b=function(a){for(var b=0,c=0,d=a;d&&d.nodeType;)b+=d.offsetLeft||0,c+=d.offsetTop||0,d=d.offsetParent;return{x:b,y:c}},c=function(a,b,c){var d={elm:b,alignToTop:c};return a.fire("scrollIntoView",d),d.isDefaultPrevented()},d=function(d,e,f){var g,h,i,j,k=d.dom,l=k.getRoot(),m=0;if(!c(d,e,f)&&a.isElement(e)){if(f===!1&&(m=e.offsetHeight),"BODY"!==l.nodeName){var n=d.selection.getScrollContainer();if(n)return g=b(e).y-b(n).y+m,j=n.clientHeight,i=n.scrollTop,void((g<i||g+25>i+j)&&(n.scrollTop=g<i?g:g-j+25))}h=k.getViewPort(d.getWin()),g=k.getPos(e).y+m,i=h.y,j=h.h,(g<h.y||g+25>i+j)&&d.getWin().scrollTo(0,g<i?g:g-j+25)}};return{scrollIntoView:d}}),g("2q",["1y","1e"],function(a,b){var c=function(b){return a.isContentEditableTrue(b)||a.isContentEditableFalse(b)},d=function(a,b,c){for(;a&&a!==b;){if(c(a))return a;a=a.parentNode}return null},e=function(a,c,d){var e,f,g;if(e=d.elementFromPoint(a,c),f=d.body.createTextRange(),e&&"HTML"!==e.tagName||(e=d.body),f.moveToElementText(e),g=b.toArray(f.getClientRects()),g=g.sort(function(a,b){return a=Math.abs(Math.max(a.top-c,a.bottom-c)),b=Math.abs(Math.max(b.top-c,b.bottom-c)),a-b}),g.length>0){c=(g[0].bottom+g[0].top)/2;try{return f.moveToPoint(a,c),f.collapse(!0),f}catch(a){}}return null},f=function(b,e){var f=b&&b.parentElement?b.parentElement():null;return a.isContentEditableFalse(d(f,e,c))?null:b},g=function(a,b,c){var d,g;if(c.caretPositionFromPoint)g=c.caretPositionFromPoint(a,b),g&&(d=c.createRange(),d.setStart(g.offsetNode,g.offset),d.collapse(!0));else if(c.caretRangeFromPoint)d=c.caretRangeFromPoint(a,b);else if(c.body.createTextRange){d=c.body.createTextRange();try{d.moveToPoint(a,b),d.collapse(!0)}catch(f){d=e(a,b,c)}return f(d,c.body)}return d};return{fromPoint:g}}),g("34",["1i"],function(a){var b=function(b,c){return a.map(c,function(a){var c=b.fire("GetSelectionRange",{range:a});return c.range!==a?c.range:a})};return{processRanges:b}}),g("5t",["46","1v","40","54","45","3g"],function(a,b,c,d,e,f){var g=function(a,c){return b.fromDom(a.dom().cloneNode(c))},h=function(a){return g(a,!1)},i=function(a){return g(a,!0)},j=function(c,d){var e=b.fromTag(d),f=a.clone(c);return a.setAll(e,f),e},k=function(a,b){var c=j(a,b),e=f.children(i(a));return d.append(c,e),c},l=function(a,b){var g=j(a,b);c.before(a,g);var h=f.children(a);return d.append(g,h),e.remove(a),g};return{shallow:h,shallowAs:j,deep:i,copy:k,mutate:l}}),g("5u",["1i","1v","1j"],function(a,b,c){var d=function(d,e){var f=e||c,g=f.createDocumentFragment();return a.each(d,function(a){g.appendChild(a.dom())}),b.fromDom(g)};return{fromElements:d}}),g("5v",["1i","1","2m","59","32","1v","3e","3g","1y"],function(a,b,c,d,e,f,g,h,i){var j=function(a){var b=a.startContainer,d=a.startOffset;return i.isText(b)?0===d?c.some(f.fromDom(b)):c.none():c.from(b.childNodes[d]).map(f.fromDom)},k=function(a){var b=a.endContainer,d=a.endOffset;return i.isText(b)?d===b.data.length?c.some(f.fromDom(b)):c.none():c.from(b.childNodes[d-1]).map(f.fromDom)},l=function(a){return h.firstChild(a).fold(b.constant([a]),function(b){return[a].concat(l(b))})},m=function(a){return h.lastChild(a).fold(b.constant([a]),function(b){return"br"===g.name(b)?h.prevSibling(b).map(function(b){return[a].concat(m(b))}).getOr([]):[a].concat(m(b))})},n=function(c,f){return d.liftN([j(f),k(f)],function(d,f){var g=a.find(l(c),b.curry(e.eq,d)),h=a.find(m(c),b.curry(e.eq,f));return g.isSome()&&h.isSome()}).getOr(!1)};return{hasAllContentsSelected:n}}),g("5w",["1i","2m","44","32","40","54","5t","1v","46","56"],function(a,b,c,d,e,f,g,h,i,j){var k=c.immutable("element","width","rows"),l=c.immutable("element","cells"),m=c.immutable("x","y"),n=function(a,b){var c=parseInt(i.get(a,b),10);return isNaN(c)?1:c},o=function(a,b,c,d,e){for(var f=n(e,"rowspan"),h=n(e,"colspan"),i=a.rows(),j=c;j<c+f;j++){i[j]||(i[j]=l(g.deep(d),[]));for(var k=b;k<b+h;k++){var m=i[j].cells();m[k]=j==c&&k==b?e:g.shallow(e)}}},p=function(a,b,c){var d=a.rows(),e=d[c]?d[c].cells():[];return!!e[b]},q=function(a,b,c){for(;p(a,b,c);)b++;return b},r=function(b){return a.foldl(b,function(a,b){return b.cells().length>a?b.cells().length:a},0)},s=function(a,c){for(var e=a.rows(),f=0;f<e.length;f++)for(var g=e[f].cells(),h=0;h<g.length;h++)if(d.eq(g[h],c))return b.some(m(h,f));return b.none()},t=function(a,b,c,d,e){for(var f=[],g=a.rows(),h=c;h<=e;h++){var i=g[h].cells(),j=b<d?i.slice(b,d+1):i.slice(d,b+1);f.push(l(g[h].element(),j))}return f},u=function(a,b,c){var d=b.x(),e=b.y(),f=c.x(),g=c.y(),h=e<g?t(a,d,e,f,g):t(a,d,g,f,e);return k(a.element(),r(h),h)},v=function(a,b){var c=g.shallow(a.element()),d=h.fromTag("tbody");return f.append(d,b),e.append(c,d),c},w=function(b){return a.map(b.rows(),function(b){var c=a.map(b.cells(),function(a){var b=g.deep(a);return i.remove(b,"colspan"),i.remove(b,"rowspan"),b}),d=g.shallow(b.element());return f.append(d,c),d})},x=function(b){var c=k(g.shallow(b),0,[]);return a.each(j.descendants(b,"tr"),function(b,d){a.each(j.descendants(b,"td,th"),function(a,e){o(c,q(c,e,d),d,b,a)})}),k(c.element(),r(c.rows()),c.rows())},y=function(a){return v(a,w(a))},z=function(a,b,c){return s(a,b).bind(function(b){return s(a,c).map(function(c){return u(a,b,c)})})};return{fromDom:x,toDom:y,subsection:z}}),g("4p",["1i","1","32","40","5t","1v","5u","3e","47","3g","3k","5l","5v","5w","5m"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=function(b){return a.find(b,function(a){return"ul"===h.name(a)||"ol"===h.name(a)})},q=function(c,d){return a.find(c,function(a){return"li"===h.name(a)&&m.hasAllContentsSelected(a,d)}).fold(b.constant([]),function(a){return p(c).map(function(a){return[f.fromTag("li"),f.fromTag(h.name(a))]}).getOr([])})},r=function(b,c){var e=a.foldl(c,function(a,b){return d.append(b,a),b},b);return c.length>0?g.fromElements([e]):e},s=function(a){return k.isListItem(a)?j.parent(a).filter(k.isList).fold(b.constant([]),function(b){return[a,b]}):k.isList(a)?[a]:[]},t=function(b,c){var d=f.fromDom(c.commonAncestorContainer),g=l.parentsAndSelf(d,b),h=a.filter(g,function(a){return k.isInline(a)||k.isHeading(a)}),i=q(g,c),j=h.concat(i.length?i:s(d));return a.map(j,e.shallow)},u=function(){return g.fromElements([])},v=function(a,b){return r(f.fromDom(b.cloneContents()),t(a,b))},w=function(a,d){return i.ancestor(d,"table",b.curry(c.eq,a))},x=function(a,b){return w(a,b[0]).bind(function(a){var c=b[0],d=b[b.length-1],e=n.fromDom(a);return n.subsection(e,c,d).map(function(a){return g.fromElements([n.toDom(a)])})}).getOrThunk(u)},y=function(a,b){return b.length>0&&b[0].collapsed?u():v(a,b[0])},z=function(a,b){var c=o.getCellsFromElementOrRanges(b,a);return c.length>0?x(a,c):y(a,b)};return{read:z}}),g("35",["1v","34","4p","36","2z"],function(a,b,c,d,e){var f=function(f,g){var h,i,j,k=f.selection.getRng(),l=f.dom.create("body"),m=f.selection.getSel(),n=b.processRanges(f,d.getRanges(m));return g=g||{},h=i="",g.get=!0,g.format=g.format||"html",g.selection=!0,g=f.fire("BeforeGetContent",g),g.isDefaultPrevented()?(f.fire("GetContent",g),g.content):"text"===g.format?f.selection.isCollapsed()?"":e.trim(k.text||(m.toString?m.toString():"")):(k.cloneContents?(j=g.contextual?c.read(a.fromDom(f.getBody()),n).dom():k.cloneContents(),j&&l.appendChild(j)):void 0!==k.item||void 0!==k.htmlText?(l.innerHTML="<br>"+(k.item?k.item(0).outerHTML:k.htmlText),l.removeChild(l.firstChild)):l.innerHTML=k.toString(),/^\s/.test(l.innerHTML)&&(h=" "),/\s+$/.test(l.innerHTML)&&(i=" "),g.getInner=!0,g.content=f.selection.isCollapsed()?"":h+f.selection.serializer.serialize(l,g)+i,f.fire("GetContent",g),g.content)};return{getContent:f}}),g("37",[],function(){var a=function(a,b,c){var d,e,f,g=a.selection.getRng(),h=a.getDoc();if(c=c||{format:"html"},c.set=!0,c.selection=!0,c.content=b,!c.no_events&&(c=a.fire("BeforeSetContent",c),c.isDefaultPrevented()))return void a.fire("SetContent",c);if(b=c.content,g.insertNode){b+='<span id="__caret">_</span>',g.startContainer==h&&g.endContainer==h?h.body.innerHTML=b:(g.deleteContents(),0===h.body.childNodes.length?h.body.innerHTML=b:g.createContextualFragment?g.insertNode(g.createContextualFragment(b)):(e=h.createDocumentFragment(),f=h.createElement("div"),e.appendChild(f),f.outerHTML=b,g.insertNode(e))),d=a.dom.get("__caret"),g=h.createRange(),g.setStartBefore(d),g.setEndBefore(d),a.selection.setRng(g),a.dom.remove("__caret");try{a.selection.setRng(g)}catch(a){}}else g.item&&(h.execCommand("Delete",!1,null),g=a.getRng()),/^\s+/.test(b)?(g.pasteHTML('<span id="__mce_tmp">_</span>'+b),a.dom.remove("__mce_tmp")):g.pasteHTML(b);c.no_events||a.fire("SetContent",c)};return{setContent:a}}),g("p",["32","1v","b","2y","j","k","33","s","23","2q","34","35","36","2r","20","37","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=q.each,s=q.trim,t=function(c){return!(!c||!c.ownerDocument)&&a.contains(b.fromDom(c.ownerDocument),b.fromDom(c))},u=function(a){return!!a&&(!!a.select||t(a.startContainer)&&t(a.endContainer))},v=function(a,b,c,d){var g=this;g.dom=a,g.win=b,g.serializer=c,g.editor=d,g.bookmarkManager=new e(g),g.controlSelection=new f(g,d)};return v.prototype={setCursorLocation:function(a,b){var c=this,d=c.dom.createRng();a?(d.setStart(a,b),d.setEnd(a,b),c.setRng(d),c.collapse(!1)):(c._moveEndPoint(d,c.editor.getBody(),!0),c.setRng(d))},getContent:function(a){return l.getContent(this.editor,a)},setContent:function(a,b){p.setContent(this.editor,a,b)},getStart:function(a){var b,c=this,d=c.getRng();return b=d.startContainer,1==b.nodeType&&b.hasChildNodes()&&(a&&d.collapsed||(b=b.childNodes[Math.min(b.childNodes.length-1,d.startOffset)])),b&&3==b.nodeType?b.parentNode:b},getEnd:function(a){var b,c,d=this,e=d.getRng();return b=e.endContainer,c=e.endOffset,1==b.nodeType&&b.hasChildNodes()&&(a&&e.collapsed||(b=b.childNodes[c>0?c-1:c])),b&&3==b.nodeType?b.parentNode:b},getBookmark:function(a,b){return this.bookmarkManager.getBookmark(a,b)},moveToBookmark:function(a){return this.bookmarkManager.moveToBookmark(a)},select:function(a,b){var c,d=this,e=d.dom,f=e.createRng();if(a){if(!b&&d.controlSelection.controlSelect(a))return;c=e.nodeIndex(a),f.setStart(a.parentNode,c),f.setEnd(a.parentNode,c+1),b&&(d._moveEndPoint(f,a,!0),d._moveEndPoint(f,a)),d.setRng(f)}return a},isCollapsed:function(){var a=this,b=a.getRng(),c=a.getSel();return!(!b||b.item)&&(b.compareEndPoints?0===b.compareEndPoints("StartToEnd",b):!c||b.collapsed)},collapse:function(a){var b=this,c=b.getRng();c.collapse(!!a),b.setRng(c)},getSel:function(){var a=this.win;return a.getSelection?a.getSelection():a.document.selection},getRng:function(a){var b,c,d,e,f=this,g=function(a,b,c){try{return b.compareBoundaryPoints(a,c)}catch(a){return-1}};if(!f.win)return null;if(e=f.win.document,"undefined"==typeof e||null===e)return null;if(void 0!==f.editor.bookmark&&i.hasFocus(f.editor)===!1){var h=o.getRng(f.editor);if(h.isSome())return h.getOr(e.createRange())}try{(b=f.getSel())&&(c=b.rangeCount>0?b.getRangeAt(0):b.createRange?b.createRange():e.createRange())}catch(a){}return c=k.processRanges(f.editor,[c])[0],c||(c=e.createRange?e.createRange():e.body.createTextRange()),c.setStart&&9===c.startContainer.nodeType&&c.collapsed&&(d=f.dom.getRoot(),c.setStart(d,0),c.setEnd(d,0)),f.selectedRange&&f.explicitRange&&(0===g(c.START_TO_START,c,f.selectedRange)&&0===g(c.END_TO_END,c,f.selectedRange)?c=f.explicitRange:(f.selectedRange=null,f.explicitRange=null)),c},setRng:function(a,b){var d,e,f,g=this;if(u(a))if(a.select){g.explicitRange=null;try{a.select()}catch(a){}}else{if(d=g.getSel(),f=g.editor.fire("SetSelectionRange",{range:a,forward:b}),a=f.range,d){g.explicitRange=a;try{d.removeAllRanges(),d.addRange(a)}catch(a){}b===!1&&d.extend&&(d.collapse(a.endContainer,a.endOffset),d.extend(a.startContainer,a.startOffset)),g.selectedRange=d.rangeCount>0?d.getRangeAt(0):null}a.collapsed||a.startContainer!==a.endContainer||!d.setBaseAndExtent||c.ie||a.endOffset-a.startOffset<2&&a.startContainer.hasChildNodes()&&(e=a.startContainer.childNodes[a.startOffset],e&&"IMG"===e.tagName&&(d.setBaseAndExtent(a.startContainer,a.startOffset,a.endContainer,a.endOffset),d.anchorNode===a.startContainer&&d.focusNode===a.endContainer||d.setBaseAndExtent(e,0,e,1))),g.editor.fire("AfterSetSelectionRange",{range:a,forward:b})}},setNode:function(a){var b=this;return b.setContent(b.dom.getOuterHTML(a)),a},getNode:function(){var a,b,c,d,e,f=this,g=f.getRng(),h=f.dom.getRoot(),i=function(a,b){for(var c=a;a&&3===a.nodeType&&0===a.length;)a=b?a.nextSibling:a.previousSibling;return a||c};return g?(b=g.startContainer,c=g.endContainer,d=g.startOffset,e=g.endOffset,a=g.commonAncestorContainer,!g.collapsed&&(b==c&&e-d<2&&b.hasChildNodes()&&(a=b.childNodes[d]),3===b.nodeType&&3===c.nodeType&&(b=b.length===d?i(b.nextSibling,!0):b.parentNode,c=0===e?i(c.previousSibling,!1):c.parentNode,b&&b===c))?b:a&&3==a.nodeType?a.parentNode:a):h},getSelectedBlocks:function(a,b){var c,d,e=this,f=e.dom,g=[];if(d=f.getRoot(),a=f.getParent(a||e.getStart(),f.isBlock),b=f.getParent(b||e.getEnd(),f.isBlock),a&&a!=d&&g.push(a),a&&b&&a!=b){c=a;for(var i=new h(a,d);(c=i.next())&&c!=b;)f.isBlock(c)&&g.push(c)}return b&&a!=b&&b!=d&&g.push(b),g},isForward:function(){var a,b,c=this.dom,d=this.getSel();return!(d&&d.anchorNode&&d.focusNode)||(a=c.createRng(),a.setStart(d.anchorNode,d.anchorOffset),a.collapse(!0),b=c.createRng(),b.setStart(d.focusNode,d.focusOffset),b.collapse(!0),a.compareBoundaryPoints(a.START_TO_START,b)<=0)},normalize:function(){var a=this,b=a.getRng();if(!m.hasMultipleRanges(a.getSel())){var c=n.normalize(a.dom,b);return c.each(function(b){a.setRng(b,a.isForward())}),c.getOr(b)}return b},selectorChanged:function(a,b){var c,d=this;return d.selectorChangedData||(d.selectorChangedData={},c={},d.editor.on("NodeChange",function(a){var b=a.element,e=d.dom,f=e.getParents(b,null,e.getRoot()),g={};r(d.selectorChangedData,function(a,b){r(f,function(d){if(e.is(d,b))return c[b]||(r(a,function(a){a(!0,{node:d,selector:b,parents:f})}),c[b]=a),g[b]=a,!1})}),r(c,function(a,d){g[d]||(delete c[d],r(a,function(a){a(!1,{node:b,selector:d,parents:f})}))})})),d.selectorChangedData[a]||(d.selectorChangedData[a]=[]),d.selectorChangedData[a].push(b),d},getScrollContainer:function(){for(var a,b=this.dom.getRoot();b&&"BODY"!=b.nodeName;){if(b.scrollHeight>b.clientHeight){a=b;break}b=b.parentNode}return a},scrollIntoView:function(a,b){g.scrollIntoView(this.editor,a,b)},placeCaretAt:function(a,b){this.setRng(j.fromPoint(a,b,this.editor.getDoc()))},_moveEndPoint:function(a,b,d){var e=b,f=new h(b,e),g=this.dom.schema.getNonEmptyElements();do{if(3==b.nodeType&&0!==s(b.nodeValue).length)return void(d?a.setStart(b,0):a.setEnd(b,b.nodeValue.length));if(g[b.nodeName]&&!/^(TD|TH)$/.test(b.nodeName))return void(d?a.setStartBefore(b):"BR"==b.nodeName?a.setEndBefore(b):a.setEndAfter(b));if(c.ie&&c.ie<11&&this.dom.isBlock(b)&&this.dom.isEmpty(b))return void(d?a.setStart(b,0):a.setEnd(b,0))}while(b=d?f.next():f.prev());"BODY"==e.nodeName&&(d?a.setStart(e,0):a.setEnd(e,e.childNodes.length))},getBoundingClientRect:function(){var a=this.getRng();return a.collapsed?d.fromRangeStart(a).getClientRects()[0]:a.getBoundingClientRect()},destroy:function(){this.win=null,this.controlSelection.destroy()}},v}),g("w",[],function(){var a=/^[ \t\r\n]*$/,b={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},c=function(a,b,c){var d,e,f=c?"lastChild":"firstChild",g=c?"prev":"next";if(a[f])return a[f];if(a!==b){if(d=a[g])return d;for(e=a.parent;e&&e!==b;e=e.parent)if(d=e[g])return d}},d=function(a,b){this.name=a,this.type=b,1===b&&(this.attributes=[],this.attributes.map={})};return d.prototype={replace:function(a){var b=this;return a.parent&&a.remove(),b.insert(a,b),b.remove(),b},attr:function(a,b){var c,d,e,f=this;if("string"!=typeof a){for(d in a)f.attr(d,a[d]);return f}if(c=f.attributes){if(b!==e){if(null===b){if(a in c.map)for(delete c.map[a],d=c.length;d--;)if(c[d].name===a)return c=c.splice(d,1),f;return f}if(a in c.map){for(d=c.length;d--;)if(c[d].name===a){c[d].value=b;break}}else c.push({name:a,value:b});return c.map[a]=b,f}return c.map[a]}},clone:function(){var a,b,c,e,f,g=this,h=new d(g.name,g.type);
if(c=g.attributes){for(f=[],f.map={},a=0,b=c.length;a<b;a++)e=c[a],"id"!==e.name&&(f[f.length]={name:e.name,value:e.value},f.map[e.name]=e.value);h.attributes=f}return h.value=g.value,h.shortEnded=g.shortEnded,h},wrap:function(a){var b=this;return b.parent.insert(a,b),a.append(b),b},unwrap:function(){var a,b,c=this;for(a=c.firstChild;a;)b=a.next,c.insert(a,c,!0),a=b;c.remove()},remove:function(){var a=this,b=a.parent,c=a.next,d=a.prev;return b&&(b.firstChild===a?(b.firstChild=c,c&&(c.prev=null)):d.next=c,b.lastChild===a?(b.lastChild=d,d&&(d.next=null)):c.prev=d,a.parent=a.next=a.prev=null),a},append:function(a){var b,c=this;return a.parent&&a.remove(),b=c.lastChild,b?(b.next=a,a.prev=b,c.lastChild=a):c.lastChild=c.firstChild=a,a.parent=c,a},insert:function(a,b,c){var d;return a.parent&&a.remove(),d=b.parent||this,c?(b===d.firstChild?d.firstChild=a:b.prev.next=a,a.prev=b.prev,a.next=b,b.prev=a):(b===d.lastChild?d.lastChild=a:b.next.prev=a,a.next=b.next,a.prev=b,b.next=a),a.parent=d,a},getAll:function(a){var b,d=this,e=[];for(b=d.firstChild;b;b=c(b,d))b.name===a&&e.push(b);return e},empty:function(){var a,b,d,e=this;if(e.firstChild){for(a=[],d=e.firstChild;d;d=c(d,e))a.push(d);for(b=a.length;b--;)d=a[b],d.parent=d.firstChild=d.lastChild=d.next=d.prev=null}return e.firstChild=e.lastChild=null,e},isEmpty:function(b,d,e){var f,g,h=this,i=h.firstChild;if(d=d||{},i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(b[i.name])return!1;for(f=i.attributes.length;f--;)if(g=i.attributes[f].name,"name"===g||0===g.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!a.test(i.value))return!1;if(3===i.type&&i.parent&&d[i.parent.name]&&a.test(i.value))return!1;if(e&&e(i))return!1}while(i=c(i,h));return!0},walk:function(a){return c(this,null,a)}},d.create=function(a,c){var e,f;if(e=new d(a,b[a]||1),c)for(f in c)e.attr(f,c[f]);return e},d}),g("x",["y","v","1e"],function(a,b,c){var d=c.each,e=function(a){return 0===a.indexOf("data-")||0===a.indexOf("aria-")},f=function(a){return a.replace(/<!--|-->/g,"")},g=function(a,b,c){var d,e,f,g,h=1;for(g=a.getShortEndedElements(),f=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g,f.lastIndex=d=c;e=f.exec(b);){if(d=f.lastIndex,"/"===e[1])h--;else if(!e[1]){if(e[2]in g)continue;h++}if(0===h)break}return d},h=function(h,i){var j=this,k=function(){};h=h||{},j.schema=i=i||new a,h.fix_self_closing!==!1&&(h.fix_self_closing=!0),d("comment cdata text start end pi doctype".split(" "),function(a){a&&(j[a]=h[a]||k)}),j.parse=function(a){var d,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M=this,N=0,O=[],P=0,Q=b.decode,R=c.makeMap("src,href,data,background,formaction,poster"),S=/((java|vb)script|mhtml):/i,T=/^data:/i,U=function(a){var b,c;for(b=O.length;b--&&O[b].name!==a;);if(b>=0){for(c=O.length-1;c>=b;c--)a=O[c],a.valid&&M.end(a.name);O.length=b}},V=function(a,b,c,d,f){var g,i,j=/[\s\u0000-\u001F]+/g;if(b=b.toLowerCase(),c=b in s?b:Q(c||d||f||""),u&&!p&&e(b)===!1){if(g=z[b],!g&&A){for(i=A.length;i--&&(g=A[i],!g.pattern.test(b)););i===-1&&(g=null)}if(!g)return;if(g.validValues&&!(c in g.validValues))return}if(R[b]&&!h.allow_script_urls){var k=c.replace(j,"");try{k=decodeURIComponent(k)}catch(a){k=unescape(k)}if(S.test(k))return;if(!h.allow_html_data_urls&&T.test(k)&&!/^data:image\//i.test(k))return}p&&(b in R||0===b.indexOf("on"))||(l.map[b]=c,l.push({name:b,value:c}))};for(H=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),I=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,r=i.getShortEndedElements(),G=h.self_closing_elements||i.getSelfClosingElements(),s=i.getBoolAttrs(),u=h.validate,q=h.remove_internals,L=h.fix_self_closing,J=i.getSpecialElements(),E=a+">";d=H.exec(E);){if(N<d.index&&M.text(Q(a.substr(N,d.index-N))),j=d[6])j=j.toLowerCase(),":"===j.charAt(0)&&(j=j.substr(1)),U(j);else if(j=d[7]){if(d.index+d[0].length>a.length){M.text(Q(a.substr(d.index))),N=d.index+d[0].length;continue}if(j=j.toLowerCase(),":"===j.charAt(0)&&(j=j.substr(1)),t=j in r,L&&G[j]&&O.length>0&&O[O.length-1].name===j&&U(j),!u||(v=i.getElementRule(j))){if(w=!0,u&&(z=v.attributes,A=v.attributePatterns),(y=d[8])?(p=y.indexOf("data-mce-type")!==-1,p&&q&&(w=!1),l=[],l.map={},y.replace(I,V)):(l=[],l.map={}),u&&!p){if(B=v.attributesRequired,C=v.attributesDefault,D=v.attributesForced,F=v.removeEmptyAttrs,F&&!l.length&&(w=!1),D)for(m=D.length;m--;)x=D[m],o=x.name,K=x.value,"{$uid}"===K&&(K="mce_"+P++),l.map[o]=K,l.push({name:o,value:K});if(C)for(m=C.length;m--;)x=C[m],o=x.name,o in l.map||(K=x.value,"{$uid}"===K&&(K="mce_"+P++),l.map[o]=K,l.push({name:o,value:K}));if(B){for(m=B.length;m--&&!(B[m]in l.map););m===-1&&(w=!1)}if(x=l.map["data-mce-bogus"]){if("all"===x){N=g(i,a,H.lastIndex),H.lastIndex=N;continue}w=!1}}w&&M.start(j,l,t)}else w=!1;if(k=J[j]){k.lastIndex=N=d.index+d[0].length,(d=k.exec(a))?(w&&(n=a.substr(N,d.index-N)),N=d.index+d[0].length):(n=a.substr(N),N=a.length),w&&(n.length>0&&M.text(n,!0),M.end(j)),H.lastIndex=N;continue}t||(y&&y.indexOf("/")==y.length-1?w&&M.end(j):O.push({name:j,valid:w}))}else(j=d[1])?(">"===j.charAt(0)&&(j=" "+j),h.allow_conditional_comments||"[if"!==j.substr(0,3).toLowerCase()||(j=" "+j),M.comment(j)):(j=d[2])?M.cdata(f(j)):(j=d[3])?M.doctype(j):(j=d[4])&&M.pi(j,d[5]);N=d.index+d[0].length}for(N<a.length&&M.text(Q(a.substr(N))),m=O.length-1;m>=0;m--)j=O[m],j.valid&&M.end(j.name)}};return h.findEndTag=g,h}),g("u",["w","y","x","1e"],function(a,b,c,d){var e=d.makeMap,f=d.each,g=d.explode,h=d.extend,i=function(b,c,d,e){var f=b.padd_empty_with_br||c.insert;f&&d[e.name]?e.empty().append(new a("br","1")).shortEnded=!0:e.empty().append(new a("#text","3")).value="\xa0"},j=function(a){return k(a,"#text")&&"\xa0"===a.firstChild.value},k=function(a,b){return a&&a.firstChild&&a.firstChild===a.lastChild&&a.firstChild.name===b},l=function(a,b){var c=a.getElementRule(b.name);return c&&c.paddEmpty},m=function(a,b,c,d){return d.isEmpty(b,c,function(b){return l(a,b)})};return function(l,n){var o=this,p={},q=[],r={},s={};l=l||{},l.validate=!("validate"in l)||l.validate,l.root_name=l.root_name||"body",o.schema=n=n||new b;var t=function(b){var c,d,f,g,h,i,j,l,p,q,r,s,t,u,v,w;for(s=e("tr,td,th,tbody,thead,tfoot,table"),q=n.getNonEmptyElements(),r=n.getWhiteSpaceElements(),t=n.getTextBlockElements(),u=n.getSpecialElements(),c=0;c<b.length;c++)if(d=b[c],d.parent&&!d.fixed)if(t[d.name]&&"li"==d.parent.name){for(v=d.next;v&&t[v.name];)v.name="li",v.fixed=!0,d.parent.insert(v,d.parent),v=v.next;d.unwrap(d)}else{for(g=[d],f=d.parent;f&&!n.isValidChild(f.name,d.name)&&!s[f.name];f=f.parent)g.push(f);if(f&&g.length>1){for(g.reverse(),h=i=o.filterNode(g[0].clone()),p=0;p<g.length-1;p++){for(n.isValidChild(i.name,g[p].name)?(j=o.filterNode(g[p].clone()),i.append(j)):j=i,l=g[p].firstChild;l&&l!=g[p+1];)w=l.next,j.append(l),l=w;i=j}m(n,q,r,h)?f.insert(d,g[0],!0):(f.insert(h,g[0],!0),f.insert(d,h)),f=g[0],(m(n,q,r,f)||k(f,"br"))&&f.empty().remove()}else if(d.parent){if("li"===d.name){if(v=d.prev,v&&("ul"===v.name||"ul"===v.name)){v.append(d);continue}if(v=d.next,v&&("ul"===v.name||"ul"===v.name)){v.insert(d,v.firstChild,!0);continue}d.wrap(o.filterNode(new a("ul",1)));continue}n.isValidChild(d.parent.name,"div")&&n.isValidChild("div",d.name)?d.wrap(o.filterNode(new a("div",1))):u[d.name]?d.empty().remove():d.unwrap()}}};o.filterNode=function(a){var b,c,d;c in p&&(d=r[c],d?d.push(a):r[c]=[a]),b=q.length;for(;b--;)c=q[b].name,c in a.attributes.map&&(d=s[c],d?d.push(a):s[c]=[a]);return a},o.addNodeFilter=function(a,b){f(g(a),function(a){var c=p[a];c||(p[a]=c=[]),c.push(b)})},o.addAttributeFilter=function(a,b){f(g(a),function(a){var c;for(c=0;c<q.length;c++)if(q[c].name===a)return void q[c].callbacks.push(b);q.push({name:a,callbacks:[b]})})},o.parse=function(b,d){var f,g,k,o,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=[];d=d||{},r={},s={},B=h(e("script,style,head,html,body,title,meta,param"),n.getBlockElements()),J=n.getNonEmptyElements(),I=n.children,A=l.validate,K="forced_root_block"in d?d.forced_root_block:l.forced_root_block,H=n.getWhiteSpaceElements(),C=/^[ \t\r\n]+/,E=/[ \t\r\n]+$/,F=/[ \t\r\n]+/g,G=/^[ \t\r\n]+$/;var M=function(){var a,b,c=g.firstChild,d=function(a){a&&(c=a.firstChild,c&&3==c.type&&(c.value=c.value.replace(C,"")),c=a.lastChild,c&&3==c.type&&(c.value=c.value.replace(E,"")))};if(n.isValidChild(g.name,K.toLowerCase())){for(;c;)a=c.next,3==c.type||1==c.type&&"p"!==c.name&&!B[c.name]&&!c.attr("data-mce-type")?b?b.append(c):(b=N(K,1),b.attr(l.forced_root_block_attrs),g.insert(b,c),b.append(c)):(d(b),b=null),c=a;d(b)}},N=function(b,c){var d,e=new a(b,c);return b in p&&(d=r[b],d?d.push(e):r[b]=[e]),e},O=function(a){var b,c,d,e,f=n.getBlockElements();for(b=a.prev;b&&3===b.type;){if(d=b.value.replace(E,""),d.length>0)return void(b.value=d);if(c=b.next){if(3==c.type&&c.value.length){b=b.prev;continue}if(!f[c.name]&&"script"!=c.name&&"style"!=c.name){b=b.prev;continue}}e=b.prev,b.remove(),b=e}},P=function(a){var b,c={};for(b in a)"li"!==b&&"p"!=b&&(c[b]=a[b]);return c};if(f=new c({validate:A,allow_script_urls:l.allow_script_urls,allow_conditional_comments:l.allow_conditional_comments,self_closing_elements:P(n.getSelfClosingElements()),cdata:function(a){k.append(N("#cdata",4)).value=a},text:function(a,b){var c;D||(a=a.replace(F," "),k.lastChild&&B[k.lastChild.name]&&(a=a.replace(C,""))),0!==a.length&&(c=N("#text",3),c.raw=!!b,k.append(c).value=a)},comment:function(a){k.append(N("#comment",8)).value=a},pi:function(a,b){k.append(N(a,7)).value=b,O(k)},doctype:function(a){var b;b=k.append(N("#doctype",10)),b.value=a,O(k)},start:function(a,b,c){var d,e,f,g,h;if(f=A?n.getElementRule(a):{}){for(d=N(f.outputName||a,1),d.attributes=b,d.shortEnded=c,k.append(d),h=I[k.name],h&&I[d.name]&&!h[d.name]&&L.push(d),e=q.length;e--;)g=q[e].name,g in b.map&&(y=s[g],y?y.push(d):s[g]=[d]);B[a]&&O(d),c||(k=d),!D&&H[a]&&(D=!0)}},end:function(a){var b,c,e,f,g;if(c=A?n.getElementRule(a):{}){if(B[a]&&!D){if(b=k.firstChild,b&&3===b.type)if(e=b.value.replace(C,""),e.length>0)b.value=e,b=b.next;else for(f=b.next,b.remove(),b=f;b&&3===b.type;)e=b.value,f=b.next,(0===e.length||G.test(e))&&(b.remove(),b=f),b=f;if(b=k.lastChild,b&&3===b.type)if(e=b.value.replace(E,""),e.length>0)b.value=e,b=b.prev;else for(f=b.prev,b.remove(),b=f;b&&3===b.type;)e=b.value,f=b.prev,(0===e.length||G.test(e))&&(b.remove(),b=f),b=f}if(D&&H[a]&&(D=!1),c.removeEmpty&&m(n,J,H,k)&&!k.attributes.map.name&&!k.attributes.map.id)return g=k.parent,B[k.name]?k.empty().remove():k.unwrap(),void(k=g);c.paddEmpty&&(j(k)||m(n,J,H,k))&&i(l,d,B,k),k=k.parent}}},n),g=k=new a(d.context||l.root_name,11),f.parse(b),A&&L.length&&(d.context?d.invalid=!0:t(L)),K&&("body"==g.name||d.isRootContent)&&M(),!d.invalid){for(z in r){for(y=p[z],o=r[z],w=o.length;w--;)o[w].parent||o.splice(w,1);for(u=0,v=y.length;u<v;u++)y[u](o,z,d)}for(u=0,v=q.length;u<v;u++)if(y=q[u],y.name in s){for(o=s[y.name],w=o.length;w--;)o[w].parent||o.splice(w,1);for(w=0,x=y.callbacks.length;w<x;w++)y.callbacks[w](o,y.name,d)}}return g},l.remove_trailing_brs&&o.addNodeFilter("br",function(b,c,d){var e,f,g,j,k,o,p,q,r=b.length,s=h({},n.getBlockElements()),t=n.getNonEmptyElements(),u=n.getNonEmptyElements();for(s.body=1,e=0;e<r;e++)if(f=b[e],g=f.parent,s[f.parent.name]&&f===g.lastChild){for(k=f.prev;k;){if(o=k.name,"span"!==o||"bookmark"!==k.attr("data-mce-type")){if("br"!==o)break;if("br"===o){f=null;break}}k=k.prev}f&&(f.remove(),m(n,t,u,g)&&(p=n.getElementRule(g.name),p&&(p.removeEmpty?g.remove():p.paddEmpty&&i(l,d,s,g))))}else{for(j=f;g&&g.firstChild===j&&g.lastChild===j&&(j=g,!s[g.name]);)g=g.parent;j===g&&l.padd_empty_with_br!==!0&&(q=new a("#text",3),q.value="\xa0",f.replace(q))}}),o.addAttributeFilter("href",function(a){var b,c=a.length,e=function(a){var b=a.split(" ").filter(function(a){return a.length>0});return b.concat(["noopener"]).sort().join(" ")},f=function(a){var b=a?d.trim(a):"";return/\b(noopener)\b/g.test(b)?b:e(b)};if(!l.allow_unsafe_link_target)for(;c--;)b=a[c],"a"===b.name&&"_blank"===b.attr("target")&&b.attr("rel",f(b.attr("rel")))}),l.allow_html_in_named_anchor||o.addAttributeFilter("id,name",function(a){for(var b,c,d,e,f=a.length;f--;)if(e=a[f],"a"===e.name&&e.firstChild&&!e.attr("href")){d=e.parent,b=e.lastChild;do c=b.prev,d.insert(b,e),b=c;while(b)}}),l.fix_list_elements&&o.addNodeFilter("ul,ol",function(b){for(var c,d,e=b.length;e--;)if(c=b[e],d=c.parent,"ul"===d.name||"ol"===d.name)if(c.prev&&"li"===c.prev.name)c.prev.append(c);else{var f=new a("li",1);f.attr("style","list-style-type: none"),c.wrap(f)}}),l.validate&&n.getValidClasses()&&o.addAttributeFilter("class",function(a){for(var b,c,d,e,f,g,h,i=a.length,j=n.getValidClasses();i--;){for(b=a[i],c=b.attr("class").split(" "),f="",d=0;d<c.length;d++)e=c[d],h=!1,g=j["*"],g&&g[e]&&(h=!0),g=j[b.name],!h&&g&&g[e]&&(h=!0),h&&(f&&(f+=" "),f+=e);f.length||(f=null),b.attr("class",f)}})}}),g("q",["1j","b","l","u","v","x","y","z","2z","1e"],function(a,b,c,d,e,f,g,h,i,j){var k=j.each,l=j.trim,m=c.DOM,n=function(a){var b,c,d=function(a){return a&&"br"===a.name};b=a.lastChild,d(b)&&(c=b.prev,d(c)&&(b.remove(),c.remove()))};return function(c,o){var p,q,r,s=["data-mce-selected"];o&&(p=o.dom,q=o.schema);var t=function(a){var b=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>","\\s?("+s.join("|")+')="[^"]+"'].join("|"),"gi");return a=i.trim(a.replace(b,""))},u=function(a){var b,c,d,e,g,h=a,i=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,j=o.schema;for(h=t(h),g=j.getShortEndedElements();e=i.exec(h);)c=i.lastIndex,d=e[0].length,b=g[e[1]]?c:f.findEndTag(j,h,c),h=h.substring(0,c-d)+h.substring(b),i.lastIndex=c-d;return h},v=function(){return u(o.getBody().innerHTML)},w=function(a){j.inArray(s,a)===-1&&(r.addAttributeFilter(a,function(a,b){for(var c=a.length;c--;)a[c].attr(b,null)}),s.push(a))};return p=p||m,q=q||new g(c),c.entity_encoding=c.entity_encoding||"named",c.remove_trailing_brs=!("remove_trailing_brs"in c)||c.remove_trailing_brs,r=new d(c,q),r.addAttributeFilter("data-mce-tabindex",function(a,b){for(var c,d=a.length;d--;)c=a[d],c.attr("tabindex",c.attributes.map["data-mce-tabindex"]),c.attr(b,null)}),r.addAttributeFilter("src,href,style",function(a,b){for(var d,e,f,g=a.length,h="data-mce-"+b,i=c.url_converter,j=c.url_converter_scope;g--;)d=a[g],e=d.attributes.map[h],e!==f?(d.attr(b,e.length>0?e:null),d.attr(h,null)):(e=d.attributes.map[b],"style"===b?e=p.serializeStyle(p.parseStyle(e),d.name):i&&(e=i.call(j,e,b,d.name)),d.attr(b,e.length>0?e:null))}),r.addAttributeFilter("class",function(a){for(var b,c,d=a.length;d--;)b=a[d],c=b.attr("class"),c&&(c=b.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),b.attr("class",c.length>0?c:null))}),r.addAttributeFilter("data-mce-type",function(a,b,c){for(var d,e=a.length;e--;)d=a[e],"bookmark"!==d.attributes.map["data-mce-type"]||c.cleanup||d.remove()}),r.addNodeFilter("noscript",function(a){for(var b,c=a.length;c--;)b=a[c].firstChild,b&&(b.value=e.decode(b.value))}),r.addNodeFilter("script,style",function(a,b){for(var d,e,f,g=a.length,h=function(a){return a.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};g--;)d=a[g],e=d.firstChild?d.firstChild.value:"","script"===b?(f=d.attr("type"),f&&d.attr("type","mce-no/type"==f?null:f.replace(/^mce\-/,"")),"xhtml"===c.element_format&&e.length>0&&(d.firstChild.value="// <![CDATA[\n"+h(e)+"\n// ]]>")):"xhtml"===c.element_format&&e.length>0&&(d.firstChild.value="<!--\n"+h(e)+"\n-->")}),r.addNodeFilter("#comment",function(a){for(var b,c=a.length;c--;)b=a[c],0===b.value.indexOf("[CDATA[")?(b.name="#cdata",b.type=4,b.value=b.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===b.value.indexOf("mce:protected ")&&(b.name="#text",b.type=3,b.raw=!0,b.value=unescape(b.value).substr(14))}),r.addNodeFilter("xml:namespace,input",function(a,b){for(var c,d=a.length;d--;)c=a[d],7===c.type?c.remove():1===c.type&&("input"!==b||"type"in c.attributes.map||c.attr("type","text"))}),r.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(a,b){for(var c=a.length;c--;)a[c].attr(b,null)}),{schema:q,addNodeFilter:r.addNodeFilter,addAttributeFilter:r.addAttributeFilter,serialize:function(d,e){var f,g,j,m,o,s,t=this;return b.ie&&p.select("script,style,select,map").length>0?(o=d.innerHTML,d=d.cloneNode(!1),p.setHTML(d,o)):d=d.cloneNode(!0),f=a.implementation,f.createHTMLDocument&&(g=f.createHTMLDocument(""),k("BODY"==d.nodeName?d.childNodes:[d],function(a){g.body.appendChild(g.importNode(a,!0))}),d="BODY"!=d.nodeName?g.body.firstChild:g.body,j=p.doc,p.doc=g),e=e||{},e.format=e.format||"html",e.selection&&(e.forced_root_block=""),e.no_events||(e.node=d,t.onPreProcess(e)),o=i.trim(l(e.getInner?d.innerHTML:p.getOuterHTML(d))),s=r.parse(o,e),n(s),m=new h(c,q),e.content=m.serialize(s),e.no_events||t.onPostProcess(e),j&&(p.doc=j),e.node=null,e.content},addRules:function(a){q.addValidElements(a)},setRules:function(a){q.setValidElements(a)},onPreProcess:function(a){o&&o.fire("PreProcess",a)},onPostProcess:function(a){o&&o.fire("PostProcess",a)},addTempAttr:w,trimHtml:t,getTrimmedContent:v,trimContent:u}}}),g("38",["3b"],function(a){return function(){var b=a.getOrDie("XMLHttpRequest");return new b}}),g("6i",["38","2","3p","1d","1e"],function(a,b,c,d,e){return function(c,f){var g={},h=function(a,b){return a?a.replace(/\/$/,"")+"/"+b.replace(/^\//,""):b},i=function(c,d,e,g){var i,j;i=new a,i.open("POST",f.url),i.withCredentials=f.credentials,i.upload.onprogress=function(a){g(a.loaded/a.total*100)},i.onerror=function(){e("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var a;return i.status<200||i.status>=300?void e("HTTP Error: "+i.status):(a=JSON.parse(i.responseText),a&&"string"==typeof a.location?void d(h(f.basePath,a.location)):void e("Invalid JSON: "+i.responseText))},j=new b.FormData,j.append("file",c.blob(),c.filename()),i.send(j)},j=function(){return new d(function(a){a([])})},k=function(a,b){return{url:b,blobInfo:a,status:!0}},l=function(a,b){return{url:"",blobInfo:a,status:!1,error:b}},m=function(a,b){e.each(g[a],function(a){a(b)}),delete g[a]},n=function(a,b,e){return c.markPending(a.blobUri()),new d(function(d){var f,g,h=function(){};try{var i=function(){f&&(f.close(),g=h)},j=function(b){i(),c.markUploaded(a.blobUri(),b),m(a.blobUri(),k(a,b)),d(k(a,b))},n=function(b){i(),c.removeFailed(a.blobUri()),m(a.blobUri(),l(a,b)),d(l(a,b))};g=function(a){a<0||a>100||(f||(f=e()),f.progressBar.value(a))},b(a,j,n,g)}catch(b){d(l(a,b.message))}})},o=function(a){return a===i},p=function(a){var b=a.blobUri();return new d(function(a){g[b]=g[b]||[],g[b].push(a)})},q=function(a,b){return a=e.grep(a,function(a){return!c.isUploaded(a.blobUri())}),d.all(e.map(a,function(a){return c.isPending(a.blobUri())?p(a):n(a,f.handler,b)}))},r=function(a,b){return!f.url&&o(f.handler)?j():q(a,b)};return f=e.extend({credentials:!1,handler:i},f),{upload:r}}}),g("74",["3b"],function(a){return function(b,c){var d=a.getOrDie("Blob");return new d(b,c)}}),g("75",["3b"],function(a){return function(){var b=a.getOrDie("FileReader");return new b}});g("76",["3b"],function(a){return function(b){var c=a.getOrDie("Uint8Array");return new c(b)}});g("77",["3b"],function(a){var b=function(b){var c=a.getOrDie("requestAnimationFrame");c(b)},c=function(b){var c=a.getOrDie("atob");return c(b)};return{atob:c,requestAnimationFrame:b}}),g("6w",["74","75","76","77","38","1d"],function(a,b,c,d,e,f){var g=function(a){return new f(function(b,c){var d=function(){c("Cannot convert "+a+" to Blob. Resource might not exist or is inaccessible.")};try{var f=new e;f.open("GET",a,!0),f.responseType="blob",f.onload=function(){200==this.status?b(this.response):d()},f.onerror=d,f.send()}catch(a){d()}})},h=function(a){var b,c;return a=decodeURIComponent(a).split(","),c=/data:([^;]+)/.exec(a[0]),c&&(b=c[1]),{type:b,data:a[1]}},i=function(b){return new f(function(e){var f,g,i;b=h(b);try{f=d.atob(b.data)}catch(b){return void e(new a([]))}for(g=new c(f.length),i=0;i<g.length;i++)g[i]=f.charCodeAt(i);e(new a([g],{type:b.type}))})},j=function(a){return 0===a.indexOf("blob:")?g(a):0===a.indexOf("data:")?i(a):null},k=function(a){return new f(function(c){var d=new b;d.onloadend=function(){c(d.result)},d.readAsDataURL(a)})};return{uriToBlob:j,blobToDataUri:k,parseDataUri:h}}),g("6j",["1d","1r","3p","6w","b"],function(a,b,c,d,e){var f=0,g=function(a){return(a||"blobid")+f++},h=function(a,b,c,e){var f,h;return 0===b.src.indexOf("blob:")?(h=a.getByUri(b.src),void(h?c({image:b,blobInfo:h}):d.uriToBlob(b.src).then(function(e){d.blobToDataUri(e).then(function(i){f=d.parseDataUri(i).data,h=a.create(g(),e,f),a.add(h),c({image:b,blobInfo:h})})},function(a){e(a)}))):(f=d.parseDataUri(b.src).data,h=a.findFirst(function(a){return a.base64()===f}),void(h?c({image:b,blobInfo:h}):d.uriToBlob(b.src).then(function(d){h=a.create(g(),d,f),a.add(h),c({image:b,blobInfo:h})},function(a){e(a)})))},i=function(a){return a?a.getElementsByTagName("img"):[]};return function(d,f){var g={},j=function(j,k){var l,m;return k||(k=c.constant(!0)),l=b.filter(i(j),function(a){var b=a.src;return!!e.fileApi&&(!a.hasAttribute("data-mce-bogus")&&(!a.hasAttribute("data-mce-placeholder")&&(!(!b||b==e.transparentSrc)&&(0===b.indexOf("blob:")?!d.isUploaded(b):0===b.indexOf("data:")&&k(a)))))}),m=b.map(l,function(b){var c;return g[b.src]?new a(function(a){g[b.src].then(function(c){return"string"==typeof c?c:void a({image:b,blobInfo:c.blobInfo})})}):(c=new a(function(a,c){h(f,b,a,c)}).then(function(a){return delete g[a.image.src],a})["catch"](function(a){return delete g[b.src],a}),g[b.src]=c,c)}),a.all(m)};return{findAll:j}}}),g("26",[],function(){var a=0,b=function(){var a=function(){return Math.round(4294967295*Math.random()).toString(36)},b=(new Date).getTime();return"s"+b.toString(36)+a()+a()+a()},c=function(c){return c+a++ +b()};return{uuid:c}}),g("6k",["1k","1r","3p","26"],function(a,b,c,d){return function(){var e=[],f=c.constant,g=function(a){var b={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"};return b[a.toLowerCase()]||"dat"},h=function(a,b,c,d){return i("object"==typeof a?a:{id:a,name:d,blob:b,base64:c})},i=function(b){var c,e;if(!b.blob||!b.base64)throw"blob and base64 representations of the image are required for BlobInfo to be created";return c=b.id||d.uuid("blobid"),e=b.name||c,{id:f(c),name:f(e),filename:f(e+"."+g(b.blob.type)),blob:f(b.blob),base64:f(b.base64),blobUri:f(b.blobUri||a.createObjectURL(b.blob)),uri:f(b.uri)}},j=function(a){k(a.id())||e.push(a)},k=function(a){return l(function(b){return b.id()===a})},l=function(a){return b.filter(e,a)[0]},m=function(a){return l(function(b){return b.blobUri()==a})},n=function(c){e=b.filter(e,function(b){return b.blobUri()!==c||(a.revokeObjectURL(b.blobUri()),!1)})},o=function(){b.each(e,function(b){a.revokeObjectURL(b.blobUri())}),e=[]};return{create:h,add:j,get:k,getByUri:m,findFirst:l,removeByUri:n,destroy:o}}}),g("6l",[],function(){return function(){var a=1,b=2,c={},d=function(a,b){return{status:a,resultUri:b}},e=function(a){return a in c},f=function(a){var b=c[a];return b?b.resultUri:null},g=function(b){return!!e(b)&&c[b].status===a},h=function(a){return!!e(a)&&c[a].status===b},i=function(b){c[b]=d(a,null)},j=function(a,e){c[a]=d(b,e)},k=function(a){delete c[a]},l=function(){c={}};return{hasBlobUri:e,getResultUri:f,isPending:g,isUploaded:h,markPending:i,markUploaded:j,removeFailed:k,destroy:l}}}),g("6a",["1r","6i","6j","6k","6l","28"],function(a,b,c,d,e,f){return function(g){var h,i,j=new d,k=g.settings,l=new e,m=function(a){return function(b){return g.selection?a(b):[]}},n=function(){return"?"+(new Date).getTime()},o=function(a,b,c){var d=0;do d=a.indexOf(b,d),d!==-1&&(a=a.substring(0,d)+c+a.substr(d+b.length),d+=c.length-b.length+1);while(d!==-1);return a},p=function(a,b,c){return a=o(a,'src="'+b+'"','src="'+c+'"'),a=o(a,'data-mce-src="'+b+'"','data-mce-src="'+c+'"')},q=function(b,c){a.each(g.undoManager.data,function(d){"fragmented"===d.type?d.fragments=a.map(d.fragments,function(a){return p(a,b,c)}):d.content=p(d.content,b,c)})},r=function(){return g.notificationManager.open({text:g.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},s=function(a,b){j.removeByUri(a.src),q(a.src,b),g.$(a).attr({src:k.images_reuse_filename?b+n():b,"data-mce-src":g.convertURL(b,"src")})},t=function(c){return h||(h=new b(l,{url:k.images_upload_url,basePath:k.images_upload_base_path,credentials:k.images_upload_credentials,handler:k.images_upload_handler})),w().then(m(function(b){var d;return d=a.map(b,function(a){return a.blobInfo}),h.upload(d,r).then(m(function(d){var e=a.map(d,function(a,c){var d=b[c].image;return a.status&&g.settings.images_replace_blob_uris!==!1?s(d,a.url):a.error&&f.uploadError(g,a.error),{element:d,status:a.status}});return c&&c(e),e}))}))},u=function(a){if(k.automatic_uploads!==!1)return t(a)},v=function(a){return!k.images_dataimg_filter||k.images_dataimg_filter(a)},w=function(){return i||(i=new c(l,j)),i.findAll(g.getBody(),v).then(m(function(b){return b=a.filter(b,function(a){return"string"!=typeof a||(f.displayError(g,a),!1)}),a.each(b,function(a){q(a.image.src,a.blobInfo.blobUri()),a.image.src=a.blobInfo.blobUri(),a.image.removeAttribute("data-mce-src")}),b}))},x=function(){j.destroy(),l.destroy(),i=h=null},y=function(b){return b.replace(/src="(blob:[^"]+)"/g,function(b,c){var d=l.getResultUri(c);if(d)return'src="'+d+'"';var e=j.getByUri(c);return e||(e=a.reduce(g.editorManager.get(),function(a,b){return a||b.editorUpload&&b.editorUpload.blobCache.getByUri(c)},null)),e?'src="data:'+e.blob().type+";base64,"+e.base64()+'"':b})};return g.on("setContent",function(){g.settings.automatic_uploads!==!1?u():w()}),g.on("RawSaveContent",function(a){a.content=y(a.content)}),g.on("getContent",function(a){a.source_view||"raw"==a.format||(a.content=y(a.content))}),g.on("PostRender",function(){g.parser.addNodeFilter("img",function(b){a.each(b,function(a){var b=a.attr("src");if(!j.getByUri(b)){var c=l.getResultUri(b);c&&a.attr("src",c)}})})}),{blobCache:j,uploadImages:t,uploadImagesAuto:u,scanForImages:w,destroy:x}}}),g("6b",["1i","1","1v","j","1y","5l","23"],function(a,b,c,d,e,f,g){var h=function(a,b){return a.hasOwnProperty(b.nodeName)},i=function(a,b){return!!e.isText(b)||!!e.isElement(b)&&(!h(a,b)&&!d.isBookmarkNode(b))},j=function(b,d,e){return a.exists(f.parents(c.fromDom(e),c.fromDom(d)),function(a){return h(b,a.dom())})},k=function(a){var b,c,d,f,h,k,l,m,n,o,p,q=a.settings,r=a.dom,s=a.selection,t=a.schema,u=t.getBlockElements(),v=s.getStart(),w=a.getBody();if(p=q.forced_root_block,v&&e.isElement(v)&&p&&(o=w.nodeName.toLowerCase(),t.isValidChild(o,p.toLowerCase())&&!j(u,w,v))){for(b=s.getRng(),c=b.startContainer,d=b.startOffset,f=b.endContainer,h=b.endOffset,n=g.hasFocus(a),v=w.firstChild;v;)if(i(u,v)){if(e.isText(v)&&0===v.nodeValue.length){l=v,v=v.nextSibling,r.remove(l);continue}k||(k=r.create(p,a.settings.forced_root_block_attrs),v.parentNode.insertBefore(k,v),m=!0),l=v,v=v.nextSibling,k.appendChild(l)}else k=null,v=v.nextSibling;m&&n&&(b.setStart(c,d),b.setEnd(f,h),s.setRng(b),a.nodeChanged())}},l=function(a){a.settings.forced_root_block&&a.on("NodeChange",b.curry(k,a))};return{setup:l}}),g("73",["1r","1y","3n"],function(a,b,c){var d=function(e){var f=function(b){return a.map(b,function(a){return a=c.clone(a),a.node=e,a})};if(a.isArray(e))return a.reduce(e,function(a,b){return a.concat(d(b))},[]);if(b.isElement(e))return f(e.getClientRects());if(b.isText(e)){var g=e.ownerDocument.createRange();return g.setStart(e,0),g.setEnd(e,e.data.length),f(g.getClientRects())}};return{getClientRects:d}}),g("6s",["3p","1r","1y","73","3n","53","3m"],function(a,b,c,d,e,f,g){var h=c.isContentEditableFalse,i=f.findNode,j=a.curry,k=function(a,b){return Math.abs(a.left-b)},l=function(a,b){return Math.abs(a.right-b)},m=function(a,c){var d=function(a,b){return a>=b.left&&a<=b.right};return b.reduce(a,function(a,b){var e,f;return e=Math.min(k(a,c),l(a,c)),f=Math.min(k(b,c),l(b,c)),d(c,b)?b:d(c,a)?a:f==e&&h(b.node)?b:f<e?b:a})},n=function(a,b,c,d){for(;d=i(d,a,g.isEditableCaretCandidate,b);)if(c(d))return},o=function(a,c){var f=[],g=function(a,e){var g;return g=b.filter(d.getClientRects(e),function(b){return!a(b,c)}),f=f.concat(g),0===g.length};return f.push(c),n(-1,a,j(g,e.isAbove),c.node),n(1,a,j(g,e.isBelow),c.node),f},p=function(a){return b.filter(b.toArray(a.getElementsByTagName("*")),h)},q=function(a,b){return{node:a.node,before:k(a,b)<l(a,b)}},r=function(a,c,e){var f,g;return f=d.getClientRects(p(a)),f=b.filter(f,function(a){return e>=a.top&&e<=a.bottom}),g=m(f,c),g&&(g=m(o(a,g),c),g&&h(g.node))?q(g,c):null};return{findClosestClientRect:m,findLineNodeRects:o,closestCaret:r}}),g("78",["3p","1r","73","3m","53","3q","2y","3n"],function(a,b,c,d,e,f,g,h){var i=a.curry,j=function(a,b,c,f){for(;f=e.findNode(f,a,d.isEditableCaretCandidate,b);)if(c(f))return},k=function(a,d,e,f,g,h){var i,k,l=0,m=[],n=function(f){var h,i,j;for(j=c.getClientRects(f),a==-1&&(j=j.reverse()),h=0;h<j.length;h++)if(i=j[h],!e(i,k)){if(m.length>0&&d(i,b.last(m))&&l++,i.line=l,g(i))return!0;m.push(i)}};return(k=b.last(h.getClientRects()))?(i=h.getNode(),n(i),j(a,f,n,i),m):m},l=function(a,b){return b.line>a},m=function(a,b){return b.line===a},n=i(k,-1,h.isAbove,h.isBelow),o=i(k,1,h.isBelow,h.isAbove),p=function(a,c,d,e){var i,j,k,l,m,n,o=new f(c),p=[],q=0,r=function(c){return 1==a?b.last(c.getClientRects()):b.last(c.getClientRects())};1==a?(i=o.next,j=h.isBelow,k=h.isAbove,l=g.after(e)):(i=o.prev,j=h.isAbove,k=h.isBelow,l=g.before(e)),n=r(l);do if(l.isVisible()&&(m=r(l),!k(m,n))){if(p.length>0&&j(m,b.last(p))&&q++,m=h.clone(m),m.position=l,m.line=q,d(m))return p;p.push(m)}while(l=i(l));return p};return{upUntil:n,downUntil:o,positionsUntil:p,isAboveLine:i(l),isLine:i(m)}}),g("6u",["2y","53","1y","3p"],function(a,b,c,d){var e=c.isContentEditableTrue,f=c.isContentEditableFalse,g=function(a,b,c,d){return b._selectionOverrides.showCaret(a,c,d)},h=function(a){var b=a.ownerDocument.createRange();return b.selectNode(a),b},i=function(a,b){var c;return c=a.fire("BeforeObjectSelected",{target:b}),c.isDefaultPrevented()?null:h(b)},j=function(c,h){var i,j;return h=b.normalizeRange(1,c.getBody(),h),i=a.fromRangeStart(h),f(i.getNode())?g(1,c,i.getNode(),!i.isAtEnd()):f(i.getNode(!0))?g(1,c,i.getNode(!0),!1):(j=c.dom.getParent(i.getNode(),d.or(f,e)),f(j)?g(1,c,j,!1):null)},k=function(a,b){var c;return b&&b.collapsed?(c=j(a,b),c?c:b):b};return{showCaret:g,selectNode:i,renderCaretAtRange:j,renderRangeCaret:k}}),g("6x",["b","2x","2y","53","3q","6s","78","1y","6u","2t","1r","3p"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=h.isContentEditableFalse,n=j.getSelectedNode,o=d.isAfterContentEditableFalse,p=d.isBeforeContentEditableFalse,q=function(a,b){for(;b=a(b);)if(b.isVisible())return b;return b},r=function(a,b){var c=d.isInSameBlock(a,b);return!(c||!h.isBr(a.getNode()))||c},s=function(a){return b.isCaretContainerBlock(a.startContainer)},t=function(a,b,e){return e=d.normalizeRange(a,b,e),a===-1?c.fromRangeStart(e):c.fromRangeEnd(e)},u=function(a,b,c,d,e){var f,g,h,j;return!e.collapsed&&(f=n(e),m(f))?i.showCaret(a,b,f,a===-1):(j=s(e),g=t(a,b.getBody(),e),d(g)?i.selectNode(b,g.getNode(a===-1)):(g=c(g))?d(g)?i.showCaret(a,b,g.getNode(a===-1),1===a):(h=c(g),d(h)&&r(g,h)?i.showCaret(a,b,h.getNode(a===-1),1===a):j?i.renderRangeCaret(b,g.toRange()):null):j?e:null)},v=function(a,b,c,d){var e,h,j,l,q,r,s,u,v;if(v=n(d),
e=t(a,b.getBody(),d),h=c(b.getBody(),g.isAboveLine(1),e),j=k.filter(h,g.isLine(1)),q=k.last(e.getClientRects()),p(e)&&(v=e.getNode()),o(e)&&(v=e.getNode(!0)),!q)return null;if(r=q.left,l=f.findClosestClientRect(j,r),l&&m(l.node))return s=Math.abs(r-l.left),u=Math.abs(r-l.right),i.showCaret(a,b,l.node,s<u);if(v){var w=g.positionsUntil(a,b.getBody(),g.isAboveLine(1),v);if(l=f.findClosestClientRect(k.filter(w,g.isLine(1)),r))return i.renderRangeCaret(b,l.position.toRange());if(l=k.last(k.filter(w,g.isLine(0))))return i.renderRangeCaret(b,l.position.toRange())}},w=function(b){var c=b.dom.create(b.settings.forced_root_block);return(!a.ie||a.ie>=11)&&(c.innerHTML='<br data-mce-bogus="1">'),c},x=function(a,b,d){var f,g,h,i=new e(a.getBody()),j=l.curry(q,i.next),k=l.curry(q,i.prev);if(d.collapsed&&a.settings.forced_root_block){if(f=a.dom.getParent(d.startContainer,"PRE"),!f)return;g=1===b?j(c.fromRangeStart(d)):k(c.fromRangeStart(d)),g||(h=w(a),1===b?a.$(f).after(h):a.$(f).before(h),a.selection.select(h,!0),a.selection.collapse())}},y=function(a,b){var c,d=new e(a.getBody()),f=l.curry(q,d.next),g=l.curry(q,d.prev),h=b?1:-1,i=b?f:g,j=b?p:o,k=a.selection.getRng();return(c=u(h,a,i,j,k))?c:(c=x(a,h,k),c?c:null)},z=function(a,b){var c,d=b?1:-1,e=b?g.downUntil:g.upUntil,f=a.selection.getRng();return(c=v(d,a,e,f))?c:(c=x(a,d,f),c?c:null)},A=function(a,b){return function(){var c=y(a,b);return!!c&&(a.selection.setRng(c),!0)}},B=function(a,b){return function(){var c=z(a,b);return!!c&&(a.selection.setRng(c),!0)}};return{moveH:A,moveV:B}}),g("79",["27","4","5"],function(a,b,c){var d=function(a,b){return b},e=function(b,c){var d=a.isObject(b)&&a.isObject(c);return d?g(b,c):c},f=function(a){return function(){for(var d=new b(arguments.length),e=0;e<d.length;e++)d[e]=arguments[e];if(0===d.length)throw new c("Can't merge zero objects");for(var f={},g=0;g<d.length;g++){var h=d[g];for(var i in h)h.hasOwnProperty(i)&&(f[i]=a(f[i],h[i]))}return f}},g=f(e),h=f(d);return{deepMerge:g,merge:h}}),g("6y",["1i","1","79"],function(a,b,c){var d=function(d){return a.map(d,function(a){return c.merge({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:b.noop},a)})},e=function(a,b){return b.keyCode===a.keyCode&&b.shiftKey===a.shiftKey&&b.altKey===a.altKey&&b.ctrlKey===a.ctrlKey&&b.metaKey===a.metaKey},f=function(b,c){return a.bind(d(b),function(a){return e(a,c)?[a]:[]})},g=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}},h=function(b,c){return a.find(f(b,c),function(a){return a.action()})};return{match:f,action:g,execute:h}}),g("6m",["3c","5i","6x","6y","1g"],function(a,b,c,d,e){var f=function(f,g,h){var i=a.detect().os;d.execute([{keyCode:e.RIGHT,action:c.moveH(f,!0)},{keyCode:e.LEFT,action:c.moveH(f,!1)},{keyCode:e.UP,action:c.moveV(f,!1)},{keyCode:e.DOWN,action:c.moveV(f,!0)},{keyCode:e.RIGHT,action:b.move(f,g,!0)},{keyCode:e.LEFT,action:b.move(f,g,!1)},{keyCode:e.RIGHT,ctrlKey:!i.isOSX(),altKey:i.isOSX(),action:b.moveNextWord(f,g)},{keyCode:e.LEFT,ctrlKey:!i.isOSX(),altKey:i.isOSX(),action:b.movePrevWord(f,g)}],h).each(function(a){h.preventDefault()})},g=function(a,b){a.on("keydown",function(c){c.isDefaultPrevented()===!1&&f(a,b,c)})};return{setup:g}}),g("6z",["1i","1","1v","3g","2y","5d","3x","3k","5l","2e"],function(a,b,c,d,e,f,g,h,i,j){var k=function(c,d){var e=i.parentsAndSelf(d,c);return a.findIndex(e,h.isBlock).fold(b.constant(e),function(a){return e.slice(0,a)})},l=function(a){return 1===d.children(a).length},m=function(c,d,e,g){var h=b.curry(j.isFormatElement,d),i=a.map(a.filter(g,h),function(a){return a.dom()});if(0===i.length)f.deleteElement(d,c,e);else{var k=j.replaceWithCaretFormat(e.dom(),i);d.selection.setRng(k.toRange())}},n=function(b,d){var f=c.fromDom(b.getBody()),h=c.fromDom(b.selection.getStart()),i=a.filter(k(f,h),l);return a.last(i).map(function(a){var c=e.fromRangeStart(b.selection.getRng());return!!g.willDeleteLastPositionInElement(d,c,a.dom())&&(m(d,b,a,i),!0)}).getOr(!1)},o=function(a,b){return!!a.selection.isCollapsed()&&n(a,b)};return{backspaceDelete:o}}),g("6n",["3u","3v","3w","3y","6z","3z","6y","1g"],function(a,b,c,d,e,f,g,h){var i=function(i,j,k){g.execute([{keyCode:h.BACKSPACE,action:g.action(c.backspaceDelete,i,!1)},{keyCode:h.DELETE,action:g.action(c.backspaceDelete,i,!0)},{keyCode:h.BACKSPACE,action:g.action(d.backspaceDelete,i,j,!1)},{keyCode:h.DELETE,action:g.action(d.backspaceDelete,i,j,!0)},{keyCode:h.BACKSPACE,action:g.action(b.backspaceDelete,i,!1)},{keyCode:h.DELETE,action:g.action(b.backspaceDelete,i,!0)},{keyCode:h.BACKSPACE,action:g.action(a.backspaceDelete,i,!1)},{keyCode:h.DELETE,action:g.action(a.backspaceDelete,i,!0)},{keyCode:h.BACKSPACE,action:g.action(f.backspaceDelete,i,!1)},{keyCode:h.DELETE,action:g.action(f.backspaceDelete,i,!0)},{keyCode:h.BACKSPACE,action:g.action(e.backspaceDelete,i,!1)},{keyCode:h.DELETE,action:g.action(e.backspaceDelete,i,!0)}],k).each(function(a){k.preventDefault()})},j=function(a,b){g.execute([{keyCode:h.BACKSPACE,action:g.action(c.paddEmptyElement,a)},{keyCode:h.DELETE,action:g.action(c.paddEmptyElement,a)}],b)},k=function(a,b){a.on("keydown",function(c){c.isDefaultPrevented()===!1&&i(a,b,c)}),a.on("keyup",function(b){b.isDefaultPrevented()===!1&&j(a,b)})};return{setup:k}}),g("70",["2x","1y","s","2e","2r","2z","1e"],function(a,b,c,d,e,f,g){var h=function(a){return a&&"A"===a.nodeName&&0===g.trim(f.trim(a.innerText||a.textContent)).length},i=function(a){return a&&/^(TD|TH|CAPTION)$/.test(a.nodeName)},j=function(a,b){return a.firstChild&&a.firstChild.nodeName==b},k=function(a,b){return a&&a.parentNode&&a.parentNode.nodeName===b},l=function(a){a.innerHTML='<br data-mce-bogus="1">'},m=function(a,b){return a.nodeName===b||a.previousSibling&&a.previousSibling.nodeName===b},n=function(a){return a&&/^(OL|UL|LI)$/.test(a.nodeName)},o=function(a){return n(a)&&n(a.parentNode)},p=function(a,b){return b&&a.isBlock(b)&&!/^(TD|TH|CAPTION|FORM)$/.test(b.nodeName)&&!/^(fixed|absolute)/i.test(b.style.position)&&"true"!==a.getContentEditable(b)},q=function(a,b,c){var d,e=c,f=[];if(e){for(;e=e.firstChild;){if(a.isBlock(e))return;1!=e.nodeType||b[e.nodeName.toLowerCase()]||f.push(e)}for(d=f.length;d--;)e=f[d],!e.hasChildNodes()||e.firstChild==e.lastChild&&""===e.firstChild.nodeValue?a.remove(e):h(e)&&a.remove(e)}},r=function(a,c,d){return b.isText(c)===!1?d:a?1===d&&c.data.charAt(d-1)===f.ZWSP?0:d:d===c.data.length-1&&c.data.charAt(d)===f.ZWSP?c.data.length:d},s=function(a){var b=a.cloneRange();return b.setStart(a.startContainer,r(!0,a.startContainer,a.startOffset)),b.setEnd(a.endContainer,r(!1,a.endContainer,a.endOffset)),b},t=function(a){for(;a;){if(1===a.nodeType||3===a.nodeType&&a.data&&/[\r\n\s]/.test(a.data))return a;a=a.nextSibling}},u=function(a,b){a.execCommand("InsertLineBreak",!1,b)},v=function(a){do 3===a.nodeType&&(a.nodeValue=a.nodeValue.replace(/^[\r\n]+/,"")),a=a.firstChild;while(a)},w=function(a,b){var c,d,e=a.getRoot();for(c=b;c!==e&&"false"!==a.getContentEditable(c);)"true"===a.getContentEditable(c)&&(d=c),c=c.parentNode;return c!==e?d:e},x=function(a,b){var c=a.settings.forced_root_block;c&&c.toLowerCase()===b.tagName.toLowerCase()&&a.dom.setAttribs(b,a.settings.forced_root_block_attrs)},y=function(a,b,c,d,e){var f,g,h,j,k,l,m=b||"P",n=a.dom,o=w(n,d);if(g=n.getParent(d,n.isBlock),!g||!p(n,g)){if(g=g||o,l=g==a.getBody()||i(g)?g.nodeName.toLowerCase():g.parentNode.nodeName.toLowerCase(),!g.hasChildNodes())return f=n.create(m),x(a,f),g.appendChild(f),c.setStart(f,0),c.setEnd(f,0),f;for(j=d;j.parentNode!=g;)j=j.parentNode;for(;j&&!n.isBlock(j);)h=j,j=j.previousSibling;if(h&&a.schema.isValidChild(l,m.toLowerCase())){for(f=n.create(m),x(a,f),h.parentNode.insertBefore(f,h),j=h;j&&!n.isBlock(j);)k=j.nextSibling,f.appendChild(j),j=k;c.setStart(d,e),c.setEnd(d,e)}}return d},z=function(a,b){var c;b.normalize(),c=b.lastChild,c&&!/^(left|right)$/gi.test(a.getStyle(c,"float",!0))||a.add(b,"br")},A=function(a){var b=a.parentNode;return/^(LI|DT|DD)$/.test(b.nodeName)?b:a},B=function(a,b,c){for(var d=a[c?"firstChild":"lastChild"];d&&1!=d.nodeType;)d=d[c?"nextSibling":"previousSibling"];return d===b},C=function(b,f){var g,h,i,n,C,D,E,F,G,H,I,J,K,L=b.dom,M=b.selection,N=b.settings,O=b.schema,P=O.getNonEmptyElements(),Q=b.selection.getRng(),R=function(a){var b,d,e,f,g=a,h=O.getMoveCaretBeforeOnEnterElements();if(a){if(/^(LI|DT|DD)$/.test(a.nodeName)){var i=t(a.firstChild);i&&/^(UL|OL|DL)$/.test(i.nodeName)&&a.insertBefore(L.doc.createTextNode("\xa0"),a.firstChild)}if(e=L.createRng(),a.normalize(),a.hasChildNodes()){for(b=new c(a,a);d=b.current();){if(3==d.nodeType){e.setStart(d,0),e.setEnd(d,0);break}if(h[d.nodeName.toLowerCase()]){e.setStartBefore(d),e.setEndBefore(d);break}g=d,d=b.next()}d||(e.setStart(g,0),e.setEnd(g,0))}else"BR"==a.nodeName?a.nextSibling&&L.isBlock(a.nextSibling)?(e.setStartBefore(a),e.setEndBefore(a)):(e.setStartAfter(a),e.setEndAfter(a)):(e.setStart(a,0),e.setEnd(a,0));M.setRng(e),L.remove(f),M.scrollIntoView(a)}},S=function(a){var c,e,f,g=i,j=O.getTextInlineElements();if(a||"TABLE"==H||"HR"==H?(c=L.create(a||J),x(b,c)):c=C.cloneNode(!1),f=c,N.keep_styles===!1)L.setAttrib(c,"style",null),L.setAttrib(c,"class",null);else do if(j[g.nodeName]){if(d.isCaretNode(g))continue;e=g.cloneNode(!1),L.setAttrib(e,"id",""),c.hasChildNodes()?(e.appendChild(c.firstChild),c.appendChild(e)):(f=e,c.appendChild(e))}while((g=g.parentNode)&&g!=h);return l(f),c},T=function(a){var b,d,e,f;if(f=r(a,i,n),3==i.nodeType&&(a?f>0:f<i.nodeValue.length))return!1;if(i.parentNode==C&&K&&!a)return!0;if(a&&1==i.nodeType&&i==C.firstChild)return!0;if(m(i,"TABLE")||m(i,"HR"))return K&&!a||!K&&a;for(b=new c(i,C),3==i.nodeType&&(a&&0===f?b.prev():a||f!=i.nodeValue.length||b.next());d=b.current();){if(1===d.nodeType){if(!d.getAttribute("data-mce-bogus")&&(e=d.nodeName.toLowerCase(),P[e]&&"br"!==e))return!1}else if(3===d.nodeType&&!/^[ \t\r\n]*$/.test(d.nodeValue))return!1;a?b.prev():b.next()}return!0},U=function(){G!=b.getBody()&&(o(G)&&(J="LI"),E=J?S(J):L.create("BR"),B(G,C,!0)&&B(G,C,!1)?k(G,"LI")?L.insertAfter(E,A(G)):L.replace(E,G):B(G,C,!0)?k(G,"LI")?(L.insertAfter(E,A(G)),E.appendChild(L.doc.createTextNode(" ")),E.appendChild(G)):G.parentNode.insertBefore(E,G):B(G,C,!1)?L.insertAfter(E,A(G)):(G=A(G),g=Q.cloneRange(),g.setStartAfter(C),g.setEndAfter(G),F=g.extractContents(),"LI"===J&&j(F,"LI")?(E=F.firstChild,L.insertAfter(F,G)):(L.insertAfter(F,G),L.insertAfter(E,G))),L.remove(C),R(E))},V=function(){E=/^(H[1-6]|PRE|FIGURE)$/.test(H)&&"HGROUP"!=I?S(J):S(),N.end_container_on_empty_block&&p(L,G)&&L.isEmpty(C)?E=L.split(G,C):L.insertAfter(E,C),R(E)};if(e.normalize(L,Q).each(function(a){Q.setStart(a.startContainer,a.startOffset),Q.setEnd(a.endContainer,a.endOffset)}),i=Q.startContainer,n=Q.startOffset,J=(N.force_p_newlines?"p":"")||N.forced_root_block,J=J?J.toUpperCase():"",D=f.shiftKey,1==i.nodeType&&i.hasChildNodes()&&(K=n>i.childNodes.length-1,i=i.childNodes[Math.min(n,i.childNodes.length-1)]||i,n=K&&3==i.nodeType?i.nodeValue.length:0),h=w(L,i)){if(!L.isBlock(h)&&h!=L.getRoot())return void(J&&!D||u(b,f));if((J&&!D||!J&&D)&&(i=y(b,J,Q,i,n)),C=L.getParent(i,L.isBlock),G=C?L.getParent(C.parentNode,L.isBlock):null,H=C?C.nodeName.toUpperCase():"",I=G?G.nodeName.toUpperCase():"","LI"!=I||f.ctrlKey||(C=G,G=G.parentNode,H=I),/^(LI|DT|DD)$/.test(H)){if(!J&&D)return void u(b,f);if(L.isEmpty(C))return void U()}if("PRE"==H&&N.br_in_pre!==!1){if(!D)return void u(b,f)}else if(!J&&!D&&"LI"!=H||J&&D)return void u(b,f);J&&C===b.getBody()||(J=J||"P",a.isCaretContainerBlock(C)?(E=a.showCaretContainerBlock(C),L.isEmpty(C)&&l(C),R(E)):T()?V():T(!0)?(E=C.parentNode.insertBefore(S(),C),R(m(C,"HR")?E:C)):(g=s(Q).cloneRange(),g.setEndAfter(C),F=g.extractContents(),v(F),E=F.firstChild,L.insertAfter(F,C),q(L,P,E),z(L,C),L.isEmpty(C)&&l(C),E.normalize(),L.isEmpty(E)?(L.remove(E),V()):R(E)),L.setAttrib(E,"id",""),b.fire("NewBlock",{newBlock:E}))}};return{insert:C}}),g("6o",["70","1g"],function(a,b){var c=function(a){a.typing&&(a.typing=!1,a.add())},d=function(b,d){d.isDefaultPrevented()||(d.preventDefault(),c(b.undoManager),b.undoManager.transact(function(){b.selection.isCollapsed()===!1&&b.execCommand("Delete"),a.insert(b,d)}))},e=function(a){a.on("keydown",function(c){c.keyCode===b.ENTER&&d(a,c)})};return{setup:e}}),g("71",["1","2y","1y","42","43"],function(a,b,c,d,e){var f=function(a,b){return j(a)&&c.isText(b.container())},g=function(a,b){var c=b.container(),d=b.offset();c.insertData(d,"\xa0"),a.selection.setCursorLocation(c,d+1)},h=function(a,b,c){return!!f(c,b)&&(g(a,b),!0)},i=function(c){var f=a.curry(e.isInlineTarget,c),g=b.fromRangeStart(c.selection.getRng()),i=d.readLocation(f,c.getBody(),g);return i.map(a.curry(h,c,g)).getOr(!1)},j=function(b){return b.fold(a.constant(!1),a.constant(!0),a.constant(!0),a.constant(!1))},k=function(a){return!!a.selection.isCollapsed()&&i(a)};return{insertAtSelection:k}}),g("6p",["71","6y","1g"],function(a,b,c){var d=function(d,e){b.execute([{keyCode:c.SPACEBAR,action:b.action(a.insertAtSelection,d)}],e).each(function(a){e.preventDefault()})},e=function(a){a.on("keydown",function(b){b.isDefaultPrevented()===!1&&d(a,b)})};return{setup:e}}),g("6c",["6m","5i","6n","6o","6p"],function(a,b,c,d,e){var f=function(f){var g=b.setupSelectedState(f);a.setup(f,g),c.setup(f,g),d.setup(f),e.setup(f)};return{setup:f}}),g("6d",["b","2s","15"],function(a,b,c){return function(d){var e,f=[],g=function(a){var b,c;if(c=d.$(a).parentsUntil(d.getBody()).add(a),c.length===f.length){for(b=c.length;b>=0&&c[b]===f[b];b--);if(b===-1)return f=c,!0}return f=c,!1};"onselectionchange"in d.getDoc()||d.on("NodeChange Click MouseUp KeyUp Focus",function(a){var c,f;c=d.selection.getRng(),f={startContainer:c.startContainer,startOffset:c.startOffset,endContainer:c.endContainer,endOffset:c.endOffset},"nodechange"!=a.type&&b.isEq(f,e)||d.fire("SelectionChange"),e=f}),d.on("contextmenu",function(){d.fire("SelectionChange")}),d.on("SelectionChange",function(){var b=d.selection.getStart(!0);!b||!a.range&&d.selection.isCollapsed()||!g(b)&&d.dom.isChildOf(b,d.getBody())&&d.nodeChanged({selectionChange:!0})}),d.on("MouseUp",function(a){a.isDefaultPrevented()||("IMG"==d.selection.getNode().nodeName?c.setEditorTimeout(d,function(){d.nodeChanged()}):d.nodeChanged())}),this.nodeChanged=function(a){var b,c,e,f=d.selection;d.initialized&&f&&!d.settings.disable_nodechange&&!d.readonly&&(e=d.getBody(),b=f.getStart(!0)||e,b.ownerDocument==d.getDoc()&&d.dom.isChildOf(b,e)||(b=e),c=[],d.dom.getParent(b,function(a){return a===e||void c.push(a)}),a=a||{},a.element=b,a.parents=c,d.fire("NodeChange",a))}}}),g("72",[],function(){var a=function(a){var b,c,d,e;return e=a.getBoundingClientRect(),b=a.ownerDocument,c=b.documentElement,d=b.defaultView,{top:e.top+d.pageYOffset-c.clientTop,left:e.left+d.pageXOffset-c.clientLeft}},b=function(b){return b.inline?a(b.getBody()):{left:0,top:0}},c=function(a){var b=a.getBody();return a.inline?{left:b.scrollLeft,top:b.scrollTop}:{left:0,top:0}},d=function(a){var b=a.getBody(),c=a.getDoc().documentElement,d={left:b.scrollLeft,top:b.scrollTop},e={left:b.scrollLeft||c.scrollLeft,top:b.scrollTop||c.scrollTop};return a.inline?d:e},e=function(b,c){if(c.target.ownerDocument!==b.getDoc()){var e=a(b.getContentAreaContainer()),f=d(b);return{left:c.pageX-e.left+f.left,top:c.pageY-e.top+f.top}}return{left:c.pageX,top:c.pageY}},f=function(a,b,c){return{pageX:c.left-a.left+b.left,pageY:c.top-a.top+b.top}},g=function(a,d){return f(b(a),c(a),e(a,d))};return{calc:g}}),g("6q",["1j","l","72","1y","1r","15","3p"],function(a,b,c,d,e,f,g){var h=d.isContentEditableFalse,i=d.isContentEditableTrue,j=function(a,b){return h(b)&&b!==a},k=function(a,b,c){return b!==c&&!a.dom.isChildOf(b,c)&&!h(b)},l=function(a){var b=a.cloneNode(!0);return b.removeAttribute("data-mce-selected"),b},m=function(a,b,c,d){var e=b.cloneNode(!0);a.dom.setStyles(e,{width:c,height:d}),a.dom.setAttrib(e,"data-mce-selected",null);var f=a.dom.create("div",{"class":"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return a.dom.setStyles(f,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:c,height:d}),a.dom.setStyles(e,{margin:0,boxSizing:"border-box"}),f.appendChild(e),f},n=function(a,b){a.parentNode!==b&&b.appendChild(a)},o=function(a,b,c,d,e,f){var g=0,h=0;a.style.left=b.pageX+"px",a.style.top=b.pageY+"px",b.pageX+c>e&&(g=b.pageX+c-e),b.pageY+d>f&&(h=b.pageY+d-f),a.style.width=c-g+"px",a.style.height=d-h+"px"},p=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)},q=function(a){return 0===a.button},r=function(a){return a.element},s=function(a,b){return{pageX:b.pageX-a.relX,pageY:b.pageY+5}},t=function(a,b){return function(c){if(q(c)){var d=e.find(b.dom.getParents(c.target),g.or(h,i));if(j(b.getBody(),d)){var f=b.dom.getPos(d),k=b.getBody(),l=b.getDoc().documentElement;a.element=d,a.screenX=c.screenX,a.screenY=c.screenY,a.maxX=(b.inline?k.scrollWidth:l.offsetWidth)-2,a.maxY=(b.inline?k.scrollHeight:l.offsetHeight)-2,a.relX=c.pageX-f.x,a.relY=c.pageY-f.y,a.width=d.offsetWidth,a.height=d.offsetHeight,a.ghost=m(b,d,a.width,a.height)}}}},u=function(a,b){var d=f.throttle(function(a,c){b._selectionOverrides.hideFakeCaret(),b.selection.placeCaretAt(a,c)},0);return function(e){var f=Math.max(Math.abs(e.screenX-a.screenX),Math.abs(e.screenY-a.screenY));if(r(a)&&!a.dragging&&f>10){var g=b.fire("dragstart",{target:a.element});if(g.isDefaultPrevented())return;a.dragging=!0,b.focus()}if(a.dragging){var h=s(a,c.calc(b,e));n(a.ghost,b.getBody()),o(a.ghost,h,a.width,a.height,a.maxX,a.maxY),d(e.clientX,e.clientY)}}},v=function(a){var b=a.getSel().getRangeAt(0),c=b.startContainer;return 3===c.nodeType?c.parentNode:c},w=function(a,b){return function(c){if(a.dragging&&k(b,v(b.selection),a.element)){var d=l(a.element),e=b.fire("drop",{targetClone:d,clientX:c.clientX,clientY:c.clientY});e.isDefaultPrevented()||(d=e.targetClone,b.undoManager.transact(function(){p(a.element),b.insertContent(b.dom.getOuterHTML(d)),b._selectionOverrides.hideFakeCaret()}))}y(a)}},x=function(a,b){return function(){y(a),a.dragging&&b.fire("dragend")}},y=function(a){a.dragging=!1,a.element=null,p(a.ghost)},z=function(c){var d,e,f,g,h,i,j={};d=b.DOM,i=a,e=t(j,c),f=u(j,c),g=w(j,c),h=x(j,c),c.on("mousedown",e),c.on("mousemove",f),c.on("mouseup",g),d.bind(i,"mousemove",f),d.bind(i,"mouseup",h),c.on("remove",function(){d.unbind(i,"mousemove",f),d.unbind(i,"mouseup",h)})},A=function(a){a.on("drop",function(b){var c="undefined"!=typeof b.clientX?a.getDoc().elementFromPoint(b.clientX,b.clientY):null;(h(c)||h(a.dom.getContentEditableParent(c)))&&b.preventDefault()})},B=function(a){z(a),A(a)};return{init:B}}),g("6r",["1n","2x","67","m","1y","3n","15"],function(a,b,c,d,e,f,g){var h=e.isContentEditableFalse,i=function(a){return a&&/^(TD|TH)$/i.test(a.nodeName)};return function(e,j){var k,l,m=null,n=function(a,b){var c,d,g,h,i,j=f.collapse(a.getBoundingClientRect(),b);return"BODY"==e.tagName?(c=e.ownerDocument.documentElement,d=e.scrollLeft||c.scrollLeft,g=e.scrollTop||c.scrollTop):(i=e.getBoundingClientRect(),d=e.scrollLeft-i.left,g=e.scrollTop-i.top),j.left+=d,j.right+=d,j.top+=g,j.bottom+=g,j.width=1,h=a.offsetWidth-a.clientWidth,h>0&&(b&&(h*=-1),j.left+=h,j.right+=h),j},o=function(){var a,c,f,g,h;for(a=d("*[contentEditable=false]",e),g=0;g<a.length;g++)c=a[g],f=c.previousSibling,b.endsWithCaretContainer(f)&&(h=f.data,1==h.length?f.parentNode.removeChild(f):f.deleteData(h.length-1,1)),f=c.nextSibling,b.startsWithCaretContainer(f)&&(h=f.data,1==h.length?f.parentNode.removeChild(f):f.deleteData(0,1));return null},p=function(a,c){var f,g;return q(),i(c)?null:j(c)?(l=b.insertBlock("p",c,a),f=n(c,a),d(l).css("top",f.top),m=d('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(f).appendTo(e),a&&m.addClass("mce-visual-caret-before"),s(),g=c.ownerDocument.createRange(),g.setStart(l,0),g.setEnd(l,0),g):(l=b.insertInline(c,a),g=c.ownerDocument.createRange(),h(l.nextSibling)?(g.setStart(l,0),g.setEnd(l,0)):(g.setStart(l,1),g.setEnd(l,1)),g)},q=function(){o(),l&&(c.remove(l),l=null),m&&(m.remove(),m=null),a(k)},r=function(){return e.ownerDocument.activeElement===e},s=function(){k=g.setInterval(function(){r()?d("div.mce-visual-caret",e).toggleClass("mce-visual-caret-hidden"):d("div.mce-visual-caret",e).addClass("mce-visual-caret-hidden")},500)},t=function(){g.clearInterval(k)},u=function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"};return{show:p,hide:q,getCss:u,destroy:t}}}),g("5r",["1o","1q"],function(a,b){var c=function(c,d){var e=null,f=null,g=function(){null!==e&&(a(e),e=null,f=null)},h=function(){f=arguments,null===e&&(e=b(function(){c.apply(null,f),e=null,f=null},d))};return{cancel:g,throttle:h}},d=function(c,d){var e=null,f=function(){null!==e&&(a(e),e=null)},g=function(){var a=arguments;null===e&&(e=b(function(){c.apply(null,a),e=null,a=null},d))};return{cancel:f,throttle:g}},e=function(c,d){var e=null,f=function(){null!==e&&(a(e),e=null)},g=function(){var f=arguments;null!==e&&a(e),e=b(function(){c.apply(null,f),e=null,f=null},d)};return{cancel:f,throttle:g}};return{adaptable:c,first:d,last:e}}),g("6t",["5r","6u"],function(a,b){var c=function(c){var d=a.first(function(){if(!c.removed){var a=b.renderRangeCaret(c,c.selection.getRng());c.selection.setRng(a)}},0);c.on("focus",function(){d.throttle()}),c.on("blur",function(){d.cancel()})};return{setup:c}}),g("6e",["1i","45","1v","46","56","47","6q","2n","b","2x","2y","53","3q","6r","6s","3k","1y","31","6t","6u","1g"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=q.isContentEditableTrue,w=q.isContentEditableFalse,x=l.isAfterContentEditableFalse,y=l.isBeforeContentEditableFalse,z=function(q){var z,A=function(a){return q.dom.isBlock(a)},B=q.getBody(),C=new n(q.getBody(),A),D="sel-"+q.dom.uniqueId(),E=function(a){return q.dom.hasClass(a,"mce-offscreen-selection")},F=function(){var a=q.dom.get(D);return a?a.getElementsByTagName("*")[0]:a},G=function(a){a&&q.selection.setRng(a)},H=function(){return q.selection.getRng()},I=function(a,b){q.selection.scrollIntoView(a,b)},J=function(a,b,c){var d;return d=q.fire("ShowCaret",{target:b,direction:a,before:c}),d.isDefaultPrevented()?null:(I(b,a===-1),C.show(c,b))},K=function(a,b){return b=l.normalizeRange(a,B,b),a==-1?k.fromRangeStart(b):k.fromRangeEnd(b)},L=function(a){a.hasAttribute("data-mce-caret")&&(j.showCaretContainerBlock(a),G(H()),I(a[0]))},M=function(){var a=function(a){for(var b=q.getBody();a&&a!=b;){if(v(a)||w(a))return a;a=a.parentNode}return null};q.on("mouseup",function(a){var b=H();b.collapsed&&h.isXYInContentArea(q,a.clientX,a.clientY)&&G(t.renderCaretAtRange(q,b))}),q.on("click",function(b){var c;c=a(b.target),c&&(w(c)&&(b.preventDefault(),q.focus()),v(c)&&q.dom.isChildOf(c,q.selection.getNode())&&R())}),q.on("blur NewBlock",function(){R()});var b=function(b){var c=!1;b.on("touchstart",function(){c=!1}),b.on("touchmove",function(){c=!0}),b.on("touchend",function(d){var e=a(d.target);w(e)&&(c||(d.preventDefault(),Q(t.selectNode(b,e))))})},d=function(a){var b=new m(a);if(!a.firstChild)return!1;var c=k.before(a.firstChild),d=b.next(c);return d&&!y(d)&&!x(d)},e=function(a,b){var c=q.dom.getParent(a,q.dom.isBlock),d=q.dom.getParent(b,q.dom.isBlock);return c===d},f=function(a,b){var c=q.dom.getParent(a,q.dom.isBlock),f=q.dom.getParent(b,q.dom.isBlock);return c&&!e(c,f)&&d(c)};b(q),q.on("mousedown",function(b){var d;if(h.isXYInContentArea(q,b.clientX,b.clientY)!==!1)if(d=a(b.target))w(d)?(b.preventDefault(),Q(t.selectNode(q,d))):(R(),v(d)&&b.shiftKey||r.isXYWithinRange(b.clientX,b.clientY,q.selection.getRng())||(p.isVoid(c.fromDom(b.target))?q.selection.select(b.target):q.selection.placeCaretAt(b.clientX,b.clientY)));else{R(),T();var e=o.closestCaret(B,b.clientX,b.clientY);e&&(f(b.target,e.node)||(b.preventDefault(),q.getBody().focus(),G(J(1,e.node,e.before))))}}),q.on("keypress",function(a){if(!u.modifierPressed(a))switch(a.keyCode){default:w(q.selection.getNode())&&a.preventDefault()}}),q.on("getSelectionRange",function(a){var b=a.range;if(z){if(!z.parentNode)return void(z=null);b=b.cloneRange(),b.selectNode(z),a.range=b}}),q.on("setSelectionRange",function(a){var b;b=Q(a.range,a.forward),b&&(a.range=b)}),q.on("AfterSetSelectionRange",function(a){var b=a.range;P(b)||T(),E(b.startContainer.parentNode)||R()}),q.on("copy",function(a){var b=a.clipboardData;if(!a.isDefaultPrevented()&&a.clipboardData&&!i.ie){var c=F();c&&(a.preventDefault(),b.clearData(),b.setData("text/html",c.outerHTML),b.setData("text/plain",c.outerText))}}),g.init(q),s.setup(q)},N=function(){var a=q.contentStyles,b=".mce-content-body";a.push(C.getCss()),a.push(b+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+b+" *[contentEditable=false] {cursor: default;}"+b+" *[contentEditable=true] {cursor: text;}")},O=function(a){return j.isCaretContainer(a)||j.startsWithCaretContainer(a)||j.endsWithCaretContainer(a)},P=function(a){return O(a.startContainer)||O(a.endContainer)},Q=function(b,g){var h,j,k,l,m,n,o,p,r,s,t=q.$,u=q.dom;if(!b)return null;if(b.collapsed){if(!P(b))if(g===!1){if(p=K(-1,b),w(p.getNode(!0)))return J(-1,p.getNode(!0),!1);if(w(p.getNode()))return J(-1,p.getNode(),!p.isAtEnd())}else{if(p=K(1,b),w(p.getNode()))return J(1,p.getNode(),!p.isAtEnd());if(w(p.getNode(!0)))return J(1,p.getNode(!0),!1)}return null}return l=b.startContainer,m=b.startOffset,n=b.endOffset,3==l.nodeType&&0==m&&w(l.parentNode)&&(l=l.parentNode,m=u.nodeIndex(l),l=l.parentNode),1!=l.nodeType?null:(n==m+1&&(h=l.childNodes[m]),w(h)?(r=s=h.cloneNode(!0),o=q.fire("ObjectSelected",{target:h,targetClone:r}),o.isDefaultPrevented()?null:(j=f.descendant(c.fromDom(q.getBody()),"#"+D).fold(function(){return t([])},function(a){return t([a.dom()])}),r=o.targetClone,0===j.length&&(j=t('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",D),j.appendTo(q.getBody())),b=q.dom.createRng(),r===s&&i.ie?(j.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(r),b.setStartAfter(j[0].firstChild.firstChild),b.setEndAfter(r)):(j.empty().append("\xa0").append(r).append("\xa0"),b.setStart(j[0].firstChild,1),b.setEnd(j[0].lastChild,0)),j.css({top:u.getPos(h,q.getBody()).y}),j[0].focus(),k=q.selection.getSel(),k.removeAllRanges(),k.addRange(b),a.each(e.descendants(c.fromDom(q.getBody()),"*[data-mce-selected]"),function(a){d.remove(a,"data-mce-selected")}),h.setAttribute("data-mce-selected",1),z=h,T(),b)):null)},R=function(){z&&(z.removeAttribute("data-mce-selected"),f.descendant(c.fromDom(q.getBody()),"#"+D).each(b.remove),z=null)},S=function(){C.destroy(),z=null},T=function(){C.hide()};return i.ceFalse&&(M(),N()),{showCaret:J,showBlockCaretContainer:L,hideFakeCaret:T,destroy:S}};return z}),g("5s",[],function(){var a=0,b=1,c=2,d=function(d,e){var f=d.length+e.length+2,g=new Array(f),h=new Array(f),i=function(a,b,c){return{start:a,end:b,diag:c}},j=function(f,g,h,i,k){var m=l(f,g,h,i);if(null===m||m.start===g&&m.diag===g-i||m.end===f&&m.diag===f-h)for(var n=f,o=h;n<g||o<i;)n<g&&o<i&&d[n]===e[o]?(k.push([a,d[n]]),++n,++o):g-f>i-h?(k.push([c,d[n]]),++n):(k.push([b,e[o]]),++o);else{j(f,m.start,h,m.start-m.diag,k);for(var p=m.start;p<m.end;++p)k.push([a,d[p]]);j(m.end,g,m.end-m.diag,i,k)}},k=function(a,b,c,f){for(var g=a;g-b<f&&g<c&&d[g]===e[g-b];)++g;return i(a,g,b)},l=function(a,b,c,f){var i=b-a,j=f-c;if(0===i||0===j)return null;var l=i-j,m=j+i,n=(m%2===0?m:m+1)/2;g[1+n]=a,h[1+n]=b+1;for(var o=0;o<=n;++o){for(var p=-o;p<=o;p+=2){var q=p+n;p===-o||p!=o&&g[q-1]<g[q+1]?g[q]=g[q+1]:g[q]=g[q-1]+1;for(var r=g[q],s=r-a+c-p;r<b&&s<f&&d[r]===e[s];)g[q]=++r,++s;if(l%2!=0&&l-o<=p&&p<=l+o&&h[q-l]<=g[q])return k(h[q-l],p+a-c,b,f)}for(p=l-o;p<=l+o;p+=2){for(q=p+n-l,p===l-o||p!=l+o&&h[q+1]<=h[q-1]?h[q]=h[q+1]-1:h[q]=h[q-1],r=h[q]-1,s=r-a+c-p;r>=a&&s>=c&&d[r]===e[s];)h[q]=r--,s--;if(l%2===0&&-o<=p&&p<=o&&h[q]<=g[q+l])return k(h[q],p+a-c,b,f)}}},m=[];return j(0,d.length,0,e.length,m),m};return{KEEP:a,DELETE:c,INSERT:b,diff:d}}),g("4l",["1j","v","5s","1r"],function(a,b,c,d){var e=function(a){return 1===a.nodeType?a.outerHTML:3===a.nodeType?b.encodeRaw(a.data,!1):8===a.nodeType?"<!--"+a.data+"-->":""},f=function(b){var c,d,e;for(e=a.createElement("div"),c=a.createDocumentFragment(),b&&(e.innerHTML=b);d=e.firstChild;)c.appendChild(d);return c},g=function(a,b,c){var d=f(b);if(a.hasChildNodes()&&c<a.childNodes.length){var e=a.childNodes[c];e.parentNode.insertBefore(d,e)}else a.appendChild(d)},h=function(a,b){if(a.hasChildNodes()&&b<a.childNodes.length){var c=a.childNodes[b];c.parentNode.removeChild(c)}},i=function(a,b){var e=0;d.each(a,function(a){a[0]===c.KEEP?e++:a[0]===c.INSERT?(g(b,a[1],e),e++):a[0]===c.DELETE&&h(b,e)})},j=function(a){return d.filter(d.map(a.childNodes,e),function(a){return a.length>0})},k=function(a,b){var f=d.map(b.childNodes,e);return i(c.diff(f,a),b),b};return{read:j,write:k}}),g("2b",["1i","4l"],function(a,b){var c=function(a){return a.indexOf("</iframe>")!==-1},d=function(a){return{type:"fragmented",fragments:a,content:"",bookmark:null,beforeBookmark:null}},e=function(a){return{type:"complete",fragments:null,content:a,bookmark:null,beforeBookmark:null}},f=function(f){var g,h,i;return g=b.read(f.getBody()),i=a.bind(g,function(a){var b=f.serializer.trimContent(a);return b.length>0?[b]:[]}),h=i.join(""),c(h)?d(i):e(h)},g=function(a,c,d){"fragmented"===c.type?b.write(c.fragments,a.getBody()):a.setContent(c.content,{format:"raw"}),a.selection.moveToBookmark(d?c.beforeBookmark:c.bookmark)},h=function(a){return"fragmented"===a.type?a.fragments.join(""):a.content},i=function(a,b){return!!a&&!!b&&h(a)===h(b)};return{createFragmentedLevel:d,createCompleteLevel:e,createFromEditor:f,applyToEditor:g,isEq:i}}),g("d",["1g","1e","2b"],function(a,b,c){return function(a){var d,e,f=this,g=0,h=[],i=0,j=function(){return 0===i},k=function(a){j()&&(f.typing=a)},l=function(b){a.setDirty(b)},m=function(a){k(!1),f.add({},a)},n=function(){f.typing&&(k(!1),f.add())};return a.on("init",function(){f.add()}),a.on("BeforeExecCommand",function(a){var b=a.command;"Undo"!==b&&"Redo"!==b&&"mceRepaint"!==b&&(n(),f.beforeChange())}),a.on("ExecCommand",function(a){var b=a.command;"Undo"!==b&&"Redo"!==b&&"mceRepaint"!==b&&m(a)}),a.on("ObjectResizeStart Cut",function(){f.beforeChange()}),a.on("SaveContent ObjectResized blur",m),a.on("DragEnd",m),a.on("KeyUp",function(b){var d=b.keyCode;b.isDefaultPrevented()||((d>=33&&d<=36||d>=37&&d<=40||45===d||b.ctrlKey)&&(m(),a.nodeChanged()),46!==d&&8!==d||a.nodeChanged(),e&&f.typing&&c.isEq(c.createFromEditor(a),h[0])===!1&&(a.isDirty()===!1&&(l(!0),a.fire("change",{level:h[0],lastLevel:null})),a.fire("TypingUndo"),e=!1,a.nodeChanged()))}),a.on("KeyDown",function(a){var b=a.keyCode;if(!a.isDefaultPrevented()){if(b>=33&&b<=36||b>=37&&b<=40||45===b)return void(f.typing&&m(a));var c=a.ctrlKey&&!a.altKey||a.metaKey;!(b<16||b>20)||224===b||91===b||f.typing||c||(f.beforeChange(),k(!0),f.add({},a),e=!0)}}),a.on("MouseDown",function(a){f.typing&&m(a)}),a.addShortcut("meta+z","","Undo"),a.addShortcut("meta+y,meta+shift+z","","Redo"),a.on("AddUndo Undo Redo ClearUndos",function(b){b.isDefaultPrevented()||a.nodeChanged()}),f={data:h,typing:!1,beforeChange:function(){j()&&(d=a.selection.getBookmark(2,!0))},add:function(e,f){var i,k,m,n=a.settings;if(m=c.createFromEditor(a),e=e||{},e=b.extend(e,m),j()===!1||a.removed)return null;if(k=h[g],a.fire("BeforeAddUndo",{level:e,lastLevel:k,originalEvent:f}).isDefaultPrevented())return null;if(k&&c.isEq(k,e))return null;if(h[g]&&(h[g].beforeBookmark=d),n.custom_undo_redo_levels&&h.length>n.custom_undo_redo_levels){for(i=0;i<h.length-1;i++)h[i]=h[i+1];h.length--,g=h.length}e.bookmark=a.selection.getBookmark(2,!0),g<h.length-1&&(h.length=g+1),h.push(e),g=h.length-1;var o={level:e,lastLevel:k,originalEvent:f};return a.fire("AddUndo",o),
g>0&&(l(!0),a.fire("change",o)),e},undo:function(){var b;return f.typing&&(f.add(),f.typing=!1,k(!1)),g>0&&(b=h[--g],c.applyToEditor(a,b,!0),l(!0),a.fire("undo",{level:b})),b},redo:function(){var b;return g<h.length-1&&(b=h[++g],c.applyToEditor(a,b,!1),l(!0),a.fire("redo",{level:b})),b},clear:function(){h=[],g=0,f.typing=!1,f.data=h,a.fire("ClearUndos")},hasUndo:function(){return g>0||f.typing&&h[0]&&!c.isEq(c.createFromEditor(a),h[0])},hasRedo:function(){return g<h.length-1&&!f.typing},transact:function(a){return n(),f.beforeChange(),f.ignore(a),f.add()},ignore:function(a){try{i++,a()}finally{i--}},extra:function(b,d){var e,i;f.transact(b)&&(i=h[g].bookmark,e=h[g-1],c.applyToEditor(a,e,!0),f.transact(d)&&(h[g-1].beforeBookmark=i))}}}}),g("6f",["1j","2","b","2x","2q","15","1e","1g"],function(a,b,c,d,e,f,g,h){return function(i){var j=g.each,k=h.BACKSPACE,l=h.DELETE,m=i.dom,n=i.selection,o=i.settings,p=i.parser,q=c.gecko,r=c.ie,s=c.webkit,t="data:text/mce-internal,",u=r?"Text":"URL",v=function(a,b){try{i.getDoc().execCommand(a,!1,b)}catch(a){}},w=function(a){return a.isDefaultPrevented()},x=function(a){var b,c;a.dataTransfer&&(i.selection.isCollapsed()&&"IMG"==a.target.tagName&&n.select(a.target),b=i.selection.getContent(),b.length>0&&(c=t+escape(i.id)+","+escape(b),a.dataTransfer.setData(u,c)))},y=function(a){var b;return a.dataTransfer&&(b=a.dataTransfer.getData(u),b&&b.indexOf(t)>=0)?(b=b.substr(t.length).split(","),{id:unescape(b[0]),html:unescape(b[1])}):null},z=function(a,b){i.queryCommandSupported("mceInsertClipboardContent")?i.execCommand("mceInsertClipboardContent",!1,{content:a,internal:b}):i.execCommand("mceInsertContent",!1,a)},A=function(){var a=function(a){var b=m.create("body"),c=a.cloneContents();return b.appendChild(c),n.serializer.serialize(b,{format:"html"})},b=function(b){var c=a(b),d=m.createRng();d.selectNode(i.getBody());var e=a(d);return c===e};i.on("keydown",function(a){var c,d,e=a.keyCode;if(!w(a)&&(e==l||e==k)){if(c=i.selection.isCollapsed(),d=i.getBody(),c&&!m.isEmpty(d))return;if(!c&&!b(i.selection.getRng()))return;a.preventDefault(),i.setContent(""),d.firstChild&&m.isBlock(d.firstChild)?i.selection.setCursorLocation(d.firstChild,0):i.selection.setCursorLocation(d,0),i.nodeChanged()}})},B=function(){i.shortcuts.add("meta+a",null,"SelectAll")},C=function(){i.settings.content_editable||m.bind(i.getDoc(),"mousedown mouseup",function(a){var b;if(a.target==i.getDoc().documentElement)if(b=n.getRng(),i.getBody().focus(),"mousedown"==a.type){if(d.isCaretContainer(b.startContainer))return;n.placeCaretAt(a.clientX,a.clientY)}else n.setRng(b)})},D=function(){i.on("keydown",function(a){if(!w(a)&&a.keyCode===k){if(!i.getBody().getElementsByTagName("hr").length)return;if(n.isCollapsed()&&0===n.getRng(!0).startOffset){var b=n.getNode(),c=b.previousSibling;if("HR"==b.nodeName)return m.remove(b),void a.preventDefault();c&&c.nodeName&&"hr"===c.nodeName.toLowerCase()&&(m.remove(c),a.preventDefault())}}})},E=function(){b.Range.prototype.getClientRects||i.on("mousedown",function(a){if(!w(a)&&"HTML"===a.target.nodeName){var b=i.getBody();b.blur(),f.setEditorTimeout(i,function(){b.focus()})}})},F=function(){i.on("click",function(a){var b=a.target;/^(IMG|HR)$/.test(b.nodeName)&&"false"!==m.getContentEditableParent(b)&&(a.preventDefault(),i.selection.select(b),i.nodeChanged()),"A"==b.nodeName&&m.hasClass(b,"mce-item-anchor")&&(a.preventDefault(),n.select(b))})},G=function(){var a=function(){var a=m.getAttribs(n.getStart().cloneNode(!1));return function(){var b=n.getStart();b!==i.getBody()&&(m.setAttrib(b,"style",null),j(a,function(a){b.setAttributeNode(a.cloneNode(!0))}))}},b=function(){return!n.isCollapsed()&&m.getParent(n.getStart(),m.isBlock)!=m.getParent(n.getEnd(),m.isBlock)};i.on("keypress",function(c){var d;if(!w(c)&&(8==c.keyCode||46==c.keyCode)&&b())return d=a(),i.getDoc().execCommand("delete",!1,null),d(),c.preventDefault(),!1}),m.bind(i.getDoc(),"cut",function(c){var d;!w(c)&&b()&&(d=a(),f.setEditorTimeout(i,function(){d()}))})},H=function(){i.on("keydown",function(a){if(!w(a)&&a.keyCode===k&&n.isCollapsed()&&0===n.getRng(!0).startOffset){var b=n.getNode().previousSibling;if(b&&b.nodeName&&"table"===b.nodeName.toLowerCase())return a.preventDefault(),!1}})},I=function(){i.on("keydown",function(a){var b,c,d,e,f;if(!w(a)&&a.keyCode==h.BACKSPACE&&(b=n.getRng(),c=b.startContainer,d=b.startOffset,e=m.getRoot(),f=c,b.collapsed&&0===d)){for(;f&&f.parentNode&&f.parentNode.firstChild==f&&f.parentNode!=e;)f=f.parentNode;"BLOCKQUOTE"===f.tagName&&(i.formatter.toggle("blockquote",null,f),b=m.createRng(),b.setStart(c,0),b.setEnd(c,0),n.setRng(b))}})},J=function(){var a=function(){W(),v("StyleWithCSS",!1),v("enableInlineTableEditing",!1),o.object_resizing||v("enableObjectResizing",!1)};o.readonly||i.on("BeforeExecCommand MouseDown",a)},K=function(){var a=function(){j(m.select("a"),function(a){var b=a.parentNode,c=m.getRoot();if(b.lastChild===a){for(;b&&!m.isBlock(b);){if(b.parentNode.lastChild!==b||b===c)return;b=b.parentNode}m.add(b,"br",{"data-mce-bogus":1})}})};i.on("SetContent ExecCommand",function(b){"setcontent"!=b.type&&"mceInsertLink"!==b.command||a()})},L=function(){o.forced_root_block&&i.on("init",function(){v("DefaultParagraphSeparator",o.forced_root_block)})},M=function(){i.on("keyup focusin mouseup",function(a){h.modifierPressed(a)||n.normalize()},!0)},N=function(){i.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")},O=function(){i.inline||i.on("keydown",function(){a.activeElement==a.body&&i.getWin().focus()})},P=function(){i.inline||(i.contentStyles.push("body {min-height: 150px}"),i.on("click",function(a){var b;if("HTML"==a.target.nodeName){if(c.ie>11)return void i.getBody().focus();b=i.selection.getRng(),i.getBody().focus(),i.selection.setRng(b),i.selection.normalize(),i.nodeChanged()}}))},Q=function(){c.mac&&i.on("keydown",function(a){!h.metaKeyPressed(a)||a.shiftKey||37!=a.keyCode&&39!=a.keyCode||(a.preventDefault(),i.selection.getSel().modify("move",37==a.keyCode?"backward":"forward","lineboundary"))})},R=function(){v("AutoUrlDetect",!1)},S=function(){i.on("click",function(a){var b=a.target;do if("A"===b.tagName)return void a.preventDefault();while(b=b.parentNode)}),i.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")},T=function(){i.on("init",function(){i.dom.bind(i.getBody(),"submit",function(a){a.preventDefault()})})},U=function(){p.addNodeFilter("br",function(a){for(var b=a.length;b--;)"Apple-interchange-newline"==a[b].attr("class")&&a[b].remove()})},V=function(){i.on("dragstart",function(a){x(a)}),i.on("drop",function(a){if(!w(a)){var b=y(a);if(b&&b.id!=i.id){a.preventDefault();var c=e.fromPoint(a.x,a.y,i.getDoc());n.setRng(c),z(b.html,!0)}}})},W=function(){},X=function(){var a;return!q||i.removed?0:(a=i.selection.getSel(),!a||!a.rangeCount||0===a.rangeCount)};return I(),A(),c.windowsPhone||M(),s&&(C(),F(),L(),T(),H(),U(),c.iOS?(O(),P(),S()):B()),c.ie>=11&&(P(),H()),c.ie&&(B(),R(),V()),q&&(D(),E(),G(),J(),K(),N(),Q(),H()),{refreshContentEditable:W,isHidden:X}}}),g("5p",["40","1v","46","1j","2","f","69","l","p","q","6a","28","6b","u","w","y","6c","6d","6e","d","15","6f","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=h.DOM,y=function(d,e){var f=b.fromDom(d.getDoc().head),g=b.fromTag("style");c.set(g,"type","text/css"),a.append(g,b.fromText(e)),a.append(f,g)},z=function(a){var b=new n(a.settings,a.schema);return b.addAttributeFilter("src,href,style,tabindex",function(b,c){for(var d,e,f,g=b.length,h=a.dom;g--;)if(d=b[g],e=d.attr(c),f="data-mce-"+c,!d.attributes.map[f]){if(0===e.indexOf("data:")||0===e.indexOf("blob:"))continue;"style"===c?(e=h.serializeStyle(h.parseStyle(e),d.name),e.length||(e=null),d.attr(f,e),d.attr(c,e)):"tabindex"===c?(d.attr(f,e),d.attr(c,null)):d.attr(f,a.convertURL(e,c,d.name))}}),b.addNodeFilter("script",function(a){for(var b,c,d=a.length;d--;)b=a[d],c=b.attr("type")||"no/type",0!==c.indexOf("mce-")&&b.attr("type","mce-"+c)}),b.addNodeFilter("#cdata",function(a){for(var b,c=a.length;c--;)b=a[c],b.type=8,b.name="#comment",b.value="[CDATA["+b.value+"]]"}),b.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(b){for(var c,d=b.length,e=a.schema.getNonEmptyElements();d--;)c=b[d],c.isEmpty(e)&&0===c.getAll("br").length&&(c.append(new o("br",1)).shortEnded=!0)}),b},A=function(a){a.settings.auto_focus&&u.setEditorTimeout(a,function(){var b;b=a.settings.auto_focus===!0?a:a.editorManager.get(a.settings.auto_focus),b.destroyed||b.focus()},100)},B=function(a){a.bindPendingEventDelegates(),a.initialized=!0,a.fire("init"),a.focus(!0),a.nodeChanged({initial:!0}),a.execCallback("init_instance_callback",a),A(a)},C=function(a){return a.inline?x.styleSheetLoader:a.dom.styleSheetLoader},D=function(a,b){var c,l,n=a.settings,o=a.getElement(),u=a.getDoc();n.inline||(a.getElement().style.visibility=a.orgVisibility),b||n.content_editable||(u.open(),u.write(a.iframeHTML),u.close()),n.content_editable&&(a.on("remove",function(){var a=this.getBody();x.removeClass(a,"mce-content-body"),x.removeClass(a,"mce-edit-focus"),x.setAttrib(a,"contentEditable",null)}),x.addClass(o,"mce-content-body"),a.contentDocument=u=n.content_document||d,a.contentWindow=n.content_window||e,a.bodyElement=o,n.content_document=n.content_window=null,n.root_name=o.nodeName.toLowerCase()),c=a.getBody(),c.disabled=!0,a.readonly=n.readonly,a.readonly||(a.inline&&"static"===x.getStyle(c,"position",!0)&&(c.style.position="relative"),c.contentEditable=a.getParam("content_editable_state",!0)),c.disabled=!1,a.editorUpload=new k(a),a.schema=new p(n),a.dom=new h(u,{keep_values:!0,url_converter:a.convertURL,url_converter_scope:a,hex_colors:n.force_hex_style_colors,class_filter:n.class_filter,update_styles:!0,root_element:a.inline?a.getBody():null,collect:n.content_editable,schema:a.schema,onSetAttrib:function(b){a.fire("SetAttrib",b)}}),a.parser=z(a),a.serializer=new j(n,a),a.selection=new i(a.dom,a.getWin(),a.serializer,a),a.formatter=new f(a),a.undoManager=new t(a),a._nodeChangeDispatcher=new r(a),a._selectionOverrides=new s(a),g.setup(a),q.setup(a),m.setup(a),a.fire("PreInit"),n.browser_spellcheck||n.gecko_spellcheck||(u.body.spellcheck=!1,x.setAttrib(c,"spellcheck","false")),a.quirks=new v(a),a.fire("PostRender"),n.directionality&&(c.dir=n.directionality),n.nowrap&&(c.style.whiteSpace="nowrap"),n.protect&&a.on("BeforeSetContent",function(a){w.each(n.protect,function(b){a.content=a.content.replace(b,function(a){return"<!--mce:protected "+escape(a)+"-->"})})}),a.on("SetContent",function(){a.addVisual(a.getBody())}),n.padd_empty_editor&&a.on("PostProcess",function(a){a.content=a.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|<br \/>|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),a.load({initial:!0,format:"html"}),a.startContent=a.getContent({format:"raw"}),a.on("compositionstart compositionend",function(b){a.composing="compositionstart"===b.type}),a.contentStyles.length>0&&(l="",w.each(a.contentStyles,function(a){l+=a+"\r\n"}),a.dom.addStyle(l)),C(a).loadAll(a.contentCSS,function(b){B(a)},function(b){B(a)}),n.content_style&&y(a,n.content_style)};return{initContentBody:D}}),g("6g",[],function(){var a=function(a,b,c){var d=a.getParam(b,c);if(d.indexOf("=")!==-1){var e=a.getParam(b,"","hash");return e.hasOwnProperty(a.id)?e[a.id]:c}return d},b=function(a){return a.getParam("iframe_attrs",{})},c=function(a){return a.getParam("doctype","<!DOCTYPE html>")},d=function(a){return a.getParam("document_base_url","")},e=function(b){return a(b,"body_id","tinymce")},f=function(b){return a(b,"body_class","")},g=function(a){return a.getParam("content_security_policy","")};return{getIframeAttrs:b,getDocType:c,getDocumentBaseUrl:d,getBodyId:e,getBodyClass:f,getContentSecurityPolicy:g}}),g("5q",["1v","46","3f","1j","2","b","6g","l","5p","26"],function(a,b,c,d,e,f,g,h,i,j){var k=h.DOM,l=function(a,b){if(d.domain!==e.location.hostname&&f.ie&&f.ie<12){var c=j.uuid("mce");a[c]=function(){i.initContentBody(a)};var g='javascript:(function(){document.open();document.domain="'+d.domain+'";var ed = window.parent.tinymce.get("'+a.id+'");document.write(ed.iframeHTML);document.close();ed.'+c+"(true);})()";return k.setAttrib(b,"src",g),!0}return!1},m=function(a){var b="number"==typeof a?a+"px":a;return b?b:""},n=function(d,e,f,g){var h=a.fromTag("iframe");return b.setAll(h,g),b.setAll(h,{id:d+"_ifr",frameBorder:"0",allowTransparency:"true",title:e}),c.setAll(h,{width:"100%",height:m(f),display:"block"}),h},o=function(a){var b,c,d;return d=g.getDocType(a)+"<html><head>",g.getDocumentBaseUrl(a)!==a.documentBaseUrl&&(d+='<base href="'+a.documentBaseURI.getURI()+'" />'),d+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',b=g.getBodyId(a),c=g.getBodyClass(a),g.getContentSecurityPolicy(a)&&(d+='<meta http-equiv="Content-Security-Policy" content="'+g.getContentSecurityPolicy(a)+'" />'),d+='</head><body id="'+b+'" class="mce-content-body '+c+'" data-id="'+a.id+'"><br></body></html>'},p=function(a,b){var c=a.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),d=n(a.id,c,b.height,g.getIframeAttrs(a)).dom();d.onload=function(){d.onload=null,a.fire("load")};var e=l(a,d);return a.contentAreaContainer=b.iframeContainer,a.iframeElement=d,a.iframeHTML=o(a),k.add(b.iframeContainer,d),e},q=function(a,b){var c=p(a,b);b.editorContainer&&(k.get(b.editorContainer).style.display=a.orgDisplay,a.hidden=k.isHidden(b.editorContainer)),a.getElement().style.display="none",k.setAttrib(a.id,"aria-hidden",!0),c||i.initContentBody(a)};return{init:q}}),g("4h",["27","1j","2","4i","4j","l","5p","5q","1e"],function(a,b,c,d,e,f,g,h,i){var j=f.DOM,k=function(a,b,c){var e,f,g=d.get(c);if(e=d.urls[c]||a.documentBaseUrl.replace(/\/$/,""),c=i.trim(c),g&&i.inArray(b,c)===-1){if(i.each(d.dependencies(c),function(c){k(a,b,c)}),a.plugins[c])return;f=new g(a,e,a.$),a.plugins[c]=f,f.init&&(f.init(a,e),b.push(c))}},l=function(a){return a.replace(/^\-/,"")},m=function(a){var b=[];i.each(a.settings.plugins.split(/[ ,]/),function(c){k(a,b,l(c))})},n=function(b){var c,d=b.settings.theme;a.isString(d)?(b.settings.theme=l(d),c=e.get(d),b.theme=new c(b,e.urls[d]),b.theme.init&&b.theme.init(b,e.urls[d]||b.documentBaseUrl.replace(/\/$/,""),b.$)):b.theme={}},o=function(a){var b,c,d,e,f,g=a.settings,h=a.getElement();return b=g.width||j.getStyle(h,"width")||"100%",c=g.height||j.getStyle(h,"height")||h.offsetHeight,d=g.min_height||100,e=/^[0-9\.]+(|px)$/i,e.test(""+b)&&(b=Math.max(parseInt(b,10),100)),e.test(""+c)&&(c=Math.max(parseInt(c,10),d)),f=a.theme.renderUI({targetNode:h,width:b,height:c,deltaWidth:g.delta_width,deltaHeight:g.delta_height}),g.content_editable||(c=(f.iframeHeight||c)+("number"==typeof c?f.deltaHeight||0:""),c<d&&(c=d)),f.height=c,f},p=function(a){var b,c=a.getElement();return b=a.settings.theme(a,c),b.editorContainer.nodeType&&(b.editorContainer.id=b.editorContainer.id||a.id+"_parent"),b.iframeContainer&&b.iframeContainer.nodeType&&(b.iframeContainer.id=b.iframeContainer.id||a.id+"_iframecontainer"),b.height=b.iframeHeight?b.iframeHeight:c.offsetHeight,b},q=function(a){return{editorContainer:a,iframeContainer:a}},r=function(a){var b=j.create("div");return j.insertAfter(b,a),q(b)},s=function(a){var b=a.getElement();return a.inline?q(null):r(b)},t=function(b){var c=b.settings,d=b.getElement();return b.orgDisplay=d.style.display,a.isString(c.theme)?o(b):a.isFunction(c.theme)?p(b):s(b)},u=function(a){var b,c=a.settings,d=a.getElement();return a.rtl=c.rtl_ui||a.editorManager.i18n.rtl,a.editorManager.i18n.setCode(c.language),c.aria_label=c.aria_label||j.getAttrib(d,"aria-label",a.getLang("aria.rich_text_area")),a.fire("ScriptsLoaded"),n(a),m(a),b=t(a),a.editorContainer=b.editorContainer?b.editorContainer:null,c.content_css&&i.each(i.explode(c.content_css),function(b){a.contentCSS.push(a.documentBaseURI.toAbsolute(b))}),c.content_editable?g.initContentBody(a):h.init(a,b)};return{init:u}}),g("24",["27","2","g","h","l","n","o","b","28","4h","4i","4j","1e"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=e.DOM,o=function(a){return"-"===a.charAt(0)},p=function(a,b){var c=b.settings;c.language&&"en"!==c.language&&!c.language_url&&(c.language_url=b.editorManager.baseURL+"/langs/"+c.language+".js"),c.language_url&&!b.editorManager.i18n.data[c.language]&&a.add(c.language_url)},q=function(b,c,d,e){var f=c.settings,g=f.theme;if(a.isString(g)){if(!o(g)&&!l.urls.hasOwnProperty(g)){var h=f.theme_url;h?l.load(g,c.documentBaseURI.toAbsolute(h)):l.load(g,"themes/"+g+"/theme"+d+".js")}b.loadQueue(function(){l.waitFor(g,e)})}else e()},r=function(a,b){m.isArray(a.plugins)&&(a.plugins=a.plugins.join(" ")),m.each(a.external_plugins,function(b,c){k.load(c,b),a.plugins+=" "+c}),m.each(a.plugins.split(/[ ,]/),function(a){if(a=m.trim(a),a&&!k.urls[a])if(o(a)){a=a.substr(1,a.length);var c=k.dependencies(a);m.each(c,function(a){var c={prefix:"plugins/",resource:a,suffix:"/plugin"+b+".js"};a=k.createUrl(c,a),k.load(a.resource,a)})}else k.load(a,{prefix:"plugins/",resource:a,suffix:"/plugin"+b+".js"})})},s=function(a,b){var c=g.ScriptLoader;q(c,a,b,function(){p(c,a),r(a.settings,b),c.loadQueue(function(){a.removed||j.init(a)},a,function(b){i.pluginLoadError(a,b[0]),a.removed||j.init(a)})})},t=function(a){var e=a.settings,g=a.id,i=function(){n.unbind(b,"ready",i),a.render()};if(!f.Event.domLoaded)return void n.bind(b,"ready",i);if(a.getElement()&&h.contentEditable){e.inline?a.inline=!0:(a.orgVisibility=a.getElement().style.visibility,a.getElement().style.visibility="hidden");var j=a.getElement().form||n.getParent(g,"form");j&&(a.formElement=j,e.hidden_input&&!/TEXTAREA|INPUT/i.test(a.getElement().nodeName)&&(n.insertAfter(n.create("input",{type:"hidden",name:g}),g),a.hasHiddenInput=!0),a.formEventDelegate=function(b){a.fire(b.type,b)},n.bind(j,"submit reset",a.formEventDelegate),a.on("reset",function(){a.setContent(a.startContent,{format:"raw"})}),!e.submit_patch||j.submit.nodeType||j.submit.length||j._mceOldSubmit||(j._mceOldSubmit=j.submit,j.submit=function(){return a.editorManager.triggerSave(),a.setDirty(!1),j._mceOldSubmit(j)})),a.windowManager=new d(a),a.notificationManager=new c(a),"xml"===e.encoding&&a.on("GetContent",function(a){a.save&&(a.content=n.encode(a.content))}),e.add_form_submit_trigger&&a.on("submit",function(){a.initialized&&a.save()}),e.add_unload_trigger&&(a._beforeUnload=function(){!a.initialized||a.destroyed||a.isHidden()||a.save({format:"raw",no_events:!0,set_dirty:!1})},a.editorManager.on("BeforeUnload",a._beforeUnload)),a.editorManager.add(a),s(a,a.suffix)}};return{render:t}}),g("25",[],function(){var a=function(a,b,c){var d=a.sidebars?a.sidebars:[];d.push({name:b,settings:c}),a.sidebars=d};return{add:a}}),g("1f",["1j","1e"],function(a,b){var c=b.each,d=b.trim,e="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),f={ftp:21,http:80,https:443,mailto:25},g=function(b,f){var h,i,j=this;if(b=d(b),f=j.settings=f||{},h=f.base_uri,/^([\w\-]+):([^\/]{2})/i.test(b)||/^\s*#/.test(b))return void(j.source=b);var k=0===b.indexOf("//");0!==b.indexOf("/")||k||(b=(h?h.protocol||"http":"http")+"://mce_host"+b),/^[\w\-]*:?\/\//.test(b)||(i=f.base_uri?f.base_uri.path:new g(a.location.href).directory,""===f.base_uri.protocol?b="//mce_host"+j.toAbsPath(i,b):(b=/([^#?]*)([#?]?.*)/.exec(b),b=(h&&h.protocol||"http")+"://mce_host"+j.toAbsPath(i,b[1])+b[2])),b=b.replace(/@@/g,"(mce_at)"),b=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(b),c(e,function(a,c){var d=b[c];d&&(d=d.replace(/\(mce_at\)/g,"@@")),j[a]=d}),h&&(j.protocol||(j.protocol=h.protocol),j.userInfo||(j.userInfo=h.userInfo),j.port||"mce_host"!==j.host||(j.port=h.port),j.host&&"mce_host"!==j.host||(j.host=h.host),j.source=""),k&&(j.protocol="")};return g.prototype={setPath:function(a){var b=this;a=/^(.*?)\/?(\w+)?$/.exec(a),b.path=a[0],b.directory=a[1],b.file=a[2],b.source="",b.getURI()},toRelative:function(a){var b,c=this;if("./"===a)return a;if(a=new g(a,{base_uri:c}),"mce_host"!=a.host&&c.host!=a.host&&a.host||c.port!=a.port||c.protocol!=a.protocol&&""!==a.protocol)return a.getURI();var d=c.getURI(),e=a.getURI();return d==e||"/"==d.charAt(d.length-1)&&d.substr(0,d.length-1)==e?d:(b=c.toRelPath(c.path,a.path),a.query&&(b+="?"+a.query),a.anchor&&(b+="#"+a.anchor),b)},toAbsolute:function(a,b){return a=new g(a,{base_uri:this}),a.getURI(b&&this.isSameOrigin(a))},isSameOrigin:function(a){if(this.host==a.host&&this.protocol==a.protocol){if(this.port==a.port)return!0;var b=f[this.protocol];if(b&&(this.port||b)==(a.port||b))return!0}return!1},toRelPath:function(a,b){var c,d,e,f=0,g="";if(a=a.substring(0,a.lastIndexOf("/")),a=a.split("/"),c=b.split("/"),a.length>=c.length)for(d=0,e=a.length;d<e;d++)if(d>=c.length||a[d]!=c[d]){f=d+1;break}if(a.length<c.length)for(d=0,e=c.length;d<e;d++)if(d>=a.length||a[d]!=c[d]){f=d+1;break}if(1===f)return b;for(d=0,e=a.length-(f-1);d<e;d++)g+="../";for(d=f-1,e=c.length;d<e;d++)g+=d!=f-1?"/"+c[d]:c[d];return g},toAbsPath:function(a,b){var d,e,f,g=0,h=[];for(e=/\/$/.test(b)?"/":"",a=a.split("/"),b=b.split("/"),c(a,function(a){a&&h.push(a)}),a=h,d=b.length-1,h=[];d>=0;d--)0!==b[d].length&&"."!==b[d]&&(".."!==b[d]?g>0?g--:h.push(b[d]):g++);return d=a.length-g,f=d<=0?h.reverse().join("/"):a.slice(0,d).join("/")+"/"+h.reverse().join("/"),0!==f.indexOf("/")&&(f="/"+f),e&&f.lastIndexOf("/")!==f.length-1&&(f+=e),f},getURI:function(a){var b,c=this;return c.source&&!a||(b="",a||(b+=c.protocol?c.protocol+"://":"//",c.userInfo&&(b+=c.userInfo+"@"),c.host&&(b+=c.host),c.port&&(b+=":"+c.port)),c.path&&(b+=c.path),c.query&&(b+="?"+c.query),c.anchor&&(b+="#"+c.anchor),c.source=b),c.source}},g.parseDataUri=function(a){var b,c;return a=decodeURIComponent(a).split(","),c=/data:([^;]+)/.exec(a[0]),c&&(b=c[1]),{type:b,data:a[1]}},g.getDocumentBaseUrl=function(a){var b;return b=0!==a.protocol.indexOf("http")&&"file:"!==a.protocol?a.href:a.protocol+"//"+a.host+a.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(b)&&(b=b.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(b)||(b+="/")),b},g}),g("7",["6","8","a","21","b","22","c","l","m","23","z","24","25","1e","1f","26"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=h.DOM,r=n.extend,s=n.each,t=n.trim,u=n.resolve,v=e.ie,w=function(c,f,h){var j,k,l=this;j=l.documentBaseUrl=h.documentBaseURL,k=h.baseURI,f=d.getEditorSettings(l,c,j,h.defaultSettings,f),l.settings=f,a.language=f.language||"en",a.languageLoad=f.language_load,a.baseURL=h.baseURL,l.id=c,l.setDirty(!1),l.plugins={},l.documentBaseURI=new o(f.document_base_url,{base_uri:k}),l.baseURI=k,l.contentCSS=[],l.contentStyles=[],l.shortcuts=new g(l),l.loadedCSS={},l.editorCommands=new b(l),l.suffix=h.suffix,l.editorManager=h,l.inline=f.inline,l.buttons={},l.menuItems={},f.cache_suffix&&(e.cacheSuffix=f.cache_suffix.replace(/^[\?\&]+/,"")),f.override_viewport===!1&&(e.overrideViewPort=!1),h.fire("SetupEditor",l),l.execCallback("setup",l),l.$=i.overrideDefaults(function(){return{context:l.inline?l.getBody():l.getDoc(),element:l.getBody()}})};return w.prototype={render:function(){l.render(this)},focus:function(a){j.focus(this,a)},execCallback:function(a){var b,c=this,d=c.settings[a];if(d)return c.callbackLookup&&(b=c.callbackLookup[a])&&(d=b.func,b=b.scope),"string"==typeof d&&(b=d.replace(/\.\w+$/,""),b=b?u(b):0,d=u(d),c.callbackLookup=c.callbackLookup||{},c.callbackLookup[a]={func:d,scope:b}),d.apply(b||c,Array.prototype.slice.call(arguments,1))},translate:function(a){if(a&&n.is(a,"string")){var b=this.settings.language||"en",c=this.editorManager.i18n;a=c.data[b+"."+a]||a.replace(/\{\#([^\}]+)\}/g,function(a,d){return c.data[b+"."+d]||"{#"+d+"}"})}return this.editorManager.translate(a)},getLang:function(a,b){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+a]||(void 0!==b?b:"{#"+a+"}")},getParam:function(a,b,c){var d,e=a in this.settings?this.settings[a]:b;return"hash"===c?(d={},"string"==typeof e?s(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),function(a){a=a.split("="),a.length>1?d[t(a[0])]=t(a[1]):d[t(a[0])]=t(a)}):d=e,d):e},nodeChanged:function(a){this._nodeChangeDispatcher.nodeChanged(a)},addButton:function(a,b){var c=this;b.cmd&&(b.onclick=function(){c.execCommand(b.cmd)}),b.text||b.icon||(b.icon=a),c.buttons=c.buttons,b.tooltip=b.tooltip||b.title,c.buttons[a]=b},addSidebar:function(a,b){return m.add(this,a,b)},addMenuItem:function(a,b){var c=this;b.cmd&&(b.onclick=function(){c.execCommand(b.cmd)}),c.menuItems=c.menuItems,c.menuItems[a]=b},addContextToolbar:function(a,b){var c,d=this;d.contextToolbars=d.contextToolbars||[],"string"==typeof a&&(c=a,a=function(a){return d.dom.is(a,c)}),d.contextToolbars.push({id:p.uuid("mcet"),predicate:a,items:b})},addCommand:function(a,b,c){this.editorCommands.addCommand(a,b,c)},addQueryStateHandler:function(a,b,c){this.editorCommands.addQueryStateHandler(a,b,c)},addQueryValueHandler:function(a,b,c){this.editorCommands.addQueryValueHandler(a,b,c)},addShortcut:function(a,b,c,d){this.shortcuts.add(a,b,c,d)},execCommand:function(a,b,c,d){return this.editorCommands.execCommand(a,b,c,d)},queryCommandState:function(a){return this.editorCommands.queryCommandState(a)},queryCommandValue:function(a){return this.editorCommands.queryCommandValue(a)},queryCommandSupported:function(a){return this.editorCommands.queryCommandSupported(a)},show:function(){var a=this;a.hidden&&(a.hidden=!1,a.inline?a.getBody().contentEditable=!0:(q.show(a.getContainer()),q.hide(a.id)),a.load(),a.fire("show"))},hide:function(){var a=this,b=a.getDoc();a.hidden||(v&&b&&!a.inline&&b.execCommand("SelectAll"),a.save(),a.inline?(a.getBody().contentEditable=!1,a==a.editorManager.focusedEditor&&(a.editorManager.focusedEditor=null)):(q.hide(a.getContainer()),q.setStyle(a.id,"display",a.orgDisplay)),a.hidden=!0,a.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(a,b){this.fire("ProgressState",{state:a,time:b})},load:function(a){var b,c=this,d=c.getElement();return c.removed?"":d?(a=a||{},a.load=!0,b=c.setContent(void 0!==d.value?d.value:d.innerHTML,a),a.element=d,a.no_events||c.fire("LoadContent",a),a.element=d=null,b):void 0},save:function(a){var b,c,d=this,e=d.getElement();if(e&&d.initialized&&!d.removed)return a=a||{},a.save=!0,a.element=e,b=a.content=d.getContent(a),a.no_events||d.fire("SaveContent",a),"raw"==a.format&&d.fire("RawSaveContent",a),b=a.content,/TEXTAREA|INPUT/i.test(e.nodeName)?e.value=b:(d.inline||(e.innerHTML=b),(c=q.getParent(d.id,"form"))&&s(c.elements,function(a){if(a.name==d.id)return a.value=b,!1})),a.element=e=null,a.set_dirty!==!1&&d.setDirty(!1),b},setContent:function(a,b){var c,d,e=this,f=e.getBody();return b=b||{},b.format=b.format||"html",b.set=!0,b.content=a,b.no_events||e.fire("BeforeSetContent",b),a=b.content,0===a.length||/^\s+$/.test(a)?(d=v&&v<11?"":'<br data-mce-bogus="1">',"TABLE"==f.nodeName?a="<tr><td>"+d+"</td></tr>":/^(UL|OL)$/.test(f.nodeName)&&(a="<li>"+d+"</li>"),c=e.settings.forced_root_block,c&&e.schema.isValidChild(f.nodeName.toLowerCase(),c.toLowerCase())?(a=d,a=e.dom.createHTML(c,e.settings.forced_root_block_attrs,a)):v||a||(a='<br data-mce-bogus="1">'),e.dom.setHTML(f,a),e.fire("SetContent",b)):("raw"!==b.format&&(a=new k({validate:e.validate},e.schema).serialize(e.parser.parse(a,{isRootContent:!0,insert:!0}))),b.content=t(a),e.dom.setHTML(f,b.content),b.no_events||e.fire("SetContent",b)),b.content},getContent:function(a){var b,c=this,d=c.getBody();return c.removed?"":(a=a||{},a.format=a.format||"html",a.get=!0,a.getInner=!0,a.no_events||c.fire("BeforeGetContent",a),b="raw"==a.format?n.trim(c.serializer.getTrimmedContent()):"text"==a.format?d.innerText||d.textContent:c.serializer.serialize(d,a),"text"!=a.format?a.content=t(b):a.content=b,a.no_events||c.fire("GetContent",a),a.content)},insertContent:function(a,b){b&&(a=r({content:a},b)),this.execCommand("mceInsertContent",!1,a)},isDirty:function(){return!this.isNotDirty},setDirty:function(a){var b=!this.isNotDirty;this.isNotDirty=!a,a&&a!=b&&this.fire("dirty")},setMode:function(a){f.setMode(this,a)},getContainer:function(){var a=this;return a.container||(a.container=q.get(a.editorContainer||a.id+"_parent")),a.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=q.get(this.id)),this.targetElm},getWin:function(){var a,b=this;return b.contentWindow||(a=b.iframeElement,a&&(b.contentWindow=a.contentWindow)),b.contentWindow},getDoc:function(){var a,b=this;return b.contentDocument||(a=b.getWin(),a&&(b.contentDocument=a.document)),b.contentDocument},getBody:function(){var a=this.getDoc();return this.bodyElement||(a?a.body:null)},convertURL:function(a,b,c){var d=this,e=d.settings;return e.urlconverter_callback?d.execCallback("urlconverter_callback",a,c,!0,b):!e.convert_urls||c&&"LINK"==c.nodeName||0===a.indexOf("file:")||0===a.length?a:e.relative_urls?d.documentBaseURI.toRelative(a):a=d.documentBaseURI.toAbsolute(a,e.remove_script_host)},addVisual:function(a){var b,c=this,d=c.settings,e=c.dom;a=a||c.getBody(),void 0===c.hasVisual&&(c.hasVisual=d.visual),s(e.select("table,a",a),function(a){var f;switch(a.nodeName){case"TABLE":return b=d.visual_table_class||"mce-item-table",f=e.getAttrib(a,"border"),void(f&&"0"!=f||!c.hasVisual?e.removeClass(a,b):e.addClass(a,b));case"A":return void(e.getAttrib(a,"href",!1)||(f=e.getAttrib(a,"name")||a.id,b=d.visual_anchor_class||"mce-item-anchor",f&&c.hasVisual?e.addClass(a,b):e.removeClass(a,b)))}}),c.fire("VisualAid",{element:a,hasVisual:c.hasVisual})},remove:function(){var a=this;a.removed||(a.save(),a.removed=1,a.unbindAllNativeEvents(),a.hasHiddenInput&&q.remove(a.getElement().nextSibling),a.inline||(v&&v<10&&a.getDoc().execCommand("SelectAll",!1,null),q.setStyle(a.id,"display",a.orgDisplay),a.getBody().onload=null),a.fire("remove"),a.editorManager.remove(a),q.remove(a.getContainer()),a._selectionOverrides.destroy(),a.editorUpload.destroy(),a.destroy())},destroy:function(a){var b,c=this;if(!c.destroyed){if(!a&&!c.removed)return void c.remove();a||(c.editorManager.off("beforeunload",c._beforeUnload),c.theme&&c.theme.destroy&&c.theme.destroy(),c.selection.destroy(),c.dom.destroy()),b=c.formElement,b&&(b._mceOldSubmit&&(b.submit=b._mceOldSubmit,b._mceOldSubmit=null),q.unbind(b,"submit reset",c.formEventDelegate)),c.contentAreaContainer=c.formElement=c.container=c.editorContainer=null,c.bodyElement=c.contentDocument=c.contentWindow=null,c.iframeElement=c.targetElm=null,c.selection&&(c.selection=c.selection.win=c.selection.dom=c.selection.dom.doc=null),c.destroyed=1}},uploadImages:function(a){return this.editorUpload.uploadImages(a)},_scanForImages:function(){return this.editorUpload.scanForImages()}},r(w.prototype,c),w}),g("29",["1e"],function(a){var b=a.each,c=a.explode,d=function(a){a.on("AddEditor",function(a){var d=a.editor;d.on("preInit",function(){var a,e,f,g=d.settings,h=function(a,c){b(c,function(b,c){b&&f.setStyle(a,c,b)}),f.rename(a,"span")},i=function(c){f=d.dom,g.convert_fonts_to_spans&&b(f.select("font,u,strike",c.node),function(b){a[b.nodeName.toLowerCase()](f,b)})};g.inline_styles&&(e=c(g.font_size_legacy_values),a={font:function(a,b){h(b,{backgroundColor:b.style.backgroundColor,color:b.color,fontFamily:b.face,fontSize:e[parseInt(b.size,10)-1]})},u:function(a,b){"html4"===d.settings.schema&&h(b,{textDecoration:"underline"})},strike:function(a,b){h(b,{textDecoration:"line-through"})}},d.on("PreProcess SetContent",i))})})};return{register:d}}),g("e",["1j"],function(a){var b=function(a){return a.className.toString().indexOf("mce-")!==-1};return{isEditorUIElement:b}}),g("4k",["5r","3c","1j","l","20"],function(a,b,c,d,e){var f=function(a){return"nodechange"===a.type&&a.selectionChange},g=function(a,b){var e=function(){b.throttle()};d.DOM.bind(c,"mouseup",e),a.on("remove",function(){
d.DOM.unbind(c,"mouseup",e)})},h=function(a){a.on("focusout",function(){e.store(a)})},i=function(a,b){a.on("mouseup touchend",function(a){b.throttle()})},j=function(a,c){var d=b.detect().browser;d.isIE()||d.isEdge()?h(a):i(a,c),a.on("keyup nodechange",function(b){f(b)||e.store(a)})},k=function(b){var c=a.first(function(){e.store(b)},0);b.inline&&g(b,c),b.on("init",function(){j(b,c)}),b.on("remove",function(){c.cancel()})};return{register:k}}),g("2a",["1","1j","e","l","4k","15"],function(a,b,c,d,e,f){var g,h=d.DOM,i=function(a){return c.isEditorUIElement(a)},j=function(a,b){var c=a?a.settings.custom_ui_selector:"",d=h.getParent(b,function(b){return i(b)||!!c&&a.dom.is(b,c)});return null!==d},k=function(){try{return b.activeElement}catch(a){return b.body}},l=function(a,c){var d=c.editor;e.register(d),d.on("focusin",function(){var b=a.focusedEditor;b!=d&&(b&&b.fire("blur",{focusedEditor:d}),a.setActive(d),a.focusedEditor=d,d.fire("focus",{blurredEditor:b}),d.focus(!0))}),d.on("focusout",function(){f.setEditorTimeout(d,function(){var b=a.focusedEditor;j(d,k())||b!=d||(d.fire("blur",{focusedEditor:null}),a.focusedEditor=null)})}),g||(g=function(c){var d,e=a.activeEditor;d=c.target,e&&d.ownerDocument===b&&(d===b.body||j(e,d)||a.focusedEditor!==e||(e.fire("blur",{focusedEditor:null}),a.focusedEditor=null))},h.bind(b,"focusin",g))},m=function(a,c){a.focusedEditor==c.editor&&(a.focusedEditor=null),a.activeEditor||(h.unbind(b,"focusin",g),g=null)},n=function(b){b.on("AddEditor",a.curry(l,b)),b.on("RemoveEditor",a.curry(m,b))};return{setup:n,isEditorUIElement:i,isUIElement:j}}),g("17",["1e"],function(a){"use strict";var b={},c="en";return{setCode:function(a){a&&(c=a,this.rtl=!!this.data[a]&&"rtl"===this.data[a]._dir)},getCode:function(){return c},rtl:!1,add:function(a,c){var d=b[a];d||(b[a]=d={});for(var e in c)d[e]=c[e];this.setCode(a)},translate:function(d){var e=b[c]||{},f=function(b){return a.is(b,"function")?Object.prototype.toString.call(b):g(b)?"":""+b},g=function(b){return""===b||null===b||a.is(b,"undefined")},h=function(b){return b=f(b),a.hasOwn(e,b)?f(e[b]):b};if(g(d))return"";if(a.is(d,"object")&&a.hasOwn(d,"raw"))return f(d.raw);if(a.is(d,"array")){var i=d.slice(1);d=h(d[0]).replace(/\{([0-9]+)\}/g,function(b,c){return a.hasOwn(i,c)?f(i[c]):b})}return h(d).replace(/{context:\w+}$/,"")},data:b}}),g("9",["1i","27","1j","2","6","7","b","28","29","l","m","2a","17","1c","1d","1e","1f"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t=j.DOM,u=p.explode,v=p.each,w=p.extend,x=0,y=!1,z=[],A=[],B=function(a){return"length"!==a},C=function(a){v(s.get(),function(b){"scroll"===a.type?b.fire("ScrollWindow",a):b.fire("ResizeWindow",a)})},D=function(a){a!==y&&(a?k(d).on("resize scroll",C):k(d).off("resize scroll",C),y=a)},E=function(b){var c=A;delete z[b.id];for(var d=0;d<z.length;d++)if(z[d]===b){z.splice(d,1);break}return A=a.filter(A,function(a){return b!==a}),s.activeEditor===b&&(s.activeEditor=A.length>0?A[0]:null),s.focusedEditor===b&&(s.focusedEditor=null),c.length!==A.length},F=function(a){return a&&a.initialized&&!(a.getContainer()||a.getBody()).parentNode&&(E(a),a.unbindAllNativeEvents(),a.destroy(!0),a.removed=!0,a=null),a};return s={defaultSettings:{},$:k,majorVersion:"4",minorVersion:"7.2",releaseDate:"2017-11-07",editors:z,i18n:m,activeEditor:null,settings:{},setup:function(){var a,b,e,f,g=this,h="";if(b=q.getDocumentBaseUrl(c.location),/^[^:]+:\/\/\/?[^\/]+\//.test(b)&&(b=b.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(b)||(b+="/")),e=d.tinymce||d.tinyMCEPreInit)a=e.base||e.baseURL,h=e.suffix;else{for(var i=c.getElementsByTagName("script"),j=0;j<i.length;j++){f=i[j].src;var k=f.substring(f.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(f)){k.indexOf(".min")!=-1&&(h=".min"),a=f.substring(0,f.lastIndexOf("/"));break}}!a&&c.currentScript&&(f=c.currentScript.src,f.indexOf(".min")!=-1&&(h=".min"),a=f.substring(0,f.lastIndexOf("/")))}g.baseURL=new q(b).toAbsolute(a),g.documentBaseURL=b,g.baseURI=new q(g.baseURL),g.suffix=h,l.setup(g)},overrideDefaults:function(a){var b,c;b=a.base_url,b&&(this.baseURL=new q(this.documentBaseURL).toAbsolute(b.replace(/\/+$/,"")),this.baseURI=new q(this.baseURL)),c=a.suffix,a.suffix&&(this.suffix=c),this.defaultSettings=a;var d=a.plugin_base_urls;for(var f in d)e.PluginManager.urls[f]=d[f]},init:function(a){var b,e,i=this;e=p.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var j=function(a,b){return a.inline&&b.tagName.toLowerCase()in e},l=function(a){var b=a.id;return b||(b=a.name,b=b&&!t.get(b)?a.name:t.uniqueId(),a.setAttribute("id",b)),b},m=function(b){var c=a[b];if(c)return c.apply(i,Array.prototype.slice.call(arguments,2))},n=function(a,b){return b.constructor===RegExp?b.test(a.className):t.hasClass(a,b)},q=function(a){var b,d=[];if(g.ie&&g.ie<11)return h.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[];if(a.types)return v(a.types,function(a){d=d.concat(t.select(a.selector))}),d;if(a.selector)return t.select(a.selector);if(a.target)return[a.target];switch(a.mode){case"exact":b=a.elements||"",b.length>0&&v(u(b),function(a){var b;(b=t.get(a))?d.push(b):v(c.forms,function(b){v(b.elements,function(b){b.name===a&&(a="mce_editor_"+x++,t.setAttrib(b,"id",a),d.push(b))})})});break;case"textareas":case"specific_textareas":v(t.select("textarea"),function(b){a.editor_deselector&&n(b,a.editor_deselector)||a.editor_selector&&!n(b,a.editor_selector)||d.push(b)})}return d},r=function(a){b=a},s=function(){var b,c=0,e=[],g=function(a,d,g){var h=new f(a,d,i);e.push(h),h.on("init",function(){++c===b.length&&r(e)}),h.targetElm=h.targetElm||g,h.render()};return t.unbind(d,"ready",s),m("onpageload"),b=k.unique(q(a)),a.types?void v(a.types,function(c){p.each(b,function(b){return!t.is(b,c.selector)||(g(l(b),w({},a,c),b),!1)})}):(p.each(b,function(a){F(i.get(a.id))}),b=p.grep(b,function(a){return!i.get(a.id)}),void(0===b.length?r([]):v(b,function(b){j(a,b)?h.initError("Could not initialize inline editor on invalid inline target element",b):g(l(b),a,b)})))};return i.settings=a,t.bind(d,"ready",s),new o(function(a){b?a(b):r=function(b){a(b)}})},get:function(c){return 0===arguments.length?A.slice(0):b.isString(c)?a.find(A,function(a){return a.id===c}).getOr(null):b.isNumber(c)&&A[c]?A[c]:null},add:function(a){var b,c=this;return b=z[a.id],b===a?a:(null===c.get(a.id)&&(B(a.id)&&(z[a.id]=a),z.push(a),A.push(a)),D(!0),c.activeEditor=a,c.fire("AddEditor",{editor:a}),r||(r=function(){c.fire("BeforeUnload")},t.bind(d,"beforeunload",r)),a)},createEditor:function(a,b){return this.add(new f(a,b,this))},remove:function(a){var c,e,f=this;{if(a)return b.isString(a)?(a=a.selector||a,void v(t.select(a),function(a){e=f.get(a.id),e&&f.remove(e)})):(e=a,b.isNull(f.get(e.id))?null:(E(e)&&f.fire("RemoveEditor",{editor:e}),0===A.length&&t.unbind(d,"beforeunload",r),e.remove(),D(A.length>0),e));for(c=A.length-1;c>=0;c--)f.remove(A[c])}},execCommand:function(a,b,c){var d=this,e=d.get(c);switch(a){case"mceAddEditor":return d.get(c)||new f(c,d.settings,d).render(),!0;case"mceRemoveEditor":return e&&e.remove(),!0;case"mceToggleEditor":return e?(e.isHidden()?e.show():e.hide(),!0):(d.execCommand("mceAddEditor",0,c),!0)}return!!d.activeEditor&&d.activeEditor.execCommand(a,b,c)},triggerSave:function(){v(A,function(a){a.save()})},addI18n:function(a,b){m.add(a,b)},translate:function(a){return m.translate(a)},setActive:function(a){var b=this.activeEditor;this.activeEditor!=a&&(b&&b.fire("deactivate",{relatedTarget:a}),a.fire("activate",{relatedTarget:b})),this.activeEditor=a}},w(s,n),s.setup(),i.register(s),s}),g("i",["1","2q","2r","2s","2t","2u","2v"],function(a,b,c,d,e,f,g){var h=function(b){var d=function(a,c){return f.walk(b,a,c)},e=g.split,h=function(d){return c.normalize(b,d).fold(a.constant(!1),function(a){return d.setStart(a.startContainer,a.startOffset),d.setEnd(a.endContainer,a.endOffset),!0})};return{walk:d,split:e,normalize:h}};return h.compareRanges=d.isEq,h.getCaretRangeFromPoint=b.fromPoint,h.getSelectedNode=e.getSelectedNode,h.getNode=e.getNode,h}),g("t",[],function(){"use strict";var a=Math.min,b=Math.max,c=Math.round,d=function(a,b,d){var e,f,g,h,j,k;return e=b.x,f=b.y,g=a.w,h=a.h,j=b.w,k=b.h,d=(d||"").split(""),"b"===d[0]&&(f+=k),"r"===d[1]&&(e+=j),"c"===d[0]&&(f+=c(k/2)),"c"===d[1]&&(e+=c(j/2)),"b"===d[3]&&(f-=h),"r"===d[4]&&(e-=g),"c"===d[3]&&(f-=c(h/2)),"c"===d[4]&&(e-=c(g/2)),i(e,f,g,h)},e=function(a,b,c,e){var f,g;for(g=0;g<e.length;g++)if(f=d(a,b,e[g]),f.x>=c.x&&f.x+f.w<=c.w+c.x&&f.y>=c.y&&f.y+f.h<=c.h+c.y)return e[g];return null},f=function(a,b,c){return i(a.x-b,a.y-c,a.w+2*b,a.h+2*c)},g=function(c,d){var e,f,g,h;return e=b(c.x,d.x),f=b(c.y,d.y),g=a(c.x+c.w,d.x+d.w),h=a(c.y+c.h,d.y+d.h),g-e<0||h-f<0?null:i(e,f,g-e,h-f)},h=function(a,c,d){var e,f,g,h,j,k,l,m,n,o;return j=a.x,k=a.y,l=a.x+a.w,m=a.y+a.h,n=c.x+c.w,o=c.y+c.h,e=b(0,c.x-j),f=b(0,c.y-k),g=b(0,l-n),h=b(0,m-o),j+=e,k+=f,d&&(l+=e,m+=f,j-=g,k-=h),l-=g,m-=h,i(j,k,l-j,m-k)},i=function(a,b,c,d){return{x:a,y:b,w:c,h:d}},j=function(a){return i(a.left,a.top,a.width,a.height)};return{inflate:f,relativePosition:d,findBestRelativePosition:e,intersect:g,clamp:h,create:i,fromClientRect:j}}),g("12",[],function(){"use strict";var a={};return{add:function(b,c){a[b.toLowerCase()]=c},has:function(b){return!!a[b.toLowerCase()]},get:function(b){var c=b.toLowerCase(),d=a.hasOwnProperty(c)?a[c]:null;if(null===d)throw new Error("Could not find module for type: "+b);return d},create:function(b,c){var d;if("string"==typeof b?(c=c||{},c.type=b):(c=b,b=c.type),b=b.toLowerCase(),d=a[b],!d)throw new Error("Could not find control by type: "+b);return d=new d(c),d.type=b,d}}}),g("13",["1e"],function(a){var b,c,d=a.each,e=a.extend,f=function(){};return f.extend=b=function(a){var f,g,h,i=this,j=i.prototype,k=function(){var a,b,d,e=this;if(!c&&(e.init&&e.init.apply(e,arguments),b=e.Mixins))for(a=b.length;a--;)d=b[a],d.init&&d.init.apply(e,arguments)},l=function(){return this},m=function(a,b){return function(){var c,d=this,e=d._super;return d._super=j[a],c=b.apply(d,arguments),d._super=e,c}};c=!0,f=new i,c=!1,a.Mixins&&(d(a.Mixins,function(b){for(var c in b)"init"!==c&&(a[c]=b[c])}),j.Mixins&&(a.Mixins=j.Mixins.concat(a.Mixins))),a.Methods&&d(a.Methods.split(","),function(b){a[b]=l}),a.Properties&&d(a.Properties.split(","),function(b){var c="_"+b;a[b]=function(a){var b,d=this;return a!==b?(d[c]=a,d):d[c]}}),a.Statics&&d(a.Statics,function(a,b){k[b]=a}),a.Defaults&&j.Defaults&&(a.Defaults=e({},j.Defaults,a.Defaults));for(g in a)h=a[g],"function"==typeof h&&j[g]?f[g]=m(g,h):f[g]=h;return k.prototype=f,k.constructor=k,k.extend=b,k},f}),g("14",[],function(){var a=Math.min,b=Math.max,c=Math.round,d=function(d){var e=this,f=0,g=0,h=0,i=function(d,e,f){var g,h,i,j,k,l;return g=0,h=0,i=0,d/=255,e/=255,f/=255,k=a(d,a(e,f)),l=b(d,b(e,f)),k==l?(i=k,{h:0,s:0,v:100*i}):(j=d==k?e-f:f==k?d-e:f-d,g=d==k?3:f==k?1:5,g=60*(g-j/(l-k)),h=(l-k)/l,i=l,{h:c(g),s:c(100*h),v:c(100*i)})},j=function(d,e,i){var j,k,l,m;if(d=(parseInt(d,10)||0)%360,e=parseInt(e,10)/100,i=parseInt(i,10)/100,e=b(0,a(e,1)),i=b(0,a(i,1)),0===e)return void(f=g=h=c(255*i));switch(j=d/60,k=i*e,l=k*(1-Math.abs(j%2-1)),m=i-k,Math.floor(j)){case 0:f=k,g=l,h=0;break;case 1:f=l,g=k,h=0;break;case 2:f=0,g=k,h=l;break;case 3:f=0,g=l,h=k;break;case 4:f=l,g=0,h=k;break;case 5:f=k,g=0,h=l;break;default:f=g=h=0}f=c(255*(f+m)),g=c(255*(g+m)),h=c(255*(h+m))},k=function(){var a=function(a){return a=parseInt(a,10).toString(16),a.length>1?a:"0"+a};return"#"+a(f)+a(g)+a(h)},l=function(){return{r:f,g:g,b:h}},m=function(){return i(f,g,h)},n=function(a){var b;return"object"==typeof a?"r"in a?(f=a.r,g=a.g,h=a.b):"v"in a&&j(a.h,a.s,a.v):(b=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(a))?(f=parseInt(b[1],10),g=parseInt(b[2],10),h=parseInt(b[3],10)):(b=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(a))?(f=parseInt(b[1],16),g=parseInt(b[2],16),h=parseInt(b[3],16)):(b=/#([0-F])([0-F])([0-F])/gi.exec(a))&&(f=parseInt(b[1]+b[1],16),g=parseInt(b[2]+b[2],16),h=parseInt(b[3]+b[3],16)),f=f<0?0:f>255?255:f,g=g<0?0:g>255?255:g,h=h<0?0:h>255?255:h,e};d&&n(d),e.toRgb=l,e.toHsv=m,e.toHex=k,e.parse=n};return d}),g("18",["2"],function(a){var b=function(a,c){var d,e,f,g;if(c=c||'"',null===a)return"null";if(f=typeof a,"string"==f)return e="\bb\tt\nn\ff\rr\"\"''\\\\",c+a.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(a,b){return'"'===c&&"'"===a?a:(d=e.indexOf(b),d+1?"\\"+e.charAt(d+1):(a=b.charCodeAt().toString(16),"\\u"+"0000".substring(a.length)+a))})+c;if("object"==f){if(a.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(a)){for(d=0,e="[";d<a.length;d++)e+=(d>0?",":"")+b(a[d],c);return e+"]"}e="{";for(g in a)a.hasOwnProperty(g)&&(e+="function"!=typeof a[g]?(e.length>1?","+c:c)+g+c+":"+b(a[g],c):"");return e+"}"}return""+a};return{serialize:b,parse:function(b){try{return a[String.fromCharCode(101)+"val"]("("+b+")")}catch(a){}}}}),g("19",["l"],function(a){return{callbacks:{},count:0,send:function(b){var c=this,d=a.DOM,e=void 0!==b.count?b.count:c.count,f="tinymce_jsonp_"+e;c.callbacks[e]=function(a){d.remove(f),delete c.callbacks[e],b.callback(a)},d.add(d.doc.body,"script",{id:f,src:b.url,type:"text/javascript"}),c.count++}}}),g("1h",["38","1q","1c","1e"],function(a,b,c,d){var e={send:function(c){var f,g=0,h=function(){!c.async||4==f.readyState||g++>1e4?(c.success&&g<1e4&&200==f.status?c.success.call(c.success_scope,""+f.responseText,f,c):c.error&&c.error.call(c.error_scope,g>1e4?"TIMED_OUT":"GENERAL",f,c),f=null):b(h,10)};if(c.scope=c.scope||this,c.success_scope=c.success_scope||c.scope,c.error_scope=c.error_scope||c.scope,c.async=c.async!==!1,c.data=c.data||"",e.fire("beforeInitialize",{settings:c}),f=new a){if(f.overrideMimeType&&f.overrideMimeType(c.content_type),f.open(c.type||(c.data?"POST":"GET"),c.url,c.async),c.crossDomain&&(f.withCredentials=!0),c.content_type&&f.setRequestHeader("Content-Type",c.content_type),c.requestheaders&&d.each(c.requestheaders,function(a){f.setRequestHeader(a.key,a.value)}),f.setRequestHeader("X-Requested-With","XMLHttpRequest"),f=e.fire("beforeSend",{xhr:f,settings:c}).xhr,f.send(c.data),!c.async)return h();b(h,10)}}};return d.extend(e,c),e}),g("1a",["18","1h","1e"],function(a,b,c){var d=c.extend,e=function(a){this.settings=d({},a),this.count=0};return e.sendRPC=function(a){return(new e).send(a)},e.prototype={send:function(c){var e=c.error,f=c.success;c=d(this.settings,c),c.success=function(b,d){b=a.parse(b),"undefined"==typeof b&&(b={error:"JSON Parse error."}),b.error?e.call(c.error_scope||c.scope,b.error,d):f.call(c.success_scope||c.scope,b.result)},c.error=function(a,b){e&&e.call(c.error_scope||c.scope,a,b)},c.data=a.serialize({id:c.id||"c"+this.count++,method:c.method,params:c.params}),c.content_type="application/json",b.send(c)}},e}),g("1b",["1j","2"],function(a,b){var c,d,e,f,g,h;try{if(b.localStorage)return b.localStorage}catch(a){}g="tinymce",d=a.documentElement,h=!!d.addBehavior,h&&d.addBehavior("#default#userData");var i=function(){f=[];for(var a in e)f.push(a);c.length=f.length},j=function(){var a,b,c,f=0;if(e={},h){var j=function(a){var c,d;return d=void 0!==a?f+a:b.indexOf(",",f),d===-1||d>b.length?null:(c=b.substring(f,d),f=d+1,c)};d.load(g),b=d.getAttribute(g)||"";do{var k=j();if(null===k)break;if(a=j(parseInt(k,32)||0),null!==a){if(k=j(),null===k)break;c=j(parseInt(k,32)||0),a&&(e[a]=c)}}while(null!==a);i()}},k=function(){var a,b="";if(h){for(var c in e)a=e[c],b+=(b?",":"")+c.length.toString(32)+","+c+","+a.length.toString(32)+","+a;d.setAttribute(g,b);try{d.save(g)}catch(a){}i()}};return c={key:function(a){return f[a]},getItem:function(a){return a in e?e[a]:null},setItem:function(a,b){e[a]=""+b,k()},removeItem:function(a){delete e[a],k()},clear:function(){e={},k()}},j(),c}),g("3",["6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","1g","1h"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){var W=d,X={geom:{Rect:x},util:{Promise:R,Delay:J,Tools:S,VK:U,URI:T,Class:H,EventDispatcher:K,Observable:Q,I18n:L,XHR:V,JSON:M,JSONRequest:O,JSONP:N,LocalStorage:P,Color:I},dom:{EventUtils:r,Sizzle:v,DomQuery:q,TreeWalker:w,DOMUtils:p,ScriptLoader:s,RangeUtils:m,Serializer:u,ControlSelection:o,BookmarkManager:n,Selection:t,Event:r.Event},html:{Styles:E,Entities:z,Node:A,Schema:C,SaxParser:B,DomParser:y,Writer:F,Serializer:D},ui:{Factory:G},Env:f,AddOnManager:a,Formatter:j,UndoManager:h,EditorCommands:c,WindowManager:l,NotificationManager:k,EditorObservable:e,Shortcuts:g,Editor:b,FocusManager:i,EditorManager:d,DOM:p.DOM,ScriptLoader:s.ScriptLoader,PluginManager:a.PluginManager,ThemeManager:a.ThemeManager,trim:S.trim,isArray:S.isArray,is:S.is,toArray:S.toArray,makeMap:S.makeMap,each:S.each,map:S.map,grep:S.grep,inArray:S.inArray,extend:S.extend,create:S.create,walk:S.walk,createNS:S.createNS,resolve:S.resolve,explode:S.explode,_addCacheSuffix:S._addCacheSuffix,isOpera:f.opera,isWebKit:f.webkit,isIE:f.ie,isGecko:f.gecko,isMac:f.mac};return W=S.extend(W,X)}),g("0",["1","2","3"],function(a,b,c){var d=this||b,e=function(b){"function"!=typeof d.define||d.define.amd||(d.define("ephox/tinymce",[],a.constant(b)),d.define("9",[],a.constant(b))),"object"==typeof module&&(module.exports=b)},f=function(a){b.tinymce=a,b.tinyMCE=a};return function(){return f(c),e(c),c}}),d("0")()}();