setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hroration = 30*htime + mtime/2;
    mroration = 6*mtime;
    sroration = 6*stime;

    hour.style.transform = `rotate(${hroration}deg)`;
    min.style.transform = `rotate(${mroration}deg)`;
    sec.style.transform = `rotate(${sroration}deg)`;
}, 1000);