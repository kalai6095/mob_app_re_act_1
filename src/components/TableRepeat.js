import React, {Component} from 'react';
import Emp from './emp'

class TableRepeat extends Component{

    constructor(props) {
        super(props);
        this.state={
            emps:[
                {id:101,name:'jhon test',sal:'5000'},
                {id:102,name:'jhon su ',sal:'3000'},
                {id:103,name:'jhon ka',sal:'2000'}
            ]
        }
        this.delEmp=this.delEmp.bind(this);
    }

    addEmp(){
        let emp={
            id:(100+this.state.emps.length+1),
            name:"",
            sal:parseInt(this.state.emps[this.state.emps.length-1].sal+10)
        };
       const copyofemp=Object.assign([],this.state.emps);
        copyofemp.push(emp);
        this.setState({emps:copyofemp});
    }

    delEmp=(index,id)=>{
        const copyofemp=Object.assign([],this.state.emps);
        copyofemp.splice(index,1);
        this.setState({emps:copyofemp});
    }
    render(){
        return (<div>
            <button onClick={this.addEmp.bind(this)}>Add</button>
            <table border='1' style={{width:'100%',border:'1px solid black','borderCollapse':'collapse'}}><tbody>
                {
                    this.state.emps.map(function(e,id){
                        return (<Emp  obj={e} key={id}
                                      deleteEvent={this.delEmp.bind(this,id)}
                        />)
                    },this)

                }
            </tbody></table>{
                this.state.emps.map(function(e){
                    return(e.id)
                })
        }
        </div>);
    }
}
export default TableRepeat;