const heading =    React.createElement("h1" , {id : "heading"} , "HELLO WORD  from React" )
console.log(heading)
 const root = ReactDOM.createRoot(document.getElementById("root"))
 console.log(root.render(heading))
 const parent = React.createElement("div" , {id: "parentDiv"} , 
 [React.createElement("h1",{id : "h1insidediv"} ,"Hello i am h1 inside div" ), 
 React.createElement("h2",{id : "h2insidediv"} ,"Hello i am h2 inside div" )])
    root.render(parent) 