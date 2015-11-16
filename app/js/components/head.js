var React=require('react')


module.exports= React.createClass({
	render:function(){ 
		return (
			<div className="navbar navbar-inverse navbar-fixed-top">
		        <div className="container">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a href="#/Home/Index" className="navbar-brand">React App</a>
		            </div>
		            <div className="navbar-collapse collapse">
		                <ul className="nav navbar-nav">
		                    <li>< a href="#/Home/Index">首页</a></li>
		                    <li>< a href="#/Home/About">关于</a></li>
		                    <li>< a href="#/Home/Contact">联系方式</a></li>
		                </ul> 
		            </div>
		        </div>
		    </div>
		)
	}
})

 