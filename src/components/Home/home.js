/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import Header from '../Header/header'
import './home.css'
import {Link} from 'react-router-dom'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
import Pagination from 'rc-pagination';
import '../../static/css/pagination.css'

export class Home extends Component{
    constructor(props){
        super(props);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }
        this.state = {
            planetData:[],
            current: 1,
        };
        this.getSize = this.getSize.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getvalue = this.getvalue.bind(this)


    }

    componentDidMount(){
        this.props.starWars()
    }

    componentWillReceiveProps(newProps){
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }
        this.setState({
            planetData:newProps.planetData,
            planetPage:newProps.planetPage
        })
    }

    getSize(val){
        var member = val+''
        var length=member.length
        return length*3
    }

    getvalue(val){
        if((val+'').toLowerCase()=="unknown")
            return 'N-A'
        return val
    }

    onChange (current, pageSize) {
        this.setState({
            current: current,
        });
        this.props.starWarsPage(current);
    }


    render(){
        return(
            <div>
                <Header logout={this.props.logout}/>
                <div className="table-title">
                    <h3>Star Wars : Invasion</h3>
                </div>
                <table className="table-fill">
                    <thead>
                    <tr>
                        <th className="text-left">Planet Name</th>
                        <th className="text-left">Population</th>
                    </tr>
                    </thead>
                    <tbody className="table-hover">
                {this.state.planetData.map((planet,i)=>(

                    <tr key={i}>
                        <td className="text-left">{planet.name}</td>
                        <td className="text-left" style={{fontSize:this.getSize(planet.population)}}>{this.getvalue(planet.population)}</td>
                    </tr>

                ))}
                    </tbody>
                </table>
                <div className="pagination_rc">
                    <Pagination
                        defaultPageSize={10}
                        defaultCurrent={1}
                        current={this.state.current}
                        onChange={this.onChange}
                        total={this.props.planetPage}
                    />
                </div>



            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated,
        planetData:state.auth.planetData,
        planetPage:state.auth.planetPage
    }
}


export default connect(mapStateToProps,actions)(Home);
