import config     from 'react-global-configuration';
import Convert    from './page/Convert/Convert';
import Stats      from './page/Stats/Stats';
import Records    from './page/Records/Records';
import Home       from './page/Home/Home';

function initConfig() {
    urlMapping();
}

function urlMapping() {
    config.set({
        routes: [
            {
                path: "/",
                name: "Home",
                exact: true,
                component: Home
            },
            {
                path: "/convertir",
                name: "Convertir",
                exact: true,
                component: Convert
            },
            {
                path: "/estadisticas",
                name: "Estadisticas",
                exact: true,
                component: Stats
            },
            {
                path: "/registros",
                name: "Registros",
                exact: true,
                component: Records
            }
        ]
    });
}

export default { initConfig };
