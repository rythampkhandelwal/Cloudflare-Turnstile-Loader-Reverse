"use strict";
(function (__c0, __c1) {
  "use strict";
  (function () {
    function asyncGeneratorDelegate(e, t, r, n, a, u, l) {
      try {
        var d = e[u](l),
          f = d.value;
      } catch (s) {
        r(s);
        return;
      }
      d.done ? t(f) : Promise.resolve(f).then(n, a);
    }
    function asyncToGenerator(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, a) {
          var u = e.apply(t, r);
          function l(f) {
            asyncGeneratorDelegate(u, n, a, l, d, "next", f);
          }
          function d(f) {
            asyncGeneratorDelegate(u, n, a, l, d, "throw", f);
          }
          l(void 0);
        });
      };
    }
    function defineProperty(e, t, r) {
      return (
        t in e ?
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) :
        e[t] = r,
        e);

    }
    function instanceOf(e, t) {
      "@swc/helpers - instanceof";
      return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ?
      !!t[Symbol.hasInstance](e) :
      e instanceof t;
    }
    function objectSpread(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {},
          n = Object.keys(r);
        typeof Object.getOwnPropertySymbols == "function" && (
        n = n.concat(
          Object.getOwnPropertySymbols(r).filter(function (a) {
            return Object.getOwnPropertyDescriptor(r, a).enumerable;
          })
        )),
        n.forEach(function (a) {
          defineProperty(e, a, r[a]);
        });
      }
      return e;
    }
    function keysPlusSymbols(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (
        n = n.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        r.push.apply(r, n);
      }
      return r;
    }
    function defineProperties(e, t) {
      return (
        t = t != null ? t : {},
        Object.getOwnPropertyDescriptors ?
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) :
        keysPlusSymbols(Object(t)).forEach(function (r) {
          Object.defineProperty(
            e,
            r,
            Object.getOwnPropertyDescriptor(t, r)
          );
        }),
        e);

    }
    function arrayPassthrough(e) {
      if (Array.isArray(e)) return e;
    }
    function slicedToArray(e, t) {
      var r =
      e == null ?
      null :
      typeof Symbol != "undefined" && e[Symbol.iterator] ||
      e["@@iterator"];
      if (r != null) {
        var n = [],
          a = !0,
          u = !1,
          l,
          d;
        try {
          for (
          r = r.call(e);
          !(a = (l = r.next()).done) && (
          n.push(l.value), !(t && n.length === t));
          a = !0)
          ;
        } catch (f) {
          u = !0, d = f;
        } finally {
          try {
            !a && r.return != null && r.return();
          } finally {
            if (u) throw d;
          }
        }
        return n;
      }
    }
    function throwUnsupportedIterable() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function toArray(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function arrayLikeToArray(e, t) {
      if (e) {
        if (typeof e == "string") return toArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
        r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")

        return Array.from(r);
        if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))

        return toArray(e, t);
      }
    }
    function slicedToArrayAll(e, t) {
      return arrayPassthrough(e) || slicedToArray(e, t) || arrayLikeToArray(e, t) || throwUnsupportedIterable();
    }
    function spreadArray(e) {
      if (Array.isArray(e)) return toArray(e);
    }
    function iterableToArray(e) {
      if (
      typeof Symbol != "undefined" && e[Symbol.iterator] != null ||
      e["@@iterator"] != null)

      return Array.from(e);
    }
    function throwNonIterableSpread() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function toConsumableArray(e) {
      return spreadArray(e) || iterableToArray(e) || arrayLikeToArray(e) || throwNonIterableSpread();
    }
    function asyncGeneratorMachine(e, t) {
      var r,
        n,
        a,
        u = {
          label: 0,
          sent: function () {
            if (a[0] & 1) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
        l = Object.create(
          (typeof Iterator == "function" ? Iterator : Object).prototype
        ),
        d = Object.defineProperty;
      return (
        d(l, "next", { value: f(0) }),
        d(l, "throw", { value: f(1) }),
        d(l, "return", { value: f(2) }),
        typeof Symbol == "function" &&
        d(l, Symbol.iterator, {
          value: function () {
            return this;
          }
        }),
        l);

      function f(m) {
        return function (E) {
          return s([m, E]);
        };
      }
      function s(m) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; l && (l = 0, m[0] && (u = 0)), u;)
        try {
          if (
          r = 1,
          n && (
          a =
          m[0] & 2 ?
          n.return :
          m[0] ?
          n.throw || ((a = n.return) && a.call(n), 0) :
          n.next) &&
          !(a = a.call(n, m[1])).done)

          return a;
          switch (n = 0, a && (m = [m[0] & 2, a.value]), m[0]) {
            case 0:
            case 1:
              a = m;
              break;
            case 4:
              return u.label++, { value: m[1], done: !1 };
            case 5:
              u.label++, n = m[1], m = [0];
              continue;
            case 7:
              m = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (
              a = u.trys,
              !(a = a.length > 0 && a[a.length - 1]) && (
              m[0] === 6 || m[0] === 2))
              {
                u = 0;
                continue;
              }
              if (m[0] === 3 && (!a || m[1] > a[0] && m[1] < a[3])) {
                u.label = m[1];
                break;
              }
              if (m[0] === 6 && u.label < a[1]) {
                u.label = a[1], a = m;
                break;
              }
              if (a && u.label < a[2]) {
                u.label = a[2], u.ops.push(m);
                break;
              }
              a[2] && u.ops.pop(), u.trys.pop();
              continue;
          }
          m = t.call(e, u);
        } catch (E) {
          m = [6, E], n = 0;
        } finally {
          r = a = 0;
        }
        if (m[0] & 5) throw m[1];
        return { value: m[0] ? m[1] : void 0, done: !0 };
      }
    }
    function typeOf(e) {
      "@swc/helpers - typeof";
      return e && typeof Symbol != "undefined" && e.constructor === Symbol ?
      "symbol" :
      typeof e;
    }
    var WIDGET_ID_PREFIX = "cf-chl-widget-",
      SOURCE_TAG = "cloudflare-challenge",
      SELECTOR_CF_TURNSTILE = ".cf-turnstile",
      $n = ".cf-challenge",
      SELECTOR_GRECAPTCHA = ".g-recaptcha",
      RESPONSE_INPUT_ID = "cf-turnstile-response",
      GRECAPTCHA_RESPONSE_ID = "g-recaptcha-response",
      BACKOFF_MS_MIN = 3e4,
      BACKOFF_MS_MAX = 180 * 1e3,
      ra = 1e4,
      DEFAULT_RETRY_INTERVAL_MS = 8e3,
      SELF_UPGRADE_INTERVAL_MS = 3600 * 1e3,
      PRIVATE_TOKEN_POLICY = "private-token",
      ia = 300,
      EXPIRY_BUFFER_SECONDS = 10,
      CODE_200100_OK = 200100,
      CODE_200500_NOOP = 200500,
      CODE_300020 = 300020,
      CODE_300030_CRASHED = 300030,
      CODE_300031_HUNG = 300031,
      da = 3,
      sa = 500,
      fa = 500,
      EMPTY_RCV = "",
      SCS_STORAGE_PREFIX = "_cftscs_",
      SCS_MAX_LENGTH = 512;
    var ModeEnum = function (e) {
        return (
          e.Managed = "managed",
          e.NonInteractive = "non-interactive",
          e.Invisible = "invisible",
          e);

      }({}),
      SizeEnum = function (e) {
        return (
          e.Normal = "normal",
          e.Compact = "compact",
          e.Invisible = "invisible",
          e.Flexible = "flexible",
          e);

      }({}),
      ThemeEnum = function (e) {
        return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e;
      }({}),
      DisplayStateEnum = function (e) {
        return (
          e.Verifying = "verifying",
          e.VerifyingHavingTroubles = "verifying-having-troubles",
          e.VerifyingOverrun = "verifying-overrun",
          e.FailureWoHavingTroubles = "failure-wo-having-troubles",
          e.FailureHavingTroubles = "failure-having-troubles",
          e.FailureFeedback = "failure-feedback",
          e.FailureFeedbackCode = "failure-feedback-code",
          e.ExpiredNeverRefresh = "expired-never-refresh",
          e.ExpiredManualRefresh = "expired-manual-refresh",
          e.TimeoutNeverRefresh = "timeout-never-refresh",
          e.TimeoutManualRefresh = "timeout-manual-refresh",
          e.InteractivityRequired = "interactivity-required",
          e.UnsupportedBrowser = "unsupported-browser",
          e.TimeCheckCachedWarning = "time-check-cached-warning",
          e.InvalidDomain = "invalid-domain",
          e);

      }({}),
      RetryOptionEnum = function (e) {
        return e.Never = "never", e.Auto = "auto", e;
      }({}),
      RefreshExpiredOptionEnum = function (e) {
        return (
          e.Never = "never",
          e.Manual = "manual",
          e.Auto = "auto",
          e);

      }({}),
      RefreshTimeoutOptionEnum = function (e) {
        return (
          e.Never = "never",
          e.Manual = "manual",
          e.Auto = "auto",
          e);

      }({}),
      AppearanceEnum = function (e) {
        return (
          e.Always = "always",
          e.Execute = "execute",
          e.InteractionOnly = "interaction-only",
          e);

      }({}),
      ExecutionModeEnum = function (e) {
        return e.Render = "render", e.Execute = "execute", e;
      }({}),
      ExecuteEventEnum = function (e) {
        return e.Execute = "execute", e;
      }({}),
      TriggerEnum = function (e) {
        return (
          e.New = "new",
          e.CrashedRetry = "crashed_retry",
          e.FailureRetry = "failure_retry",
          e.StaleExecute = "stale_execute",
          e.AutoExpire = "auto_expire",
          e.AutoTimeout = "auto_timeout",
          e.ManualRefresh = "manual_refresh",
          e.Api = "api",
          e.CheckDelays = "check_delays",
          e.UpgradeReload = "upgrade_reload",
          e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux",
          e.JsCookiesMissingAux = "js_cookies_missing_aux",
          e.RedirectingTextOverrun = "redirecting_text_overrun",
          e);

      }({});
    var truncateTagName = function (t) {
      var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
      return t.length > r ? t.slice(0, r) : t;
    };
    function domPathSegment(e) {
      if (!e) return "-";
      var t = function (n, a) {
        if (!n || n.tagName === "BODY") return a;
        for (var u = 1, l = n.previousElementSibling; l;)
        l.tagName === n.tagName && u++, l = l.previousElementSibling;
        var d = truncateTagName(n.tagName.toLowerCase()),
          f = "".concat(d, "[").concat(u, "]");
        return t(n.parentElement, "/".concat(f).concat(a));
      };
      return t(e, "");
    }
    function ha(e) {
      if (!e) return "";
      var t = e.getBoundingClientRect();
      return "".concat(t.top, "|").concat(t.right);
    }
    var qi = {
      button: "b",
      checkbox: "c",
      email: "e",
      hidden: "h",
      number: "n",
      password: "p",
      radio: "r",
      select: "sl",
      submit: "s",
      text: "t",
      textarea: "ta"
    };
    function Ji(e) {
      return (
        instanceOf(e, HTMLInputElement) ||
        instanceOf(e, HTMLSelectElement) ||
        instanceOf(e, HTMLTextAreaElement) ||
        instanceOf(e, HTMLButtonElement));

    }
    function Vr(e) {
      return toConsumableArray(e.querySelectorAll("input, select, textarea, button")).filter(
        Ji
      );
    }
    function va(e) {
      return toConsumableArray(e.querySelectorAll("a")).filter(function (t) {
        return instanceOf(t, HTMLAnchorElement);
      });
    }
    function _a(e) {
      var t;
      if (!e) return "";
      var r = e.closest("form");
      if (!r) return "nf";
      var n = Vr(r),
        a = n.
        slice(0, 20).
        map(function (l) {
          var d;
          return (d = qi[l.type]) !== null && d !== void 0 ? d : "-";
        }).
        join(""),
        u = [
        "m:".concat(
          (t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""
        ),
        "f:".concat(n.length),
        a].
        join("|");
      return u;
    }
    var Br = "c",
      qr = "cp",
      Jr = "ct",
      jr = "l",
      Kr = "nl",
      Hr = "n",
      zr = "r",
      Gr = "s",
      ji = "u",
      Xr = "up",
      Ki = "c",
      zi = "f",
      Wr = "n",
      Gi = "d",
      Xi = "g",
      ar = "n",
      Yi = "x",
      Qi = "p",
      $i = "b",
      Zi = "c",
      eo = "e",
      ir = "n",
      to = "s",
      ut = 20,
      ro = 512,
      ma = 99,
      Ee,
      no = (
      Ee = {},
      defineProperty(
        Ee,
        Br,
        [
        2071475277, 2531075807, 2087764529, 2650702126, 897792407,
        1900861264, 193440998, 181887339]

      ),
      defineProperty(Ee, qr, [3710748438, 194507255, 2123698751, 2088097853]),
      defineProperty(Ee, Jr, [3716925445, 1236122734, 1917612522]),
      defineProperty(Ee, jr, [173246534, 1422232710, 2984385681, 2172846769]),
      defineProperty(Ee, Kr, [517084052, 3937470477]),
      defineProperty(Ee, zr, [194507792, 1354128738, 1385023551]),
      defineProperty(
        Ee,
        Gr,
        [2172845875, 2984384787, 2901189036, 3027005952, 2088000679]
      ),
      defineProperty(Ee, Xr, [1759493702, 1322218894]),
      Ee);
    function Ue(e) {
      var t;
      return (t = no[e]) !== null && t !== void 0 ? t : [];
    }
    function le(e) {
      return (e != null ? e : "").slice(0, ro).toLowerCase();
    }
    function Be(e) {
      return djb2Hash(e);
    }
    function ao(e) {
      for (var t = [], r = "", n = 0; n < e.length; n++) {
        var a = e.charCodeAt(n),
          u = a >= 97 && a <= 122 || a >= 48 && a <= 57;
        if (u) {
          r += e.charAt(n);
          continue;
        }
        r.length > 0 && (t.push(r), r = "");
      }
      r.length > 0 && t.push(r);
      for (var l = new Set(), d = 0; d < t.length; d++)
      l.add(Be(t[d])),
      d + 1 < t.length && l.add(Be("".concat(t[d], " ").concat(t[d + 1])));
      return l;
    }
    function Ve(e, t) {
      return t.some(function (r) {
        return e.has(r);
      });
    }
    function nr(e) {
      return e > ma ? "".concat(ma, "+") : String(e);
    }
    function or(e) {
      if (instanceOf(e, HTMLSelectElement)) return "sl";
      if (instanceOf(e, HTMLTextAreaElement)) return "ta";
      if (instanceOf(e, HTMLButtonElement)) {
        var t = Be(e.type);
        return t === 2139762449 ? "s" : t === 194507792 ? "rs" : "b";
      }
      switch (Be(e.type)) {
        case 1516724467:
          return "b";
        case 2071469654:
          return "c";
        case 165454089:
          return "e";
        case 2087597251:
          return "f";
        case 1576159471:
          return "h";
        case 1682699846:
          return "n";
        case 1569157018:
          return "p";
        case 194663892:
          return "r";
        case 2158674347:
          return "se";
        case 2139762449:
          return "s";
        case 193421944:
          return "tel";
        case 193422222:
          return "u";
        default:
          return "t";
      }
    }
    function io(e) {
      var t = e.getAttribute("action");
      if (t === null || t === "") return eo;
      try {
        return new URL(t, window.location.href).origin ===
        window.location.origin ?
        to :
        Zi;
      } catch (r) {
        return $i;
      }
    }
    function oo(e) {
      var t = e.getAttribute("method"),
        r = le(t === null || t === "" ? "get" : t),
        n = Be(r);
      return n === 193411891 ?
      Xi :
      n === 2088097853 ?
      Qi :
      n === 1125889741 ?
      Gi :
      Yi;
    }
    function ba(e) {
      if (e === null || e === "") return "";
      try {
        return new URL(e, window.location.href).pathname;
      } catch (t) {
        return "";
      }
    }
    function Ea(e) {
      var t = [],
        r = !0,
        n = !1,
        a = void 0;
      try {
        for (
        var u = e.attributes[Symbol.iterator](), l;
        !(r = (l = u.next()).done);
        r = !0)
        {
          var d = l.value;
          [
          2203664931, 2087944093, 2087876002, 5861160, 247325877, 3566271494].
          indexOf(Be(d.name)) !== -1 && t.push(le(d.value));
        }
      } catch (f) {
        n = !0, a = f;
      } finally {
        try {
          !r && u.return != null && u.return();
        } finally {
          if (n) throw a;
        }
      }
      return (
        instanceOf(e, HTMLButtonElement) ?
        t.push(le(e.value), le(e.textContent)) :
        instanceOf(e, HTMLInputElement) &&
        [1516724467, 2139762449].indexOf(Be(e.type)) !== -1 &&
        t.push(le(e.value)),
        t);

    }
    function uo(e, t) {
      var r = [],
        n = ba(e.getAttribute("action"));
      r.push(
        le(e.getAttribute("id")),
        le(e.getAttribute("class")),
        le(e.getAttribute("name")),
        le(n)
      );
      var a = !0,
        u = !1,
        l = void 0;
      try {
        for (
        var d = t.slice(0, ut)[Symbol.iterator](), f;
        !(a = (f = d.next()).done);
        a = !0)
        {
          var s = f.value,
            m;
          (m = r).push.apply(m, toConsumableArray(Ea(s)));
        }
      } catch (I) {
        u = !0, l = I;
      } finally {
        try {
          !a && d.return != null && d.return();
        } finally {
          if (u) throw l;
        }
      }
      var E = !0,
        S = !1,
        O = void 0;
      try {
        for (
        var b = toConsumableArray(e.querySelectorAll("label")).
          slice(0, ut)[
          Symbol.iterator](),
          A;
        !(E = (A = b.next()).done);
        E = !0)
        {
          var P = A.value;
          r.push(le(P.textContent));
        }
      } catch (I) {
        S = !0, O = I;
      } finally {
        try {
          !E && b.return != null && b.return();
        } finally {
          if (S) throw O;
        }
      }
      return r.join(" ");
    }
    function lo(e, t, r) {
      var n = [];
      n.push(le(e.getAttribute("id")), le(e.getAttribute("class")));
      var a = !0,
        u = !1,
        l = void 0;
      try {
        for (
        var d = t.slice(0, ut)[Symbol.iterator](), f;
        !(a = (f = d.next()).done);
        a = !0)
        {
          var s = f.value,
            m;
          (m = n).push.apply(m, toConsumableArray(Ea(s)));
        }
      } catch (M) {
        u = !0, l = M;
      } finally {
        try {
          !a && d.return != null && d.return();
        } finally {
          if (u) throw l;
        }
      }
      var E = !0,
        S = !1,
        O = void 0;
      try {
        for (
        var b = r.slice(0, ut)[Symbol.iterator](), A;
        !(E = (A = b.next()).done);
        E = !0)
        {
          var P = A.value,
            I = ba(P.getAttribute("href"));
          n.push(le(P.textContent), le(I));
        }
      } catch (M) {
        S = !0, O = M;
      } finally {
        try {
          !E && b.return != null && b.return();
        } finally {
          if (S) throw O;
        }
      }
      return n.join(" ");
    }
    function Ta(e, t) {
      var r = !1,
        n = !1,
        a = !1,
        u = 0,
        l = !0,
        d = !1,
        f = void 0;
      try {
        for (
        var s = e[Symbol.iterator](), m;
        !(l = (m = s.next()).done);
        l = !0)
        {
          var E = m.value;
          if (instanceOf(E, HTMLTextAreaElement)) {
            a = !0;
            continue;
          }
          if (instanceOf(E, HTMLInputElement)) {
            var S = Be(E.type);
            S === 165454089 ?
            r = !0 :
            S === 2087597251 ?
            n = !0 :
            S === 1569157018 && u++;
          }
        }
      } catch (I) {
        d = !0, f = I;
      } finally {
        try {
          !l && s.return != null && s.return();
        } finally {
          if (d) throw f;
        }
      }
      var O = u > 0,
        b = ao(t),
        A = Ve(b, Ue(jr)),
        P = Ve(b, Ue(zr));
      return P && !A && (r || O) ?
      zr :
      O && u <= 1 && A ?
      jr :
      O && (u > 1 || Ve(b, Ue(Gr))) ?
      Gr :
      Ve(b, Ue(Br)) ?
      Br :
      n || Ve(b, Ue(Xr)) ?
      Xr :
      a && Ve(b, Ue(qr)) ?
      qr :
      Ve(b, Ue(Jr)) ?
      Jr :
      r && Ve(b, Ue(Kr)) ?
      Kr :
      ji;
    }
    function At(e, t, r, n, a, u, l, d) {
      return [e, t, r, nr(n), nr(a), nr(u), nr(l), d].join("|");
    }
    function ga(e, t) {
      return t.filter(function (r) {
        return e.contains(r);
      });
    }
    function formSegmentFingerprint(e, t, r) {
      var n = t.filter(function (l) {
          return instanceOf(l, HTMLInputElement) && l.type === "hidden";
        }).length,
        a = t.filter(function (l) {
          return instanceOf(l, HTMLButtonElement) || or(l) === "s";
        }).length,
        u = t.slice(0, ut).map(or).join(",");
      return {
        pac: Ta(t, lo(e, t, r)),
        pad: At(Ki, ar, ir, t.length, n, a, r.length, u)
      };
    }
    function formFieldFingerprint(e) {
      if (!e) return { pac: Hr, pad: At(Wr, ar, ir, 0, 0, 0, 0, "") };
      var t = e.closest("form");
      if (!t) {
        for (
        var r = [], n = e.parentElement, a = 0;
        n && n !== document.body && a < 5;
        n = n.parentElement, a++)

        r.push(n);
        if (r.length === 0)
        return { pac: Hr, pad: At(Wr, ar, ir, 0, 0, 0, 0, "") };
        var u = r[r.length - 1],
          l = Vr(u).filter(function (k) {
            return !e.contains(k);
          }),
          d = va(u).filter(function (k) {
            return !e.contains(k);
          }),
          f = null,
          s = !0,
          m = !1,
          E = void 0;
        try {
          for (
          var S = r[Symbol.iterator](), O;
          !(s = (O = S.next()).done);
          s = !0)
          {
            var b = O.value,
              A = ga(b, l),
              P = ga(b, d);
            if (A.length > 0 || P.length > 0) {
              f = formSegmentFingerprint(b, A, P);
              break;
            }
          }
        } catch (k) {
          m = !0, E = k;
        } finally {
          try {
            !s && S.return != null && S.return();
          } finally {
            if (m) throw E;
          }
        }
        return f !== null ?
        f :
        { pac: Hr, pad: At(Wr, ar, ir, 0, 0, 0, 0, "") };
      }
      var I = Vr(t),
        M = I.filter(function (k) {
          return instanceOf(k, HTMLInputElement) && k.type === "hidden";
        }).length,
        C = I.filter(function (k) {
          return instanceOf(k, HTMLButtonElement) || or(k) === "s";
        }).length,
        j = va(t).length,
        U = I.slice(0, ut).map(or).join(",");
      return {
        pac: Ta(I, uo(t, I)),
        pad: At(zi, oo(t), io(t), I.length, M, C, j, U)
      };
    }
    function so(e) {
      return instanceOf(e, Element) ? e : e.parentElement;
    }
    function fo(e) {
      return "querySelectorAll" in e;
    }
    function Sa(e, t) {
      var r,
        n = t == null ? void 0 : t.shouldIgnoreElement;
      if (n !== void 0) {
        var a = instanceOf(e, Element) ? [e] : [];
        (r = a).push.apply(r, toConsumableArray(e.querySelectorAll("*")));
        var u = new Set(),
          l,
          d = !0,
          f = !1,
          s = void 0;
        try {
          for (
          var m = a[Symbol.iterator](), E;
          !(d = (E = m.next()).done);
          d = !0)
          {
            var S = E.value;
            if (l !== void 0) {
              if (l.contains(S)) {
                u.add(S);
                continue;
              }
              l = void 0;
            }
            n(S) && (u.add(S), l = S);
          }
        } catch (O) {
          f = !0, s = O;
        } finally {
          try {
            !d && m.return != null && m.return();
          } finally {
            if (f) throw s;
          }
        }
        return u;
      }
    }
    function Ia(e, t) {
      var r = so(e);
      return r === null || t === void 0 ? !1 : t.has(r);
    }
    function wa(e, t) {
      var r = Sa(e, t);
      return toConsumableArray(e.querySelectorAll("*")).filter(function (n) {
        return !Ia(n, r);
      }).length;
    }
    function buildDomFingerprint(e, t, r, n) {
      for (
      var a = "",
        u = fo(e) ? Sa(e, n) : void 0,
        l = document.createNodeIterator(
          e,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        ),
        d = l.nextNode();
      d !== null && a.length < r;)
      {
        if (!Ia(d, u)) {
          for (var f = 0, s = d; s !== null && s !== e;)
          f++, s = s.parentNode;
          if (f <= t)
          if (instanceOf(d, Element)) {
            var m = d;
            a += truncateTagName(m.tagName.toLowerCase());
            var E = !0,
              S = !1,
              O = void 0;
            try {
              for (
              var b = m.attributes[Symbol.iterator](), A;
              !(E = (A = b.next()).done);
              E = !0)
              {
                var P = A.value,
                  I;
                (n == null ||
                (I = n.shouldIgnoreAttribute) === null ||
                I === void 0 ?
                void 0 :
                I.call(n, m, P)) !== !0 && (
                a += "_".concat(truncateTagName(P.name, 2)));
              }
            } catch (M) {
              S = !0, O = M;
            } finally {
              try {
                !E && b.return != null && b.return();
              } finally {
                if (S) throw O;
              }
            }
            a += ">";
          } else d.nodeType === Node.TEXT_NODE && (a += "-t");
        }
        d = l.nextNode();
      }
      return a.slice(0, r);
    }
    function djb2Hash(e) {
      if (typeof e != "string")
      throw new TypeError(
        "djb2: expected string, got ".concat(
          typeof e == "undefined" ? "undefined" : typeOf(e)
        )
      );
      for (var t = 5381, r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r);
        t = t * 33 ^ n;
      }
      return t >>> 0;
    }
    function getPrototypeOf(e) {
      return (
        getPrototypeOf = Object.setPrototypeOf ?
        Object.getPrototypeOf :
        function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        },
        getPrototypeOf(e));

    }
    function isNativeReflectConstruct() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (isNativeReflectConstruct = function () {
        return !!e;
      })();
    }
    function createSuper(e) {
      if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
      return e;
    }
    function possibleConstructorReturn(e, t) {
      return t && (typeOf(t) === "object" || typeof t == "function") ? t : createSuper(e);
    }
    function classCallCheck(e, t, r) {
      return (
        t = getPrototypeOf(t),
        possibleConstructorReturn(
          e,
          isNativeReflectConstruct() ?
          Reflect.construct(t, r || [], getPrototypeOf(e).constructor) :
          t.apply(e, r)
        ));

    }
    function setPrototypeOf(e, t) {
      if (!instanceOf(e, t)) throw new TypeError("Cannot call a class as a function");
    }
    function inherits(e, t) {
      return (
        inherits =
        Object.setPrototypeOf ||
        function (n, a) {
          return n.__proto__ = a, n;
        },
        inherits(e, t));

    }
    function wrapNativeSuper(e, t) {
      if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function"
      );
      e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      }),
      t && inherits(e, t);
    }
    function assertThisInitialized(e, t, r) {
      return (
        isNativeReflectConstruct() ?
        assertThisInitialized = Reflect.construct :
        assertThisInitialized = function (a, u, l) {
          var d = [null];
          d.push.apply(d, u);
          var f = Function.bind.apply(a, d),
            s = new f();
          return l && inherits(s, l.prototype), s;
        },
        assertThisInitialized.apply(null, arguments));

    }
    function protoOf(e) {
      return Function.toString.call(e).indexOf("[native code]") !== -1;
    }
    function wrapError(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        wrapError = function (n) {
          if (n === null || !protoOf(n)) return n;
          if (typeof n != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
          if (typeof t != "undefined") {
            if (t.has(n)) return t.get(n);
            t.set(n, a);
          }
          function a() {
            return assertThisInitialized(n, arguments, getPrototypeOf(this).constructor);
          }
          return (
            a.prototype = Object.create(n.prototype, {
              constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }),
            inherits(a, n));

        },
        wrapError(e));

    }
    var TurnstileError = function (e) {
      "use strict";
      wrapNativeSuper(t, e);
      function t(r, n) {
        setPrototypeOf(this, t);
        var a;
        return (
          a = classCallCheck(this, t, [r]),
          defineProperty(a, "code", void 0),
          a.name = "TurnstileError",
          a.code = n,
          a);

      }
      return t;
    }(wrapError(Error));
    var SCRIPT_SRC_REGEX = RegExp(
        "^https:\\/\\/(?:challenges(?:\\.fed)?\\.cloudflare\\.com|challenges\\.cloudflare-cn\\.com)\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js",
        "u"
      ),
      Vl = RegExp("\\/turnstile\\/v0(?:\\/.*)?\\/api\\.js", "u");
    function x(e, t) {
      var r = "[Cloudflare Turnstile] ".concat(e, ".");
      throw new TurnstileError(r, t);
    }
    function logError(e) {
      console.warn("[Cloudflare Turnstile] ".concat(e));
    }
    function Pa(e, t) {
      try {
        return t();
      } catch (r) {
        try {
          logError("Uncaught error in ".concat(e, ": ").concat(String(r)));
        } catch (n) {}
        return;
      }
    }
    function Le(e, t) {
      if (t !== void 0)
      return function () {
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
        Pa(e, function () {
          t.apply(void 0, toConsumableArray(n));
        });
      };
    }
    function Qr(e) {
      if (e !== void 0)
      return function (t) {
        return (
          Pa("error-callback", function () {
            return e(t);
          }) === !0);

      };
    }
    function kt(e) {
      return e.startsWith(WIDGET_ID_PREFIX) ? e.slice(WIDGET_ID_PREFIX.length) : null;
    }
    function Y(e) {
      return "".concat(WIDGET_ID_PREFIX).concat(e);
    }
    function lt(e, t) {
      var r = !0,
        n = !1,
        a = void 0;
      try {
        for (
        var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l;
        !(r = (l = u.next()).done);
        r = !0)
        {
          var d = l.value,
            f = Object.getOwnPropertyDescriptor(e, d),
            s = f === void 0 ? void 0 : Reflect.get(f, "value");
          if (t(s)) return s;
        }
      } catch (m) {
        n = !0, a = m;
      } finally {
        try {
          !r && u.return != null && u.return();
        } finally {
          if (n) throw a;
        }
      }
    }
    function findElementByRegex() {
      var e = SCRIPT_SRC_REGEX,
        t = document.currentScript;
      if (instanceOf(t, HTMLScriptElement) && e.test(t.src)) return t;
      var r = document.querySelectorAll("script"),
        n = !0,
        a = !1,
        u = void 0;
      try {
        for (
        var l = r[Symbol.iterator](), d;
        !(n = (d = l.next()).done);
        n = !0)
        {
          var f = d.value;
          if (instanceOf(f, HTMLScriptElement) && e.test(f.src)) return f;
        }
      } catch (s) {
        a = !0, u = s;
      } finally {
        try {
          !n && l.return != null && l.return();
        } finally {
          if (a) throw u;
        }
      }
    }
    function findOwnScriptTag() {
      var e = findElementByRegex();
      e === void 0 &&
      x(
        "Could not find Turnstile valid script tag, some features may not be available",
        43777
      );
      var t = e.src,
        r;
      try {
        r = new URL(t);
      } catch (u) {
        x("Could not parse Turnstile script tag URL", 43777);
      }
      var n = {
        loadedAsync: !1,
        params: new URLSearchParams(),
        src: t,
        url: r
      };
      (e.async || e.defer) && (n.loadedAsync = !0);
      var a = t.split("?");
      return a.length > 1 && (n.params = new URLSearchParams(a[1])), n;
    }
    function nowMs() {
      return Date.now();
    }
    function lr(e) {
      e != null && e.iframeHost && e.iframeHost.remove();
    }
    var Mt = 1,
      Nt = 2,
      Me = 0,
      $e = 1,
      ct = 2,
      Je = 0,
      dt = 1,
      je = 2,
      Fa = Symbol();
    function cr(e, t) {
      Object.defineProperty(e, Fa, {
        configurable: !0,
        enumerable: !1,
        value: t
      });
    }
    function Ha(e, t) {
      var r = Object.getOwnPropertyDescriptor(e, Fa),
        n = r === void 0 ? void 0 : Reflect.get(r, "value");
      return t(n) ? n : lt(e, t);
    }
    function vo(e) {
      return (
        Array.isArray(e) &&
        e.length === 3 && (
        typeof e[0] == "string" || e[0] === void 0) && (
        typeof e[1] == "boolean" || e[1] === void 0) &&
        typeof e[2] == "boolean");

    }
    function mo(e) {
      return (
        Array.isArray(e) &&
        e.length === 3 && (
        typeof e[0] == "string" || e[0] === void 0) && (
        e[1] === Mt || e[1] === Nt || e[1] === void 0) &&
        typeof e[2] == "boolean");

    }
    function st(e) {
      var t = Ha(e, vo);
      if (t !== void 0) return cr(e, t), t;
      var r = [void 0, void 0, !1];
      return cr(e, r), r;
    }
    function ft(e) {
      var t = Ha(e, mo);
      if (t !== void 0) return cr(e, t), t;
      var r = [void 0, void 0, !1];
      return cr(e, r), r;
    }
    function Pt(e, t) {
      var r = ft(e),
        n = r[Je];
      return r[je] && n !== void 0 && n !== "" ? n : t;
    }
    var FeedbackKindEnum = function (e) {
      return (
        e.Failure = "failure",
        e.Verifying = "verifying",
        e.Overrunning = "overrunning",
        e.TimeCheckCachedWarning = "timecheckcachedwarning",
        e.UnsupportedBrowser = "unsupportedbrowser",
        e.InvalidDomain = "invaliddomain",
        e.InvalidSitekey = "invalidsitekey",
        e.Custom = "custom",
        e);

    }({});
    var dr = ".";
    function isNameKilled(e, t) {
      return t.kills === void 0 ?
      !1 :
      "".
      concat(dr).
      concat(t.kills).
      concat(dr).
      includes("".concat(dr).concat(e).concat(dr));
    }
    function pt(e) {
      try {
        return new URL(e, window.location.href).origin;
      } catch (t) {
        return;
      }
    }
    function $r(e, t, r) {
      if (r === void 0 || r === "") {
        if (0) var n;
        return;
      }
      e == null || e.postMessage(t, r);
    }
    function postToIframe(e, t, r) {
      $r(e.contentWindow, t, r);
    }
    var Ua = 16,
      go = 1,
      Va = 0,
      Ba = 1,
      qa = 2,
      Ja = 3,
      ja = 4,
      Ka = 5,
      za = 6,
      Ga = 7;
    function yo(e, t) {
      try {
        var r = new Error().stack;
        return typeof r != "string" ?
        void 0 :
        [e, Math.max(0, Math.floor(nowMs() - t)), r, go];
      } catch (n) {
        return;
      }
    }
    function buildUsageEntry(e, t) {
      return yo(e, t.turnstileLoadInitTimeTsMs);
    }
    function Xa(e) {
      return e[3] === void 0 ? [e[0], e[1], e[2]] : [e[0], e[1], e[2], e[3]];
    }
    function buildUsageStringAggregate(e) {
      var t;
      return (t = e == null ? void 0 : e.slice(-Ua).map(Xa)) !== null &&
      t !== void 0 ?
      t :
      [];
    }
    function trackUsageCall(e, t) {
      if (!t) return !1;
      if (e.length > 0) {
        var r = e[e.length - 1];
        if (r[0] === t[0] && r[2] === t[2]) {
          var n,
            a,
            u =
            ((n = r[3]) !== null && n !== void 0 ? n : 1) + (
            (a = t[3]) !== null && a !== void 0 ? a : 1);
          return u === r[3] ? !1 : (r[3] = u, !0);
        }
      }
      for (e.push(Xa(t)); e.length > Ua;) e.shift();
      return !0;
    }
    function checkNameKilled(e) {
      return isNameKilled("gcs", e);
    }
    function Ft(e, t) {
      return checkNameKilled(e) ? !1 : trackUsageCall(e.gcs, t);
    }
    function buildUsageString(e) {
      var t = buildUsageStringAggregate(e.gcs);
      return t.length > 0 ? t : void 0;
    }
    function getUsageTokens(e) {
      if (!checkNameKilled(e)) return buildUsageString(e);
    }
    function sendGcsEvent(e, t) {
      if (t.isInitialized) {
        var r = getUsageTokens(t);
        if (r) {
          var n = t.shadow.querySelector("#".concat(Y(e)));
          n &&
          postToIframe(
            n,
            { cs: r, event: "gcs", source: SOURCE_TAG, widgetId: e },
            t.iframeOrigin
          );
        }
      }
    }
    function sendUsageToIframe(e, t, r) {
      var n = Ft(t, r);
      return n && sendGcsEvent(e, t), n;
    }
    var $a = 12,
      _o = "fivs",
      bo = "tf",
      Ya = "...";
    function postToWidgetWindow(e) {
      return e.iframeHost ?
      e.iframeHost :
      e.shadow.host === e.wrapper ?
      e.wrapper :
      x("Turnstile Initialization Error", 3606);
    }
    function Eo(e) {
      return instanceOf(e.iframeHost, HTMLDivElement) && e.iframeHost !== e.wrapper;
    }
    function tn(e) {
      return isNameKilled(_o, e);
    }
    function vr(e) {
      if (Eo(e)) {
        var t = e.iframeHost,
          r = e.mode === ModeEnum.Invisible && !tn(e) ? document.body : e.wrapper;
        t.parentNode !== r && r.appendChild(t);
      }
    }
    function computeVisibilityInfo(e) {
      var t = e.getBoundingClientRect();
      return {
        h: Math.round(t.height),
        w: Math.round(t.width),
        x: Math.round(t.left),
        y: Math.round(t.top)
      };
    }
    function walkAncestors(e) {
      return (
        e.w > 0 &&
        e.h > 0 &&
        e.x + e.w > 0 &&
        e.y + e.h > 0 &&
        e.x < window.innerWidth &&
        e.y < window.innerHeight);

    }
    function ancestorVisibilityFast(e) {
      return e.isConnected ? walkAncestors(computeVisibilityInfo(e)) : !1;
    }
    function ei(e) {
      var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 80;
      return e.length <= t ?
      e :
      "".concat(e.slice(0, t - Ya.length)).concat(Ya);
    }
    function nn(e, t) {
      return e ?
      e === t.wrapper ?
      "wrapper" :
      e === t.iframeHost ?
      "iframe-host" :
      e === t.iframe ?
      "iframe" :
      e === document.body ?
      "body" :
      e === document.documentElement ?
      "document-element" :
      e === t.wrapper.parentElement ?
      "wrapper-parent" :
      e.contains(t.wrapper) || e.contains(t.iframeHost) ?
      "ancestor" :
      "other" :
      null;
    }
    function Qa(e) {
      var t = [];
      e.style.display === "none" && t.push("dn"),
      (e.style.visibility === "hidden" ||
      e.style.visibility === "collapse") &&
      t.push(e.style.visibility === "hidden" ? "vh" : "vc");
      var r = Number(e.style.opacity);
      return (
        Number.isFinite(r) && r <= 0.01 && t.push("op"),
        e.style.contentVisibility === "hidden" && t.push("cv"),
        t);

    }
    function xo(e) {
      var t = [];
      return (
        e.connected || t.push("dt"),
        (e.rect.w === 0 || e.rect.h === 0) && t.push("zs"),
        t);

    }
    function readComputedTransform(e) {
      if (e === "" || e === "none") return null;
      var t;
      try {
        t = new DOMMatrixReadOnly(e);
      } catch (r) {
        return null;
      }
      return t.a === 1 && t.b === 0 && t.c === 0 && t.d === 1 ?
      [t.e, t.f] :
      null;
    }
    function isTransformOffscreen(e, t, r) {
      for (var n = e, a = 0; n && a < $a;) {
        var u = pr(n, t, r),
          l = readComputedTransform(u.style.transform);
        if (
        l &&
        u.rect.w > 0 &&
        u.rect.h > 0 &&
        !u.inViewport &&
        walkAncestors(defineProperties(objectSpread({}, u.rect), { x: u.rect.x - l[0], y: u.rect.y - l[1] })))

        return mr(u, [bo]);
        n = n.parentElement, a += 1;
      }
      return null;
    }
    function ti(e, t) {
      var r,
        n = computeVisibilityInfo(e),
        a = window.getComputedStyle(e);
      return {
        connected: e.isConnected,
        element: (r = nn(e, t)) !== null && r !== void 0 ? r : "unknown",
        inViewport: e.isConnected && walkAncestors(n),
        rect: n,
        style: {
          contentVisibility: a.contentVisibility,
          display: a.display,
          opacity: a.opacity,
          position: a.position,
          transform: ei(a.transform),
          visibility: a.visibility
        }
      };
    }
    function ri(e, t) {
      var r,
        n = window.getComputedStyle(e);
      return {
        connected: e.isConnected,
        element: (r = nn(e, t)) !== null && r !== void 0 ? r : "unknown",
        inViewport: !1,
        rect: { h: 0, w: 0, x: 0, y: 0 },
        style: {
          contentVisibility: n.contentVisibility,
          display: n.display,
          opacity: n.opacity,
          position: n.position,
          transform: ei(n.transform),
          visibility: n.visibility
        }
      };
    }
    function pr(e, t, r) {
      var n = r.get(e);
      if (n) return n;
      var a = ti(e, t);
      return r.set(e, a), a;
    }
    function mr(e, t) {
      return t.length === 0 ? null : { element: ai(e.element), reasons: t };
    }
    function checkVisibleForRender(e, t, r, n) {
      var a =
        arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        u = Qa(t);
      if (t.connected || u.push("dt"), u.length > 0) return mr(t, u);
      for (var l = e.parentElement, d = 0; l && d < $a;) {
        var f = n == null ? void 0 : n.get(l);
        f || (f = a ? ri(l, r) : ti(l, r), n == null || n.set(l, f));
        var s = Qa(f);
        if (s.length > 0) return mr(f, s);
        l = l.parentElement, d += 1;
      }
      return null;
    }
    function collectVisibilityReasons(e, t, r, n) {
      var a = checkVisibleForRender(e, t, r, n);
      if (a) return a;
      if (!t.inViewport) {
        var u = isTransformOffscreen(e, r, n);
        if (u) return u;
      }
      return mr(t, xo(t));
    }
    function wo(e) {
      return e.mode === ModeEnum.Invisible ?
      { expectedHidden: !0, reason: "mi" } :
      e.params.appearance === AppearanceEnum.InteractionOnly ?
      { expectedHidden: !0, reason: "ai" } :
      e.params.appearance === AppearanceEnum.Execute && !e.isExecuting ?
      { expectedHidden: !0, reason: "ae" } :
      { expectedHidden: !1, reason: null };
    }
    function Ro(e, t) {
      return t === e.wrapper ?
      "wrapper" :
      t.isConnected ?
      t.parentElement === e.wrapper ?
      "wrapper" :
      t.parentElement === document.body ?
      "body" :
      "other" :
      "detached";
    }
    function ai(e) {
      switch (e) {
        case null:
          return "u";
        case "ancestor":
          return "a";
        case "body":
          return "b";
        case "detached":
          return "d";
        case "document-element":
          return "r";
        case "iframe":
          return "i";
        case "iframe-host":
          return "h";
        case "other":
          return "o";
        case "wrapper":
          return "w";
        case "wrapper-parent":
          return "p";
        default:
          return "u";
      }
    }
    function Ao(e) {
      switch (e) {
        case "body":
          return "b";
        case "detached":
          return "d";
        case "other":
          return "o";
        case "wrapper":
          return "w";
        default:
          return "u";
      }
    }
    function en(e, t) {
      if (!t) return null;
      var r;
      switch (e) {
        case "iframe":
          r = "i";
          break;
        case "iframeHost":
          r = "h";
          break;
        case "wrapper":
          r = "w";
          break;
        default:
          r = "u";
          break;
      }
      return "".
      concat(r, ":").
      concat(t.element, ":").
      concat(t.reasons.join("."));
    }
    function widgetVisibilityInfo(e, t) {
      var r,
        n,
        a = postToWidgetWindow(e),
        u = { iframe: t, iframeHost: a, wrapper: e.wrapper },
        l = wo(e),
        d = Ro(e, a),
        f = nn(a.parentElement, u),
        s = {
          height: window.innerHeight,
          visibilityState: document.visibilityState,
          width: window.innerWidth
        };
      if (l.expectedHidden) {
        var m, E;
        return {
          appearance:
          (m = e.params.appearance) !== null && m !== void 0 ? m : AppearanceEnum.Always,
          expectedHidden: !0,
          expectedHiddenReason: l.reason,
          hostParent: f,
          isExecuting: e.isExecuting,
          mode: (E = e.mode) !== null && E !== void 0 ? E : null,
          mount: d,
          reasons: [],
          unexpectedHidden: !1,
          viewport: s
        };
      }
      var S = new Map(),
        O = pr(e.wrapper, u, S),
        b = pr(a, u, S),
        A = pr(t, u, S),
        P = collectVisibilityReasons(e.wrapper, O, u, S),
        I = collectVisibilityReasons(a, b, u, S),
        M = collectVisibilityReasons(t, A, u, S),
        C = [
        d === "wrapper" ? null : "m:".concat(Ao(d), ":").concat(ai(f)),
        en("wrapper", P),
        en("iframeHost", I),
        en("iframe", M)].
        filter(function (j) {
          return j !== null;
        });
      return {
        appearance:
        (r = e.params.appearance) !== null && r !== void 0 ? r : AppearanceEnum.Always,
        expectedHidden: !1,
        expectedHiddenReason: null,
        hostParent: f,
        isExecuting: e.isExecuting,
        mode: (n = e.mode) !== null && n !== void 0 ? n : null,
        mount: d,
        reasons: toConsumableArray(new Set(C)),
        unexpectedHidden: C.length > 0,
        viewport: s
      };
    }
    function Oo(e, t) {
      var r = postToWidgetWindow(e);
      if (r.parentElement === document.body) return !1;
      if (!ancestorVisibilityFast(t)) return !0;
      var n = { iframe: t, iframeHost: r, wrapper: e.wrapper },
        a = new Map(),
        u = ri(r, n);
      return a.set(r, u), checkVisibleForRender(r, u, n, a, !0) !== null;
    }
    function oi(e, t) {
      if (e.mode !== ModeEnum.Invisible || tn(e)) {
        vr(e);
        return;
      }
      Oo(e, t) && vr(e);
    }
    function Co(e) {
      e.style.width = "1px",
      e.style.height = "1px",
      e.style.opacity = "0.01",
      e.style.position = "fixed",
      e.style.left = "0",
      e.style.top = "0",
      e.style.visibility = "visible",
      e.style.pointerEvents = "none",
      e.style.zIndex = "-1",
      e.setAttribute("tabindex", "-1"),
      e.setAttribute("aria-hidden", "true");
    }
    function ko(e) {
      e.style.width = "0",
      e.style.height = "0",
      e.style.opacity = "",
      e.style.position = "absolute",
      e.style.left = "",
      e.style.top = "",
      e.style.visibility = "hidden",
      e.style.pointerEvents = "",
      e.style.zIndex = "",
      e.setAttribute("tabindex", "-1"),
      e.setAttribute("aria-hidden", "true");
    }
    function an(e, t) {
      if (t.mode === void 0 || tn(t)) {
        ko(e);
        return;
      }
      Co(e);
    }
    function G(e, t) {
      return e.indexOf(t) !== -1;
    }
    var Lo = [
      "bg-bg",
      "da-dk",
      "de-de",
      "el-gr",
      "ja-jp",
      "ms-my",
      "ru-ru",
      "sk-sk",
      "sl-si",
      "sr-ba",
      "tl-ph",
      "uk-ua"],

      Mo = [
      "ar-eg",
      "es-es",
      "cs-cz",
      "fa-ir",
      "fr-fr",
      "hr-hr",
      "hu-hu",
      "id-id",
      "it-it",
      "lv-lv",
      "nb-no",
      "nl-nl",
      "pl-pl",
      "pt-br",
      "th-th",
      "tr-tr",
      "ro-ro"],

      DEFAULT_CHALLENGE_ORIGIN = "https://challenges.cloudflare.com",
      ALLOWED_ORIGINS = [
      DEFAULT_CHALLENGE_ORIGIN,
      "https://challenges.fed.cloudflare.com",
      "https://challenges.cloudflare-cn.com",
      "https://challenges-staging.cloudflare.com"];

    function yr(e, t, r) {
      var n,
        a = DEFAULT_CHALLENGE_ORIGIN,
        u =
        (n = r == null ? void 0 : r.origin) !== null && n !== void 0 ? n : a;
      if (t) {
        var l;
        return (l = e["base-url"]) !== null && l !== void 0 ? l : u;
      }
      return u;
    }
    function buildIframeUrl(e, t, r, n, a, u, l, d, f, s) {
      var m = yr(r, a, d),
        E = s !== void 0 && s !== "" ? s : u,
        S =
        E !== void 0 && E !== "" ?
        "h/".concat(encodeURIComponent(E), "/") :
        "",
        O = f !== void 0 && f !== "" ? "&".concat(f) : "",
        b = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
        A = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
      return "".
      concat(m, "/cdn-cgi/challenge-platform/").
      concat(S, "turnstile/f/av0/rch").
      concat(n, "/").
      concat(e, "/").
      concat(t, "/").
      concat(r.theme, "/").
      concat(b, "/").
      concat(l, "/").
      concat(r.size, "?lang=").
      concat(r.language).
      concat(A).
      concat(O);
    }
    var un = function (t) {
        var r,
          n,
          a,
          u,
          l = window.innerWidth < 400,
          d =
          t.state !== DisplayStateEnum.FailureFeedbackCode && (
          t.state === DisplayStateEnum.FailureFeedback ||
          t.state === DisplayStateEnum.FailureHavingTroubles ||
          t.errorCode === void 0 ||
          t.errorCode === 0),
          f = G(
            Lo,
            (r =
            (a = t.displayLanguage) === null || a === void 0 ?
            void 0 :
            a.toLowerCase()) !== null && r !== void 0 ?
            r :
            "nonexistent"
          ),
          s = G(
            Mo,
            (n =
            (u = t.displayLanguage) === null || u === void 0 ?
            void 0 :
            u.toLowerCase()) !== null && n !== void 0 ?
            n :
            "nonexistent"
          );
        return l ?
        No({
          isModeratelyVerbose: s,
          isSmallerFeedback: d,
          isVerboseLanguage: f
        }) :
        d && f ?
        "680px" :
        d && s ?
        "670px" :
        d ?
        "650px" :
        f ?
        "690px" :
        "680px";
      },
      No = function (t) {
        var r = t.isVerboseLanguage,
          n = t.isSmallerFeedback,
          a = t.isModeratelyVerbose;
        return n && r ?
        "660px" :
        n && a ?
        "620px" :
        n ?
        "600px" :
        r ?
        "770px" :
        a ?
        "740px" :
        "730px";
      };
    var FEEDBACK_ABORT_TIMEOUT_MS = 5e3,
      Do = "auto-troubleshoot-click";
    function Fo(e, t) {
      var r = yr(e.params, !1, t),
        n = Pt(e, "g"),
        a = n === void 0 ? "" : "h/".concat(encodeURIComponent(n), "/");
      return "".concat(r, "/cdn-cgi/challenge-platform/").concat(a, "fr");
    }
    var sendFeedbackReport = function (t, r, n, a, u) {
      var l, d, f, s, m, E, S;
      if (a === void 0 || a === "" || n === void 0 || n === "") return !1;
      var O = Fo(t, u),
        b = new FormData();
      b.append("consent", "on"),
      b.append("origin", r),
      b.append("issue", Do),
      b.append("description", ""),
      b.append("rayId", n),
      b.append(
        "sitekey",
        (l = t.params.sitekey) !== null && l !== void 0 ? l : ""
      ),
      b.append("rcV", (d = t.rcV) !== null && d !== void 0 ? d : ""),
      b.append(
        "cfChlOut",
        (f = t.cfChlOut) !== null && f !== void 0 ? f : ""
      ),
      b.append(
        "cfChlOutS",
        (s = t.cfChlOutS) !== null && s !== void 0 ? s : ""
      ),
      b.append("mode", (m = t.mode) !== null && m !== void 0 ? m : ""),
      b.append(
        "errorCode",
        String((E = t.errorCode) !== null && E !== void 0 ? E : 0)
      ),
      b.append("frMd", a),
      b.append(
        "displayLanguage",
        (S = t.displayLanguage) !== null && S !== void 0 ? S : ""
      );
      try {
        if (
        typeof navigator != "undefined" &&
        typeof navigator.sendBeacon == "function" &&
        navigator.sendBeacon(O, b))

        return !0;
      } catch (A) {
        logError(
          "auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(
            ln(A),
            ")"
          )
        );
      }
      try {
        return (
          fetch(
            O,
            objectSpread(
              { body: b, keepalive: !0, method: "POST", mode: "no-cors" },
              supportsAbortTimeout()
            )
          ),
          !0);

      } catch (A) {
        logError(
          "auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(
            ln(A),
            ")"
          )
        );
      }
      try {
        fetch(O, objectSpread({ body: b, method: "POST", mode: "no-cors" }, supportsAbortTimeout()));
      } catch (A) {
        logError("auto feedback report: all transports failed (".concat(ln(A), ")"));
      }
      return !1;
    };
    function supportsAbortTimeout() {
      return typeof AbortSignal == "undefined" ||
      typeof AbortSignal.timeout != "function" ?
      {} :
      { signal: AbortSignal.timeout(FEEDBACK_ABORT_TIMEOUT_MS) };
    }
    function ln(e) {
      return instanceOf(e, Error) ? e.message : "unknown error";
    }
    var hr = null,
      Wt = 0,
      fi = function () {
        if (Wt++, Wt === 1) {
          var t = document.querySelector('meta[http-equiv="refresh"]');
          t && (hr = t.getAttribute("content"), t.remove());
        }
      },
      pi = function () {
        if (Wt > 0 && Wt--, Wt === 0 && hr !== null) {
          var t = document.createElement("meta");
          t.httpEquiv = "refresh",
          t.content = hr,
          hr = null,
          document.head.appendChild(t);
        }
      },
      cn = Symbol(),
      Ho = "host-origin",
      mt = function (t) {
        t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(),
        t.feedbackPopup = void 0,
        t.feedbackPopupOrigin = void 0;
      };
    function vi(e) {
      return e.endsWith("-fr") ? e : "".concat(e, "-fr");
    }
    function mi(e) {
      var t,
        r,
        n,
        a =
        (n = document.querySelector("#".concat(e))) === null ||
        n === void 0 ||
        (r = n.parentElement) === null ||
        r === void 0 ||
        (t = r.parentElement) === null ||
        t === void 0 ?
        void 0 :
        t.parentElement;
      return instanceOf(a, HTMLDivElement) ? a : null;
    }
    function di(e) {
      if (!(
      (typeof e == "undefined" ? "undefined" : typeOf(e)) !== "object" ||
      e === null))
      {
        var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
          r = t === void 0 ? void 0 : Reflect.get(t, "value");
        if (typeof r == "function")
        return function () {
          Reflect.apply(r, void 0, []);
        };
      }
    }
    function gi(e) {
      var t,
        r = di(
          (t = Object.getOwnPropertyDescriptor(e, cn)) === null || t === void 0 ?
          void 0 :
          t.value
        );
      if (r) return r;
      var n = !0,
        a = !1,
        u = void 0;
      try {
        for (
        var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d;
        !(n = (d = l.next()).done);
        n = !0)
        {
          var f = d.value,
            s,
            m = di(
              (s = Object.getOwnPropertyDescriptor(e, f)) === null ||
              s === void 0 ?
              void 0 :
              s.value
            );
          if (m) return m;
        }
      } catch (E) {
        a = !0, u = E;
      } finally {
        try {
          !n && l.return != null && l.return();
        } finally {
          if (a) throw u;
        }
      }
    }
    function Wo(e, t) {
      Object.defineProperty(e, cn, {
        configurable: !0,
        enumerable: !1,
        value: { cleanup: t }
      });
    }
    function Uo(e) {
      Reflect.deleteProperty(e, cn);
    }
    function Vo(e) {
      var t = new URL(e, window.location.href),
        r = new URLSearchParams(
          t.hash.startsWith("#") ? t.hash.slice(1) : t.hash
        );
      return (
        r.set(Ho, window.location.origin),
        t.hash = r.toString(),
        t.toString());

    }
    var feedbackOverlayFunction = function (t, r, n, a, u) {
        var l,
          d,
          f = vi(t),
          s = yr(r.params, !1, a),
          m = Pt(r, "g"),
          E = m === void 0 ? "" : "h/".concat(encodeURIComponent(m), "/"),
          S = Vo(
            "".
            concat(s, "/cdn-cgi/challenge-platform/").
            concat(E, "fr/").
            concat(kt(t), "/").
            concat(r.displayLanguage, "/").
            concat(
              (d = r.params.theme) !== null && d !== void 0 ? d : r.theme,
              "/"
            ).
            concat(n)
          );
        if (mt(r), window.top !== window.self) {
          var O = window.open(S, "_blank");
          if (O) {
            r.feedbackPopupOrigin = pt(S), r.feedbackPopup = O;
            var b = window.setInterval(function () {
              O.closed && (
              window.clearInterval(b),
              r.feedbackPopupCloseCheck = void 0,
              u == null || u());
            }, 500);
            r.feedbackPopupCloseCheck = b;
            return;
          }
          logError(
            "Unable to open feedback report popup, falling back to the embedded feedback overlay."
          );
        }
        r.wrapper.parentNode ||
        x(
          "Cannot initialize Widget, Element not found (#".concat(t, ")."),
          3074
        );
        var A = mi(f);
        if (A) {
          var P;
          (P = gi(A)) === null || P === void 0 || P();
        }
        var I = document.createElement("div");
        I.style.position = "fixed",
        I.style.zIndex = "2147483646",
        I.style.width = "100vw",
        I.style.height = "100vh",
        I.style.top = "0",
        I.style.left = "0",
        I.style.transformOrigin = "center center",
        I.style.overflowX = "hidden",
        I.style.overflowY = "auto",
        I.style.background = "rgba(0,0,0,0.4)";
        var M = document.createElement("div");
        M.className = "cf-wrapper-turnstile-feedback",
        M.style.display = "table-cell",
        M.style.verticalAlign = "middle",
        M.style.width = "100vw",
        M.style.height = "100vh";
        var C = document.createElement("div");
        C.className = "cf-turnstile-feedback",
        C.id = "cf-fr-id",
        C.style.width = "100vw",
        C.style.maxWidth = "500px",
        C.style.height = un(r),
        C.style.position = "relative",
        C.style.zIndex = "2147483647",
        C.style.backgroundColor = "#ffffff",
        C.style.borderRadius = "5px",
        C.style.left = "0px",
        C.style.top = "0px",
        C.style.overflow = "hidden",
        C.style.margin = "0px auto";
        var j = function () {
            C.style.height = un(r);
          },
          U = function () {
            var B;
            Uo(I),
            r.feedbackIframeOrigin = void 0,
            window.removeEventListener("resize", j),
            (B = I.parentNode) === null || B === void 0 || B.removeChild(I),
            u == null || u();
          },
          k = document.createElement("iframe");
        k.id = f,
        k.setAttribute("src", S),
        k.setAttribute("title", "Turnstile feedback report"),
        k.setAttribute("allow", "cross-origin-isolated; fullscreen"),
        k.setAttribute(
          "sandbox",
          "allow-same-origin allow-scripts allow-popups allow-forms"
        ),
        k.setAttribute("scrolling", "yes"),
        k.style.borderWidth = "0px",
        k.style.width = "100%",
        k.style.height = "100%",
        k.style.overflow = "auto",
        r.feedbackIframeOrigin = pt(S);
        var D = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        D.setAttribute("tabindex", "0"),
        D.setAttribute("role", "button"),
        D.setAttribute("aria-label", "Close feedback report"),
        D.style.position = "absolute",
        D.style.width = "26px",
        D.style.height = "26px",
        D.style.zIndex = "2147483647",
        D.style.cursor = "pointer",
        r.displayRtl === !0 ?
        D.style.left = "24px" :
        D.style.right = "24px",
        D.style.top = "24px",
        D.setAttribute("width", "20"),
        D.setAttribute("height", "20"),
        D.addEventListener("click", function (X) {
          X.stopPropagation(), U();
        }),
        D.addEventListener("keydown", function (X) {
          (X.key === "Enter" || X.key === " ") && (
          X.preventDefault(), X.stopPropagation(), U());
        });
        var ie = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "ellipse"
        );
        ie.setAttribute("ry", "12"),
        ie.setAttribute("rx", "12"),
        ie.setAttribute("cy", "12"),
        ie.setAttribute("cx", "12"),
        ie.setAttribute("fill", "none"),
        ie.setAttribute("stroke-width", "0"),
        D.appendChild(ie);
        var H = document.createElementNS("http://www.w3.org/2000/svg", "line");
        H.setAttribute("stroke-width", "1"),
        H.setAttribute("fill", "none"),
        H.setAttribute("x1", "6"),
        H.setAttribute("x2", "18"),
        H.setAttribute("y1", "18"),
        H.setAttribute("y2", "5");
        var K = document.createElementNS("http://www.w3.org/2000/svg", "line");
        K.setAttribute("stroke-width", "1"),
        K.setAttribute("fill", "none"),
        K.setAttribute("x1", "6"),
        K.setAttribute("x2", "18"),
        K.setAttribute("y1", "5"),
        K.setAttribute("y2", "18"),
        r.theme === ThemeEnum.Light ? (
        H.setAttribute("stroke", "#0A0A0A"),
        K.setAttribute("stroke", "#0A0A0A")) : (
        H.setAttribute("stroke", "#F2F2F2"),
        K.setAttribute("stroke", "#F2F2F2")),
        D.appendChild(H),
        D.appendChild(K),
        C.appendChild(k),
        C.appendChild(D),
        M.appendChild(C),
        I.appendChild(M),
        I.addEventListener("click", U),
        r.wrapper.parentNode.appendChild(I),
        window.addEventListener("resize", j),
        Wo(I, U);
      },
      Ut = function (t) {
        var r,
          n = vi(t),
          a = mi(n);
        if (a) {
          var u = gi(a);
          if (u) {
            u();
            return;
          }
          logError(
            "Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."
          ),
          (r = a.parentNode) === null || r === void 0 || r.removeChild(a);
        }
      };
    var Bo = 900,
      qo = 45,
      Jo = 50;
    function jo(e) {
      return instanceOf(e, ShadowRoot);
    }
    function Ko(e, t, r) {
      var n = e.widgetMap.get(t);
      (n == null ? void 0 : n.retryTimeout) !== void 0 && (
      window.clearTimeout(n.retryTimeout), n.retryTimeout = void 0),
      lr(n),
      logError(
        "Cannot find Widget ".concat(
          r,
          ", consider using turnstile.remove() to clean up a widget."
        )
      ),
      e.widgetMap.delete(t);
    }
    function watchcatTick(e) {
      e.watchCatSeq++;
      var t = [],
        r = !0,
        n = !1,
        a = void 0;
      try {
        for (
        var u = e.widgetMap[Symbol.iterator](), l;
        !(r = (l = u.next()).done);
        r = !0)
        {
          var d = slicedToArrayAll(l.value, 2),
            f = d[0],
            s = d[1],
            m = Y(f),
            E = s.shadow;
          if (!jo(E) || !s.wrapper.isConnected) {
            s.watchcat.missingWidgetWarning || (
            s.watchcat.missingWidgetWarning = !0,
            t.push({ widgetElId: m, widgetId: f }));
            continue;
          }
          var S = E.querySelector("#".concat(m));
          if (S === null) {
            s.watchcat.missingWidgetWarning || (
            s.watchcat.missingWidgetWarning = !0,
            t.push({ widgetElId: m, widgetId: f }));
            continue;
          }
          if (
          s.watchcat.seq = e.watchCatSeq,
          s.watchcat.lastAckedSeq === 0 && (
          s.watchcat.lastAckedSeq = e.watchCatSeq),
          !(s.isComplete || s.isFailed || s.feedbackOpen))
          {
            var O = s.watchcat.seq - 1 - qo,
              b = s.watchcat.lastAckedSeq < O,
              A = s.watchcat.seq - 1 - Jo,
              P =
              s.isOverrunning &&
              s.watchcat.overrunBeginSeq !== 0 &&
              s.watchcat.overrunBeginSeq < A;
            if (
            (s.isExecuting ||
            !s.isInitialized ||
            !s.isStale && !s.isExecuted) &&
            s.watchcat.lastAckedSeq !== 0 &&
            b ||
            P)
            {
              var I, M;
              s.watchcat.lastAckedSeq = 0,
              s.watchcat.seq = 0,
              s.isExecuting = !1;
              var C = function (et, Fe) {
                console.log(
                  "Turnstile Widget seem to have ".concat(et, ": "),
                  Fe
                );
              };
              C(b ? "hung" : "crashed", f);
              var j = b ? CODE_300030_CRASHED : CODE_300031_HUNG;
              if (
              (M = e.internalMsgHandler) === null ||
              M === void 0 ||
              M.call(e, {
                code: j,
                event: "fail",
                rcV: (I = s.nextRcV) !== null && I !== void 0 ? I : EMPTY_RCV,
                source: SOURCE_TAG,
                widgetId: f
              }),
              0)

              var U;
              continue;
            }
            postToIframe(
              S,
              { event: "meow", seq: e.watchCatSeq, source: SOURCE_TAG, widgetId: f },
              s.iframeOrigin
            );
          }
        }
      } catch (Se) {
        n = !0, a = Se;
      } finally {
        try {
          !r && u.return != null && u.return();
        } finally {
          if (n) throw a;
        }
      }
      var k = !0,
        D = !1,
        ie = void 0;
      try {
        for (
        var H = t[Symbol.iterator](), K;
        !(k = (K = H.next()).done);
        k = !0)
        {
          var X = K.value,
            B = X.widgetElId,
            xe = X.widgetId;
          Ko(e, xe, B);
        }
      } catch (Se) {
        D = !0, ie = Se;
      } finally {
        try {
          !k && H.return != null && H.return();
        } finally {
          if (D) throw ie;
        }
      }
      t.length > 0 && e.widgetMap.size === 0 && watchcatStop(e);
    }
    function watchcatStart(e) {
      var t, r;
      (r = (t = e).watchCatInterval) !== null && r !== void 0 || (
      t.watchCatInterval = setInterval(function () {
        watchcatTick(e);
      }, Bo));
    }
    function watchcatStop(e) {
      var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      e.watchCatInterval !== null && (
      e.widgetMap.size === 0 || t) && (
      clearInterval(e.watchCatInterval), e.watchCatInterval = null);
    }
    var pn = Symbol();
    function hi(e) {
      return (typeof e == "undefined" ? "undefined" : typeOf(e)) === "object" &&
      e !== null ?
      e :
      void 0;
    }
    function fn(e) {
      return (
        (typeof e == "undefined" ? "undefined" : typeOf(e)) === "object" &&
        e !== null &&
        "widgetMap" in e &&
        instanceOf(e.widgetMap, Map) &&
        "upgradeAttempts" in e &&
        typeof e.upgradeAttempts == "number" &&
        "upgradeCompletedCount" in e &&
        typeof e.upgradeCompletedCount == "number");

    }
    function Go(e, t) {
      Object.defineProperty(e, pn, {
        configurable: !0,
        enumerable: !1,
        value: t
      });
    }
    function Xo(e) {
      var t = Object.getOwnPropertyDescriptor(e, pn),
        r = t === void 0 ? void 0 : Reflect.get(t, "value");
      if (fn(r)) return r;
      var n = lt(e, fn);
      if (n) return n;
    }
    function _i(e) {
      Reflect.deleteProperty(e, pn);
      var t = !0,
        r = !1,
        n = void 0;
      try {
        for (
        var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u;
        !(t = (u = a.next()).done);
        t = !0)
        {
          var l = u.value,
            d = Object.getOwnPropertyDescriptor(e, l),
            f = d === void 0 ? void 0 : Reflect.get(d, "value");
          fn(f) && Reflect.deleteProperty(e, l);
        }
      } catch (s) {
        r = !0, n = s;
      } finally {
        try {
          !t && a.return != null && a.return();
        } finally {
          if (r) throw n;
        }
      }
    }
    function seedReloadBackoff(e) {
      return !Number.isFinite(e.apiJsReloadBackoffMs) ||
      e.apiJsReloadBackoffMs <= 0 ?
      BACKOFF_MS_MIN :
      Math.min(e.apiJsReloadBackoffMs, BACKOFF_MS_MAX);
    }
    function seedReloadMismatch(e) {
      return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) ||
      e.apiJsReloadNextAllowedTsMs <= 0 ?
      0 :
      e.apiJsReloadNextAllowedTsMs;
    }
    function yi(e, t) {
      var r = Reflect.get(e, t);
      return typeof r == "number" ? r : 0;
    }
    function performSelfUpgrade(e, t) {
      var r =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : findElementByRegex;
      t.upgradeAttempts++;
      var n = r();
      if (!(n != null && n.parentNode)) return !1;
      var a = hi(e);
      if (!a) return !1;
      var u = n.nonce;
      Go(a, t);
      var l = new URL(n.src),
        d = document.createElement("script");
      l.searchParams.set("_upgrade", "true"),
      l.searchParams.set("_cb", String(Date.now())),
      d.async = !0,
      u && (d.nonce = u),
      d.setAttribute("crossorigin", "anonymous"),
      d.src = l.toString();
      try {
        return n.parentNode.replaceChild(d, n), !0;
      } catch (f) {
        if (!instanceOf(f, DOMException)) throw f;
        return _i(a), !1;
      }
    }
    function migrateUpgradeState(e, t, r) {
      var n = hi(e);
      if (!n) return !1;
      var a = Xo(n);
      if (!a) return !1;
      var u = a.apiJsMismatchReloadPending;
      t.isReady = a.isReady,
      t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode,
      t.gcs = buildUsageStringAggregate(a.gcs),
      t.lastWidgetIdx = a.lastWidgetIdx,
      t.scriptWasLoadedAsync = a.scriptWasLoadedAsync,
      t.apiJsReloadBackoffMs = u ? BACKOFF_MS_MIN : seedReloadBackoff(a),
      t.apiJsReloadNextAllowedTsMs = seedReloadMismatch(a),
      t.apiJsMismatchReloadAttempts = yi(a, "apiJsMismatchReloadAttempts"),
      t.apiJsMismatchReloadCompletedCount =
      yi(a, "apiJsMismatchReloadCompletedCount") + (u ? 1 : 0),
      t.apiJsMismatchReloadPending = !1,
      t.upgradeAttempts = a.upgradeAttempts,
      t.upgradeCompletedCount = a.upgradeCompletedCount + 1,
      t.turnstileLoadInitTimeTsMs = nowMs();
      var l = st(t),
        d = st(a),
        f = l[ct];
      if (!f) {
        var s, m, E, S, O, b;
        l[ct] = d[ct],
        (E = (s = l)[m = Me]) !== null && E !== void 0 || (s[m] = d[Me]),
        (b = (S = l)[O = $e]) !== null && b !== void 0 || (S[O] = d[$e]);
      }
      t.watchCatInterval = null,
      t.watchCatSeq = a.watchCatSeq,
      t.widgetMap = a.widgetMap;
      var A = !0,
        P = !1,
        I = void 0;
      try {
        for (
        var M = t.widgetMap.values()[Symbol.iterator](), C;
        !(A = (C = M.next()).done);
        A = !0)
        {
          var j = C.value;
          j.gcs = buildUsageStringAggregate(j.gcs);
          var U = ft(j);
          !f ||
          U[dt] === Nt || (
          l[$e] === !0 && typeof l[Me] == "string" ? (
          U[Je] = l[Me], U[dt] = Mt, U[je] = !0) : (
          U[Je] = void 0, U[dt] = void 0, U[je] = !1));
        }
      } catch (k) {
        P = !0, I = k;
      } finally {
        try {
          !A && M.return != null && M.return();
        } finally {
          if (P) throw I;
        }
      }
      return (
        watchcatStop(a, !0),
        a.msgHandler && window.removeEventListener("message", a.msgHandler),
        _i(n),
        r(),
        !0);

    }
    function vn(e) {
      return G(["auto", "dark", "light"], e);
    }
    function mn(e) {
      return G(["auto", "never"], e);
    }
    function gn(e) {
      return e > 0 && e < 9e5;
    }
    function yn(e) {
      return e > 0 && e < 36e4;
    }
    var $o = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");
    function Ti(e) {
      return $o.test(e);
    }
    var Zo = RegExp("^[a-z0-9_-]{0,32}$", "iu");
    function hn(e) {
      return e === void 0 ? !0 : typeof e == "string" && Zo.test(e);
    }
    var eu = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");
    function _n(e) {
      return e === void 0 ? !0 : typeof e == "string" && eu.test(e);
    }
    function bn(e) {
      return G([SizeEnum.Normal, SizeEnum.Compact, SizeEnum.Invisible, SizeEnum.Flexible], e);
    }
    function En(e) {
      return G(["auto", "manual", "never"], e);
    }
    function Tn(e) {
      return G(["auto", "manual", "never"], e);
    }
    var tu = RegExp("^[a-z]{2,3}(?:[-_][a-z]{2})?$", "iu");
    function xn(e) {
      return e === "auto" || tu.test(e);
    }
    function Sn(e) {
      return G(["always", "execute", "interaction-only"], e);
    }
    function xi(e) {
      return G(["true", "false"], e);
    }
    function In(e) {
      return G(["render", "execute"], e);
    }
    var Hc = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");
    function wn(e) {
      var t = new URLSearchParams();
      if (0) {
        var r;
        if (r != null && r !== "") var n;
      }
      if (
      e.params["offlabel-show-privacy"] !== void 0 &&
      t.set(
        "offlabel_show_privacy",
        String(e.params["offlabel-show-privacy"])
      ),
      e.params["offlabel-show-help"] !== void 0 &&
      t.set("offlabel_show_help", String(e.params["offlabel-show-help"])),
      !(t.size === 0 || t.toString() === ""))

      return t.toString();
    }
    function Si(e, t) {
      if (e.isResetting = !1, t) {
        t(String(CODE_200500_NOOP));
        return;
      }
      x("Could not load challenge from challenges.cloudflare.com.", 161);
    }
    function isAllowedOriginHost(e, t) {
      return e ? t ? !0 : G(ALLOWED_ORIGINS, e) : !1;
    }
    function getTopOriginHref() {
      for (
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ?
        arguments[0] :
        window,
        t = e;
      t && t.top !== t && !t.location.href.startsWith("http");)

      t = t.top;
      return t == null ? void 0 : t.location.href;
    }
    var CONTROLLER_SYMBOL = Symbol(),
      ru =
      "Turnstile has already been rendered in this container. The render attempt was rejected.",
      nu =
      "Turnstile skipped implicit render because a widget already exists in this container.",
      Rn = void 0,
      au = function (e) {
        return e.styleSheets.length;
      };
    function kn(e) {
      return Reflect.get(window, e);
    }
    function Ln(e) {
      var t = kn(e);
      return typeof t == "function" ?
      function () {
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
        return Reflect.apply(t, window, n);
      } :
      void 0;
    }
    function Ri(e, t) {
      return e == null ? t : Number(e);
    }
    function iu(e) {
      return (
        e === "new" ||
        e === "crashed_retry" ||
        e === "failure_retry" ||
        e === "stale_execute" ||
        e === "auto_expire" ||
        e === "auto_timeout" ||
        e === "manual_refresh" ||
        e === "api" ||
        e === "check_delays" ||
        e === "upgrade_reload" ||
        e === "time_check_cached_warning_aux" ||
        e === "js_cookies_missing_aux" ||
        e === "redirecting_text_overrun");

    }
    function deepCloneJson(e) {
      var t = JSON.stringify(e);
      return JSON.parse(t);
    }
    function isControllerShape(e) {
      return (
        (typeof e == "undefined" ? "undefined" : typeOf(e)) === "object" &&
        e !== null &&
        "clearPendingApiJsReloadRequest" in e &&
        typeof e.clearPendingApiJsReloadRequest == "function" &&
        "rejectPendingApiJsReloadRequest" in e &&
        typeof e.rejectPendingApiJsReloadRequest == "function" &&
        "rearmTimedUpgrade" in e &&
        typeof e.rearmTimedUpgrade == "function" &&
        "reloadAfterUpgrade" in e &&
        typeof e.reloadAfterUpgrade == "function");

    }
    function getController(e) {
      if (!(
      (typeof e == "undefined" ? "undefined" : typeOf(e)) !== "object" ||
      e === null))
      {
        var t = Object.getOwnPropertyDescriptor(e, CONTROLLER_SYMBOL),
          r = t === void 0 ? void 0 : Reflect.get(t, "value");
        if (isControllerShape(r)) return r;
        var n = lt(e, isControllerShape);
        if (n) return n;
      }
    }
    var stateObject = {
      apiJsMismatchReloadAttempts: 0,
      apiJsMismatchReloadCompletedCount: 0,
      apiJsMismatchReloadPending: !1,
      apiJsReloadBackoffMs: BACKOFF_MS_MIN,
      apiJsReloadNextAllowedTsMs: 0,
      apiVersion: 1,
      gcs: [],
      isReady: !1,
      isRecaptchaCompatibilityMode: !1,
      lastWidgetIdx: 0,
      scriptUrl: "undefined",
      scriptUrlParsed: void 0,
      scriptWasLoadedAsync: !1,
      turnstileLoadInitTimeTsMs: nowMs(),
      upgradeAttempts: 0,
      upgradeCompletedCount: 0,
      watchCatInterval: null,
      watchCatSeq: 0,
      widgetMap: new Map()
    };
    function uu() {
      if (!(__c0 === void 0 || __c0.length === 0)) {
        var e = st(stateObject);
        e[ct] = !0, e[Me] = __c0, e[$e] = __c1 === !0;
      }
    }
    var Jt, Rr, Or;
    function lu(e) {
      var t = !0,
        r = !1,
        n = void 0;
      try {
        for (
        var a = stateObject.widgetMap[Symbol.iterator](), u;
        !(t = (u = a.next()).done);
        t = !0)
        {
          var l = slicedToArrayAll(u.value, 2),
            d = l[0],
            f = l[1];
          if (
          f.wrapper.parentElement === e ||
          f.wrapper !== e && f.wrapper.contains(e) ||
          f.shadow.contains(e))

          return d;
        }
      } catch (s) {
        r = !0, n = s;
      } finally {
        try {
          !t && a.return != null && a.return();
        } finally {
          if (r) throw n;
        }
      }
      return null;
    }
    function containerToWidgetId(e) {
      if (typeof e == "string") {
        var t = kt(e);
        return t !== null && stateObject.widgetMap.has(t) ?
        t :
        stateObject.widgetMap.has(e) ?
        e :
        null;
      }
      return lu(e);
    }
    function cu(e) {
      return e === "implicit" ? nu : ru;
    }
    function Ci(e, t) {
      return (
        e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit");

    }
    function Mn() {
      Jt !== void 0 && (window.clearTimeout(Jt), Jt = void 0);
    }
    function Ni() {
      var e = !0,
        t = !1,
        r = void 0;
      try {
        for (
        var n = stateObject.widgetMap.values()[Symbol.iterator](), a;
        !(e = (a = n.next()).done);
        e = !0)
        {
          var u = a.value;
          if (u.chlPageData !== void 0 && u.chlPageData !== "") return !0;
        }
      } catch (l) {
        t = !0, r = l;
      } finally {
        try {
          !e && n.return != null && n.return();
        } finally {
          if (t) throw r;
        }
      }
      return !1;
    }
    function scheduleMismatchReload(e) {
      var t = stateObject.widgetMap.get(e),
        r = Y(e);
      if (t !== void 0) {
        var n = postToIframeWindow(t, r);
        n !== null &&
        postToIframe(
          n,
          {
            apiJsMismatchReloadAttempts: stateObject.apiJsMismatchReloadAttempts,
            apiJsMismatchReloadCompletedCount:
            stateObject.apiJsMismatchReloadCompletedCount,
            event: "reloadApiJsRejected",
            source: SOURCE_TAG,
            widgetId: e
          },
          t.iframeOrigin
        );
      }
    }
    function clearMismatchReload() {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.preserveMismatchReloadPending,
        r = t === void 0 ? !1 : t;
      Or = void 0,
      r || (stateObject.apiJsMismatchReloadPending = !1),
      Rr !== void 0 && (window.clearTimeout(Rr), Rr = void 0);
    }
    function rejectApiJsReload() {
      var e = Or;
      clearMismatchReload(), e !== void 0 && scheduleMismatchReload(e);
    }
    function isReloadBlocked() {
      return nowMs() < stateObject.apiJsReloadNextAllowedTsMs;
    }
    function computeReloadBackoffMs() {
      var e = stateObject.apiJsReloadBackoffMs,
        t = Number.isFinite(e) && e > 0 ? Math.min(e, BACKOFF_MS_MAX) : BACKOFF_MS_MIN,
        r = Math.round(t * (0.8 + Math.random() * 0.4));
      stateObject.apiJsReloadNextAllowedTsMs = nowMs() + r,
      stateObject.apiJsReloadBackoffMs = Math.min(t * 2, BACKOFF_MS_MAX);
    }
    function beginMismatchReloadWindow(e) {
      clearMismatchReload({ preserveMismatchReloadPending: !0 }),
      stateObject.apiJsMismatchReloadPending = !0,
      Or = e,
      Rr = window.setTimeout(function () {
        rejectApiJsReload();
      }, ra);
    }
    function armSelfUpgrade() {
      Mn(),
      !Ni() && (
      Jt = window.setTimeout(function () {
        Jt = void 0, gateSelfUpgrade();
      }, SELF_UPGRADE_INTERVAL_MS));
    }
    function An(e, t) {
      writeResponseToken(e, t, "");
    }
    var readyQueue = [];
    function drainReadyQueue() {
      stateObject.isReady = !0;
      var e = !0,
        t = !1,
        r = void 0;
      try {
        for (
        var n = readyQueue[Symbol.iterator](), a;
        !(e = (a = n.next()).done);
        e = !0)
        {
          var u = a.value;
          u();
        }
      } catch (l) {
        t = !0, r = l;
      } finally {
        try {
          !e && n.return != null && n.return();
        } finally {
          if (t) throw r;
        }
      }
    }
    function Li(e, t) {
      e.onerror = function () {
        Si(t, t.cbError);
      };
    }
    function createResponseInput(e, t) {
      var r,
        n = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
        a = stateObject.isRecaptchaCompatibilityMode,
        u = "".concat(t, "_response"),
        l = "".concat(t, "_g_response"),
        d =
        (!n || instanceOf(document.querySelector("#".concat(u)), HTMLInputElement)) && (
        !a || instanceOf(document.querySelector("#".concat(l)), HTMLInputElement));
      if (!(e.responseElementsBuilt && d)) {
        if (n && !instanceOf(document.querySelector("#".concat(u)), HTMLInputElement)) {
          var f,
            s = document.createElement("input");
          s.type = "hidden",
          s.name =
          (f = e.params["response-field-name"]) !== null && f !== void 0 ?
          f :
          RESPONSE_INPUT_ID,
          s.id = u,
          e.wrapper.appendChild(s);
        }
        if (a && !instanceOf(document.querySelector("#".concat(l)), HTMLInputElement)) {
          var m = document.createElement("input");
          m.type = "hidden",
          m.name = GRECAPTCHA_RESPONSE_ID,
          m.id = l,
          e.wrapper.appendChild(m);
        }
        e.responseElementsBuilt = !0;
      }
    }
    function writeResponseToken(e, t, r) {
      createResponseInput(e, t);
      var n = document.querySelector("#".concat(t, "_response"));
      if (
      n !== null && instanceOf(n, HTMLInputElement) && (n.value = r),
      stateObject.isRecaptchaCompatibilityMode)
      {
        var a = document.querySelector("#".concat(t, "_g_response"));
        a !== null && instanceOf(a, HTMLInputElement) && (a.value = r);
      }
    }
    function pu(e) {
      return e.chlPageData !== void 0 && e.chlPageData !== "";
    }
    function vu(e) {
      return !pu(e) && !isNameKilled("pac", e);
    }
    function br(e, t) {
      var r,
        n = (r = t.params.size) !== null && r !== void 0 ? r : SizeEnum.Normal,
        a = t.mode;
      switch (a) {
        case ModeEnum.NonInteractive:
        case ModeEnum.Managed:
          var u;
          switch (
          e.style.display = "",
          e.style.opacity = "",
          e.style.position = "",
          e.style.left = "",
          e.style.top = "",
          e.style.visibility = "",
          e.style.pointerEvents = "",
          e.style.zIndex = "",
          e.setAttribute(
            "tabindex",
            String((u = t.params.tabindex) !== null && u !== void 0 ? u : 0)
          ),
          e.removeAttribute("aria-hidden"),
          n) {

            case SizeEnum.Compact:
              e.style.width = "150px", e.style.height = "140px";
              break;
            case SizeEnum.Invisible:
              x(
                'Invalid value for parameter "size", expected "'.
                concat(SizeEnum.Compact, '", "').
                concat(SizeEnum.Flexible, '", or "').
                concat(SizeEnum.Normal, '", got "').
                concat(n, '"'),
                2817
              );
            case SizeEnum.Normal:
              e.style.width = "300px", e.style.height = "65px";
              break;
            case SizeEnum.Flexible:
              e.style.width = "100%",
              e.style.maxWidth = "100vw",
              e.style.minWidth = "300px",
              e.style.height = "65px";
              break;
            default:
              break;
          }
          break;
        case ModeEnum.Invisible:
          an(e, t);
          break;
        default:
          x(
            'Invalid value for parameter "mode", expected "'.
            concat(ModeEnum.NonInteractive, '", "').
            concat(ModeEnum.Managed, '" or "').
            concat(ModeEnum.Invisible, '", got "').
            concat(String(a), '"'),
            2818
          );
      }
    }
    function On(e, t) {
      an(e, t);
    }
    function mu(e, t) {
      var r = t.get("turnstile_iframe_alt");
      r !== void 0 && r !== "" && (e.title = r);
    }
    function postToIframeWindow(e, t) {
      return e.shadow.querySelector("#".concat(t));
    }
    function gu(e, t) {
      var r, n;
      return (r =
      (n = e.wrapper.parentNode) === null || n === void 0 ?
      void 0 :
      n.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ?
      r :
      null;
    }
    function yu(e) {
      var t, r;
      return ((r = e.feedbackPopup) === null || r === void 0 ?
      void 0 :
      r.closed) === !0 ? (
      e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) :
      (t = e.feedbackPopup) !== null && t !== void 0 ?
      t :
      null;
    }
    function Ar(e, t) {
      var r,
        n,
        a =
        (r =
        (n = gu(e, t)) === null || n === void 0 ?
        void 0 :
        n.contentWindow) !== null && r !== void 0 ?
        r :
        null;
      if (a !== null)
      return { targetOrigin: e.feedbackIframeOrigin, targetWindow: a };
      var u = yu(e);
      return {
        targetOrigin: u === null ? void 0 : e.feedbackPopupOrigin,
        targetWindow: u
      };
    }
    function buildMessageObject(e) {
      if (
      (typeof e == "undefined" ? "undefined" : typeOf(e)) !== "object" ||
      e === null)

      return !1;
      var t = e;
      return (
        t.source === SOURCE_TAG &&
        typeof t.event == "string" &&
        typeof t.widgetId == "string");

    }
    function _u(e) {
      return e.isTrusted && buildMessageObject(e.data);
    }
    function bu(e) {
      return isAllowedOriginHost(e.origin, !1);
    }
    function Eu(e, t, r) {
      var n,
        a,
        u =
        (n =
        (a = postToIframeWindow(t, r)) === null || a === void 0 ?
        void 0 :
        a.contentWindow) !== null && n !== void 0 ?
        n :
        null,
        l = Ar(t, r).targetWindow,
        d = function (E) {
          return E !== null && e.source === E;
        },
        f = e.data.event;
      switch (f) {
        case "feedbackActivity":
        case "requestFeedbackData":
        case "closeFeedbackReportIframe":
          return d(l);
        case "refreshRequest":
          return d(u) || e.data.reason === "feedback_refresh" && d(l);
        case "complete":
        case "fail":
        case "feedbackInit":
        case "food":
        case "init":
        case "interactiveBegin":
        case "interactiveEnd":
        case "interactiveTimeout":
        case "languageUnsupported":
        case "overrunBegin":
        case "overrunEnd":
        case "reject":
        case "reloadApiJsRequest":
        case "reloadRequest":
        case "requestExtraParams":
        case "tokenExpired":
        case "translationInit":
        case "turnstileResults":
        case "widgetStale":
          return d(u);
        default:{
            var s = f;
            return !1;
          }
      }
    }
    function getEmbeddingUrl() {
      return getTopOriginHref(window);
    }
    function Er(e, t, r) {
      return e === null ? t : xi(e) ? e === "true" : (logError(r(e)), t);
    }
    function readResourceTiming() {
      try {
        var e = findElementByRegex();
        if (!e) return;
        var t = e.src,
          r = !0,
          n = !1,
          a = void 0;
        try {
          for (
          var u = performance.getEntriesByType("resource")[Symbol.iterator](),
            l;
          !(r = (l = u.next()).done);
          r = !0)
          {
            var d = l.value;
            if (instanceOf(d, PerformanceResourceTiming) && d.name.includes(t)) return d;
          }
        } catch (f) {
          n = !0, a = f;
        } finally {
          try {
            !r && u.return != null && u.return();
          } finally {
            if (n) throw a;
          }
        }
      } catch (f) {
        return;
      }
    }
    var moduleExports = function () {
        var e = readResourceTiming(),
          t = new WeakMap(),
          r = new WeakMap(),
          n = new WeakSet(),
          a = new WeakSet();
        function u(c) {
          var i;
          (i = r.get(c)) === null || i === void 0 || i(), r.delete(c);
        }
        function l(c) {
          var i = t.get(c);
          if (!(
          !n.has(c) ||
          !a.has(c) ||
          i === void 0 ||
          c.autoFeedbackSent === !0 ||
          isNameKilled("feedback-report-auto-submit", c)))
          {
            var v = sendFeedbackReport(c, i.feedbackOrigin, i.rayId, c.frMd, stateObject.scriptUrlParsed);
            v && (
            c.autoFeedbackSent = !0,
            u(c),
            n.delete(c),
            t.delete(c),
            a.delete(c));
          }
        }
        function d(c) {
          if (u(c), !(t.get(c) === void 0 || c.autoFeedbackSent === !0)) {
            var i = function (h) {
              h.isTrusted && (n.add(c), l(c));
            };
            window.addEventListener("keydown", i, !0),
            window.addEventListener("mousemove", i, !0),
            window.addEventListener("touchstart", i, !0),
            r.set(c, function () {
              window.removeEventListener("keydown", i, !0),
              window.removeEventListener("mousemove", i, !0),
              window.removeEventListener("touchstart", i, !0);
            });
          }
        }
        function f(c, i, v, h, p, o) {
          return asyncToGenerator(function () {
            var g, L, _, N, F, z, q, ge, He, se, ce, ye;
            return asyncGeneratorMachine(this, function (fe) {
              switch (fe.label) {
                case 0:
                  if (
                  L = function ($, we) {
                    var Z = stateObject.widgetMap.get(i);
                    Z !== c ||
                    Z.isComplete ||
                    Z.isResetting ||
                    Z.response !== h || (
                    !$ && we !== void 0 && we !== "" && logError(we), completeWidget(Z, v, $));
                  },
                  _ = c.params.sitekey,
                  N = getEmbeddingUrl(),
                  N === void 0 || N === "")

                  return (
                    logError(
                      "Cannot determine Turnstile's embedded location, aborting clearance redemption."
                    ),
                    completeWidget(c, v, !1),
                    [2]);

                  F = Pt(c, "g"),
                  z =
                  F === void 0 ?
                  "" :
                  "h/".concat(encodeURIComponent(F), "/"),
                  q = new URL(N),
                  ge = "https",
                  He = "",
                  se = "".
                  concat(ge, "://").
                  concat(q.host, "/cdn-cgi/challenge-platform/").
                  concat(z, "c/").
                  concat(o).
                  concat(He),
                  fe.label = 1;
                case 1:
                  return (
                    fe.trys.push([1, 3,, 4]),
                    [
                    4,
                    fetch(se, {
                      body: JSON.stringify({ secondaryToken: p, sitekey: _ }),
                      headers: { "Content-Type": "application/json" },
                      method: "POST",
                      redirect: "manual"
                    })]);


                case 2:
                  return (
                    ce = fe.sent(),
                    ce.status === 200 ?
                    L(!0) :
                    L(
                      !1,
                      "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"
                    ),
                    [3, 4]);

                case 3:
                  return (
                    ye = fe.sent(),
                    L(
                      !1,
                      "Error contacting Turnstile, aborting clearance redemption."
                    ),
                    [3, 4]);

                case 4:
                  return [2];
              }
            });
          })();
        }
        function s(c, i, v) {
          if (c.params.retry === RetryOptionEnum.Auto || v) {
            var h;
            if (c.feedbackOpen) {
              c.pendingRetry = { crashed: v };
              return;
            }
            var p = v ?
            0 :
            1e3 * 2 + (
            (h = c.params["retry-interval"]) !== null && h !== void 0 ?
            h :
            0);
            c.retryTimeout = window.setTimeout(function () {
              var o = v ? TriggerEnum.CrashedRetry : TriggerEnum.FailureRetry;
              resetWidget(o, i);
            }, p);
          }
        }
        function m(c, i, v) {
          return c.params.execution === ExecutionModeEnum.Render ?
          !0 :
          (i === TriggerEnum.CrashedRetry ||
          i === TriggerEnum.FailureRetry ||
          i === TriggerEnum.CheckDelays ||
          i === TriggerEnum.UpgradeReload) &&
          c.params.execution === ExecutionModeEnum.Execute &&
          v;
        }
        function E(c, i, v) {
          if (
          c.feedbackOpen && (
          c.feedbackOpen = !1,
          u(c),
          n.delete(c),
          t.delete(c),
          a.delete(c),
          c.feedbackPopupCloseCheck !== void 0 && (
          window.clearInterval(c.feedbackPopupCloseCheck),
          c.feedbackPopupCloseCheck = void 0),
          pi(),
          window.postMessage(
            { event: "feedbackClose", source: SOURCE_TAG, widgetId: v },
            "*"
          ),
          c.pendingRetry))
          {
            var h = c.pendingRetry.crashed;
            c.pendingRetry = void 0, s(c, i, h);
          }
        }
        function completeWidget(c, i, v) {
          var h;
          c.response === void 0 &&
          x(
            "[Internal Error] Widget was completed but no response was given",
            1362
          ),
          c.isExecuting = !1,
          c.isComplete = !0,
          writeResponseToken(c, i, c.response),
          (h = c.cbSuccess) === null ||
          h === void 0 ||
          h.call(c, c.response, v);
        }
        function O(c) {
          if (!c) return [];
          for (
          var i = c.attributes, v = i.length, h = new Array(v), p = 0;
          p < v;
          p++)

          h[p] = i[p].name;
          return h;
        }
        function b() {
          for (
          var c = {}, i = [], v = document.querySelectorAll("*"), h = 0;
          h < v.length && i.length < 50;
          h++)
          {
            var p = v[h].tagName.toLowerCase();
            p.includes("-") && !c[p] && (c[p] = !0, i.push(p));
          }
          return i;
        }
        function A(c, i, v) {
          if (c.rcV = i, 0) var h;
        }
        var handleIframeMessage = function (i) {
            var v = Reflect.get(i, "source");
            if (v === SOURCE_TAG) {
              var h = Reflect.get(i, "widgetId");
              if (!(typeof h != "string" || h === "" || !stateObject.widgetMap.has(h))) {
                var p = Y(h),
                  o = stateObject.widgetMap.get(h);
                if (o !== void 0)
                switch (i.event) {
                  case "init":{
                      o.widgetInitStartTimeTsMs = nowMs(),
                      o.kills = i.kills,
                      checkNameKilled(o) && (o.gcs.length = 0);
                      var g = postToIframeWindow(o, p);
                      g ||
                      x(
                        "Cannot initialize Widget, Element not found (#".concat(
                          p,
                          ")."
                        ),
                        3074
                      ),
                      o.mode = i.mode,
                      o.nextRcV = i.nextRcV,
                      o.mode === ModeEnum.Invisible &&
                      o.params["refresh-expired"] === RefreshExpiredOptionEnum.Manual &&
                      logError(
                        "refresh-expired=manual is impossible in invisible mode, consider using '".
                        concat(RefreshExpiredOptionEnum.Auto, "' or '").
                        concat(RefreshExpiredOptionEnum.Never, ".'")
                      ),
                      o.mode !== ModeEnum.Managed &&
                      o.params["refresh-timeout"] !== RefreshTimeoutOptionEnum.Auto &&
                      logError(
                        "setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."
                      ),
                      o.params.appearance === AppearanceEnum.Always ||
                      o.isExecuting && o.params.appearance === AppearanceEnum.Execute ?
                      br(g, o) :
                      On(g, o),
                      oi(o, g);
                      var L = postToIframeWindow(o, p);
                      L ||
                      x(
                        "Received state for an unknown widget: ".concat(
                          i.widgetId
                        ),
                        3078
                      ),
                      postToIframe(
                        L,
                        { event: "init", source: SOURCE_TAG, widgetId: i.widgetId },
                        o.iframeOrigin
                      );
                      break;
                    }
                  case "translationInit":{
                      var _ = o.shadow.querySelector("#".concat(p));
                      instanceOf(_, HTMLElement) ||
                      x(
                        "Cannot initialize Widget, Element not found (#".concat(
                          p,
                          ")."
                        ),
                        3074
                      );
                      var N = new Map();
                      o.displayLanguage = i.displayLanguage,
                      o.displayRtl = i.displayRtl,
                      Object.keys(i.translationData).forEach(function (_e) {
                        N.set(_e, i.translationData[_e]);
                      }),
                      mu(_, N);
                      break;
                    }
                  case "languageUnsupported":{
                      logError(
                        "Language ".
                        concat(
                          o.params.language,
                          " is not supported, falling back to: "
                        ).
                        concat(i.fallback, ".")
                      ),
                      o.displayLanguage = i.fallback;
                      break;
                    }
                  case "reject":{
                      var F = o.shadow.querySelector("#".concat(p));
                      o.isExecuting = !1,
                      instanceOf(F, HTMLElement) ||
                      x(
                        "Cannot initialize Widget, Element not found (#".concat(
                          p,
                          ")."
                        ),
                        3075
                      );
                      var z = Reflect.get(i, "reason");
                      if (z === "unsupported_browser") {
                        var q;
                        (q = o.cbUnsupported) === null ||
                        q === void 0 ||
                        q.call(o);
                      }
                      break;
                    }
                  case "food":{
                      i.seq > o.watchcat.lastAckedSeq && (
                      o.watchcat.lastAckedSeq = i.seq);
                      break;
                    }
                  case "overrunBegin":{
                      o.isOverrunning = !0,
                      o.watchcat.overrunBeginSeq = o.watchcat.lastAckedSeq;
                      break;
                    }
                  case "overrunEnd":{
                      o.isOverrunning = !1;
                      break;
                    }
                  case "complete":{
                      if (
                      A(o, EMPTY_RCV, i.widgetId),
                      o.response = i.token,
                      i.aC !== void 0 && i.aC !== "")
                      {
                        var ge;
                        (ge = o.assetCtxCallback) === null ||
                        ge === void 0 ||
                        ge.call(o, i.aC);
                      }
                      if (
                      i.scs !== void 0 &&
                      i.scs !== "" &&
                      !isNameKilled("scs", o) && (
                      o.scs = i.scs,
                      o.params["session-continuity-persist"] === !0 &&
                      !isNameKilled("scs_persist", o)))
                      {
                        var He = o.params.sitekey;
                        if (He !== null && He !== "") {
                          var se = "".concat(SCS_STORAGE_PREFIX).concat(He);
                          try {
                            localStorage.setItem(se, i.scs);
                          } catch (_e) {}
                        }
                      }
                      i.sToken !== void 0 && i.sToken !== "" ?
                      f(o, i.widgetId, p, i.token, i.sToken, i.chlId) :
                      completeWidget(o, p, !1);
                      break;
                    }
                  case "fail":{
                      var ce = Reflect.get(i, "rcV");
                      if (
                      typeof ce == "string" && ce !== "" && A(o, ce, h),
                      i.cfChlOut !== void 0 &&
                      i.cfChlOut !== "" && (
                      o.cfChlOut = i.cfChlOut),
                      i.cfChlOutS !== void 0 &&
                      i.cfChlOutS !== "" && (
                      o.cfChlOutS = i.cfChlOutS),
                      i.code !== void 0 &&
                      i.code !== 0 && (
                      o.errorCode = i.code),
                      i.aC !== void 0 && i.aC !== "")
                      {
                        var ye;
                        (ye = o.assetCtxCallback) === null ||
                        ye === void 0 ||
                        ye.call(o, i.aC);
                      }
                      o.isExecuting = !1,
                      o.isFailed = !0,
                      o.isInitialized = !0,
                      i.frMd !== void 0 && i.frMd !== "" && (o.frMd = i.frMd),
                      An(o, p);
                      var fe = o.cbError,
                        Ie = i.code === CODE_300030_CRASHED || i.code === CODE_300031_HUNG,
                        $ = i.code !== CODE_200100_OK;
                      if (Ie) {
                        var we = postToIframeWindow(o, p);
                        we &&
                        postToIframe(
                          we,
                          {
                            event: "forceFail",
                            source: SOURCE_TAG,
                            widgetId: i.widgetId
                          },
                          o.iframeOrigin
                        );
                      }
                      if (fe !== void 0) {
                        var Z;
                        fe(
                          String(
                            (Z = i.code) !== null && Z !== void 0 ? Z : CODE_300020
                          )
                        ) === !0 ?
                        $ &&
                        o.params.retry === RetryOptionEnum.Auto &&
                        !o.isResetting &&
                        s(o, p, Ie) : (
                        i.code !== void 0 &&
                        i.code !== 0 &&
                        logError("Error: ".concat(i.code, ".")),
                        $ && s(o, p, Ie));
                      } else
                      i.code !== void 0 && i.code !== 0 ? (
                      $ && s(o, p, Ie),
                      x("Error: ".concat(i.code), 3076)) :
                      s(o, p, !1);
                      break;
                    }
                  case "feedbackInit":{
                      i.cfChlOut !== void 0 &&
                      i.cfChlOut !== "" && (
                      o.cfChlOut = i.cfChlOut),
                      i.cfChlOutS !== void 0 &&
                      i.cfChlOutS !== "" && (
                      o.cfChlOutS = i.cfChlOutS);
                      var Re = Ar(o, p).targetWindow;
                      if (Re) {
                        logError(
                          "A feedback report form is already opened for this widget."
                        );
                        return;
                      }
                      if (
                      o.autoFeedbackSent !== !0 &&
                      !isNameKilled("feedback-report-auto-submit", o) ?
                      t.set(o, {
                        feedbackOrigin: i.feedbackOrigin,
                        rayId: i.rayId
                      }) :
                      t.delete(o),
                      o.feedbackOpen = !0,
                      o.retryTimeout !== void 0)
                      {
                        var yt, rt;
                        clearTimeout(o.retryTimeout),
                        o.retryTimeout = void 0,
                        (rt = (yt = o).pendingRetry) !== null &&
                        rt !== void 0 || (
                        yt.pendingRetry = { crashed: !1 });
                      }
                      fi(),
                      window.postMessage(
                        {
                          event: "feedbackOpen",
                          source: SOURCE_TAG,
                          widgetId: i.widgetId
                        },
                        "*"
                      ),
                      feedbackOverlayFunction(
                        p,
                        o,
                        i.feedbackOrigin,
                        stateObject.scriptUrlParsed,
                        function () {
                          E(o, p, i.widgetId);
                        }
                      );
                      break;
                    }
                  case "feedbackActivity":{
                      n.add(o), l(o);
                      break;
                    }
                  case "requestFeedbackData":{
                      a.add(o), d(o);
                      var T = postToIframeWindow(o, p);
                      instanceOf(T, HTMLElement) ||
                      x(
                        "Received state for an unknown widget: #".
                        concat(p, " / ").
                        concat(i.widgetId),
                        3078
                      ),
                      postToIframe(
                        T,
                        {
                          event: "requestTurnstileResults",
                          source: SOURCE_TAG,
                          widgetId: i.widgetId
                        },
                        o.iframeOrigin
                      ),
                      l(o);
                      break;
                    }
                  case "turnstileResults":{
                      var ze,
                        Ge,
                        ht,
                        Ae = Ar(o, p),
                        Cr = Ae.targetOrigin,
                        jt = Ae.targetWindow;
                      if (!jt) break;
                      $r(
                        jt,
                        {
                          cfChlOut:
                          (ze = o.cfChlOut) !== null && ze !== void 0 ?
                          ze :
                          i.cfChlOut,
                          cfChlOutS:
                          (Ge = o.cfChlOutS) !== null && Ge !== void 0 ?
                          Ge :
                          i.cfChlOutS,
                          errorCode: o.errorCode,
                          event: "feedbackData",
                          frMd:
                          (ht = o.frMd) !== null && ht !== void 0 ?
                          ht :
                          i.frMd,
                          mode: i.mode,
                          rayId: i.rayId,
                          rcV: i.rcV,
                          sitekey: i.sitekey,
                          source: SOURCE_TAG,
                          widgetId: i.widgetId
                        },
                        Cr
                      );
                      break;
                    }
                  case "closeFeedbackReportIframe":{
                      var kr = Ar(o, p).targetWindow;
                      kr ||
                      x(
                        "Received state for an unknown widget: ".concat(
                          i.widgetId
                        ),
                        3078
                      ),
                      Ut("".concat(p, "-fr")),
                      mt(o),
                      E(o, p, i.widgetId);
                      break;
                    }
                  case "tokenExpired":{
                      var _t,
                        Lr = i.token;
                      o.isExpired = !0,
                      (_t = o.cbExpired) === null ||
                      _t === void 0 ||
                      _t.call(o, Lr),
                      o.params["refresh-expired"] === RefreshExpiredOptionEnum.Auto &&
                      !o.isResetting &&
                      resetWidget(TriggerEnum.AutoExpire, p);
                      break;
                    }
                  case "interactiveTimeout":{
                      A(o, EMPTY_RCV, i.widgetId), An(o, p);
                      var Kt = o.cbTimeout;
                      if (
                      Kt ?
                      Kt() :
                      o.params["refresh-timeout"] === RefreshTimeoutOptionEnum.Never &&
                      !o.isResetting &&
                      logError(
                        "The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."
                      ),
                      o.params["refresh-timeout"] === RefreshTimeoutOptionEnum.Auto &&
                      !o.isResetting)
                      {
                        var bt = o.cbAfterInteractive;
                        bt == null || bt(), resetWidget(TriggerEnum.AutoTimeout, p);
                      }
                      break;
                    }
                  case "refreshRequest":{
                      A(o, EMPTY_RCV, i.widgetId),
                      Ut(p),
                      mt(o),
                      resetWidget(TriggerEnum.ManualRefresh, p);
                      break;
                    }
                  case "reloadRequest":{
                      A(o, i.nextRcV, i.widgetId),
                      resetWidget(iu(i.trigger) ? i.trigger : TriggerEnum.Api, p);
                      break;
                    }
                  case "reloadApiJsRequest":{
                      if (isNameKilled("reload", o)) {
                        scheduleMismatchReload(i.widgetId);
                        break;
                      }
                      if (Or !== void 0) {
                        scheduleMismatchReload(i.widgetId);
                        break;
                      }
                      if (isReloadBlocked()) {
                        scheduleMismatchReload(i.widgetId);
                        break;
                      }
                      gateSelfUpgrade() ? (
                      stateObject.apiJsMismatchReloadAttempts++,
                      computeReloadBackoffMs(),
                      beginMismatchReloadWindow(i.widgetId)) :
                      scheduleMismatchReload(i.widgetId);
                      break;
                    }
                  case "interactiveBegin":{
                      var Oe,
                        We = o.shadow.querySelector("#".concat(p));
                      instanceOf(We, HTMLElement) ||
                      x(
                        "Cannot layout widget, Element not found (#".concat(
                          p,
                          ")."
                        ),
                        3076
                      ),
                      (Oe = o.cbBeforeInteractive) === null ||
                      Oe === void 0 ||
                      Oe.call(o),
                      o.params.appearance === AppearanceEnum.InteractionOnly &&
                      br(We, o);
                      break;
                    }
                  case "interactiveEnd":{
                      var oe;
                      (oe = o.cbAfterInteractive) === null ||
                      oe === void 0 ||
                      oe.call(o);
                      break;
                    }
                  case "widgetStale":{
                      o.isStale = !0;
                      break;
                    }
                  case "requestExtraParams":{
                      o.widgetParamsStartTimeTsMs = nowMs();
                      var Xe = postToIframeWindow(o, p);
                      Xe ||
                      x(
                        "Received state for an unknown widget: ".concat(
                          i.widgetId
                        ),
                        3078
                      ),
                      o.isResetting = !1;
                      var zt = {},
                        Gt = nowMs(),
                        ee = widgetVisibilityInfo(o, Xe),
                        he = vu(o) ? formFieldFingerprint(o.wrapper) : void 0,
                        Xt = {
                          "d.cT": b(),
                          "ht.atrs": O(document.body.parentElement),
                          "pg.ref": document.referrer,
                          pi: {
                            ffp: _a(o.wrapper),
                            ii: window.self !== window.top,
                            lH: window.location.href,
                            mL: document.querySelectorAll("meta").length,
                            pac: he == null ? void 0 : he.pac,
                            pad: he == null ? void 0 : he.pad,
                            pfp: buildDomFingerprint(document, da, sa, Rn),
                            sL: document.scripts.length,
                            sR: postToWidgetWindow(o).shadowRoot === null,
                            ssL: au(document, Rn),
                            t: "".
                            concat(document.title.length, "|").
                            concat(djb2Hash(document.title)),
                            tL: wa(document, Rn),
                            vDa: ee.appearance,
                            vDeh: ee.expectedHidden,
                            vDhp: ee.hostParent,
                            vDhr: ee.expectedHiddenReason,
                            vDie: ee.isExecuting,
                            vDmd: ee.mode,
                            vDmt: ee.mount,
                            vDrs: ee.reasons,
                            vDuh: ee.unexpectedHidden,
                            vDvp: ee.viewport,
                            wp: ha(o.wrapper),
                            xp: domPathSegment(o.wrapper).slice(0, fa)
                          },
                          "w.iW": window.innerWidth
                        },
                        pe = o.scs;
                      if (
                      (pe === void 0 || pe === "") &&
                      o.params["session-continuity-persist"] === !0 &&
                      !isNameKilled("scs_persist", o))
                      {
                        var nt = o.params.sitekey;
                        if (nt !== null && nt !== "") {
                          var Mr = "".concat(SCS_STORAGE_PREFIX).concat(nt);
                          try {
                            var Ye;
                            pe =
                            (Ye = localStorage.getItem(Mr)) !== null &&
                            Ye !== void 0 ?
                            Ye :
                            void 0;
                          } catch (_e) {}
                        }
                      }
                      pe !== void 0 &&
                      pe !== "" &&
                      pe.length > SCS_MAX_LENGTH && (
                      pe = void 0),
                      postToIframe(
                        Xe,
                        objectSpread(
                          {
                            action: o.action,
                            apiJsMismatchReloadAttempts:
                            stateObject.apiJsMismatchReloadAttempts,
                            apiJsMismatchReloadCompletedCount:
                            stateObject.apiJsMismatchReloadCompletedCount,
                            apiJsResourceTiming:
                            e === void 0 ? void 0 : deepCloneJson(e),
                            appearance: o.params.appearance,
                            au: stateObject.scriptUrl,
                            cData: o.cData,
                            ch: "330e41bb475c",
                            chlPageData: o.chlPageData,
                            cs: getUsageTokens(o),
                            event: "extraParams",
                            execution: o.params.execution,
                            "expiry-interval": o.params["expiry-interval"],
                            language: o.params.language,
                            rcV: o.rcV,
                            "refresh-expired": o.params["refresh-expired"],
                            "refresh-timeout": o.params["refresh-timeout"],
                            retry: o.params.retry,
                            "retry-interval": o.params["retry-interval"],
                            scs: pe,
                            source: SOURCE_TAG,
                            timeExtraParamsMs:
                            nowMs() - o.widgetRenderStartTimeTsMs,
                            timeInitMs:
                            o.widgetInitStartTimeTsMs -
                            o.widgetRenderEndTimeTsMs,
                            timeLoadInitMs: nowMs() - stateObject.turnstileLoadInitTimeTsMs,
                            timeParamsMs:
                            o.widgetParamsStartTimeTsMs -
                            o.widgetInitStartTimeTsMs,
                            timeRenderMs:
                            o.widgetRenderEndTimeTsMs -
                            o.widgetRenderStartTimeTsMs,
                            timeTiefMs: nowMs() - Gt,
                            upgradeAttempts: stateObject.upgradeAttempts,
                            upgradeCompletedCount: stateObject.upgradeCompletedCount,
                            url: getEmbeddingUrl(),
                            wPr: Xt,
                            widgetId: i.widgetId
                          },
                          zt
                        ),
                        o.iframeOrigin
                      ),
                      j(o, i.widgetId, Xe),
                      o.isInitialized = !0;
                      break;
                    }
                  default:
                    break;
                }
              }
            }
          },
          onWindowMessage = function (i) {
            if (_u(i)) {
              var v = i.data;
              if (!bu(i)) {
                logError("Ignored message from wrong origin: ".concat(i.origin, "."));
                return;
              }
              if (!(v.widgetId === "" || !stateObject.widgetMap.has(v.widgetId))) {
                var h = Y(v.widgetId),
                  p = stateObject.widgetMap.get(v.widgetId);
                if (p !== void 0) {
                  if (!Eu(i, p, h)) {
                    logError(
                      "Ignored message from unexpected source for event: ".concat(
                        v.event,
                        "."
                      )
                    );
                    return;
                  }
                  handleIframeMessage(v);
                }
              }
            }
          };
        stateObject.msgHandler = onWindowMessage,
        stateObject.internalMsgHandler = handleIframeMessage,
        window.addEventListener("message", onWindowMessage);
        function generateWidgetId() {
          var c = "abcdefghijklmnopqrstuvwxyz0123456789",
            i = c.length,
            v;
          do {
            v = "";
            for (var h = 0; h < 5; h++)
            v += c.charAt(Math.floor(Math.random() * i));
          } while (stateObject.widgetMap.has(v));
          return v;
        }
        function resolveWidget(c) {
          var i;
          if (typeof c == "string") {
            var v = containerToWidgetId(c);
            if (v !== null) return v;
            try {
              var h = document.querySelector(c);
              return h === null ? null : resolveWidget(h);
            } catch (o) {
              return null;
            }
          }
          if (instanceOf(c, Element)) return containerToWidgetId(c);
          var p = !!c;
          return p || stateObject.widgetMap.size === 0 ?
          null :
          (i = Fe()) !== null && i !== void 0 ?
          i :
          null;
        }
        function j(c, i, v) {
          for (; c.msgQueue.length > 0;) {
            var h = c.msgQueue.pop();
            postToIframe(
              v,
              {
                cs: h === ExecuteEventEnum.Execute ? getUsageTokens(c) : void 0,
                event: h,
                source: SOURCE_TAG,
                widgetId: i
              },
              c.iframeOrigin
            );
          }
        }
        function U(c) {
          return c.isExecuting;
        }
        function k(c, i) {
          if (i) {
            var v = [
              "retry-interval",
              "retry",
              "size",
              "theme",
              "tabindex",
              "execution",
              "refresh-expired",
              "refresh-timeout",
              "response-field-name",
              "response-field",
              "language",
              "base-url",
              "appearance",
              "sitekey",
              "feedback-enabled",
              "_tcsrp"],

              h = [],
              p = !0,
              o = !1,
              g = void 0;
            try {
              for (
              var L = v[Symbol.iterator](), _;
              !(p = (_ = L.next()).done);
              p = !0)
              {
                var N = _.value;
                Object.getOwnPropertyDescriptor(i, N) !== void 0 &&
                i[N] !== void 0 &&
                i[N] !== c.params[N] &&
                h.push(N);
              }
            } catch (F) {
              o = !0, g = F;
            } finally {
              try {
                !p && L.return != null && L.return();
              } finally {
                if (o) throw g;
              }
            }
            h.length > 0 &&
            x(
              "The parameters ".
              concat(
                v.join(","),
                " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters "
              ).
              concat(h.join(",")),
              3618
            ),
            i.action !== void 0 &&
            i.action !== "" && (
            hn(i.action) ||
            x(
              'Invalid input for optional parameter "action", got "'.concat(
                i.action,
                '"'
              ),
              3604
            ),
            c.action = i.action),
            i.cData !== void 0 &&
            i.cData !== "" && (
            _n(i.cData) ||
            x(
              'Invalid input for optional parameter "cData", got "'.concat(
                i.cData,
                '"'
              ),
              3605
            ),
            c.cData = i.cData),
            i["after-interactive-callback"] !== void 0 && (
            c.cbAfterInteractive = Le(
              "after-interactive-callback",
              i["after-interactive-callback"]
            )),
            i["before-interactive-callback"] !== void 0 && (
            c.cbBeforeInteractive = Le(
              "before-interactive-callback",
              i["before-interactive-callback"]
            )),
            i.callback !== void 0 && (c.cbSuccess = i.callback),
            i["expired-callback"] !== void 0 && (
            c.cbExpired = Le("expired-callback", i["expired-callback"])),
            i["timeout-callback"] !== void 0 && (
            c.cbTimeout = Le("timeout-callback", i["timeout-callback"])),
            i["error-callback"] !== void 0 && (
            c.cbError = Qr(i["error-callback"])),
            i["unsupported-callback"] !== void 0 && (
            c.cbUnsupported = i["unsupported-callback"]),
            i.chlPageData !== void 0 &&
            i.chlPageData !== "" && (
            c.chlPageData = i.chlPageData);
          }
        }
        function D(c, i, v) {
          c === "explicit" && i !== void 0 && k(i, v), logError(cu(c));
        }
        function resetPublicApi(c) {
          resetWidget(TriggerEnum.Api, c, buildUsageEntry(qa, stateObject));
        }
        function resetWidget(c, i, v) {
          var h,
            p,
            o = resolveWidget(i);
          o === null &&
          x("Nothing to reset found for provided container", 3329);
          var g = stateObject.widgetMap.get(o);
          g === void 0 &&
          x("Widget ".concat(o, " to reset was not found."), 3331),
          Ft(g, v);
          var L = g.isExecuted;
          g.isResetting = !0,
          g.response = void 0,
          g.mode = void 0,
          g.msgQueue = [],
          g.isComplete = !1,
          g.isExecuted = !1,
          g.isExecuting = !1,
          g.isExpired = !1,
          g.isFailed = !1,
          g.isInitialized = !1,
          g.isStale = !1,
          g.isOverrunning = !1,
          g.cfChlOut = void 0,
          g.cfChlOutS = void 0,
          g.errorCode = void 0,
          g.frMd = void 0,
          g.autoFeedbackSent = !1,
          u(g),
          n.delete(g),
          t.delete(g),
          a.delete(g),
          g.watchcat.overrunBeginSeq = 0,
          g.watchcat.lastAckedSeq = 0,
          g.watchcat.seq = 0,
          m(g, c, L) && (
          g.msgQueue.push(ExecuteEventEnum.Execute),
          g.isExecuted = !0,
          g.isExecuting = !0);
          var _ = Y(o),
            N = postToIframeWindow(g, _);
          N === null &&
          x("Widget ".concat(o, " to reset was not found."), 3330),
          (g.params.appearance === AppearanceEnum.InteractionOnly ||
          g.params.appearance === AppearanceEnum.Execute) &&
          On(N, g),
          g.params.sitekey === null &&
          x("Unexpected Error: Sitekey is null", 3347);
          var F = N.cloneNode();
          instanceOf(F, HTMLIFrameElement) ||
          x("Unexpected Error: Cloned widget is not an iframe", 3348);
          var z = ft(g),
            q = buildIframeUrl(
              o,
              g.params.sitekey,
              g.params,
              (h = g.rcV) !== null && h !== void 0 ? h : EMPTY_RCV,
              !1,
              "g",
              c,
              stateObject.scriptUrlParsed,
              wn(g),
              z[je] ? z[Je] : void 0
            );
          F.src = q,
          Li(F, g),
          g.iframeOrigin = pt(q),
          (p = N.parentNode) === null || p === void 0 || p.replaceChild(F, N),
          An(g, _),
          g.retryTimeout !== void 0 && window.clearTimeout(g.retryTimeout);
        }
        function removeWidget(c, i) {
          var v = Y(c),
            h = [
            "input#".concat(v, "_response"),
            "input#".concat(v, "_g_response")];

          document.querySelectorAll(h.join(", ")).forEach(function (p) {
            p.remove();
          }),
          i.shadow.querySelectorAll(h.join(", ")).forEach(function (p) {
            p.remove();
          }),
          Ut(v),
          mt(i),
          i.wrapper.remove(),
          lr(i),
          i.retryTimeout !== void 0 && window.clearTimeout(i.retryTimeout),
          stateObject.widgetMap.delete(c),
          watchcatStop(stateObject);
        }
        function removePublicApi(c) {
          var i = buildUsageEntry(Ja, stateObject),
            v = resolveWidget(c),
            h = v === null ? void 0 : stateObject.widgetMap.get(v);
          if (v === null || h === void 0) {
            logError("Nothing to remove found for the provided container.");
            return;
          }
          trackUsageCall(stateObject.gcs, i), Ft(h, i), removeWidget(v, h);
        }
        function reloadAfterUpgrade() {
          var c = toConsumableArray(stateObject.widgetMap.keys()),
            i = !0,
            v = !1,
            h = void 0;
          try {
            for (
            var p = c[Symbol.iterator](), o;
            !(i = (o = p.next()).done);
            i = !0)
            {
              var g = o.value,
                L = stateObject.widgetMap.get(g),
                _ = Y(g);
              L !== void 0 && (Ut(_), mt(L), resetWidget(TriggerEnum.UpgradeReload, _));
            }
          } catch (N) {
            v = !0, h = N;
          } finally {
            try {
              !i && p.return != null && p.return();
            } finally {
              if (v) throw h;
            }
          }
        }
        function renderWidget(c, i, v, h) {
          var p,
            o,
            g,
            L,
            _,
            N,
            F,
            z,
            q,
            ge,
            He = nowMs(),
            se,
            ce;
          if (typeof c == "string") {
            var ye = containerToWidgetId(c);
            if (ye === null) {
              var fe;
              try {
                fe = document.querySelector(c);
              } catch (Iu) {
                x(
                  'Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(
                    c,
                    '"'
                  ),
                  3586
                );
              }
              fe === null &&
              x('Unable to find a container for "'.concat(c, '"'), 3585),
              se = fe;
            } else {
              var Ie,
                $ = stateObject.widgetMap.get(ye),
                we =
                (Ie = $ == null ? void 0 : $.wrapper.parentElement) !==
                null && Ie !== void 0 ?
                Ie :
                null;
              if (we !== null && Ci(v, $))
              se = we, ce = { widget: $, widgetId: ye };else
              return $ !== void 0 && sendUsageToIframe(ye, $, h), D(v, $, i), Y(ye);
            }
          } else
          instanceOf(c, HTMLElement) ?
          se = c :
          x(
            'Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"',
            3587
          );
          if (ce === void 0) {
            var Z = containerToWidgetId(se);
            if (Z !== null) {
              var Re = stateObject.widgetMap.get(Z);
              if (Re !== void 0 && Ci(v, Re) && Re.wrapper.parentElement === se)
              ce = { widget: Re, widgetId: Z };else
              return Re && sendUsageToIframe(Z, Re, h), D(v, Re, i), Y(Z);
            }
          }
          var yt = getEmbeddingUrl();
          if (yt === void 0 || yt === "")
          return x("Turnstile cannot determine its page location", 3607);
          var rt = readDataAttributes(se);
          if (rt !== void 0) {
            var T = Object.assign(rt, i),
              ze = T.action,
              Ge = T.cData,
              ht = T.chlPageData,
              Ae = T.sitekey;
            T.theme = (p = T.theme) !== null && p !== void 0 ? p : ThemeEnum.Auto,
            T.retry = (o = T.retry) !== null && o !== void 0 ? o : RetryOptionEnum.Auto,
            T.execution =
            (g = T.execution) !== null && g !== void 0 ? g : ExecutionModeEnum.Render,
            T.appearance =
            (L = T.appearance) !== null && L !== void 0 ? L : AppearanceEnum.Always,
            T["retry-interval"] = Ri(T["retry-interval"], DEFAULT_RETRY_INTERVAL_MS),
            T["expiry-interval"] = Ri(
              T["expiry-interval"],
              (ia - EXPIRY_BUFFER_SECONDS) * 1e3
            ),
            T.size = (_ = T.size) !== null && _ !== void 0 ? _ : SizeEnum.Normal;
            var Cr = T.callback,
              jt = Le("expired-callback", T["expired-callback"]),
              kr = Le("timeout-callback", T["timeout-callback"]),
              _t = Le(
                "after-interactive-callback",
                T["after-interactive-callback"]
              ),
              Lr = Le(
                "before-interactive-callback",
                T["before-interactive-callback"]
              ),
              Kt = Qr(T["error-callback"]),
              bt = T["unsupported-callback"];
            typeof Ae != "string" &&
            x(
              'Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(
                typeof Ae == "undefined" ? "undefined" : typeOf(Ae),
                '"'
              ),
              3588
            ),
            Ti(Ae) ||
            x(
              'Invalid input for parameter "sitekey", got "'.concat(
                Ae,
                '"'
              ),
              3589
            ),
            bn(T.size) ||
            x(
              'Invalid type for parameter "size", expected normal|compact, got "'.
              concat(String(T.size), '" ').
              concat(typeOf(T.size)),
              3590
            ),
            vn(T.theme) ||
            x(
              'Invalid type for parameter "theme", expected dark|light|auto, got "'.
              concat(String(T.theme), '" ').
              concat(typeOf(T.theme)),
              3591
            ),
            mn(T.retry) ||
            x(
              'Invalid type for parameter "retry", expected never|auto, got "'.
              concat(String(T.retry), '" ').
              concat(typeOf(T.retry)),
              3592
            ),
            (T.language === void 0 || T.language === "") && (
            T.language = "auto"),
            xn(T.language) || (
            logError(
              'Invalid language value: "'.concat(
                T.language,
                ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)."
              )
            ),
            T.language = "auto"),
            Sn(T.appearance) ||
            x(
              'Unknown appearance value: "'.concat(
                String(T.appearance),
                ", expected either: 'always', 'execute', or 'interaction-only'."
              ),
              3600
            ),
            In(T.execution) ||
            x(
              'Unknown execution value: "'.concat(
                String(T.execution),
                ", expected either: 'render' or 'execute'."
              ),
              3601
            ),
            gn(T["retry-interval"]) ||
            x(
              'Invalid retry-interval value: "'.concat(
                T["retry-interval"],
                ', expected an integer value > 0 and < 900000"'
              ),
              3602
            ),
            yn(T["expiry-interval"]) ||
            x(
              'Invalid expiry-interval value: "'.concat(
                T["expiry-interval"],
                ', expected an integer value > 0 and < 360000"'
              ),
              3602
            );
            var Oe =
            (N = T["refresh-expired"]) !== null && N !== void 0 ? N : RefreshExpiredOptionEnum.Auto;
            En(Oe) ?
            T["refresh-expired"] = Oe :
            x(
              'Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.
              concat(String(Oe), '" ').
              concat(typeof Oe == "undefined" ? "undefined" : typeOf(Oe)),
              3603
            );
            var We =
            (F = T["refresh-timeout"]) !== null && F !== void 0 ? F : RefreshTimeoutOptionEnum.Auto;
            Tn(We) ?
            T["refresh-timeout"] = We :
            x(
              'Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.
              concat(String(We), '" ').
              concat(typeof We == "undefined" ? "undefined" : typeOf(We)),
              3603
            ),
            hn(ze) ||
            x(
              'Invalid input for optional parameter "action", got "'.concat(
                ze,
                '"'
              ),
              3604
            ),
            _n(Ge) ||
            x(
              'Invalid input for optional parameter "cData", got "'.concat(
                Ge,
                '"'
              ),
              3605
            );
            var oe = document.createElement("iframe"),
              Xe = document.createElement("div"),
              zt = document.createElement("div"),
              Gt = zt.attachShadow({ mode: "closed" }),
              ee = generateWidgetId(),
              he = Y(ee),
              Xt = [],
              pe = T.execution === ExecutionModeEnum.Render;
            pe && Xt.push(ExecuteEventEnum.Execute);
            var nt = buildUsageStringAggregate(stateObject.gcs);
            trackUsageCall(nt, h), stateObject.lastWidgetIdx++;
            var Mr = {},
              Ye = T._tcsrp,
              _e = typeof Ye == "string" && Ye.length > 0 ? Ye : void 0,
              Nr = st(stateObject),
              Hn = _e != null ? _e : Nr[Me],
              Pr;
            _e !== void 0 ? Pr = Nt : Nr[Me] !== void 0 && (Pr = Mt);
            var Vi = _e === void 0 ? Hn !== void 0 && Nr[$e] === !0 : !0,
              Wn = defineProperties(
                objectSpread(
                  {
                    action: ze,
                    assetCtxCallback: T._acCb,
                    autoFeedbackSent: !1,
                    cData: Ge,
                    cbAfterInteractive: _t,
                    cbBeforeInteractive: Lr,
                    cbError: Kt,
                    cbExpired: jt,
                    cbSuccess: Cr,
                    cbTimeout: kr,
                    cbUnsupported: bt,
                    chlPageData: ht,
                    feedbackOpen: !1,
                    gcs: nt,
                    idx: stateObject.lastWidgetIdx,
                    isComplete: !1,
                    isExecuted: pe,
                    isExecuting: pe,
                    isExpired: !1,
                    isFailed: !1,
                    isInitialized: !1,
                    isOverrunning: !1,
                    isResetting: !1,
                    isStale: !1,
                    msgQueue: Xt,
                    params: T,
                    rcV: EMPTY_RCV,
                    renderSource: v,
                    responseElementsBuilt: !1,
                    shadow: Gt,
                    watchcat: {
                      lastAckedSeq: 0,
                      missingWidgetWarning: !1,
                      overrunBeginSeq: 0,
                      seq: 0
                    }
                  },
                  Mr
                ),
                {
                  iframeHost: zt,
                  widgetInitStartTimeTsMs: 0,
                  widgetParamsStartTimeTsMs: 0,
                  widgetRenderEndTimeTsMs: 0,
                  widgetRenderStartTimeTsMs: He,
                  wrapper: Xe
                }
              ),
              Et = ft(Wn);
            Et[Je] = Hn,
            Et[dt] = Pr,
            Et[je] = Vi,
            stateObject.widgetMap.set(ee, Wn),
            watchcatStart(stateObject);
            var be = stateObject.widgetMap.get(ee);
            be === void 0 && x("Turnstile Initialization Error", 3606),
            be.chlPageData !== void 0 && be.chlPageData !== "" && Mn(),
            oe.style.border = "none",
            oe.style.overflow = "hidden";
            var Un = buildIframeUrl(
              ee,
              Ae,
              T,
              EMPTY_RCV,
              !1,
              "g",
              TriggerEnum.New,
              stateObject.scriptUrlParsed,
              wn(be),
              Et[je] ? Et[Je] : void 0
            );
            be.iframeOrigin = pt(Un),
            oe.setAttribute("src", Un),
            Li(oe, be);
            var Vn = [
            "cross-origin-isolated",
            "fullscreen",
            "autoplay",
            "keyboard-map",
            "gamepad",
            "xr-spatial-tracking"];

            return (
              G(
                (z =
                (ge = document.featurePolicy) === null ||
                ge === void 0 ||
                (q = ge.features) === null ||
                q === void 0 ?
                void 0 :
                q.call(ge)) !== null && z !== void 0 ?
                z :
                [],
                PRIVATE_TOKEN_POLICY
              ) && Vn.push(PRIVATE_TOKEN_POLICY),
              oe.setAttribute("allow", Vn.join("; ")),
              oe.setAttribute(
                "sandbox",
                "allow-same-origin allow-scripts allow-popups"
              ),
              oe.id = he,
              oe.title = "Widget containing a Cloudflare security challenge",
              Gt.appendChild(oe),
              On(oe, be),
              vr(be),
              createResponseInput(be, he),
              ce && removeWidget(ce.widgetId, ce.widget),
              se.appendChild(Xe),
              be.widgetRenderEndTimeTsMs = nowMs(),
              he);

          }
        }
        function renderPublicApi(c, i) {
          return renderWidget(c, i, "explicit", buildUsageEntry(Va, stateObject));
        }
        function runImplicitRender() {
          var c = [SELECTOR_CF_TURNSTILE, $n];
          stateObject.isRecaptchaCompatibilityMode && c.push(SELECTOR_GRECAPTCHA);
          var i = buildUsageEntry(Ga, stateObject);
          document.querySelectorAll(c.join(", ")).forEach(function (v) {
            renderWidget(v, void 0, "implicit", i);
          });
        }
        function Fe() {
          var c,
            i = -1,
            v = !0,
            h = !1,
            p = void 0;
          try {
            for (
            var o = stateObject.widgetMap[Symbol.iterator](), g;
            !(v = (g = o.next()).done);
            v = !0)
            {
              var L = slicedToArrayAll(g.value, 2),
                _ = L[0],
                N = L[1];
              i < N.idx && (c = _, i = N.idx);
            }
          } catch (F) {
            h = !0, p = F;
          } finally {
            try {
              !v && o.return != null && o.return();
            } finally {
              if (h) throw p;
            }
          }
          return i === -1 && x("Could not find widget", 43778), c;
        }
        var tt = {},
          Ui = {
            showFeedback: function (i) {
              var v = resolveWidget(i);
              if (v !== null) {
                var h = Y(v),
                  p = stateObject.widgetMap.get(v);
                p !== void 0 && feedbackOverlayFunction(h, p, FeedbackKindEnum.Custom, stateObject.scriptUrlParsed);
              }
            }
          },
          turnstileApiObject = defineProperties(objectSpread({}, tt), {
            _private: Ui,
            execute: function (i, v) {
              var h = buildUsageEntry(Ba, stateObject),
                p = !1,
                o = resolveWidget(i);
              if (o === null) {
                var g;
                v === void 0 &&
                x(
                  "Please provide 2 parameters to execute: container and parameters",
                  43521
                );
                var L = renderWidget(i, v, "explicit", h);
                p = !0,
                L == null && x("Failed to render widget", 43522),
                o = (g = kt(L)) !== null && g !== void 0 ? g : resolveWidget(i),
                o === null && x("Failed to render widget", 43522);
              }
              var _ = stateObject.widgetMap.get(o);
              if (_ !== void 0) {
                var N = p ? !1 : Ft(_, h);
                k(_, v);
                var F = Y(o);
                if (_.isExecuting) {
                  logError(
                    "Call to execute() on a widget that is already executing (".concat(
                      F,
                      "), consider using reset() before execute()."
                    )
                  ),
                  N && sendGcsEvent(o, _);
                  return;
                }
                if (
                _.isExecuting = !0,
                _.response !== void 0 && _.response !== "")
                {
                  var z;
                  _.isExecuting = !1,
                  logError(
                    "Call to execute() on a widget that was already executed (".concat(
                      F,
                      "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token."
                    )
                  ),
                  N && sendGcsEvent(o, _),
                  (z = _.cbSuccess) === null ||
                  z === void 0 ||
                  z.call(_, _.response, !1);
                  return;
                }
                _.isExpired &&
                logError(
                  "Call to execute on a expired-widget (".concat(
                    F,
                    "), consider using reset() before."
                  )
                ),
                _.isStale && (resetWidget(TriggerEnum.StaleExecute, F), _.isExecuting = !0),
                (_.isResetting || !_.isInitialized) &&
                _.msgQueue.push(ExecuteEventEnum.Execute),
                _.isExecuted = !0;
                var q = postToIframeWindow(_, F);
                if (
                q || (
                _.isExecuting = !1,
                x("Widget ".concat(F, " to execute was not found"), 43522)),
                _.isResetting || !_.isInitialized)

                return;
                if (_.msgQueue.length > 0) {
                  j(_, o, q), _.params.appearance === AppearanceEnum.Execute && br(q, _);
                  return;
                }
                _.params.appearance === AppearanceEnum.Execute && br(q, _),
                U(_) &&
                postToIframe(
                  q,
                  { cs: getUsageTokens(_), event: "execute", source: SOURCE_TAG, widgetId: o },
                  _.iframeOrigin
                );
              }
            },
            getResponse: function (i) {
              var v = buildUsageEntry(ja, stateObject);
              if (typeof i == "undefined") {
                var h = Fe();
                if (h !== void 0) {
                  var p = stateObject.widgetMap.get(h);
                  return (
                    p !== void 0 && sendUsageToIframe(h, p, v),
                    (p == null ? void 0 : p.isExpired) === !0 &&
                    logError(
                      "Call to getResponse on a widget that expired, consider refreshing the widget."
                    ),
                    p == null ? void 0 : p.response);

                }
                x("Could not find a widget", 43794);
              }
              var o = resolveWidget(i);
              o === null &&
              x("Could not find widget for provided container", 43778);
              var g = stateObject.widgetMap.get(o);
              return g && sendUsageToIframe(o, g, v), g == null ? void 0 : g.response;
            },
            isExpired: function (i) {
              var v,
                h = buildUsageEntry(Ka, stateObject);
              if (typeof i == "undefined") {
                var p = Fe();
                if (p !== void 0) {
                  var o,
                    g = stateObject.widgetMap.get(p);
                  return (
                    g !== void 0 && sendUsageToIframe(p, g, h),
                    (o = g == null ? void 0 : g.isExpired) !== null &&
                    o !== void 0 ?
                    o :
                    !1);

                }
                x("Could not find a widget", 43794);
              }
              var L = resolveWidget(i);
              L === null &&
              x("Could not find widget for provided container", 43778);
              var _ = stateObject.widgetMap.get(L);
              return (
                _ && sendUsageToIframe(L, _, h),
                (v = _ == null ? void 0 : _.isExpired) !== null && v !== void 0 ?
                v :
                !1);

            },
            ready: function (i) {
              stateObject.scriptWasLoadedAsync && (
              logError(
                "turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."
              ),
              x(
                "Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().",
                3857
              )),
              typeof i != "function" &&
              x(
                'turnstile.ready() expected a "function" argument, got "'.concat(
                  typeof i == "undefined" ? "undefined" : typeOf(i),
                  '"'
                ),
                3841
              );
              var v = buildUsageEntry(za, stateObject);
              trackUsageCall(stateObject.gcs, v);
              var h = !0,
                p = !1,
                o = void 0;
              try {
                for (
                var g = stateObject.widgetMap[Symbol.iterator](), L;
                !(h = (L = g.next()).done);
                h = !0)
                {
                  var _ = slicedToArrayAll(L.value, 2),
                    N = _[0],
                    F = _[1];
                  sendUsageToIframe(N, F, v);
                }
              } catch (z) {
                p = !0, o = z;
              } finally {
                try {
                  !h && g.return != null && g.return();
                } finally {
                  if (p) throw o;
                }
              }
              if (stateObject.isReady) {
                i();
                return;
              }
              readyQueue.push(i);
            },
            remove: removePublicApi,
            render: renderPublicApi,
            reset: resetPublicApi
          });
        return (
          Object.defineProperty(turnstileApiObject, CONTROLLER_SYMBOL, {
            configurable: !0,
            enumerable: !1,
            value: {
              clearPendingApiJsReloadRequest: function () {
                clearMismatchReload();
              },
              rearmTimedUpgrade: function () {
                armSelfUpgrade();
              },
              rejectPendingApiJsReloadRequest: function () {
                rejectApiJsReload();
              },
              reloadAfterUpgrade: function () {
                reloadAfterUpgrade();
              }
            }
          }),
          { runImplicitRender: runImplicitRender, turnstile: turnstileApiObject });

      }(),
      queueImplicitRender = function () {
        moduleExports.runImplicitRender();
      },
      turnstileApi = moduleExports.turnstile;
    function readDataAttributes(e) {
      var t,
        r,
        n = e.getAttribute("data-sitekey"),
        a = { sitekey: n },
        u = e.getAttribute("data-tabindex");
      u !== null && u !== "" && (a.tabindex = Math.trunc(Number(u)));
      var l = e.getAttribute("data-theme");
      l !== null &&
      l !== "" && (
      vn(l) ?
      a.theme = l :
      logError('Unknown data-theme value: "'.concat(l, '".')));
      var d = e.getAttribute("data-size");
      if (
      d !== null &&
      d !== "" && (
      bn(d) ?
      a.size = d :
      logError('Unknown data-size value: "'.concat(d, '".'))),
      0)

      var f;
      var s = e.getAttribute("data-action");
      typeof s == "string" && (a.action = s);
      var m = e.getAttribute("data-cdata");
      typeof m == "string" && (a.cData = m);
      var E = e.getAttribute("data-retry");
      E !== null &&
      E !== "" && (
      mn(E) ?
      a.retry = E :
      logError(
        'Invalid data-retry value: "'.concat(
          E,
          ", expected either 'never' or 'auto'\"."
        )
      ));
      var S = e.getAttribute("data-retry-interval");
      if (S !== null && S !== "") {
        var O = Math.trunc(Number(S));
        gn(O) ?
        a["retry-interval"] = O :
        logError(
          'Invalid data-retry-interval value: "'.concat(
            S,
            ', expected an integer value > 0 and < 900000".'
          )
        );
      }
      var b = e.getAttribute("data-expiry-interval");
      if (b !== null && b !== "") {
        var A = Math.trunc(Number(b));
        yn(A) ?
        a["expiry-interval"] = A :
        logError(
          'Invalid data-expiry-interval value: "'.concat(
            A,
            ', expected an integer value > 0 and < 360000".'
          )
        );
      }
      var P = e.getAttribute("data-refresh-expired");
      P !== null &&
      P !== "" && (
      En(P) ?
      a["refresh-expired"] = P :
      logError(
        'Unknown data-refresh-expired value: "'.concat(
          P,
          ", expected either: 'never', 'auto' or 'manual'."
        )
      ));
      var I = e.getAttribute("data-refresh-timeout");
      I !== null &&
      I !== "" && (
      Tn(I) ?
      a["refresh-timeout"] = I :
      logError(
        'Unknown data-refresh-timeout value: "'.concat(
          I,
          ", expected either: 'never', 'auto' or 'manual'."
        )
      ));
      var M = e.getAttribute("data-language");
      M !== null &&
      M !== "" && (
      xn(M) ?
      a.language = M :
      logError(
        'Invalid data-language value: "'.concat(
          M,
          ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)."
        )
      ));
      function C(B) {
        var xe = e.getAttribute(B);
        if (!(xe === null || xe === "")) {
          var Se = Ln(xe);
          return Se === void 0 ?
          void 0 :
          function () {
            for (
            var et = arguments.length, Fe = new Array(et), tt = 0;
            tt < et;
            tt++)

            Fe[tt] = arguments[tt];
            return Se.apply(void 0, toConsumableArray(Fe));
          };
        }
      }
      var j = [
      "error-callback",
      "unsupported-callback",
      "callback",
      "expired-callback",
      "timeout-callback",
      "after-interactive-callback",
      "before-interactive-callback"];

      j.forEach(function (B) {
        Object.assign(a, defineProperty({}, B, C("data-".concat(B))));
      }),
      a["feedback-enabled"] =
      (t = Er(e.getAttribute("data-feedback-enabled"), !0, function (B) {
        return 'Invalid data-feedback-enabled value: "'.concat(
          B,
          "\", expected either: 'true' or 'false'. Value is ignored."
        );
      })) !== null && t !== void 0 ?
      t :
      !0,
      a["response-field"] =
      (r = Er(e.getAttribute("data-response-field"), !0, function (B) {
        return 'Invalid data-response-field value: "'.concat(
          B,
          "\", expected either: 'true' or 'false'. Value is ignored."
        );
      })) !== null && r !== void 0 ?
      r :
      !0;
      var U = e.getAttribute("data-response-field-name");
      U !== null && U !== "" && (a["response-field-name"] = U);
      var k = e.getAttribute("data-execution");
      k !== null &&
      k !== "" && (
      In(k) ?
      a.execution = k :
      logError(
        'Unknown data-execution value: "'.concat(
          k,
          ", expected either: 'render' or 'execute'."
        )
      ));
      var D = e.getAttribute("data-appearance");
      D !== null &&
      D !== "" && (
      Sn(D) ?
      a.appearance = D :
      logError(
        'Unknown data-appearance value: "'.concat(
          D,
          ", expected either: 'always', 'execute', or 'interaction-only'."
        )
      ));
      var ie = e.getAttribute("data-offlabel-show-privacy"),
        H = Er(ie, void 0, function (B) {
          return 'Invalid data-offlabel-show-privacy value: "'.concat(
            B,
            '", expected "true" or "false".'
          );
        });
      typeof H == "boolean" && (a["offlabel-show-privacy"] = H);
      var K = e.getAttribute("data-offlabel-show-help"),
        X = Er(K, void 0, function (B) {
          return 'Invalid data-offlabel-show-help value: "'.concat(
            B,
            '", expected "true" or "false".'
          );
        });
      return typeof X == "boolean" && (a["offlabel-show-help"] = X), a;
    }
    function gateSelfUpgrade() {
      if (Mn(), Ni()) return !1;
      var e = performSelfUpgrade(window.turnstile, stateObject);
      return e ? !0 : (armSelfUpgrade(), !1);
    }
    Ze = !1,
    V = findOwnScriptTag(),
    stateObject.scriptWasLoadedAsync =
    (xr = V == null ? void 0 : V.loadedAsync) !== null && xr !== void 0 ?
    xr :
    !1,
    stateObject.scriptUrl =
    (Sr = V == null ? void 0 : V.src) !== null && Sr !== void 0 ?
    Sr :
    "undefined",
    stateObject.scriptUrlParsed = V == null ? void 0 : V.url,
    uu(),
    (V == null ? void 0 : V.params) !== void 0 &&
    V.params !== null && (
    gt = V.params.get("compat"),
    (gt == null ? void 0 : gt.toLowerCase()) === "recaptcha" ?
    typeof window.grecaptcha == "undefined" ? (
    logError("Compatibility layer enabled."),
    stateObject.isRecaptchaCompatibilityMode = !0,
    window.grecaptcha = turnstileApi) :
    logError(
      "grecaptcha is already defined. The compatibility layer will not be enabled."
    ) :
    gt !== null &&
    logError('Unknown value for api.js?compat: "'.concat(gt, '", ignoring.')),
    V.params.forEach(function (e, t) {
      G(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) ||
      logError(
        'Unknown parameter passed to api.js: "?'.concat(
          t,
          '=...", ignoring.'
        )
      );
    }),
    Ze = V.params.get("_upgrade") === "true",
    Pe = V.params.get("onload"),
    Pe !== null &&
    Pe !== "" &&
    !Ze &&
    setTimeout(function () {
      var e = Ln(Pe);
      e === void 0 ? (
      logError(
        "Unable to find onload callback '".
        concat(
          Pe,
          "' immediately after loading, expected 'function', got '"
        ).
        concat(typeOf(kn(Pe)), "'.")
      ),
      setTimeout(function () {
        var t = Ln(Pe);
        t === void 0 ?
        logError(
          "Unable to find onload callback '".
          concat(
            Pe,
            "' after 1 second, expected 'function', got '"
          ).
          concat(typeOf(kn(Pe)), "'.")
        ) :
        t();
      }, 1e3)) :
      e();
    }, 0)),
    Bt = "turnstile" in window,
    Te = Bt ? getController(window.turnstile) : void 0,
    Ir =
    Bt && Ze ?
    migrateUpgradeState(window.turnstile, stateObject, function () {
      var e;
      window.turnstile = turnstileApi,
      (e = getController(turnstileApi)) === null || e === void 0 || e.reloadAfterUpgrade(),
      watchcatStart(stateObject);
    }) :
    !1,
    Ir && (Te == null || Te.clearPendingApiJsReloadRequest()),
    Bt && Ze && !Ir ? (
    logError(
      "Turnstile upgrade state was missing. Keeping the existing Turnstile instance."
    ),
    Te == null || Te.rejectPendingApiJsReloadRequest(),
    Te == null || Te.rearmTimedUpgrade()) :
    Bt && !Ze ?
    logError(
      "Turnstile already has been loaded. Was Turnstile imported multiple times?"
    ) : (
    Ir || (window.turnstile = turnstileApi),
    Ze || (
    (V == null || (wr = V.params) === null || wr === void 0 ?
    void 0 :
    wr.get("render")) !== "explicit" && readyQueue.push(queueImplicitRender),
    document.readyState === "complete" ||
    document.readyState === "interactive" ?
    setTimeout(drainReadyQueue, 0) :
    window.addEventListener("DOMContentLoaded", drainReadyQueue)),
    armSelfUpgrade());
    var xr, Sr, Ze, V, gt, Pe, Bt, Te, Ir, wr;
  })();
})(void 0, void 0);
