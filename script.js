const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.35
});


document.querySelectorAll(".hidden").forEach(section => {

    observer.observe(section);

});


/* =========================
   FINAL LETTER TYPEWRITER
========================= */

const letterContent = document.querySelector(".letter-content");
const letterText = document.querySelector("#typed-letter");
const signature = document.querySelector("#signature");

const letter = `Hey, baby.

Before anything else, I want to say that I'm genuinely sorry for what I did last night.

I know that some of my actions and the way I handled things were wrong. I put pressure on you when I should have been giving you understanding and space. I let my emotions take control of the way I treated you, and that's something I need to take responsibility for.

I'm not saying sorry just because I feel guilty about it. I'm sorry because I recognize that what I did was wrong, and you didn't deserve to be treated that way.

I know that saying sorry doesn't automatically fix everything. I also know that I can't just promise that I'll do better and expect everything to change immediately. I want to actually show you through my actions that I'm learning from this.

I want to become someone who can communicate better, listen better, and handle difficult moments without making you carry the weight of my emotions too.

You don't have to be perfect, and neither am I. We're both still learning, and I know there will be difficult days. But I don't want those difficult days to define us.

And now, please don't forget about yourself too.

Your exams are coming, and I know you might be tired or nervous, but I believe in you. You are capable of more than you sometimes give yourself credit for.

Take things one step at a time. Rest when you need to. Drink some water. Breathe. Don't be too hard on yourself.

You don't have to have everything figured out all at once.

Just do your best, baby. That's enough.

And whatever happens, I'm rooting for you.

I hope you know that I'm proud of you for continuing to try, even when things get difficult.

Let's get through these exams first, okay?

And after that, we'll keep taking things one step at a time.

Together.

I love you so much, maye.

Good luck on your exams. You've got this. ❤️`;


let index = 0;
let typingStarted = false;


/* =========================
   TYPEWRITER FUNCTION
========================= */

function typeLetter() {

    if (index < letter.length) {

        letterText.textContent += letter.charAt(index);

        index++;

        /*
         * Different speeds make the
         * typing feel more natural.
         */

        let speed = 28;

        if (letter.charAt(index - 1) === ".") {

            speed = 350;

        }

        else if (letter.charAt(index - 1) === ",") {

            speed = 180;

        }

        else if (letter.charAt(index - 1) === "\n") {

            speed = 500;

        }

        setTimeout(typeLetter, speed);

    }

    else {

        setTimeout(() => {

            signature.classList.add("show-signature");

        }, 500);

    }

}


/* =========================
   START WHEN SCROLLED INTO VIEW
========================= */

const letterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !typingStarted) {

            typingStarted = true;

            letterContent.classList.add("show-letter");

            setTimeout(() => {

                typeLetter();

            }, 1000);

        }

    });

}, {
    threshold: 0.25
});


/* Start observing the letter */

if (letterContent) {

    letterObserver.observe(letterContent);

}

