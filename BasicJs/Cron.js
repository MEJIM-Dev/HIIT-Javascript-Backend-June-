async function cronjob(){
    const currentTime = new Date();
    console.log(new Date().getMinutes())

    if(currentTime.getHours()==21 && currentTime.getMinutes()==21 ){
        console.log("doing task now",currentTime)
    }

    setTimeout(async ()=>{
        cronjob()
    },60000)
}

cronjob()