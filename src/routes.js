import Index from "@/components/Index";
import Projects from '@/components/Projects';
import Discography from '@/components/Discography';
import AboutMe from '@/components/AboutMe';
import wonderBeats from "@/components/wonderBeats";

export default [
    {name: 'Index', path: '/', component: Index},
    {name: 'Projects', path: '/projects', component: Projects},
    {name: 'Discography', path: '/discography', component: Discography},
    {name: 'About Me', path: '/about', component: AboutMe},

    //project routes:
    {name: 'Projects', path: '/projects/wonderBeats', component: wonderBeats},
]
