'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody, CardHeader, Pagination, Button, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { IconEnter, IconNext, IconPrev } from '@/public/svgs';
import TimelineModal from './TimelineModal';

export default function CommitteeAuditList({
  committee_audit_list,
}: {
  committee_audit_list: {
    committee_name: string;
    bill_count: number;
    bill_outline_dto_list: {
      party_info: {
        party_id: number;
        party_name: string;
        party_image_url: string;
      }[];
      bill_id: string;
      bill_name: string;
      bill_stage: string;
      bill_proposers: string;
      bill_brief_summary: string;
    }[];
  }[];
}) {
  // 위원회심사
  const [currentPage, setCurrentPage] = useState(0);
  const { isOpen: isOpenIndividual, onOpen: onOpenIndividual, onClose: onCloseIndividual } = useDisclosure();
  const { isOpen: isOpenAll, onOpen: onOpenAll, onClose: onCloseAll } = useDisclosure();

  return (
    <section className="flex flex-col gap-5">
      <div className="relative">
        <div className="bg-gray-3 w-[10px] h-[10px] rounded-full border border-black absolute -left-[30px] top-4" />
        <div className="flex items-center justify-between">
          <h3 className="text-[26px] font-extralight">위원회 심사</h3>
          {committee_audit_list.length !== 0 && (
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-2">
                심의한 법안{' '}
                <span className="text-black">
                  {committee_audit_list.reduce((pre, cur) => pre + cur.bill_outline_dto_list.length, 0)}개
                </span>
              </p>
              <Button isIconOnly size="sm" className="w-4 h-4 p-0 bg-transparent" onClick={() => onOpenAll()}>
                <IconEnter />
              </Button>
              <TimelineModal isOpen={isOpenAll} onClose={onCloseAll}>
                <div className="flex flex-col gap-4">
                  {committee_audit_list.map(({ committee_name, bill_outline_dto_list }) => (
                    <div key={committee_name} className="flex flex-col gap-2">
                      <p className="text-sm font-bold">{committee_name}</p>
                      <div className="flex flex-col gap-3">
                        {bill_outline_dto_list.map(({ party_info, bill_id, bill_proposers, bill_brief_summary }) => (
                          <div key={bill_id} className="flex gap-[18px] items-center">
                            <Link
                              href={`/party/${party_info[0].party_id}`}
                              className={`flex items-center justify-center w-7 h-7 rounded-full shadow-lg shrink-0 border-1.5 ${party_info[0].party_name}`}>
                              <Image
                                src={process.env.NEXT_PUBLIC_IMAGE_URL + party_info[0].party_image_url}
                                alt={`${party_info[0].party_name} 로고 이미지`}
                                width={22}
                                height={22}
                              />
                            </Link>
                            <div className="flex flex-col gap-1">
                              <p className="text-xs font-bold">{bill_brief_summary}</p>
                              <p className="text-xs font-semibold text-gray-2">{bill_proposers}</p>
                            </div>
                          </div>
                        ))}
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
        <Card className="z-10">
          {committee_audit_list.length !== 0 && (
            <CardHeader className="pl-10">
              <p className="text-[22px] font-bold">{committee_audit_list[currentPage].committee_name}</p>
            </CardHeader>
          )}
          <CardBody>
            {committee_audit_list.length !== 0 ? (
              <div className="flex items-center justify-between">
                <Button
                  isIconOnly
                  size="sm"
                  className="p-0 bg-transparent"
                  onPress={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))}>
                  <IconPrev />
                </Button>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <p className="text-xs font-medium text-gray-2">
                      심사한 법안 <span className="text-black">{committee_audit_list[currentPage].bill_count}개</span>
                    </p>
                    <Button
                      isIconOnly
                      size="sm"
                      className="w-4 h-4 p-0 bg-transparent"
                      onClick={() => onOpenIndividual()}>
                      <IconEnter />
                    </Button>
                    <TimelineModal isOpen={isOpenIndividual} onClose={onCloseIndividual}>
                      <div className="flex flex-col gap-3">
                        {committee_audit_list[currentPage].bill_outline_dto_list.map(
                          ({ party_info, bill_id, bill_proposers, bill_brief_summary }) => (
                            <div key={bill_id} className="flex gap-[18px] items-center">
                              <Link
                                href={`/party/${party_info[0].party_id}`}
                                className={`flex items-center justify-center w-7 h-7 rounded-full shadow-lg shrink-0 border-1.5 ${party_info[0].party_name}`}>
                                <Image
                                  src={process.env.NEXT_PUBLIC_IMAGE_URL + party_info[0].party_image_url}
                                  alt={`${party_info[0].party_name} 로고 이미지`}
                                  width={22}
                                  height={22}
                                />
                              </Link>
                              <div className="flex flex-col gap-1">
                                <p className="text-xs font-bold">{bill_brief_summary}</p>
                                <p className="text-xs font-semibold text-gray-2">{bill_proposers}</p>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </TimelineModal>
                  </div>
                  <div className="flex flex-col gap-3">
                    {committee_audit_list[currentPage].bill_outline_dto_list
                      .slice(0, 5)
                      .map(({ party_info, bill_id, bill_proposers, bill_brief_summary }) => (
                        <div key={bill_id} className="flex gap-[18px] items-center">
                          <Link
                            href={`/party/${party_info[0].party_id}`}
                            className={`flex items-center justify-center w-7 h-7 rounded-full shadow-lg shrink-0 border-1.5 ${party_info[0].party_name}`}>
                            <Image
                              src={process.env.NEXT_PUBLIC_IMAGE_URL + party_info[0].party_image_url}
                              alt={`${party_info[0].party_name} 로고 이미지`}
                              width={22}
                              height={22}
                            />
                          </Link>
                          <div className="flex flex-col gap-1">
                            <p className="text-xs font-bold">{bill_brief_summary}</p>
                            <p className="text-xs font-semibold text-gray-2">{bill_proposers}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <Button
                  isIconOnly
                  size="sm"
                  className="p-0 bg-transparent"
                  onPress={() => setCurrentPage((prev) => (prev < committee_audit_list.length - 1 ? prev + 1 : prev))}>
                  <IconNext />
                </Button>
              </div>
            ) : (
              <p className="text-sm font-bold text-center">심사한 법안이 없습니다.</p>
            )}
          </CardBody>
        </Card>
        <Card className="w-[calc(100%-20px)] mx-auto -top-[14px] z-[5]">
          <CardBody />
        </Card>
        <Card className="w-[calc(100%-40px)] mx-auto -top-[28px]">
          <CardBody />
        </Card>
        {committee_audit_list.length !== 0 && (
          <div className="flex justify-center">
            <Pagination
              total={committee_audit_list.length}
              page={currentPage}
              onChange={setCurrentPage}
              siblings={20}
              classNames={{
                item: 'w-[6px] h-[6px] text-transparent bg-gray-1',
                cursor: 'bg-gray-3 text-transparent w-[6px] h-[6px]',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
