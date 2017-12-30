// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-redux-example$1.0.0/src/components/counter/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"container\"><div class=\"row\"><div class=\"col m6 s12\"><div class=\"card blue-grey darken-1\"><div class=\"card-content white-text\"><span class=\"card-title\">This is a simple counter</span><h3>Count " +
    marko_escapeXml(input.count) +
    "</h3></div><div class=\"card-action\"><a href=\"#\"" +
    marko_attr("data-marko", {
      onclick: __component.d("emit", [
          "increment"
        ])
    }, false) +
    ">Increment</a><a href=\"#\"" +
    marko_attr("data-marko", {
      onclick: __component.d("emit", [
          "decrement"
        ])
    }, false) +
    ">Decrement</a><a href=\"#\"" +
    marko_attr("data-marko", {
      onclick: __component.d("emit", [
          "setCount",
          50
        ])
    }, false) +
    ">Set count to 50</a></div></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-redux-example$1.0.0/src/components/counter/index.marko"
  };
