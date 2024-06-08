<template>
  <div class="w-full bg-[#F1F5FF]">
    <div class="md:max-w-[min(1208px,calc(100%-5rem))] grid grid-cols-2 gap-5 mt-32 w-full mx-auto">
      <section class="flex w-10/12 ml-auto flex-col justify-center gap-6">
        <h3 class="font-dm-sans font-bold text-5xl">Join CredPal today</h3>

        <p class="text-[#333333] text-lg leading-7 w-5/6">Download the CredPal app and join millions of satisfied
          customers
          who are already
          using CredPal to access
          credit, make payments, invest & many more!</p>

        <div class="flex items-center gap-3 w-2/3 mt-5">
          <NuxtLink to="/">
            <img alt="app-store-link" class="w-full aspect-auto" src="@/assets/images/app-store-link.jpg" />
          </NuxtLink>
          <NuxtLink to="/">
            <img alt="playstore-link" class="w-full aspect-auto" src="@/assets/images/play-store-link.jpg" />
          </NuxtLink>
        </div>
      </section>
      <div class="w-full flex justify-center">
        <img src="@/assets/images/join-credpal-mockup.png" alt="join-credpal-mockup" class="w-4/5 aspect-auto">
      </div>
    </div>
  </div>
</template>w