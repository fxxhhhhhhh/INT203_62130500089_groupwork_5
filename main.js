 const App = {
    data() {
        return {
            list: [{title: 'kiss me', pic: './images/1.jpg', fav: false},
                   {title: 'martini blue', pic: './images/2.jpg', fav: false},
                   {title: 'jasmine', pic: './images/3.jpg', fav: false},
                   {title: 'jam & butterfly', pic: './images/4.jpg', fav: false}
                ],
            searchButton: false,
            list2: [],
            largeImage: false,
            indexList: 0,
            search: "",    
        };
    },
    methods: {
        toggle(index) {
            this.list[index].fav = !this.list[index].fav
        },
       // showsearch() {
         //   this.searchButton = !searchButton;
       // },
        returnIndex(index) {
            this.indexList = index;
        }
    },
    computed: {
        filteredList() {
            this.list2 = this.list.filter((l) => {
                return l.title.toLowerCase().includes(this.search.toLowerCase());
            });
            return this.list2;
        },  
        countFav() {
        return this.list.filter((l) => l.fav).length;
        },
    }

};
const app = Vue.createApp(App)