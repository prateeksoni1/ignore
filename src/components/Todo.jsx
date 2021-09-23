
// Higher order component
const Todo = ({children, value}) => {
  return <>
    <h4>{children}</h4>
    {/* <Todo2 value={value} /> */}
  </>
}

export default Todo;