<template>
    <el-row style="height: 100%; overflow: auto">
        <el-col :span="24">
            <div class="content-section">
                <img class="service-icon" src="../assets/Cloud AutoML.png">
                <h3 class="service-title">Cloud AutoML Vision</h3>
                <!-- <p class="service-short-desc">Proof of concept, POC Platform</p> -->
                <el-upload
                    class="upload-demo"
                    drag
                    ref="upload"
                    action="http://35.194.171.98/upload/detect/image"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :on-change="handleChange"
                    :before-upload="handleBefore"
                    :show-file-list="false"
                    :auto-upload="true">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">將要辨識的圖片拖曳到此處，或<em>點我選擇圖片</em><br>只能上傳jpg/png/gif文件，大小不超過1.5MB</div>
                </el-upload>
                <el-button class="service-action-btn" style="margin-left: 10px;" size="large" type="primary" @click="backToHome">
                    <i class="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;回到首頁
                </el-button>
                <div class="site-footer">
                    <img src="../assets/mc-new-logo2_1.jpg" alt="">
                    <p>Copyright © 2018 馬來西亞商思想科技有限公司臺灣分公司 <br>Master Concept Tech Inc, Taiwan Branch. All Rights Reserved.</p>
                </div>
            </div>
            <transition
                name="fade"
                enter-active-class="fadeIn"
                leave-active-class="fadeOut">
                <div class="loading-bar" v-if="isLoading">
                    <div class="content">
                        <img src="../assets/google-loading.svg" alt="">
                        <h4>{{statusInfo}}</h4>
                    </div>                    
                </div>
            </transition>
            <el-dialog
                title="辨識結果"
                :visible.sync="resultDialogVisible"
                :width="dialogResponsive"
                center>
                <el-row>
                    <el-col :span="responsive">
                        <div class="result-section">
                            <img :src="imageName" width="80%" alt="">
                        </div>
                    </el-col>
                    <el-col :span="responsive">
                        <el-table
                            :data="payload"
                            style="width: 100%">
                            <el-table-column
                                prop="displayName"
                                label="標籤">
                            </el-table-column>
                            <el-table-column
                                prop="classification.score"
                                label="信心指數">
                                <template slot-scope="scope">
                                    {{(scope.row.classification.score * 100).toFixed(2)}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="resultDialogVisible = false">關閉視窗</el-button>
                </span>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
// import _ from 'lodash'
import axios from 'axios'
import base64 from 'hi-base64'

export default {
    name: 'VisionApi',
    data() {
        return {
            fileList2: [],
            imgPreview: null,
            payload: [],
            isLoading: false,
            statusInfo: null,
            imageName: null,
            windowWidth: window.innerWidth,
            resultDialogVisible: false
        }
    },
    created() {
        let self = this

        window.addEventListener("resize", () => {
            self.windowWidth = window.innerWidth
        })
    },
    computed: {
        dialogResponsive() {
            return this.windowWidth > 620 ? '600px' : '90%'
        },
        responsive() {
            return this.windowWidth > 500 ? 12 : 24
        }
    },
    methods: {
        backToHome() {
            this.$router.push('/')
        },
        handleSuccess(response) {
            let self = this
            let nameBase64 = base64.encode(response.file.name)

            this.imageName = null
            this.statusInfo = '上傳完成，辨識中'
            
            axios.get(`http://35.194.171.98/prediction/${nameBase64}`)
                .then(res => {
                    let payload = res.data.payload

                    if (payload) {
                        self.isLoading = false
                        self.statusInfo = null
                        self.payload = payload

                        self.imageName = `http://35.194.171.98/uploads/${response.file.name.replace(/[/\\?%*: |"<>]/g, '_')}`
                        self.resultDialogVisible = true
                    } else {
                        self.handleSuccess(response)
                    }
                })
        },
        handleError() {
            alert('oops something went wrong')
        },
        handleBefore() {
            this.statusInfo = '圖片上傳中'
            this.isLoading = true
        },
        handleChange() {
            let self = this
            var fileInput    = document.querySelector('input[type=file]').files[0];
            var reader  = new FileReader();

            reader.addEventListener("load", function () {
                self.imgPreview = reader.result
            }, false);

            if (fileInput) {
                reader.readAsDataURL(fileInput);
            }
        }
    }
}
</script>

<style lang="scss">
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
.el-upload-dragger {
    height: 195px;

    .el-upload__text {
        color: #dddddd !important;
    }
}
.el-button--primary {
    color: #fff;
    background-color: #4284F3 !important;
    border-color: #4284F3 !important;
}
.loading-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);

    .content {
        position: absolute;
        top: 45%;
        left: 50%;
        width: 200px;
        text-align: center;
        transform: translate(-50%, -50%);

        img {
            width: 50%;
        }
        h4 {
            font-weight: 400;
            margin: 0;
        }
    }
}
.site-footer {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // right: 0;
    text-align: center;
    margin-top: 80px;
    // height: 90px;        

    img {
        height: 60px;
    }
    p {
        font-size: 8px;
        margin: 0;
    }
}
.result-section {
    position: relative;
    text-align: center;
    width: 100%;
    height: 400px;
    overflow: auto;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 100%;
        max-width: 100%;
        width: auto;
        transform: translate(-50%, -50%);
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
