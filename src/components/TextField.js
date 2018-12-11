import React, {Component} from 'react';

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:""
        }
        this.updateField=this.updateField.bind(this);
    }

    updateField(e) {
        this.setState({name:e.target.value})
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <div>{this.props.content}</div>
                <div>{this.props.remoteval(this.props.remote)}</div>
                <div><input type="text" name="textfield" onChange={this.updateField}
                            value={this.state.name}/></div>
                <div>
                    {this.state.name}
                </div>
            </div>
        );
    }
}

TextField.defaultProps = {
    label: "Testing",
    content: "Please feed somethings to him",
    remote: "",
    remoteval: function (e) {
       // alert(e);
    }

}
export default TextField;