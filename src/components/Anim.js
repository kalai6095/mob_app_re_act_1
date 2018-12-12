import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Anim extends Component {
    constructor(props){
        super(props);
        this.state={
            items:['item 1..','item 2..','item 3..','item 4..']
        }
        this.handleAdd=this.handleAdd.bind(this);
    }
    handleAdd(){
        var newItems=this.state.items.concat([prompt('create new Item')]);
        this.setState({items:newItems});
    }
    handleRemove(i){
        var newItems=this.state.items.slice();
        newItems.splice(i,1);
        this.setState({items:newItems});
    }
    render() {
        var items=this.state.items.map(function(e,i){
            return (
                <div key={e} onClick={this.handleRemove.bind(this,i)}>{e}</div>
            )
        },this);
        return (
            <div>
                <div onClick={this.handleAdd}>Add</div>
                {items}
            </div>
        )
    }
}

export default Anim;