
const ESTADOS = [

    { estado: "Aguascalientes", clave: "aguas" },
    { estado: "Baja California", clave: "bajaC" },
    { estado: "Baja California Sur", clave: "bajaCS" },
    { estado: "Campeche", clave: "camp" },
    { estado: "Chiapas", clave: "chiap" },
    { estado: "Chihuahua", clave: "chih" },
    { estado: "Coahuila", clave: "coah" },
    { estado: "Colima", clave: "col" },
    { estado: "Ciudad de México", clave: "cdmx" },
    { estado: "Durango", clave: "dgo" },
    { estado: "Guanajuato", clave: "gto" },
    { estado: "Guerrero", clave: "gro" },
    { estado: "Hidalgo", clave: "hgo" },
    { estado: "Jalisco", clave: "jal" },
    { estado: "México", clave: "edomex" },
    { estado: "Michoacán", clave: "mich" },
    { estado: "Morelos", clave: "mor" },
    { estado: "Nayarit", clave: "nay" },
    { estado: "Nuevo León", clave: "nl" },
    { estado: "Oaxaca", clave: "oax" },
    { estado: "Puebla", clave: "pue" },
    { estado: "Querétaro", clave: "qro" },
    { estado: "Quintana Roo", clave: "qr" },
    { estado: "San Luis Potosí", clave: "slp" },
    { estado: "Sinaloa", clave: "sin" },
    { estado: "Sonora", clave: "son" },
    { estado: "Tabasco", clave: "tab" },
    { estado: "Tamaulipas", clave: "tam" },
    { estado: "Tlaxcala", clave: "tlax" },
    { estado: "Veracruz", clave: "ver" },
    { estado: "Yucatán", clave: "yuc" },
    { estado: "Zacatecas", clave: "zac" }

];

