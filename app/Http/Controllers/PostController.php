<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function post_all(){
    	$posts=Post::all();
    	return $posts;
    }
}
