import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const Code = (props: { code: string }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      <button onClick={()=>navigator.clipboard.writeText(props.code)} style={{ position: "absolute", right: 16, top: 16 }}>
        samin
      </button>
      <SyntaxHighlighter
        customStyle={{ backgroundColor: "transparent" }}
        language="javascript"
        style={darcula}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
