function rungame() {
    let timer = 60;
    let score = 0;
    let hitrn = 0;

    function getbubble() {

        let clutter = "";
        for (var i = 1; i <= 133; i++) {

            clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
        }
        document.querySelector("#pbottom").innerHTML = clutter;
    }

    function runtimer() {
        var clear = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector("#timeval").textContent = timer;
            }
            else {
                clearInterval(clear);
                if (score == 0) {
                    document.querySelector("#pbottom").innerHTML = `<h1>You are a loser..!</h1>`;
                }
                else {
                    document.querySelector("#pbottom").innerHTML = `<h1>Game is over</h1>`;
                }
                document.querySelector("#hitval").textContent = 0;
            }

        }, 1000)
    }

    function GetNewHit() {
        hitrn = Math.floor(Math.random() * 10)
        document.querySelector("#hitval").textContent = hitrn;
    }

    function increasescore() {

        score += 10;
        document.querySelector("#scoreval").textContent = score;
    }

    document.querySelector("#pbottom").addEventListener("click", (det) => {

        var clickednumber = (Number(det.target.textContent))

        if (clickednumber == hitrn) {
            increasescore()
            GetNewHit();
            getbubble();
        }


    })

    runtimer();
    getbubble();
    GetNewHit();
}

rungame();

