import type { SectionConfig, StatItem, SectionTheme } from '../section-config.types';

export type ImpactLayout = 'cards' | 'counters' | 'progress' | 'timeline' | 'grid';

export interface ImpactTimelineItem extends StatItem {
  year: string;
  description?: string;
}

export interface ImpactConfig extends Omit<SectionConfig, 'layout'> {
  layout: ImpactLayout;
  stats: StatItem[];
  timelineItems?: ImpactTimelineItem[];
  theme: SectionTheme;
  /** Max value for progress bars */
  progressMax?: number;
  /** Number of columns for cards/grid layouts */
  columns?: 2 | 3 | 4;
  /** Show icon background */
  showIconBackground?: boolean;
  /** Counter animation duration in seconds */
  animationDuration?: number;
}
