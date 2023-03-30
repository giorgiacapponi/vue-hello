const { createApp } = Vue;
createApp({
    data() {
        return {
            title:'inserisci la parola che vuoi colorare',
           message: '' ,
            color:"",
           choice:'',
           natura:"https://4.bp.blogspot.com/-nb0TKwdDJRg/UynFKm7w2oI/AAAAAAAAJW8/VaYS9UjMOGc/s1600/www.imaginifrumoase.com+(528).jpg",
           sport:"https://www.unconsigliosu.it/wp-content/uploads/2019/07/sport.jpg",
           pizza:"https://th.bing.com/th/id/OIP.Wtx3OP4bqSGS4zxmQRHg0gHaE8?pid=ImgDet&rs=1",
        imgShowed:null,
        }
    },
    methods:{
        showImg(){
            if(this.choice=='natura'){
               this.imgShowed=this.natura
    
        }else if (this.choice=='sport'){
            this.imgShowed=this.sport
        }else{
            this.imgShowed=this.pizza
        }
    }
      
    }


}).mount('#app')