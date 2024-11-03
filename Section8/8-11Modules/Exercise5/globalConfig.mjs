setTimeout(function(){console.log('Initializing...')}, 1000);
setTimeout(function(){console.log('Initialization complete')}, 2000);
setTimeout(function(){console.log('Downloading changes...')}, 3000);
setTimeout(function(){console.log('Download complete')}, 6000);
setTimeout(function() {
    const t = new Date().getHours();
    if(t >= 6 && t < 18){
        console.log('Applying light theme');
    } else console.log('Applying dark theme');
}, 7000);
setTimeout(function(){console.log('System ready...')}, 8000);