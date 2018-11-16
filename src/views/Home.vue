<template>
    <div class="home" :class="{ 'show-panel': isDetailShow }">
        <div class="outer-box">
            <transition
                name="fadeIn"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOutUp"
                >
                <div class="google-logo" v-if="!isFuncShow" @click="showBtnGroup">
                    <img alt="Google logo" src="../assets/google-cloud.png">
                </div>
            </transition>               
            <transition
                name="fadeIn"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOutUp">
                <div class="btn-group" :class="{ active: isActive, rollback: isRollback }" v-if="isFuncShow">
                    <img class="btn ml" src="../assets/Cloud AutoML.png" @click="showAuroMlFunc">
                    <img class="btn vi" src="../assets/Cloud Video Intelligence API.png" @click="showedtype = 'vi'">
                    <img class="btn ta" src="../assets/Cloud Translation API.png" @click="showedtype = 'ta'">
                    <img class="btn sa" src="../assets/Cloud Speech API.png" @click="showedtype = 'sa'">
                    <img class="btn dee" src="../assets/Dialogflow Enterprise Edition.png" @click="showedtype = 'dee'">
                    <img class="btn va" src="../assets/Cloud Vision API.png" @click="showedtype = 'va'">
                    <img class="btn nla" src="../assets/Cloud Natural Language API.png" @click="showedtype = 'nla'">

                    <!-- auto ml integration -->
                    <img class="btn ml-nla" src="../assets/Cloud Natural Language API.png" @click="showedtype = 'ml-nla'">
                    <img class="btn ml-ta" src="../assets/Cloud Translation API.png" @click="showedtype = 'ml-ta'">
                    <img class="btn ml-va" src="../assets/Cloud Vision API.png" @click="showedtype = 'ml-va'">
                </div>
            </transition>
        </div>
        <transition
            name="fadeIn"
            enter-active-class="fadeInRight"
            leave-active-class="fadeOutRight">
            <DetailPanel v-if="isDetailShow" :type="showedtype"/>
        </transition>
       
       <div class="site-footer">
           <img src="../assets/mc-new-logo2_1.jpg" alt="">
       </div>
    </div>
</template>

<script>
// @ is an alias to /src
import DetailPanel from '@/components/DetailPanel.vue'

export default {
    name: 'home',
    components: {
        DetailPanel
    },
    data() {
        return {
            isActive: false,
            isFuncShow: false,
            isRollback: false,
            isDetailShow: false,
            showedtype: null
        }
    },
    watch: {
        showedtype(showedtype, oldVal) {
            if (showedtype) {
                if (showedtype !== oldVal) {
                    this.isDetailShow = false

                    setTimeout(() => {
                        // this.showDetailInformation(showedtype)
                        this.isDetailShow = true
                    }, 500);
                } else {
                    // this.showDetailInformation(showedtype)
                    this.isDetailShow = true
                }
            }
        }
    },
    methods: {
        showBtnGroup() {
            this.isFuncShow = true

            setTimeout(() => {
                this.isActive = true
            }, 1000);
        },
        showAuroMlFunc() {
            this.isRollback = !this.isRollback
        },
        // showDetailInformation(type) {
        //     console.log(info.serviceInfo())
        // }
    }
}
</script>

<style lang="scss">
.home {
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 1.1s ease;

    &.show-panel {
        width: 50%;
    }
    .site-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        height: 70px;        
        
        img {
            height: 60px;
        }
    }
}
.google-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    margin-left: -100px;
    margin-top: -130px;
    cursor: pointer;

    img {
        width: 100%;
    }

    .site-footer {
        position: absolute;
        bottom: 10px;
    }
}
.outer-box {
    position: absolute;
    top: 50%;
    left: 50%;    
    transform: translate(-50%, -60%);
    
    .btn-group {
        position: relative;
        width: 325px;
        height: 325px;

        .btn {
            position: absolute;
            width: 30%;
            transform: translate(-50%, -50%);
            transition: all .2s ease;
            top: 50%;
            left: 50%;
            cursor: pointer;

            &.ml {
                z-index: 1;            
            }
            &:hover {
                transform: translate(-50%, -50%) scale(1.075);
            }
        }

        &.active {
            .btn {
                &.vi {
                    animation-name: vi-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    
                }
                &.ta {
                    animation-name: ta-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: .2s;
                }
                &.sa {
                    animation-name: sa-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: .4s;
                }
                &.dee {
                    animation-name: dee-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: .6s;
                }
                &.va {
                    animation-name: va-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: .8s;
                }
                &.nla {
                    animation-name: nla-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: 1s;
                }
            }

            
        }
        &.rollback {
            .btn {
                &.vi {
                    top: 21%;
                    left: 50%;
                    animation-name: vi-animate-rollback;
                }
                &.ta {
                    top: 35.5%;
                    left: 75%;
                    animation-name: ta-animate-rollback;
                }
                &.sa {
                    top: 64.5%;
                    left: 75%;
                    animation-name: sa-animate-rollback;
                }
                &.dee {
                    top: 79%;
                    left: 50%;
                    animation-name: dee-animate-rollback;
                }
                &.va {
                    top: 64.5%;
                    left: 25%;
                    animation-name: va-animate-rollback;
                }
                &.nla {
                    top: 35.5%;
                    left: 25%;
                    animation-name: nla-animate-rollback;
                }

                &.ml-nla {
                    animation-name: vi-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: 1s;
                }
                &.ml-ta {
                    animation-name: sa-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: 1.2s;
                }
                &.ml-va {
                    animation-name: va-animate;
                    animation-fill-mode: forwards;
                    animation-duration: .5s;
                    animation-delay: 1.4s;
                }
            }
        }
    }
}

// nla
@keyframes nla-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 35.5%;
        left: 25%;
    }
}
@keyframes nla-animate-rollback {    
    from {
        opacity: 1;
        top: 35.5%;
        left: 25%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}

// dee
@keyframes dee-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 79%;
        left: 50%;
    }
}
@keyframes dee-animate-rollback {
    from {
        opacity: 1;
        top: 79%;
        left: 50%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}

// va
@keyframes va-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 64.5%;
        left: 25%;
    }
}
@keyframes va-animate-rollback {
    from {
        opacity: 1;
        top: 64.5%;
        left: 25%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}

// vi
@keyframes vi-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 21%;
        left: 50%;
    }
}
@keyframes vi-animate-rollback {    
    from {
        opacity: 1;
        top: 21%;
        left: 50%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}

// sa
@keyframes sa-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 64.5%;
        left: 75%;
    }
}
@keyframes sa-animate-rollback {    
    from {
        opacity: 1;
        top: 64.5%;
        left: 75%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}

// ta
@keyframes ta-animate {
    from {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
    to {
        opacity: 1;
        top: 35.5%;
        left: 75%;
    }
}
@keyframes ta-animate-rollback {
    from {
        opacity: 1;
        top: 35.5%;
        left: 75%;
    }
    to {
        opacity: 0;
        top: 50%;
        left: 50%;
    }
}
</style>
