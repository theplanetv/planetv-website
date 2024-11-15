import H1 from "@/components/H1";
import H2 from "@/components/H2";

export default function DisplayProjects(): JSX.Element {
  return (
    <div className="mx-auto py-20 w-fit flex flex-col gap-y-10">
      <H1>Projects I work on</H1>

      <ul className="flex flex-col gap-y-5 list-disc">
        <H2>Open source projects</H2>

        <div>
          <li><a className="underline" href="https://github.com/theplanetv/planetv-website">PlanetV Website</a></li>
          <li><a className="underline" href="https://github.com/BambooEngine/ibus-bamboo">ibus-bamboo</a></li>
        </div>
      </ul>
    </div>
  )
}
