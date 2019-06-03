<template>
    <div class="hello">
        <h1>{{msg}}</h1>

        <h2>{{$route.params.username}}</h2>
        <router-view class="aaa"></router-view>
    </div>
</template>


<script>
export default {
    name:'hi666',
    data(){
        return{
            msg:"Hi,你妹的!"
        }
    }
}
</script>

<style scoped>

</style>

