const Logger=require("./logger")
const logger=new Logger();
logger.on("Order",(arg)=>{
	console.log("Order Received ",arg.payment);
})
logger.log("message")