export const transcript = [
  {
    id: "s1",
    en: "I want to take us back to San Diego where a small plane crashed into a neighborhood and it has created a scene of devastation.",
    zh: "我想把我们带回圣地亚哥，一架小飞机坠毁在一个街区，造成了一片狼藉。",
    // optional: keep highlights, but now it's per-sentence
    spans: [
      { text: "I want to ", tone: "normal" },
      { text: "take us back to", tone: "green" },
      { text: " San Diego where a small plane ", tone: "normal" },
      { text: "crashed into", tone: "green" },
      { text: " a ", tone: "normal" },
      { text: "neighborhood", tone: "green" },
      { text: " and it has ", tone: "normal" },
      { text: "created a scene of devastation.", tone: "blue" },
    ],
  },
  {
    id: "s2",
    en: "That plane crashed into several homes this morning, killing multiple people.",
    zh: "那架飞机今早撞进了几户人家，造成多人死亡。",
    spans: [
      { text: "That plane ", tone: "normal" },
      { text: "crashed into", tone: "green" },
      { text: " several homes this morning, killing ", tone: "normal" },
      { text: "multiple people.", tone: "green" },
    ],
  },
];
