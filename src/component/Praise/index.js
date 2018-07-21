import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
class Praise extends Component{
	constructor(props){
		super(props);
		this.state={
			hosts:[]
		}
	}
	render(){
		return(
			<div>
			{this.state.hosts.map(poss=>
				<div className="year">
					<img className="photoes" src={poss.user.profile_image_url}/>
					<p>{poss.user.screen_name}</p>
				</div>
				)}
			</div>
			)
	}
	componentDidMount(){
		axios.get(`/api/attitudes/show?id=${this.props.match.params.myid}&page=1`).then(res=>{
			console.log(res.data.data.data)
			this.setState({
				hosts:res.data.data.data
			})
		})
	}
}
export default Praise
