var nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'renitha1726@gmail.com',
        pass:'xespqyuprbllzlem'
    }
});
var mail={
    from:'renitha1726@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'Node js task3',
    text:'Hello sir,I am Renitha with reg no.20A21A6135',
}
transport.sendMail(mail,function(err,info){
    if(err) {
        console.log(err);
    }else{
        console.log('EmailSent: '+info.response)
    }
})


