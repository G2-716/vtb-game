import styled from "@emotion/styled";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const ModalWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1000;
`;

const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 72.8%;
    padding: calc(20px * ${({$ratio}) => $ratio});
    border: 2px solid black;
    text-align: center;
    background: white;
`;

const Sign = styled.div`
    position: absolute;
    top: 0;
    right: calc(0px - 22px * ${({$ratio}) => $ratio});
`;

export const Modal = ({ className, children }) => {
    const ratio = useSizeRatio();

    return (
        <ModalWrapper>
            <ModalStyled className={className} $ratio={ratio}>
                {children}
                <Sign $ratio={ratio}>
                    <svg width="12" height="50" viewBox="0 0 12 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.86737 31.7641L9.86708 31.7728L9.86664 31.7814C9.79137 33.264 9.75472 34.3629 9.75472 35.0892C9.75472 36.1604 9.37052 37.1028 8.50444 37.7346C7.69706 38.3236 6.60765 38.5392 5.39623 38.5392C4.1848 38.5392 3.0954 38.3236 2.28801 37.7346C1.42193 37.1028 1.03773 36.1604 1.03773 35.0892V4.45003C1.03773 3.37879 1.42193 2.43643 2.28801 1.80463C3.0954 1.21564 4.1848 1 5.39623 1C6.60765 1 7.69706 1.21564 8.50444 1.80463C9.37052 2.43643 9.75472 3.37879 9.75472 4.45003C9.75472 7.10376 9.79237 11.0896 9.86782 16.4107H9.86783L9.86788 16.4154C9.9182 21.7199 9.9434 25.7062 9.9434 28.3722C9.9434 29.1238 9.91775 30.2571 9.86737 31.7641ZM9.49076 41.5473L9.49753 41.5517L9.50423 41.5563C10.3949 42.1596 11 43.0044 11 44.091C11 45.2736 10.2466 46.3486 9.2102 47.3C8.09091 48.3595 6.85291 49 5.50943 49C4.41483 49 3.41137 48.6981 2.53281 48.0843C1.62913 47.4889 1 46.6473 1 45.55C1 44.3887 1.73826 43.3221 2.74879 42.3716L2.74877 42.3715L2.75483 42.3659C3.89164 41.3141 5.12931 40.6685 6.45283 40.6685C7.56427 40.6685 8.5873 40.9564 9.49076 41.5473Z" fill="white" stroke="black" stroke-width="2"/>
                    </svg>
                </Sign>
            </ModalStyled>
        </ModalWrapper>
    );
    
}