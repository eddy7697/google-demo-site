<template>
    <div class="detail-panel">
        <el-button class="close-btn" icon="el-icon-close" circle @click="closeDetail"></el-button>
        <div class="inner-box">
            <h1 class="info-title">{{infoTitle}}</h1>
            <div class="info-content" v-html="infoContent"></div>
            <router-link class="info-demo-btn" to="vision-api">Start Demo</router-link>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import info from '@/document/serviceInfo.js'

export default {
    name: 'DetailPanel',
    props: {
        type: String
    },
    data() {
        let serviceInfoObj = () => {
            return info.serviceInfo()
        }
        return {
            serviceInfo: serviceInfoObj(),
            infoTitle: null,
            infoContent: null
        }
    },
    created() {
        let obj = _.find(this.serviceInfo, ['label', this.type])

        this.infoTitle = obj ? obj.title : null
        this.infoContent = obj ? obj.content : null
    },
    methods: {
        closeDetail() {
            this.$emit('closePanel')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.detail-panel {
    background: white;
    text-align: left;
    position: fixed;
    border: rgba(200, 200, 200, 0.6) solid thin;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    padding: 50px;
    box-sizing: border-box;
    box-shadow: -6px 0px 12px -2px rgba(200, 200, 200, 0.6);

    .close-btn {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .inner-box {
        position: absolute;
        top: 50px;
        left: 50px;
        right: 50px;
        bottom: 50px;
        overflow: auto;
        text-align: center;

        .info-title {
            margin-top: 0; 
            text-align: left;      
        }
        .info-content {
            margin-bottom: 50px;
            line-height: 26px;
            text-align: left;   
        }
        .info-demo-btn {
            background-color: #4185f5;
            padding: 15px 30px;
            color: white;
            text-decoration: none;
            transition: all .2s ease;
            box-shadow: 2px 2px 12px -2px rgba(0, 0, 0, 0.3);

            &:hover {
                box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.3);
            }
            &:active {
                box-shadow: 2px 2px 12px -2px rgba(0, 0, 0, 0.3);
            }
        }
    }    
}
@media only screen and (max-width: 768px) {
    .detail-panel {
        width: 100%;
    }
}
</style>
