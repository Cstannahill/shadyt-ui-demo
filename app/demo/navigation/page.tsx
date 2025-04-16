"use client";

import Tabs from "@/components/mdb/components/navigation/Tabs";
import Pagination from "@/components/mdb/components/navigation/Pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import CardGroup from "@/components/mdb/components/layout/CardGroup";
import PaperBlock from "@/components/mdb/components/blocks/PaperBlock";
import FeatureGrid from "@/components/mdb/components/blocks/FeatureGrid";

export default function NavigationDemoPage() {
  const [tab, setTab] = useState("overview");
  const [features, setFeatures] = useState([]);
  const [pag, setPag] = useState({
    current: 1,
    maxVisible: 4,
    total: 111,
    index: 0,
  });
  const featuresPics = [
    "prpl/prpl.png",
    "port.png",

    "prpl/prpl2.png",
    "prpl/prpl3.png",
    "prpl/prpl4.png",
    "prpl/prpl5.png",
    "prpl/prpl6.png",
    "prpl/prpl7.png",
    "prpl/prpl8.png",
    "prpl/prpl9.png",
    "prpl/prpl10.png",
    "prpl/prpl11.png",
    "prpl/prpl12.png",
    "prpl/prpl13.png",
    "prpl/prpl14.png",
    "prpl/prpl15.png",
    "prpl/prpl16.png",
    "prpl/prpl17.png",
    "prpl/prpl18.png",
    "prpl/prpl19.png",
    "prpl/prpl20.png",
    "prpl/prpl21.png",
    "prpl/prpl22.png",
    "prpl/prpl23.png",
    "prpl/prpl24.png",
    "prpl/prpl25.png",

    "kanban.png",
    "kanban2.png",
    "kanban3.png",

    "ororo1.png",

    "ororo4.png",
    "ororo5.png",
    "ororo6.png",
    "ororo7.png",
    "ororo8.png",
    "ororo9.png",
    "ororo10.png",
    "ps.png",
    "ps1.png",
    "ps2.png",
    "ps3.png",
    "menu-view.png",
    "events-page.png",
    "carte-analytics.png",
    "carte-analytics2.png",
    "carte-pie.png",
    "carte-pie2.png",
    "CarteTables.png",
    "hsk-room.png",
    "image1.png",
    "image2.png",
    "image3.png",
    "image5.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
  ];
  useEffect(() => {
    const currentPage = pag.current || 1;
    const start = (currentPage - 1) * pag.maxVisible;
    const end = start + pag.maxVisible;

    const totalAr = featuresPics.length;
    const totalPg = Math.ceil(totalAr / pag.maxVisible);
    const sliced = featuresPics.slice(start, end); // ✅ Use slice (non-mutating)

    const mappedFeats = sliced.map(mapFeatures);

    setPag((prev) => ({
      ...prev,
      current: currentPage,
      total: totalPg,
      index: currentPage - 1,
    }));

    setFeatures(mappedFeats);
    console.log("PageData", start, end, totalPg, currentPage);
  }, [pag.current, pag.maxVisible]);

  const mapFeatures = (pic) => {
    return (
      <PaperBlock
        background="default"
        className="items-center justify-evenly m-0 w-100 h-auto"
        padding="p-0"
        key={"paper" + pic + Math.random()}
      >
        <Image
          key={"pic" + Math.random()}
          src={`/${pic}`}
          alt="Placeholder"
          // layout="responsive"
          width={4000}
          height={4000}
          style={{ width: "45vw", height: "auto" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg"
          priority
        ></Image>
      </PaperBlock>
    );
  };
  const getIcon = (type = "ico") => {
    switch (type) {
      case "ico":
        return (
          <>
            <Image
              src="/icons/typescript.ico"
              alt="TypeScript"
              width={24}
              height={24}
              className="mr-2"
            />
          </>
        );

        break;
      case "/tech/next.svg":
        return (
          <>
            <Image
              className="dark:invert"
              src="/tech/next.svg"
              alt="Vercel logomark"
              width={60}
              height={60}
            />
          </>
        );
        break;
      default:
        return (
          <>
            <Image
              src={type}
              alt="Icon"
              width={24}
              height={24}
              className="mr-2"
            />
          </>
        );
    }
  };
  const TSIcon = getIcon("ico");
  const TWIcon = getIcon("/tech/tailwind.svg");
  const NextIcon = getIcon("/tech/next.svg");
  const getPricing = () => {
    return (
      <FeatureGrid
        title="About this Library"
        subtitle="What base technologies are used in this library?"
        columns={2}
        features={[
          {
            title: "TypeScript",
            description: "TypeScript for type safety.",
            icon: TSIcon,
          },
          {
            title: "Tailwind CSS",
            description:
              "Tailwind CSS for consistent styling, utilities, and responsive design.",
            icon: TWIcon,
          },
          {
            title: "Next JS",
            description: "This demo for the library is built with Next.js",
            icon: NextIcon,
          },
        ]}
      />
    );
  };
  const pricing = getPricing();
  return (
    <>
      <section className="flex flex-col col-span-10 min-h-screen mt-0 mb-0">
        <h2 className="text-2xl font-bold mb-0 text-center">Tabs</h2>
        <Tabs
          tabListClassName="p-3 text-2xl gap-1 rounded-lg text-white"
          tabButtonClassName="text-lg border border-slate-700 rounded-lg font-medium  hover:text-white px-4 py-2"
          activeTabClassName="border-b-2 border-gray-200 text-stone-500 bg-gray-200/80"
          className="items-center justify-center"
          value={tab}
          onChange={(value) => setTab(value)}
          tabs={[
            {
              label: "Overview",
              value: "overview",
              content: (
                <>
                  <div className="flex flex-col mt-0 mb-0 items-center justify-center min-h-screen">
                    {" "}
                    <p className="text-white/80 text-sm text-center">
                      This is the overview tab.
                    </p>
                    <Image
                      src={"/CarteTables.png"}
                      alt="Placeholder"
                      objectFit="cover"
                      height={500}
                      width={1000}
                      className="rounded-lg"
                      priority
                    ></Image>
                  </div>
                  <div>
                    <p className="text-white/80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco
                    </p>
                  </div>
                  <div>
                    <p className="text-white/80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco
                    </p>
                  </div>
                  <div></div>
                </>
              ),
            },
            {
              label: "Features",
              value: "features",
              content: (
                <>
                  <CardGroup
                    maxWidth="full"
                    columns={2}
                    className="flex flex-col basis-full "
                  >
                    {features && features}{" "}
                  </CardGroup>
                </>
              ),
            },
            {
              label: "Pricing",
              value: "pricing",
              content: pricing,
            },
          ]}
          initialValue={tab}
        />
        {tab === "features" && (
          <Pagination
            currentPage={pag.current}
            totalPages={pag.total}
            onPageChange={(p) => setPag((prev) => ({ ...prev, current: p }))}
            className="text-white justify-center my-3 sticky bottom-2"
          />
        )}
      </section>
    </>
  );
}
