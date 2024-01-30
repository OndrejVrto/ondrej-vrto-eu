const PORTFOLIO_ITEMS = [
    {
        id: 'konfigurator-lunit',
        title: "Konfigurátor kuchynských dvierok",
        link: 'https://konfigurator.blueera.app',
        github: null,
        description: "Popis TODO...",
        thumbnail: './assets/portfolio/konfigurator-lunit/konfigurator-lunit.png',
        gallery: [
            { src: "./assets/portfolio/konfigurator-lunit/konfigurator-lunit.png", alt: "todo..." },
            { src: "./assets/portfolio/konfigurator-lunit/faradetva-home-page.jpg", alt: "todo..." },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "TypeScript", image: "typescript.svg" },
            { title: "Sass", image: "sass.svg" },
            { title: "JQuery", image: "jquery2.svg" },
            { title: "VBA", image: "vba.svg" },
        ],
    },
    // {
    //     id: 'faradetva',
    //     title: "Web na mieru pre Farnosť Detva",
    //     link: 'https://faradetva.sk',
    //     github: 'https://github.com/OndrejVrto/faradetva.sk',
    //     description: "Popis TODO...",
    //     thumbnail: 'faradetva-article-crop.jpg',
    //     gallery: [
    //         { src: "faradetva-home-page.jpg", alt: "Hlavná stránka" },
    //         { src: "faradetva-article.jpg", alt: "Vzhľad stránky s článkom" },
    //         { src: "faradetva-front-page.jpg", alt: "Stránka menu s podstránkami" },
    //     ],
    //     technologies: [
    //         { title: "Laravel", image: "laravel.svg" },
    //         { title: "Livewire", image: "liweware.svg" },
    //         { title: "Bootstrap", image: "bootstrap.svg" },
    //     ],
    // },
    // {
    //     id: 'faradetva-admin',
    //     title: "Custom CMS pre web Farnosti Detva",
    //     link: 'https://faradetva.sk/login',
    //     github: 'https://github.com/OndrejVrto/faradetva.sk',
    //     description: "Popis TODO...",
    //     thumbnail: 'faradetva-admin-dashboard-crop.jpg',
    //     gallery: [
    //         { src: "faradetva-admin-dashboard.jpg", alt: "Náhľad na dashboard administrátora" },
    //         { src: "faradetva-admin-sample-list.jpg", alt: "Tabuľka správy obrázkov" },
    //         { src: "faradetva-admin-formular-new-article.jpg", alt: "Formulár na pridávanie nového článku" },
    //     ],
    //     technologies: [
    //         { title: "Laravel", image: "laravel.svg" },
    //         { title: "Bootstrap", image: "bootstrap.svg" },
    //     ],
    // },
    // {
    //     id: 'filename-sanitize',
    //     title: "PHP balíček na správu názvov súborov",
    //     link: null,
    //     github: 'https://github.com/OndrejVrto/php-filename-sanitize',
    //     description: "Popis TODO...",
    //     thumbnail: 'php-filename-sanitize.png',
    //     gallery: null,
    //     technologies: [
    //         { title: "Php", image: "php.svg" },
    //     ],
    // },
    // {
    //     id: 'cennik-blueera',
    //     title: "Dynamický cenník",
    //     link: 'https://cennik.blueera.sk/ppc-reklama',
    //     github: null,
    //     description: "Popis TODO...",
    //     thumbnail: 'cennik-blueera-crop.png',
    //     gallery: [
    //         { src: "cennik-blueera.png", alt: "todo..." },
    //     ],
    //     technologies: [
    //         { title: "Laravel", image: "laravel.svg" },
    //         { title: "Bootstrap", image: "bootstrap.svg" },
    //         { title: "JQuery", image: "jquery2.svg" },
    //     ],
    // },
    // {
    //     id: 'cennik-blueera-admin',
    //     title: "Administrácia cenníka",
    //     link: 'https://cennik.blueera.sk/admin/login',
    //     github: null,
    //     description: "Popis TODO...",
    //     thumbnail: 'cennik-blueera-admin.png',
    //     gallery: [
    //         { src: "cennik-blueera-admin.png", alt: "todo..." },
    //     ],
    //     technologies: [
    //         { title: "Laravel", image: "laravel.svg" },
    //         { title: "Laravel Orchid", image: "laravel-orchid.svg" },
    //     ],
    // },
    // {
    //     id: 'php-linechart',
    //     title: "PHP balíček na kreslenie SVG grafov",
    //     link: null,
    //     github: 'https://github.com/OndrejVrto/php-linechart',
    //     description: "Popis TODO...",
    //     thumbnail: 'php-linechart.png',
    //     gallery: null,
    //     technologies: [
    //         { title: "Php", image: "php.svg" },
    //     ],
    // },
    // {
    //     id: 'laravel-visitors',
    //     title: "Balíček Laravel na sumarizáciu návštevnosti stránok",
    //     link: null,
    //     github: 'https://github.com/OndrejVrto/laravel-visitors',
    //     description: "Popis TODO...",
    //     thumbnail: 'laravel-visitors.png',
    //     gallery: null,
    //     technologies: [
    //         { title: "Php", image: "php.svg" },
    //         { title: "Laravel", image: "laravel.svg" },
    //     ],
    // },

    // {
    //     id: 'saunus-web',
    //     title: "Konfigurátor kadí",
    //     link: "https://saunus.sk/produkt/kupacia-kada-vonkajsia-piecka/",
    //     github: null,
    //     description: "Popis TODO...",
    //     thumbnail: 'saunus-web-konfigurator.png',
    //     gallery: [
    //         { src: "saunus-web.png", alt: "todo..." },
    //     ],
    //     technologies: [
    //         { title: "WordPress", image: "wordpress.svg" },
    //         { title: "Php", image: "php.svg" },
    //         { title: "JQuery", image: "jquery2.svg" },
    //     ],
    // },
    // {
    //     id: 'ms-automation-web',
    //     title: "Vytvorenie webu podľa dodaného dizajnu",
    //     link: "https://msautomation.blueera.sk/",
    //     github: null,
    //     description: "Popis TODO...",
    //     thumbnail: 'ms-automation-home-page.png',
    //     gallery: [
    //         { src: "ms-automation-home-page.png", alt: "todo..." },
    //     ],
    //     technologies: [
    //         { title: "WordPress", image: "wordpress.svg" },
    //         { title: "Php", image: "php.svg" },
    //         { title: "JQuery", image: "jquery2.svg" },
    //     ],
    // },
];

export default PORTFOLIO_ITEMS;
