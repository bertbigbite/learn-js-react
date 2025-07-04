import React, { useState } from "react";

function ConsoleRunner({ code, editable, onCodeCorrect, onCodeIncorrect }) {
  const [input, setInput] = useState(code);
  const [output, setOutput] = useState("");

  function runCode() {
    const capturedLogs = [];
    const originalLog = console.log;

    console.log = (...args) => {
      capturedLogs.push(args.join(" "));
    };

    try {
      eval(input);
      const result = capturedLogs.length
        ? capturedLogs.join("\n")
        : "No output defined";
      setOutput(result);

      if (result === "No output defined") {
        onCodeCorrect?.(false);
        onCodeIncorrect?.(true);
      } else {
        onCodeCorrect?.(true);
        onCodeIncorrect?.(false);
      }
    } catch (err) {
      setOutput("Error: " + err.message);
      if (onCodeIncorrect) {
        onCodeIncorrect(true);
        onCodeCorrect(false);
      }
    } finally {
      console.log = originalLog;
    }
  }


  return (
    <aside className="console">
      <div className="console-header">
        <div className="console-lights">
          <div className="light red" />
          <div className="light yellow" />
          <div className="light green" />
        </div>
        <small className="console-title">console</small>
      </div>

      <div className="console-body">
        {editable ? (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="console-input"
            autofocus
          />
        ) : (
          <pre className="console-code">{input}</pre>
        )}
        <div className="btn-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              runCode();
            }}
            className="console-button"
          >
            Run
          </button>
        </div>
        <div className="console-output">
          <span className="output-label">OUTPUT</span>
          <pre>{output}</pre>
        </div>
      </div>
    </aside>
  );
}
export default ConsoleRunner;
