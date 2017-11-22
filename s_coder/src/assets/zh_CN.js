!function (n, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n.__locale__zh_CN = n.__locale__zh_CN || {}, n.__locale__zh_CN.js = e())
}(this, function () {
  "use strict";
  var n = {
    after: function (n, e) {
      return " " + n + "必须在" + e[0] + "之后"
    }, alpha_dash: function (n) {
      return " " + n + "能够包含字母数字字符，包括破折号、下划线"
    }, alpha_num: function (n) {
      return n + " 只能包含字母数字字符."
    }, alpha_spaces: function (n) {
      return " " + n + " 只能包含字母字符，包括空格."
    }, alpha: function (n) {
      return " " + n + " 只能包含字母字符."
    }, before: function (n, e) {
      return " " + n + " 必须在" + e[0] + " 之前."
    }, between: function (n, e) {
      return " " + n + " 必须在" + e[0] + " " + e[1] + "之间."
    }, confirmed: function (n, e) {
      return " " + n + " 不能和" + e[0] + "匹配."
    }, date_between: function (n, e) {
      return " " + n + "必须在" + e[0] + "和" + e[1] + "之间."
    }, date_format: function (n, e) {
      return " " + n + "必须在在" + e[0] + "格式中."
    }, decimal: function (n, e) {
      void 0 === e && (e = ["*"]);
      var t = e[0];
      return " " + n + " 必须是数字的而且能够包含" + ("*" === t ? "" : t) + " 小数点."
    }, digits: function (n, e) {
      return " " + n + " 必须是数字，且精确到 " + e[0] + "数"
    }, dimensions: function (n, e) {
      return " " + n + "必须是 " + e[0] + " 像素到 " + e[1] + " 像素."
    }, email: function (n) {
      return " " + n + " 必须是有效的邮箱."
    }, ext: function (n) {
      return " " + n + " 必须是有效的文件."
    }, image: function (n) {
      return " " + n + " 必须是图片."
    }, in: function (n) {
      return " " + n + " 必须是一个有效值."
    }, ip: function (n) {
      return " " + n + " 必须是一个有效的地址."
    }, max: function (n, e) {
      return " " + n + " 不能大于" + e[0] + "字符."
    }, mimes: function (n) {
      return " " + n + " 必须是有效的文件类型."
    }, min: function (n, e) {
      return " " + n + " 必须至少有 " + e[0] + " 字符."
    }, not_in: function (n) {
      return " " + n + "必须是一个有效值."
    }, numeric: function (n) {
      return " " + n + " 只能包含数字字符."
    }, regex: function (n) {
      return " " + n + " 格式无效."
    }, required: function (n) {
      return n + " 是必须的."
    }, size: function (n, e) {
      return " " + n + " 必须小于 " + e[0] + " KB."
    }, url: function (n) {
      return " " + n + "不是有效的url."
    }
  }, e = {name: "zh_CN", messages: n, attributes: {}};
  return "undefined" != typeof VeeValidate && VeeValidate && (VeeValidate.Validator, !0) && VeeValidate.Validator.addLocale(e), e
});