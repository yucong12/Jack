import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import ReactDOM from 'react-dom';
import {Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import { PullToRefresh, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
class Social extends Component{
	constructor(props){
    super(props);

     this.state = {
     	list:[],
     	 refreshing: false,
      down: true,
      number:1,
      height:  document.documentElement.clientHeight,
     
     	 
   
     };
    
  }
		
		   
	render(){
		
		return(
				<div>
				 
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',

        }}

         direction={'down'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });

          	var hopt=this.state.number+1
		
			axios.get(`/api/container/getIndex?containerid=102803_ctg1_5088_-_ctg1_5088&openApp=0&since_id=${hopt}`).then(res=>{
				console.log(hopt)
				var jj=[...res.data.data.cards,...this.state.list]
		
				this.setState({
					list:jj,
				
					number:hopt,

					refreshing: false 
				})
		
			
			})	
    
    	
        }}
      >
        

					{this.state.list.map((res,index)=>{

						return (<div key={index} className="wai">
						<div className="div">

							<img className="title" src={res.mblog.user.avatar_hd}/>
							<div>{res.mblog.user.screen_name}</div>
							<p style={{float:'left',paddingRight:'13px',fontSize:'13px',color:'#999',fontSize:'inline'}}>{res.mblog.created_at}</p>
							<p className="font">{res.mblog.source}</p>
							<p className="right">+&nbsp;&nbsp;关注</p>
						</div>


						<div style={{width:'100%',display:'inline'}} dangerouslySetInnerHTML = {{ __html:`${res.mblog.text}`}}></div>

						
					
						<div className="qing">
						
						{res.mblog.pics&&res.mblog.pics.map(item=>
							
							<img  key={item.url} className="photo" src={item.url}/>
							)}
						<div>
							{/*<img style={{width:'100%',height:'218px'}} src={res.mblog.bmiddle_pic}/>*/}
						</div>
						{res.mblog.page_info&&res.mblog.page_info.media_info?<video src={res.mblog.page_info.media_info.stream_url} controls height="218" width="100%"></video>:null}
						
						</div>
						<div className="icon">
						<NavLink className="chuan" to={'/home/'+res.mblog.id} key={'/home/'+res.mblog.id}><Icon type="aliyun"  style={{fontSize:'20px'}}/><span  className="host">{res.mblog.reposts_count==null?'转发':res.mblog.reposts_count}</span></NavLink>
						<NavLink className="chuan" to={'/factor/'+res.mblog.id} key={'/factor/'+res.mblog.id}><Icon type="message" style={{fontSize:'20px'}}/><span className="host">{res.mblog.comments_count==null?'评论':res.mblog.comments_count}</span></NavLink>
						<NavLink className="chuan" to={'/hash/'+res.mblog.id} key={'/hash/'+res.mblog.id}><Icon type="like-o" style={{fontSize:'20px'}}/><span className="host">{res.mblog.attitudes_count==null?'赞':res.mblog.attitudes_count}</span></NavLink>

						</div>
						</div>

							)


				
					}	
					)}
     	 </PullToRefresh>

				</div>		

			)
	}
	componentDidMount(){
	
		const hei = this.state.height

		axios.get("/api/container/getIndex?containerid=102803_ctg1_5088_-_ctg1_5088&openApp=0").then(res=>{
			// console.log(res.data.data.cards)
			var jj=[...res.data.data.cards,...this.state.list]
		
			this.setState({
				list:jj,
				height: hei,
				
			})
		
			
		})	
    
    	
    	
			
			
    	
		
	}
	
}

export default Social





				
		
 