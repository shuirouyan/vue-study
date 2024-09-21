<template>
    <el-container style="height: 100%;">
        <el-aside width="200px" style="background-color: #f1f1f1;">
            <div></div>
            <el-menu mode="vertical" background-color="#e8e7e3" text-color="#777777" active-color="#000000"
                :default-active="'0'" @select="selectItem">
                <el-menu-item v-for="item in items" :key="item.index" :index="item.index.toString()">
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <MarkDown :content="content"></MarkDown>
        </el-main>
    </el-container>
</template>

<script>
import FileManager from '@/tools/FileManger'
import MarkDown from './MarkDown.vue'
export default {
    name: "BodyCom",
    props: ['items', 'topic'],
    components: {
        MarkDown,
    },
    data() {
        return {
            currentIndex: 0,
            content: '### HTML'
        }
    },
    methods: {
        selectItem(index) {
            this.currentIndex = index
        }
    },
    computed: {

    },
    mounted() {
        FileManager.getPostContent(this.topic, this.items[this.currentIndex].title).then(resp => {
            this.content = resp.data
        })
        console.log('process.env:', process.env)
    },
    watch: {
        currentIndex: function (newVal) {
            FileManager.getPostContent(this.topic, this.items[newVal].title).then(resp => {
                this.content = resp.data
            })
        },
        topic: function (newVal) {
            FileManager.getPostContent(newVal, this.items[this.currentIndex].title).then(resp => {
                this.content = resp.data
            })
        }
    }
}
</script>

<style scoped>
.el-menu-item.is-active {
    background-color: #ffffff !important;
}
</style>