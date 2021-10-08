const EventListener=require('events');
class Logger extends EventListener{
	log(message){
		console.log(message+message);
		this.emit("Order",{id:1234,name:"pizza",
		payment:1});
	}	
};

module.exports=Logger;
