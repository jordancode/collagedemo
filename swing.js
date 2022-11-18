

    (function() {
        let lastVelocityX = 0;
        let lastScreenX = window.pageXOffset;
        let handle = null;

        const measureAcceleration = () => {
            const currentX = window.pageXOffset;
            const currentVelocityX = currentX - lastScreenX;

            if (Math.abs(currentVelocityX - lastVelocityX) > 5) {
                startSwing();
            }

            lastVelocityX = currentVelocityX;
            lastScreenX = currentX;
            window.requestAnimationFrame(measureAcceleration);
        };

        const startSwing = () => {
            if (handle != null) {
                clearTimeout(handle);
            }
            const polaroids = document.getElementsByClassName('polaroid');
            [...polaroids].forEach(p => {
                p.classList.add('swinging-light');
            });

            handle = setTimeout(
                stopSwing, 1500);
        };
        const stopSwing = () => {
            handle = null;
            const polaroids = document.getElementsByClassName('polaroid');
            [...polaroids].forEach(p => {
                p.classList.remove('swinging-light');
            });
        };

        measureAcceleration();
    })();
