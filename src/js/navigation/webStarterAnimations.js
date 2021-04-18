export class Animations {
    static textAnimation1() {
        const text1 = `Manage your cars collection.`
        const splitted = text1.split("");
        const letters = document.querySelector('.letters1');
        (function animate() {
            splitted.length > 0 ? letters.innerHTML += splitted.shift() :
                clearTimeout(running);
            let running = setTimeout(animate, 90);
        })();
    }

    static textAnimation2() {
        const text2 = `Get statistics.`;
        const letters = document.querySelector('.letters2');
        const splitted2 = text2.split("");
        (function animate2() {
            splitted2.length > 0 ? letters.innerHTML += splitted2.shift() :
                clearTimeout(running);
            let running = setTimeout(animate2, 90);
        })();
    }

    static animateValue(object, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            object.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}