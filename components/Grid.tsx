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

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {gridItems.map(
        ({
          className,
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
            className={id === 3 || id === 6 ? "md:col-span-2" : "",}
          />
        )
      )}
    </BentoGrid>
  );
}
