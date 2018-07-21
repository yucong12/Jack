import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
class Factor extends Component{
	constructor(props){
		super(props)
		this.state={
			list:{},
			num:1
		}
	}
	render(){
		var hoto=this.state.list
		return(
			<div>
			<div className="uu"><a className="qq" href="javascript:history.back(`-${this.state.num}`)"><Icon type="left"/></a></div>
			<div className="pure">
			<div style={{marginTop:'46px'}}>
				<img className="hasve" src={hoto.user&&hoto?hoto.user.profile_image_url:null}/>
			</div>
			<div>
				<span >{hoto.user&&hoto.user.screen_name}</span><br/>
				<p className="zero">{hoto.buttons&&hoto.buttons.ok}小时前&nbsp;来自&nbsp;360浏览器&nbsp;已编译</p>
			
			</div>
				<div className="ll" dangerouslySetInnerHTML = {{ __html:`${hoto.text}`}}></div>
				
				<div className="most">
				{hoto.pics&&hoto.pics.map(item=>
				<img className="video" src={item.url}/>
					
					)}



				{hoto.page_info&&hoto.page_info.media_info?<video src={hoto.page_info.media_info.stream_url} controls height="218" width="100%"></video>:null}
				</div>
				</div>
				<div className="color" style={{borderTop:'1px solid #ccc',padding:'10px'}}>
				<NavLink onClass={this.bood} activeClassName="ass"  to={'/factor/'+hoto.id+'/ward'}>转发&nbsp;&nbsp;{hoto.reposts_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink onClass={this.bood} activeClassName="ass"  to={'/factor/'+hoto.id+'/comment'}>评论&nbsp;&nbsp;{hoto.comments_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink  onClass={this.bood} activeClassName="ass"  to={'/factor/'+hoto.id+'/praise'}>赞&nbsp;&nbsp;{hoto.attitudes_count}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
			
				
				</div>
				{hoto?<div>{this.props.children}</div>:''}
				
			</div>
			)
	}
	bood(){

		this.setState({
			num:this.state.num+1
		})
	}
	
	componentDidMount(){
	
		axios.get(`/statuses/show?id=${this.props.shor.match.params.myid}`).then(item=>{

			// console.log(item.data.data)
		this.setState({
		list:item.data.data
				})
		})
	}
}
export default Factor