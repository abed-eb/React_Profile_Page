import React, { Component } from "react";
import "./Avatar.css";
import SelectAvatar from "../avatarEditor/selectAvatar";
import { Modal } from "react-bootstrap";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      src: this.props.src,
      editing: false,
      showSelect: false,
      disableDoneBtn: true,
      nothingChanged: true,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.hover = this.hover.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.setState({ src: this.props.src });
    }
  }

  exit = () => {
    if (this.state.preview === null || this.state.nothingChanged)
      this.props.exitModal(this.state.src);
    else {
      this.props.exitModal(this.state.preview);
    }
  };

  onClose() {
    let src = this.state.preview;
    localStorage.setItem("profileAvatar", src);
    this.setState({ preview: null });
  }

  hover(isHover) {
    if (this.state.editing) {
      return;
    }
    this.setState({ showSelect: isHover });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  async onSave() {
    console.log("saved");
    this.setState({ disableDoneBtn: false, nothingChanged: false });
    let src = this.state.preview;
    this.props.saveAvatar(src);
  }

  render() {
    return (
      <Modal
        centered
        size={"sm"}
        backdrop="static"
        show={this.props.show}
        onHide={() => this.exit()}
      >
        <Modal.Header closeButton>
          <h5 style={{ textAlign: "center" }}>Edit your profile avatar.</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 avatar p-1">
            <SelectAvatar
              className="w-100 h-100"
              src={this.state.src}
              onCrop={this.onCrop}
              onClose={this.onClose}
              onSave={this.onSave}
              side="30"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => this.exit()}
            disabled={this.state.disableDoneBtn}
            className="btn btn-primary"
          >
            Done
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Avatar;
