import AdminHome from './components/backend/AdminHome.vue'
//category
import CategoryList from './components/backend/category/List.vue'
import AddCategory from './components/backend/category/New.vue'
import EditCategory from './components/backend/category/Edit.vue'
//post
import PostList from './components/backend/post/List.vue'
import AddPost from './components/backend/post/New.vue'
import EditPost from './components/backend/post/Edit.vue'
export const routes = [
    {
        path :'/home',
        component : AdminHome
    },
    //category route
    {
        path :'/category-list',
        component :CategoryList
    },
    {
        path :'/add-category',
        component :AddCategory
    },
    {
        path :'/edit-category/:catid',
        component :EditCategory
    },
    //post route
    {
        path :'/post-list',
        component :PostList
    },
    {
        path :'/add-post',
        component :AddPost
    },
    {
        path :'/edit-category/:catid',
        component :EditPost
    }
];