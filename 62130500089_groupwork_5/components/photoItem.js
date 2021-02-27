app.component('photo-item', {
    props:{
      list: {
        type: Array,
      },
},
    template:
    /* html */
    `<h2>{{countFav}} liked songs </h2>
    <div v-for="(list, index) in list">
    <img v-bind:src="list.pic" class="rounded-lg w-1/4 h-1/4" />
    <p class="uppercase text-lg font-semibold">{{list.title}}</p>
    <div class="space-y-3">
      <button v-on:click="toggle(index)">
        <span v-show="list.fav" class="material-icons fill-current text-red-500">favorite</span>
        <span v-if="list.fav == false" class="material-icons">favorite</span>
      </button>

      </div>
      </div>`,
      methods: {
        toggle(index) {
            this.$emit('toggle-fav', index)
        },
        },
      computed: {
        countFav() {
          return this.list.filter((l) => l.fav).length;
          },
      }  
      }
)