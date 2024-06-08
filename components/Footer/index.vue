<template>
  <footer class="bg-[#FCFCFD] w-full py-32">
    <div class="md:max-w-[min(1208px,calc(100%-5rem))] w-full mx-auto">
      <div class="flex justify-between gap-5 w-full pb-20 border-b border-b-[#E6E8EC]">
        <div class="flex flex-col gap-4 w-1/3">
          <NuxtLink to="/" class="text-3xl">
            <CredPalLogo class="text-[#121212]" />
          </NuxtLink>

          <p class="font-poppins text-xs leading-6">CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses
            and
            individuals across developing economies.</p>
        </div>

        <div class="space-y-8 flex-shrink-0">
          <h5 class="font-dm-sans font-medium text-base">Products</h5>

          <ul class="font-poppins text-[#40444F] space-y-2 text-xs">
            <li>
              <NuxtLink to="/">CredPal Personal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">CredPal Business</NuxtLink>

            </li>
            <li>
              <NuxtLink to="/">CredPal Lifestyle</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="space-y-8 flex-shrink-0">
          <h5 class="font-dm-sans font-medium text-base">Legal</h5>

          <ul class="font-poppins text-[#40444F] space-y-2 text-xs">
            <li>
              <NuxtLink to="/">Customer Terms of use</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Merchant Terms of service</NuxtLink>

            </li>
            <li>
              <NuxtLink to="/">Privacy Notice</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="space-y-8 flex-shrink-0">
          <h5 class="font-dm-sans font-medium text-base">Support</h5>

          <ul class="font-poppins text-[#40444F] space-y-2 text-xs">
            <li>
              <NuxtLink to="/">FAQs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Blog</NuxtLink>

            </li>
          </ul>
        </div>

        <div class="space-y-8 flex-shrink-0">
          <h5 class="font-dm-sans font-medium text-base">Get the app</h5>

          <ul class="font-poppins text-[#40444F] space-y-2 text-xs w-28">
            <li>
              <NuxtLink to="/">
                <img alt="app-store-link" class="w-full aspect-auto" src="@/assets/images/app-store-link.jpg" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img alt="playstore-link" class="w-full aspect-auto" src="@/assets/images/play-store-link.jpg" />
              </NuxtLink>

            </li>
          </ul>
        </div>
      </div>

      <div class="text-xs font-poppins text-[#40444F] py-20 border-b border-b-[#E6E8EC]">
        CredPal financial services are offered by BishopGate Microfinance Bank, fully licensed and regulated by the
        Central bank of Nigeria. CredPal offers innovative financial solutions including payment, savings and credit
        services. Our credit solution allows businesses and individuals to buy anything and pay for it in instalments
        across online and offline merchants by providing them with instant access to credit at the point of checkout.
      </div>

      <div class="text-end text-xs pt-20">
        We use cookies for better service. <button class="text-primary font-bold">Accept</button>
      </div>
    </div>
  </footer>
</template>