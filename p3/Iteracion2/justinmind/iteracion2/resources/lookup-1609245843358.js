(function(window, undefined) {
  var dictionary = {
    "b85e5304-8a81-4823-81d5-26e35092a9ce": "08_salas",
    "32dc7d8d-0b1d-4f3c-9718-c593bed7e6cb": "05_juego",
    "94232563-58f2-41b8-9987-ccd1b42171e4": "18_login",
    "be0f4f66-eb29-41e9-9a23-f422966c50e8": "12_sala_miembros",
    "2032a05c-69be-4356-bbf4-b68921dea520": "03_locales",
    "14f09cf0-2326-4b46-a346-6621c243da43": "14_navigation_drawer",
    "accfd67e-8e00-4d6a-bdf3-483484b0cb32": "01_categories",
    "0ac97f47-dfae-48af-aa58-e8420abddc6d": "13_mis_valoraciones",
    "d79cc3df-6990-4276-83f3-44db09a0fa44": "10_sala_detalles",
    "ea4ddcff-92bd-493e-b81f-e6e16bf766cb": "09_sala_0",
    "6d0d45a0-16aa-4214-a636-a964cb3f87a0": "200_home_authenticated",
    "0dc0de9b-1fc0-4f1f-9683-abbedbbd5319": "16_mis_salas",
    "9804a493-2570-42cc-bb90-b08bc6867b72": "07_expansiones",
    "8962e92e-8eaa-403b-996d-0281544f3dbd": "15_datos_personales",
    "57315364-9213-467a-8a07-43980fc1fde1": "17_juegos_fav",
    "091cf0ab-fdf6-4207-8569-d78f66aaab53": "04_empresas",
    "d1c4dc40-edc2-4b22-b587-5b81f5da98ab": "11_sala_detalles2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "00_home",
    "163bc497-37ad-47d8-8ad3-95478d609db9": "19_register",
    "28568291-c4e5-486b-8dd0-cf9e7d8aede8": "06_detalles_juego",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);