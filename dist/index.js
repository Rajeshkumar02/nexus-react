'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_folder__HAFMP {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  transition: 0.3s;\n  user-select: none;\n  width: fit-content;\n  padding-top: 0.2rem;\n}\n\n.styles-module_file__QWjqB {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  transition: 0.3s;\n  width: fit-content;\n  padding-top: 0.2rem;\n}\n\n.styles-module_innerFolder__x4sv8 {\n  margin-top: 2px;\n}\n";
var style = {"folder":"styles-module_folder__HAFMP","file":"styles-module_file__QWjqB","innerFolder":"styles-module_innerFolder__x4sv8"};
styleInject(css_248z);

const ctx = React.createContext(0);
function useIndent() {
    return React.useContext(ctx);
}
function Ident() {
    const length = useIndent();
    return (React.createElement(React.Fragment, null, Array.from({ length }, (_, i) => (React.createElement("span", { key: i })))));
}
const FileTree = ({ children }) => {
    return React.createElement("div", null, children);
};
const Folder = ({ children, name, defaultOpen }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen || false);
    const indent = useIndent();
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    return (React.createElement("div", null,
        React.createElement(Ident, null),
        React.createElement("div", { className: style === null || style === void 0 ? void 0 : style.folder },
            React.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24" },
                React.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: isOpen
                        ? 'M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z'
                        : 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z' })),
            React.createElement("div", { onClick: handleToggle }, name)),
        isOpen && (React.createElement("ul", { className: style === null || style === void 0 ? void 0 : style.innerFolder },
            React.createElement(ctx.Provider, { value: indent + 1 }, children)))));
};
const File = ({ name }) => {
    return (React.createElement("div", null,
        React.createElement(Ident, null),
        React.createElement("div", { className: style === null || style === void 0 ? void 0 : style.file },
            React.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24" },
                React.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" })),
            name)));
};
FileTree.Folder = Folder;
FileTree.File = File;

exports.FileTree = FileTree;
exports.FileTreeFile = File;
exports.FileTreeFolder = Folder;
//# sourceMappingURL=index.js.map
