import { parseCookies, setCookie } from "nookies"
import * as parser from "accept-language-parser"

export const getLanguage = (lang, ctx) => {
  let language = (lang && lang.match(/[a-zA-Z\-]{2,10}/g)[0]) || fallbackLanguage
  language = language.split("-")[0]

  return getLanguageCookie(ctx) ?? validateLanguage(language)
}

export const setLanguageCookie = (ctx, language) => {
  setCookie(ctx, "language", language, {
    maxAge: 30 * 24 * 60 * 60,
    path: "*",
  })
}

export const getLanguageCookie = (ctx) => {
  return parseCookies(ctx).language
}

export const configureLanguage = (ctx) => {
  const { req, res, asPath, query } = ctx

  const language = req ? req.headers["accept-language"] : window.navigator.language
  let parsedLang = parser.parse(language)
  let lang = getLanguage((parsedLang && parsedLang[0] && parsedLang[0].code) || fallbackLanguage, ctx)

  setLanguageCookie(ctx, lang)

  return lang
}

const languages = ["de", "it"]
const fallbackLanguage = "de"

export const validateLanguage = (lang) => {
  return languages.includes(lang) ? lang : fallbackLanguage
}

export const UrlEncoder = {
  /**
   * Encode a [deeply] nested object for use in a url
   * Assumes Array.each is defined
   */
  encode: function (params, prefix) {
    var items = []

    for (var field in params) {
      var key = prefix ? prefix + "[" + field + "]" : field
      var type = typeof params[field]

      switch (type) {
        case "object":
          //handle arrays appropriately x[]=1&x[]=3
          if (params[field].constructor == Array) {
            params[field].each(function (val) {
              items.push(key + "[]=" + val)
            }, this)
          } else {
            //recusrively construct the sub-object
            items = items.concat(this.encode(params[field], key))
          }
          break
        case "function":
          break
        default:
          items.push(key + "=" + escape(params[field]))
          break
      }
    }

    return items.join("&")
  },

  /**
   * Decode a deeply nested Url
   */
  decode: function (params) {
    var obj = {}
    var parts = params.split("&")

    parts.each(function (kvs) {
      var kvp = kvs.split("=")
      var key = kvp[0]
      var val = unescape(kvp[1])

      if (/\[\w+\]/.test(key)) {
        var rgx = /\[(\w+)\]/g
        var top = /^([^\[]+)/.exec(key)[0]
        var sub = rgx.exec(key)

        if (!obj[top]) {
          obj[top] = {}
        }

        var unroot = function (o) {
          if (sub == null) {
            return
          }

          var sub_key = sub[1]

          sub = rgx.exec(key)

          if (!o[sub_key]) {
            o[sub_key] = sub ? {} : val
          }

          unroot(o[sub_key])
        }

        unroot(obj[top])

        //array
      } else if (/\[\]$/.test(key)) {
        key = /(^\w+)/.exec(key)[0]
        if (!obj[key]) {
          obj[key] = []
        }
        obj[key].push(val)
      } else {
        obj[key] = val
      }
    })

    return obj
  },
}

export function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top
  var eAmt = eTop / 100
  var curTime = 0
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where)
    curTime += time / 100
  }
}
