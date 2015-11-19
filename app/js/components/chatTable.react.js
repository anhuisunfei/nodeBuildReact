var React=require('react');


module.exports=React.createClass({
	render:function(){
    var messages=this.props.messages;
    var chatBody=messages.map(function(item){
        return  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.message}</td>
                  <td>{new Date(item.date).toLocaleString()}</td> 
                </tr> 
    });
    
		return (
			<table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Message</th>
            <th>Date</th> 
          </tr>
        </thead>
        <tbody>
          {chatBody}
        </tbody>
      </table>
		)
	}
})