// Each case study belongs to an ecosystem. This is what makes the
// "related work" threading meaningful rather than decorative — projects
// connect because they share a domain, not because they're adjacent in a list.

export type Habitat = 'ocean' | 'land' | 'built' | 'systems';

export const habitats: Record<
  Habitat,
  { label: string; color: string; blurb: string }
> = {
  ocean: {
    label: 'Ocean',
    color: '#2f6f68',
    blurb: 'Shipping, weather routing, and the people reading the water.',
  },
  land: {
    label: 'Land',
    color: '#6c8f4a',
    blurb: 'Farming, soil, and the long feedback loops of growing things.',
  },
  built: {
    label: 'Built',
    color: '#d97a4e',
    blurb: 'Construction and the paperwork that holds a jobsite together.',
  },
  systems: {
    label: 'Systems',
    color: '#7fb2a6',
    blurb: 'Carbon accounting, legal operations, and machine-assisted judgment.',
  },
};
