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
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Globe = dynamic(() => import('@/components/ui/globe'), {
  ssr: false,
  loading: () => <Skeleton className='h-full w-full' />,
});

const AnimatedBeamMultipleOutputCrossPlatform = dynamic(() =>
  import('@/components/ui/animated-beam-multiple-output-cross-platform').then(
    (mod) => mod.AnimatedBeamMultipleOutputCrossPlatform
  )
);

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
        <video
          loop={true}
          controls={false}
          preload='auto'
          autoPlay={true}
          muted={true}
        >
          <source
            src='https://rr5---sn-4g5e6ns7.googlevideo.com/videoplayback?expire=1728672429&ei=TR4JZ_qiOIWLkucP7YuAWA&ip=45.13.239.75&id=o-AL9EnprOSis7rU_YoZAwCM0yCG7rxxU9EDOdhOnuckkw&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXLXGFQhTPMxll0FJpnxUZyoxzGQV-N7ZnuaspoGs8srMTYfs5LdPzODdCx3yQCFLye9wfckKhRVrqq6&vprv=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=39812075&dur=103.061&lmt=1700298779524412&keepalive=yes&fexp=24350655,24350673,51300761&c=MEDIA_CONNECT_FRONTEND&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAOS6wRkerHLV4CHQPfp8wWDs7nihlKmxGSOFnieuJvYGAiEAxDQLkhVkCvgzDqFnRvN4d-TgtNX6R0U4VeYZDT-avIQ%3D&rm=sn-4g5ers7e&rrc=104,80&req_id=652340e88676a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-f5fee7l&cms_redirect=yes&cmsv=e&met=1728650835,&mh=K1&mip=2a09:bac1:7520:28::84:a9&mm=34&mn=sn-4g5e6ns7&ms=ltu&mt=1728650434&mv=m&mvi=5&pl=64&rms=ltu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhANqq7v4GfDjaGZ3R3IGJye729RkgqEMvoJAcEC6dtRDwAiBQ1P2ThljHqiRJztoTJptGwXZwjGouNIZIFzzfAoE6Ig%3D%3D'
            type='video/mp4'
          />
        </video>
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
