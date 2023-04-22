import ayurveda from '../../images/about/ayurveda.png';
import tree from '../../images/about/tree.webp';
import coverImage1 from '../../images/about/story-1.png';
import coverImage2 from '../../images/about/story-2.png';
import flower1 from '../../images/about/flower-1.png';
import flower2 from '../../images/about/flower-2.webp';
import flower4 from '../../images/about/flower-3.webp';
import flowerMid from '../../images/about/middle-flower.webp';


const stories = [
    {
        id: 1,
        title: 'Started from previous two generations',
        coverImage: coverImage1,
        summary: [
            {
                id: 1,
                text: 'Just like Ayurveda- the science of life, treats problems from the roots, our founders also have a special & deeply-rooted relationship with Ayurveda.'
            },
            {
                id: 2,
                text: 'During one point in life, our founder was facing many skin related issues. Looking for a solution she found an industry that was not transparent and based on false advertising.'
            },
            {
                id: 3,
                text: 'Then she recalled her family roots of using potent ayurvedic herbs for overall wellness and being so effective.'
            },
        ],
        topLeftImage: flower1,
        topCenterImage: flowerMid,
        topRightImage: flower2,
        centerLeftImage: flower4,
        centerRightImage: flower4, 
        mainImage: tree,
    },
        { 
            id: 2,
            title: 'Heal from the roots',
            coverImage: coverImage2,
            summary: [
                {
                    id: 1,
                    text: 'Personifying her grandfather wishes, who was a known Ayurvedic Acharaya and spent his whole life improving the lives of others.'
                },
                {
                    id: 2,
                    text: 'He spent his whole life perfecting Ayurveda by following ancient texts and wanted to share his wealth of knowledge with the rest of the world.'
                },
                {
                    id: 3,
                    text: 'So now our founder is continuing his legacy and is set on a journey to provide a more accessible & affordable wellness products.'
                },
                {
                    id: 4,
                    text: 'So now our founder is continuing his legacy and is set on a journey to provide a more accessible & affordable wellness products.'
                },
            ],
            topLeftImage: flower1,
            topCenterImage: flowerMid,
            topRightImage: flower2,
            centerLeftImage: flower4,
            centerRightImage: flower4, 
            mainImage: ayurveda,
        }

];

export default stories;