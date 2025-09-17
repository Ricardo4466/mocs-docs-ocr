import { Component } from "react";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";




type UploadProps = {
    onUpload: (files: File[]) => void;
};

export default class Upload extends Component<UploadProps> {
    renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
        if (isDragActive) {
            return <UploadMessage typeof="success">Solte a imagem aqui...</UploadMessage>;
        }

        if (isDragReject) {
            return <UploadMessage typeof="error">Arquivo não suportado</UploadMessage>;
        }

        return <UploadMessage>Arraste uma imagem aqui ou clique para selecionar</UploadMessage>;
    }

    render() {

      const { onUpload } = this.props;

        return (
            <Dropzone accept={{ "image/*": [] }} onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input type="file" {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>


                )}
            </Dropzone>
        );
    }
}