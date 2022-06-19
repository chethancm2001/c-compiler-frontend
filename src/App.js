import Editor from "@monaco-editor/react";
import { useState } from "react";
import Axios from "axios";
import "./sty.css";
function App() {
  let [Code, setCode] = useState(" ");
  let [Output, setOutput] = useState(" ");
  async function submitbtn() {
    let result = await Axios.post("http://localhost:4000/api", { code: Code });
    console.log(result.data.output);
    setOutput(result.data.output);
  }
  return (
    <div>
      <h1>online c complier</h1>
      <Editor
        height="70vh"
        width="100%"
        theme="vs-dark"
        language="c"
        defaultLanguage="c"
        defaultValue="/*write code here*/"
        onChange={(value) => {
          setCode(value);
        }}
      />
      <button onClick={submitbtn}>Run</button>
      <div className="out-put">
        Output
        <h4> {Output}</h4>{" "}
      </div>
    </div>
  );
}

export default App;
