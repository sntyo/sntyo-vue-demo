
Vue.component('card',{
    template:'\
    <div class="ui card">\
<div class="image">\
<slot name="image">image</slot>\
</div>\
<div class="content">\
<div class="header">\
<slot name="header">header</slot>\
</div>\
<div class="meta">\
<slot name="meta">meta</slot>\
</div>\
</div>\
</div>\
'
})

var dataSource = {
    total: 0
}

var app = new Vue({
    el:'#app',
    data:dataSource,
    methods: {
        incrementTotal(){
            this.total += 1
        }
    }
})






