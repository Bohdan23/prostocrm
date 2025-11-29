<template>
    <SliderRoot
      :class="
        cn(
          'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full',
          props.class
        )
      "
      v-bind="forwarded"
    >
      <SliderTrack
        class="relative h-2 w-full data-[orientation=vertical]:w-2 grow overflow-hidden rounded-full bg-white/[.1]"
      >
        <SliderRange
          class="absolute h-full data-[orientation=vertical]:w-full bg-white/[.1]"
        />
      </SliderTrack>
      <SliderThumb
        v-for="(_, key) in modelValue"
        :key="key"
        class="block h-6 w-6 rounded-full bg-white drop-shadow transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderRoot>
</template>