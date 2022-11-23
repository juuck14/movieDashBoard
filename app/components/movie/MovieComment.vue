<template>
    <div :class="`w-100 mb-3 d-flex justify-content-${this.isMine ? 'end' : 'start'}`">
        <div class="comment p-2">
            <div class="d-flex justify-content-between mb-2 small text-secondary">
                <div>{{this.comment.id}}</div>
                <div>{{this.comment.regdate}}</div>
            </div>
            <div style="word-break: break-word;">
                {{this.comment.text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieComment',
    props: ['comment', 'isMine']
}
</script>

<style scoped>
.comment{
    border-radius: 10px;
    width: 60%;
    background-color: white;
}
</style>