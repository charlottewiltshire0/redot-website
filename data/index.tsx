import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export const links = [
  {
    label: 'Features',
    href: '/features/',
  },
  {
    label: 'Showcase',
    href: '/showcase/',
  },
  {
    label: 'Blog',
    href: '/blog/',
  },
  {
    label: 'Community',
    href: '/community/',
  },
  {
    label: 'Assets',
    href: '/asset/',
  },
];

export const social = [
  {
    label: 'Discord',
    href: 'https://discord.gg/redot',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/redotengine',
  },
];

export const news = [
  {
    title: 'Dev snapshot: Godot 4.4 dev 3',
    description:
      "We haven't slowed down and are bringing you another feature-packed update!",
    header: (
      <Image
        fill
        src='https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-4-dev-3.webp'
        alt='Dev snapshot: Godot 4.4 dev 3'
        className='rounded-lg object-cover'
      />
    ),
    href: 'https://godotengine.org/article/dev-snapshot-godot-4-4-dev-3/',
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Godot XR update - October 2024',
    description: 'Looking back at a year of XR development.',
    header: (
      <Image
        fill
        src='https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-4-dev-3.webp'
        alt='Dev snapshot: Godot 4.4 dev 3'
        className='rounded-lg object-cover'
      />
    ),
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
    href: 'https://godotengine.org/article/godot-xr-update-oct-2024/',
  },
  {
    title: 'Godot SDK Integrations',
    description:
      'A new GitHub organization to centralize the community efforts to provide support for third-party SDK...',
    header: (
      <Image
        fill
        src='https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-4-dev-3.webp'
        alt='Dev snapshot: Godot 4.4 dev 3'
        className='rounded-lg object-cover'
      />
    ),
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
    href: 'https://godotengine.org/article/godot-sdk-integrations/',
  },
  {
    title: 'Godot Rendering Priorities: September 2024',
    description: "4.3 is out. It's time for an update!",
    header: (
      <Image
        fill
        src='https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-4-dev-3.webp'
        alt='Dev snapshot: Godot 4.4 dev 3'
        className='rounded-lg object-cover'
      />
    ),
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
    href: 'https://godotengine.org/article/rendering-priorities-september-2024/',
  },
];
