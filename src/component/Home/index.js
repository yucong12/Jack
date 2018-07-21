import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import {Icon} from 'antd'
class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			list:{}
		}
	}
	render(){
		var good=this.state.list
		return(
			<div>
			
			<textarea placeholder="说说分享心得…" className="text"></textarea>
			<div className="flex">
					<div className="tt">
						<img className="photos" src={good.original_pic}/>
						</div>
						<div className="hh">
						
						<div className="ll" dangerouslySetInnerHTML = {{ __html:`${good.text}`}}></div>
						</div>
						</div>
						<div className="f">
						&nbsp;&nbsp;&nbsp;&nbsp;<input className="check" type="checkbox"/>
						<span>同时评论</span>
						</div>
						<input style={{opacity:0}}type="file"/>
						<Icon style={{zIndex:'-1',fontSize:'39px',fontWeight:'100',position: 'absolute',left:'23px'}}type="picture" />
						</div>)
		
			
	}
	componentDidMount(){
		axios.get(`/statuses/show?id=${this.props.match.params.myid}`).then(item=>{
			console.log(item.data.data.user.screen_name)
		this.setState({
		list:item.data.data
				})
		})
	}
}
export default Home
