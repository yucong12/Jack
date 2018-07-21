import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
class Ward extends Component{
	constructor(props){
		super(props)
		this.state={
			moodog:[]
		}
	}
	render(){
		return(
			<div>
			{this.state.moodog.map(moodog=>
				<div style={{padding:'15px',borderBottom:'1px solid #ccc'}}>
			
				<img className="more" src={moodog.user.avatar_hd}/>
			
			<div style={{padding:'0 15px 15px 43px'}}>
			<h4>{moodog.user.screen_name}</h4>
			<div className="ll" dangerouslySetInnerHTML = {{ __html:`${moodog.text}`}}></div>
			<div>{moodog.created_at}</div>
			</div>
			</div>
				)}
			</div>
			)
	}
	componentDidMount(){
		axios.get(`/api/statuses/repostTimeline?id=${this.props.match.params.myid}&page=1`).then(res=>{
			console.log(res.data.data.data)
			this.setState({
				moodog:res.data.data.data
			})
		})
	}
}
export default Ward