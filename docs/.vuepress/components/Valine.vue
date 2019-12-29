<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'pJHpCtcKOYn3MEy2D5UeVjgq-gzGzoHsz',// your appId
      appKey: 'l2LnH5lr58M10Ac1R2lRXXix', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  },
}
</script>
