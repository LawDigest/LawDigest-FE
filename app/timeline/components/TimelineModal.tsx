import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';

export default function TimelineModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-h-[70%]">
      <ModalContent>
        <ModalHeader>심사한 법안</ModalHeader>
        <ModalBody className="overflow-y-scroll">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
