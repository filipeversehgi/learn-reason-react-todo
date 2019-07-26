// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var todoItem = Css.style(/* :: */[
      Css.padding2(Css.px(20), Css.px(0)),
      /* :: */[
        Css.display(Css.flexBox),
        /* :: */[
          Css.justifyContent(Css.flexStart),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.hover(/* :: */[
                    Css.opacity(0.5),
                    /* :: */[
                      Css.unsafe("cursor", "pointer"),
                      /* [] */0
                    ]
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var todoTitle = Css.style(/* :: */[
      Css.fontWeight(Css.bold),
      /* :: */[
        Css.fontSize(Css.pt(16)),
        /* :: */[
          Css.margin(Css.px(0)),
          /* :: */[
            Css.padding(Css.px(0)),
            /* [] */0
          ]
        ]
      ]
    ]);

var todoDate = Css.style(/* :: */[
      Css.color(Css.hex("aaa")),
      /* :: */[
        Css.fontSize(Css.pt(10)),
        /* :: */[
          Css.margin(Css.px(0)),
          /* :: */[
            Css.padding(Css.px(0)),
            /* [] */0
          ]
        ]
      ]
    ]);

var todoCheckbox = Css.style(/* :: */[
      Css.border(Css.px(1), Css.solid, Css.hex("ddd")),
      /* :: */[
        Css.height(Css.px(10)),
        /* :: */[
          Css.width(Css.px(10)),
          /* :: */[
            Css.borderRadius(Css.px(3)),
            /* :: */[
              Css.marginRight(Css.px(20)),
              /* :: */[
                Css.unsafe("transition", "0.1s all"),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var todoCheckboxChecked = Css.style(/* :: */[
      Css.border(Css.px(1), Css.solid, Css.hex("ddd")),
      /* :: */[
        Css.height(Css.px(10)),
        /* :: */[
          Css.width(Css.px(10)),
          /* :: */[
            Css.borderRadius(Css.px(3)),
            /* :: */[
              Css.marginRight(Css.px(20)),
              /* :: */[
                Css.unsafe("transition", "0.1s all"),
                /* :: */[
                  Css.background(Css.red),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* todoItem */todoItem,
  /* todoTitle */todoTitle,
  /* todoDate */todoDate,
  /* todoCheckbox */todoCheckbox,
  /* todoCheckboxChecked */todoCheckboxChecked
];

function TodoItem(Props) {
  var title = Props.title;
  var onClick = Props.onClick;
  var id = Props.id;
  var completed = Props.completed;
  return React.createElement("div", {
              className: todoItem,
              onClick: (function (param) {
                  return Curry._1(onClick, id);
                })
            }, React.createElement("span", {
                  className: completed ? todoCheckboxChecked : todoCheckbox
                }), React.createElement("div", undefined, React.createElement("p", {
                      className: todoTitle
                    }, title), React.createElement("p", {
                      className: todoDate
                    }, "2 days ago")));
}

var make = TodoItem;

exports.Styles = Styles;
exports.make = make;
/* todoItem Not a pure module */
