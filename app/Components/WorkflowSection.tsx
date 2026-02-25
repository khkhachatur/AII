"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; 
import Container from "./Container";
import InfiniteSlider from "./InfiniteSlider";
import { workflowGalleries, ModelName } from "../lib/data";
import TabButton from "./TabButton";

const WorkflowSection = () => {
  const searchParams = useSearchParams();
  const [activeModel, setActiveModel] = useState<ModelName>("NIKKA");
  const models: ModelName[] = ["HANNAH", "ROXY", "AMINA", "NIKKA"];

  useEffect(() => {
    const modelQuery = searchParams.get("model") as ModelName;
    if (modelQuery && models.includes(modelQuery)) {
      setActiveModel(modelQuery);
    }
  }, [searchParams]);

  return (
    <section id="workflow" className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <Container className="px-4 md:px-8 flex flex-col gap-16 md:gap-24">
    
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <h2 className="text-black font-black text-4xl md:text-6xl uppercase tracking-tight">
              Workflow
            </h2>
            <p className="text-black/70 font-semibold text-[10px] md:text-xs tracking-[0.15em] uppercase">
              How it works
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4">
  {models.map((model) => (
    <TabButton
      key={model}
      onClick={() => setActiveModel(model)}
      isActive={activeModel === model}
    >
      {model}
    </TabButton>
  ))}
</div>
        </div>

        <InfiniteSlider 
          key={activeModel} 
          images={workflowGalleries[activeModel]} 
          duration={35} 
        />

        <div className="flex flex-col gap-20 w-full relative">
          <div className="flex justify-start">
            <div className="max-w-sm">
              <h3 className="text-black font-black text-xl md:text-2xl uppercase italic">01 / Select</h3>
              <p className="text-black/80 font-medium text-[10px] md:text-xs tracking-[0.1em] uppercase leading-relaxed mt-2">
                Choose a face from our roster or collaborate with our team to design your custom avatar.
              </p>
            </div>
          </div>

          <div className="flex justify-end text-right">
            <div className="max-w-sm">
              <h3 className="text-black font-black text-xl md:text-2xl uppercase italic">02 / Brief</h3>
              <p className="text-black/80 font-medium text-[10px] md:text-xs tracking-[0.1em] uppercase leading-relaxed mt-2">
                Submit your campaign goals and preferred aesthetics. We handle the technical prompts.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-sm">
              <h3 className="text-black font-black text-xl md:text-2xl uppercase italic">03 / Launch</h3>
              <p className="text-black/80 font-medium text-[10px] md:text-xs tracking-[0.1em] uppercase leading-relaxed mt-2">
                Our engine produces photorealistic, multi-platform assets tailored for immediate deployment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowSection;