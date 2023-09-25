"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

const App = () => {
  const [value, setValue] = useState(mkdStr);

  return <MDEditor height={200} value={value} onChange={setValue} />;
};

export default App;
