import about from '../media/about.jpg';
import opportunities from '../media/opportunities.jpg';
import claims from '../media/claims.jpg';
import insights from '../media/insights.jpg';

export const HomeData = [
    {
        page: 'about',
        title: 'Preparing your platform for innovation',
        description:`We provide expert advice to pioneering UK businesses, helping them to compliantly capitalise on available 
                     government grants and incentives.`,
        //path: '/about',
        path: '/',
        buttonText: 'About us ',
        img: about
    },
    {
        page: 'opportunities',
        title: 'Never miss an opportunity',
        description:`Rewarding companies for their pioneering work requires specialist knowledge of a range of incentives that 
                     few other consultancies possess.`,
        //path: '/opportunities',
        path: '/',
        buttonText: 'Opportunities ',
        img: opportunities
    },
    {
        page: 'claims',
        title: 'Making a claim with GTIC',
        description:`Our rigorous claims process blueprint is designed to identify and capitalise on all available opportunities, 
                     while keeping you in the loop every step of the way.`,
        path: '/making_a_claim',
        buttonText: 'Making a claim ',
        img: claims
    },
    {
        page: 'referrals',
        title: 'Partnering with GTIC',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis suscipit sem quis vehicula. Ut non 
                     hendrerit sapien. Morbi sit.`,
        path: '/',
        buttonText: 'Referrals ',
        img: opportunities
    },
    {
        page: 'explained',
        title: 'R&D Tax Relief explained',
        description:`Research & Development (R&D) Tax Relief could provide your business with a competitive advantage and firm 
                     foundations for future growth.`,
        path: '/r&d_explained',
        buttonText: 'How it works ',
        img: claims
    },
    {
        page: 'insights',
        title: 'Insights',
        description:`Do you have a query relating to a particular tax incentive or grant? Insights is where we share much of our
                     expertise directly with you.`,
        path: '/',
        buttonText: 'Go to insights ',
        img: insights
    }
];