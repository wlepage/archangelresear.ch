/**
 * Current focus areas. Edit this array to change the "Current Focus" section.
 */
export interface FocusArea {
  title: string;
  detail: string;
}

export const focusIntro =
  'Archangel Research develops narrow, useful tools where measurement quality, repeatability, and engineering judgment matter.';

export const focusAreas: FocusArea[] = [
  {
    title: 'Defect measurement',
    detail: 'Repeatable, traceable sizing of defects from microscopic images.',
  },
  {
    title: 'Fatigue-critical extremes',
    detail: 'Extreme-value statistics for the defects that drive fatigue failures.',
  },
  {
    title: 'Microscopy workflows',
    detail: 'Deterministic image-analysis pipelines built for materials work.',
  },
  {
    title: 'Experimental mechanics education',
    detail: 'Practical resources that help new practitioners measure well.',
  },
];
