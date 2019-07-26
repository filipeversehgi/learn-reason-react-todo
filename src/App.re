
module Styles = {
  open Css;
  
  let appBackground =
    style([
      backgroundColor(rgb(147, 200, 242)),
      height(vh(100.0)),
      width(vw(100.0)),
      display(flexBox),
      justifyContent(center),
      alignContent(center),
    ]);

  let appHolder =
    style([
      backgroundColor(white),
      width(px(400)),
      maxWidth(vw(80.0)),
      margin2(~v=px(50), ~h=px(0)),
      padding2(~v=px(100), ~h=px(50)),
    ]);

  let appTitle =
    style([
      fontSize(pt(40)),
      color(hex("222")),
      fontWeight(bold),
      margin(px(0)),
      padding(px(0)),
    ]);
};

Css.(global("body", [fontFamily("'Open Sans'")]));


[@react.component]
let make = () => {
  <div className=Styles.appBackground>
    <div className=Styles.appHolder>
      <h1 className=Styles.appTitle> {ReasonReact.string("My Tasks")} </h1>
      <TodoList />
    </div>
  </div>;
}