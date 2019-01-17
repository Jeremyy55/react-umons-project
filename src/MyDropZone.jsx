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

class MyDropzone extends React.Component {
  constructor(props) {
    super(props);
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
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

  render() {
    return (
      <Dropzone onDrop={this.onDrop} style={{}}>
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
    );
  }
}

export default MyDropzone;
