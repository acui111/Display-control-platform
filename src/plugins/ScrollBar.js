export default function (Vue) {
  const scrollbar = new Vue({
    data(){
      return{
        
      }
    }
  })
  
  Vue.directive('scroll-left', {
    
    inserted(el){
    },
    update(el,binding){
      el.scrollLeft = binding.value;
    }
  })
  
  Vue.mixin({
    created(){
      this.$scrollbar = scrollbar;
    }
  })
}

