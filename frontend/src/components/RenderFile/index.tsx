import React from "react";
import { Container, FileInfo, Preview } from "./style";

import { CircularProgressbar } from "react-circular-progressbar";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

type File = {
    id:number | string;
    name: string;
    size: number;
    preview: string;
    url?: string;
    progress?: number;
    error?: boolean;
    uploaded?: boolean;
    readableSize?: string;
};

interface RenderFileProps {
    files: File[];
    onDelete: (id: string | number) => void;
}

const RenderFile: React.FC<RenderFileProps> = ({ files, onDelete }) => {
    return (
        <Container>
            {files.map((uploadedFile) => (
                <li key={uploadedFile.id}>
                    <FileInfo>
                        <Preview src={uploadedFile.preview} />
                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>
                                {uploadedFile.readableSize}
                                {uploadedFile.url && (
                                    <button onClick={() => onDelete(uploadedFile.id)}>Remover</button>
                                )}
                            </span>
                        </div>
                    </FileInfo>
                    <div>
                        {!uploadedFile.uploaded && !uploadedFile.error && (
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: "#7159c1" }
                                }}
                                strokeWidth={10}
                                value={uploadedFile.progress ?? 0}
                            />
                        )}

                        {uploadedFile.url && (
                            <a
                                href={uploadedFile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                            </a>
                        )}

                        {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
                        {uploadedFile.error && <MdError size={24} color="#e57878" />}
                    </div>
                </li>
            ))}
        </Container>
    );
};

export default RenderFile;
