import { ResourceItem } from "@/lib/data_types";

export const dataProceduralNoise: ResourceItem[] = [
  {
    id: "discrete",
    name: "Discrete",
    url: "https://en.wikipedia.org/wiki/Discrete_noise",
  },
  {
    id: "tricubic",
    name: "Tricubic",
    url: "",  // 没有特定的维基百科页面
  },
  {
    id: "perlin",
    name: "Perlin",
    url: "https://en.wikipedia.org/wiki/Perlin_noise",
  },
  {
    id: "simplex",
    name: "Simplex",
    url: "https://en.wikipedia.org/wiki/Simplex_noise",
  },
  {
    id: "spots",
    name: "Spots",
    url: "",
  },
  {
    id: "worley",
    name: "Worley",
    url: "",
  },
  {
    id: "celluar",
    name: "Celluar",
    url: "",
  },
];

export const dataComputationalGeometry: ResourceItem[] = [
  {
    id: "delaunay",
    name: "Delaunay",
    url: "https://en.wikipedia.org/wiki/Delaunay_triangulation",
  },
  {
    id: "vorinoi_diagram",
    name: "Vorinoi Diagram",
    url: "https://en.wikipedia.org/wiki/Voronoi_diagram",
  },
  {
    id: "penrose_tiles",
    name: "Penrose Tiles",
    url: "https://en.wikipedia.org/wiki/Penrose_tiling",
  },
];

export const dataComplexSystems: ResourceItem[] = [
  {
    id: "fractal",
    name: "Fractal",
    url: "https://en.wikipedia.org/wiki/Fractal",
  },
  {
    id: "lindenmayer",
    name: "Lindenmayer",
    url: "https://en.wikipedia.org/wiki/L-system",
  },
  {
    id: "shape_grammar",
    name: "Shape Grammar",
    url: "https://en.wikipedia.org/wiki/Shape_grammar",
  },
  {
    id: "rule-based_system",
    name: "Rule-based System",
    url: "https://en.wikipedia.org/wiki/Rule-based_system",
  },
  {
    id: "particle",
    name: "Particle",
    url: "https://en.wikipedia.org/wiki/Particle_system",
  },
  {
    id: "chaotic",
    name: "Chaotic",
    url: "https://en.wikipedia.org/wiki/Chaos_theory",
  },
  {
    id: "markov_model",
    name: "Markov Model",
    url: "https://en.wikipedia.org/wiki/Markov_model",
  },
];

export const dataBioinspiredSimulation: ResourceItem[] = [
  {
    id: "cellular_automaton",
    name: "Cellular Automaton",
    url: "https://en.wikipedia.org/wiki/Cellular_automaton",
  },
  {
    id: "boids",
    name: "Boids",
    url: "https://en.wikipedia.org/wiki/Boids",
  },
  {
    id: "slime_mould_algorithm",
    name: "Slime Mould Algorithm",
    url: "https://en.wikipedia.org/wiki/Physarum_polycephalum#Use_in_computation",
  },
  {
    id: "genetic_algorithm",
    name: "Genetic Algorithm",
    url: "https://en.wikipedia.org/wiki/Genetic_algorithm",
  },
  {
    id: "immune_algorithm",
    name: "Immune Algorithm",
    url: "https://en.wikipedia.org/wiki/Artificial_immune_system",
  },
  {
    id: "membrane_algorithm",
    name: "Membrane Algorithm",
    url: "https://en.wikipedia.org/wiki/Membrane_computing",
  },
];

export const dataArtificialIntelligence: ResourceItem[] = [
  {
    id: "intelligent_agents",
    name: "Intelligent Agents",
    url: "https://en.wikipedia.org/wiki/Intelligent_agent",
  },
  {
    id: "multi-agent_system",
    name: "Multi-agent System",
    url: "https://en.wikipedia.org/wiki/Multi-agent_system",
  },
];


const data = {
  dataProceduralNoise,
  dataComputationalGeometry,
  dataComplexSystems,
  dataBioinspiredSimulation,
  dataArtificialIntelligence,
}


export default data