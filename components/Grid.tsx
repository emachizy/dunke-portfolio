import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

export default function Grid() {
  return (
    <BentoGrid className="md:max-w-6xl mx-auto gap-10 md:gap-6">
      {gridItems.map(
        ({
          // className,
          title,
          description,
          img,
          imgClassName,
          titleClassName,
          spareImg,
          id,
        }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            className={id === 4 ? "md:col-span-2 " : ""}
          />
        )
      )}
    </BentoGrid>
  );
}
