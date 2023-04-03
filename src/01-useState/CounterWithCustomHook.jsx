import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const {counter,increment,decrement,reset} = useCounter();
  
  return (
    <>
      <h1>Counter whit Hook: {counter}</h1>
      <hr />

        <buttom onClick={() => increment(2)} className="btn btn-primary">+1</buttom>
        <buttom onClick={reset} className="btn btn-primary">Reset</buttom>
        <buttom onClick={() => decrement(2)} className="btn btn-primary">-1</buttom>
    </>
  )
}

