export default function TabInfo({ info }) {
  return info === "info" ? (
    <p>
      Hey there!
      <br />
      <br />
      Some of these projects were part of the courses I took on Udemy.com, while
      others were passion projects I worked on in my free time.
      <br />
      <br />
      Overall, I am very proud of these projects and it brings me great joy to
      be able to share them with you!
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </p>
  ) : info === "goal" ? (
    <p>
      My dream to become a developer began years ago in middle school. This
      dream, however, was only set into motion a year ago when a relative of
      mine introduced me to the computer science scene and made me aware of the
      endless possibilites in this field.
      <br />
      <br />
      After many arduous sites and courses I was finally ready to call myself a
      web developer.
      <br />
      <br />
      My goal is to have a very long career in the computer science industry and
      further increase my knowledge as the years progress
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </p>
  ) : info === "hobbies" ? (
    <p>
      I dabbled in a bit of engineering when I was in middle school by joining
      the robotics club.
      <br />
      <br /> As I grew older my height, physique, and athleticism had improved
      as well so I partook in some sports.
      <br />
      <br /> My favorite ones being track and basketball.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </p>
  ) : (
    ""
  );
}
