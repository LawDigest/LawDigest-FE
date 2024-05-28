/* eslint-disable no-nested-ternary */
import { PROGRESS_STAGE_KO } from '@/constants';
import { IconChecked, IconKebab, IconPointed } from '@/public/svgs';

export default function ProgressStage({ billStage }: { billStage: string }) {
  const progressStageList = Object.values(PROGRESS_STAGE_KO);
  const stageNum = progressStageList.indexOf(billStage);

  return (
    <section className="flex justify-center">
      <div>
        {progressStageList.map((stage, index) => (
          <div
            key={stage}
            className={`text-sm font-medium ${index < stageNum ? 'text-gray-2' : index > stageNum ? 'text-gray-1' : 'text-black'}`}>
            <div className="flex items-center gap-7">
              {index < stageNum ? (
                <IconChecked />
              ) : index === stageNum ? (
                <IconPointed />
              ) : (
                <div className="flex items-center justify-center w-5 h-5 text-white rounded-full bg-gray-1">
                  {index + 1}
                </div>
              )}
              <p>STEP 0{index + 1}</p>
              <p>{stage}</p>
            </div>
            {index !== 5 && <IconKebab isPassed={index < stageNum} />}
          </div>
        ))}
      </div>
    </section>
  );
}
