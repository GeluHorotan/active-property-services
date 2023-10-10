'use client';
import { cn } from '@lib/utils';
import { FC } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button as NextUIButton,
  useDisclosure,
} from '@nextui-org/react';
import ContentNotFound from './ContentNotFound';
interface IButton {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isContentNotFound?: boolean;
}

const Button: FC<IButton> = ({
  className,
  children,
  icon,

  isContentNotFound,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // This modal inside the button is temporary, it would be changed in the future.

  return (
    <>
      <button
        onClick={isContentNotFound ? onOpen : undefined}
        type="button"
        className={cn(
          'font-light  gap-[6px] text-[12px] text-custom_gray-700  border-[0.5px] py-[11.4px]   justify-center px-[9px] flex whitespace-nowrap border-custom_gray-700 rounded-xl',
          className
        )}
      >
        {children}
        {icon}
      </button>
      {isContentNotFound && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 items-center uppercase font-semibold tracking-wide">
                  Under development
                </ModalHeader>
                <ModalBody className="text-center">
                  <ContentNotFound>
                    Sorry, this area is under development, we&apos;re working on
                    it, please be patient.
                  </ContentNotFound>
                </ModalBody>
                <ModalFooter className=" self-center">
                  <NextUIButton
                    className="bg-custom_red-700 text-white"
                    disableRipple
                    onPress={onClose}
                  >
                    Close
                  </NextUIButton>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Button;
