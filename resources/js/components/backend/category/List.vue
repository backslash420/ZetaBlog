<template>
    <div>
         <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
              <div class="card-tools">
                    <router-link to="/add-category">
                    <button class="btn btn-primary">Add Category</button>
                    </router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Cat Id</th>
                  <th>Cat Name</th>
                  <th>Date</th>
                  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
               
                <tr v-for="category in getallCategory" :key="category.id">
                  <td>{{category.id}}</td>
                  <td>{{category.cat_name}}</td>
                   <td>{{category.created_at|timeformat}}</td>
                  <td>
                      <a href="">Edit</a>
                      <a href="" @click.prevent="deletecategory(category.id)">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>
<script>
export default {
  name :"List",
  mounted(){
     this.$store.dispatch("allCategory")
  },

  computed :{
    getallCategory(){
     return this.$store.getters.getCategory
    }
  },
    methods :{
      deletecategory(id){
        axios.get('/category/'+id)
        .then(()=>{
          this.$store.dispatch("allCategory")
          Toast.fire({
                type: 'success',
                title: 'Category deleted successfully'
              })
        })
        .catch(()=>{
          
        })
      }
  }
}
</script>