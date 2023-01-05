export default function astaton() {

    const prev = document.querySelector('[data-astaton="prev"]');
    const next = document.querySelector('[data-astaton="next"]');
    const year = document.querySelector('[data-astaton="year"]');
    const prev_m = document.querySelector('.m-prev');
    const next_m = document.querySelector('.m-next');
    console.log(prev_m, next_m);

    const data = new Date()

    let y = data.getFullYear();

    const subYear = () => {
        year.innerText = y - 1;
        y--;
    }

    const addYear = () => {
        year.innerText = y + 1;
        y++;
    }

    prev.addEventListener('click', subYear)

    next.addEventListener('click', addYear)

    var actualMonth = data.getMonth();

    function changeMonth() {
        const months = document.querySelectorAll('.month');
        months.forEach((m, i) => {
            m.setAttribute('data-astaton', i);
            m.addEventListener('click', () => {
                actualMonth = m.getAttribute('data-astaton');
                months.forEach((m) => {
                    m.classList.remove('month-active');
                })
                m.classList.add('month-active');
            });

        })
        prev_m.addEventListener('click', () => {
            actualMonth = actualMonth - 1;
            if (actualMonth < 0) {
                actualMonth = 11;

                subYear()
            }
            months.forEach((m) => {
                m.classList.remove('month-active');
                if (m.getAttribute('data-astaton') == actualMonth) {
                    var cu = document.querySelector(`[data-astaton="${actualMonth}"]`);
                    cu.classList.add('month-active');
                }
            })

        })
        next_m.addEventListener('click', () => {
            actualMonth = actualMonth + 1;
            if (actualMonth > 11) {
                actualMonth = 0;

                addYear()
            }
            months.forEach((m) => {
                m.classList.remove('month-active');
                if (m.getAttribute('data-astaton') == actualMonth) {
                    var cu = document.querySelector(`[data-astaton="${actualMonth}"]`);
                    cu.classList.add('month-active');
                }
            })

        })
    }

    changeMonth();


}
