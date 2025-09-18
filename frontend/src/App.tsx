import {Component} from "react";
import { uniqueId } from "lodash";
import {filesize} from "filesize";

import api from "./services/api";

import GlobalStyle from "./styles/global";
import { CardTitle, Container, Content, Title } from "./styles";

import Upload from "./components/Upload";
import RenderFile from "./components/RenderFile";
import OCRText from "./components/RendeOCRText";
import IAInteraction from "./components/IAInteraction";


interface UploadedFile {
  file: File;
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
  url: string | null;
  serverId?: number;     
  text_content?: string;
}

class App extends Component {
  state: Readonly<{ uploadedFiles: UploadedFile[] }> = {
    uploadedFiles: []
  };

  handleUpload = (files: File[]) => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),   
      name:file.name,
      readableSize:filesize(file.size),
      preview: URL.createObjectURL(file),
      progress:0,
      uploaded:false,
      error:false,
      url:null
    }));
    this.setState({ 
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles) 
    });

    uploadedFiles.forEach(this.processUpload);
  }


  updateFile = (id: string, data: Partial<UploadedFile>) => {
    this.setState({ uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
    }) });
  }


  processUpload = (uploadedFile: UploadedFile) => {
  const data = new FormData();
  data.append("file", uploadedFile.file, uploadedFile.name);

  api.post("api/documents/upload", data, {
    onUploadProgress: e => {
      const progress = e.total ? Math.round((e.loaded * 100) / e.total) : 0;
      this.updateFile(uploadedFile.id, { progress });
    }
  })
  .then(response => {

    const doc = response.data.document;

    this.updateFile(uploadedFile.id, {
      uploaded: true,
      serverId: doc.id,
      url: response.data.url,
      text_content: doc.text_content
    });
  })
  .catch(() => {
    this.updateFile(uploadedFile.id, { error: true });
  });
};




  handleDelete = (id: string | number) => {
    api.delete(`api/documents/${id}`);

    this.setState({ uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id) });
  }

  render() {
    const { uploadedFiles } = this.state;

    const uploadedSuccessfully = uploadedFiles.filter(f => f.uploaded);

    return (
      <Container>
        <Title>
          Desafio MOCS - Desenvolvedor(a) Full Stack Pleno - Ricardo Teixeira Lima
        </Title> 

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Content>
            <CardTitle>Upload</CardTitle>
            <Upload onUpload={this.handleUpload} />

            {!!uploadedFiles.length && (
              <RenderFile
                onDelete={this.handleDelete}
                files={uploadedFiles.map(f => ({
                  id: f.id,
                  name: f.name,
                  size: f.file.size,
                  preview: f.preview,
                  url: f.url ?? undefined,
                  progress: f.progress,
                  error: f.error,
                  uploaded: f.uploaded,
                  readableSize: f.readableSize,
                }))}
              />
            )}
          </Content>

          {uploadedSuccessfully.map(file => (
            <OCRText key={file.id} text={file.text_content || ""} />
          ))}

          {uploadedSuccessfully.length > 0 && (
            <IAInteraction
              ocrText={uploadedSuccessfully[0].text_content || ""}
              documentId={uploadedSuccessfully[0].serverId!}
            />
          )}
        </div>

        <GlobalStyle />
      </Container>
    );
  }

}



export default App
