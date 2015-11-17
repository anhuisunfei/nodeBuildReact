var React=require('react');
var IndexAction=require('../actions/IndexAction.js');
var Link=require('./link.react');



module.exports= React.createClass({
	getInitialState:function(){
		var urlList=[
			{
				key:1,
				text:'首页',
				href:'#/Home/Index'
			},
			{
				key:2,
				text:'关于',
				href:'#/Home/About'
			},
			{
				key:3,
				text:'联系方式',
				href:'#/Home/Contact'
			}
		];

		return {
			urls:urlList
		};
	},
	urlLink:function(_url,_text){
		IndexAction.openLink(_url,_text);
	},
	render:function(){ 
		var urlList=this.state.urls;
		var urls=urlList.map(function(item){
			return  <Link key={item.key} linkHref={item.href} LinkText={item.text} openLink={this.urlLink} />;
		}.bind(this));
		return (
			<div className="navbar navbar-inverse navbar-fixed-top">
		        <div className="container">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <Link key="-1"  linkHref="#/Home/Index" LinkText="React App" openLink={this.urlLink} />
		            </div>
		            <div className="navbar-collapse collapse">
		                <ul className="nav navbar-nav">
		                    {urls}
		                </ul> 
		            </div>
		        </div>
		    </div>
		)
	}
})

 