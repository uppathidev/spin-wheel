document.getElementById("congratesDiv").style.display = "none";
            function spinWheel() {
                document.getElementById("spinWhl").style.pointerEvents = "none";
                var obj = document.createElement('audio');
                obj.src = '../assets/tick.mp3';
                obj.play();
                var audio = setInterval(function () { obj.play(); }, 10);

                var x = 1024; //minimum value
                var y = 9999; // maximum value

                var deg = Math.floor(Math.random() * (x - y)) + y;

                document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

                var element = document.getElementById('mainbox');
                element.classList.remove('animate');
                setTimeout(function () {
                    element.classList.add('animate');
                    clearInterval(audio)
                    obj.pause();
                    openCongratesDiv();
                }, 5000); //5000 = 5 second
            }

            function openCongratesDiv() {
                setTimeout(function () {
                    document.getElementById("congratesDiv").style.display = "block";
                    document.getElementById("mainbox").style.display = "none";
                    document.getElementById("spinWhl").style.pointerEvents = "auto";
                }, 2000)
            }