 
    document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            var speed = layer.getAttribute('data-speed');

            var x = (window.innerWidth - e.pageX*speed) / 150;
            var y = (window.innerWidth - e.pageX*speed) / 150;

                console.log(
                    layer.style.transform = `translate(${-x}px) translateY(${y}px)`
                )
        })
    }
        for (let i = 0; i < 15; i++) {
            let divNew = document.createElement('div');
            divNew.classList.add('nl_box');
            document.body.appendChild(divNew);
        };
        let nl_box = document.querySelectorAll('.nl_box');
        for (let i = 0; i < nl_box.length; i++) {
            nl_box[i].setAttribute('style', 'position: absolute; width: 25px; height: 25px; background: url("https://media.licdn.com/dms/image/C5103AQHigS3LdKGiiw/profile-displayphoto-shrink_100_100/0?e=1580947200&v=beta&t=RF4T03lOXfI5JWjYtBZ_i2htMvnnJaBsr_TkQK8Mq_w") center/100% 100%; border-radius: 50%; opacity: 0.3;top:' + Math.floor(Math.random() * 100) + 'vh; \
            left:' + Math.floor(Math.random() * 100) + 'vw' );
            nl_box[Math.floor(Math.random() * i)].animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateY(0px)'},
                {transform: 'translateX(100px)'},
                {transform: 'translateY(100px)'}
            ], {
                duration: 10000,
                iterations: Infinity,
                direction: "alternate",
                easing: 'linear',
            })
        }