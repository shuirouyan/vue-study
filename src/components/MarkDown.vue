<template>
    <p v-html="data"></p>
</template>

<script>
// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { marked } from 'marked';

export default {
    name: 'MarkDown',
    props: ['content'],
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        data() {
            console.log('this.content:', this.content, ' marked:', marked)
            return marked.parse(this.content)
        }
    }
}
</script>

<style scoped>
p {
    text-align: left;
}
</style>