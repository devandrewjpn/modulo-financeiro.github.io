export default function showSwitch() {
    const switchRecebimento = document.getElementById('recebimento');
    const recebimentoContent = document.getElementById('recebimento-content');

    const switchLancamento = document.getElementById('lancamento');
    const lancamentoContent = document.getElementById('lancamento-content');

    const switchParcelado = document.getElementById('parcelado');
    const parceladoContent = document.getElementById('parcelado-content');

    const switchRecorrente = document.getElementById('recorrente');
    const recorrenteContent = document.getElementById('recorrente-content');

    const switchPossuiSub = document.getElementById('possuiSub');
    const possuiSubContent = document.getElementById('possuiSub-content');


    if (document.body.contains(switchRecebimento)) {
        switchRecebimento.addEventListener('change', function () {
            if (this.checked) {
                recebimentoContent.classList.add('show-switch-230');
            } else {
                recebimentoContent.classList.remove('show-switch-230');
            }
        });
    }

    if (document.body.contains(switchLancamento)) {
        switchLancamento.addEventListener('change', function () {
            if (this.checked) {
                lancamentoContent.classList.add('show-switch');
            } else {
                lancamentoContent.classList.remove('show-switch');
            }
        });
    }


    if (document.body.contains(switchParcelado)) {
        switchParcelado.addEventListener('change', function () {
            if (this.checked) {
                parceladoContent.classList.add('show-switch');
                recorrenteContent.classList.remove('show-simple');
            } else {
                parceladoContent.classList.remove('show-switch');
            }
        });
    }

    if (document.body.contains(switchRecorrente)) {
        switchRecorrente.addEventListener('change', function () {
            if (this.checked) {
                recorrenteContent.classList.add('show-simple');
                parceladoContent.classList.remove('show-switch');
            } else {
                recorrenteContent.classList.remove('show-simple');
            }
        });
    }

    if (document.body.contains(switchPossuiSub)) {
        switchPossuiSub.addEventListener('change', function () {
            if (this.checked) {
                possuiSubContent.classList.add('show-switch');
            } else {
                possuiSubContent.classList.remove('show-switch');
            }
        });
    }


}