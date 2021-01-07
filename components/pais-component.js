export class PaisComponent extends HTMLElement
{
    set pais(pais)
    {
        this._pais = pais;
        this.shadowRoot.getElementById('demonym').innerHTML = pais.demonym;
        this.shadowRoot.getElementById('region').innerHTML = pais.region;
        this.shadowRoot.querySelector('img').src = pais.flag;
        this.shadowRoot.querySelector('h2').innerText = pais.name;
    }

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    display: flex;
                    justify-content: space-between;
                }

                .card-container {
                    text-align: right;
                }

                .card-img {
                    width: 250px;
                    object-fit: contain;
                }
            </style>
            <article class="card">
                <img class="card-img" src="">
                <div class="card-container">
                    <h2></h2>
                    <p><strong>Denominación:</strong> <span id="demonym"></span></p>
                    <p><strong>Región:</strong> <span id="region"></span></p>
                </div>
            </article>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback()
    {
        this.shadowRoot.querySelector('h2').addEventListener('click', e => {
            const detalle = document.createElement('app-pais-detalle');
            detalle.continente = this._pais.subregion;
            const body = document.querySelector('body');
            body.appendChild(detalle);
        });
    }

    disconnectedCallback()
    {
        this.shadowRoot.querySelector('h2').removeEventListener('click');
    }
}