<template>
<div class="base">

<Header />

<h1 class="title">Te encuentras en la vista principal de mi primer proyecto con Nuxtjs</h1>
{{ this.$store.state.Chupetin }}
<br>

{{ this.$store.getters.getChupetines }}

<h4>
{{ $t('principal.saludo')}}
</h4>

<h2>
Amigos
</h2>

<input type="text" v-model="amigo">
<button @click="addAmigo">Agregar Amigo</button>

<ul>
    <li class="exacto" v-for="(amigo, index) in $store.state.amigos" :key="index">
        {{ amigo }}
    </li>
</ul>




</div>


</template>


<script>

import Header from '@/components/Header'

export default {

    data () { 
        return { 
            amigo: ''
        }
     },
    components: {
        Header
     },
     methods: {
         addAmigo() {
             this.$store.state.amigo = this.amigo;
            this.$store.dispatch('addAmigoAction');
            this.amigo = '';
         }
     }
}

</script>

<style scope>

.base{
    padding: 2%;
    background-color: red;
}

.title{
    font-size: 25px;
}

</style>