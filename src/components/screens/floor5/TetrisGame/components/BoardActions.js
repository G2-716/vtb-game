import styled from "@emotion/styled";
import {useSizeRatio} from "../../../../../contexts/SizeRatioContext";
import {Button, BUTTON_SIZE} from "../../../../shared/Button";
import {Action} from "../utils/input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Line1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Line2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({sizeRatio}) => `calc(9px * ${sizeRatio})`};
`

const Line3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({sizeRatio}) => `calc(9px * ${sizeRatio})`};
`

const RotateButton = styled(Button)`
  width: ${({sizeRatio}) => `calc(59px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(32px * ${sizeRatio})`};
  padding: 0;
`

const LeftButton = styled(Button)`
  width: ${({sizeRatio}) => `calc(59px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(32px * ${sizeRatio})`};
  padding: 0;
`

const RightButton = styled(Button)`
  width: ${({sizeRatio}) => `calc(59px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(32px * ${sizeRatio})`};
  margin-left: ${({sizeRatio}) => `calc(52px * ${sizeRatio})`};
  padding: 0;
`

const DownButton = styled(Button)`
  width: ${({sizeRatio}) => `calc(59px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(32px * ${sizeRatio})`};
  padding: 0;
`

const RotateIcon = styled.svg`
  width: ${({sizeRatio}) => `calc(25px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(24px * ${sizeRatio})`};
`

const LeftIcon = styled.svg`
  width: ${({sizeRatio}) => `calc(20px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(13px * ${sizeRatio})`};
`

const RightIcon = styled.svg`
  width: ${({sizeRatio}) => `calc(20px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(13px * ${sizeRatio})`};
`

const DownIcon = styled.svg`
  width: ${({sizeRatio}) => `calc(20px * ${sizeRatio})`};
  height: ${({sizeRatio}) => `calc(16px * ${sizeRatio})`};
`

export const BoardActions = ({ className, onInput }) => {
  const sizeRatio = useSizeRatio()

  return (
    <Wrapper className={className} sizeRatio={sizeRatio}>
      <Line1 sizeRatio={sizeRatio}>
        <RotateButton size={BUTTON_SIZE.sm} sizeRatio={sizeRatio} onClick={() => onInput?.(Action.Rotate)}>
          <RotateIcon sizeRatio={sizeRatio} viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.2185 1.94753L20.9623 11.9711L28.2711 4.58315L18.2185 1.94753ZM10.9015 19.9913L8.15771 9.96775L0.848925 17.3557L10.9015 19.9913ZM14.8039 21.3694C20.672 21.3694 25.46 16.7024 25.46 10.9075H23.66C23.66 15.6744 19.7121 19.5694 14.8039 19.5694V21.3694ZM25.46 10.9075C25.46 9.65307 25.2347 8.4485 24.8212 7.33192L23.1332 7.95709C23.4739 8.87696 23.66 9.87004 23.66 10.9075H25.46ZM14.3161 0.569421C8.44804 0.569421 3.66 5.23643 3.66 11.0314H5.46C5.46 6.26448 9.40787 2.36942 14.3161 2.36942V0.569421ZM3.66 11.0314C3.66 12.2858 3.88526 13.4903 4.29881 14.6069L5.98676 13.9818C5.64606 13.0619 5.46 12.0688 5.46 11.0314H3.66Z"
                fill="white"/>
          </RotateIcon>
        </RotateButton>
      </Line1>
      <Line2 sizeRatio={sizeRatio}>
        <LeftButton size={BUTTON_SIZE.sm} sizeRatio={sizeRatio} onClick={() => onInput?.(Action.Left)}>
          <LeftIcon sizeRatio={sizeRatio} viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.91427 0.187848L10.5714 0.187848L5.99998 4.75926L19.0612 4.75926L19.0612 7.89394L5.99998 7.89394L10.5714 12.4654L6.91427 12.4654L0.775514 6.3266L6.91427 0.187848Z"
                fill="white"/>
          </LeftIcon>
        </LeftButton>
        <RightButton size={BUTTON_SIZE.sm} sizeRatio={sizeRatio} onClick={() => onInput?.(Action.Right)}>
          <RightIcon sizeRatio={sizeRatio} viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.208 12.751L8.55092 12.751L13.1223 8.17958L0.0611568 8.17958L0.0611569 5.0449L13.1223 5.0449L8.55092 0.47349L12.208 0.473491L18.3468 6.61224L12.208 12.751Z"
                fill="white"/>
          </RightIcon>
        </RightButton>
      </Line2>
      <Line3 sizeRatio={sizeRatio}>
        <DownButton size={BUTTON_SIZE.sm} sizeRatio={sizeRatio} onClick={() => onInput?.(Action.SlowDrop)}>
          <DownIcon sizeRatio={sizeRatio} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.7671 7.21621L20.5863 -0.00012207H0.533691L8.35294 7.21621H0.533691L10.56 16.4694L20.5863 7.21621H12.7671Z"
                  fill="white"/>
          </DownIcon>
        </DownButton>
      </Line3>
    </Wrapper>
  );
};
