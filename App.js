import React from "react"
import ReactDOM from "react-dom/client"

const Heading1 = ()=> {
  return(<h1 className="heading1" style={{fontSize:"4rem", padding:"5px", textAlign:"center"}}>I am an h1 element</h1>)
}

const Heading2 = ()=> {
  return(<h2 className="heading2"  style={{fontSize:"2rem", padding:"5px", textAlign:"center"}}>I am an h2 element</h2>)
}

const Child1 = ()=> {
  return(<div className="child1" style={{backgroundColor:"purple" , fontStyle:"italic"}}>
    <Heading1/>
    <Heading2/>
  </div>)
}

const Child2 = ()=> {
  return(<div className="child2" style={{backgroundColor:"brown" , fontStyle:"italic"}}>
    <Heading1/>
    <Heading2/>
  </div>)
}

const Child3 = ()=> {
  return(<div className="child3" style={{backgroundColor:"green" , fontStyle:"italic"}}>
    <Heading1/>
    <Heading2/>
  </div>)
}

const Child4 = ()=> {
  return(<div className="child4" style={{backgroundColor:"tomato" , fontStyle:"italic"}}>
    <Heading1/>
    <Heading2/>
  </div>)
}

const Parent = ()=> {
  return(<div className="parent">
    <Child1/>
    <Child2/>
    <Child3/>
    <Child4/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Parent/>)