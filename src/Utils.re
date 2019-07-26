module Identifier = {
  let unique = () => Random.int(int_of_float(Js.Date.now()));
}