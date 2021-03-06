// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var TodoList$ReactHooksTemplate = require("./todo/TodoList.bs.js");

var appBackground = Css.style(/* :: */[
      Css.backgroundColor(Css.rgb(147, 200, 242)),
      /* :: */[
        Css.height(Css.vh(100.0)),
        /* :: */[
          Css.width(Css.vw(100.0)),
          /* :: */[
            Css.display(Css.flexBox),
            /* :: */[
              Css.justifyContent(Css.center),
              /* :: */[
                Css.alignContent(Css.center),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var appHolder = Css.style(/* :: */[
      Css.backgroundColor(Css.white),
      /* :: */[
        Css.width(Css.px(400)),
        /* :: */[
          Css.maxWidth(Css.vw(80.0)),
          /* :: */[
            Css.margin2(Css.px(50), Css.px(0)),
            /* :: */[
              Css.padding2(Css.px(100), Css.px(50)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var appTitle = Css.style(/* :: */[
      Css.fontSize(Css.pt(40)),
      /* :: */[
        Css.color(Css.hex("222")),
        /* :: */[
          Css.fontWeight(Css.bold),
          /* :: */[
            Css.margin(Css.px(0)),
            /* :: */[
              Css.padding(Css.px(0)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* appBackground */appBackground,
  /* appHolder */appHolder,
  /* appTitle */appTitle
];

Css.$$global("body", /* :: */[
      Css.fontFamily("'Open Sans'"),
      /* [] */0
    ]);

function App(Props) {
  return React.createElement("div", {
              className: appBackground
            }, React.createElement("div", {
                  className: appHolder
                }, React.createElement("h1", {
                      className: appTitle
                    }, "My Tasks"), React.createElement(TodoList$ReactHooksTemplate.make, { })));
}

var make = App;

exports.Styles = Styles;
exports.make = make;
/* appBackground Not a pure module */
