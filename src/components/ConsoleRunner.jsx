import React, { useEffect, useState } from "react";
import "../scss/ConsoleRunner.scss";
import CopyButton from "./CopyButton";

function ConsoleRunner({
  lesson,
  code,
  editable,
  onCodeCorrect,
  onCodeIncorrect,
  onSuccess,
  onFailure
}) {
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
        onSuccess?.(false);
        onFailure?.(true);
        if (lesson?.id) {
          localStorage.setItem(`lesson-${lesson.id}-status`, "incorrect");
        }
      } else {
        onCodeCorrect?.(true);
        onCodeIncorrect?.(false);
        onSuccess?.(true);
        onFailure?.(false);
        if (lesson?.id) {
          localStorage.setItem(`lesson-${lesson.id}-status`, "correct");
        }
      }
    } catch (err) {
      setOutput("Error: " + err.message);
      onCodeIncorrect?.(true);
      onCodeCorrect?.(false);
      onFailure?.(true);
      onSuccess?.(false);
      if (lesson?.id) {
          localStorage.setItem(`lesson-${lesson.id}-status`, "incorrect");
        }
    } finally {
      console.log = originalLog;
    }
  }

  // Load from localStorage when lesson changes
  useEffect(() => {
    if (!lesson?.id) return; // exit early if lesson is not ready

    const lastCode = localStorage.getItem(`lesson-${lesson.id}-userAttempt`);
    if (lastCode) {
      setInput(lastCode);
    } else {
      setInput(code); // reset to starter code if nothing saved
    }
  }, [lesson, code]);

  // Save code whenever it changes
  const handleCodeChange = (newCode) => {
  setInput(newCode);
  if (lesson?.id) {
    localStorage.setItem(`lesson-${lesson.id}-userAttempt`, newCode);
  }
  };




  return (
    <aside className="console">
      <div className="console-header">
        <div className="console-lights">
          <div className="light red" />
          <div className="light yellow" />
          <div className="light green" />
        </div>
        <span className="console-title-holder">
          <CopyButton text={code} />
          <small className="console-title">console</small>
        </span>

      </div>

      <div className="console-body">
        {editable ? (
          <textarea
            value={input}
            onChange={(e) => handleCodeChange(e.target.value)}
            rows={4}
            className="console-input"
            autoFocus
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
