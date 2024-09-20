<template>
    <el-container id="container">
        <el-header style="width: 100%;;" height="120px">
            <HeaderCom :items="navItem"></HeaderCom>
        </el-header>
        <el-main>

            <BodyCom :items="bodyItem"></BodyCom>
        </el-main>
        <el-footer>
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>

<script>
import BodyCom from './BodyCom.vue'
import HeaderCom from './HeaderCom.vue'
export default {
    components: { HeaderCom, BodyCom },
    name: "HomeCom",
    data() {
        return {
            navItem: [{
                index: 0,
                title: 'HTML专题'
            }, {
                index: 1,
                title: 'CSS专题'
            }],
            bodyItem: [{
                index: 0,
                title: 'HTML简介'
            }, {
                index: 1,
                title: 'HTML编辑器'
            }],
            desc: '版权所有，仅供学习使用'
        }
    },
    methods: {

    }
}
</script>

<style scoped>
#container {
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 30px;
    height: 800px;
}

#footer {
    text-align: center;
    background-color: bisque;
    height: 40px;
    line-height: 40px;
    color: #717171;
}
</style>