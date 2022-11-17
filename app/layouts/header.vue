<template>
    <div>
        <div :class="'hamburger ' + ( show ? 'active' : '' )" ref="hamburger" @click="show = !show">
            <div class="h1"></div>
            <div class="h2"></div>
            <div class="h3"></div>
        </div>
        

        <div :class="'sidebar ' + ( show ? 'active' : '' )">
            DORF
        </div>
        <div :class="'sidebarMask ' + ( show ? 'active' : '' )" @click="show = false"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
}
</script>

<style scoped>

.hamburger{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 21px;
    width: 21px;
    height: 42px;
    z-index: 1002;
}

.hamburger.fadeIn{
    opacity: .9;
}

.hamburger .h1,
.hamburger .h2,
.hamburger .h3{
    background-color: #000000;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 3px;
}

.hamburger .h3{
    margin-bottom: 0;
}

.hamburger .h1,
.hamburger .h3{
    transform: rotate(0deg);
    transition: transform 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6), background-color 0.35s ease;
    transform-origin: 10% 70%;
}

.hamburger .h2{
    opacity: 1;
    transition: opacity 0.35s ease, background-color 0.35s ease;
}

.hamburger.active .h1,
.hamburger.active .h2,
.hamburger.active .h3{
    background-color: #000000;
}

.hamburger.active .h1{
    transform: rotate(45deg)
}

.hamburger.active .h2{
    opacity: 0;
}

.hamburger.active .h3{
    transform: rotate(-45deg)
}

.sidebar{
    display: flex;
    position: fixed;
    height: 100vh;
    background-color: var(--black);
    top: 0;
    right: 0;
    z-index: 1001;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 20vh 4rem;
    transform: translateX(100%);
    transition: transform 0.35s ease;
}

.sidebar.active{
    transform: translateX(0%);
}

.sidebarMask{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: gray;
    opacity: .1;
}
.sidebarMask.active{
    display: block;
}
</style>