<template>
    <div>
         <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post List</h3>
              <div class="card-tools">
                    <router-link to="/add-post">
                    <button class="btn btn-primary">Add Post</button>
                    </router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>SI</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
               
                <tr v-for="post in allpost" :key="post">
                  <td>{{post.id}}</td>
                  <td v-if="post.user">{{post.user.name}}</td>
                   <td >cat name</td>
                   <td>{{post.title}}</td>
                   <td>{{post.description | shortLength(30,".....")}}</td>
                   <td>Photo</td>
                  <td>
                      <a href="">Edit</a>
                      <a href="">Delete</a>
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
    name:"List",
    mounted(){
         this.$store.dispatch("getAllPost")
    },
    computed:{
        allpost(){
            return this.$store.getters.getAllPost
        }
    },
    methods:{

    }
}
</script>
<style lang="stylus" scoped>

</style>