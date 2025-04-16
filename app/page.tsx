import Image from "next/image";
import HeroSplit from "@/components/mdb/components/blocks/HeroSplit";
import PaperBlock from "@/components/mdb/components/blocks/PaperBlock";
import Card from "@/public/cardex1.png";
import Ororo from "@/public/ororo.png";
import TexturedOverlay from "@/components/mdb/components/overlays/TexturedOverlay";

export default function Home() {
  return (
    <>
      <HeroSplit
        title="Powerful, Simple UI"
        subtitle="Start building apps with depth and elegance"
        media={
          <>
            <PaperBlock
              className="rounded-xl shadow-xl"
              children={
                <>
                  <PaperBlock
                    className="rounded-xl shadow-xl"
                    background="default"
                    padding="p-4"
                    children={
                      <>
                        <Image
                          src={Card}
                          alt="Mongo-style UI preview"
                          className="rounded-xl shadow-xl"
                          width={500}
                          height={500}
                          priority
                        />
                      </>
                    }
                  />
                  <TexturedOverlay
                    position="above"
                    textureUrl="/textures/paper-light2.jpg"
                    className="target-texture-overlay"
                  >
                    <PaperBlock
                      className="rounded-xl shadow-xl"
                      background="default"
                      padding="p-4"
                      children={
                        <Image
                          src={Card}
                          alt="Mongo-style UI preview"
                          className="rounded-xl shadow-xl"
                          width={500}
                          height={500}
                          priority
                        />
                      }
                    />
                    <Image
                      src={Card}
                      alt="Mongo-style UI preview"
                      className="rounded-xl shadow-xl"
                      sizes="100vw"
                      width={500}
                      height={500}
                      priority
                    />
                  </TexturedOverlay>
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
