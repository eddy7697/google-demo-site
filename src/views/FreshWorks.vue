<template>
    <el-row style="height: 100%; overflow: auto">
        <el-col :span="24">
            <div class="content-section">
                <div class="frame-container">
                    <el-col :span="12">
                        <div class="frame-box">
                            <iframe src="https://mtf2004.wixsite.com/chocolateshop" frameborder="0"></iframe>
                            <a class="link-mask" href="https://mtf2004.wixsite.com/chocolateshop" target="_blank"></a>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="frame-box">
                            <iframe src="https://mtf2004.wixsite.com/strawberrycake" frameborder="0"></iframe>
                            <a class="link-mask" href="https://mtf2004.wixsite.com/strawberrycake" target="_blank"></a>
                        </div>
                    </el-col>
                </div>
                <el-button class="service-action-btn" style="margin-left: 10px;" size="large" type="primary" @click="backToHome">
                    <i class="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;回到首頁
                </el-button>
                <div class="site-footer">
                    <img src="../assets/mc-new-logo2_1.jpg" alt="">
                    <p>Copyright © 2018 馬來西亞商思想科技有限公司臺灣分公司 <br>Master Concept Tech Inc, Taiwan Branch. All Rights Reserved.</p>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
// import _ from 'lodash'
// import axios from 'axios'

export default {
    name: 'FreshWorks',
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
        backToHome() {
            this.$router.push('/')
        },
    }
}
</script>

<style lang="scss" scope>
.content-section {
    position: absolute;
    top: 45%;
    left: 50%;
    padding: 20px 10px;
    transform: translate(-50%, -50%);

    .service-icon {
        width: 70px;
    }
    // .service-title {

    // }
    .service-short-desc {
        font-size: 20px;
    }
    .service-action-btn {
        margin-top: 30px;
    }
}
.frame-container {
    width: 971px;

    .frame-box {
        padding-bottom: 65%;
        position: relative;

        iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(.25);
            width: 1920px;
            height: 1080px;
        }
        a.link-mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}
@media only screen and (max-width: 768px) {
    .content-section {
        position: relative;
        top: inherit;
        left: inherit;
        transform: inherit;
    }
}
</style>
