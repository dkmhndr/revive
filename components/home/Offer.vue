<script setup lang="ts">
const step = useState('step', () => 1);

const nextStep = () => {
  step.value = step.value + 1;
}

const prevStep = () => {
  step.value = step.value - 1;
}
</script>

<template>
  <div v-if="step ===1 ">
    <div class="w-full h-[392px] flex-col justify-start items-center gap-2 inline-flex">
      <div class="h-12 px-4 py-3 bg-white rounded-tl-xl rounded-tr-xl flex-col justify-start items-start flex">
        <div class="w-full self-stretch justify-between items-start inline-flex">
          <div class="text-zinc-700 text-base font-bold font-['Lato'] leading-normal tracking-wide">Choose Offering</div>
        </div>
      </div>
      <div class="px-4 py-2 bg-white flex-col justify-start items-start gap-2.5 flex">
        <div class="w-[343px] pl-3 pr-[271px] py-1.5 bg-neutral-100 rounded-[40px] justify-start items-center inline-flex">
          <div class="self-stretch justify-start items-center gap-1 inline-flex">
            <div class="w-5 h-5 relative"></div>
            <div class="text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Search</div>
          </div>
        </div>
      </div>
      <div class="w-[343px] px-2 py-1 bg-neutral-100 rounded-lg justify-start items-center gap-2 inline-flex">
        <div class="w-14 h-14 p-[18px] bg-green-900 rounded justify-center items-center flex">
          <div class="w-5 h-5 relative flex-col justify-start items-start flex"></div>
        </div>
        <div class="text-zinc-700 text-sm font-bold font-['Lato'] leading-tight tracking-wide">Create New Product</div>
      </div>
      <div @click="nextStep" class="w-[343px] px-2 py-1 bg-neutral-100 rounded-lg justify-start items-start gap-2 inline-flex">
        <div class="w-14 h-14 bg-white rounded justify-center items-center flex">
          <img class="w-14 h-14" src="https://picsum.photos/150/150" />
        </div>
        <div class="flex-col justify-start items-start gap-1 inline-flex">
          <div class="text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Bantul, DIY</div>
          <div class="w-[263px] text-zinc-700 text-xs font-normal font-['Lato'] leading-none">KIPAS ANGIN BESI TORNADO 3in1 18inch TD</div>
          <div class="text-zinc-700 text-xs font-bold font-['Lato'] leading-none tracking-wide">Free</div>
        </div>
      </div>
      <div @click="nextStep" class="w-[343px] px-2 py-1 bg-neutral-100 rounded-lg border justify-start items-start gap-2 inline-flex">
        <div class="w-14 h-14 bg-white rounded justify-center items-center flex">
          <img class="w-14 h-14" src="https://picsum.photos/150/150" />
        </div>
        <div class="flex-col justify-start items-start gap-1 inline-flex">
          <div class="text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Bantul, DIY</div>
          <div class="w-[263px] text-zinc-700 text-xs font-normal font-['Lato'] leading-none">KIPAS ANGIN BESI TORNADO 3in1 18inch TD</div>
          <div class="text-zinc-700 text-xs font-bold font-['Lato'] leading-none tracking-wide">Free</div>
        </div>
      </div>
      <div @click="nextStep" class="w-[343px] px-2 py-1 bg-neutral-100 rounded-lg justify-start items-start gap-2 inline-flex">
        <div class="w-14 h-14 bg-white rounded justify-center items-center flex">
          <img class="w-14 h-14" src="https://picsum.photos/150/150" />
        </div>
        <div class="flex-col justify-start items-start gap-1 inline-flex">
          <div class="text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Bantul, DIY</div>
          <div class="w-[263px] text-zinc-700 text-xs font-normal font-['Lato'] leading-none">KIPAS ANGIN BESI TORNADO 3in1 18inch TD</div>
          <div class="text-zinc-700 text-xs font-bold font-['Lato'] leading-none tracking-wide">Free</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="step ===2" >
    <div class="w-[375px] h-[356px] bg-white rounded-tl-[15px] rounded-tr-[15px] flex-col justify-center items-start gap-5 inline-flex">
      <div class="self-stretch flex-col justify-start items-center gap-2 inline-flex">
        <div class="h-12 px-4 py-3 bg-white rounded-tl-xl rounded-tr-xl flex-col justify-start items-start gap-3 flex">
          <div class="self-stretch justify-start items-start inline-flex">
            <div class="justify-start items-start gap-3 flex">
              <a href="#" @click="prevStep">
                <client-only>
                  <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
                </client-only>
              </a>
              <div class="text-zinc-700 text-base font-bold font-['Lato'] leading-normal tracking-wide">Offering Product</div>
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
        </div>
        <div class="flex-col justify-start items-center gap-3 flex">
          <div class="flex-col justify-start items-start gap-1 flex">
            <div class="text-zinc-800 text-sm font-bold font-['Lato'] leading-tight tracking-wide">Produk yang dipilih</div>
            <div class="w-[343px] px-2 py-1 bg-neutral-100 rounded-lg border justify-start items-start gap-2 inline-flex">
              <div class="w-14 h-14 bg-white rounded justify-center items-center flex">
                <img class="w-14 h-14" src="https://picsum.photos/150/150" />
              </div>
              <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Bantul, DIY</div>
                <div class="w-[263px] text-zinc-700 text-xs font-normal font-['Lato'] leading-none">KIPAS ANGIN BESI TORNADO 3in1 18inch TD</div>
                <div class="text-zinc-700 text-xs font-bold font-['Lato'] leading-none tracking-wide">Free</div>
              </div>
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-1 flex">
            <div class="text-zinc-800 text-sm font-bold font-['Lato'] leading-tight tracking-wide">Komentar (Opsional)</div>
            <div class="w-[343px] h-[100px] px-4 py-1 bg-neutral-100 rounded-lg justify-start items-start gap-4 inline-flex">
              <div class="flex-col justify-start items-start gap-1 inline-flex">
                <div class="w-[311px] text-neutral-400 text-xs font-normal font-['Lato'] leading-none">Contoh: barang ini tidak terpakai dan kondisinya masih bagus, namun tidak ada tutupnya.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch h-14 px-4 py-2 bg-white shadow justify-center items-center inline-flex">
        <div class="self-stretch justify-center items-center gap-4 inline-flex">
          <div class="h-10 justify-center items-center gap-4 flex">
            <div class="grow shrink basis-0 px-6 py-2 w-full bg-green-900 rounded flex-col justify-start items-center gap-2 inline-flex">
              <div @click="nextStep" class="justify-start items-start gap-2 inline-flex">
                <div class="text-center text-white text-base font-bold font-['Lato'] leading-normal tracking-wide">Offering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="step === 3">
    <div class="w-full h-fit px-4 py-6 bg-white rounded-2xl flex-col justify-start items-center gap-5 inline-flex">
      <client-only>
        <font-awesome-icon :icon="['fas', 'check-circle']" class="text-6xl w-20 h-20 text-green-500"></font-awesome-icon>
      </client-only>
      <div class="self-stretch text-center text-neutral-700 text-xl font-bold font-['Lato'] leading-7 tracking-wide">Offering success</div>
    </div>
  </div>
</template>

<style scoped>

</style>