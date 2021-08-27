import React, { Component } from 'react';
import './selectAvatar.css';
import Avatar from 'react-avatar-edit'

class SelectAvatar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          preview: null,
          src : this.props.src,
          editing:false,
          showSelect:false,
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.hover = this.hover.bind(this)
        this.onSave = this.onSave.bind(this)
    }
    onClose() {
        this.setState({preview: null,editing:false})
        this.props.onClose()
    }
      
    onCrop(preview) {
        this.setState({preview})
        this.props.onCrop(preview)
    }

    hover(isHover){
        if(this.state.editing)
        {
            return
        }
        this.setState({showSelect:isHover})
    }

    onSave(){
        this.setState({showSelect:false,editing:false,src:this.state.preview});
        this.props.onSave()
    }



    render() { 
        return ( 
            <React.Fragment>
                <div
                    style={{ 
                        width:this.props.side+"vh",
                        height:this.props.side+"vh",
                        position:"relative",
                    }}>
                    <div className="d-flex justify-content-center align-items-center" onMouseEnter={() =>this.hover(true)}
                        onMouseLeave={() => this.hover(false)}
                        id="preview" 
                        style={this.state.showSelect ? {backgroundColor: "#141d48",}:{backgroundImage:"url(" +  this.state.src  + ")",borderRadius:"50%"}}>
                        {this.state.showSelect ?
                            <React.Fragment>
                                <Avatar
                                width={window.innerHeight*this.props.side/100}
                                height={window.innerHeight*this.props.side/100}
                                imageWidth={window.innerHeight*this.props.side/100}
                                // imageHeight={window.innerHeight*this.props.side/100}
                                onCrop={this.onCrop}
                                onClose={this.onClose}
                                onFileLoad={() => this.setState({editing:true})}
                                />
                                {/* <input type="file" 
                                    id="selectedFile" 
                                    style={{display:"none"}} 
                                    onChange={this.handleSelect}
                                    accept="image/png, image/jpeg"
                                    ref={this.fileInput}/>
                                <input type="button" value="Change picture" onClick={()=>document.getElementById('selectedFile').click()} /> */}
                            </React.Fragment>
                            // <button 
                            // onMouseEnter={() =>this.hover(true)}
                            //  className="select-btn">
                            //     <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-2 bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            //         <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            //     </svg>
                            //     Change picture
                            // </button>
                        :""}
                        
                        {this.state.editing? 
                        <button onClick={this.onSave} className="d-flex align-items-center justify-content-center m-1 save-button btn btn-primary">
                            Save
                        </button>:""}
                    </div>

                   
            
                    
                            {/* <img src={this.state.preview} alt="Preview" /> */}
                        
                </div>
            </React.Fragment>
                


        );
    }
}
 
export default SelectAvatar;