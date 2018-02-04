 <template lang="html">
 <div>

     <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">
         Agregar producto
     </router-link>

     <div class="container">
         <router-view></router-view>
     </div>
 </div>

 </template>

 <script>
     export default {

     }
 </script>
