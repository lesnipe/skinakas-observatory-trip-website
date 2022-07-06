import {default as Image1} from '../../images/img1.svg';
import {default as Image2} from '../../images/img2.svg';
import {default as Image3} from '../../images/img3.svg';
import {default as Image4} from '../../images/img4.svg';
import {MdAlternateEmail} from 'react-icons/md';
import {BiTrip} from 'react-icons/bi';
import {FaPeopleCarry} from 'react-icons/fa';
import {RiGalleryLine} from 'react-icons/ri';

export const infoObject1 = {
    id: 'experiences',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    toplineIcon: <BiTrip/>,
    topline: 'EXPERIENCES',
    headline1: 'Be a part of a',
    headline2: 'unique experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Book now',
    imgStart: false,
    imgScale: 1,
    img: Image1,
    alt: 'experiences',
    primary: false,
    dark: false,
    fontbig: true,
    big: true
}

export const infoObject2 = {
    id: 'gallery',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    toplineIcon: <RiGalleryLine />,
    topline: 'GALLERY',
    headline1: 'Check out some',
    headline2: 'amazing snapshots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'See more',
    imgStart: true,
    imgScale: 0.8,
    img: Image2,
    alt: 'gallery',
    primary: true,
    dark: true,
    fontbig: true,
    big: true
}

export const infoObject3 = {
    id: 'talk-to-us',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    toplineIcon: <MdAlternateEmail />,
    topline: 'TALK TO US',
    headline1: 'Don\'t hesitate to',
    headline2: 'contact us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'Let\'s talk',
    imgStart: false,
    imgScale: 1,
    img: Image3,
    alt: 'talk to us',
    primary: false,
    dark: false,
    fontbig: true,
    big: true
}

export const infoObject4 = {
    id: 'attributors',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    toplineIcon: <FaPeopleCarry />,
    topline: 'ATTRIBUTORS',
    headline1: 'People 100% worth',
    headline2: 'checking out',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonLabel: 'See more',
    imgStart: true,
    imgScale: 0.1,
    img: Image4,
    alt: 'Camping',
    primary: true,
    dark: true,
    fontbig: true,
    big: true
}