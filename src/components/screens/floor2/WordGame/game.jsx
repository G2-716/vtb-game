import styled from "@emotion/styled";
import { useSizeRatio } from "../../../../contexts/SizeRatioContext";
import { TRIES_AMOUNT } from "./constants";

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: calc(50px * ${({$ratio}) => $ratio});
    margin-top: calc(59px * ${({$ratio}) => $ratio});
    --lineGap: calc(5px * ${({$ratio}) => $ratio});
    --cellHeight: calc(47px * ${({$ratio}) => $ratio});
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;

  & + & {
    margin-top: var(--lineGap);
  }
`;

const ButtonsWrapper = styled.div`
  --keyboardCellWidth: calc((100% - 22px) / 12);
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cell = styled.div`
    text-transform: uppercase;
    font-family: 'ComicSansMs';
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background}) => background ?? '#E9EFFC'};
    transition: background-color 0.3s ease-in;
    color: ${({$isInWord}) => $isInWord ? 'white' : '#4C6FCD'};

    & + div {
        margin-left: 2px;
    }
`;

const ButtonCell = styled(Cell)`
    padding: calc(8px * ${({$ratio}) => $ratio}) 0 calc(6px * ${({$ratio}) => $ratio});
    border-radius: calc(5px * ${({$ratio}) => $ratio});
    width: var(--keyboardCellWidth);
    cursor: pointer;
    
    p {
        touch-action: none;
        pointer-events: none;
        user-select: none;
        font-size: calc(18px * ${({$ratio}) => $ratio});
    }
`;

const CellStyled = styled(Cell)`
    overflow: hidden;
    height: calc(47px * ${({$ratio}) => $ratio});
    width: calc(45px * ${({$ratio}) => $ratio});
    font-weight: 700;
    border-radius: calc(9px * ${({$ratio}) => $ratio});
    flex-shrink: 0;
`;

const ActiveButtonCell = styled(ButtonCell)`
    width: calc((100% - var(--keyboardCellWidth) * 9) / 2);
    justify-content: center;
`;

const GameLines = styled.div`
    min-height: calc(var(--cellHeight) * ${TRIES_AMOUNT} + var(--lineGap) * ${TRIES_AMOUNT - 1});
`;

export const Game = ({ tries, onChooseLetter, onAcceptTry, onDelete, isDoneBtnActive, checkedLetters, isHiddenKeyboard }) => {
    const ratio = useSizeRatio();

    const keyboard = [
        ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ'],
        ['ф','ы','в','а','п','р','о','л','д','ж','э'],
        ['я','ч','с','м','и','т','ь','б','ю']
    ]

    return (
        <Content $ratio={ratio}>
                <GameLines $ratio={ratio}>
                    {tries.map((tr, ind) => (
                        <Line key={'line_' + ind} $ratio={ratio}>
                            {tr.map((cell, i) => (
                                <CellStyled 
                                    key={'cell_' + i}
                                    $ratio={ratio} 
                                    background={cell?.bg}
                                    $isInWord={cell?.bg && cell?.bg !== "#C5D5FF"}
                                >
                                    <p>{cell?.letter}</p>
                                </CellStyled>
                            ))}
                        </Line>
                    ))}
                </GameLines>
                {!isHiddenKeyboard && <ButtonsWrapper $ratio={ratio}>
                    {keyboard.map((tr, ind) => (
                        <Line key={'lineN_' + ind} $ratio={ratio}>
                            {ind === 2 && (
                                <ActiveButtonCell 
                                    $ratio={ratio} 
                                    background={isDoneBtnActive ? '#C5D5FF': "#E9EFFC"}  
                                    onClick={onAcceptTry}
                                >
                                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.84232 13.6436C5.69905 11.4876 8.09058 6.09188 8.5615 4.81529C8.81114 4.14012 9.05795 3.46211 9.30192 2.78126C9.63667 1.97559 9.99695 1.35432 10.3828 0.917439C10.6381 0.628079 10.9445 0.483398 11.3019 0.483398C11.6253 0.483398 11.909 0.596873 12.153 0.823822C12.3969 1.0451 12.5189 1.31744 12.5189 1.64084C12.5189 1.86779 12.4423 2.0919 12.2891 2.31318C11.9828 2.75573 11.7019 3.28906 11.4466 3.91317C11.4352 3.93586 11.2253 4.49756 10.8168 5.59827C10.3062 6.9089 7.81819 12.5543 6.80826 15.1755C6.54727 15.862 6.22671 16.5486 5.84657 17.2351C5.6026 17.6776 5.24799 17.8989 4.78274 17.8989C4.19267 17.8989 3.78133 17.6209 3.5487 17.0649C2.85651 15.4138 2.55302 14.923 1.70763 11.8138C1.47501 11.0479 1.23955 10.2819 1.00125 9.51598C0.683523 8.44932 0.524658 7.7089 0.524658 7.29471C0.524658 6.95996 0.64948 6.68195 0.899124 6.46067C1.13742 6.25642 1.41543 6.15429 1.73316 6.15429C2.27784 6.15429 2.65798 6.43798 2.87358 7.00535C2.98706 7.49897 3.10053 7.98974 3.21401 8.47769C3.40124 9.09045 3.67074 10.0096 4.02251 11.2351C4.46506 12.8578 4.42813 12.4011 4.84232 13.6436Z" fill="#4C6FCD"/>
                                    </svg>
                                </ActiveButtonCell>
                            )}
                            {tr.map((cell, i) => (
                                <ButtonCell 
                                    key={'cellN_' + i} 
                                    $ratio={ratio}
                                    onClick={() => onChooseLetter(cell)}
                                    background={checkedLetters[cell]}
                                    $isInWord={checkedLetters[cell] && checkedLetters[cell] !== "#C5D5FF"}
                                >
                                    <p>{cell}</p>
                                </ButtonCell>
                            ))}
                            {ind === 2 && (
                                <ActiveButtonCell 
                                    $ratio={ratio}
                                    background="#C5D5FF" 
                                    onClick={onDelete}
                                >
                                    <svg width="17" height="7" viewBox="0 0 17 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.7001 6.02811C3.23983 5.47875 2.75728 5.00363 2.25247 4.60275C1.7625 4.18701 1.24283 3.84552 0.693476 3.57827V2.6206C1.79219 2.0564 2.7944 1.23236 3.7001 0.148488H5.41499C5.25167 0.579066 5.05865 0.987373 4.83594 1.37341C4.62807 1.7446 4.40536 2.10094 4.1678 2.44243V3.75644C4.40536 4.06823 4.62807 4.41715 4.83594 4.80319C5.05865 5.17438 5.25167 5.58268 5.41499 6.02811H3.7001ZM4.03417 4.00142L4.05644 2.17518H16.2834V4.00142H4.03417Z" fill="#4C6FCD"/>
                                    </svg>
                                </ActiveButtonCell>
                            )}
                        </Line>
                    ))}
                </ButtonsWrapper>}
            </Content>
    );
};
