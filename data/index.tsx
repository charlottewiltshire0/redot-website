import {
  IconBrandGithub,
  IconClipboardCopy,
  IconCube,
  IconDeviceGamepad2,
  IconDeviceImac,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import Image from 'next/image';
import { AnimatedBeamMultipleOutputCrossPlatform } from '@/components/ui/animated-beam-multiple-output-cross-platform';
import Globe from '@/components/ui/globe';
import ParticleRing from '@/components/ui/particle-ring';

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

export const features = [
  {
    Icon: IconDeviceGamepad2,
    name: 'Dedicated 2D Engine',
    description:
      "Create sharp and high-performance 2D games using Redot Engine's specialized 2D rendering engine, featuring true 2D pixel coordinates and a comprehensive array of 2D nodes.",
    href: '/features/#features_2d',
    cta: 'Learn more',
    background: (
      <Image
        className='absolute -right-20 -top-20 object-cover transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105'
        alt='Innovative Design'
        fill
        src='https://godotengine.org/assets/home/features/2d.webp'
      />
    ),
    className: 'col-span-3 lg:col-span-1',
  },
  {
    Icon: IconBrandGithub,
    name: 'Open Source',
    description:
      'Experience genuine open development with Redot Engine, where every contributor benefits equally from the collective efforts and innovations of the community.',
    href: '/#get_involved',
    cta: 'Learn more',
    background: (
      <Globe className='absolute left-80 top-20 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_50%,#000_100%)] group-hover:scale-105' />
    ),
    className: 'col-span-3 lg:col-span-2',
  },
  {
    Icon: IconCube,
    name: 'Simple and Powerful 3D',
    description:
      "Redot Engine's 3D nodes provide all the tools you need to effortlessly build, animate, and render stunning 3D worlds and characters.",
    href: '/features/#features_3d',
    cta: 'Learn more',
    background: (
      <div className='absolute w-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105'>
        <ParticleRing />,
      </div>
    ),
    className: 'col-span-3 lg:col-span-2',
  },
  {
    Icon: IconDeviceImac,
    name: 'Release on All Platforms',
    description: 'Deploy games quickly on desktop, mobile, and web.',
    href: '/features/#deploy',
    cta: 'Learn more',
    background: (
      <AnimatedBeamMultipleOutputCrossPlatform className='absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
    ),
    className: 'col-span-3 lg:col-span-1',
  },
];

export const footer_links_first = [
  {
    name: 'Download',
    href: 'https://github.com/Redot-Engine/redot-engine',
  },
  {
    name: 'Documentation',
    href: 'https://github.com/Redot-Engine/redot-docs',
  },
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Source Code',
    href: 'https://github.com/Redot-Engine',
  },
];

export const footer_links_asset = [
  {
    name: 'Asset Library',
    href: '/asset',
  },
  {
    name: 'Press Kit',
    href: 'https://cdn.discordapp.com/attachments/1290096105094385695/1292789668907057292/Redot_Engine_-_Brand_Kit_v.1FINAL.zip?ex=67065533&is=670503b3&hm=f707050fa0c85bbc0a02cab2602917f07aa592a19f33d0479317b6609b6bf804&',
  },
];
