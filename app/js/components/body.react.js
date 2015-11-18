var React=require('react');
var ChatApp=require('./chatApp.react'); 


module.exports=React.createClass({
	render:function(){
		return(
			<div>
				<div className="jumbotron">
			      <div className="container">
			        <h1>{this.props.Title}</h1> 
			      </div>
			    </div>
			    <div className="container"> 
				  <ChatApp/>
			      <hr />

			      <footer>
			        <p>© Company 2015</p>
			      </footer>
			    </div>
			</div>
		)
	}
})