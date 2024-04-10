import { useQueryClient } from '@tanstack/react-query';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Chip } from '@nextui-org/chip';
import Image from 'next/image';
import { useGetCandidateDetail } from '../../apis';

export default async function CandidateProfile({ candidateId, type }: { candidateId: number; type: string | null }) {
  const queryClient = useQueryClient();
  const { data: candidate } = await useGetCandidateDetail({ queryClient, candidateId, type });
  const {
    name,
    city_name,
    district_name,
    party_image_url,
    career1,
    career2,
    gender,
    age,
    edu,
    district_candidate_image,
  } = candidate;

  return (
    <section className="flex flex-col gap-8 mx-5">
      <Card className="py-[26px] px-[30px] flex flex-row gap-6 h-[156px]">
        {district_candidate_image !== null ? (
          <Avatar
            src={process.env.NEXT_PUBLIC_IMAGE_URL + district_candidate_image}
            className="w-[104px] h-[104px] object-cover border"
          />
        ) : (
          <Image src="/images/basicAvatar.png" width={104} height={104} alt={`${name} 후보자 대체 이미지`} />
        )}

        <div className="flex flex-col justify-between ">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{name} 후보자</h2>
            <p className="text-sm font-medium text-gray-3">
              {city_name} {district_name}
            </p>
          </div>

          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
            width={100}
            height={40}
            alt="정당 로고 이미지"
            className="w-[100px] h-[40px] object-cover"
          />
        </div>
      </Card>

      <div className="flex gap-6">
        <Chip className="text-white bg-primary-3">기본정보</Chip>

        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <p className="font-medium text-gray-2 shrink-0">약력</p>
            <div className="text-sm font-medium">
              <p>{career1}</p>
              <p>{career2}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="font-medium text-gray-2 shrink-0">나이</p>
            <p className="text-sm font-medium">{age}세</p>
          </div>
          <div className="flex gap-5">
            <p className="font-medium text-gray-2 shrink-0">성별</p>
            <p className="text-sm font-medium">{gender}</p>
          </div>
          <div className="flex gap-5">
            <p className="font-medium text-gray-2 shrink-0">학력</p>
            <p className="text-sm font-medium">{edu}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