const SUCURSALES = {

    aguas: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    bajaC: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    bajaCS: [

        {
            sucursal: "PUNTO DE VENTA LA PAZ",
            ejecutivo: "YENI ESMERALDA MONTAÑO TAPIA",
            Telefono: "612 149 5507",
            whatsapp: "612 141 6663",
            email: "ymontano@alianzafamiliar.mx",
            direccion: "México 1 KM 14.5, El Centenario, 23205 El Centenario, B.C.S.",
            maps: "https://g.co/kgs/oQ4pHvA"
        }
    ],

    camp: [

        {
            sucursal: "SUCURSAL CD. CARMEN",
            ejecutivo: "Javier Alfredo Casanova Chavarria",
            Telefono: "938 205 4997",
            whatsapp: "938 181 5042",
            email: "jcasanova@alianzafamiliar.mx",
            direccion: "C. 53, 592, San Carlos, 24116, Ciudad del Carmen, Campeche",
            maps: "https://maps.app.goo.gl/FMv5pLEWQh9ZdP3s8"
        },
        {
            sucursal: "SUCURSAL CAMPECHE SAN FRANCISCO",
            ejecutivo: "CECILIA BRITO GUTIÉRREZ",
            Telefono: "981 813 7871",
            whatsapp: "981 131 4296",
            email: "cbrito@alianzafamiliar.mx",
            direccion: "Priv. Francisco I. Madero, 10, Col. San Francisco, 24010, Campeche, Campeche.",
            maps: "https://maps.app.goo.gl/Yhz64s9NTDxdanAa7"
        },
        {
            sucursal: "SUCURSAL CAMPECHE STA. MARÍA",
            ejecutivo: "981 817 4308",
            Telefono: "981 813 7871",
            whatsapp: "981 101 1955",
            email: "cehuan@alianzafamiliar.mx",
            direccion: "Hacienda Chulbac, 36, Fracc. Santa María, 24070, Campeche, Campeche.",
            maps: "https://maps.app.goo.gl/jmrq3euWEnCTiXzJ8"
        }
    ],

    cdmx: [

        {
            sucursal: "SUCURSAL CDMX",
            ejecutivo: "NANCY CRUZ GALLEGOS",
            Telefono: "55 5910 0816",
            whatsapp: "55 4569 5912",
            email: "ncruz@alianzafamiliar.mx",
            direccion: "Buenavista, 124 int 7, Colonia Lindavista, 07300, Gustavo A. Madero, CDMX. ",
            maps: "https://maps.app.goo.gl/fZpw7AJKDHcnZMuW7"
        },
        {
            sucursal: "SUCURSAL IZTAPALAPA",
            ejecutivo: "ELFRICH MENDIETA MONTOYA",
            Telefono: "55 9038 8084",
            whatsapp: "55 7343 5205",
            email: "emendieta@alianzafamiliar.mx",
            direccion: "Av. Tláhuac, 1577, interior local 18, Col. Los Mirasoles, 09910, Iztapalapa, CDMX.",
            maps: "https://maps.app.goo.gl/qFXutYUP6sn7f9dU9?g_st=iwb"
        },
        {
            sucursal: "SUCURSAL GUSTAVO A. MADERO",
            ejecutivo: "JUAN MANUEL MORA GUZMÁN",
            Telefono: "55 5132 6191",
            whatsapp: "55 7916 0650",
            email: "jmora@alianzafamiliar.mx",
            direccion: "Calle Norte 70, 6221, Gertrudis Sánchez I Secc, 07830, Gustavo A. Madero, CDMX.",
            maps: "https://goo.gl/maps/JtNFTKc6njQdJHbA9"
        }
    ],

    chiap: [

        {
            sucursal: "SUCURSAL TUXTLA ORIENTE",
            ejecutivo: "PAOLA VANESSA CHAVARRIA MOGUEL",
            Telefono: "961 654 0808",
            whatsapp: "961 654 0808",
            email: "pchavarria@alianzafamiliar.mx",
            direccion: "AV. Nakun, 304, Maya, 29010, Tuxtla Gutierrez, Chiapas",
            maps: "https://goo.gl/maps/3sSf93Gpbx2xHmSG7"
        },
        {
            sucursal: "SUCURSAL TUXTLA CENTRO",
            ejecutivo: "RAFAEL OLIVARES",
            Telefono: "961 688 2813",
            whatsapp: "961 652 2149",
            email: "rafael.olivares@alianzafamiliar.mx",
            direccion: "C. 11 Pte Nte, 339, El Magueyito, 29000, Tuxtla Gutierrez, Chiapas",
            maps: "https://goo.gl/maps/T3eJJK7vYty4gdJf7"
        },
        {
            sucursal: "SUCURSAL COMITAN",
            ejecutivo: "ANA KAREN GORDILLO HERNANDEZ",
            Telefono: "961 151 7135",
            whatsapp: "961 151 7135",
            email: "agordillo@alianzafamiliar.mx",
            direccion: "Tercera Calle Sur Pte., 12, Int. A, San José, 30023, Comitán de Domínguez, Chiapas.",
            maps: "https://maps.app.goo.gl/FRB5SB4WBTLsazoB8"
        }
    ],

    chih: [

        {
            sucursal: "SUCURSAL CHIHUAHUA",
            ejecutivo: "ALICIA DOMÍNGUEZ ARANDA",
            Telefono: "614 530 6579",
            whatsapp: "614 530 6579",
            email: "bdominguez@alianzafamiliar.mx",
            direccion: "Calle Ignacio Allende No.1903 con esquina Calle 21a, Colonia Centro, 31000, Chihuahua, Chihuahua.",
            maps: "https://maps.app.goo.gl/SEWb7dQA821hQKUy7"
        },
        {
            sucursal: "PUNTO DE VENTA CD. JUÁREZ",
            ejecutivo: "LIZETH URBINA CORRAL",
            Telefono: "656 393 0683",
            whatsapp: "625 118 3724",
            email: "lurbina@alianzafamiliar.mx",
            direccion: "C. Manzaneros No.1918, Col. Sandra Lucía Centro, 32530, Cd. Juárez, Chihuahua.",
            maps: "https://maps.app.goo.gl/PK5TeJmfMPGkEK4e6"
        }
    ],

    coah: [

        {
            sucursal: "SUCURSAL COAHUILA",
            ejecutivo: "DULCE MARÍA REQUENEZ IBARRA",
            Telefono: "861 674 7645",
            whatsapp: "861 112 7392",
            email: "drequenez@alianzafamiliar.mx",
            direccion: "Av. 5 de Mayo, 161, Col. Centro, 26700, Sabinas, Coahuila.",
            maps: "https://maps.app.goo.gl/ckShAKfANk1NLees9"
        }
    ],

    col:  [

        {
            sucursal: "SUCURSAL COLIMA",
            ejecutivo: "JESSICA LIZETH FIGUEROA GONZÁLEZ",
            Telefono: "312 206 5177",
            whatsapp: "312 319 0107 ",
            email: "jfigueroa@alianzafamiliar.mx",
            direccion: "Concepción Barbosa, 175, Col. Liberación, 28950, Villa de Álvarez, Colima.",
            maps: "https://goo.gl/maps/T3JQFYy6pEx42Umm6"
        }
    ],

    dgo: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    gto: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    gro: [

        {
            sucursal: "SUCURSAL TLAPA",
            ejecutivo: "IZTACCIHUATL RAMÍREZ CORTÉS",
            Telefono: "55 1004 5187",
            whatsapp: "55 1004 5187",
            email: "iramirez@alianzafamiliar.mx",
            direccion: "C. Hidalgo, 148, A, Centro, 41300, Tlapa de Comonfort, Guerrero",
            maps: "https://goo.gl/maps/cv9q74m4nnrBHNnt8"
        },
        {
            sucursal: "SUCURSAL CHILPANCINGO",
            ejecutivo: "MARÍA FERNANDA ANTÚNEZ FLORES",
            Telefono: "747 138 6702",
            whatsapp: "747 109 6945",
            email: "mantunez@alianzafamiliar.mx",
            direccion: "C. Belisario Dominguez, 17, Centro, 39000, Chilpancingo de los Bravos, Guerrero",
            maps: "https://goo.gl/maps/7fXsGNcToGiunXfq7"
        }
    ],

    hgo: [

        {
            sucursal: "SUCURSAL PACHUCA",
            ejecutivo: "CLAUDIA ELENA MAYO ESPINO",
            Telefono: "771 698 7612",
            whatsapp: "55 6421 7839",
            email: "cmayo@alianzafamiliar.mx",
            direccion: "Av. Picarantos, Lote 16, Parque de Poblamiento, Alborada, 42032, Pachuca, Hidalgo",
            maps: "https://maps.app.goo.gl/3vauRSh2vSK5YVzHA"
        }
    ],

    jal: [

        {
            sucursal: "SUCURSAL PUERTO VALLARTA",
            ejecutivo: "EDGAR GARAYGORDOBIL RAMIREZ",
            Telefono: "322 114 4478",
            whatsapp: "322 218 2411",
            email: "egaraygordobil@alianzafamiliar.mx",
            direccion: "AV. Francisco Villa, 1010, FRACC. Las Gaviotas, 48328, Puerto Vallarta, Jalisco",
            maps: "https://goo.gl/maps/fUExxpFvKLGDnrsv8"
        }
    ],

    edomex: [


        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        },
        {
            sucursal: "SUCURSAL ATLACOMULCO",
            ejecutivo: "GABRIELA ADRIANA VIEYRA MARIN",
            Telefono: "712 256 3188",
            whatsapp: "712 256 3188",
            email: "gvieyra@alianzafamiliar.mx",
            direccion: "Río Pánuco No. 33 Col. Rio Lerma Tic Tic. 50456, Atlacomulco, México",
            maps: "https://maps.app.goo.gl/veDzoYCBkzeGHMsa8"
        },
        {
            sucursal: "SUCURSAL TLALNEPANTLA",
            ejecutivo: "MIGUEL FLORES ROBLES",
            Telefono: "55 5204 1674",
            whatsapp: "56 1014 4555",
            email: "mflores@alianzafamiliar.mx",
            direccion: "AV. Sor Juana Ines de la Cruz, 22, INT. 203, Centro, 54000, Tlalnepantla, México",
            maps: "https://goo.gl/maps/y8qX42dQuwnLtju2A"
        },
        {
            sucursal: "SUCURSAL TOLUCA",
            ejecutivo: "JORGE LUIS PÉREZ MUNGUÍA",
            Telefono: "729 596 5577",
            whatsapp: "729 596 5577",
            email: "jperez@alianzafamiliar.mx",
            direccion: "Fidel Velázquez No. 215 Col. Vertice. Local 143, Planta Alta Bazar Pericoapa 50150, Toluca, México",
            maps: "https://maps.app.goo.gl/EQgwaKosa5TmDibX7"
        },
        {
            sucursal: "SUCURSAL ECATEPEC",
            ejecutivo: "EDGAR TREJO DOMÍNGUEZ",
            Telefono: "55 2155 0824",
            whatsapp: "56 4004 2450",
            email: "etrejo@alianzafamiliar.mx",
            direccion: "Hermenegildo Galeana No. 9 Col. Centro 55000, Ecatepec de Morelos, México",
            maps: "https://maps.app.goo.gl/Mni8DMTbPS6i2CRu9"
        }
    ],

    mich : [

        {
            sucursal: "SUCURSAL MORELIA",
            ejecutivo: "MARÍA DE JESÚS EQUIHUA",
            Telefono: "443 779 5918",
            whatsapp: "443 370 8878",
            email: "mequihua@alianzafamiliar.mx",
            direccion: "Brasil, 400, Int. 208, Col. Las Américas, 58270, Morelia, Michoacán.",
            maps: "https://maps.app.goo.gl/UCzyBw7mMwLwSWGJ8" 
        },
        {
            sucursal: "SUCURSAL MORELIA LA LOMA",
            ejecutivo: "ESAU ESQUIVEL JACOBO",
            Telefono: "443 822 6773 / 443 453 1410",
            whatsapp: "443 914 3361",
            email: "eesquivel@alianzafamiliar.mx",
            direccion: "C. W. A. Mozart , 542, Int. 9, Col. La Loma, 58290, Morelia, Michoacán.",
            maps: "https://maps.app.goo.gl/bJ7NLZKPsCGBEPWU7" 
        }
    ],

    mor : [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    nay : [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
    ],

    nl: [

        {
            sucursal: "SUCURSAL MONTERREY",
            ejecutivo: "JOSE ANTONIO ZAVALETA VAZQUEZ",
            Telefono: "811 550 2491",
            whatsapp: "811 590 8239",
            email: "jzavaleta@alianzafamiliar.mx",
            direccion: "C. Manuel Maria del Llano, 128, C, Centro, 64000, Monterrey, Nuevo León.",
            maps: "https://maps.app.goo.gl/ZQ66YZyWi4zCtQX76"
        }
    ],

    oax : [

        {
            sucursal: "PUNTO DE VENTA TUXTEPEC",
            ejecutivo: "EVA TORRES HERNÁNDEZ",
            Telefono: "287 875 2390",
            whatsapp: "287 883 2526",
            email: "etorres@alianzafamiliar.mx",
            direccion: "Av. 5 de Mayo, 818, Centro,68300, San Juan Bautista Tuxtepec, Oaxaca.",
            maps: "https://maps.app.goo.gl/ne5ghsuaouMLbCYm8" 
        }
    ],

    pue : [

        {
            sucursal: "SUCURSAL PUEBLA",
            ejecutivo: "MARCELA MERCEDES ORDUÑA CALVARIO",
            Telefono: "221 597 7601",
            whatsapp: "221 597 7601",
            email: "morduna@alianzafamiliar.mx",
            direccion: "C. Tlaxco, 715, La Paz, 72160, Puebla, Puebla.",
            maps: "https://maps.app.goo.gl/CfLTUSqV6LKpoBLN7"
        }
    ],

    qro : [

        {
            sucursal: "PUNTO DE VENTA QUERÉTARO",
            ejecutivo: "BERENICE PAREDES MONDRAGÓN",
            Telefono: "442 221 7568",
            whatsapp: "442 397 8475",
            email: "bmondragon@alianzafamiliar.mx",
            direccion: "Calzada de los Arcos, 15, Jardines de Querétaro, 76020, Santiago de Querétaro, Querétaro.",
            maps: "https://maps.app.goo.gl/twM4ZdwjYUWmBSZz6"
        }
    ],

    qr : [

        {
            sucursal: "SUCURSAL CANCUN SUR",
            ejecutivo: "MIGUEL ANGEL JUSTO IGNACIO",
            Telefono: "998 845 5852",
            whatsapp: "998 845 5852",
            email: "mjusto@alianzafamiliar.mx",
            direccion: "Máster Plaza 135 Oficina 408. Av. 135 Sm. 327, Plaza, 77500,Cancún, Quintana Roo.",
            maps: "https://maps.app.goo.gl/LgLdXfv99ij2vg8q9"
        },
        {
            sucursal: "SUCURSAL CHETUMAL",
            ejecutivo: "RODRIGO ALONSO CARBAJAL LÓPEZ",
            Telefono: "983 103 2509",
            whatsapp: "983 103 2509",
            email: "rcarbajal@alianzafamiliar.mx",
            direccion: "C. San Salvador, 560A, Framboyanes, 77034, Chetumal, Quintana Roo.",
            maps: "https://maps.app.goo.gl/svr9b7e35tca3YeBA"
        }
    ],

    slp : [
        {
            sucursal: "SUCURSAL SAN LUIS POTOSÍ",
            ejecutivo: "JORGE ABRAHAM GRIMALDO",
            Telefono: "444 690 8919",
            whatsapp: "444 256 9096",
            email: "jgrimaldo@alianzafamiliar.mx",
            direccion: "Calle Francisco de Montejo, 129, Industrial Aviación 2da sec, 78140, San Luis Potosí, San Luis Potosí.",
            maps: "https://maps.app.goo.gl/4GNGVE3HxKo8mnMu7"
        }
    ],

    sin : [

        {
            sucursal: "SUCURSAL CULIACÁN",
            ejecutivo: "ALICIA BARRERAS ANAYA",
            Telefono: "667 285 7867",
            whatsapp: "667 150 0525",
            email: "abarreras@alianzafamiliar.mx",
            direccion: "Artesanos, 199, Tierra Blanca, 80030, Culiacán, Sinaloa.",
            maps: "https://maps.app.goo.gl/zLXZNJEt2HJCu1kZ7"
        }
    ],

    son: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5" 
        }
    ],

    tab: [
        {
            sucursal: "SUCURSAL VILLAHERMOSA ORIENTE",
            ejecutivo: "SHANYK MARLEN MUÑOZ CANCHE",
            Telefono: "993 220 7308",
            whatsapp: "993 220 7308",
            email: "smunoz@alianzafamiliar.mx",
            direccion: "C. Eusebio Castillo, 700, Delegacional 3, 86077, Centro, Tabasco",
            maps: "https://goo.gl/maps/eSKg2MngZ8pSuwC87"
        },
        {
            sucursal: "SUCURSAL VILLAHERMOSA",
            ejecutivo: "GILBERTO AREVALO DE LA CRUZ",
            Telefono: "993 314 5511",
            whatsapp: "993 160 2119",
            email: "garevalo@alianzafamiliar.mx",
            direccion: "AV. 27 de Febrero, 1082, Centro, 86000, Centro, Tabasco",
            maps: "https://goo.gl/maps/BkfoRF557ZRN4oYs9"
        }
    ],

    tam: [

        {
            sucursal: "SUCURSAL CD VICTORIA",
            ejecutivo: "GABRIELA PAOLA ROCHA RAMIREZ",
            Telefono: "834 148 8887",
            whatsapp: "834 148 8887",
            email: "grocha@alianzafamiliar.mx",
            direccion: "C. Mier y Terán, 2362, Fovissste, 87049, Ciudad Victoria, Tamaulipas",
            maps: "https://goo.gl/maps/JcYjttsqAKeTeG8A6"
        },
        {
            sucursal: "SUCURSAL TAMPICO",
            ejecutivo: "LLUVIA BERENICE CONDE SOTO",
            Telefono: "833 614 7900",
            whatsapp: "833 266 5723",
            email: "lconde@alianzafamiliar.mx",
            direccion: "C. San Pedro, 518, Jesus Elias Piña I, II y III, 89365, Tampico, Tamaulipas",
            maps: "https://goo.gl/maps/mpVjbS5Xb8GugfE37"
        },
        {
            sucursal: "SUCURSAL MATAMOROS",
            ejecutivo: "GUADALUPE MARTÍNEZ BERMEA",
            Telefono: "868 810 1349",
            whatsapp: "868 170 7819",
            email: "gmartinez@alianzafamiliar.mx",
            direccion: "C. 4 y J. S. el Cano, 18, Planta baja Local A Col. Euzkadi, 87370, Matamoros, Tamaulipas",
            maps: "https://maps.app.goo.gl/a2b4CQENw37RbuA48"
        },
        {
            sucursal: "PUNTO DE VENTA TAMPICO",
            ejecutivo: "MARGARITA HERNÁNDEZ LEE",
            Telefono: "833 155 0682",
            whatsapp: "833 155 0682",
            email: "mhernandez@alianzafamiliar.mx",
            direccion: "Av. Ejército Mexicano, 508, Guadalupe, 89120, Tampico, Tamaulipas",
            maps: "https://maps.app.goo.gl/E21Y9ePt4sFHcsZR8"
        }
    ],

    tlax : [

        {
            sucursal: "SUCURSAL TLAXCALA",
            ejecutivo: "FÁTIMA LOURDES RUBIO PÉREZ",
            Telefono: "246 221 3160",
            whatsapp: "246 221 6110",
            email: "frubio@alianzafamiliar.mx",
            direccion: "Artesanías, 103-B, Col. Adolfo López Mateos, 90040, Tlaxcala, Tlaxcala.",
            maps: "https://maps.app.goo.gl/yZYLX91hq66UnRJk9"
        }
    ],
    
   ver : [
        {
            sucursal: "SUCURSAL BOCA DEL RIO",
            ejecutivo: "MARIA RAQUEL R. POSADAS",
            Telefono: "229 356 5214",
            whatsapp: "229 356 5214",
            email: "mposadas@alianzafamiliar.mx",
            direccion: "C. Palmeras, 163, LC. C, Fovissste, 94294, Boca del Rio, Veracruz.",
            maps: "https://goo.gl/maps/6sWBayhvwWWYFAJD9"
        },
        {
            sucursal: "SUCURSAL XALAPA",
            ejecutivo: "YURIANA HUERTA HERNÁNDEZ",
            Telefono: "228 138 0429",
            whatsapp: "228 138 0429",
            email: "yhuerta@alianzafamiliar.mx",
            direccion: "Priv. Alta Italia 48, Unidad Habitacional INFONAVIT Pomona, 91040, Xalapa, Veracruz.",
            maps: "https://maps.app.goo.gl/oMT3eafQYTnvvU6u7"
        },
        {
            sucursal: "SUCURSAL XALAPA CENTRO",
            ejecutivo: "ADRIANA GABRIELA RODRIGUEZ CASTILLO",
            Telefono: "228 498 3955",
            whatsapp: "228 498 3955",
            email: "arodriguez@alianzafamiliar.mx",
            direccion: "Xalapeños Ilustres 137, Zona Centro, Centro, 91000 Xalapa-Enríquez, Veracruz.",
            maps: "https://goo.gl/maps/c2FK1BbsToieeSe89?coh=178572&entry=tt"
        },
        {
            sucursal: "SUCURSAL COATZACOALCOS",
            ejecutivo: "BEATRIZ PEREZ BOFFIL",
            Telefono: "921 242 2003",
            whatsapp: "921 145 3932",
            email: "bperez@alianzafamiliar.mx",
            direccion: "AV. Nicolas Bravo, 609, LC. C, Centro, 96400, Coatzacoalcos, Veracruz",
            maps: "https://goo.gl/maps/kv3XSEvKakDA8NTn9"
        },
        {
            sucursal: "SUCURSAL LOS TUXTLAS",
            ejecutivo: "ROSA YOSAJANDY TRESS HUERTA",
            Telefono: "294 109 5979",
            whatsapp: "294 109 5979",
            email: "rtress@alianzafamiliar.mx",
            direccion: "Prol. Serapio Rendón No. 336, Col. El Cebollal, 95729, San Andrés Tuxtla, Veracruz.",
            maps: "https://maps.app.goo.gl/X83tMtv9bczHnzCR9"
        },
        {
            sucursal: "SUCURSAL COATEPEC",
            ejecutivo: "DORA VILLA CONTRERAS",
            Telefono: "228 160 4499",
            whatsapp: "228 160 4499",
            email: "dvilla@alianzafamiliar.mx",
            direccion: "C. Lerdo, 112, Col. Centro,91500, Coatepec, Veracruz",
            maps: "https://maps.app.goo.gl/nriU6c7xnxCBR2Az9"
        },
        {
            sucursal: "SUCURSAL POZA RICA",
            ejecutivo: "HILDA IVONNE FIGUEROA ROSAS",
            Telefono: "782 121 4001",
            whatsapp: "782 121 4001",
            email: "hfigueroa@alianzafamiliar.mx",
            direccion: "Boulevard Adolfo Ruiz Cortínes, 407, 4to nivel, Col. Tajín, 93330, Poza Rica, Veracruz.",
            maps: "https://maps.app.goo.gl/1pyRjVzVo1mZG9pNA"
        }
   ],

   yuc: [
        
        {
            sucursal: "SUCURSAL MÉRIDA",
            ejecutivo: "MIGUEL ANGEL PALACIOS GARCIA",
            Telefono: "999 161 9906 / 999 161 9907",
            whatsapp: "999 426 1868",
            email: "mpalacios@alianzafamiliar.mx",
            direccion: "C. 20 93, Itzimná, 97100 Mérida, Yucatán",
            maps: "https://goo.gl/maps/qtTHMbJ24do3MNsB6?coh=178572&entry=tt"
        }
   ],

   zac: [

        {
            sucursal: "SUCURSAL MEXICO (MATRIZ)",
            ejecutivo: "SAMANTHA FERNANDEZ OREGON",
            Telefono: "55 5914 8503/04 EXT. 102",
            whatsapp: "55 6477 5200",
            email: "alianza.comercial@alianzafamiliar.mx",
            direccion: "C. Villa Nicolas Romero, 12, Conjunto San Miguel, 53010, Naucalpan de Juárez, México.",
            maps: "https://goo.gl/maps/kuPsCojGzF2a98Lv5"
        }
   ]
}

function mostrarSucursales (estado) {

    sucursalesDinamicas = document.querySelector(".sucursales-dinamicas");
    let estadoSeleccionado = estado.value;
    let sucursalesEstado = SUCURSALES[estadoSeleccionado];
    
    for (const sucursal of sucursalesEstado) {

        console.log(sucursal.sucursal);
        console.log(sucursal.ejecutivo);
        console.log(sucursal.Telefono);
        console.log(sucursal.email);
        console.log(sucursal.direccion);
        console.log(sucursal.maps);
    }
    console.log(estadoSeleccionado);

    

}

const selectSucursales = document.getElementById("sucursales-estados");

for (const estado of ESTADOS){

    selectSucursales.innerHTML += `<option value = ${estado.clave}>${estado.estado}</option>`;

}