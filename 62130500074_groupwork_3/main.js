// const app = {
//     data() {
//         return {
//             task: 'Learing INT203 Client-side Web Programming 2',
//             done: true,
//             progress: 10
//         }
//     }

// }
const app = {
    data(){
        return {
            imgs: [
                { love: "Gura So cute", src: "./images/31.jpg", likes: false },
                { love: "Gura Sleepy ", src: "./images/32.jpg", likes: false },
                 { love: "Gura lovely", src: "./images/33.jpg", likes: false },
            ]
        }
    },
    methods: {
        GuraShow(index){
            this.imgs[index].likes = !this.imgs[index].likes;
        }
    },
    computed: {
        
        getImgLength(){
            return this.imgs.length;
        },
        countLikes() {
            return this.imgs.filter(t => t.likes).length
        },
    }

}
Vue.createApp(app).mount('#app')