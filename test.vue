<template>
    <div class="ui container">
        <div class="ui hidden divider"></div>
        <button  v-bind:class="[buttonClass,colorClass,{loading: isLoading}]">按钮</button>
    </div>

</template>

<script>
    var dataSource = {
        buttonClass: 'ui button',
        colorClass: 'violet',
        isLoading: false
    }

   new Vue({
       el: '#example-2'
   })
    Vue.component('child',{
        props:['message'],
        template:'<span>{{message}}}</span>'
    })

</script>

<style scoped>

</style>