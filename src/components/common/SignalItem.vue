<template>
  <!-- 信号源中的每一项 -->
  <div id="signal-item">
    <img 
      :src="src" class="draggable" ref="signal-img"
    >
    <span>{{title}}</span>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    name:'SignalItem',
    data(){
      return{}
    },
    props: ['id','src','title'],
    mounted(){
      interact(this.$refs["signal-img"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {},

        onmove: ev => {
          const proxy = ev.target;
          const x = (parseFloat(proxy.getAttribute('data-x')) || 0) + ev.dx;
          const y = (parseFloat(proxy.getAttribute('data-y')) || 0) + ev.dy;

          proxy.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

          proxy.setAttribute('data-x', x);
          proxy.setAttribute('data-y', y);
        },

        onend: ev => {
          ev.target.remove()
        }
      })
      .on("move", (ev) => {
        if (ev.interaction.pointerIsDown && !ev.interaction.interacting()) {
            const proxy = ev.target.cloneNode(true);
            proxy.style.position = "absolute";
            proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
            proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
            proxy.style.width = ev.target.offsetWidth + "px";
            proxy.style.height = ev.target.offsetHeight + "px";
            proxy.setAttribute("id",this.id);
            proxy.setAttribute("src",this.src);
            document.body.appendChild(proxy);
            ev.interaction.start({name: 'drag'},
              ev.interactable,
              proxy);
        }
      });
    }
  }
</script>
  
<style scoped>
  #signal-item{
    width: 161px;
    height: 125px;
    text-align: center;
    margin:14px 7px 0 7px;
    display: inline;
  }
  #signal-item img{
    width: 144px;
    height: 81px;
    margin:8px;
  }
  #signal-item span{
    font-size:9px;
    font-family:SimSun;
    font-weight:bold;
    color:rgba(221,239,255,1);
  }
</style>