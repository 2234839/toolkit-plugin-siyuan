"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var src = {};
var decorator$1 = {};
var guard$1 = {};
var afterBefore = {};
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(afterBefore, "__esModule", { value: true });
afterBefore.run_before = afterBefore.run_after = void 0;
function run_after(f) {
  return function name(target, propertyKey, descriptor) {
    return Object.assign(Object.assign({}, descriptor), { value(...arg) {
      return __awaiter(this, void 0, void 0, function* () {
        const res = yield descriptor.value(...arg);
        yield f(res);
        return res;
      });
    } });
  };
}
afterBefore.run_after = run_after;
function run_before(f) {
  return function name(target, propertyKey, descriptor) {
    return Object.assign(Object.assign({}, descriptor), { value(...arg) {
      return __awaiter(this, void 0, void 0, function* () {
        yield f();
        const res = yield descriptor.value(...arg);
        return res;
      });
    } });
  };
}
afterBefore.run_before = run_before;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(afterBefore, exports2);
})(guard$1);
var __createBinding$2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
  }
  __setModuleDefault$2(result, mod);
  return result;
};
Object.defineProperty(decorator$1, "__esModule", { value: true });
decorator$1.guard = void 0;
const guard = __importStar$2(guard$1);
decorator$1.guard = guard;
var hash$1 = {};
var time33 = {};
Object.defineProperty(time33, "__esModule", { value: true });
time33.hash_time33 = void 0;
function hash_time33(text) {
  let hash2 = 5381, index = text.length;
  while (index) {
    hash2 = hash2 * 33 ^ text.codePointAt(--index);
  }
  return hash2 >>> 0;
}
time33.hash_time33 = hash_time33;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(time33, exports2);
})(hash$1);
var adap$1 = {};
Object.defineProperty(adap$1, "__esModule", { value: true });
adap$1.test = void 0;
adap$1.test = 1;
var jsCore = {};
var mixin$2 = {};
var mixin$1 = {};
Object.defineProperty(mixin$1, "__esModule", { value: true });
mixin$1.merge_obj = mixin$1.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
mixin$1.applyMixins = applyMixins;
function merge_obj(...objs) {
  let obj = {};
  for (let i = 0; i < objs.length; i++) {
    const el = objs[i];
    if (el instanceof Object)
      obj = Object.assign(Object.assign({}, obj), el);
  }
  return obj;
}
mixin$1.merge_obj = merge_obj;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(mixin$1, exports2);
})(mixin$2);
var number$2 = {};
var number$1 = {};
Object.defineProperty(number$1, "__esModule", { value: true });
number$1.take_two_decimal_places = void 0;
function take_two_decimal_places(num) {
  return Number(num).toFixed(2);
}
number$1.take_two_decimal_places = take_two_decimal_places;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(number$1, exports2);
})(number$2);
var promise$1 = {};
var awaitPromise$1 = {};
Object.defineProperty(awaitPromise$1, "__esModule", { value: true });
awaitPromise$1.awaitPromise = void 0;
function awaitPromise({
  getPromise,
  /** 这里的也要描述类型？ */
  succeed = (r) => {
  },
  error = () => {
  },
  end = () => {
  },
  midway = () => {
  }
}) {
  let running = false;
  return function(...arg) {
    if (running) {
      midway();
    } else {
      running = true;
      const promise2 = getPromise.apply(this, arg);
      promise2.then((r) => {
        succeed(r);
      }).catch(error).finally(() => {
        end();
        running = false;
      });
    }
  };
}
awaitPromise$1.awaitPromise = awaitPromise;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(awaitPromise$1, exports2);
})(promise$1);
var string$1 = {};
var url = {};
Object.defineProperty(url, "__esModule", { value: true });
url._URL = void 0;
class _URL {
  constructor(url2) {
    this.par_obj = _URL.getParameters(url2);
  }
  /** 解析url中的参数 最少会返回一个{}对象 */
  static getParameters(url_str) {
    const url2 = decodeURIComponent(url_str);
    let obj = url2.match(/([^?=&]+)(=([^&]*))/g);
    if (obj === null) {
      return {};
    }
    const par = obj.reduce((a, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a), {});
    return par;
  }
  /** 获取对应key的值，没有的情况下返回空字符串 */
  getValue(key) {
    const value = this.par_obj[key];
    if (value === void 0) {
      return "";
    }
    return value;
  }
}
url._URL = _URL;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(url, exports2);
})(string$1);
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(jsCore, "__esModule", { value: true });
jsCore.string = jsCore.promise = jsCore.number = jsCore.mixin = void 0;
const mixin = __importStar$1(mixin$2);
jsCore.mixin = mixin;
const number = __importStar$1(number$2);
jsCore.number = number;
const promise = __importStar$1(promise$1);
jsCore.promise = promise;
const string = __importStar$1(string$1);
jsCore.string = string;
var siyuan$1 = {};
var mergePluginPackage$1 = {};
Object.defineProperty(mergePluginPackage$1, "__esModule", { value: true });
mergePluginPackage$1.mergePluginPackage = void 0;
function mergePluginPackage(pkg, plugin) {
  return Object.assign(Object.assign({}, plugin), { version: pkg.version, name: pkg.name, url: pkg.repository, author: pkg.author });
}
mergePluginPackage$1.mergePluginPackage = mergePluginPackage;
(function(exports2) {
  var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.bindData = exports2.mergePluginPackage = void 0;
  const mergePluginPackage_1 = mergePluginPackage$1;
  Object.defineProperty(exports2, "mergePluginPackage", { enumerable: true, get: function() {
    return mergePluginPackage_1.mergePluginPackage;
  } });
  function bindData(opt) {
    const { that, storageName, initValue } = opt;
    let _value = initValue;
    const loadValue = () => __awaiter2(this, void 0, void 0, function* () {
      const value = yield that.loadData(storageName);
      if (value !== "") {
        _value = value;
      }
      return _value;
    });
    loadValue();
    return {
      /** 会执行 loadData 然后再返回结果*/
      loadValue,
      value: () => _value,
      set(value) {
        _value = value;
        that.saveData(storageName, _value);
      }
    };
  }
  exports2.bindData = bindData;
})(siyuan$1);
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(src, "__esModule", { value: true });
var siyuan_1 = src.siyuan = src.js_core = src.adap = src.hash = src.decorator = void 0;
const decorator = __importStar(decorator$1);
src.decorator = decorator;
const hash = __importStar(hash$1);
src.hash = hash;
const adap = __importStar(adap$1);
src.adap = adap;
const js_core = __importStar(jsCore);
src.js_core = js_core;
const siyuan = __importStar(siyuan$1);
siyuan_1 = src.siyuan = siyuan;
const { Plugin } = require("siyuan");
class SiyuanPlugin extends Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "onunloadFn", []);
  }
  // 在 unload 时执行注册的函数
  addUnloadFn(fn) {
    this.onunloadFn.push(fn);
  }
  onunload() {
    this.onunloadFn.forEach((fn) => fn());
  }
}
class VitePlugin extends SiyuanPlugin {
  constructor() {
    super(...arguments);
    __publicField(this, "tagSort", siyuan_1.bindData({
      initValue: {},
      that: this,
      storageName: "tagSort.json"
    }));
  }
  onload() {
    const oldFetch = globalThis.fetch;
    globalThis.fetch = async (input, init) => {
      const res = await oldFetch(input, init);
      if (input === "/api/search/searchTag") {
        const json = await res.clone().json();
        json.data.tags = json.data.tags.sort((a, b) => {
          const a_key = a.replace(/<mark>(.*?)<\/mark>/g, "$1");
          const b_key = b.replace(/<mark>(.*?)<\/mark>/g, "$1");
          return (this.tagSort.value()[a_key] ?? 0) - (this.tagSort.value()[b_key] ?? 0);
        }).reverse();
        const newRes = new Response(JSON.stringify(json), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
        return newRes;
      }
      return res;
    };
    this.addUnloadFn(() => {
      globalThis.fetch = oldFetch;
    });
    const onTagClick = (e) => {
      if (e.target instanceof HTMLElement && e.target.classList.contains("b3-list-item__text")) {
        const tag = e.target.textContent ?? "";
        this.tagSort.set({
          ...this.tagSort.value(),
          [tag]: this.tagSort.value()[tag] ? this.tagSort.value()[tag] + 1 : 1
        });
      }
    };
    document.addEventListener("click", onTagClick, { capture: true });
    this.addUnloadFn(() => {
      document.removeEventListener("click", onTagClick, { capture: true });
    });
  }
}
module.exports = VitePlugin;
//# sourceMappingURL=index.js.map
