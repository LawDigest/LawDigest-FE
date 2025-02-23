'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Card, CardBody, Chip, Pagination, Button, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { IconNext, IconPrev, IconEnter } from '@/public/svgs';
import TimelineModal from './TimelineModal';

export default function SubmittedList({
  submitted_list,
}: {
  submitted_list: {
    bill_brief_summary: string;
    bill_id: string;
    bill_name: string;
    bill_proposers: string;
    bill_stage: string;
    party_info: {
      party_id: number;
      party_image_url: string;
      party_name: string;
    }[];
  }[];
}) {
  // 접수된법안
  const [currentPage, setCurrentPage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col gap-5 ">
      <div className="relative">
        <div className="bg-gray-3 dark:bg-gray-4 w-[10px] h-[10px] rounded-full border border-black absolute -left-[30px] top-4" />
        <div className="flex items-center justify-between">
          <h3 className="text-[26px] font-extralight">법안 접수</h3>
          {submitted_list.length !== 0 && (
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-2 dark:text-gray-3">
                접수된 법안 <span className="text-black dark:text-white">{submitted_list.length}개</span>
              </p>
              <Button isIconOnly size="sm" className="w-4 h-4 p-0 bg-transparent" onClick={() => onOpen()}>
                <IconEnter />
              </Button>
              <TimelineModal isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col gap-3">
                  {submitted_list.map(({ party_info, bill_id, bill_proposers, bill_brief_summary }) => (
                    <div key={bill_id} className="flex gap-[18px] items-center">
                      <Link
                        href={`/party/${party_info[0].party_id}`}
                        className={`flex items-center justify-center w-7 h-7 rounded-full shadow-lg shrink-0 border-1.5 ${party_info[0].party_name}`}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? party_info[0].party_image_url.replace('wide', 'dark') : party_info[0].party_image_url}`}
                          alt={`${party_info[0].party_name} 로고 이미지`}
                          width={22}
                          height={22}
                        />
                      </Link>
                      <div className="flex flex-col gap-1">
                        <Link href={`/bill/${submitted_list[currentPage].bill_id}`}>
                          <p className="text-xs font-bold">{bill_brief_summary}</p>
                        </Link>
                        <p className="text-xs font-semibold text-gray-2">{bill_proposers}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TimelineModal>
            </div>
          )}
        </div>
      </div>
      <div>
        <Card className="z-10 overflow-visible">
          <CardBody className="py-3 overflow-visible">
            {submitted_list.length !== 0 ? (
              <div>
                <Link
                  href={`/party/${submitted_list[currentPage].party_info[0].party_id}`}
                  className={`absolute -left-[39px] flex items-center justify-center w-7 h-7 rounded-full shadow-lg shrink-0 border-1.5 bg-white dark:bg-dark-b ${submitted_list[currentPage].party_info[0].party_name}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? submitted_list[currentPage].party_info[0].party_image_url.replace('wide', 'dark') : submitted_list[currentPage].party_info[0].party_image_url}`}
                    alt={`${submitted_list[currentPage].party_info[0].party_name} 로고 이미지`}
                    width={22}
                    height={22}
                  />
                </Link>
                <div className="flex flex-col w-full gap-2">
                  <Link href={`/bill/${submitted_list[currentPage].bill_id}`}>
                    <p className="text-sm font-bold">{submitted_list[currentPage].bill_brief_summary}</p>
                  </Link>
                  <div className="flex items-center gap-[6px]">
                    <Chip
                      variant="bordered"
                      className="text-xs border-gray-1 dark:border-gray-2 text-gray-2 dark:text-gray-3 border-[1px]"
                      size="sm"
                      radius="sm">
                      {submitted_list[currentPage].bill_stage}
                    </Chip>
                    <p className="text-xs font-semibold text-gray-2 dark:text-gray-3">
                      {submitted_list[currentPage].bill_proposers}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm font-bold text-center">접수된 법안이 없습니다.</p>
            )}
          </CardBody>
        </Card>
        <Card className="w-[calc(100%-20px)] mx-auto -top-[14px] z-[5]">
          <CardBody />
        </Card>
        <Card className="w-[calc(100%-40px)] mx-auto -top-[28px]">
          <CardBody />
        </Card>
        {submitted_list.length !== 0 && (
          <div className="flex items-center justify-between">
            <Button
              isIconOnly
              size="sm"
              className="p-0 bg-transparent"
              onPress={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : submitted_list.length - 1))}>
              <IconPrev />
            </Button>
            <Pagination
              total={submitted_list.length}
              page={currentPage + 1}
              onChange={setCurrentPage}
              classNames={{
                item: 'bg-gray-1 text-transparent border-none shadow-none w-[6px] h-[6px]',
                cursor: 'bg-gray-3 text-transparent w-[6px] h-[6px]',
              }}
            />
            <Button
              isIconOnly
              size="sm"
              className="p-0 bg-transparent"
              onPress={() => setCurrentPage((prev) => (prev < submitted_list.length - 1 ? prev + 1 : 0))}>
              <IconNext />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
