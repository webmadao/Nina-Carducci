module.exports = {
    content: ['index.html'], // Fichiers de contenu à analyser
    css: ['./assets/style.css'],
    };

    import PurgeCSS from 'purgecss'
const purgeCSSResults = await new PurgeCSS().purge({
    content: ['index.html'],
  css: ['./assets/style.css']
})