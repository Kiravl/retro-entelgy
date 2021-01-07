export class PaisDetalleComponent extends HTMLElement
{
    set continente(continente)
    {
        this.shadowRoot.querySelector('p').innerText = continente;
    }

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .back {
                    align-items: center;
                    background-color: rgba(0, 0, 0, .75);
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    width: 100vw;
                }
                .modal {
                    background: white;
                    max-height: 700px;
                    max-width: 800px;
                    padding: 20px;
                }
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                }
                button {
                    color: #fff;
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                    border-radius: .25rem;
                    font-size: 1rem;
                    padding: .375rem .75rem;
                }
                h3 {
                    font-size: 2em;
                }
                p {
                    font-size: 5em;
                }
            </style>
            <div class="back">
                <div class="modal">
                    <h3>Ubicado en</h3>
                    <p></p>
                    <div class="modal-footer">
                        <button>Cerrar</button>
                    </div>
                </div>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback()
    {
        this.shadowRoot.querySelector('button').addEventListener('click', e => {
            const body = document.querySelector('body');
            body.removeChild(this);
        });
    }

    disconnectedCallback()
    {
        this.shadowRoot.querySelector('button').removeEventListener('click');
    }
}