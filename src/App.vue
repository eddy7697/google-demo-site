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
