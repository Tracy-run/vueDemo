<template>
    <div>
        <H2> {{message}} </H2>
        <router-view>

        </router-view>
    </div>
</template>

<script>
    export default{
        name: 'Hi',
        data() {
            return {
                message: '这是一个测试Hi'
            }
        }
    }
</script>

<style>

</style>