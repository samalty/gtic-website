import about from './about.jpg';
import opportunities from './opportunities.jpg';
import claims from './claims.jpg';

export const HomeData = [
    {
        page: 'about',
        title: 'Preparing your platform for innovation',
        description:`At Gov Tax Incentive Consultants, we provide expert advice to pioneering UK businesses, helping them to 
                     compliantly capitalise on available government grants and incentives.`,
        //path: '/about',
        path: '/',
        buttonText: 'About us ',
        img: about
    },
    {
        page: 'opportunities',
        title: 'Never miss an opportunity',
        description:`Our goal is to reward companies of all sectors, sizes and structures for the pioneering work that they 
                     undertake. Achieving this requires specialist knowledge of a broad range of incentives that few other 
                     consultancies possess.`,
        //path: '/opportunities',
        path: '/',
        buttonText: 'Opportunities ',
        img: opportunities
    },
    {
        page: 'claims',
        title: 'Making a claim with GTIC',
        description:`We promise maximum value and total transparency. Our rigorous claims process blueprint is designed to 
                     identify and capitalise on all available opportunities, while keeping you in the loop every step of the 
                     way.`,
        path: '/making_a_claim',
        buttonText: 'Making a claim ',
        img: claims
    },
    {
        page: 'explained',
        title: 'R&D Tax Relief explained',
        description:`A generous initiative rewarding innovation within UK industry, Research & Development (R&D) Tax Relief 
                     could provide your business with a competitive advantage and firm foundations for future growth.`,
        path: '/r&d_explained',
        buttonText: 'How it works ',
        img: opportunities
    }
];