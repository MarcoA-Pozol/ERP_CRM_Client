<script setup lang="ts">
    type Difficulty = "easy" | "medium" | "hard";

    type CardSchema = {
        id:number;
        word:string;
        examplePhrase:string;
        difficulty:Difficulty;
    }

    const cardsList:CardSchema[] = [
        {id:1, word:"Airplane", examplePhrase:"The airplane is flying", difficulty:"easy"},
        {id:2, word:"Red", examplePhrase:"She has a beautiful red dress", difficulty:"easy"},
        {id:3, word:"Crumble", examplePhrase:"The mountain is crumbling down after vulcano eruption", difficulty:"medium"},
        {id:4, word:"Construe", examplePhrase:"Did you construe the topic? if not, I can explain it again", difficulty:"hard"},
    ]
</script>

<template>
    <div>
        <ul>
            <li class="flashcard" v-for="card in cardsList" :key="card.id">
                <span class="flashcard-title">{{card.difficulty === 'easy' ? '🟢' : card.difficulty === 'medium' ? '🟠' : '🔴' }}  {{ card.word }}</span>
                <span>{{ card.examplePhrase }}</span>
                <span :class="['flashcard-difficulty', card.difficulty]">{{ card.difficulty }}</span> 
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .flashcard {
        border-radius: 5px;
        border: 2px solid indianred;
        background-color: indigo;
        color: white;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        margin-inline: auto;
        margin-block: 10px;
    }
    .flashcard-title {
        color: indianred;
        font-family: monospace;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .flashcard-difficulty {
        font-weight: bold;
    }
    .easy {
        color: green;
    }
    .medium {
        color: orange;
    }
    .hard {
        color: red;
    }

    @media ( width < 768px ){
        .flashcard-title {
            font-size: 1.2rem;
            color: wheat;
        }
    }
</style>