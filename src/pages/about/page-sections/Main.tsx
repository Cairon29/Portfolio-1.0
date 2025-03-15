import { ContactMeSection } from "../../../components/contactMeSection/ContactMeSection"

export const Main = () => {
  return (
    <main id="main-about">
      <article className="article-about">
        <div className="article-about-info">
          <h2 className="appearing-title">Who am I?</h2>
          <p>
              I'm a young man, eager to learn and grow, passionate about <b>cooking</b>, <b>art</b>, <b>volleyball</b>, <b>foreign languages</b>, <b>biology</b>, <b>video games</b>, and, of course, <b>technology</b>. Since I was a child, I have had a special place in my heart for <b>building with Legos</b>, and since then, this feeling has done nothing but evolve over time. In the tech industry, I have found a way to express my creativity and my passion for <b>building things</b>, and I'm looking forward to continuing to learn and grow in this field.
          </p>
        </div>
      </article>
      <article className="article-about">
        <div className="article-about-info">
          <h2 className="appearing-title">The best strenght</h2>
          <p>
              If I had to pick one strength I have <b>mastered the most</b> during my life, it would definitely be my <b>team work skill</b>. As I mentioned before, <b>volleyball</b> is one of my dearest hobbies, and as a volleyball player, I have learned that working with <b>people of different experience levels</b>, <b>skills</b>, <b>personalities</b>, <b>different ways of thinking</b>, and overall <b>commitment to the team</b> are the most important things to consider when facing a challenge. Understanding how to make the best of what we have right now is the <b>key to improvement</b>.    
          </p>
        </div>
      </article>
      <br />
      <ContactMeSection/>
    </main>
  )
}
