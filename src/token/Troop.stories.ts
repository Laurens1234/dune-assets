import type { Meta, StoryObj } from '@storybook/react';
import { TroopToken } from './Troop';

const meta = {
  component: TroopToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof TroopToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg')`,
    image: 'vector/troop/atreides.svg',
  },
};

export const Ixian: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg')`,
    image: 'vector/troop/ix.svg',
  },
};

export const BeneGesserit: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg')`,
    image: 'vector/troop/bg.svg',
  },
};

export const BeneTleilaxu: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bt.svg',
  },
};

export const Emperor: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/troop/emperor.svg',
  },
};

export const Fremen: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fremen.svg',
  },
};

export const Guild: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'vector/troop/guild.svg',
  },
};

export const Iduali: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'vector/troop/iduali.svg',
  },
};

export const Harkonnen: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/harkonnen.svg',
  },
};

export const Moritani: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fat.svg',
  },
};

export const Ginaz: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ginaz.svg',
  },
};

export const Landsraad: Story = {
  args: {
    background: `url('/generated/utils/background/landsraad.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
};

export const Richese: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
};

export const Ecaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
};

export const CHOAM: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
};