import {Component} from "react";
import { uniqueId } from "lodash";
import {filesize} from "filesize";

import api from "./services/api";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";
import RenderFile from "./components/RenderFile";
// import IAConversation from "./components/IAConversation";


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

    api.post('/uploads', data, {
      onUploadProgress: e => {
        const progress = e.total ? Math.round((e.loaded * 100) / e.total) : 0;

        this.updateFile(uploadedFile.id, {
          progress
        });
      }
    });
  }

  render() {
      const { uploadedFiles } = this.state;

    return (
      <Container>
         {/* <Content>
            <IAConversation/>
         </Content> */}
        <Content>
          
          <Upload onUpload={this.handleUpload} />
          { !!uploadedFiles.length &&(
            <RenderFile files={uploadedFiles.map(f => ({
              id: f.id,
              name: f.name,
              size: f.file.size,
              preview: f.preview,
              url: f.url ?? undefined,
              progress: f.progress,
              error: f.error,
              uploaded: f.uploaded,
              readableSize: f.readableSize
            }))} />
          )} 
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}



export default App
