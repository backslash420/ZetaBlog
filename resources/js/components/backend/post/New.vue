<template>
    <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center mt-5">
          <!-- left column -->
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
            <form enctype="multipart/form-data">
            <div class="card-body">
            <div class="form-group">
                <label for="titleId">Title</label>
                <input type="text" class="form-control" id="titleId">
               
            </div>
           <div class="form-group">
                <label for="descriptionId">Description</label>
                <textarea class="form-control" id="descriptionId"></textarea>
               
            </div>
             <div class="form-group">
                <label for="cat_id">Select Category</label>
               <select name="" id="" class="form-control">
                   <option value="hidden">chose cat</option>
                   <option value="">1</option>
                <option value="">2</option>
               </select>
               
            </div>
          
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
       </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    </div>
</template>
<script>
export default {
    name:"New",
    data(){
        form:new Form({
            title:'',
            description:'',
            cat_id:'',
            photo:'',
        })
    },
    mounted(){

    },
    computed:{

    },
    methods:{

    }
}
</script>
<style lang="stylus" scoped>

</style>