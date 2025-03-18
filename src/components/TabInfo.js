export default function TabInfo({ info }) {
  return info === "info" ? (
    <p>
      Hey there!
      <br />
      <br />
      I'm a passionate software developer with hands-on experience from
      companies, internships, and coding camps, where I've honed my skills in
      building efficient and innovative solutions.
      <br />
      <br />
      Beyond coding, I stay active by playing sports, which fuels my teamwork
      and problem-solving mindset. I'm always eager to learn, adapt, and tackle
      new challenges in the tech world.
    </p>
  ) : info === "goal" ? (
    <p>
      My dream to become a developer began years ago and I have worked very
      diligently at it. From app wide code breaks to minor UI issues, I have
      solved them all.
      <br />
      <br />
      After many trials and tribulations I was finally ready to call myself a
      software developer.
      <br />
      <br />
      My goal is to have a very long career in the computer science industry and
      further increase my knowledge as the years progress.
      <br />
    </p>
  ) : (
    <p>
      I dabbled in a bit of engineering when I was in middle school by joining
      the robotics club.
      <br />
      <br /> Some of my other hobbies include film making, video editing, music
      producing, and working out.
      <br />
      <br /> My favorite pastime is spent keeping myself active.
    </p>
  );
}
