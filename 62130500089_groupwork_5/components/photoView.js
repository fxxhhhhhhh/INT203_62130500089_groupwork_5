app.component('photo-view', {
    prop: {
        list2: [],
        largeImage: false,
        indexList: 0,

    },
    template:
    /* html */
    `
    <ul>
    <div v-if="largeImage" class="bg-black h-1/2 w-1/2 ml-auto mr-auto">
      <span @click="largeImage=false" class="text-white mr-0 h-50 w-auto rounded-sm">x</span>
      <img v-bind:src="list2[indexList].pic" class="h-auto w-auto mr-auto ml-auto rounded-sm" />
    </div>
    <li v-for="(l, index) in filteredList">
      <a v-on:click="largeImage = true,returnIndex(index)" href="#">
        <img v-bind:src="l.pic" class="rounded-lg w-1/4 h-1/4" />
    </a>`,
    methods: {
        returnIndex(index) {
            this.$emit('return-index', index)
        }
    },
    computed: {
        filteredList() {
            this.list2 = this.list.filter((l) => {
                return l.title.toLowerCase().includes(this.search.toLowerCase());
            });
            return this.list2;
            }
    }         
})