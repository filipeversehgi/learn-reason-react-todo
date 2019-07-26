module Styles = {
  open Css;

  let taskCount =
    style([fontSize(pt(12)), color(hex("aaa")), fontWeight(bold)]);

  let input = style([
    padding(px(10)),
    border(px(1), solid, hex("eee"))
  ])

  let inputButton = style([
    padding2(~v=px(10), ~h=px(20)),
    backgroundColor(rgb(147, 200, 242)),
    color(white),
    fontWeight(bold),
    border(px(1), solid, rgb(147, 200, 242)),
    unsafe("border-radius", "0 3px 3px 0")
  ])
};

type todoItem = {
  id: int,
  title: string,
  completed: bool
};

type todoList = list(todoItem);

[@react.component]
let make = () => {

  let (inputText, setInputText) = React.useState(() => "");
  let (todoList, setTodoList) = React.useState(() => []);

  let totalItems = List.length(todoList);
  let completedItems = List.length(List.filter(i => i.completed, todoList));
  let completedMessage = string_of_int(completedItems) ++ " of " ++ string_of_int(totalItems) ++ " tasks completed.";

  let handleAddItem = (title: string) => {
    let item: todoItem = {
      id: Utils.Identifier.unique(),
      title,
      completed: false
    };
    setTodoList(_ => [item, ...todoList]);
    setInputText(_ => "");
  };

  let handleToggle = (id: int) => {
    let newList = List.map(todoItem => {...todoItem, completed: todoItem.id == id ? !todoItem.completed : todoItem.completed}, todoList);
    setTodoList(_ => newList);
  }

  let listOfTodoItems = List.map(item => <TodoItem completed=item.completed id=item.id onClick=handleToggle key=string_of_int(item.id) title=item.title />, todoList);

  <div>
      <p className=Styles.taskCount>{ReasonReact.string(completedMessage)}</p>
      <input
        className=Styles.input
        value=inputText
        onChange={event => setInputText(ReactEvent.Form.target(event)##value)}
      />
      <button className=Styles.inputButton onClick=(_ => handleAddItem(inputText))>(ReasonReact.string("Adicionar"))</button>
      <div>
         ( React.array(Array.of_list(listOfTodoItems)) )
      </div>
    </div>;
}