<template>
  <header class='w-full duration-300 flex items-center left-0 top-0 py-7 text-white bg-primary'>
    <div class="md:max-w-[min(1208px,calc(100%-5rem))] w-full mx-auto">
      <nav class="w-full mx-auto flex gap-5 items-center">
        <NuxtLink to="/" class="text-3xl">
          <CredPalLogo />
        </NuxtLink>

        <ul class="flex items-center gap-4 text-sm font-medium font-poppins">
          <li>
            <NuxtLink to="/">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Business</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">What We Do</NuxtLink>
          </li>
        </ul>

        <NuxtLink to="/" class="ml-auto text-sm font-dm-sans font-bold">FAQ</NuxtLink>
        <button class="flex items-center gap-2">
          <Icon name="circle-flags:ng" class="text-4xl" />
          <Icon name="ph:caret-down-bold" />
        </button>
        <button class="bg-white font-poppins rounded-full px-4 py-3 text-black font-medium">
          Download the Credpal app
        </button>
      </nav>
    </div>
  </header>
</template>