import { Instructor } from "src/app/shared/models/instrBasicInfo.model";

export const instructorConst: Instructor[] = 
[
    {
        firstName: "Mike",
        lastName: 'Romables',
        location: 'San Diego, CA',
        imgPath:'assets/images/frame.jpg',
        level:'advanced',
        details: [
            { 
                blurb: 'he does this and that',
                contact: 'somewhere@somewhere.com'
            }
        ]
    },

    {
        firstName: "Rick",
        lastName: 'Rogers',
        location: 'Wilkes-Barre, PA',
        imgPath:'assets/images/frame.jpg',
        level:'advanced',
        details: [
            { 
                blurb: 'he does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
    {
        firstName: "Seth",
        lastName: 'Mutschler',
        location: 'Idaho/Eastern Oregon',
        imgPath:'assets/images/seth.jpg',
        level:'intermediate',
        details: [
            { 
                blurb: 'he does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
    {
        firstName: "Ben",
        lastName: 'Whitney',
        location: 'Denver, CO',
        imgPath:'assets/images/frame.jpg',
        level:'apprentice',
        details: [
            { 
                blurb: 'he does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
    {
        firstName: "Rachel",
        lastName: 'Mahloch',
        location: 'Boulder, CO',
        imgPath:'assets/images/Rachel.jpg',
        level:'apprentice',
        details: [
            { 
                blurb: 'she does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
    {
        firstName: "Walker",
        lastName: 'Wilder',
        location: 'Burlington, VT',
        imgPath:'assets/images/frame.jpg',
        level:'apprentice',
        details: [
            { 
                blurb: 'he does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
    {
        firstName: "Ryan",
        lastName: 'Smith',
        location: 'Golden, CO',
        imgPath:'assets/images/frame.jpg',
        level:'apprentice',
        details: [
            { 
                blurb: 'he does stuff too',
                contact: 'hereandthere@gmail.com'
            }
        ]
    },
]