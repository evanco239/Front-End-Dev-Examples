// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidZip = isValidZip;
exports.alertMessage = alertMessage;

function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
} //display alert message


function alertMessage(message, className) {
  var div = document.createElement('div');
  div.className = "alert alert-".concat(className);
  div.textContent = message;
  document.querySelector('.container').insertBefore(div, document.querySelector('#pet-form'));
  setTimeout(function () {
    div.remove();
  }, 3000);
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _validate = require("./validate.js");

var petFrom = document.querySelector("#pet-form");
var results = document.querySelector("#results");
var pageElement = document.querySelector('#page');
var data = "";
var currentPage = 1; //initial event listener for page 1 query

petFrom.addEventListener("submit", fetchAnimals); //add event listener to update pages

pageElement.addEventListener('click', updatePage); //get updated page number for new fetch request

function updatePage(e) {
  if (e.path[0].innerText === 'Next') currentPage++;

  if (e.path[0].innerText === 'Prev') {
    //make sure that we can't go back in index farther than page 1
    if (currentPage === 1) {
      return;
    } else {
      currentPage--;
    }
  } //call fetch animal with new page number


  fetchAnimals(e);
} //fetch animals from API


function fetchAnimals(e) {
  e.preventDefault(); //get user input

  var animal = document.querySelector("#animal").value;
  var zipCode = document.querySelector("#zip").value; //validate zipcode

  if (!(0, _validate.isValidZip)(zipCode)) {
    // called with {message, classname}
    (0, _validate.alertMessage)('Please Enter a Valid Zip Code...', 'danger');
    return;
  } // using http request with custom header in command line to pull Oauth token for 60 minute use


  var request = new XMLHttpRequest();
  request.open("GET", "https://api.petfinder.com/v2/animals?type=".concat(animal, "&location=").concat(zipCode, "&page=").concat(currentPage), true);
  request.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzNTE1NGMyMTQ1NWQxNWExN2Y1MmE4NDFhMDlmM2EyMjFlZTYxODJmN2E4MWRiYzlkOWJiOTAwODI0YWI1YjE3NzQzNTQyNjg3ZTlkNjVjIn0.eyJhdWQiOiI5R2toZzNhVjdKU04wVkI1NFBmZkduVzhCdnBHUlIzUVpHajgybVFqNGFRV0JWQzFQSSIsImp0aSI6IjMzNTE1NGMyMTQ1NWQxNWExN2Y1MmE4NDFhMDlmM2EyMjFlZTYxODJmN2E4MWRiYzlkOWJiOTAwODI0YWI1YjE3NzQzNTQyNjg3ZTlkNjVjIiwiaWF0IjoxNTUzMDk0ODkyLCJuYmYiOjE1NTMwOTQ4OTIsImV4cCI6MTU1MzA5ODQ5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.l3FLwFD8EfYHFwNpRJwhMz_V6GZuTMcO1HOv07nJCIGPCHKGgVMseBnuOvphTp4A1t6Iyr9JgeaTqU1iAXybcKF9BFcg2Gk8v-NcT3FAohI3bo0IfFzU_4xTnRXVw3cho5outm4ogaTeDtBwqIWmpvuZLF0o6f4CkOyPqZOjSL7QbhcPJOtgOXJ_gKeVA_wM5oDgKzht0-OogRjn600sXkLGpioeQf4htUW0IT5gK5PuafsSzFS1jWgKjSqBpBo8YunHUZk55KeaqcHjBawPE5wEW6CTQQ6XzGm_Gn9PJZ50PgmgXrxH3dMbATckbQym0CHkqeT8iK0waK0ZiaFF2w"); //on successful load. call a display function that will give the cards that we want
  // by iterating through all the animals in the array

  request.onload = function () {
    if (this.status === 200) {
      data = JSON.parse(this.response);
      displayAnimals(data.animals);
      displayPages(data.pagination);
    } else {
      console.log(this.status);
    }
  };

  request.send();
}

function displayAnimals(animals) {
  console.log(animals);
  var output = "";
  animals.forEach(function (animal) {
    output += "\n            <div class=\"card col-md-10 mx-auto mb-3 pt-3\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\" >\n                        <h3 class=\"card-header\" style=\"width: 25rem\">".concat(animal.name, " (").concat(animal.age, ")</h3>\n                    \n                    <ul class=\"list-group list-group-flush \" >\n                        <li class=\"list-group-item\">Gender: ").concat(animal.gender, "</li>\n                        <li class=\"list-group-item\">Size: ").concat(animal.size, "</li>\n                        <li class=\"list-group-item\">").concat(animal.contact.email ? "Contact: ".concat(animal.contact.email) : '', "</li>\n                    </ul>\n                    </div>\n                    <div class=\"card-body col-md-6 text-center\">\n                        <p class=\"card-text small\">Click me to find more out!</p>\n                        <a href=").concat(animal.url, "><img class=\"img-fluid rounded-circle\" style=\"width: 100px; height: 100px\" src=\"").concat(animal.photos[0] ? animal.photos[0].small : "https://i.ebayimg.com/00/s/NDUzWDQ1Mw==/z/IvoAAOSwImRYI8kX/$_1.JPG?set_id=8800005007", "\" alt=\"animal\"></a>\n                        <p class=\"card-text mx-4\">").concat(animal.description ? animal.description : "Come by to see ".concat(animal.name, " and find out what ").concat(animal.gender === 'Female' ? 'she' : 'he', " likes!"), "</p>\n                    </div>\n                </div>\n            </div>\n        ");
  });
  results.innerHTML = output;
} //display pages


function displayPages(pages) {
  console.log(pages); //get ul element from DOM and insert list items

  var output = "\n    <li class=\"page-item\"><a class=\"page-link\" href=\"".concat(pages.current_page === 1 ? '#' : "https://api.petfinder.com".concat(pages._links.previous.href), "\">Prev</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">").concat(pages.current_page, "</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"https://api.petfinder.com").concat(pages._links.next.href, "\">Next</a></li>\n  ");
  pageElement.innerHTML = output;
}
},{"./validate.js":"js/validate.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62983" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map