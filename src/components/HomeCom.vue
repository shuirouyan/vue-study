<template>
    <el-container id="container">
        <el-header style="width: 100%;;" height="120px">
            <HeaderCom :items="navItem" v-on:selected="changeSelected"></HeaderCom>
        </el-header>
        <el-main>
            <BodyCom :items="bodyItem" :topic="navItem[currentTopicIndex].title"></BodyCom>
        </el-main>
        <el-footer>
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>

<script>

import BodyCom from './BodyCom.vue'
import HeaderCom from './HeaderCom.vue'
import FM from '../tools/FileManger.js'
export default {
    components: { HeaderCom, BodyCom },
    name: "HomeCom",
    data() {
        return {
            navItem: FM.getAllTopic().map((item, ind) => {
                console.log('navitem:', item, ind)
                return {
                    index: ind,
                    title: item
                }
            }),
            desc: '版权所有，仅供学习使用',
            currentTopicIndex: 0,
        }
    },
    methods: {
        changeSelected(index) {
            console.log('home index:', index)
            this.currentTopicIndex = index
        }
    },
    computed: {
        bodyItem: function () {
            let curIndex = this.currentTopicIndex + ''
            //console.log('currentTopicIndex:', this.currentTopicIndex, 'typeof:', typeof(curIndex))
            console.log('currentTopicIndex:', this.currentTopicIndex, 'typeof:', typeof (curIndex))
            const param = FM.getPosts(curIndex)
            console.log('param:', param)
            return param.map((item, ind) => {
                console.log('ind:', ind, ' item:', item)
                return {
                    index: ind,
                    title: item
                }
            })
        }
    },
    mounted: function () {
        console.log('process.env.VUE_APP_API_URL:', process.env.VUE_APP_API_URL)
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