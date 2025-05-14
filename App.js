const e = React.createElement
const r = ReactDOM.createRoot(document.getElementById("root"))

const parent = e("div", {className:"parent"},[
  e("div", {key:"1", className:"child1"},
    [e("h1", {key:"5"}, "I am an h1 element"),
      e("h2", {key:"6"}, "I am an h2 element")],
      e("div", {key:"2", className:"child2"},
    [e("h1", {key:"7"}, "I am an h1 element"),
      e("h2", {key:"8"}, "I am an h2 element")]
  ))],
e("div", {key:"3", className:"child3"},
    [e("h1", {key:"9"}, "I am an h1 element"),
      e("h2", {key:"10"}, "I am an h2 element")],
      e("div", {key:"4", className:"child4"},
    [e("h1", {key:"11"}, "I am an h1 element"),
      e("h2", {key:"12"}, "I am an h2 element")])))

  r.render(parent)