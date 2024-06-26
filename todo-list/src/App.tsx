import React, { useState } from "react";

function App() {
  const [text, setText] = useState('');

  const addTask = ((text:string) => {
    console.log(text)
    setText('');
  })

  return (
    <>
      <input 
        type="text" 
        value={text} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
      />
      <button onClick={() => addTask(text)}>Ok</button>
    </>
  );
}

export default App;
