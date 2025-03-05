import { ResourceItem } from "@/lib/data_types";


type dataType = {
  category: string
  items: ResourceItem[]
}[]

export const data: dataType = [
  {
    category: "Roli",
    items: [
      { id: "roli-seaboard", name: "ROLI Seaboard", url: "https://roli.com/products/seaboard/rise2" },
      { id: "roli-lightpad-block", name: "ROLI Lightpad Block", url: "https://roli.com/products/blocks/seaboard-block-m" }
    ]
  },
  {
    category: "Monogram",
    items: [
      { id: "monogram-cc", name: "Monogram CC", url: "https://monogramcc.com/" }
    ]
  },
  {
    category: "Arturia",
    items: [
      { id: "arturia-keystep-pro", name: "Arturia KeyStep Pro", url: "https://www.arturia.com/products/hybrid-synths/keystep-pro/overview" },
      { id: "arturia-beatstep-pro", name: "Arturia Beatstep Pro", url: "https://www.arturia.com/products/hybrid-synths/beatstep-pro/overview" },
      { id: "arturia-minilab", name: "Arturia MiniLab", url: "https://www.arturia.com/products/hybrid-synths/minilab-3/overview" }
    ]
  },
  {
    category: "Korg",
    items: [
      { id: "korg-nano-kontrol", name: "Korg nano KONTROL2", url: "https://www.korg.co.uk/products/nanokontrol2" },
      { id: "korg-nano-key", name: "Korg nano KEY", url: "https://www.korg.co.uk/products/nanokey-st" },
      { id: "korg-nano-pad", name: "Korg nano PAD", url: "https://www.korg.co.uk/products/nanopad2" },
      { id: "korg-nano-key-studio", name: "Korg nano key studio", url: "https://www.korg.co.uk/products/nanokey-st" }
    ]
  },
  {
    category: "Ableton",
    items: [
      { id: "ableton-push", name: "Ableton Push", url: "https://www.ableton.com/en/push/" }
    ]
  },
  {
    category: "Novation",
    items: [
      { id: "novation-lunchpad", name: "Novation lunchpad", url: "https://novationmusic.com/launch" }
    ]
  },
  {
    category: "Icon Pro Audio",
    items: [
      { id: "icon-icontrols", name: "iCON iControls", url: "https://iconproaudio.com/product/icontrols/" }
    ]
  },
  {
    category: "MIDI Fighter",
    items: [
      { id: "midi-fighter-twister", name: "MIDI Fighter Twister", url: "https://www.midifighter.com/" }
    ]
  }
];


export default data;
