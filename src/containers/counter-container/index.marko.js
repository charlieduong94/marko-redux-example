// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-redux-example$1.0.0/src/containers/counter-container/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    counter_template = marko_loadTemplate(require.resolve("../../components/counter")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    counter_tag = marko_loadTag(counter_template);

function render(input, out, __component, component, state) {
  var data = input;

  counter_tag({
      count: state.count
    }, out, __component, "0", [
    [
      "increment",
      "increment"
    ],
    [
      "decrement",
      "decrement"
    ],
    [
      "setCount",
      "setCount"
    ]
  ]);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-redux-example$1.0.0/src/containers/counter-container/index.marko",
    component: "./",
    tags: [
      "../../components/counter"
    ]
  };
