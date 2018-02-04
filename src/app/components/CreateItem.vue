<template lang="html">
    <div>
        <h1>Agregar un producto</h1>
        <form v-on:submit.prevent="addItem" class="card">
            <div class="card-body">
                <div class="form-group">
                    <input type="text" v-model="item.name" placeholder="Agregue un nombre"  class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="item.price" placeholder="Agregue un precio" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">
                    Agregar producto
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                item: {}
            }
        },
        methods: {
            //Método
            addItem: function () {
                //console.log("Enviando ...");
                this.axios.post('/item', this.item)
                    .then(res => {
                        this.$router.replace({name: 'DisplayItem'}); //Go to '/'
                    })
                    .catch(err => console.log(err));
            }
        }


    }
</script>