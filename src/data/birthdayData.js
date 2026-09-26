/**
 * birthdayData.js
 * 
 * Multilingual content dictionary (Tamil, Tanglish, English)
 * and central configuration for Machan's Birthday Gift Website.
 */

export const birthdayData = {
  // Available languages
  languages: [
    { code: "tamil", label: "தமிழ்" },
    { code: "tanglish", label: "Tanglish" },
    { code: "english", label: "English" },
  ],

  // Music configuration
  music: {
    src: "/audio/videoplayback.weba",
    title: "Machan's Birthday Special",
    artist: "Crafted with Love",
    defaultVolume: 0.6,
  },


  // 1. OPENING SCREEN
  opening: {
    tamil: {
      surprise: "ஒரு small surprise இருக்கு...",
      ready: "Ready ah?",
      cta: "Open Your Gift ✨",
      subPrompt: "உங்களுக்காக பிரத்யேகமாக உருவாக்கப்பட்டது",
    },
    tanglish: {
      surprise: "Oru small surprise irukku...",
      ready: "Ready ah?",
      cta: "Open Your Gift ✨",
      subPrompt: "Crafted specially for you, machan",
    },
    english: {
      surprise: "There's a little surprise waiting for you...",
      ready: "Ready?",
      cta: "Open Your Gift ✨",
      subPrompt: "A personal digital gift made just for you",
    },
  },

  // 2. HERO
  hero: {
    tamil: {
      title: "இனிய பிறந்தநாள் வாழ்த்துக்கள்",
      name: "மச்சான் ❤️",
      tagline1: "இன்னைக்கு உங்களோட நாள்.",
      tagline2: "உங்களுக்காக ஏதாவது special-ah செய்யாம இந்த நாளை கடக்க விட முடியல.",
      cta: "Let's Begin →",
    },
    tanglish: {
      title: "Happyyy Birthday",
      name: "Machan ❤️",
      tagline1: "Innaikku ungaloda day.",
      tagline2: "Ungalukkaga edhavadhu special-ah pannama indha naala kadakka vida mudiyala.",
      cta: "Let's Begin →",
    },
    english: {
      title: "HAPPY BIRTHDAY",
      name: "MACHAN ❤️",
      tagline1: "Today is your day.",
      tagline2: "But I couldn't let it pass without making something for you.",
      cta: "Let's Begin →",
    },
  },

  // 3. PERSONAL BIRTHDAY MESSAGE
  personalMessage: {
    tamil: {
      heading: "என் மச்சானுக்காக ❤️",
      subheading: "A few words from the heart",
      lines: [
        "நம்ம இருவருக்கும் இவ்வளவு அழகான ஒரு bond உருவாகும் என்று நான் ஒருபோதும் நினைத்ததில்லை.",
        "சில நாட்கள் ரொம்ப கஷ்டமாக இருந்தது.",
        "சில நேரங்களில் எல்லாமே complicated-ஆ இருந்தது.",
        "ஆனா எங்கோ ஒரு இடத்தில் எல்லாமே மாற ஆரம்பிச்சது.",
        "சின்ன சின்ன conversations...",
        "jokes...",
        "teasing...",
        "random plans...",
        "ordinary days...",
        "இவை எல்லாத்துக்கும் நடுவில் நீங்கள் எனக்கு ரொம்ப special-ஆ மாறிட்டீங்க.",
        "இன்று உங்களோட birthday-ல ஒரு விஷயம் மட்டும் சொல்லணும்...",
        "நம்ம bond-ஐ நான் உண்மையாவே ரொம்ப value பண்றேன்.",
      ],
    },
    tanglish: {
      heading: "En Machan-kaga ❤️",
      subheading: "A few words from the heart",
      lines: [
        "Namma rendu perukum ivlo azhagana bond create aagumnu naaney nenachadhu illa.",
        "Sila days romba kashtama irundhuchu.",
        "Sila neram ellame complicated-ah irundhuchu.",
        "Aana somewhere along the way, everything changed.",
        "Konjam conversations...",
        "konjam jokes...",
        "konjam teasing...",
        "random plans...",
        "ordinary days...",
        "Idhellathukkum naduvula neenga enakku romba special-ah aayitteenga.",
        "Innaikku ungal birthday-la one thing mattum sollanum...",
        "Namma bond-ah naan genuinely romba value panren.",
      ],
    },
    english: {
      heading: "For My Machan",
      subheading: "A few words from the heart",
      lines: [
        "I don't think I ever imagined that our bond would become what it is today.",
        "There were difficult days.",
        "There were times when everything felt complicated.",
        "There were times when even talking to the people we loved wasn't easy.",
        "But somewhere along the way, things changed.",
        "Between conversations, jokes, teasing, random plans and ordinary days...",
        "you became someone very special to me.",
        "And today, on your birthday, I just want you to know that I genuinely treasure the bond we have.",
      ],
    },
  },

  // 4. "HOW DID THIS EVEN HAPPEN?"
  howItHappened: {
    tamil: {
      heading: "நாம இவ்வளவு close ஆனது எப்படி?",
      subheading: "A journey that wrote itself",
      steps: [
        "தெரிஞ்ச ஒருத்தரா இருந்ததுல இருந்து...",
        "பேச ஆரம்பிச்சோம்...",
        "சிரிக்க ஆரம்பிச்சோம்...",
        "அக்காவை சேர்ந்து irritate பண்ண ஆரம்பிச்சோம்...",
        "Memories create பண்ண ஆரம்பிச்சோம்...",
        "இப்போ...",
        "மச்சான் ❤️",
      ],
    },
    tanglish: {
      heading: "Naam ivlo close aanadhu eppadi?",
      subheading: "A journey that wrote itself",
      steps: [
        "Just therinja oruthara irundhula irundhu...",
        "Pesa start pannom...",
        "Sirikka start pannom...",
        "Akkava serndhu irritate panna start pannom...",
        "Memories create pannom...",
        "And now...",
        "Machan ❤️",
      ],
    },
    english: {
      heading: "How did we even get here?",
      subheading: "A journey that wrote itself",
      steps: [
        "From just knowing you...",
        "To talking...",
        "To laughing...",
        "To annoying akka together...",
        "To making memories...",
        "And now...",
        "Machan ❤️",
      ],
    },
  },

  // 5. MEMORY EXPERIENCE
  memories: {
    tamil: {
      heading: "இதுவரைக்கும் நம்ம memories",
      subheading: "மறக்கவே விரும்பாத சில moments.",
      viewHint: "புகைப்படத்தை பெரிதாக்க தட்டவும்",
    },
    tanglish: {
      heading: "Idhuvaraikkum namma memories",
      subheading: "Marakkave virumbaadha sila moments.",
      viewHint: "Tap on any photo to view full size",
    },
    english: {
      heading: "Memories So Far",
      subheading: "Just a few moments I never want to forget.",
      viewHint: "Tap on any photo to view in high definition",
    },
    items: [
      {
        id: "mem1",
        src: "/images/April_23.png",
        date: "23 April 2025",
        caption: {
          tamil: "23 ஏப்ரல் 2025 — எப்போதும் நினைவில் இருக்கும் ஒரு நாள்.",
          tanglish: "23 April 2025 — Eppovume nyabagam irukkum oru naal.",
          english: "23 April 2025 — A memory I'll always keep.",
        },
      },
      {
        id: "mem2",
        src: "/images/Heavy hearts.png",
        date: "Heavy Hearts 💔",
        caption: {
          tamil: "சாதாரண நாட்களுக்கு நடுவில்...",
          tanglish: "Normal days-ku naduvula...",
          english: "Somewhere between ordinary days...",
        },
      },
      {
        id: "mem3",
        src: "/images/Lake_pic.png",
        date: "Sunset at the Lake",
        caption: {
          tamil: "அந்த நாள்.",
          tanglish: "Andha day.",
          english: "That day.",
        },
      },
      {
        id: "mem4",
        src: "/images/PG Pickup.png",
        date: "PG Pickup 🏍️",
        caption: {
          tamil: "நாம மட்டும்.",
          tanglish: "Naam mattum.",
          english: "Just us.",
        },
      },
      {
        id: "mem5",
        src: "/images/Marudhamalai.png",
        date: "First Mini Trip",
        caption: {
          tamil: "ஒரு சின்ன trip. ஒரு பெரிய memory.",
          tanglish: "Oru chinna trip. Oru periya memory.",
          english: "One small trip. One big memory.",
        },
      },
      {
        id: "mem6",
        src: "/images/Mehandi.png",
        date: "Mehandi Night 🎨",
        caption: {
          tamil: "சாதாரண நாளா இருந்தது... ஆனா special memory ஆகிடுச்சு.",
          tanglish: "Normal day dhaan... aana special memory aayiduchu.",
          english: "An ordinary day that became special.",
        },
      },
      {
        id: "mem7",
        src: "/images/Polar Bear.png",
        date: "Ice Cream Run",
        caption: {
          tamil: "சில தருணங்களுக்கு காரணம் தேவையில்லை.",
          tanglish: "Sila moments-ku reason theva illa.",
          english: "Some moments don't need a reason.",
        },
      },
      {
        id: "mem8",
        src: "/images/Ukkadam_bus stand.png",
        date: "Ukkadam Bus Stand 🚌",
        caption: {
          tamil: "சொற்கள் தேவையில்லாத சிரிப்பு.",
          tanglish: "Words theva illadha siripu.",
          english: "Smiles that speak for themselves.",
        },
      },
    ],
  },

  // 6. RANDOM FUNNY QUESTIONS (6 questions)
  questionsSection: {
    tamil: {
      heading: "சரி... இப்போ கொஞ்சம் comedy.",
      subheading: "Some very important questions.",
    },
    tanglish: {
      heading: "Sari... ippo konjam comedy.",
      subheading: "Some very important questions.",
    },
    english: {
      heading: "Okay... enough emotions.",
      subheading: "Some very important questions.",
    },
    questions: [
      {
        id: 1,
        question: {
          tamil: "If I suddenly say: 'Machan... oru idea irukku.' What should you do?",
          tanglish: "If I suddenly say: 'Machan... oru idea irukku.' What should you do?",
          english: "If I suddenly say: 'Machan... oru idea irukku.' What should you do?",
        },
        options: [
          { key: "A", text: "A. Listen carefully" },
          { key: "B", text: "B. Ask what it is" },
          { key: "C", text: "C. Run" },
          { key: "D", text: "D. Tell akka" },
        ],
        correctKey: "C",
        result: {
          tamil: "Correct answer: C. ஆனா இப்போ ஓடினாலும் late. 😂",
          tanglish: "Correct answer: C. Aana ippo odinalum late. 😂",
          english: "Correct answer: C. But unfortunately, you're already involved. 😂",
        },
      },
      {
        id: 2,
        question: {
          tamil: "If akka suddenly says: 'Neenga rendu perum enna pesitu irukeenga?' What is the safest answer?",
          tanglish: "If akka suddenly says: 'Neenga rendu perum enna pesitu irukeenga?' What is the safest answer?",
          english: "If akka suddenly says: 'Neenga rendu perum enna pesitu irukeenga?' What is the safest answer?",
        },
        options: [
          { key: "A", text: "A. Nothing" },
          { key: "B", text: "B. Important matter" },
          { key: "C", text: "C. Secret" },
          { key: "D", text: "D. Run" },
        ],
        correctKey: "A",
        result: {
          tamil: "'Onnum illa.' Family history-la romba famous-aana poi. 😂",
          tanglish: "'Nothing.' The oldest lie in family history. 😂",
          english: "'Nothing.' The oldest lie in family history. 😂",
        },
      },
      {
        id: 3,
        question: {
          tamil: "Who is more dangerous?",
          tanglish: "Who is more dangerous?",
          english: "Who is more dangerous?",
        },
        options: [
          { key: "A", text: "A. Me with an idea" },
          { key: "B", text: "B. Machan with an idea" },
          { key: "C", text: "C. Both of us together" },
          { key: "D", text: "D. Akka finding out" },
        ],
        correctKey: "D",
        result: {
          tamil: "Definitely D. 😂",
          tanglish: "Definitely D. 😂",
          english: "Definitely D. 😂",
        },
      },
      {
        id: 4,
        question: {
          tamil: "If I call you at an unreasonable time and say: 'Machan, kelvi kekkanum...' What do you assume?",
          tanglish: "If I call you at an unreasonable time and say: 'Machan, kelvi kekkanum...' What do you assume?",
          english: "If I call you at an unreasonable time and say: 'Machan, kelvi kekkanum...' What do you assume?",
        },
        options: [
          { key: "A", text: "A. Normal question" },
          { key: "B", text: "B. Emergency" },
          { key: "C", text: "C. Random nonsense" },
          { key: "D", text: "D. This will take 2 hours" },
        ],
        correctKey: "D",
        result: {
          tamil: "D. You know me too well. 😂",
          tanglish: "D. You know me too well. 😂",
          english: "D. You know me too well. 😂",
        },
      },
      {
        id: 5,
        question: {
          tamil: "If we had a warning label, what would it say?",
          tanglish: "If we had a warning label, what would it say?",
          english: "If we had a warning label, what would it say?",
        },
        options: [
          { key: "A", text: "A. Handle with care" },
          { key: "B", text: "B. May cause unnecessary laughter" },
          { key: "C", text: "C. Keep away from akka" },
          { key: "D", text: "D. Two people. One bad idea." },
        ],
        correctKey: "D",
        result: {
          tamil: "D. Obviously. 😂",
          tanglish: "D. Obviously. 😂",
          english: "D. Obviously. 😂",
        },
      },
      {
        id: 6,
        question: {
          tamil: "One final serious question: If I say 'Let's just go somewhere.' What happens?",
          tanglish: "One final serious question: If I say 'Let's just go somewhere.' What happens?",
          english: "One final serious question: If I say 'Let's just go somewhere.' What happens?",
        },
        options: [
          { key: "A", text: "A. We plan properly" },
          { key: "B", text: "B. We go immediately" },
          { key: "C", text: "C. We spend 2 hours deciding" },
          { key: "D", text: "D. Somehow we end up eating" },
        ],
        correctKey: "D",
        result: {
          tamil: "Probably D. 😂",
          tanglish: "Probably D. 😂",
          english: "Probably D. 😂",
        },
      },
    ],
  },

  // 7. RAPID FIRE
  rapidFire: {
    tamil: {
      heading: "Machan — Rapid Fire ⚡",
      subheading: "Quick choices. No overthinking.",
      endQuote1: "Interesting...",
      endQuote2: "I'll remember these answers.",
      endQuote3: "Maybe. 👀",
    },
    tanglish: {
      heading: "Machan — Rapid Fire ⚡",
      subheading: "Quick choices. No overthinking.",
      endQuote1: "Interesting...",
      endQuote2: "I'll remember these answers.",
      endQuote3: "Maybe. 👀",
    },
    english: {
      heading: "Machan — Rapid Fire ⚡",
      subheading: "Quick choices. No overthinking.",
      endQuote1: "Interesting...",
      endQuote2: "I'll remember these answers.",
      endQuote3: "Maybe. 👀",
    },
    pairs: [
      { id: 1, optA: "Tea ☕", optB: "Coffee 🧋" },
      { id: 2, optA: "Beach 🌊", optB: "Mountains ⛰️" },
      { id: 3, optA: "Morning ☀️", optB: "Midnight 🌙" },
      { id: 4, optA: "Food 🍕", optB: "Sleep 😴" },
      { id: 5, optA: "Plan everything 📋", optB: "Just go 🚀" },
      { id: 6, optA: "Call 📞", optB: "Text 💬" },
      { id: 7, optA: "One peaceful day 🧘‍♂️", optB: "One chaotic day 🤪" },
      { id: 8, optA: "Describe me in one word", isInput: true },
    ],
  },

  // 8. CHOOSE OUR NEXT MEMORY
  nextMemory: {
    tamil: {
      heading: "அடுத்த memory என்ன?",
      subheading: "We've already made some beautiful memories. Now choose what we should add next.",
      approved: "Approved.",
      followup: "சரி... இப்போ அதை உண்மையிலேயே பண்ணணும்.",
    },
    tanglish: {
      heading: "Next memory enna?",
      subheading: "We've already made some beautiful memories. Now choose what we should add next.",
      approved: "Approved.",
      followup: "Sari... ippo adha nijamave pannanum.",
    },
    english: {
      heading: "What's Next?",
      subheading: "We've already made some beautiful memories. Now choose what we should add next.",
      approved: "Approved.",
      followup: "Now we just have to actually make it happen.",
    },
    options: [
      { id: "icecream", label: "Ice cream 🍦", desc: "Midnight dessert run" },
      { id: "drive", label: "Random drive 🚗", desc: "Windows down, zero destination" },
      { id: "photo", label: "Photo day 📸", desc: "Candid smiles & fun poses" },
      { id: "trip", label: "Mini trip 🌄", desc: "A quick escape together" },
      { id: "nonsense", label: "A full day of nonsense 😂", desc: "Driving akka crazy 24/7" },
    ],
  },

  // 9. EMOTIONAL TRANSITION
  emotionalTransition: {
    tamil: {
      heading: "ஒரு விஷயம் மட்டும் உண்மையா சொல்லணும்.",
      lines: [
        "I never planned this bond.",
        "I never imagined it would become this special.",
        "There were difficult days.",
        "But there were also days that made everything worth remembering.",
        "The conversations.",
        "The laughter.",
        "The teasing.",
        "The random outings.",
        "The ice cream.",
        "The photographs.",
        "The simple moments.",
        "Somehow, they all became memories I now miss.",
      ],
    },
    tanglish: {
      heading: "Oru vishayam mattum unmaiya sollanum.",
      lines: [
        "I never planned this bond.",
        "I never imagined it would become this special.",
        "There were difficult days.",
        "But there were also days that made everything worth remembering.",
        "The conversations.",
        "The laughter.",
        "The teasing.",
        "The random outings.",
        "The ice cream.",
        "The photographs.",
        "The simple moments.",
        "Somehow, they all became memories I now miss.",
      ],
    },
    english: {
      heading: "One thing I really wanted to tell you.",
      lines: [
        "I never planned this bond.",
        "I never imagined it would become this special.",
        "There were difficult days.",
        "But there were also days that made everything worth remembering.",
        "The conversations.",
        "The laughter.",
        "The teasing.",
        "The random outings.",
        "The ice cream.",
        "The photographs.",
        "The simple moments.",
        "Somehow, they all became memories I now miss.",
      ],
    },
  },

  // 10. HEARTFELT BIRTHDAY MESSAGE
  heartfeltWish: {
    tamil: {
      salutation: "மச்சான்,",
      paragraphs: [
        "உங்களோட இந்த birthday-க்கு உங்களுக்கு நிறைய சந்தோஷம், நிம்மதி, வெற்றி, அதைவிட நிறைய சிரிக்கிற moments கிடைக்கணும் என்று மனசார wish பண்றேன்.",
        "நீங்கள் நினைக்கிற எல்லாமே நல்லபடியாக நடக்கணும். நீங்கள் எதை achieve பண்ணணும்னு நினைக்கிறீர்களோ, அதை எல்லாம் அடையணும்.",
        "உங்களை உண்மையாவே care பண்ணுற மனிதர்கள் எப்போதும் உங்களை சுற்றி இருக்கணும்.",
        "இன்னைக்கு நீங்கள் எப்படி இருக்கிறீர்களோ, அந்த நல்ல மனசு எப்போதும் அப்படியே இருக்கணும்.",
        "என்னோட வாழ்க்கையில நீங்கள் இவ்வளவு special-ஆ ஒரு part ஆகிட்டதுக்கு thank you.",
        "நம்ம conversations, laughs, random moments, எல்லா memories-க்கும் thank you.",
        "நான் எப்போதும் சொல்லாமல் இருக்கலாம்... ஆனா நம்ம bond-ஐ நான் உண்மையாவே ரொம்ப value பண்றேன்.",
      ],
      closing: "இனிய பிறந்தநாள் வாழ்த்துக்கள் மச்சான். ❤️",
    },
    tanglish: {
      salutation: "Machan,",
      paragraphs: [
        "Ungal birthday-ku ungalukku neraya happiness, peace, success, and countless reasons to smile kedaikkanum-nu heartful-ah wish panren.",
        "Neenga edha achieve pannanum-nu nenakkureenga-vo, adhellam nadakkanum.",
        "Ungalai genuinely care panra people eppovume ungal pakkathula irukkanum.",
        "Innaikku neenga eppadi irukkeenga-vo, andha nalla manasu eppovume apdiye irukkanum.",
        "En life-la neenga ivlo special-ah oru part aayittadhukku thank you.",
        "Namma conversations, laughs, random moments, memories ellathukkum thank you.",
        "Naan eppovume sollama irukkalam... Aana namma bond-ah naan genuinely romba value panren.",
      ],
      closing: "Happy Birthday, Machan. ❤️",
    },
    english: {
      salutation: "Machan,",
      paragraphs: [
        "On your birthday, I just want to wish you a life filled with happiness, peace, success and countless reasons to smile.",
        "I hope you achieve everything you're working towards.",
        "I hope you always have people around you who genuinely care about you.",
        "And I hope you never lose the person you are today.",
        "Thank you for becoming such a special part of my life.",
        "Thank you for the laughs, the conversations, the random moments and all the memories we've created.",
        "I may not always say it... but I genuinely value you and the bond we share.",
      ],
      closing: "Happy Birthday, Machan. ❤️",
    },
  },

  // 11. UNTIL NOW
  untilNow: {
    tamil: {
      title: "UNTIL NOW.",
      subtitle: "இதுவரைக்கும் நாம சேர்த்து வைத்த memories.",
      but: "But...",
      notEnd: "This isn't the end.",
      notClose: "NOT EVEN CLOSE.",
    },
    tanglish: {
      title: "UNTIL NOW.",
      subtitle: "Idhuvaraikkum naam serthu vechurukkura memories.",
      but: "But...",
      notEnd: "This isn't the end.",
      notClose: "NOT EVEN CLOSE.",
    },
    english: {
      title: "UNTIL NOW.",
      subtitle: "These are the memories we've made so far.",
      but: "But...",
      notEnd: "This isn't the end.",
      notClose: "NOT EVEN CLOSE.",
    },
  },

  // 12. MORE TO COME
  moreToCome: {
    tamil: {
      heading: "இன்னும் வரப்போகுது...",
      subheading: "நம்ம best memories இன்னும் உருவாகவே இல்லை.",
      comingSoon: "இன்னும் வரப்போகுது...",
    },
    tanglish: {
      heading: "Innum varapogudhu...",
      subheading: "Namma best memories innum create aagave illa.",
      comingSoon: "Coming soon...",
    },
    english: {
      heading: "More To Come",
      subheading: "We haven't made the best memories yet.",
      comingSoon: "Coming soon...",
    },
    cards: [
      { id: "trip", title: "Next Trip", icon: "🌄" },
      { id: "icecream", title: "Next Ice Cream", icon: "🍦" },
      { id: "plan", title: "Next Random Plan", icon: "🚗" },
      { id: "photo", title: "Next Photo", icon: "📸" },
      { id: "laugh", title: "Next Laugh", icon: "😂" },
      { id: "memory", title: "Next Memory", icon: "✨" },
    ],
  },

  // 13. FINAL SURPRISE
  finalSurprise: {
    tamil: {
      wait: "ஒரு நிமிஷம்...",
      button: "One Last Thing ❤️",
      message: `Machan,
If I had to choose one thing from all these memories...
I wouldn't choose a particular photo.
I'd choose the feeling.
The feeling of having people who became family.
The feeling of laughing over absolutely nothing.
The feeling of knowing there are still more memories waiting.
We've already come this far.
And I hope this is only the beginning of many more years, trips, laughs, conversations, food, photos and nonsense.
This website is just a small collection of what we have until now.
The rest...
We haven't lived yet.`,
      closing: "Happy Birthday, Machan. ❤️",
    },
    tanglish: {
      wait: "Wait... oru nimisham...",
      button: "One Last Thing ❤️",
      message: `Machan,
If I had to choose one thing from all these memories...
I wouldn't choose a particular photo.
I'd choose the feeling.
The feeling of having people who became family.
The feeling of laughing over absolutely nothing.
The feeling of knowing there are still more memories waiting.
We've already come this far.
And I hope this is only the beginning of many more years, trips, laughs, conversations, food, photos and nonsense.
This website is just a small collection of what we have until now.
The rest...
We haven't lived yet.`,
      closing: "Happy Birthday, Machan. ❤️",
    },
    english: {
      wait: "Wait...",
      button: "One Last Thing ❤️",
      message: `Machan,
If I had to choose one thing from all these memories...
I wouldn't choose a particular photo.
I'd choose the feeling.
The feeling of having people who became family.
The feeling of laughing over absolutely nothing.
The feeling of knowing there are still more memories waiting.
We've already come this far.
And I hope this is only the beginning of many more years, trips, laughs, conversations, food, photos and nonsense.
This website is just a small collection of what we have until now.
The rest...
We haven't lived yet.`,
      closing: "Happy Birthday, Machan. ❤️",
    },
  },

  // 14. FINAL SCREEN
  finalScreen: {
    tamil: {
      heading: "இனிய பிறந்தநாள் வாழ்த்துக்கள், மச்சான் ❤️",
      line1: "நம்ம memories இவ்வளவு தான் இப்போதைக்கு.",
      line2: "இன்னும் நிறைய memories வரப்போகுது.",
      toBeContinued: "தொடரும்...",
      footer: "Made with love, laughter & a little bit of nonsense.",
    },
    tanglish: {
      heading: "Happy Birthday, Machan ❤️",
      line1: "Namma memories idhuvaraikkum.",
      line2: "Innum neraya memories varapogudhu.",
      toBeContinued: "To be continued...",
      footer: "Made with love, laughter & a little bit of nonsense.",
    },
    english: {
      heading: "HAPPY BIRTHDAY, MACHAN ❤️",
      line1: "Our memories so far.",
      line2: "More memories to come.",
      toBeContinued: "TO BE CONTINUED...",
      footer: "Made with love, laughter & a little bit of nonsense.",
    },
  },
};
