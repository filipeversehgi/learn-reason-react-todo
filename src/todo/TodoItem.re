
module Styles = {
  open Css;

  let todoItem =
    style([
      padding2(~v=px(20), ~h=px(0)),
      display(flexBox),
      justifyContent(flexStart),
      alignItems(center),
      hover([opacity(0.5), unsafe("cursor", "pointer")]),
    ]);

  let todoTitle =
    style([
      fontWeight(bold),
      fontSize(pt(16)),
      margin(px(0)),
      padding(px(0)),
    ]);

  let todoDate =
    style([
      color(hex("aaa")),
      fontSize(pt(10)),
      margin(px(0)),
      padding(px(0)),
    ]);

  let todoCheckbox =
    style([
      border(px(1), solid, hex("ddd")),
      height(px(10)),
      width(px(10)),
      borderRadius(px(3)),
      marginRight(px(20)),
      unsafe("transition", "0.1s all"),
    ]);

  let todoCheckboxChecked =
    style([
      border(px(1), solid, hex("ddd")),
      height(px(10)),
      width(px(10)),
      borderRadius(px(3)),
      marginRight(px(20)),
      unsafe("transition", "0.1s all"),
      background(red)
    ]);
};

[@react.component]
let make = (~title: string, ~onClick, ~id: int, ~completed: bool) => {
  <div className=Styles.todoItem onClick={_ => onClick(id)}>
    <span className=(completed ? Styles.todoCheckboxChecked : Styles.todoCheckbox) />
    <div>
      <p className=Styles.todoTitle> {ReasonReact.string(title)} </p>
      <p className=Styles.todoDate> {ReasonReact.string("2 days ago")} </p>
    </div>
  </div>;
};