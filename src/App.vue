<template>
    <div id="app">
        <div id="nav">
        </div>
        <transition
            name="fadeIn"
            enter-active-class="fadeInRight"
            leave-active-class="fadeOutLeft">
            <router-view/>
        </transition> 
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        window.fcWidget.init({
            token: "11927765-5a53-4aeb-8e4f-0ac4cc74394c",
            host: "https://wchat.freshchat.com",
            open: false,
            locale: "zh_HANT",
            config: {
                disableEvents: true,
                cssNames: {
                    widget: 'fc_frame',
                    open: 'fc_open',
                    expanded: 'fc_expanded'
                },
                showFAQOnOpen: true,
                hideFAQ: false,
                agent: {
                    hideName: false,
                    hidePic: false,
                    hideBio: false,
                },
                headerProperty: {
                    //If you have multiple sites you can use the appName and appLogo to overwrite the values.
                    appName: '即時客服',
                    appLogo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/2473-2c38490d8e4c91660d86ff54ba5391ea-medium_jpg.jpg?buster=1518574527',
                    backgroundColor: '#D9D5CA',
                    foregroundColor: '#333333',
                    backgroundImage: 'https://wchat.freshchat.com/assets/images/texture_background_1-bdc7191884a15871ed640bcb0635e7e7.png'
                },
                content: {
                    placeholders: {
                        search_field: 'Search',
                        reply_field: 'Reply',
                        csat_reply: 'Add your comments here'
                    },
                    actions: {
                        csat_yes: '是',
                        csat_no: '否',
                        push_notify_yes: '是',
                        push_notify_no: '否',
                        tab_faq: '常見問題',
                        tab_chat: '客服對談',
                        csat_submit: '提交'
                    },
                    headers: {
                        chat: '您好，需要協助嗎？',
                        chat_help: '有任何問題或需服務，請於此提出，我們將盡快為您服務',
                        faq: '常見問題',
                        faq_help: '瀏覽常見問題及解決方案',
                        faq_not_available: '目前未提供方案說明',
                        faq_search_not_available: '搜尋無結果 {{query}}',
                        faq_useful: '請問此方案有幫助嗎?',
                        faq_thankyou: '感謝您寶貴意見',
                        faq_message_us: '發送訊息',
                        push_notification: '是否開啟通知以利訊息不漏接?',
                        csat_question: '我們是否解決了您的問題?',
                        csat_yes_question: '我們的服務您的評分是?',
                        csat_no_question: '請告訴我們如何做得更好?',
                        csat_thankyou: '感謝您的回覆',
                        csat_rate_here: '請惠賜您的評分',
                        channel_response: {
                            offline: '目前所有客服人員離線中，請先留下您的問題',
                            online: {
                                minutes: {
                                    one: "目前客服回應時間為 {!time!} 分鐘 ",
                                    more: "平均客服回應時間為 {!time!} 分鐘"
                                },
                                hours: {
                                    one: "目前客服回應時間為1小時",
                                    more: "平均客服回應時間為 {!time!} 小時",
                                }
                            }
                        }
                    }
                }
            }

        });
    },
}
</script>

<style lang="scss">
#app {
    overflow: hidden;
    font-family: Microsoft JhengHei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-image: url('./assets/bg.jpg');

    button {
        font-family: Microsoft JhengHei;
    }

    .video-embbed-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
