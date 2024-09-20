<template>
    <el-container style="height: 100%;">
        <el-aside width="200px" style="background-color: #f1f1f1;">
            <div></div>
            <el-menu mode="vertical" background-color="#e8e7e3" text-color="#777777" active-color="#000000"
                :default-active="'0'">
                <el-menu-item v-for="item in items" :key="item.index" :index="item.index.toString()">
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>

        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "BodyCom",
    props: ['items'],
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
.el-menu-item.is-active {
    background-color: #ffffff !important;
}
</style>