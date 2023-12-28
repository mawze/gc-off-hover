


    document.addEventListener('DOMContentLoaded', function () {
        function applyFx6(element) {
            const url = getComputedStyle(element).backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
            element.style.backgroundImage = 'none';

            const iterations = 2;
            let innerHTML = '';
            for (let i = 0; i < iterations; ++i) {
                innerHTML += `<div class="double__img" style="background-image:url(${url})"></div>`;
            }
            element.innerHTML = innerHTML;

            const bottom = element.querySelector('.double__img:first-child');
            const top = element.querySelector('.double__img:last-child');

            element.addEventListener('mouseenter', () => {
                // Mouse Enter Animation
                gsap.timeline({
                    defaults: {
                        duration: 0.9,
                        ease: 'expo',
                    },
                })
                .set(bottom, { willChange: 'filter' })
                .set(top, { willChange: 'clip-path' })
                .fromTo(top, { clipPath: 'circle(70.7% at 50% 50%)' }, { clipPath: 'circle(0% at 50% 50%)' }, 0)
                .fromTo(bottom, { scale: 1, filter: 'brightness(80%) contrast(200%) hue-rotate(-90deg)' }, { scale: 1.3, filter: 'brightness(100%) contrast(100%) hue-rotate(0deg)' }, 0);
            });

            element.addEventListener('mouseleave', () => {
                // Mouse Leave Animation
                gsap.timeline({
                    defaults: {
                        duration: 0.5,
                        ease: 'power2.inOut',
                    },
                })
                .set(bottom, { willChange: 'filter' })
                .set(top, { willChange: 'clip-path' })
                .to(top, { clipPath: 'circle(70.7% at 50% 50%)' }, 0)
                .to(bottom, { filter: 'brightness(0%) contrast(400%)', scale: 3.3 }, 0);
            });
        }

        // Apply Fx6 effect to elements with class 'double' and data-effect='6'
        const fx6Elements = document.querySelectorAll('.double[data-effect="6"]');
        fx6Elements.forEach((el) => {
            applyFx6(el);
        });
    });
