const jsondb= {
    produkte:[
        {
            name: "Crispy Burger",
            beschreibung: "american style burger",
            kategorie: "Hauptgericht",
            preis: 6.99,
            url:"burger",
            bild: "/bilder/produkte/burger.jpg",
            extras: [
                {
                    text: "doppelt",
                    preis:4,
                },
                {
                    text: "extra scharf",
                    preis: 0,
                }
            ]
        },
        {
            name: "Cola",
            beschreibung: "Original Coca Cola 0,33l",
            kategorie: "Getränke",
            preis: 2,
            url:"cola",
            bild: "/bilder/produkte/cola.jpg",
            extras: [
                {
                    text: "gekühlt",
                    preis: 0.5,
                }
            ]
        },
        {
            name: "Vanille Eis mit Erdbeeren",
            beschreibung: "Leckeres Vanille Eis mit Erdbeeren",
            kategorie: "Nachtisch",
            preis: 6.99,
            url:"eis",
            bild: "/bilder/produkte/eis.jpg"
        },
        {
            name: "Falaffel",
            beschreibung: "Falafel mit verschiedenen Dips",
            kategorie: "Hauptgericht",
            preis: 6.99,
            url:"falaffel",
            bild: "/bilder/produkte/falaffel.jpg"
        },
        {
            name: "Lahmacun",
            beschreibung: "Leckerer Lahmacun",
            kategorie: "Hauptgericht",
            preis: 7.99,
            url:"lahmacun",
            bild: "/bilder/produkte/lahmacun.jpg",
            extras: [
                {
                    text:"extra groß",
                    preis: 2,
                },
                {
                    text: "extra fleisch",
                    preis: 1.5,
                }
            ]
        },
        {
            name: "Lasagne",
            beschreibung: "Leckere Lasagne",
            kategorie: "Hauptgericht",
            preis: 6.99,
            url:"lasagne",
            bild: "/bilder/produkte/lasagne.jpg"
        },
        {
            name: "Schoko Muffin",
            beschreibung: "Frischer Schoko-Muffin",
            kategorie: "Nachtisch",
            preis: 2.99,
            url:"muffin",
            bild: "/bilder/produkte/muffin.jpg"
        },
        {
            name: "Original Pizza",
            beschreibung: "Hausgemachte Pizza",
            kategorie: "Hauptgericht",
            preis: 8.99,
            url:"pizza",
            bild: "/bilder/produkte/pizza.jpg",
            extras: [
                {
                    text: "extra Käse",
                    preis: 2.5,
                
                }
            ]
        },
        {
            name: "Pommes",
            beschreibung: "Süßkartoffel Pommes",
            kategorie: "Hauptgericht",
            preis: 3.99,
            url:"pommes",
            bild: "/bilder/produkte/pommes.jpg"
        },
        

    ]
}
export default jsondb;