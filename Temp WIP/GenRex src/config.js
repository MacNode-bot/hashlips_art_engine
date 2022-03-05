const layersOrder = [
    { name: 'Background', number: 1 },
    { name: 'Body', number: 2 },
    { name: 'Face1', number: 3 },
    { name: 'Accessories1', number: 4 },
    // { name: 'shine', number: 1 },
    // { name: 'shine', number: 1 },
    // { name: 'bottom lid', number: 3 },
    // { name: 'top lid', number: 3 },
];

const Layers = [
    {
      id: 1,
      name: "Background",
      location: '${dir}/Background/',
      elements: '${dir}/Background/',
      position: { x:0, y:0 },
      size: { width: 3840, height: 2160},
    },
    {
      id: 2,
      name: "Body",
      location: '${dir}/Body/',
      elements: '${dir}/Body/',
      position: { x:0, y:0 },
      size: { width: 1257, height: 1080},
    },
    {
      id: 3,
      name: "Face1",
      location: '${dir}/Face1/',
      elements: '${dir}/Face1/',
      position: { x:2323, y:926 },
      size: { width: 411, height: 426},
    },
    {
      id: 4,
      name: "Accessories1",
      location: '${dir}/Accessories1/',
      elements: '${dir}/Accessories1/',
      position: { x:2012, y:561 },
      size: { width: 723, height: 519},
    }
  ];

  
const format = {
    width: '100%',
    height: 'auto',
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };