import axios from 'axios'

const FileManager = {
    // 项目文件post文件夹路径
    path: process.env.BASE_URL + 'post/',
    getAllTopic: function () {
        return [
            "HTML专题",
            "JavaScript专题"
        ]
    },
    getPosts: function (topic) {
        console.log('topic:', topic, 't')
        switch (topic) {
            case '0':
                return ['文本标签', 'HTML基础元素']
            case '1':
                return ['方法与属性', '语句与数据类型']
            default:
                return []
        }
    },
    getPostContent: function (topicName, postName) {
        let url = this.path + topicName + '/' + postName + '.md'
        return new Promise((res, rej) => {
            axios.get(url).then((resp) => {
                console.log(resp.data)
                res(resp)
            }, rej)
        })
    }
}

export default FileManager