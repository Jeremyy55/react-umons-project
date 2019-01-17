import React from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import styled, { css } from "styled-components";

const DropZoneContainer = styled.div`
  height: 200px;
  border: 2px dashed #2c67d8;
  padding: 30px;
  font-size: 20px;

  ${props =>
    props.isDragActive &&
    css`
      border-color: green;
    `}
`;

class MyDropzone1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgsrc: null, img: null };
    this.onPreviewDrop = this.onPreviewDrop.bind(this);
  }

  onDrop = acceptedFiles => {
    var data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("housing", "1");
    data.append("owner", "1");

    fetch("http://172.16.1.187:4000/housingPictures/add", {
      method: "POST",
      /*mode: "cors",*/
      /*headers: { "Content-Type": "application/json" },*/
      body: data
    });
  };

  onPreviewDrop = files => {
    const currentFile = files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ imgsrc: reader.result, img: currentFile });
      },
      false
    );
    reader.readAsDataURL(currentFile);
  };

  send(event) {
    var data = new FormData();
    data.append("file", this.state.img);
    data.append("housing", "1");
    data.append("owner", "1");

    fetch("http://172.16.1.187:4000/housingPictures/add", {
      method: "POST",
      /*mode: "cors",*/
      /*headers: { "Content-Type": "application/json" },*/
      body: data
    });

    event.preventDefault();
  }

  render() {
    const { imgsrc } = this.state;

    const previewStyle = {
      display: "inline",
      width: "50%",
      height: "50%"
    };

    return (
      <React.Fragment>
        <Dropzone onDrop={this.onPreviewDrop} style={{}}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <DropZoneContainer
                isDragActive={isDragActive}
                {...getRootProps()}
                className={classNames("dropzone", {
                  "dropzone--isActive": isDragActive
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <p>
                    Try dropping some files here, or click to select files to
                    upload.
                  </p>
                )}
              </DropZoneContainer>
            );
          }}
        </Dropzone>

        <React.Fragment>
          {imgsrc !== null ? (
            <React.Fragment>
              <h3>Sent Image</h3>
              <img src={imgsrc} alt="preview" style={previewStyle} />
              <button onClick={this.send.bind(this)} value="Submit">
                SEND
              </button>
            </React.Fragment>
          ) : (
            ""
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default MyDropzone1;
