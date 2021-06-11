const containerClass = "App";

const headerContent = {
  user: { firstname: "Joe" },
  content: { greetingMessage: "Hello, " },
};

const menuContent = [
  { background: "green", name: "Compteur", id: "menuItem1", path: "/compteur" },
  {
    background: "violet",
    name: "Couleurs",
    id: "menuItem2",
    path: "/couleurs",
  },
  {
    background: "grey",
    name: "Couleurs2",
    id: "menuItem3",
    path: "/couleurs/2",
  },
];

const colorsChannel = [
  { channel: 0, name: "r" },
  { channel: 1, name: "g" },
  { channel: 2, name: "b" },
];

export { containerClass, headerContent, menuContent, colorsChannel };
