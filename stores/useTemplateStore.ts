import { defineStore } from 'pinia'
import template from '~/my-project/src/api/template/controllers/template'

export const useTemplateStore = defineStore('template', {
  state: () => ({ 
    templates: [],
  }),
  actions: {
    async fetchTemplates() {
      const res = await fetch('http://localhost:1337/api/templates?populate=image');
      const data = await res.json();
      this.templates = data.data;
    },
  },
});
