const Discord = require("discord.js");
const client = new Discord.Client({
    presence: {
     status: "online",
     activity: {
        name: "Dota 2" ,
        type: "PLAYING",
     },
    },
   });

client.on("ready",()=>{
    console.log("Successful!");
});


client.on("message",(message)=>{
   
    
    console.log(message.author.id);
    const probabilidad = 0.21;
    const img_barra = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/822494788707156018/872188020974030928/BARRA.gif');
    if(message.content.includes("cerdo") || message.content.includes("cerda") || 
    message.content.includes("pig") || message.content.includes("puerco") || message.content.includes("marrano")) {
        if(Math.random()<probabilidad){
            message.channel.send("¿A quién dices cerdo?, la cerda cochina eres tú");
        }else{
            
        }  
    }
    
    if(message.content.startsWith("~")){
        message.delete();
        let array = message.content.split('');
        let arrayend = new Array();

        for(let i = 1;i<=array.length;i++){
            arrayend[i-1] = array[i];
        }
        let endmsg = arrayend.join("");
        //let rol = "<@&810694296595988500>";
        //message.channel.send(endmsg + rol, img_barra)
        message.channel.send(endmsg, img_barra);
        
        
    }
});
client.on("message",(message)=>{
 if(message.attachments.size == 1 && message.author.id == 868231520211566673){
     message.react('☑️')
     message.react('❌');
     message.react('<a:3x:842053238215540736>')
 }
});
client.login("ODY4MjMxNTIwMjExNTY2Njcz.YPspnQ.6K75OGeiY_fJl2wrbzWvsTE7Stg");