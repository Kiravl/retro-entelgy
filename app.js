import { PaisComponent } from './components/pais-component';
import { PaisDetalleComponent } from './components/pais-detalle-component';
import { PaisService } from './services/pais-service';

customElements.define('app-pais', PaisComponent);
customElements.define('app-pais-detalle', PaisDetalleComponent);

window.addEventListener('load', async  () => {
    const paisSrv = new PaisService();
    const lista = await paisSrv.get();
    const table = document.getElementById('table');
    table.innerHTML = '';
    lista.forEach(x => {
        const el = document.createElement('app-pais');
        el.pais = x;
        table.appendChild(el);
    });
});
