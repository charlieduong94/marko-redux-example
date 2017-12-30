// Compiled using marko@4.7.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-redux-example$1.0.0/src/containers/root/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    counter_container_template = marko_loadTemplate(require.resolve("../counter-container")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    counter_container_tag = marko_loadTag(counter_container_template),
    provider_template = marko_loadTemplate(require.resolve("marko-redux/src/components/provider/index.marko")),
    provider_tag = marko_loadTag(provider_template);

function render(input, out, __component, component, state) {
  var data = input;

  provider_tag({
      store: state.store,
      renderBody: function renderBody(out) {
        counter_container_tag({}, out, __component, "1");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-redux-example$1.0.0/src/containers/root/index.marko",
    component: "./",
    tags: [
      "../counter-container",
      "marko-redux/src/components/provider/index.marko"
    ]
  };
