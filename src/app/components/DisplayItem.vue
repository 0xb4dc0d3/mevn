<template lang="html">
    <div>
        <h3 class="h3">Lista de productos</h3>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Operaciones</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
                <td>{{item._id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <a href="#" class="btn btn-danger" v-on:click="deleteItem(item._id)">Eliminar</a>
                    <!--<a href="#" class="btn btn-dark">Actualizar</a>-->
                    <router-link :to="{ name:'EditItem', params: {id: item._id} }" class="btn btn-dark">
                        Actualizar
                    </router-link>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                items: []
            }
        },
        created() {
            this.fetchItems();
        },
        methods: {
            fetchItems() {
                this.axios.get('/item')
                    .then(res => {
                        this.items = res.data;
                    })
                    .catch(err => console.log(err));
            },
            deleteItem(id) {
                //console.log("Eliminando", id);
                const res = confirm("Delete item?");
                if (res) {
                    this.axios.delete('/item/' + id)
                        .then(res => {
                            this.items.splice(id, 1);
                        })
                        .catch(err => console.log(err));
                }
            }

        }
    }
</script>
