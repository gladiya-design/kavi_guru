/**
 * scrapbookData.js
 * 
 * Central configuration file for your scrapbook memory website.
 * You can easily update:
 * - Text & captions
 * - Photo file paths (or URLs)
 * - Dates
 * - Quiz questions & answers
 * - Audio tracks
 */

export const scrapbookConfig = {
  // Audio configuration
  audio: {
    // Put your song file in public/audio/bgm.mp3 or change this path / URL
    src: "/audio/bgm.mp3",
    title: "Our Story Melody",
    artist: "Akka, Machan & Me",
    defaultVolume: 0.55,
  },

  // Photo mapping: file paths relative to /photos/ or custom URLs
  // If an image file is not found, the website displays an elegant scrapbook placeholder!
  photos: {
    earlyPhoto: {
      id: "earlyPhoto",
      src: "/photos/early-photo.jpg",
      caption: "When you were simply my akka's person",
      alt: "Early memory photo",
      tapeAngle: -4,
    },
    wedding: {
      id: "wedding",
      src: "/photos/wedding.jpg",
      caption: "The day two worlds became one ❤️",
      alt: "Wedding day photo",
      tapeAngle: 3,
    },
    akka: {
      id: "akka",
      src: "/photos/akka.jpg",
      caption: "Her voice. Her smile. Everything.",
      alt: "My akka",
      tapeAngle: -2,
    },
    funMall1: {
      id: "funMall1",
      src: "/photos/fun-mall-1.jpg",
      caption: "Fun Mall • First time meeting machan",
      alt: "Fun Mall photo 1",
      tapeAngle: -5,
    },
    funMall2: {
      id: "funMall2",
      src: "/photos/fun-mall-2.jpg",
      caption: "Finally together after almost a year",
      alt: "Fun Mall photo 2",
      tapeAngle: 4,
    },
    photo3: {
      id: "photo3",
      src: "/photos/photo-3.jpg",
      caption: "Smiles that made all the wait worth it",
      alt: "Reunion photo",
      tapeAngle: -2,
    },
    trouble: {
      id: "trouble",
      src: "/photos/trouble.jpg",
      caption: "Me + Machan = Pure Chaos 😈",
      alt: "Troublemakers photo",
      tapeAngle: 3,
    },
    lake1: {
      id: "lake1",
      src: "/photos/lake-1.jpg",
      caption: "Breezy lake afternoons",
      alt: "Lake memory 1",
      tapeAngle: -3,
    },
    lake2: {
      id: "lake2",
      src: "/photos/lake-2.jpg",
      caption: "Quiet water, peaceful hearts",
      alt: "Lake memory 2",
      tapeAngle: 4,
    },
    lake3: {
      id: "lake3",
      src: "/photos/lake-3.jpg",
      caption: "Just a normal day that became unforgettable",
      alt: "Lake memory 3",
      tapeAngle: -1,
    },
    ukkadam: {
      id: "ukkadam",
      src: "/photos/ukkadam.jpg",
      caption: "10 PM pickup at Ukkadam Bus Stand",
      alt: "Ukkadam bus stand pickup",
      tapeAngle: 2,
    },
    polarBear: {
      id: "polarBear",
      src: "/photos/polar-bear.jpg",
      caption: "Polar Bear • Midnight Ice Cream Ritual 🍦",
      alt: "Polar Bear ice cream memory",
      tapeAngle: -4,
    },
    marudhamalai1: {
      id: "marudhamalai1",
      src: "/photos/marudhamalai-1.jpg",
      caption: "Winding roads to Marudhamalai",
      alt: "Marudhamalai trip photo 1",
      tapeAngle: -3,
    },
    marudhamalai2: {
      id: "marudhamalai2",
      src: "/photos/marudhamalai-2.jpg",
      caption: "Hilltop breeze & endless banter",
      alt: "Marudhamalai trip photo 2",
      tapeAngle: 5,
    },
    marudhamalai3: {
      id: "marudhamalai3",
      src: "/photos/marudhamalai-3.jpg",
      caption: "The three of us conquer the hill",
      alt: "Marudhamalai trip photo 3",
      tapeAngle: -2,
    },
    marudhamalai4: {
      id: "marudhamalai4",
      src: "/photos/marudhamalai-4.jpg",
      caption: "Small trip. Giant memory. ❤️",
      alt: "Marudhamalai trip photo 4",
      tapeAngle: 3,
    },
    funniestSecret: {
      id: "funniestSecret",
      src: "/photos/funniest-secret.jpg",
      caption: "Top Secret: This stays strictly between us! 🤫",
      alt: "Hilarious candid photo",
      tapeAngle: -4,
    },
    finalPhoto: {
      id: "finalPhoto",
      src: "/photos/final-photo.jpg",
      caption: "The three of us • Our little world",
      alt: "Favorite trio photo",
      tapeAngle: 0,
    },
  },

  // Interactive Memory Wall cards
  memoryWallItems: [
    {
      id: "photos",
      icon: "📸",
      title: "The Candid Photos",
      shortDesc: "Every silly face and smile",
      detail: "All those random photos we snapped without posing—the blurry laughing ones that now mean the absolute world to me.",
      rotation: -3,
    },
    {
      id: "icecream",
      icon: "🍦",
      title: "Polar Bear Sundaes",
      shortDesc: "Late night sugar rushes",
      detail: "Debating over flavors for 20 minutes only to eat each other's ice cream anyway. No week was ever complete without it.",
      rotation: 2,
    },
    {
      id: "home",
      icon: "🏠",
      title: "Akka's Living Room",
      shortDesc: "The warmest safe place",
      detail: "Taking casual afternoon naps on the couch, stretching out, doing nothing at all, feeling 100% at home.",
      rotation: -2,
    },
    {
      id: "pickup",
      icon: "🚗",
      title: "The Late Night Pickups",
      shortDesc: "Waiting by the car",
      detail: "Spotting machan's car arriving in the dark, tossing my bags into the back, and laughing the entire drive home.",
      rotation: 4,
    },
    {
      id: "lake",
      icon: "🌊",
      title: "Quiet Lake Walks",
      shortDesc: "Watching the ripples",
      detail: "Just sitting by the water enjoying the breeze, talking about our lives, no rush, no pressure, just peaceful presence.",
      rotation: -4,
    },
    {
      id: "marudhamalai",
      icon: "⛰️",
      title: "Marudhamalai Hilltop",
      shortDesc: "Our first real mini trip",
      detail: "Climbing up together, teasing each other about who was getting tired first, and taking pictures against the sky.",
      rotation: 1,
    },
    {
      id: "irritating",
      icon: "😂",
      title: "Ganging Up on Akka",
      shortDesc: "Our favorite joint sport",
      detail: "The look on akka's face whenever machan and I exchanged that silent 'let's irritate her' glance. Absolute gold.",
      rotation: -3,
    },
    {
      id: "conversations",
      icon: "💬",
      title: "Random Nonsense Talks",
      shortDesc: "Everything and nothing",
      detail: "Talking about deep family stuff one second, and arguing about nonsense the very next minute. Unfiltered honesty.",
      rotation: 3,
    },
  ],

  // Quiz questions
  quizQuestions: [
    {
      id: 1,
      question: "Where did I meet my machan for the first time in person?",
      options: [
        { text: "Fun Mall, Coimbatore 🛍️", isCorrect: true, response: "Spot on! That was where the trio officially met!" },
        { text: "At a secret wedding venue 🕵️", isCorrect: false, response: "Nope! We met at Fun Mall after nearly a year!" },
        { text: "At the railway station 🚂", isCorrect: false, response: "Incorrect! It was at Fun Mall!" },
        { text: "At a bus stop in the rain 🌧️", isCorrect: false, response: "Cinematic, but wrong! Fun Mall was the spot!" },
      ],
    },
    {
      id: 2,
      question: "Who was waiting for me in the dark at Ukkadam Bus Stand?",
      options: [
        { text: "Machan, ready with the pickup 🚗", isCorrect: true, response: "Exactly! He was there waiting for me at night!" },
        { text: "Batman on a Batmobile 🦇", isCorrect: false, response: "Machan is cool, but he's not Batman... or is he?" },
        { text: "A lost Swiggy delivery guy 🛵", isCorrect: false, response: "Haha no! Machan was the dedicated driver!" },
        { text: "The bus conductor waving goodbye 👋", isCorrect: false, response: "Nope, machan was waiting patiently!" },
      ],
    },
    {
      id: 3,
      question: "Where did our legendary first little trip take place?",
      options: [
        { text: "Marudhamalai ⛰️", isCorrect: true, response: "Yes! Our first little adventure together up the hill!" },
        { text: "Switzerland in winter ❄️", isCorrect: false, response: "In our dreams maybe! It was Marudhamalai!" },
        { text: "Akka's kitchen on Sunday 🍳", isCorrect: false, response: "That's a battlefield, not a trip! It was Marudhamalai!" },
        { text: "Around the dining table 🍽️", isCorrect: false, response: "Haha, Marudhamalai was the real adventure!" },
      ],
    },
    {
      id: 4,
      question: "Who is usually the innocent victim of our mischief and teasing?",
      options: [
        { text: "Akka, 100% of the time 💆‍♀️", isCorrect: true, response: "BINGO! Akka never stood a chance against our teamwork! 😂" },
        { text: "The innocent neighbors 🏘️", isCorrect: false, response: "No, akka gets all the special treatment!" },
        { text: "The stray cats outside 🐱", isCorrect: false, response: "Nope! Akka is always our primary target!" },
        { text: "Machan himself 😇", isCorrect: false, response: "Nice try, machan and I are partners in crime!" },
      ],
    },
    {
      id: 5,
      question: "What is guaranteed to make any outing 1000x better?",
      options: [
        { text: "Ice cream at Polar Bear 🍨", isCorrect: true, response: "YES! Every single good memory requires Polar Bear!" },
        { text: "A lecture on life advice 📚", isCorrect: false, response: "Are you serious?! ICE CREAM is the only answer!" },
        { text: "Going home early to sleep 😴", isCorrect: false, response: "Never! We need that ice cream run!" },
        { text: "A serious political debate 🏛️", isCorrect: false, response: "Boring! Polar Bear ice cream always wins!" },
      ],
    },
  ],

  // One week cards (Chapter 12)
  weekCards: [
    { number: "01", text: "Wake up.", icon: "☀️", color: "#fef3c7" },
    { number: "02", text: "Irritate akka.", icon: "😈", color: "#fee2e2" },
    { number: "03", text: "Talk nonsense.", icon: "🗣️", color: "#e0f2fe" },
    { number: "04", text: "Go somewhere.", icon: "🛵", color: "#ecfdf5" },
    { number: "05", text: "Eat something.", icon: "🍲", color: "#fef9c3" },
    { number: "06", text: "Irritate akka again.", icon: "🤣", color: "#fce7f3" },
  ],

  // Final Letter verbatim
  finalLetter: {
    salutation: "To my akka and my machan,",
    paragraphs: [
      "I don't know exactly when our story changed.",
      "I don't know when the difficult days became memories.",
      "I don't know when the random conversations became something I would miss.",
      "But somewhere along the way, you both became such an important part of my life.",
      "I am the first child to you both ever, and that makes this bond even more special to me.",
      "I will always remember the difficult days.",
      "But more than those, I want to remember the laughter.",
      "The teasing. The random conversations. The trips. The ice cream. The photos. The nights. The little moments. The ordinary days that became extraordinary memories.",
      "I miss those days.",
      "I miss our time together.",
      "And whenever I feel that missing feeling, I want to remember one thing:",
      "We had those moments. And nobody can take those memories away from us.",
    ],
    closing: "With lots of love,",
    signature: "Your first child ❤️",
  },
};
