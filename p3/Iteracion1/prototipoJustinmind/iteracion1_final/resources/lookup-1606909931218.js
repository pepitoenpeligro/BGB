(function(window, undefined) {
  var dictionary = {
    "f96edb89-8c78-4f77-8e8d-7fc8b8fd28e6": "Categories",
    "deee9bbf-0174-47f1-8a17-39824d96c1bf": "RoomHome",
    "9dbcbf9e-36e9-40e3-a351-995837e4459a": "UserPref",
    "fcdb57b5-db70-45a1-8ae9-c7f758edeba3": "GamesDetail",
    "5a5b0738-7227-4537-a643-72a6df15ffb7": "RoomDetails",
    "91987b2e-b9b9-4342-8715-46f1de985c84": "UserGamesFav",
    "a15ca775-b397-41b2-b29c-bb37b23da257": "Home",
    "8c34e7e7-36c5-48dd-88b2-e155f5ecb82a": "UserVal",
    "fef566e6-833c-48b3-b156-98fc5185581e": "Game",
    "65d97f61-9baa-4fc1-8e4a-cb19d537cb56": "Locals",
    "a45f6324-76f7-4e0d-9b36-0c5e0463c5f7": "ExpantionPack",
    "10b8a7ac-8c87-405a-b082-cdbf7545bdd3": "UserProfile",
    "6634502f-f5b0-4738-b621-72f1d5c00ab1": "UserRooms",
    "dbdcbe95-4fc4-4d9b-bfeb-7fb8afe9b11b": "SingUp",
    "dc8142f1-20b5-47bf-a659-d741023ba949": "Business",
    "1dec5440-d06a-4185-a53f-1007c6c4d086": "RoomChat",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "SingInUp",
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