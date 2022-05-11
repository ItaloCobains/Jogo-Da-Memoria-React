import * as C from './styles';

type Props = {
    label: string,
    value: string
}

export const InfoItem = ({ label, value }: Props) => {
    return(
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.value>{value}</C.value>
        </C.Container>
    );
}