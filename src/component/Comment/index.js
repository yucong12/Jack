import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
class Comment extends Component{
	constructor(props){
		super(props);
		this.state={
			hosts:[]
		}
	}
	render(){
		return(
			<div>
			{this.state.hosts&&this.state.hosts.map(moodog=>
				<div style={{padding:'15px',borderBottom:'1px solid #ccc'}}>
			
				<img className="more" src={moodog.user.avatar_hd}/>
			
			<div style={{padding:'0 15px 15px 43px'}}>
			<h4>{moodog.user.screen_name}</h4>
		
			<div className="ll" dangerouslySetInnerHTML = {{ __html:`${moodog.text}`}}></div>
			<div>{moodog.created_at}</div>
			</div>
			<div className="oec">
			{moodog.comments&&moodog.comments.map(tops=>
				<div className="opt">
				<a style={{float:'left'}}>{tops.user.screen_name}:</a>
				<div className="top" dangerouslySetInnerHTML = {{ __html:`${tops.text}`}}></div>
				</div>
				)}
			</div>
			</div>
				)}
			}
			</div>
			)
	}
	componentDidMount(){

		axios.get(`/comments/hotflow?id=4263499222159736&mid=${this.props.match.params.myid}&max_id_type=0`).then(res=>{
			console.log(res.data.data.data)
			this.setState({
				hosts:res.data.data.data
			})
		})
	}
}
export default Comment
