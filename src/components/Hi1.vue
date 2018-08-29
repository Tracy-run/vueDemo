<template>
    <div>
        <H2>{{message}}--{{$route.params.username}}</H2>
        <h2>ID: {{$route.params.id}}</h2>
    </div>
</template>

<script>
    export default{
        name: 'Hi1',
        data() {
            return {
                message: '这是一个测试 Hi111'
            }
        }
    }
</script>

<style>

</style>