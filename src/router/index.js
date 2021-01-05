import News from  '@/components/Router/News'
import Books from  '@/components/Router/Books'
import VueRouter from 'vue-router'


const router = new VueRouter({
        routes: [
            {path: '/news', component: News},
            {path: '/books', component: Books},
        ]
    }
)

export default router;