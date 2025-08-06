function counting(a) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${a}...`);
            resolve();
        }, 1000);
    });
}

var num = 0;

async function anim() {
    console.log("Countdown Initiated...");
    await counting(++num);
    await counting(++num);
    await counting(++num);
    console.log("Boom! Mission Launched!");
}

anim();