app.component('photo-search', {
    props: {
        searchButton: false,
        search: "",
        list: {
          type: Array,
        }
    },
    template:
    /* html */
    `<a @click="searchButton=true" href="#">
    <span class="material-icons my-1.5 bg-black w-12 text-white text-center h-6 p-0.5 hover:bg-gray-600"> search
    </span>
  </a>
  <div v-if="searchButton">
    <input v-model="search"
      class="pr-32 h-8 my-2 placeholder-opacity-75 border border-black border-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      type="text" placeholder="Please enter text">
    <button @click="searchButton=false"
      class="ml-2 bg-black text-white w-16 h-8 hover:bg-gray-600 focus:outline-none"> Cancel </button>
  </div>`,
  computed: {
    filteredList() {
      this.list2 = this.list.filter((l) => {
          return l.title.toLowerCase().includes(this.search.toLowerCase());
      });
      return this.list2;
  }
  }
})
