<script setup></script>
<template>
  <div class="h-screen pt-40">
    <div class="container mx-auto px-10 py-10 bg-white rounded-md">
      <div class="flex justify-between">
        <!-- input -->
        <div class="w-[65%] outline outline-dashed outline-zinc-400 hover:outline-zinc-700 focuse:outline-zinc-700 outline-5 hover:scale-[101%] focus:scale-[101%] rounded-md transition-all flex flex-col items-center justify-around" id="inpBoxFile">
          <img src="/images/arrow.png" alt="arrow">
          <input type="file" name="Upload" id="UploudFile" class="font-bold text-center text-2xl hover:text-zinc-700 text-zinc-400 transition-all mx-auto">
        </div>
        <!-- editor -->
        <div class="w-[35%] flex flex-col items-center gap-10">
          <h3 class="text-zinc-950 font-bold text-2xl mt-15">Create Template</h3>
          <input type="text" placeholder="Summary..." class="inputs font-regular italic text-zinc-800 p-4"/>
          <!-- items -->
          <div class="w-[300px]">
            <div class="flex flex-col gap-5 mr-auto">
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
              <div class="flex items-center justify-start gap-2">
                <input type="checkbox" class="w-5 h-5 hover:scale-[105%]"><span class="">Template 1</span>
              </div>
            </div>
          </div>
          <div class="w-[300px]">
            <div class="mr-auto">
              <input type="time" name="time" id="dateForCreate" class="outline outline-solid outline-zinc-600 rounded-sm px-5 py-2 focus:outline-blue-500 focus:px-6 focus:py-3 hover:px-6 hover:py-3 transition-all">
            </div>
          </div>
          <div class="w-[300px] mt-4">
            <div class="mr-auto flex items-stretch px-3">
              <button class="btn-primary capitalize w-100 py-5 hover:scale-[101%]">create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#UploudFile {
  margin: 0 auto; /* Центрирование по оси X */
}
</style>