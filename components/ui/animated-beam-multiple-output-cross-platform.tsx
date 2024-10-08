'use client';

import React, { forwardRef, useRef } from 'react';

import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function AnimatedBeamMultipleOutputCrossPlatform({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl',
        className
      )}
      ref={containerRef}
    >
      <div className='flex size-full max-w-lg flex-row items-stretch justify-between gap-10'>
        <div className='flex flex-col justify-center'>
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle ref={div6Ref} className='size-16'>
            <Icons.redot />
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <Circle ref={div1Ref}>
            <Icons.windowOs />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.macOs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.android />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  redot: () => (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='200.000000pt'
      height='200.000000pt'
      viewBox='0 0 200.000000 200.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M765 1784 l-18 -67 -71 -33 -71 -32 -65 13 c-36 8 -70 14 -76 15 -7
0 -57 -70 -113 -157 l-102 -156 17 -32 c14 -26 30 -36 93 -57 42 -14 155 -54
251 -87 96 -34 225 -80 287 -101 l111 -38 264 93 c145 51 307 108 360 126 83
29 100 38 114 65 l17 31 -98 151 c-53 84 -101 154 -105 157 -5 3 -40 -1 -79
-9 l-70 -15 -71 32 -71 31 -20 68 -21 68 -222 0 -223 0 -18 -66z'
        />
        <path
          d='M336 1188 c-2 -7 -9 -54 -14 -104 -9 -81 -8 -100 12 -184 l22 -94
160 -73 c87 -40 166 -72 174 -72 8 0 83 26 165 57 l150 58 145 -54 c80 -30
154 -56 165 -58 11 -2 92 29 180 69 l159 73 23 90 c21 83 22 96 11 194 -6 58
-13 107 -14 109 -2 2 -152 -47 -335 -110 l-332 -113 -91 31 c-50 17 -197 68
-326 112 -129 45 -239 81 -243 81 -4 0 -9 -6 -11 -12z m327 -199 c143 -52 148
-54 142 -79 -8 -35 -36 -71 -75 -97 -46 -32 -134 -32 -180 0 -51 34 -73 70
-78 129 -4 58 11 113 31 105 6 -2 79 -29 160 -58z m874 24 c30 -73 -6 -167
-78 -203 -24 -13 -58 -20 -92 -20 -69 0 -126 38 -151 100 -9 23 -16 43 -14 44
7 5 304 115 311 115 4 1 15 -16 24 -36z'
        />
        <path
          d='M210 875 l-34 -35 60 -210 59 -209 175 -72 c96 -39 180 -73 186 -76
8 -3 11 9 8 39 -2 24 -6 95 -10 159 l-6 117 -111 52 c-62 29 -141 66 -177 83
-36 16 -68 34 -71 40 -4 5 -12 37 -19 71 -7 33 -16 64 -19 69 -4 4 -22 -9 -41
-28z'
        />
        <path
          d='M1745 833 c-16 -72 -20 -80 -49 -93 -17 -7 -78 -36 -136 -63 -58 -27
-124 -57 -146 -67 -34 -15 -42 -24 -47 -52 -11 -65 -20 -278 -11 -278 5 0 44
14 87 31 71 29 86 41 195 151 64 65 121 126 125 134 5 8 23 66 41 129 l33 114
-37 36 -38 37 -17 -79z'
        />
        <path
          d='M868 644 l-138 -56 1 -87 c1 -47 4 -126 8 -175 l6 -88 130 -53 130
-53 40 16 c22 9 81 32 130 53 l90 37 7 68 c3 38 8 117 10 176 l3 106 -130 52
c-71 29 -134 54 -140 56 -5 2 -72 -22 -147 -52z'
        />
      </g>
    </svg>
  ),
  windowOs: () => (
    <svg
      width='800px'
      height='800px'
      viewBox='-0.5 0 257 257'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
    >
      <path
        d='M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z'
        fill='#00ADEF'
      />
    </svg>
  ),
  macOs: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='100'
      height='100'
      viewBox='0 0 50 50'
    >
      <path d='M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z'></path>
    </svg>
  ),
  android: () => (
    <svg
      height='800px'
      width='800px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 413.137 413.137'
    >
      <g>
        <path
          style={{ fill: '#AAC148' }}
          d='M311.358,136.395H101.779c-4.662,0-8.441,3.779-8.441,8.441v175.749
		c0,4.662,3.779,8.441,8.441,8.441h37.363v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883
		v-59.228h34.803v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883v-59.228h37.882
		c4.662,0,8.441-3.779,8.441-8.441V144.836C319.799,140.174,316.02,136.395,311.358,136.395z'
        />
        <path
          style={{ fill: '#AAC148' }}
          d='M57.856,136.354L57.856,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
		c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
		C82.738,147.495,71.598,136.354,57.856,136.354z'
        />
        <path
          style={{ fill: '#AAC148' }}
          d='M355.281,136.354L355.281,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
		c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
		C380.164,147.495,369.024,136.354,355.281,136.354z'
        />
        <path
          style={{ fill: '#AAC148' }}
          d='M103.475,124.069h205.692c5.366,0,9.368-4.943,8.266-10.195
		c-6.804-32.428-27.45-59.756-55.465-75.543l17.584-31.727c1.19-2.148,0.414-4.855-1.734-6.045
		c-2.153-1.193-4.856-0.414-6.046,1.734l-17.717,31.966c-14.511-6.734-30.683-10.495-47.734-10.495
		c-17.052,0-33.224,3.761-47.735,10.495L140.869,2.292c-1.191-2.149-3.898-2.924-6.045-1.734c-2.148,1.19-2.924,3.897-1.734,6.045
		l17.584,31.727c-28.015,15.788-48.661,43.115-55.465,75.544C94.106,119.126,98.108,124.069,103.475,124.069z M267.697,76.786
		c0,5.282-4.282,9.565-9.565,9.565c-5.282,0-9.565-4.282-9.565-9.565c0-5.282,4.282-9.565,9.565-9.565
		C263.415,67.221,267.697,71.504,267.697,76.786z M154.508,67.221c5.282,0,9.565,4.282,9.565,9.565c0,5.282-4.282,9.565-9.565,9.565
		c-5.282,0-9.565-4.282-9.565-9.565C144.943,71.504,149.225,67.221,154.508,67.221z'
        />
      </g>
    </svg>
  ),
  user: () => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#000000'
      strokeWidth='2'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  ),
};
