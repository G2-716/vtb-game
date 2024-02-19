import styled from "@emotion/styled";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { ArrowButton } from "../../shared/ArrowButton";

const Wrapper = styled.div`
    --ratio: ${({$ratio}) => $ratio};
    width: 100%;
    height: 100%;
    background: #F3F7FA;
    padding: calc(30px * ${({$ratio}) => $ratio}) calc(20px * ${({$ratio}) => $ratio});
`;

const PersonCard = styled.div`
    display: flex;
    align-items: flex-end;
    white-space: pre-line;
    
    & + & {
        margin-top: calc(15px * var(--ratio));
    }
`;

const PersonImage = styled.img`
    width: calc(123px * var(--ratio));
    height: calc(95px * var(--ratio));
    margin-right: calc(20px * var(--ratio));
    object-fit: contain;
`;

const Department = styled.p`
    font-size: calc(10px * var(--ratio));
`;

const Name = styled.p`
    font-size: calc(11px * var(--ratio));
    margin-bottom: calc(5px * var(--ratio));
`;

const ButtonArrowStyled = styled(ArrowButton)`
    position: absolute;
    bottom: calc(40px * var(--ratio));
    right: calc(15px * var(--ratio));
`;

export const PeopleScreen = ({people}) => {
    const ratio = useSizeRatio();
    const {next} = useProgress();

    return (
        <Wrapper $ratio={ratio}>
            {people.map(person => (
                <PersonCard key={person.id}>
                    <PersonImage src={person.image} alt=""/>
                    <div>
                        <Name>{person.name}</Name>
                        <Department>{person.department}</Department>
                    </div>
                </PersonCard>
            ))}
            <ButtonArrowStyled onClick={() => next()}/>
        </Wrapper>
    )
}