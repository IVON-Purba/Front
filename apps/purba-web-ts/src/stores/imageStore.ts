import { defineStore } from "pinia";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    imageDataUrl: null as string | null
  }),
  actions: {
    setImageDataUrl(url: string) {
      this.imageDataUrl = url;
    }
  }
});
