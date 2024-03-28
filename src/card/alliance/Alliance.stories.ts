import type { Meta, StoryObj } from '@storybook/react';
import { AllianceCard } from './Alliance';

const meta = {
  component: AllianceCard,
} satisfies Meta<typeof AllianceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    background: `/generated/utils/background/atreides.jpg`,
    logo: 'vector/logo/atreides.svg',
    name: 'Atreides',
    decals: [
      {
        id: 'vector/icon/eye.svg',
        muted: true,
        offset: [-90, -60],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/icon/kwisatz.svg',
        muted: true,
        offset: [190, 50],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/atreides.svg',
  },
};

export const Harkonnen: Story = {
  args: {
    background: `/generated/utils/background/harkonnen.jpg`,
    logo: 'vector/logo/harkonnen.svg',
    name: 'Harkonnen',
    decals: [
      {
        id: 'vector/decal/chaumurky.svg',
        muted: true,
        offset: [-40, 40],
        outline: false,
        scale: 1.6,
      },
      {
        id: 'vector/decal/blade.svg',
        muted: true,
        offset: [220, -80],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/harkonnen.svg',
  },
};

export const Fremen: Story = {
  args: {
    background: `/generated/utils/background/fremen.jpg`,
    logo: 'vector/logo/fremen.svg',
    name: 'Fremen',
    decals: [
      {
        id: 'vector/decal/shai-halud1.svg',
        muted: true,
        offset: [50, 40],
        outline: false,
        scale: 1,
      },
      {
        id: 'vector/decal/herb.svg',
        muted: true,
        offset: [280, 0],
        outline: false,
        scale: 1.3,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/fremen.svg',
  },
};

export const Emperor: Story = {
  args: {
    background: `/generated/utils/background/emperor.jpg`,
    logo: 'vector/logo/emperor.svg',
    name: 'Emperor',
    decals: [
      {
        id: 'vector/decal/harvester1.svg',
        muted: true,
        offset: [-80, 20],
        outline: false,
        scale: 1.2,
      },
      {
        id: 'vector/icon/spice_standalone.svg',
        muted: true,
        offset: [250, -80],
        outline: false,
        scale: 0.5,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/emperor.svg',
  },
};

export const SpacingGuild: Story = {
  args: {
    background: `/generated/utils/background/guild.jpg`,
    logo: 'vector/logo/guild.svg',
    name: 'Spacing Guild',
    decals: [
      {
        id: 'vector/decal/trip.svg',
        muted: true,
        offset: [-80, 20],
        outline: false,
        scale: 1.2,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/guild.svg',
  },
};

export const Ixian: Story = {
  args: {
    background: `/generated/utils/background/ixian.jpg`,
    logo: 'vector/logo/ixian.svg',
    name: 'Ixian',
    decals: [
      {
        id: 'vector/decal/hms.svg',
        muted: true,
        offset: [20, -20],
        outline: false,
        scale: 1.1,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/ixian.svg',
  },
};
