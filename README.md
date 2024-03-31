
## Introduction

Nexus React is the React UI library for react applications. It is a collection of reusable components and hooks that can be used to build React applications. It provides a set of components that are designed to be easy to use and customize.

## Installation

You can install Nexus React using npm. To install Nexus React using npm, run the following command:

```bash
npm i nexus-react
```

## Components

### File Tree

To use Nexus React components in your React application, you need to import the components from the `nexus-react` package and use them in your application. Here is an example of how you can use the `File tree` component from Nexus React in your React application:

```jsx showLineNumbers title="App.tsx"
import { FileTree, FileTreeFile, FileTreeFolder } from "nexus-react";
import React from "react";

export default function App() {
  return (
    <div>
      <FileTree>
        <FileTreeFolder name="NotesApp" defaultOpen>
          <FileTreeFolder name="node_modules" />
          <FileTreeFolder name="src" defaultOpen>
            <FileTreeFile name="list.tsx" />
            <FileTreeFile name="types.d.ts" />
          </FileTreeFolder>
          <FileTreeFile name="App.tsx" />
          <FileTreeFile name="package.json" />
          <FileTreeFile name="tsconfig.json" />
        </FileTreeFolder>
      </FileTree>
    </div>
  );
}
```

### Props

| Component | Prop        | Type                    | Required | Description                                                         |
| --------- | ----------- | ----------------------- | -------- | ------------------------------------------------------------------- |
| Folder    | name        | string                  | Yes      | The name of the folder.                                             |
|           | label       | ReactElement            | No       | Label to display alongside the folder name.                         |
|           | open        | boolean                 | No       | Indicates if the folder is open.                                    |
|           | defaultOpen | boolean                 | No       | Indicates if the folder should be open by default.                  |
|           | onToggle    | (open: boolean) => void | No       | Callback function triggered when the folder is toggled.             |
|           | children    | ReactNode               | No       | Children elements to render within the folder.                      |
| File      | name        | string                  | Yes      | The name of the file.                                               |
|           | label       | ReactElement            | No       | Label to display alongside the file name.                           |
|           | active      | boolean                 | No       | Indicates if the file is active or selected.                        |
| FileTree  | children    | ReactNode               | Yes      | The children elements to be rendered within the FileTree component. |
