import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
class Twe extends Component{
	constructor(props){
		super(props)
		this.state={
			list:{}
		}
	}
	render(){
		var hoto=this.state.list
		return(
			<div>
			
			<div className="pures">
			<div style={{marginTop:'46px'}}>
				<img className="hasves" src={hoto&&hoto.user?hoto.user.profile_image_url:null}/>
			</div>
			<div>
				<span >{hoto.user&&hoto.user.screen_name}</span><br/>
				<p className="zeros">{hoto.buttons&&hoto.buttons.ok}小时前&nbsp;来自&nbsp;360浏览器&nbsp;已编译</p>
			
			</div>
				<div className="lls" dangerouslySetInnerHTML = {{ __html:`${hoto.text}`}}></div>
				
				<div className="mosts">
				{hoto.pics&&hoto.pics.map(item=>
				<img className="videos" src={item.url}/>
					
					)}



				{hoto.page_info&&hoto.page_info.media_info?<video src={hoto.page_info.media_info.stream_url} controls height="218" width="100%"></video>:null}
				</div>
				</div>
				<div className="colors" style={{borderTop:'1px solid #ccc',padding:'10px'}}>
				<NavLink activeClassName="asss"  to={'/factor/'+hoto.id+'/ward'}>转发&nbsp;&nbsp;{hoto.reposts_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink activeClassName="asss"  to={'/factor/'+hoto.id+'/comment'}>评论&nbsp;&nbsp;{hoto.comments_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink  activeClassName="asss"  to={'/factor/'+hoto.id+'/praise'}>赞&nbsp;&nbsp;{hoto.attitudes_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
			
				
				</div>
				{hoto?<div>{this.props.children}</div>:''}
				
			</div>
			)
	}
	
	componentDidMount(){
	
		axios.get(`/statuses/show?id=${this.props.match.params.myid}`).then(item=>{
			console.log(item)
		this.setState({
		// list:item.data.data
				})
		})
	}
}
export default Twe