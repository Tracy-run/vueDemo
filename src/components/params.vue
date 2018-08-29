<template>
    <div>
        <H2> {{message}} </H2>
        <p>newsId:{{ $route.params.newsId }} </p>
        <p>newsTitle:{{ $route.params.newsTitle }} </p>
    </div>
</template>

<script>
    export default{
        name: 'params',
        data() {
            return {
                message: '参数传递'
            }
        }
    }
</script>

<style>

</style>