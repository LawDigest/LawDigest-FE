import { useQueryClient } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { IconWeb } from '@/public/svgs';
import FollowBoard from './FollowBoard';
import { useGetCongressmanDetail } from '../../apis';
import PartyLogo from './PartyLogo';

export default async function CongressmanDetail({ congressmanId }: { congressmanId: string }) {
  const queryClient = useQueryClient();
  const { data: congressman } = await useGetCongressmanDetail({ congressmanId, queryClient });
  const {
    congressman_name,
    party_id,
    party_name,
    party_image_url,
    district,
    commits,
    elected,
    congressman_image_url,
    like_checked,
    represent_count,
    public_count,
    homepage,
    office,
    email,
    age,
    gender,
    follow_count,
    brief_history,
    telephone,
  } = congressman;

  return (
    <Card
      className={`mx-5 md:mx-auto xl:mx-0 mt-5 py-4 px-7 border-1.5 flex flex-col items-center gap-5 mb-4 dark:bg-dark-b xl:h-min md:w-[430px] xl:w-[320px] shrink-0 lg:dark:bg-dark-pb ${party_name} shadow-md rounded-md`}>
      <PartyLogo party_id={party_id} party_name={party_name} party_image_url={party_image_url} />

      <div className="flex gap-5 justify-between w-full">
        <Avatar className="w-[100px] h-[100px] border-1.5 shadow-lg shrink-0 rounded-full">
          <AvatarImage src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url} />
          <AvatarFallback>{congressman_name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-between py-3 w-[65%] items-end text-right">
          <h3 className="text-2xl font-semibold">{congressman_name} 의원</h3>
          <p className="text-sm text-gray-2">
            {district} {elected}
          </p>
          <p className="text-xs">{commits}</p>
        </div>
      </div>

      <Separator className="bg-gray-1 dark:bg-dark-l" />

      <FollowBoard
        id={congressmanId}
        likeChecked={like_checked}
        follow_count={follow_count}
        represent_count={represent_count}
        public_count={public_count}
      />

      <Separator className="bg-gray-1 dark:bg-dark-l" />

      <div className="flex flex-col gap-2 w-full md:flex-row lg:flex-col">
        <Badge className="text-sm font-medium text-white bg-primary-3 dark:bg-gray-4 dark:text-gray-1 w-[78px] h-8 flex items-center justify-center">
          기본정보
        </Badge>

        <div className="ml-3 w-full">
          <div className="flex gap-2 justify-between items-center">
            <p className="font-medium text-gray-2 dark:text-gray-3 shrink-0">나이</p>
            <p className="text-sm font-medium dark:text-gray-1 w-[80%] break-words text-end">
              {age ? `${age} 세` : '-'}
            </p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <p className="font-medium text-gray-2 dark:text-gray-3 shrink-0">성별</p>
            <p className="text-sm font-medium dark:text-gray-1 w-[80%] break-words text-end">{gender || '-'}</p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <p className="font-medium text-gray-2 dark:text-gray-3 shrink-0">번호</p>
            <p className="text-sm font-medium dark:text-gray-1 w-[80%] break-words text-end">{telephone || '-'}</p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <p className="font-medium text-gray-2 dark:text-gray-3 shrink-0">이메일</p>
            <p className="w-[80%] text-sm font-medium break-words dark:text-gray-1 text-end">{email || '-'}</p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <p className="font-medium text-gray-2 dark:text-gray-3 shrink-0">의원실</p>
            <p className="text-sm font-medium break-words dark:text-gray-1 w-[80%] text-end">{office || '-'}</p>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>후보 약력 더보기</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5 pt-4 h-full">
              <p className="text-sm font-medium whitespace-pre-line text-gray-3 dark:text-gray-2">
                {brief_history
                  ? brief_history.replaceAll('&middot;', '·').replaceAll('&nbsp;', '').replaceAll('&#39;', `'`)
                  : '해당 의원의 약력이 존재하지 않습니다.'}
              </p>

              <Button
                asChild
                variant="outline"
                className="w-[135px] h-8 text-gray-2 mx-auto border-gray-1 dark:border-gray-2 dark:text-gray-3 rounded-full">
                <Link href={homepage}>
                  홈페이지 방문
                  <IconWeb />
                </Link>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
