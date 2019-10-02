<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function all_category()
    {
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }
    public function add_category(Request $request){
        $this->validate($request,[
            'cat_name'=>'required'
        ]);
        $category =new Category();
        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message'=>'ok'];
    }
    public function delete_category($id)
    {
        $category =Category::find($id);
        $category->delete();
    }
 
}
