import { ReactElement, ReactNode } from 'react';
import React from 'react';
interface FolderProps {
    name: string;
    label?: ReactElement;
    open?: boolean;
    defaultOpen?: boolean;
    onToggle?: (open: boolean) => void;
    children?: ReactNode;
}
interface FileProps {
    name: string;
    label?: ReactElement;
    active?: boolean;
}
interface FileTreeProps {
    children: ReactNode;
}
declare const FileTree: React.FC<FileTreeProps> & {
    Folder: React.FC<FolderProps>;
    File: React.FC<FileProps>;
};
declare const Folder: React.FC<FolderProps>;
declare const File: React.FC<FileProps>;
export { FileTree, Folder as FileTreeFolder, File as FileTreeFile };
