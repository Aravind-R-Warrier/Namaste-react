// const heading= React.createElement('h1',{id:'heading'},'Hello world from react')
// const root=ReactDOM.createRoot(document.getElementById('root'))
// console.log(heading)//returns an object
// root.render(heading)

// nested divs
const parent=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{id:'heading'},"nested react heading"),React.createElement('h2',{id:'heading'},"nested react heading2")]))
const root=ReactDOM.createRoot(document.getElementById('root'))
console.log(parent)
root.render(parent)