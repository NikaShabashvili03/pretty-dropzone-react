export type FileMosaicProps = {
    file: File,
    notFileText?: string,
    className?: string,
    style?: React.CSSProperties;
}

export type DropzoneProps = {
    onDrop: (files: File) => void;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

export type CustomZoneProps = {
    onDrop: (files: File[]) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    draggingStyle?: React.CSSProperties;
}