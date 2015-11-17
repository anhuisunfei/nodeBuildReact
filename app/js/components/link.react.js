var React=require('react');

module.exports=React.createClass({
	openLink:function(){  
		this.props.openLink(this.props.linkHref,this.props.LinkText);
	},
	render:function(){ 
		return ( 
			<a key={this.props.key}  onClick={this.openLink} className="navbar-brand">{this.props.LinkText}</a>
		)
	}
})