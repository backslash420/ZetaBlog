import AdminHome from './components/backend/AdminHome.vue'
import CategoryList from './components/backend/category/List.vue'
import AddCategory from './components/backend/category/New.vue'
export const routes = [
    {
        path :'/home',
        component : AdminHome
    },
    {
        path :'/category-list',
        component :CategoryList
    },
    {
        path :'/add-category',
        component :AddCategory
    }
];