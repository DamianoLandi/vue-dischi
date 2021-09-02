new Vue({
    el: '#root',
    data: {
        songList: null,
    },
    methods: {
    },
    created(){
            axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((res) => {
              const response = res.data.response;
              this.songList = response;
          });
    }
  });