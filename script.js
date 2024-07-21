    const cofe = document.querySelectorAll('.cofe')

    for(let i = 0; i < cofe.length; i++) {
        cofe[i].addEventListener('click', f1)
    }

    function f1() {

        for(let i = 0; i < cofe.length; i++) {
            cofe[i].querySelector('.hover_div').style.display = 'none'
        }

        let hover_div = this.querySelector('.hover_div')

        hover_div.style.display = 'flex'
    }
   
