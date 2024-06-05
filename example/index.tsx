import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Button,
  FileTree,
  FileTreeFile,
  FileTreeFolder,
  Callout,
} from '../dist';

const App = () => {
  return (
    <div className=" flex-col justify-center items-center h-[100vh]">
      <Button
        onClick={() => {
          console.log('Hello');
        }}
        variant="outline"
      >
        hello
      </Button>

      <Callout type={'error'}>This is Callout</Callout>

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
};

ReactDOM.render(<App />, document.getElementById('root'));
